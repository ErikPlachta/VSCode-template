/**
 * @fileoverview Entry point for MyBusiness MCP VS Code extension.
 *
 * @module extension
 */
import * as vscode from "vscode";
import { Orchestrator, OrchestratorResponse } from "../agents/orchestrator";
import { listLocalTools, invokeLocalTool, LocalToolError } from "../mcp/localToolRegistry";
import { MCPTool } from "../shared/mcpTypes";
import { ensureCacheDirectory, logInvocation, pruneCache, ToolLogEntry } from "./mcpCache";
import { promptForArgs } from "./schemaPrompt";

/** Maximum number of historical entries to retain per tool. */
const HISTORY_LIMIT = 10;

/**
 * Aggregate information about a tool invocation for UI and logging.
 *
 * @typedef {object} InvocationResult
 * @property {vscode.MarkdownString} markdown Markdown content returned to the chat UI.
 * @property {string} summary Concise summary of the invocation result.
 * @property {string} [error] Error message when the invocation failed.
 * @property {unknown} [result] Raw tool payload when available.
 */
interface InvocationResult {
  markdown: vscode.MarkdownString;
  summary: string;
  error?: string;
  result?: unknown;
}

/**
 * Build a Markdown-based chat response from the tool output.
 *
 * @param {MCPTool} tool Tool metadata describing how to render the result.
 * @param {unknown} result Raw result payload returned by the tool implementation.
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

function renderOrchestration(response: OrchestratorResponse): vscode.MarkdownString {
  const markdown = new vscode.MarkdownString(undefined, true);
  markdown.isTrusted = true;
  markdown.appendMarkdown(`${response.markdown}\n\n---\n_Orchestrated via ${response.agent}_`);
  return markdown;
}

function parseMentionMessage(message: string): {
  topic?: string;
  criteria?: Record<string, unknown>;
  question: string;
  error?: string;
} {
  const parts = message
    .split("::")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  if (parts.length === 0) {
    return { question: "", error: "No question provided." };
  }

  if (parts.length === 1) {
    return { question: parts[0] };
  }

  if (parts.length === 2) {
    return { topic: parts[0], question: parts[1] };
  }

  const [topic, rawCriteria, ...rest] = parts;
  let criteria: Record<string, unknown> | undefined;
  if (rawCriteria) {
    try {
      criteria = JSON.parse(rawCriteria);
    } catch (error) {
      return { topic, question: rest.join("::"), error: `Unable to parse criteria JSON: ${(error as Error).message}` };
    }
  }
  return { topic, question: rest.join("::"), criteria };
}

/**
 * Invoke the MCP backend and transform the result into a VS Code chat response.
 *
 * @param {MCPTool} tool Tool metadata describing the invocation target.
 * @param {Record<string, unknown>} args Arguments supplied by the user.
 * @param {string} cacheDir Directory where invocation logs should be written.
 * @param {Map<string, string[]>} history Map used to maintain conversation context for follow-up calls.
 * @returns {Promise<InvocationResult>} Structured result containing markdown output and metadata.
 * @example
 * ```ts
 * const result = await invokeTool(tool, {}, cacheDir, new Map());
 * console.log(result.summary);
 * ```
 */
async function invokeTool(
  tool: MCPTool,
  args: Record<string, unknown>,
  cacheDir: string,
  history: Map<string, string[]>
): Promise<InvocationResult> {
  const contextMessages = history.get(tool.name) ?? [];
  const logEntry: ToolLogEntry = {
    timestamp: new Date().toISOString(),
    toolName: tool.name,
    args,
    context: contextMessages
  };

  try {
    const content = await invokeLocalTool(tool.name, args);
    logEntry.result = content;
    const summary = summariseResult(content);
    updateHistory(
      history,
      tool,
      `Args: ${JSON.stringify(args)}\nResult: ${summary}`
    );

    return {
      markdown: buildMarkdownResponse(tool, content),
      summary,
      result: content
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
  const retentionDays = cfg.get<number>("cacheRetention") ?? 30;
  const conversationHistory = new Map<string, string[]>();
  const orchestrator = new Orchestrator();

  let cacheDir = "";
  try {
    cacheDir = await ensureCacheDirectory();
    await pruneCache(cacheDir, retentionDays);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    vscode.window.showErrorMessage(
      `Unable to initialise the local MCP cache directory: ${message}`
    );
  }

  try {
    const tools: MCPTool[] = await listLocalTools();
    const chat = vscode.chat.createChatParticipantExtensionApi("MyBusinessMCP");
    const disposables: vscode.Disposable[] = [];

    const orchestratorCommand = chat.registerChatCommand("/relevant-data", {
      title: "Relevant data orchestrator",
      description: "Route questions across local agents using orchestration heuristics.",
      handler: async () => {
        const categories = orchestrator.listCategories();
        const categoryPick = await vscode.window.showQuickPick(
          categories.map((category) => ({
            label: category.name,
            description: category.description,
            id: category.id
          })),
          {
            title: "Select the category to analyse",
            placeHolder: "Choose a category such as People or Departments",
            ignoreFocusOut: true
          }
        );
        if (!categoryPick) {
          const cancelled = new vscode.MarkdownString("_Invocation cancelled._");
          cancelled.isTrusted = true;
          return cancelled;
        }

        const question = await vscode.window.showInputBox({
          prompt: "What question do you want the orchestrator to solve?",
          placeHolder: "e.g. Summarise schemas or list people with python skills",
          ignoreFocusOut: true
        });
        if (!question) {
          const cancelled = new vscode.MarkdownString("_Invocation cancelled._");
          cancelled.isTrusted = true;
          return cancelled;
        }

        const classification = orchestrator.classify(question, { topic: categoryPick.id });
        let criteria: Record<string, unknown> | undefined;
        if (classification.intent === "records") {
          const criteriaInput = await vscode.window.showInputBox({
            prompt: "Optional JSON criteria for the database query",
            placeHolder: '{"skill": "python"}',
            ignoreFocusOut: true
          });
          if (criteriaInput) {
            try {
              criteria = JSON.parse(criteriaInput);
            } catch (error) {
              const message = error instanceof Error ? error.message : String(error);
              const markdown = new vscode.MarkdownString(`**Error:** Unable to parse criteria: ${message}`);
              markdown.isTrusted = true;
              return markdown;
            }
          }
        }

        const response = await orchestrator.handle({
          topic: categoryPick.id,
          question,
          criteria
        });
        return renderOrchestration(response);
      }
    });

    const orchestratorMention = chat.registerChatMention("@relevant-data", {
      title: "Relevant data orchestrator",
      description: "Use 'topic::question' or 'topic::{}::question' to provide context.",
      handler: async (message: string) => {
        const parsed = parseMentionMessage(message);
        if (parsed.error) {
          const markdown = new vscode.MarkdownString(`**Error:** ${parsed.error}`);
          markdown.isTrusted = true;
          return markdown;
        }
        const { topic, question, criteria } = parsed;
        const response = await orchestrator.handle({ topic, question, criteria });
        return renderOrchestration(response);
      }
    });

    disposables.push(orchestratorCommand, orchestratorMention);

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
      `Loaded ${tools.length} local MCP tools.`
    );
  } catch (error) {
    const message =
      error instanceof LocalToolError
        ? error.message
        : error instanceof Error
          ? error.message
          : String(error);
    vscode.window.showErrorMessage(`Failed to load local MCP tools: ${message}`);
  }
}

/**
 * Deactivates the extension.
 *
 * @returns {void}
 */
export function deactivate(): void {}
