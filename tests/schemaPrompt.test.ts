import * as vscode from "vscode";
import { promptForArgs } from "../src/schemaPrompt";
jest.mock("vscode", () => ({
  window: {
    showInputBox: jest.fn(async () => "mockValue"),
    showErrorMessage: jest.fn()
  }
}));
describe("promptForArgs", () => {
  const tool = {
    name: "mockTool",
    input_schema: { properties: { metric_name: { description: "desc" } }, required: ["metric_name"] }
  };
  it("returns prompted args", async () => {
    const result = await promptForArgs(tool as any);
    expect(result.metric_name).toBe("mockValue");
  });
});
