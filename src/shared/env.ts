/**
 * @packageDocumentation Environment helpers for extension-wide configuration.
 */
import * as path from "path";
import * as fs from "fs";
import dotenv from "dotenv";

// Load variables from project-level .env when present
try {
  const envPath = path.resolve(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
  } else {
    dotenv.config();
  }
} catch {
  // ignore .env loading errors in environments that manage vars externally
}

/**
 * Return the extension name for cache scoping, preferring EXTENSION_NAME from env.
 * Falls back to a safe default when not set.
 *
 * @returns {string} Canonical extension name used for cache folder naming.
 */
export function getExtensionName(): string {
  const fromEnv = (process.env.EXTENSION_NAME || "").trim();
  if (fromEnv) return fromEnv;
  // Final fallback to a safe default
  return "myBusiness-mcp-extension";
}

/**
 * Compute the cache directory name based on the extension name.
 * This is used for both workspace-local and global cache folder naming.
 *
 * @returns {string} Directory name to use for cache storage.
 */
export function getCacheDirectoryName(): string {
  return getExtensionName();
}
