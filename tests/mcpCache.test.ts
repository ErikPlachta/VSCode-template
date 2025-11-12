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
import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";

// Mock vscode module with getter that will be set by tests
jest.mock(
  "vscode",
  () => {
    let mockWorkspaceFolders: any[] | undefined;
    return {
      workspace: {
        get workspaceFolders() {
          return mockWorkspaceFolders;
        },
        set workspaceFolders(value: any[] | undefined) {
          mockWorkspaceFolders = value;
        },
      },
    };
  },
  { virtual: true }
);

import {
  deleteSharedCacheEntry,
  ensureCacheDirectory,
  listSharedCacheEntries,
  logInvocation,
  readSharedCacheEntry,
  storeSharedCacheEntry,
} from "../src/extension/mcpCache";

// Get reference to mocked vscode
const vscode = jest.requireMock("vscode") as {
  workspace: { workspaceFolders?: any[] };
};

describe("mcpCache", () => {
  beforeEach(() => {
    vscode.workspace.workspaceFolders = undefined;
  });

  it("creates local and global cache directories inside the workspace and user profile", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-cache-test-"));
    vscode.workspace.workspaceFolders = [{ uri: { fsPath: tempDir } }];

    const cacheDir = await ensureCacheDirectory();
    // Cache dir now derives from EXTENSION_NAME (fallback to package name if unset)
    const expectedName =
      process.env.EXTENSION_NAME?.trim() || "usercontext-mcp-extension";
    expect(cacheDir).toBe(path.join(tempDir, expectedName));

    const stats = await fs.stat(cacheDir);
    expect(stats.isDirectory()).toBe(true);

    // Global directory should also exist
    const globalRoot = path.join(os.homedir(), ".vscode", "extensions");
    const globalCache = path.join(globalRoot, expectedName);
    const globalStats = await fs.stat(globalCache);
    expect(globalStats.isDirectory()).toBe(true);

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it("appends invocation logs to a JSONL file", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-cache-test-"));
    vscode.workspace.workspaceFolders = [{ uri: { fsPath: tempDir } }];
    const cacheDir = await ensureCacheDirectory();

    await logInvocation(cacheDir, {
      timestamp: new Date().toISOString(),
      toolName: "demo",
      args: { query: "hello" },
      context: [],
      response: { result: "ok" },
    });

    const contents = await fs.readFile(
      path.join(cacheDir, "invocations.jsonl"),
      "utf8"
    );
    expect(contents).toContain('"toolName":"demo"');

    await fs.rm(tempDir, { recursive: true, force: true });
  });

  it("stores and retrieves shared cache entries", async () => {
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "mcp-cache-test-"));
    vscode.workspace.workspaceFolders = [{ uri: { fsPath: tempDir } }];
    const cacheDir = await ensureCacheDirectory();

    await storeSharedCacheEntry(cacheDir, {
      key: "demo:123",
      toolName: "demoTool",
      timestamp: "2024-01-01T00:00:00.000Z",
      value: { greeting: "hello" },
      metadata: { source: "test" },
    });

    const entry = await readSharedCacheEntry<{ greeting: string }>(
      cacheDir,
      "demo:123"
    );
    expect(entry?.value.greeting).toBe("hello");
    expect(entry?.metadata).toEqual({ source: "test" });

    const entries = await listSharedCacheEntries(cacheDir);
    expect(entries).toHaveLength(1);
    expect(entries[0].toolName).toBe("demoTool");

    await deleteSharedCacheEntry(cacheDir, "demo:123");
    const afterDelete = await readSharedCacheEntry(cacheDir, "demo:123");
    expect(afterDelete).toBeUndefined();

    await fs.rm(tempDir, { recursive: true, force: true });
  });
});
