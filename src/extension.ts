/**
 * @fileoverview Entry point for MyBusiness MCP VS Code extension.
 */
import * as vscode from "vscode";
import { fetchTools, MCPTool } from "./mcpSync";
import { promptForArgs } from "./schemaPrompt";

/**
 * Activates the extension, registering MCP slash commands and mentions.
 * @param {vscode.ExtensionContext} context - Extension lifecycle context.
 */
export async function activate(context: vscode.ExtensionContext) {
  const cfg = vscode.workspace.getConfiguration("mybusinessMCP");
  const serverUrl = cfg.get<string>("serverUrl") ?? "";
  const token = cfg.get<string>("token") ?? "";

  try {
    const tools: MCPTool[] = await fetchTools(serverUrl, token);
    const chat = vscode.chat.createChatParticipantExtensionApi("MyBusinessMCP");

    for (const tool of tools) {
      const slash = `/${tool.name}`;
      const mention = `@${tool.name}`;

      chat.registerChatCommand(slash, {
        title: tool.title,
        description: tool.description,
        handler: async () => {
          const args = await promptForArgs(tool);
          if (!Object.keys(args).length)
            return new vscode.ChatResponseText("Missing arguments.");
          const payload = {
            jsonrpc: "2.0",
            id: Date.now(),
            method: "invokeTool",
            params: { name: tool.name, arguments: args }
          };
          const res = await fetch(serverUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {})
            },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          const result = data.result?.content ?? data.error?.message ?? "No response";
          return new vscode.ChatResponseText(JSON.stringify(result, null, 2));
        }
      });

      chat.registerChatMention(mention, {
        title: tool.title,
        description: tool.description,
        handler: async (msg) => {
          const payload = {
            jsonrpc: "2.0",
            id: Date.now(),
            method: "invokeTool",
            params: { name: tool.name, arguments: { query: msg } }
          };
          const res = await fetch(serverUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {})
            },
            body: JSON.stringify(payload)
          });
          const data = await res.json();
          const result = data.result?.content ?? data.error?.message ?? "No response";
          return new vscode.ChatResponseText(JSON.stringify(result, null, 2));
        }
      });
    }
    vscode.window.showInformationMessage(
      `Loaded ${tools.length} MCP tools from ${serverUrl}.`
    );
  } catch (err: any) {
    vscode.window.showErrorMessage(`MCP Sync failed: ${err.message}`);
  }
}

/** Deactivates the extension. */
export function deactivate() {}
