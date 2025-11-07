/**
 * @fileoverview Utilities for managing the local `.mybusinessMCP` directory.
 *
 * @module mcpCache
 */

import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import * as vscode from "vscode";

/** Name of the subdirectory that stores cross-tool shared cache entries. */
const SHARED_CACHE_DIR = "shared";
/** Number of milliseconds in a single day. */
const MS_PER_DAY = 86_400_000;

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
 * Structure for log entries persisted inside `.mybusinessMCP`.
 */
export interface ToolLogEntry {
  /** ISO timestamp when the invocation took place. */
  timestamp: string;
  /** Tool identifier that generated the log entry. */
  toolName: string;
  /** Arguments sent to the MCP tool implementation. */
  args: Record<string, unknown>;
  /** High-level conversation context that accompanied the request. */
  context: string[];
  /** Raw payload returned by the tool implementation, if any. */
  result?: unknown;
  /** Human-readable error message when an invocation fails. */
  error?: string;
}

/**
 * Ensure the workspace has a `.mybusinessMCP` directory and return its path.
 *
 * The directory is created in the current workspace when available, otherwise
 * the user's home directory is used as a fallback. This keeps diagnostic logs
 * local to the client, reducing storage pressure on the MCP backend.
 *
 * @returns {Promise<string>} Absolute path to the cache directory.
 * @throws {NodeJS.ErrnoException} When the directory cannot be created.
 * @example
 * ```ts
 * const cacheDir = await ensureCacheDirectory();
 * ```
 */
export async function ensureCacheDirectory(): Promise<string> {
  const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
  const basePath = workspaceRoot ?? os.homedir();
  const cacheDir = path.join(basePath, ".mybusinessMCP");
  await fs.mkdir(cacheDir, { recursive: true });
  return cacheDir;
}

/**
 * Append an invocation log entry to `.mybusinessMCP/invocations.jsonl`.
 *
 * @param {string} cacheDir Directory returned by {@link ensureCacheDirectory}.
 * @param {ToolLogEntry} entry Log entry to persist.
 * @returns {Promise<void>} Resolves when the entry has been appended.
 * @throws {NodeJS.ErrnoException} When the log file cannot be written.
 */
export async function logInvocation(cacheDir: string, entry: ToolLogEntry): Promise<void> {
  const target = path.join(cacheDir, "invocations.jsonl");
  const serialised = `${JSON.stringify(entry)}\n`;
  await fs.appendFile(target, serialised, "utf8");
}

/**
 * Remove cache artefacts older than the configured retention window.
 *
 * @param {string} cacheDir Directory returned by {@link ensureCacheDirectory}.
 * @param {number} retentionDays Maximum number of days to retain cache entries.
 * @returns {Promise<void>} Resolves when pruning completes.
 */
export async function pruneCache(cacheDir: string, retentionDays: number): Promise<void> {
  if (!Number.isFinite(retentionDays) || retentionDays <= 0) {
    return;
  }
  const cutoff = Date.now() - retentionDays * MS_PER_DAY;

  const sharedDir = path.join(cacheDir, SHARED_CACHE_DIR);
  try {
    const files = await fs.readdir(sharedDir);
    await Promise.all(
      files.map(async (file) => {
        if (!file.endsWith(".json")) {
          return;
        }
        try {
          const raw = await fs.readFile(path.join(sharedDir, file), "utf8");
          const entry = JSON.parse(raw) as SharedCacheEntry;
          const timestamp = new Date(entry.timestamp).getTime();
          if (Number.isFinite(timestamp) && timestamp < cutoff) {
            await fs.unlink(path.join(sharedDir, file));
          }
        } catch (error) {
          if ((error as NodeJS.ErrnoException).code === "ENOENT") {
            return;
          }
          throw error;
        }
      })
    );
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }

  const logPath = path.join(cacheDir, "invocations.jsonl");
  try {
    const raw = await fs.readFile(logPath, "utf8");
    const lines = raw.split("\n").filter((line) => line.trim().length > 0);
    const retained = lines.filter((line) => {
      try {
        const entry = JSON.parse(line) as ToolLogEntry;
        const timestamp = new Date(entry.timestamp).getTime();
        return Number.isFinite(timestamp) ? timestamp >= cutoff : true;
      } catch {
        return true;
      }
    });
    if (retained.length !== lines.length) {
      const serialised = retained.map((line) => line.trim()).join("\n");
      await fs.writeFile(logPath, serialised ? `${serialised}\n` : "", "utf8");
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }
}

/**
 * Persist a shared cache entry that can be re-used by other MCP tools.
 *
 * @template T
 * @param {string} cacheDir Directory returned by {@link ensureCacheDirectory}.
 * @param {SharedCacheEntry<T>} entry Payload to store on disk.
 * @returns {Promise<void>} Resolves when the entry has been written.
 * @throws {NodeJS.ErrnoException} When the entry cannot be persisted.
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
 * @param {string} cacheDir Directory returned by {@link ensureCacheDirectory}.
 * @param {string} key Unique cache entry key.
 * @returns {Promise<SharedCacheEntry<T> | undefined>} Stored entry or `undefined` if not found.
 * @throws {NodeJS.ErrnoException} When the file exists but cannot be read.
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
 * @param {string} cacheDir Directory returned by {@link ensureCacheDirectory}.
 * @returns {Promise<SharedCacheEntry<T>[]>} Array of cached entries.
 * @throws {NodeJS.ErrnoException} When the directory cannot be read.
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
 * @param {string} cacheDir Directory returned by {@link ensureCacheDirectory}.
 * @param {string} key Cache entry key to delete.
 * @returns {Promise<void>} Resolves when the entry has been removed or did not exist.
 * @throws {NodeJS.ErrnoException} When the delete operation fails for reasons other than missing files.
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
 * @param {string} key Arbitrary cache entry key.
 * @returns {string} Sanitised key that can be used as a filename.
 */
function sanitiseKey(key: string): string {
  return key.replace(/[^a-z0-9-_]+/gi, "_");
}
