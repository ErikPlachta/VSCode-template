import { describe, expect, it, vi, beforeEach } from "vitest";
import { promptForArgs } from "../src/schemaPrompt";
import type { MCPTool } from "../src/types";

vi.mock("vscode", () => ({
  window: {
    showInputBox: vi.fn(),
    showErrorMessage: vi.fn()
  }
}));

describe("promptForArgs", () => {
  let vscode: typeof import("vscode");
  let showInputBox: ReturnType<typeof vi.fn>;
  let showErrorMessage: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    vscode = await import("vscode");
    showInputBox = vscode.window.showInputBox as unknown as ReturnType<typeof vi.fn>;
    showErrorMessage = vscode.window.showErrorMessage as unknown as ReturnType<typeof vi.fn>;
    showInputBox.mockReset();
    showErrorMessage.mockReset();
  });

  it("collects arguments and coerces types", async () => {
    const tool: MCPTool = {
      name: "sum",
      title: "Sum",
      description: "Adds numbers",
      input_schema: {
        type: "object",
        required: ["a", "flag"],
        properties: {
          a: { type: "integer", description: "First number" },
          flag: { type: "boolean", description: "Whether to run" }
        }
      }
    };

    showInputBox.mockResolvedValueOnce("123");
    showInputBox.mockResolvedValueOnce("true");

    const args = await promptForArgs(tool);
    expect(args).toEqual({ a: 123, flag: true });
    expect(showErrorMessage).not.toHaveBeenCalled();
  });

  it("shows error and returns empty object when required value missing", async () => {
    const tool: MCPTool = {
      name: "sum",
      title: "Sum",
      description: "Adds numbers",
      input_schema: {
        type: "object",
        required: ["a"],
        properties: {
          a: { type: "number", description: "First number" }
        }
      }
    };

    showInputBox.mockResolvedValueOnce("");

    const args = await promptForArgs(tool);
    expect(args).toEqual({});
    expect(showErrorMessage).toHaveBeenCalledWith("Missing required argument: a");
  });
});
