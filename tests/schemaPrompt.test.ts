import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
  jest,
} from "@jest/globals";

// Create mock functions that will be returned by the vscode module
jest.mock(
  "vscode",
  () => {
    const mockFns = {
      showInputBox: jest.fn(),
      showQuickPick: jest.fn(),
      showErrorMessage: jest.fn(),
    };
    return {
      window: mockFns,
      __mockFns: mockFns, // Expose for test access
    };
  },
  { virtual: true }
);

import { promptForArgs } from "../src/extension/schemaPrompt";
const vscode = jest.requireMock("vscode") as {
  __mockFns: {
    showInputBox: jest.Mock;
    showQuickPick: jest.Mock;
    showErrorMessage: jest.Mock;
  };
};
const { showInputBox, showQuickPick, showErrorMessage } = vscode.__mockFns;

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
          metric_name: { description: "desc", required: true },
        },
      },
    };
    const result = await promptForArgs(tool as any);
    expect(result).toBeDefined();
    const record = result as Record<string, unknown>;
    expect(record.metric_name).toBe("mockValue");
  });

  it("coerces numeric input based on schema type", async () => {
    showInputBox.mockResolvedValueOnce("42");
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {
          count: { description: "desc", required: true, type: "number" },
        },
      },
    };
    const result = await promptForArgs(tool as any);
    expect(result).toBeDefined();
    const record = result as Record<string, unknown>;
    expect(record.count).toBe(42);
  });

  it("uses quick pick for boolean types", async () => {
    showQuickPick.mockResolvedValueOnce("true");
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {
          enabled: { description: "desc", required: true, type: "boolean" },
        },
      },
    };
    const result = await promptForArgs(tool as any);
    expect(result).toBeDefined();
    const record = result as Record<string, unknown>;
    expect(record.enabled).toBe(true);
  });

  it("returns undefined when the user cancels a required prompt", async () => {
    showQuickPick.mockResolvedValueOnce(undefined);
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {
          enabled: { description: "desc", required: true, type: "boolean" },
        },
      },
    };
    const result = await promptForArgs(tool as any);
    expect(result).toBeUndefined();
    expect(showErrorMessage).not.toHaveBeenCalled();
  });

  it("returns an empty object when no arguments are required", async () => {
    const tool = {
      title: "Mock",
      input_schema: {
        properties: {},
      },
    };
    const result = await promptForArgs(tool as any);
    expect(result).toEqual({});
  });
});
