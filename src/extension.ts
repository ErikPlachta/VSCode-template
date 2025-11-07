/**
 * @fileoverview Entry point for MyBusiness MCP VS Code extension.
 *
 * @module extension
 */
import * as vscode from "vscode";
import { ensureCacheDirectory, logInvocation, ToolLogEntry } from "./mcpCache";
import { fetchTools, MCPDiscoveryError, MCPTool } from "./mcpSync";
import { promptForArgs } from "./schemaPrompt";

/** Maximum number of historical entries to retain per tool. */
const HISTORY_LIMIT = 10;

/**
 * JSON-RPC response returned after invoking an MCP tool.
 *
 * @typedef {object} MCPInvokeToolResponse
 * @property {string} jsonrpc JSON-RPC version string.
 * @property {number | string} id Request identifier.
 * @property {{content?: unknown, metadata?: Record<string, unknown>}} [result] Successful result payload.
 * @property {{code?: number, message?: string, data?: unknown}} [error] Error payload returned by the server.
 */
interface MCPInvokeToolResponse {
  jsonrpc: string;
  id: number | string;
  result?: {
    content?: unknown;
    metadata?: Record<string, unknown>;
  };
  error?: {
    code?: number;
    message?: string;
    data?: unknown;
  };
}

/**
 * Aggregate information about a tool invocation for UI and logging.
 *
 * @typedef {object} InvocationResult
 * @property {vscode.MarkdownString} markdown Markdown content returned to the chat UI.
 * @property {string} summary Concise summary of the invocation result.
 * @property {string} [error] Error message when the invocation failed.
 * @property {MCPInvokeToolResponse} [rawResponse] Raw MCP response when available.
 */
interface InvocationResult {
  markdown: vscode.MarkdownString;
  summary: string;
  error?: string;
  rawResponse?: MCPInvokeToolResponse;
}

/**
 * Build a Markdown-based chat response from the tool output.
 *
 * @param {MCPTool} tool Tool metadata describing how to render the result.
 * @param {unknown} result Raw result payload returned by the MCP server.
 * @returns {vscode.MarkdownString} Markdown string ready for VS Code chat surfaces.
 */
