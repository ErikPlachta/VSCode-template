/**
 * @packageDocumentation Utilities for managing the local `.mcp-cache` directory.
 *
 * @module mcpCache
 */

import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

/** Name of the subdirectory that stores cross-tool shared cache entries. */
const SHARED_CACHE_DIR = "shared";

/**
 * Minimal representation of a cached artefact that can be exchanged across
 * MCP tools.
 */
export interface SharedCacheEntry<T = unknown> {
  /** Uniquely identifies the record on disk. */
  key: string;
  /** Name of the tool that produced the cached payload. */
  toolName: string;
  /** Timestamp recorded when the value was persisted. */
  timestamp: string;
  /** Arbitrary payload produced by the tool. */
  value: T;
  /** Optional metadata hints for downstream orchestration. */
  metadata?: Record<string, unknown>;
}

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
 * @returns {Promise<string>} - TODO: describe return value.
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
 *
 * @param {string} cacheDir - cacheDir parameter.
 * @param {ToolLogEntry} entry - entry parameter.
 * @returns {Promise<void>} - TODO: describe return value.
 */
export async function logInvocation(
  cacheDir: string,
  entry: ToolLogEntry
): Promise<void> {
  const target = path.join(cacheDir, "invocations.jsonl");
  const serialised = `${JSON.stringify(entry)}\n`;
  await fs.appendFile(target, serialised, "utf8");
}

/**
 * Persist a shared cache entry that can be re-used by other MCP tools.
 *
 * @template T
 *
 * @param {string} cacheDir - cacheDir parameter.
 * @param {SharedCacheEntry<T>} entry - entry parameter.
 * @returns {Promise<void>} - TODO: describe return value.
 */
export async function storeSharedCacheEntry<T>(
  cacheDir: string,
  entry: SharedCacheEntry<T>
): Promise<void> {
  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  await fs.mkdir(sharedDir, { recursive: true });
  const fileName = `${sanitizeKey(entry.key)}.json`;
  const target = path.join(sharedDir, fileName);
  await fs.writeFile(target, JSON.stringify(entry, null, 2), "utf8");
}

/**
 * Retrieve a shared cache entry by key.
 *
 * @template T
 *
 * @param {string} cacheDir - cacheDir parameter.
 * @param {string} key - key parameter.
 * @returns {Promise<SharedCacheEntry<T> | undefined>} - TODO: describe return value.
 * @throws {Error} - May throw an error.
 */
export async function readSharedCacheEntry<T = unknown>(
  cacheDir: string,
  key: string
): Promise<SharedCacheEntry<T> | undefined> {
  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  const fileName = `${sanitizeKey(key)}.json`;
  const target = path.join(sharedDir, fileName);
  try {
    const raw = await fs.readFile(target, "utf8");
    return JSON.parse(raw) as SharedCacheEntry<T>;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
}

/**
 * Enumerate all cached artifacts currently stored on disk.
 *
 * @template T
 *
 * @param {string} cacheDir - cacheDir parameter.
 * @returns {Promise<SharedCacheEntry<T>[]>} - TODO: describe return value.
 * @throws {Error} - May throw an error.
 */
export async function listSharedCacheEntries<T = unknown>(
  cacheDir: string
): Promise<SharedCacheEntry<T>[]> {
  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  try {
    const files = await fs.readdir(sharedDir);
    const entries: SharedCacheEntry<T>[] = [];
    for (const file of files) {
      if (!file.endsWith(".json")) {
        continue;
      }
      const raw = await fs.readFile(path.join(sharedDir, file), "utf8");
      entries.push(JSON.parse(raw) as SharedCacheEntry<T>);
    }
    return entries;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

/**
 * Remove a shared cache entry when it is no longer relevant.
 *
 * @param {string} cacheDir - cacheDir parameter.
 * @param {string} key - key parameter.
 * @returns {Promise<void>} - TODO: describe return value.
 * @throws {Error} - May throw an error.
 */
export async function deleteSharedCacheEntry(
  cacheDir: string,
  key: string
): Promise<void> {
  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  const fileName = `${sanitizeKey(key)}.json`;
  const target = path.join(sharedDir, fileName);
  try {
    await fs.unlink(target);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return;
    }
    throw error;
  }
}

/**
 * Normalize a cache key so it is safe for use as a file name.
 *
 * @param {string} key - key parameter.
 * @returns {string} - TODO: describe return value.
 */
function sanitizeKey(key: string): string {
  return key.replace(/[^a-z0-9-_]+/gi, "_");
}
