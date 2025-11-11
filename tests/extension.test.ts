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
import { fileURLToPath } from "url";
import * as path from "path";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mock sync module BEFORE importing activate to ensure call interception
jest.mock("@extension/mcpSync", () => ({
  fetchTools: jest
    .fn()
    .mockResolvedValue([
      { name: "testTool", title: "Test", description: "desc" },
    ]),
}));

import { activate } from "../src/extension";
import * as mcpSync from "@extension/mcpSync";

// Stub out provider to avoid depending on VS Code LM API in tests
jest.mock("../src/extension/mcpProvider", () => ({
  registerMcpProvider: jest.fn(),
}));

jest.mock("../src/agent/orchestrator", () => ({
  Orchestrator: jest.fn(() => ({
    listCategories: jest.fn(() => [
      { id: "people", name: "People", description: "All employees" },
    ]),
    classify: jest.fn(() => ({ intent: "metadata", rationale: "mock" })),
    handle: jest.fn(async () => ({
      intent: "metadata",
      agent: "relevant-data-manager",
      summary: "mock summary",
      rationale: "mock",
      payload: {},
      markdown: "Mock orchestrator response",
    })),
  })),
}));

jest.mock(
  "vscode",
  () => {
    const createChatParticipant = jest.fn(() => ({
      dispose: jest.fn(),
      iconPath: undefined as any,
    }));
    const registerCommand = jest.fn(() => ({ dispose: jest.fn() }));
    const showQuickPick = jest.fn();
    const showInformationMessage = jest.fn();
    const showErrorMessage = jest.fn();

    return {
      workspace: {
        getConfiguration: () => ({ get: () => "https://example.com" }),
      },
      lm: {
        registerMcpServerDefinitionProvider: jest.fn(() => ({
          dispose: jest.fn(),
        })),
      },
      McpStdioServerDefinition: jest.fn(function (
        this: any,
        title: string,
        command: string,
        args: string[],
        options: Record<string, unknown>,
        version: string
      ) {
        Object.assign(this, { title, command, args, options, version });
      }),
      chat: {
        createChatParticipant,
      },
      commands: {
        registerCommand,
      },
      window: {
        showInformationMessage,
        showErrorMessage,
        showQuickPick,
        showInputBox: jest.fn(),
      },
      __createChatParticipant: createChatParticipant,
      __registerCommand: registerCommand,
      __showQuickPick: showQuickPick,
      __showInformationMessage: showInformationMessage,
      __showErrorMessage: showErrorMessage,
    };
  },
  { virtual: true }
);

const vscodeMock = jest.requireMock("vscode");
const createChatParticipant = vscodeMock.__createChatParticipant as jest.Mock;
const registerCommand = vscodeMock.__registerCommand as jest.Mock;
const showQuickPick = vscodeMock.__showQuickPick as jest.Mock;
const showInformationMessage = vscodeMock.__showInformationMessage as jest.Mock;
const showErrorMessage = vscodeMock.__showErrorMessage as jest.Mock;

// (Already mocked above prior to imports)

describe("activate", () => {
  beforeEach(() => {
    // fetchTools mock already defined; clear call history
    (mcpSync.fetchTools as jest.Mock).mockClear();
    createChatParticipant.mockClear();
    registerCommand.mockClear();
    showInformationMessage.mockClear();
    showErrorMessage.mockClear();
    showQuickPick.mockClear();
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ jsonrpc: "2.0", id: 1, result: { content: "ok" } }),
    }) as unknown as typeof fetch;
  });

  it("registers slash commands and mentions for each tool", async () => {
    await activate({
      subscriptions: [],
      extensionPath: path.resolve(__dirname, ".."),
    } as any);
    expect(mcpSync.fetchTools).toHaveBeenCalledWith(
      "https://example.com",
      "https://example.com"
    );
    expect(createChatParticipant).toHaveBeenCalled();
    expect(registerCommand).toHaveBeenCalled();
    expect(showInformationMessage).toHaveBeenCalledWith(
      "✅ MyBusiness MCP ready! Loaded 1 tools. Use @mybusiness in Copilot Chat!"
    );
  });
});
