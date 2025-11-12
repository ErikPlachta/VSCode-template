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

import { activate } from "../src/extension";
import * as mcpSync from "../src/extension/mcpSync";

// Mock tool fetch
jest.mock("../src/extension/mcpSync", () => ({
  fetchTools: jest
    .fn()
    .mockResolvedValue([
      { name: "diagTool", title: "Diag", description: "Diagnostics" },
    ]),
}));

// Mock provider
jest.mock("../src/extension/mcpProvider", () => ({
  registerMcpProvider: jest.fn(),
}));

jest.mock("../src/agent/orchestrator", () => ({
  Orchestrator: jest.fn(() => ({
    handle: jest.fn(async () => ({
      intent: "metadata",
      agent: "relevant-data-manager",
      summary: "summary",
      rationale: "rationale",
      payload: {},
      markdown: "response",
    })),
  })),
}));

// VS Code mock similar to extension.test but stores callbacks
jest.mock(
  "vscode",
  () => {
    const createChatParticipant = jest.fn(() => ({ dispose: jest.fn() }));
    const registered: Record<string, Function> = {};
    const registerCommand = jest.fn((id: string, cb: Function) => {
      registered[id] = cb;
      return { dispose: jest.fn() };
    });
    return {
      workspace: { getConfiguration: () => ({ get: () => "" }) }, // stdio path
      chat: { createChatParticipant },
      commands: { registerCommand },
      window: {
        showInformationMessage: jest.fn(),
        showErrorMessage: jest.fn(),
        showWarningMessage: jest.fn(),
        showQuickPick: jest.fn(),
      },
      __registeredCommands: registered,
      __registerCommand: registerCommand,
      __createChatParticipant: createChatParticipant,
    };
  },
  { virtual: true }
);

const vscodeMock = jest.requireMock("vscode");
const registered = vscodeMock.__registeredCommands as Record<string, Function>;

describe("diagnoseIds command", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.MCP_CHAT_PARTICIPANT_ID = "custombiz"; // simulate env override
    process.env.MCP_CHAT_PARTICIPANT_NAME = "custombiz";
  });

  it("returns structured diagnostic info with expected vs actual", async () => {
    const packageJson = require("../package.json");
    await activate({
      subscriptions: [],
      extensionPath: path.resolve(__dirname, ".."),
      extension: {
        id: "test.usercontext",
        packageJSON: packageJson,
      },
    } as any);

    expect(registered["usercontextMCP.diagnoseIds"]).toBeDefined();
    const diag = await registered["usercontextMCP.diagnoseIds"]();

    expect(diag.env.MCP_CHAT_PARTICIPANT_ID).toBe("custombiz");
    expect(diag.expected.id).toBe("CustombizMCP");
    // Actual id comes from package.json build-time value; may differ
    expect(diag.packageJson.chatParticipant.id).toBeDefined();
    expect(typeof diag.differences.idMismatch).toBe("boolean");
  });
});
