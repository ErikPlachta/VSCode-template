/**
 * @fileoverview Utilities for managing the local `.mcp-cache` directory.
 */

import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

/**
 * Structure for log entries persisted inside `.mcp-cache`.
 */
export interface ToolLogEntry {
  /** ISO timestamp when the invocation took place. */
  timestamp: string;
  /** Tool identifier that generated the log entry. */
  toolName: string;
  /** Arguments sent to the MCP server. */
  args: Record<string, unknown>;
  /** High-level conversation context that accompanied the request. */
  context: string[];
  /** Raw payload returned by the server, if any. */
  response?: unknown;
  /** Human-readable error message when an invocation fails. */
  error?: string;
}

/**
 * Ensure the workspace has a `.mcp-cache` directory and return its path.
 *
 * The directory is created in the current workspace when available, otherwise
 * the user's home directory is used as a fallback. This keeps diagnostic logs
 * local to the client, reducing storage pressure on the MCP backend.
 */
export async function ensureCacheDirectory(): Promise<string> {
  const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  const basePath = workspaceRoot ?? os.homedir();
  const cacheDir = path.join(basePath, ".mcp-cache");
  await fs.mkdir(cacheDir, { recursive: true });
  return cacheDir;
}

/**
 * Append an invocation log entry to `.mcp-cache/invocations.jsonl`.
 */
export async function logInvocation(cacheDir: string, entry: ToolLogEntry): Promise<void> {
  const target = path.join(cacheDir, "invocations.jsonl");
  const serialised = `${JSON.stringify(entry)}\n`;
  await fs.appendFile(target, serialised, "utf8");
}