function buildMarkdownResponse(tool: MCPTool, result: unknown): vscode.MarkdownString {
  const markdown = new vscode.MarkdownString(undefined, true);
  markdown.isTrusted = true;
  markdown.appendMarkdown(`### ${tool.title}\n`);
  if (tool.tags?.length) {
    markdown.appendMarkdown(`Tags: ${tool.tags.map((tag) => `\`${tag}\``).join(" ")}\n\n`);
  }
  markdown.appendMarkdown(`${tool.description}\n\n`);
  if (typeof result === "string") {
    markdown.appendMarkdown(result);
  } else {
    markdown.appendCodeblock(JSON.stringify(result, null, 2), "json");
  }
  return markdown;
}

/**
 * Extract the human-consumable content from an MCP response payload.
 *
 * @param {MCPInvokeToolResponse} data JSON-RPC response payload.
 * @returns {unknown} Content suitable for rendering or summarising.
 */
function extractContent(data: MCPInvokeToolResponse): unknown {
  if (Array.isArray(data.result?.content)) {
    return data.result?.content
      .map((entry) => {
        if (typeof entry === "string") {
          return entry;
        }
        if (entry && typeof entry === "object" && "text" in entry) {
          return String((entry as { text?: unknown }).text ?? "");
        }
        return JSON.stringify(entry);
      })
      .join("\n\n");
  }
  if (data.result?.content !== undefined) {
    return data.result.content;
  }
  if (data.result) {
    return data.result;
  }
  return "No response";
}

/**
 * Turn a result payload into a concise summary for context storage.
 *
 * @param {unknown} result Raw result payload to summarise.
 * @returns {string} Condensed string representation with a 500 character limit.
 */
function summariseResult(result: unknown): string {
  const raw = typeof result === "string" ? result : JSON.stringify(result);
  return raw.length > 500 ? `${raw.slice(0, 497)}...` : raw;
}

/**
 * Maintain a rolling conversation history for each tool.
 *
 * @param {Map<string, string[]>} history Map keyed by tool name containing ordered history entries.
 * @param {MCPTool} tool Tool whose history should be updated.
 * @param {string} entry Text describing the latest invocation or error.
 * @returns {string[]} Updated history array for the tool.
 */
function updateHistory(
  history: Map<string, string[]>,
  tool: MCPTool,
  entry: string
): string[] {
  const existing = history.get(tool.name) ?? [];
  existing.push(entry);
  while (existing.length > HISTORY_LIMIT) {
    existing.shift();
  }
  history.set(tool.name, existing);
  return existing;
}

/**
 * Invoke the MCP backend and transform the result into a VS Code chat response.
 *
 * @param {MCPTool} tool Tool metadata describing the invocation target.
 * @param {Record<string, unknown>} args Arguments supplied by the user.
 * @param {string} serverUrl URL of the MCP server.
 * @param {string | undefined} token Optional bearer token for authentication.
 * @param {string} cacheDir Directory where invocation logs should be written.
 * @param {Map<string, string[]>} history Map used to maintain conversation context for follow-up calls.
 * @returns {Promise<InvocationResult>} Structured result containing markdown output and metadata.
 * @example
 * ```ts
 * const result = await invokeTool(tool, {}, "https://mcp.example.com", undefined, cacheDir, new Map());
 * console.log(result.summary);
 * ```
 */
async function invokeTool(
  tool: MCPTool,
  args: Record<string, unknown>,
  serverUrl: string,
  token: string | undefined,
  cacheDir: string,
  history: Map<string, string[]>
): Promise<InvocationResult> {
  const contextMessages = history.get(tool.name) ?? [];
  const payload = {
    jsonrpc: "2.0",
    id: Date.now(),
    method: "invokeTool",
    params: {
      name: tool.name,
      arguments: args,
      context: contextMessages
    }
  };

  const logEntry: ToolLogEntry = {
    timestamp: new Date().toISOString(),
    toolName: tool.name,
    args,
    context: contextMessages
  };

  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as MCPInvokeToolResponse;
    logEntry.response = data;

    if (data.error) {
      const message = data.error.message ?? "Unknown MCP error.";
      throw new Error(message);
    }

    const content = extractContent(data);
    const summary = summariseResult(content);
    updateHistory(
      history,
      tool,
      `Args: ${JSON.stringify(args)}\nResult: ${summary}`
    );

    return {
      markdown: buildMarkdownResponse(tool, content),
      summary,
      rawResponse: data
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    updateHistory(history, tool, `Error: ${message}`);
    logEntry.error = message;
    const errorMarkdown = new vscode.MarkdownString(`**Error:** ${message}`);
    errorMarkdown.isTrusted = true;
    return {
      markdown: errorMarkdown,
      summary: message,
      error: message
    };
  } finally {
    if (cacheDir) {
      try {
        await logInvocation(cacheDir, logEntry);
      } catch (logError) {
        console.warn("Unable to persist MCP log entry", logError);
      }
    }
  }
}

/**
 * Activates the extension, registering MCP slash commands, mentions, and
 * automation hooks.
 *
 * @param {vscode.ExtensionContext} context VS Code extension context for managing subscriptions.
 * @returns {Promise<void>} Resolves once activation completes.
 * @example
 * ```ts
 * export async function activate(ctx: vscode.ExtensionContext) {
 *   await activate(ctx);
 * }
 * ```
 */
export async function activate(context: vscode.ExtensionContext): Promise<void> {
  const cfg = vscode.workspace.getConfiguration("mybusinessMCP");
  const serverUrl = cfg.get<string>("serverUrl") ?? "";
  const token = cfg.get<string>("token") ?? "";
  const conversationHistory = new Map<string, string[]>();

  let cacheDir = "";
  try {
    cacheDir = await ensureCacheDirectory();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    vscode.window.showErrorMessage(
      `Unable to initialise the local MCP cache directory: ${message}`
    );
  }

  try {
    const tools: MCPTool[] = await fetchTools(serverUrl, token);
    const chat = vscode.chat.createChatParticipantExtensionApi("MyBusinessMCP");
    const disposables: vscode.Disposable[] = [];

    for (const tool of tools) {
      const slash = `/${tool.name}`;
      const mention = `@${tool.name}`;

      const commandDisposable = chat.registerChatCommand(slash, {
        title: tool.title,
        description: tool.summary ?? tool.description,
        handler: async () => {
          const args = await promptForArgs(tool);
          if (args === undefined) {
            const cancelled = new vscode.MarkdownString("_Invocation cancelled._");
            cancelled.isTrusted = true;
            return cancelled;
          }
          const result = await invokeTool(
            tool,
            args,
            serverUrl,
            token,
            cacheDir,
            conversationHistory
          );
          return result.markdown;
        }
      });

      const mentionDisposable = chat.registerChatMention(mention, {
        title: tool.title,
        description: tool.summary ?? tool.description,
        handler: async (message: string) => {
          const args = { query: message };
          const result = await invokeTool(
            tool,
            args,
            serverUrl,
            token,
            cacheDir,
            conversationHistory
          );
          return result.markdown;
        }
      });

      disposables.push(commandDisposable, mentionDisposable);
    }

    const automationDisposable = vscode.commands.registerCommand(
      "mybusinessMCP.invokeTool",
      async () => {
        const selected = await vscode.window.showQuickPick(
          tools.map((tool) => ({
            label: tool.title,
            description: tool.summary ?? tool.description,
            tool
          })),
          {
            title: "Invoke MCP Tool",
            placeHolder: "Select the tool to run",
            ignoreFocusOut: true
          }
        );
        if (!selected) {
          return;
        }
        const args = await promptForArgs(selected.tool);
        if (args === undefined) {
          vscode.window.showInformationMessage("Tool invocation cancelled.");
          return;
        }
        const result = await invokeTool(
          selected.tool,
          args,
          serverUrl,
          token,
          cacheDir,
          conversationHistory
        );
        if (result.error) {
          vscode.window.showErrorMessage(result.summary);
        } else {
          vscode.window.showInformationMessage(result.summary);
        }
      }
    );

    context.subscriptions.push(...disposables, automationDisposable);

    vscode.window.showInformationMessage(
      `Loaded ${tools.length} MCP tools from ${serverUrl}.`
    );
  } catch (error) {
    const message =
      error instanceof MCPDiscoveryError
        ? error.message
        : error instanceof Error
          ? error.message
          : String(error);
    vscode.window.showErrorMessage(`MCP Sync failed: ${message}`);
  }
}

/**
 * Deactivates the extension.
 *
 * @returns {void}
 */
export function deactivate(): void {}
