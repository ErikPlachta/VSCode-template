/**
 * @packageDocumentation MCP server definition provider integration.
 */
import * as vscode from "vscode";
import * as path from "path";

/**
 * registerMcpProvider function.
 *
 * @param {string} serverUrl - serverUrl parameter.
 * @param {string} token - token parameter.
 * @param {boolean} includeAuthHeader - includeAuthHeader parameter.
 * @param {vscode.ExtensionContext} context - context parameter.
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
