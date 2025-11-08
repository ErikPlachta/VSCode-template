/**
 * @packageDocumentation Entry point for MyBusiness MCP VS Code extension.
 *
 * @module extension
 */
import * as vscode from "vscode";
import * as path from "path";
import { Orchestrator } from "@agent/orchestrator";
import { startMCPServer, stopMCPServer } from "@server/embedded";
import { fetchTools, MCPTool } from "@extension/mcpSync";
import { registerMcpProvider } from "@extension/mcpProvider";

/**
 * Activates the extension, registering the chat participant.
 *
 * @param {vscode.ExtensionContext} context - context parameter.
 * @returns {Promise<void>} - TODO: describe return value.
 */
export async function activate(
  context: vscode.ExtensionContext
): Promise<void> {
  const cfg = vscode.workspace.getConfiguration("mybusinessMCP");
  let serverUrl = cfg.get<string>("serverUrl") ?? "";
  const token = cfg.get<string>("token") ?? "";
  const orchestrator = new Orchestrator();

  // Start embedded MCP server if no external server URL is configured
  const port = cfg.get<number>("port") ?? 39200;
  const includeAuthHeader = cfg.get<boolean>("includeAuthHeader") ?? false;

  if (!serverUrl) {
    try {
      serverUrl = await startMCPServer(port);
      vscode.window.showInformationMessage(
        `Started embedded MCP server at ${serverUrl}`
      );

      // Register cleanup when extension is deactivated
      context.subscriptions.push({
        dispose: async () => {
          await stopMCPServer();
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      vscode.window.showErrorMessage(
        `Failed to start embedded MCP server: ${message}`
      );
      return;
    }
  }

  try {
    // Register provider for VS Code MCP discovery instead of editing mcp.json
    registerMcpProvider(serverUrl, token, includeAuthHeader, context);

    const tools: MCPTool[] = await fetchTools(serverUrl, token);

    // Create a proper chat request handler
    const chatHandler: vscode.ChatRequestHandler = /**
 * chatHandler function.
 *
 * @param {vscode.ChatRequest} request - request parameter.
 * @param {vscode.ChatContext} _context - _context parameter.
 * @param {vscode.ChatResponseStream} stream - stream parameter.
 * @param {vscode.CancellationToken} _cancellationToken - _cancellationToken parameter.
 * @returns {unknown} - TODO: describe return value.
 */
async (
      request: vscode.ChatRequest,
      _context: vscode.ChatContext,
      stream: vscode.ChatResponseStream,
      _cancellationToken: vscode.CancellationToken // TODO: use this token to cancel long-running operations
    ) => {
      try {
        stream.markdown(`Processing your request: "${request.prompt}"\n\n`);

        // Use the orchestrator to handle the request
        const response = await orchestrator.handle({
          question: request.prompt,
          topic: "general",
        });

        stream.markdown(`${response.markdown}\n\n`);

        if (response.summary) {
          stream.markdown(`**Summary:** ${response.summary}\n\n`);
        }

        if (response.rationale) {
          stream.markdown(`**Rationale:** ${response.rationale}\n\n`);
        }

        stream.markdown(`*Agent Used: ${response.agent}*\n`);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        stream.markdown(`❌ **Error:** ${message}`);
      }
    };

    // Create the chat participant with the new API
    const chatParticipant = vscode.chat.createChatParticipant(
      "MyBusinessMCP",
      chatHandler
    );

    // Set an icon if available
    try {
      chatParticipant.iconPath = vscode.Uri.file(
        path.join(__dirname, "..", "..", "bin", "data", "icon.png")
      );
    } catch {
      // Icon is optional
    }

    context.subscriptions.push(chatParticipant);

    // Register the manual tool invocation command
    const toolCommand = vscode.commands.registerCommand(
      "mybusinessMCP.invokeTool",
      async () => {
        if (!tools.length) {
          vscode.window.showErrorMessage("No MCP tools are available.");
          return;
        }

        const toolPick = await vscode.window.showQuickPick(
          tools.map((tool) => ({
            label: tool.name,
            description: tool.description,
            tool,
          })),
          {
            title: "Select a tool to invoke",
            placeHolder: "Choose from available MCP tools",
            ignoreFocusOut: true,
          }
        );

        if (!toolPick) {
          return;
        }

        vscode.window.showInformationMessage(
          `Selected tool: ${toolPick.tool.name}`
        );
      }
    );

    context.subscriptions.push(toolCommand);

    vscode.window.showInformationMessage(
      `Loaded ${tools.length} MCP tools. Use @mybusiness in Copilot Chat!`
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    vscode.window.showErrorMessage(`MCP Extension failed to start: ${message}`);
  }
}

/**
 * Deactivates the extension.
 *
 */
export function deactivate(): void {}
