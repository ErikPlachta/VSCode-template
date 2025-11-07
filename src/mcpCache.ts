/**
 * @fileoverview Utilities for managing the local `.mcp-cache` directory.
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
  /**
   * Uniquely identifies the record on disk.
   *
   * @type {string}
   */
  key: string;
  /**
   * Name of the tool that produced the cached payload.
   *
   * @type {string}
   */
  toolName: string;
  /**
   * Timestamp recorded when the value was persisted.
   *
   * @type {string}
   */
  timestamp: string;
  /**
   * Arbitrary payload produced by the tool.
   *
   * @type {T}
   */
  value: T;
  /**
   * Optional metadata hints for downstream orchestration.
   *
   * @type {Record<string, unknown>=}
   */
  metadata?: Record<string, unknown>;
}

/**
 * Structure for log entries persisted inside `.mcp-cache`.
 */
export interface ToolLogEntry {
  /**
   * ISO timestamp when the invocation took place.
   *
   * @type {string}
   */
  timestamp: string;
  /**
   * Tool identifier that generated the log entry.
   *
   * @type {string}
   */
  toolName: string;
  /**
   * Arguments sent to the MCP server.
   *
   * @type {Record<string, unknown>}
   */
  args: Record<string, unknown>;
  /**
   * High-level conversation context that accompanied the request.
   *
   * @type {string[]}
   */
  context: string[];
  /**
   * Raw payload returned by the server, if any.
   *
   * @type {unknown=}
   */
  response?: unknown;
  /**
   * Human-readable error message when an invocation fails.
   *
   * @type {string=}
   */
  error?: string;
}

/**
 * Ensure the workspace has a `.mcp-cache` directory and return its path.
 *
 * The directory is created in the current workspace when available, otherwise
 * the user's home directory is used as a fallback. This keeps diagnostic logs
 * local to the client, reducing storage pressure on the MCP backend.
 *
 * @returns {Promise<string>} Absolute file-system location of the cache folder.
 * @throws {NodeJS.ErrnoException} When the directory cannot be created.
 * @example
 * const dir = await ensureCacheDirectory();
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
 * @param {string} cacheDir - Base directory where the log file lives.
 * @param {ToolLogEntry} entry - Invocation metadata to persist.
 * @returns {Promise<void>} Resolves once the entry has been appended.
 * @throws {NodeJS.ErrnoException} When writing to disk fails.
 * @example
 * await logInvocation(cacheDir, logEntry);
 */
export async function logInvocation(cacheDir: string, entry: ToolLogEntry): Promise<void> {
  const target = path.join(cacheDir, "invocations.jsonl");
  const serialised = `${JSON.stringify(entry)}\n`;
  await fs.appendFile(target, serialised, "utf8");
}

/**
 * Persist a shared cache entry that can be re-used by other MCP tools.
 *
 * @template T
 * @param {string} cacheDir - Base directory containing the shared cache.
 * @param {SharedCacheEntry<T>} entry - Payload and metadata to store.
 * @returns {Promise<void>} Resolves once the entry has been written.
 * @throws {NodeJS.ErrnoException} When the file system cannot be updated.
 * @example
 * await storeSharedCacheEntry(cacheDir, entry);
 */
export async function storeSharedCacheEntry<T>(
  cacheDir: string,
  entry: SharedCacheEntry<T>
): Promise<void> {
  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  await fs.mkdir(sharedDir, { recursive: true });
  const fileName = `${sanitiseKey(entry.key)}.json`;
  const target = path.join(sharedDir, fileName);
  await fs.writeFile(target, JSON.stringify(entry, null, 2), "utf8");
}

/**
 * Retrieve a shared cache entry by key.
 *
 * @template T
 * @param {string} cacheDir - Base directory containing the shared cache.
 * @param {string} key - Identifier supplied when storing the cache entry.
 * @returns {Promise<SharedCacheEntry<T> | undefined>} Persisted entry or `undefined` if not found.
 * @throws {NodeJS.ErrnoException} When the file cannot be read for reasons other than missing data.
 * @example
 * const entry = await readSharedCacheEntry(cacheDir, "report");
 */
export async function readSharedCacheEntry<T = unknown>(
  cacheDir: string,
  key: string
): Promise<SharedCacheEntry<T> | undefined> {
  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  const fileName = `${sanitiseKey(key)}.json`;
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
 * Enumerate all cached artefacts currently stored on disk.
 *
 * @template T
 * @param {string} cacheDir - Base directory containing the shared cache.
 * @returns {Promise<Array<SharedCacheEntry<T>>>} List of stored artefacts.
 * @throws {NodeJS.ErrnoException} When directory listing fails for reasons other than absence.
 * @example
 * const entries = await listSharedCacheEntries(cacheDir);
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
 * @param {string} cacheDir - Base directory containing the shared cache.
 * @param {string} key - Identifier of the entry to delete.
 * @returns {Promise<void>} Resolves after the file has been removed or is confirmed absent.
 * @throws {NodeJS.ErrnoException} When file deletion fails for unexpected reasons.
 * @example
 * await deleteSharedCacheEntry(cacheDir, "report");
 */
export async function deleteSharedCacheEntry(cacheDir: string, key: string): Promise<void> {
  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  const fileName = `${sanitiseKey(key)}.json`;
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
 * Normalise a cache key so it is safe for use as a file name.
 *
 * @param {string} key - Cache key that may contain unsafe characters.
 * @returns {string} Sanitised key suitable for file-system usage.
 * @example
 * const safeKey = sanitiseKey("My Report");
 */
function sanitiseKey(key: string): string {
  return key.replace(/[^a-z0-9-_]+/gi, "_");
}
