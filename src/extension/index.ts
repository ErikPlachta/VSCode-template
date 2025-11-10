/**
 * @packageDocumentation Entry point for MyBusiness MCP VS Code extension.
 *
 * @module extension
 */
import * as vscode from "vscode";
import * as path from "path";
import { promises as fsPromises, existsSync } from "fs";
import { Orchestrator } from "@agent/orchestrator";
import { fetchTools, fetchLocalTools, MCPTool } from "@extension/mcpSync";
import { registerMcpProvider } from "@extension/mcpProvider";
import {
  ensureRegistration,
  removeRegistration,
  resolveMcpConfigPath,
} from "@extension/mcpRegistration";

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

  // Clean up any orphaned registrations from previous uninstalls
  await cleanupOrphanedRegistrations(context);

  // Establish dynamic IDs and prefixes from package.json contributions
  interface PackageJsonLike {
    name?: string;
    contributes?: { chatParticipants?: Array<{ id?: string; name?: string }> };
    publisher?: string;
  }
  const extObj = context.extension as unknown as
    | { packageJSON?: PackageJsonLike }
    | undefined as { packageJSON?: PackageJsonLike } | undefined;
  const pkg = (extObj?.packageJSON || {}) as PackageJsonLike;
  const contributedChat = (pkg.contributes?.chatParticipants || [])[0] || {};
  const contributedId: string = contributedChat.id || "MybusinessMCP";
  const contributedName: string = contributedChat.name || "mybusiness";
  const commandPrefix: string = ((): string => {
    const id = contributedId || "MybusinessMCP";
    const base = id.endsWith("MCP") ? id.slice(0, -3) : id;
    return base.toLowerCase() + "MCP";
  })();

  const cfg = vscode.workspace.getConfiguration(commandPrefix);
  let serverUrl = cfg.get<string>("serverUrl") ?? "";
  const token = cfg.get<string>("token") ?? "";
  const orchestrator = new Orchestrator();
  const includeAuthHeader = cfg.get<boolean>("includeAuthHeader") ?? false;

  console.log(
    `📋 Configuration loaded - serverUrl: ${serverUrl || "(stdio)"}, token: ${
      token ? "***" : "(none)"
    }`
  );

  if (!serverUrl) {
    const autoRegister = cfg.get<boolean>("autoRegister") ?? true;
    if (!autoRegister) {
      console.log(
        `ℹ️ autoRegister is disabled; skipping automatic mcp.json registration`
      );
    } else {
      console.log(`ℹ️ Registering stdio MCP server in mcp.json...`);
      try {
        // Prefer installed extension path if available (packaged); fallback to workspace path in dev
        const extIdentifier = `${pkg.publisher || "ErikPlachta"}.${
          pkg.name || "mybusiness-mcp-extension"
        }`;
        const installedExt = vscode.extensions.getExtension(extIdentifier);
        const basePath = installedExt?.extensionPath || context.extensionPath;
        const serverScript = path.join(
          basePath,
          "out",
          "src",
          "server",
          "index.js"
        );
        const registrationId = `${contributedName}-mcp-server`;

        await ensureRegistration({
          id: registrationId,
          type: "stdio",
          command: "node",
          args: [serverScript, "--stdio"],
        });

        console.log(
          `✅ Stdio MCP server registered in mcp.json as "${registrationId}"`
        );

        // Register cleanup to remove mcp.json registration
        // Cleanup disposable to remove registration on deactivate
        const cleanupRegistration: vscode.Disposable = {
          /**
           * Dispose hook to remove mcp.json registration added during activation.
           *
           * @returns {Promise<void>} Resolves when the registration entry has been removed.
           */
          dispose: async (): Promise<void> => {
            await removeRegistration(registrationId);
            console.log(`🧹 Cleaned up mcp.json registration`);
          },
        };
        context.subscriptions.push(cleanupRegistration);
      } catch (regError) {
        const regMsg =
          regError instanceof Error ? regError.message : String(regError);
        console.warn(
          `⚠️ Failed to register stdio server in mcp.json: ${regMsg}`
        );
      }
    }
  }
  // Always register provider and chat participant; tool discovery can fail independently
  console.log(
    `🔌 Registering MCP provider with serverUrl: ${
      serverUrl || "(embedded stdio)"
    }`
  );
  let tools: MCPTool[] = [];
  try {
    // Register provider even for stdio (provider may enumerate registrations)
    registerMcpProvider(serverUrl, token, includeAuthHeader, context);
    console.log(`✅ MCP provider registered`);

    if (serverUrl) {
      console.log(`🔍 Fetching tools via HTTP from ${serverUrl}...`);
      tools = await fetchTools(serverUrl, token);
    } else {
      console.log(`🔍 Fetching tools from embedded stdio server module...`);
      tools = await fetchLocalTools();
    }

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
  // Derive chat participant id & name dynamically from package.json contributions (allows env-driven build customization)
  console.log(
    `💬 Registering chat participant "${contributedId}" (mention @${contributedName})...`
  );
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
    contributedId,
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
  console.log(
    `✅ Chat participant "${contributedId}" registered successfully; mention is @${contributedName}`
  );

  // Register the manual tool invocation command
  const toolCommand = vscode.commands.registerCommand(
    `${commandPrefix}.invokeTool`,
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
    `${commandPrefix}.registerServer`,
    async () => {
      console.log(`🔄 Manual MCP server registration triggered...`);
      try {
        vscode.window.showInformationMessage(
          `🔄 Registering MyBusiness MCP Server...`
        );

        // Register both the provider and mcp.json entry
        registerMcpProvider(serverUrl, token, includeAuthHeader, context);

        if (serverUrl) {
          const registrationId = `${contributedName}-mcp-server`;
          await ensureRegistration({
            id: registrationId,
            type: "http",
            url: serverUrl,
            includeAuthHeader,
            token: token || undefined,
          });
          console.log(
            `✅ HTTP server registered in mcp.json as "${registrationId}"`
          );
        } else {
          // Register stdio server
          const extIdentifier = `${pkg.publisher || "ErikPlachta"}.${
            pkg.name || "mybusiness-mcp-extension"
          }`;
          const installedExt = vscode.extensions.getExtension(extIdentifier);
          const basePath = installedExt?.extensionPath || context.extensionPath;
          const serverScript = path.join(
            basePath,
            "out",
            "src",
            "server",
            "index.js"
          );
          const registrationId = `${contributedName}-mcp-server`;
          await ensureRegistration({
            id: registrationId,
            type: "stdio",
            command: "node",
            args: [serverScript, "--stdio"],
          });
          console.log(
            `✅ Stdio server registered in mcp.json as "${registrationId}"`
          );
        }

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
    `${commandPrefix}.unregisterServer`,
    async () => {
      console.log(`🔄 Manual MCP server unregistration triggered...`);
      try {
        const registrationId = `${contributedName}-mcp-server`;
        await removeRegistration(registrationId);
        console.log(`✅ Removed HTTP server registration from mcp.json`);
        vscode.window.showInformationMessage(
          `✅ MyBusiness MCP Server unregistered from mcp.json`
        );
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        console.error(`❌ Manual unregistration failed:`, msg);
        vscode.window.showErrorMessage(
          `❌ Failed to unregister MCP server: ${msg}`
        );
      }
    }
  );

  /**
   * Diagnostic command to surface actual vs expected ID/mention values.
   * Returns a structured object for programmatic inspection (tests / future UI).
   */
  const diagnoseIdsCommand = vscode.commands.registerCommand(
    `${commandPrefix}.diagnoseIds`,
    async () => {
      const envExtName = (process.env.EXTENSION_NAME || "").trim() || undefined;
      const envChatId =
        (process.env.MCP_CHAT_PARTICIPANT_ID || "").trim() || undefined;
      const envChatName =
        (process.env.MCP_CHAT_PARTICIPANT_NAME || "").trim() || undefined;

      // Expected derivation mirrors build script logic (capitalize first char + 'MCP' suffix for ID)
      const baseId = envChatId || envChatName || "mybusiness";
      const expectedId =
        baseId.charAt(0).toUpperCase() + baseId.slice(1) + "MCP";
      const expectedName = envChatName || baseId;

      const actualMention = `@${contributedName}`;
      const expectedMention = `@${expectedName}`;

      const differences = {
        idMismatch: expectedId !== contributedId,
        nameMismatch: expectedName !== contributedName,
        mentionMismatch: expectedMention !== actualMention,
      };

      const diag = {
        env: {
          EXTENSION_NAME: envExtName,
          MCP_CHAT_PARTICIPANT_ID: envChatId,
          MCP_CHAT_PARTICIPANT_NAME: envChatName,
        },
        packageJson: {
          name: pkg.name,
          chatParticipant: {
            id: contributedId,
            name: contributedName,
          },
        },
        runtime: {
          createdChatParticipantId: contributedId,
          mention: actualMention,
        },
        expected: {
          id: expectedId,
          name: expectedName,
          mention: expectedMention,
        },
        differences,
      };

      const summary = `Chat ID: actual=${contributedId} expected=${expectedId}; mention: actual=${actualMention} expected=${expectedMention}`;
      vscode.window.showInformationMessage(summary);
      console.log(`🔍 diagnoseIds`, JSON.stringify(diag, null, 2));
      return diag;
    }
  );

  /**
   * Export user context data command.
   * Prompts user to select destination folder, then exports all categories.
   */
  const exportUserDataCommand = vscode.commands.registerCommand(
    `${commandPrefix}.exportUserData`,
    async () => {
      try {
        const destinationUri = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
          openLabel: "Select Export Destination",
          title: "Export User Context Data",
        });

        if (!destinationUri || destinationUri.length === 0) {
          vscode.window.showInformationMessage("Export cancelled");
          return;
        }

        const destination = destinationUri[0].fsPath;

        await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: "Exporting User Context Data",
            cancellable: false,
          },
          async (progress) => {
            progress.report({ increment: 0, message: "Initializing..." });

            // Dynamically import UserContextAgent to avoid circular dependencies
            const { UserContextAgent } = await import(
              "@agent/userContextAgent"
            );
            const agent = new UserContextAgent();

            progress.report({
              increment: 30,
              message: "Exporting categories...",
            });

            const exportedCategories = agent.exportUserData(destination);

            progress.report({ increment: 70, message: "Finalizing..." });

            vscode.window.showInformationMessage(
              `✅ Successfully exported ${exportedCategories.length} categories to ${destination}`
            );
            console.log(
              `📤 Exported categories: ${exportedCategories.join(", ")}`
            );

            return exportedCategories;
          }
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(
          `❌ Failed to export user data: ${message}`
        );
        console.error(`Export error:`, error);
      }
    }
  );

  /**
   * Import user context data command.
   * Prompts user to select source folder, then imports all categories into external userData root.
   */
  const importUserDataCommand = vscode.commands.registerCommand(
    `${commandPrefix}.importUserData`,
    async () => {
      try {
        const sourceUri = await vscode.window.showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false,
          openLabel: "Select Import Source",
          title: "Import User Context Data",
        });

        if (!sourceUri || sourceUri.length === 0) {
          vscode.window.showInformationMessage("Import cancelled");
          return;
        }

        const source = sourceUri[0].fsPath;

        await vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: "Importing User Context Data",
            cancellable: false,
          },
          async (progress) => {
            progress.report({ increment: 0, message: "Initializing..." });

            // Dynamically import UserContextAgent to avoid circular dependencies
            const { UserContextAgent } = await import(
              "@agent/userContextAgent"
            );
            const agent = new UserContextAgent();

            progress.report({
              increment: 30,
              message: "Importing categories...",
            });

            const importedCategories = agent.importUserData(source);

            progress.report({ increment: 70, message: "Finalizing..." });

            const reloadAction = "Reload Window";
            const response = await vscode.window.showInformationMessage(
              `✅ Successfully imported ${importedCategories.length} categories. Reload window to use the new data?`,
              reloadAction,
              "Later"
            );

            if (response === reloadAction) {
              await vscode.commands.executeCommand(
                "workbench.action.reloadWindow"
              );
            }

            console.log(
              `📥 Imported categories: ${importedCategories.join(", ")}`
            );

            return importedCategories;
          }
        );
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(
          `❌ Failed to import user data: ${message}`
        );
        console.error(`Import error:`, error);
      }
    }
  );

  context.subscriptions.push(
    toolCommand,
    registerServerCommand,
    unregisterServerCommand,
    diagnoseIdsCommand,
    exportUserDataCommand,
    importUserDataCommand
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
  console.log(`   💬 Participant: @${contributedName}`);
}

