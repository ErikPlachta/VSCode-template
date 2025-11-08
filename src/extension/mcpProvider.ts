/**
 * @packageDocumentation MCP server definition provider integration.
 */
import * as vscode from "vscode";
import * as path from "path";

/**
 * Register a McpServerDefinitionProvider to let VS Code discover the embedded MCP server.
 *
 * @param {string} serverUrl - MCP server URL (ignored for stdio definition but kept for future expansion).
 * @param {string} token - Authentication token to use when contacting the server.
 * @param {boolean} includeAuthHeader - Whether to include the auth token as an HTTP header.
 * @param {vscode.ExtensionContext} context - Extension context for managing disposables.
 * @returns {void} Nothing is returned; disposables are pushed to the provided context.
 */
export function registerMcpProvider(
  serverUrl: string,
  token: string,
  includeAuthHeader: boolean,
  context: vscode.ExtensionContext
): void {
  const emitter = new vscode.EventEmitter<void>();
  const provider = vscode.lm.registerMcpServerDefinitionProvider(
    "mybusiness-local",
    {
      onDidChangeMcpServerDefinitions: emitter.event,
      /**
       * Provide MCP server definitions to VS Code LM API for discovery.
       *
       * @returns {Promise<vscode.McpStdioServerDefinition[]>} List of server definitions.
       */
      provideMcpServerDefinitions: async () => {
        // Provide a stdio server definition that runs our Node.js server
        const extensionPath = context.extensionPath;
        const serverScript = path.join(
          extensionPath,
          "out",
          "server",
          "index.js"
        );

        const def = new vscode.McpStdioServerDefinition(
          "My Business Embedded Server", // TODO: Update this to be a value pulled from config file somewhere just like should through whole app
          "node",
          [serverScript, "--stdio"],
          {},
          "1.0.0"
        );

        return [def];
      },
    }
  );
  context.subscriptions.push(provider, emitter);
}
