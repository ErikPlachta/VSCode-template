import { activate } from "../../src/extension";
import * as mcpSync from "../../src/extension/mcpSync";
import * as mcpCache from "../../src/extension/mcpCache";
import * as schemaPrompt from "../../src/extension/schemaPrompt";

jest.mock("../../src/agent/orchestrator", () => ({
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
    const registerChatCommand = jest.fn(() => ({ dispose: jest.fn() }));
    const registerChatMention = jest.fn(() => ({ dispose: jest.fn() }));
    const registerCommand = jest.fn(() => ({ dispose: jest.fn() }));
    const showQuickPick = jest.fn();
    const showInformationMessage = jest.fn();
    const showErrorMessage = jest.fn();

    return {
      workspace: {
        getConfiguration: () => ({ get: () => "https://example.com" }),
      },
      chat: {
        createChatParticipantExtensionApi: () => ({
          registerChatCommand,
          registerChatMention,
        }),
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
      MarkdownString: class {
        public value = "";
        public isTrusted = false;
        appendMarkdown(text: string) {
          this.value += text;
        }
        appendCodeblock(text: string) {
          this.value += text;
        }
      },
      __registerChatCommand: registerChatCommand,
      __registerChatMention: registerChatMention,
      __registerCommand: registerCommand,
      __showQuickPick: showQuickPick,
      __showInformationMessage: showInformationMessage,
      __showErrorMessage: showErrorMessage,
    };
  },
  { virtual: true }
);

const vscodeMock = jest.requireMock("vscode");
const registerChatCommand = vscodeMock.__registerChatCommand as jest.Mock;
const registerChatMention = vscodeMock.__registerChatMention as jest.Mock;
const registerCommand = vscodeMock.__registerCommand as jest.Mock;
const showQuickPick = vscodeMock.__showQuickPick as jest.Mock;
const showInformationMessage = vscodeMock.__showInformationMessage as jest.Mock;
const showErrorMessage = vscodeMock.__showErrorMessage as jest.Mock;

jest.mock("../../src/extension/mcpSync");
jest.mock("../../src/extension/mcpCache");
jest.mock("../../src/extension/schemaPrompt");

describe("activate", () => {
  beforeEach(() => {
    (mcpSync.fetchTools as jest.Mock).mockResolvedValue([
      { name: "testTool", title: "Test", description: "desc" },
    ]);
    (mcpCache.ensureCacheDirectory as jest.Mock).mockResolvedValue(
      "/tmp/.mcp-cache"
    );
    (schemaPrompt.promptForArgs as jest.Mock).mockResolvedValue({
      param: "value",
    });
    registerChatCommand.mockClear();
    registerChatMention.mockClear();
    registerCommand.mockClear();
    showInformationMessage.mockClear();
    showErrorMessage.mockClear();
    showQuickPick.mockClear();
    (mcpCache.logInvocation as jest.Mock).mockResolvedValue(undefined);
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
    expect(registerChatCommand).toHaveBeenCalled();
    expect(registerChatMention).toHaveBeenCalled();
    expect(registerCommand).toHaveBeenCalled();
    expect(showInformationMessage).toHaveBeenCalledWith(
      "Loaded 1 MCP tools from https://example.com."
    );
  });
});
