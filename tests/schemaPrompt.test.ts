const showInputBox = jest.fn();
const showQuickPick = jest.fn();
const showErrorMessage = jest.fn();

jest.mock("vscode", () => ({
  window: {
    showInputBox,
    showQuickPick,
    showErrorMessage
  }
}), { virtual: true });

import { promptForArgs } from "../src/schemaPrompt";

describe("promptForArgs", () => {
  beforeEach(() => {
    showInputBox.mockReset();
    showQuickPick.mockReset();
    showErrorMessage.mockReset();
  });

  it("collects string input for required fields", async () => {
    showInputBox.mockResolvedValueOnce("mockValue");
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {
          metric_name: { description: "desc", required: true }
        }
      }
    };
    const result = await promptForArgs(tool as any);
    expect(result.metric_name).toBe("mockValue");
  });

  it("coerces numeric input based on schema type", async () => {
    showInputBox.mockResolvedValueOnce("42");
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {
          count: { description: "desc", required: true, type: "number" }
        }
      }
    };
    const result = await promptForArgs(tool as any);
    expect(result.count).toBe(42);
  });

  it("uses quick pick for boolean types", async () => {
    showQuickPick.mockResolvedValueOnce("true");
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {
          enabled: { description: "desc", required: true, type: "boolean" }
        }
      }
    };
    const result = await promptForArgs(tool as any);
    expect(result.enabled).toBe(true);
  });

  it("returns empty object when validation fails", async () => {
    showQuickPick.mockResolvedValueOnce(undefined);
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {
          enabled: { description: "desc", required: true, type: "boolean" }
        }
      }
    };
    const result = await promptForArgs(tool as any);
    expect(result).toEqual({});
    expect(showErrorMessage).toHaveBeenCalled();
  });
});
