import * as vscode from "vscode";
import { MCPTool } from "./types";

export async function promptForArgs(tool: MCPTool): Promise<Record<string, unknown>> {
  const args: Record<string, unknown> = {};
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
    if (value) args[key] = coerceValue(prop.type, value);
  }
  return args;
}

function coerceValue(type: string, value: string): unknown {
  switch (type) {
    case "number":
    case "integer":
      return Number(value);
    case "boolean":
      return value.toLowerCase() === "true";
    default:
      return value;
  }
}
