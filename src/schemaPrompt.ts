import * as vscode from "vscode";
import { MCPTool } from "./mcpSync";

export async function promptForArgs(tool: MCPTool): Promise<Record<string, any>> {
  const args: Record<string, any> = {};
  const props = tool.input_schema?.properties ?? {};
  const required = tool.input_schema?.required ?? [];

  for (const [key, prop] of Object.entries(props)) {
    const prompt = `${prop.description ?? key}${required.includes(key) ? " (required)" : ""}`;
    const value = await vscode.window.showInputBox({
      title: `Parameter: ${key}`,
      prompt,
      ignoreFocusOut: true
    });
    if (required.includes(key) && !value) {
      vscode.window.showErrorMessage(`Missing required argument: ${key}`);
      return {};
    }
    if (value) args[key] = value;
  }
  return args;
}
