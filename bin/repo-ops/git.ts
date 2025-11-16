/**
 * @packageDocumentation
 * Git helpers for repo-ops. Provides a test seam for numstat parsing and
 * file change list derivation with include/exclude filters.
 */
import { execSync } from "node:child_process";

/** Obtain a git --numstat string from staged/working tree or from a fake var. */
export function getNumstat(cwd: string): string | undefined {
  const fake = process.env.REPO_OPS_FAKE_GIT_NUMSTAT;
  if (typeof fake === "string" && fake.length) return fake;
  const run = (cmd: string): string | undefined => {
    try {
      return execSync(cmd, { cwd, stdio: ["ignore", "pipe", "pipe"] })
        .toString()
        .trim();
    } catch {
      return undefined;
    }
  };
  let out = run("git diff --numstat --staged");
  if (!out) out = run("git diff --numstat");
  return out || undefined;
}

/**
 * Derive bullet list from numstat with include/exclude filtering.
 */
export function deriveFilesChangedList(
  numstat: string,
  options?: { includePrefixes?: string[]; excludePrefixes?: string[] }
): string | undefined {
  const lines = numstat
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => !/\sCHANGELOG\.md$/.test(l));
  if (!lines.length) return undefined;
  const includePrefixes = (options?.includePrefixes || []).filter(Boolean);
  const excludePrefixes = (options?.excludePrefixes || []).filter(Boolean);
  const bullets = lines
    .map((l) => {
      const parts = l.split(/\s+/);
      const added = parts[0] ?? "0";
      const deleted = parts[1] ?? "0";
      const rawPath = parts.slice(2).join(" ");
      const file = rawPath.replace(/\\/g, "/");
      return { file, added, deleted };
    })
    .filter((rec) => {
      if (excludePrefixes.some((p) => rec.file.startsWith(p))) return false;
      if (includePrefixes.length)
        return includePrefixes.some((p) => rec.file.startsWith(p));
      return true;
    })
    .map((rec) => `- ${rec.file}: +${rec.added} -${rec.deleted}`);
  return bullets.length ? bullets.join("\n") : undefined;
}
