/**
 * @packageDocumentation
 * Session operations: rotate the current session file by archiving the
 * existing `CONTEXT-SESSION.md` and creating a fresh one from a template.
 *
 * Dry-run by default; creates backups on write.
 */
import * as path from "path";
import { ensureDir, readFileUtf8, writeFileUtf8, backupFile } from "./fs";
import { defaultConfig } from "./repo-ops.config";
import type { RepoPaths, SyncOptions, SyncResult, ApplyPlan } from "./types";

// Repo path resolution now comes from central config

/**
 * Return a compact timestamp in the form YYYYMMDD_HHMMSS.
 *
 * @returns {string} - Timestamp suitable for filenames.
 */
function stamp(): string {
  const d = new Date();
  /**
   * Pad a number to 2 digits with leading zero.
   *
   * @param {number} n - Number to pad.
   * @returns {string} - Zero-padded string.
   */
  const pad = (n: number): string => n.toString().padStart(2, "0");
  return (
    d.getFullYear().toString() +
    pad(d.getMonth() + 1) +
    pad(d.getDate()) +
    "_" +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    pad(d.getSeconds())
  );
}

// Default session template now provided by central config

/**
 * Rotate the session file: archive the current CONTEXT-SESSION.md and create a new one.
 *
 * @param {Partial<SyncOptions> & { template?: string }} options - write flag and optional template override.
 * @returns {Promise<SyncResult>} - Result with dry-run/plan details.
 */
export async function rotateSession(
  options?: Partial<SyncOptions> & { template?: string }
): Promise<SyncResult> {
  const repo: RepoPaths =
    options?.repo ?? defaultConfig.resolveRepoPaths(process.cwd());
  const write = options?.write ?? false;
  const sessionPath = path.join(repo.root, "CONTEXT-SESSION.md");
  const archiveDir = path.join(repo.root, "_ARCHIVE");
  const archivePath = path.join(archiveDir, `session__${stamp()}.md`);

  // Collect current content if present
  let current = "";
  try {
    current = await readFileUtf8(sessionPath);
  } catch {
    // missing file is acceptable
  }

  const newContent = options?.template ?? defaultConfig.sessionTemplate();
  const plan: ApplyPlan[] = [];

  // Plan: archive write (if content exists)
  if (current) {
    plan.push({
      filePath: archivePath,
      description: "Write archived session copy",
      beforeSnippet: "",
      afterSnippet: current.slice(0, 400),
      wouldWriteBytes: Buffer.byteLength(current, "utf8"),
    });
  }

  // Plan: new session file
  plan.push({
    filePath: sessionPath,
    description: current
      ? "Overwrite CONTEXT-SESSION.md with template"
      : "Create CONTEXT-SESSION.md from template",
    beforeSnippet: current.slice(0, 200),
    afterSnippet: newContent.slice(0, 200),
    wouldWriteBytes: Buffer.byteLength(newContent, "utf8"),
  });

  if (!write) {
    return {
      changed: true,
      plans: plan,
      dryRun: true,
      notes: ["Dry-run: no files written"],
    };
  }

  // Apply
  await ensureDir(archiveDir);
  if (current) {
    // Also timestamped backup to backups dir for consistency
    const backupRoot = path.join(repo.root, defaultConfig.backupDirName);
    await ensureDir(backupRoot);
    await backupFile(sessionPath, backupRoot).catch(() => Promise.resolve(""));
    await writeFileUtf8(archivePath, current);
  }
  await writeFileUtf8(sessionPath, newContent);
  return {
    changed: true,
    plans: plan,
    dryRun: false,
    notes: ["Applied rotation and wrote new session file."],
  };
}
