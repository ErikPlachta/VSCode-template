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
  console.log("🚀 MyBusiness MCP Extension: Starting activation...");

  const cfg = vscode.workspace.getConfiguration("mybusinessMCP");
  let serverUrl = cfg.get<string>("serverUrl") ?? "";
  const token = cfg.get<string>("token") ?? "";
  const orchestrator = new Orchestrator();

  console.log(
    `📋 Configuration loaded - serverUrl: ${
      serverUrl || "(embedded)"
    }, token: ${token ? "***" : "(none)"}`
  );

  // Start embedded MCP server if no external server URL is configured
  const port = cfg.get<number>("port") ?? 39200;
  const includeAuthHeader = cfg.get<boolean>("includeAuthHeader") ?? false;

  if (!serverUrl) {
    console.log(`🔧 Starting embedded MCP server on port ${port}...`);
    try {
      serverUrl = await startMCPServer(port);
      const actualPort = serverUrl.split(":").pop();
      console.log(
        `✅ Embedded MCP server started successfully at ${serverUrl}`
      );
      vscode.window.showInformationMessage(
        `✅ MyBusiness MCP Server running on port ${actualPort}`
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
      // If preferred port is busy, retry with ephemeral port
      // Narrow known NodeJS error code shape without using 'any'
      const code = (error as Partial<{ code: string }> | undefined)?.code as
        | string
        | undefined;
      const msg = error instanceof Error ? error.message : String(error);
      console.error(`❌ Failed to start server on port ${port}:`, msg);
      if (code === "EADDRINUSE" || /EADDRINUSE/i.test(msg)) {
        console.log(`⚠️ Port ${port} in use, retrying with ephemeral port...`);
        try {
          serverUrl = await startMCPServer(undefined);
          const actualPort = serverUrl.split(":").pop();
          console.log(`✅ Started on ephemeral port: ${serverUrl}`);
          vscode.window.showWarningMessage(
            `⚠️ Port ${port} was busy. MyBusiness MCP Server running on port ${actualPort}`
          );

          context.subscriptions.push({
            /**
             * Dispose handler to stop embedded MCP server when extension unloads.
             *
             * @returns {Promise<void>} resolves when server has stopped
             */
            dispose: async () => {
              await stopMCPServer();
            },
          });
        } catch (retryError) {
          const retryMsg =
            retryError instanceof Error
              ? retryError.message
              : String(retryError);
          console.error(`❌ Failed on ephemeral port too:`, retryMsg);
          vscode.window.showErrorMessage(
            `❌ Failed to start MyBusiness MCP server: ${retryMsg}`
          );
          return;
        }
      } else {
        console.error(`❌ Server startup failed:`, msg);
        vscode.window.showErrorMessage(
          `❌ Failed to start MyBusiness MCP server: ${msg}`
        );
        return;
      }
    }
  }

  // Always register provider and chat participant; tool discovery can fail independently
  console.log(`🔌 Registering MCP provider with serverUrl: ${serverUrl}`);
  let tools: MCPTool[] = [];
  try {
    registerMcpProvider(serverUrl, token, includeAuthHeader, context);
    console.log(`✅ MCP provider registered`);

    console.log(`🔍 Fetching tools from ${serverUrl}...`);
    tools = await fetchTools(serverUrl, token);
    console.log(
      `✅ Fetched ${tools.length} tools:`,
      tools.map((t) => t.name).join(", ")
    );
  } catch (toolError) {
    const msg =
      toolError instanceof Error ? toolError.message : String(toolError);
    console.error(`⚠️ Tool fetch failed:`, msg);
    vscode.window.showWarningMessage(
      `⚠️ MCP tools could not be fetched: ${msg}. Chat participant will still activate.`
    );
  }

  // Create a proper chat request handler
  console.log(`💬 Registering chat participant "MybusinessMCP"...`);
  /**
   * Process a Copilot Chat request using the orchestrator.
   *
   * @param {vscode.ChatRequest} request - Incoming chat message payload.
   * @param {vscode.ChatContext} _context - Conversation context (currently unused).
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
    "MybusinessMCP",
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
  console.log(`✅ Chat participant "MybusinessMCP" registered successfully`);

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

  // Register MCP server management commands
  const registerServerCommand = vscode.commands.registerCommand(
    "mybusinessMCP.registerServer",
    async () => {
      console.log(`🔄 Manual MCP server registration triggered...`);
      try {
        vscode.window.showInformationMessage(
          `🔄 Registering MyBusiness MCP Server...`
        );

        // The MCP provider is already registered during activation,
        // but we can trigger a refresh by firing the event
        // Re-register to ensure it's active
        registerMcpProvider(serverUrl, token, includeAuthHeader, context);

        vscode.window.showInformationMessage(
          `✅ MyBusiness MCP Server registered! Server: ${serverUrl}`
        );
        console.log(`✅ Manual registration complete`);
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        console.error(`❌ Manual registration failed:`, msg);
        vscode.window.showErrorMessage(
          `❌ Failed to register MCP server: ${msg}`
        );
      }
    }
  );

  const unregisterServerCommand = vscode.commands.registerCommand(
    "mybusinessMCP.unregisterServer",
    async () => {
      console.log(`🔄 Manual MCP server unregistration triggered...`);
      vscode.window.showInformationMessage(
        `⚠️ MCP server will be unregistered when extension is deactivated/reloaded`
      );
    }
  );

  context.subscriptions.push(
    toolCommand,
    registerServerCommand,
    unregisterServerCommand
  );

  if (tools.length) {
    console.log(`✅ Successfully loaded ${tools.length} MCP tools`);
    vscode.window.showInformationMessage(
      `✅ MyBusiness MCP ready! Loaded ${tools.length} tools. Use @mybusiness in Copilot Chat!`
    );
  } else {
    console.warn(`⚠️ No MCP tools were loaded`);
    vscode.window.showWarningMessage(
      `⚠️ MyBusiness MCP activated but no tools loaded. Check server connection.`
    );
  }

  console.log(`🎉 MyBusiness MCP Extension activation complete!`);
  console.log(`   📍 Server: ${serverUrl}`);
  console.log(`   🔧 Tools: ${tools.length}`);
  console.log(`   💬 Participant: @mybusiness`);
}

/**
 * Deactivate the extension.
 * Currently a no-op because embedded server shutdown is handled via subscription dispose.
 */
export function deactivate(): void {
  console.log("👋 MyBusiness MCP Extension: Deactivating...");
  // Intentionally empty; resources cleaned up by disposables registered on activation.
}
