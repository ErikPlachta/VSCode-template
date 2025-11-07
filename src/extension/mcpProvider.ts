/**
 * @fileoverview MCP server definition provider integration.
 */
import * as vscode from "vscode";

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
        // Provide a single HTTP JSON-RPC server definition
        let headers: Record<string, string> | undefined;
        if (includeAuthHeader && token) {
          headers = { Authorization: `Bearer ${token}` };
        }
        const def = new vscode.McpHttpServerDefinition(
          "My Business Embedded Server",
          vscode.Uri.parse(serverUrl),
          headers
        );
        return [def];
      },
    }
  );
  context.subscriptions.push(provider, emitter);
}
