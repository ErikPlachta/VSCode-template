import { activate } from "../src/extension";
import * as mcpSync from "../src/mcpSync";
jest.mock("../src/mcpSync");
jest.mock("vscode", () => ({
  workspace: { getConfiguration: () => ({ get: () => "" }) },
  chat: { createChatParticipantExtensionApi: () => ({ registerChatCommand: jest.fn(), registerChatMention: jest.fn() }) },
  window: { showInformationMessage: jest.fn(), showErrorMessage: jest.fn() }
}));
describe("activate", () => {
  it("registers tools", async () => {
    (mcpSync.fetchTools as jest.Mock).mockResolvedValue([{ name: "testTool", title: "Test", description: "desc" }]);
    await activate({} as any);
    expect(mcpSync.fetchTools).toHaveBeenCalled();
  });
});
