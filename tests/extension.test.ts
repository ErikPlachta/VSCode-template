import { activate } from "../src/extension";
import * as mcpSync from "../src/extension/mcpSync";

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

jest.mock("../src/extension/mcpSync");

describe("activate", () => {
  beforeEach(() => {
    (mcpSync.fetchTools as jest.Mock).mockResolvedValue([
      { name: "testTool", title: "Test", description: "desc" },
    ]);
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
    await activate({ subscriptions: [] } as any);
    expect(mcpSync.fetchTools).toHaveBeenCalledWith(
      "https://example.com",
      "https://example.com"
    );
    expect(createChatParticipant).toHaveBeenCalled();
    expect(registerCommand).toHaveBeenCalled();
    expect(showInformationMessage).toHaveBeenCalledWith(
      "Loaded 1 MCP tools. Use @mybusiness in Copilot Chat!"
    );
  });
});
