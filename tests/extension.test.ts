import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";

vi.mock("../src/mcpSync", () => ({
  fetchTools: vi.fn()
}));

vi.mock("../src/schemaPrompt", () => ({
  promptForArgs: vi.fn()
}));

const registerChatCommand = vi.fn();
const registerChatMention = vi.fn();

vi.mock("vscode", () => ({
  workspace: {
    getConfiguration: vi.fn().mockReturnValue({
      get: vi.fn().mockImplementation((key: string) =>
        key === "serverUrl" ? "https://example.com" : "token"
      )
    })
  },
  chat: {
    createChatParticipantExtensionApi: vi.fn().mockReturnValue({
      registerChatCommand,
      registerChatMention
    })
  },
  window: {
    showInformationMessage: vi.fn(),
    showErrorMessage: vi.fn()
  },
  ChatResponseText: class {
    constructor(public value: string) {}
  }
}));

describe("activate", () => {
  let vscode: typeof import("vscode");
  let fetchTools: ReturnType<typeof vi.fn>;
  let promptForArgs: ReturnType<typeof vi.fn>;
  const fetchMock = vi.fn();

  beforeEach(async () => {
    registerChatCommand.mockReset();
    registerChatMention.mockReset();
    fetchMock.mockReset();
    global.fetch = fetchMock as unknown as typeof fetch;

    vscode = await import("vscode");
    fetchTools = (await import("../src/mcpSync")).fetchTools as unknown as ReturnType<typeof vi.fn>;
    promptForArgs = (await import("../src/schemaPrompt")).promptForArgs as unknown as ReturnType<typeof vi.fn>;

    fetchTools.mockResolvedValue([
      {
        name: "search",
        title: "Search",
        description: "Run search",
        input_schema: {
          type: "object",
          required: ["query"],
          properties: {
            query: { type: "string", description: "Query" }
          }
        }
      }
    ]);

    promptForArgs.mockResolvedValue({ query: "hello" });

    fetchMock.mockResolvedValue({
      json: () => Promise.resolve({ result: { content: "done" } })
    });
  });

  afterEach(() => {
    delete (global as Record<string, unknown>).fetch;
  });

  it("registers chat commands and handles execution", async () => {
    const { activate } = await import("../src/extension");
    await activate({} as unknown as import("vscode").ExtensionContext);

    expect(registerChatCommand).toHaveBeenCalledWith(
      "/search",
      expect.objectContaining({ title: "Search", description: "Run search" })
    );

    const commandHandler = registerChatCommand.mock.calls[0][1].handler;
    const response = await commandHandler();
    expect(fetchMock).toHaveBeenCalled();
    expect(response).toBeInstanceOf(vscode.ChatResponseText);
    expect(response.value).toContain("done");

    expect(registerChatMention).toHaveBeenCalledWith(
      "@search",
      expect.objectContaining({ title: "Search", description: "Run search" })
    );
  });
});