/**
 * Check for and clean up orphaned MCP registrations from previous extension installations.
 * This helps handle the case where the extension was uninstalled but the mcp.json entry remains.
 *
 * @param {vscode.ExtensionContext} context - VS Code extension context
 * @returns {Promise<void>} Resolves when cleanup check is complete.
 */
async function cleanupOrphanedRegistrations(
  context: vscode.ExtensionContext
): Promise<void> {
  try {
    const lastCleanupKey = "lastUninstallCleanup";
    const currentVersion =
      (
        context.extension as unknown as
          | { packageJSON?: { version?: string } }
          | undefined
      )?.packageJSON?.version || "0.0.0-test";
    const lastCleanup = context.globalState.get<string>(lastCleanupKey);

    // Only run cleanup if we haven't already done it for this version
    if (lastCleanup !== currentVersion) {
      console.log(`🧹 Checking for orphaned registrations...`);

      const extensionPath = context.extensionPath;

      try {
        // Resolve the user's mcp.json path and read the current configuration
        const configPath = resolveMcpConfigPath();
        let raw = "";
        try {
          raw = await fsPromises.readFile(configPath, "utf8");
        } catch {
          // No config file - nothing to do
          console.log(`No global mcp.json found at ${configPath}`);
          await context.globalState.update(lastCleanupKey, currentVersion);
          return;
        }

        const parsed = JSON.parse(raw) as { servers?: Record<string, unknown> };
        const servers: Record<string, unknown> = parsed.servers ?? {};

        // Inspect servers and remove entries that clearly point to missing or non-extension files.
        for (const [id, def] of Object.entries(servers)) {
          try {
            const defAny = def as { type?: unknown; args?: unknown };
            if (
              defAny &&
              defAny.type === "stdio" &&
              Array.isArray(defAny.args)
            ) {
              const scriptArg = (defAny.args as string[]).find((a: string) =>
                a.includes("server/index.js")
              );
              if (scriptArg) {
                const candidatePath = path.isAbsolute(scriptArg)
                  ? scriptArg
                  : path.resolve(scriptArg);

                if (
                  !existsSync(candidatePath) ||
                  !candidatePath.startsWith(extensionPath)
                ) {
                  console.log(
                    `🧹 Removing orphaned mcp.json server entry: ${id} -> ${scriptArg}`
                  );
                  await removeRegistration(id);
                }
              }
            }
          } catch (inner) {
            console.warn(
              `⚠️ Error inspecting server ${id}: ${
                inner instanceof Error ? inner.message : String(inner)
              }`
            );
          }
        }
      } catch (err) {
        console.warn(
          `⚠️ Could not inspect global mcp.json: ${
            err instanceof Error ? err.message : String(err)
          }`
        );
      }

      // Mark cleanup as done for this version
      await context.globalState.update(lastCleanupKey, currentVersion);
    }
  } catch (error) {
    console.warn(
      `⚠️ Could not check for orphaned registrations: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

/**
 * Deactivate the extension.
 * Currently a no-op because embedded server shutdown is handled via subscription dispose.
 */
export function deactivate(): void {
  console.log("👋 MyBusiness MCP Extension: Deactivating...");
  // Intentionally empty; resources cleaned up by disposables registered on activation.
}
