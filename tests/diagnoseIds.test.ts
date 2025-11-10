import * as path from "path";
import { activate } from "../src/extension";
import * as mcpSync from "@extension/mcpSync";

// Mock tool fetch
jest.mock("@extension/mcpSync", () => ({
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
    (mcpSync.fetchTools as jest.Mock).mockClear();
    process.env.MCP_CHAT_PARTICIPANT_ID = "custombiz"; // simulate env override
    process.env.MCP_CHAT_PARTICIPANT_NAME = "custombiz";
  });

  it("returns structured diagnostic info with expected vs actual", async () => {
    await activate({
      subscriptions: [],
      extensionPath: path.resolve(__dirname, ".."),
      extension: { packageJSON: require("../package.json") },
    } as any);

    expect(registered["mybusinessMCP.diagnoseIds"]).toBeDefined();
    const diag = await registered["mybusinessMCP.diagnoseIds"]();

    expect(diag.env.MCP_CHAT_PARTICIPANT_ID).toBe("custombiz");
    expect(diag.expected.id).toBe("CustombizMCP");
    // Actual id comes from package.json build-time value; may differ
    expect(diag.packageJson.chatParticipant.id).toBeDefined();
    expect(typeof diag.differences.idMismatch).toBe("boolean");
  });
});
