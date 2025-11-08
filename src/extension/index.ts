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
 * Activate the MyBusiness MCP extension.
 *
 * Responsibilities:
 * - Optionally start the embedded MCP server (when no external serverUrl is configured).
 * - Register the MCP provider for server discovery.
 * - Register the chat participant that routes user prompts through the orchestrator.
 * - Expose a command for manual tool invocation.
 *
 * @param {vscode.ExtensionContext} context - VS Code extension lifecycle context used for disposables.
 * @returns {Promise<void>} Resolves when activation sequence has completed (server started, participant registered).
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
        /**
         * Dispose handler to stop embedded MCP server when extension unloads.
         *
         * @returns {Promise<void>} Resolves when server has stopped.
         */
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
    /**
     * Process a Copilot Chat request using the orchestrator.
     *
     * @param {vscode.ChatRequest} request - Incoming chat message payload.
     * @param {vscode.ChatContext} _context - Conversation context (unused currently).
     * @param {vscode.ChatResponseStream} stream - Streaming interface for incremental markdown responses.
     * @param {vscode.CancellationToken} _cancellationToken - Cancellation token for long-running operations.
     * @returns {Promise<void>} Resolves when response has been fully streamed.
     */
    const chatHandler: vscode.ChatRequestHandler = async (
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
 * Deactivate the extension.
 * Currently a no-op because embedded server shutdown is handled via subscription dispose.
 */
export function deactivate(): void {
  // Intentionally empty; resources cleaned up by disposables registered on activation.
}
