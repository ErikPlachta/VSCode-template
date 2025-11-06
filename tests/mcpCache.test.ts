import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import { ensureCacheDirectory, logInvocation } from "../src/mcpCache";

let workspaceFoldersMock: any[] | undefined;

jest.mock("vscode", () => ({
  workspace: {
    get workspaceFolders() {
      return workspaceFoldersMock;
    }
  }
}), { virtual: true });

describe("mcpCache", () => {
  beforeEach(() => {
    workspaceFoldersMock = undefined;
  });

  it("creates the cache directory inside the workspace", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-cache-test-"));
    workspaceFoldersMock = [{ uri: { fsPath: tempDir } }];

    const cacheDir = await ensureCacheDirectory();
    expect(cacheDir).toBe(path.join(tempDir, ".mcp-cache"));

    const stats = await fs.stat(cacheDir);
    expect(stats.isDirectory()).toBe(true);

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it("appends invocation logs to a JSONL file", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-cache-test-"));
    workspaceFoldersMock = [{ uri: { fsPath: tempDir } }];
    const cacheDir = await ensureCacheDirectory();

    await logInvocation(cacheDir, {
      timestamp: new Date().toISOString(),
      toolName: "demo",
      args: { query: "hello" },
      context: [],
      response: { result: "ok" }
    });

    const contents = await fs.readFile(path.join(cacheDir, "invocations.jsonl"), "utf8");
    expect(contents).toContain("\"toolName\":\"demo\"");

    await fs.rm(tempDir, { recursive: true, force: true });
  });
});
