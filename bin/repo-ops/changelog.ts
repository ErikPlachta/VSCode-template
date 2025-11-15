/**
 * @packageDocumentation
 * Changelog helpers for repo-ops.
 * Includes a logs-only entry scaffold generator and a write operation
 * that inserts entries under the CHANGELOG logs section with backups.
 */
import { backupFile, ensureDir, readFileUtf8, writeFileUtf8 } from "./fs";
import { defaultConfig } from "./repo-ops.config";
import type { ApplyPlan, RepoPaths } from "./types";
import * as path from "path";
import * as fs from "fs";
// Hashing & structural integrity handled via changelogIntegrity utilities.
import { validateChangelog, computeChainHash } from "./changelogIntegrity";
import { acquireLock, releaseLock } from "./lock";

/**
 * Normalize newlines to \n for consistent parsing.
 *
 * @param {string} text - Input text.
 * @returns {string} Normalized text.
 */
function nl(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}

/**
 * Format a date to 'YYYY-MM-DD HH:MM:SS' in a specific IANA timezone.
 *
 * @param {Date} d - Date instance.
 * @param {string} timeZone - IANA timezone (e.g., 'America/New_York').
 * @returns {string} Formatted local timestamp.
 */
function formatTimestamp(d: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .formatToParts(d)
    .reduce<Record<string, string>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    }, {});
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
}
/**
 * Format a date to 'YYYY-MM-DD' in a specific IANA timezone.
 *
 * @param d - Date instance.
 * @param timeZone - IANA timezone.
 * @returns Date string in YYYY-MM-DD.
 */
function formatDay(d: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(d)
    .reduce<Record<string, string>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

/**
 * Build a logs-only changelog entry scaffold.
 *
 * @param {string} type - Entry type (feat|fix|docs|refactor|test|perf|ci|build|style|chore).
 * @param {string} summary - One-line summary.
 * @param {string} [context] - Problem/Context description.
 * @returns {string} Markdown block ready to paste into CHANGELOG.md.
 */
export function scaffoldEntry(
  type: string,
  summary: string,
  context?: string
): string {
  const now = new Date();
  const ts = formatTimestamp(now, defaultConfig.changelog.timeZone);
  const cleanType = (type || "chore").trim();
  const cleanSummary = (summary || "Describe the change").trim();
  const ctx = (context || "What was wrong or needed").trim();
  return [
    `#### ${ts} ${cleanType}: ${cleanSummary}`,
    "",
    `**Problem/Context**: ${ctx}`,
    "",
    "**Changes Made**:",
    "",
    "1. file: PATH (lines X–Y) — what changed and why",
    "2. file: PATH (lines A–B) — what changed and why",
    "",
    "**Architecture Notes**: (patterns/decisions)",
    "",
    "**Files Changed**: (list files with line counts)",
    "",
    "**Testing**: Build: PASS|FAIL; Tests: summary; Lint: PASS|FAIL; Docs: PASS|FAIL; Health: PASS|FAIL; Coverage: %; JSDoc: status",
    "",
    "**Impact**: (what this enables/fixes)",
  ].join("\n");
}

/**
 * Insert a new entry block into CHANGELOG.md under the logs section, grouped by current day.
 * If today's day header does not exist, it will be created after the Logs heading.
 * New entries are placed newest-first within the day (immediately after the day header).
 *
 * @param {string} content - Full CHANGELOG.md content.
 * @param {string} entryBlock - Markdown for the new entry (from scaffoldEntry).
 * @returns {{ next:string, inserted:boolean }} Updated content and whether insertion occurred.
 */
function insertEntryIntoChangelog(
  content: string,
  entryBlock: string
): { next: string; inserted: boolean } {
  const src = nl(content);
  const beginMarker = "<!-- CHANGELOG:BEGIN:LOGS -->";
  const beginIdx = src.indexOf(beginMarker);
  if (beginIdx === -1) return { next: content, inserted: false };

  const today = formatDay(new Date(), defaultConfig.changelog.timeZone);
  const dayHeader = `### [${today}]`;

  // Find Logs heading after the marker
  const logsHeader = "## Logs";
  const logsIdx = src.indexOf(logsHeader, beginIdx);
  if (logsIdx === -1) return { next: content, inserted: false };
  const logsLineEnd = src.indexOf("\n", logsIdx + logsHeader.length);
  const logsInsertBase = logsLineEnd === -1 ? src.length : logsLineEnd + 1;

  // Look for today's header
  const dayIdx = src.indexOf(dayHeader, logsInsertBase);
  if (dayIdx !== -1) {
    // Insert right after the day header line
    const dayLineEnd = src.indexOf("\n", dayIdx + dayHeader.length);
    const insertPos = dayLineEnd === -1 ? src.length : dayLineEnd + 1;
    const before = src.slice(0, insertPos);
    const after = src.slice(insertPos);
    const insertion =
      (before.endsWith("\n\n") ? "" : before.endsWith("\n") ? "\n" : "\n\n") +
      entryBlock +
      "\n\n";
    return { next: before + insertion + after, inserted: true };
  }

  // No header for today; create it just after Logs heading
  const before = src.slice(0, logsInsertBase);
  const after = src.slice(logsInsertBase);
  const block = `\n${dayHeader}\n\n${entryBlock}\n\n`;
  return { next: before + block + after, inserted: true };
}

/** Arguments to write a CHANGELOG entry. */
export interface WriteEntryArgs {
  /** Entry type (validated against config; defaults to 'chore' if unknown). */
  type: string;
  /** One-line summary. */
  summary: string;
  /** Optional problem/context description. */
  context?: string;
  /** When true, applies changes and creates a backup; default dry-run. */
  write?: boolean;
  /** When true, runs gates and appends a Verification block to the entry. */
  autoVerify?: boolean;
}

/**
 * Write a logs-only entry into CHANGELOG.md under the Logs section.
 * Dry-run by default. On write, creates a backup under the configured backup folder.
 *
 * @param {WriteEntryArgs} args - Entry fields and write flag.
 * @returns {Promise<{changed:boolean; plans:ApplyPlan[]; dryRun:boolean; notes?:string[]}>} Result summary.
 */
export async function writeEntry(args: WriteEntryArgs): Promise<{
  changed: boolean;
  plans: ApplyPlan[];
  dryRun: boolean;
  notes?: string[];
}> {
  const repo: RepoPaths = defaultConfig.resolveRepoPaths(process.cwd());
  const allowed = new Set(defaultConfig.changelog.entryTypes);
  const type = allowed.has(args.type) ? args.type : "chore";
  const block = scaffoldEntry(type, args.summary, args.context);
  const content = await readFileUtf8(repo.changelog);
  // Acquire concurrency lock early (applies for dry-run to surface contention).
  const lock = acquireLock(repo.root, "changelog");
  let notes: string[] = [];
  if (!lock.acquired) {
    notes.push(
      "Could not acquire changelog write lock: " + lock.notes.join("; ")
    );
    return {
      changed: false,
      plans: [],
      dryRun: !(args.write ?? false),
      notes,
    };
  } else if (lock.notes.length) {
    notes.push(...lock.notes);
  }
  // Pre-write structural validation
  const preValidation = await validateChangelog(repo.changelog);
  const originalHash = preValidation.fileHash;
  if (preValidation.errors.length) {
    notes.push(
      "Pre-write validation failed; aborting write: " +
        preValidation.errors.join("; ")
    );
    releaseLock(lock.lockPath);
    return {
      changed: false,
      plans: [],
      dryRun: !(args.write ?? false),
      notes,
    };
  }
  const { next, inserted } = insertEntryIntoChangelog(content, block);
  if (!inserted) {
    return {
      changed: false,
      plans: [],
      dryRun: !(args.write ?? false),
      notes: ["Could not locate Logs section markers in CHANGELOG.md."],
    };
  }
  const plan: ApplyPlan = {
    filePath: repo.changelog,
    description: "Insert logs-only changelog entry",
    beforeSnippet: content.slice(0, 400),
    afterSnippet: next.slice(0, 400),
    wouldWriteBytes: Buffer.byteLength(next, "utf8"),
  };
  if (!args.write)
    return {
      changed: true,
      plans: [plan],
      dryRun: true,
      notes: ["Dry-run: no files written", ...notes],
    };
  const backupRoot = path.join(repo.root, defaultConfig.backupDirName);
  await ensureDir(backupRoot);
  await backupFile(repo.changelog, backupRoot);
  // Atomic write via temp file then rename to mitigate partial writes.
  const tmpPath = repo.changelog + ".tmp";
  await fs.promises.writeFile(tmpPath, next, "utf8");
  await fs.promises.rename(tmpPath, repo.changelog);

  // Post-write validation
  const postValidation = await validateChangelog(repo.changelog);
  if (postValidation.errors.length) {
    notes.push(
      "Post-write validation failed; restoring backup. Errors: " +
        postValidation.errors.join("; ")
    );
    try {
      await writeFileUtf8(repo.changelog, content);
      notes.push("Rollback to pre-write state completed.");
    } catch (e) {
      notes.push(
        "Rollback failed: " + (e instanceof Error ? e.message : String(e))
      );
    }
    releaseLock(lock.lockPath);
    return { changed: false, plans: [plan], dryRun: false, notes };
  }

  // Optionally run gates and append a Verification block for this entry.
  let finalContent = next;
  if (args.autoVerify) {
    const headingLine = block.split("\n", 1)[0] ?? "";
    const run = (cmd: string): { ok: boolean; out: string } => {
      try {
        const { execSync } = require("child_process");
        const out = execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] }).toString();
        return { ok: true, out };
      } catch (e) {
        const err = (e && (e as any).stdout ? (e as any).stdout.toString() : (e as Error).message) || String(e);
        return { ok: false, out: err };
      }
    };
    const b = run("npm run compile");
    const t = run("npm test --silent");
    const d = run("npm run prebuild");
    const tz = defaultConfig.changelog.timeZone;
    const stampDay = formatDay(new Date(), tz);
    const verification = [
      `##### Verification – ${stampDay} (Auto Verify)`,
      "",
      `- Build: ${b.ok ? "PASS" : "FAIL"}`,
      `- Tests: ${t.ok ? "PASS" : "FAIL"}`,
      `- Docs: ${d.ok ? "PASS" : "FAIL"}`,
      `- Health: ${d.ok ? "PASS" : "UNKNOWN"}`,
      `- Lint: N/A`,
      "",
    ].join("\n");
    const current = await fs.promises.readFile(repo.changelog, "utf8");
    const lines = current.replace(/\r\n?/g, "\n").split("\n");
    const startIdx = lines.findIndex((ln) => ln.trim() === headingLine.trim());
    if (startIdx !== -1) {
      let endIdx = lines.length;
      for (let i = startIdx + 1; i < lines.length; i++) {
        if (/^####\s/.test(lines[i]!) || /^### \[\d{4}-\d{2}-\d{2}\]/.test(lines[i]!)) {
          endIdx = i;
          break;
        }
      }
      const updated = [
        ...lines.slice(0, endIdx),
        "",
        verification,
        ...lines.slice(endIdx),
      ].join("\n");
      const tmp2 = repo.changelog + ".tmp";
      await fs.promises.writeFile(tmp2, updated, "utf8");
      await fs.promises.rename(tmp2, repo.changelog);
      finalContent = updated;
    }
  }

  // Build / update JSON index (schema v2) for fast tooling & integrity checks.
  const outDir = path.join(repo.root, "out", "changelog");
  await ensureDir(outDir);
  const indexPath = path.join(outDir, "index.json");
  const hasConflictMarkers = /<<<<<<<|=======|>>>>>>>/.test(finalContent);
  if (hasConflictMarkers) {
    notes.push(
      "Detected unresolved merge conflict markers in CHANGELOG.md; resolve and rewrite."
    );
  }
  let prior: ChangelogJsonIndexV2 | undefined;
  if (fs.existsSync(indexPath)) {
    try {
      prior = JSON.parse(await fs.promises.readFile(indexPath, "utf8"));
      if (prior?.fileHash && prior.fileHash !== originalHash) {
        notes.push(
          "Changelog file modified outside repo-ops since last index update (hash mismatch before write)."
        );
      }
    } catch {
      notes.push("Failed to parse existing changelog index.json; recreating.");
    }
  }
  const parsed = await mapChangelog(repo.changelog);
  // (Fast path reserved for future: write currently performs full parse for correctness.)
  const latestValidation = await validateChangelog(repo.changelog);
  const newHash = latestValidation.fileHash;
  const chainHash = computeChainHash(prior?.chainHash, newHash);
  const index: ChangelogJsonIndexV2 = {
    schemaVersion: 2,
    generatedAt: new Date().toISOString(),
    changelogPath: repo.changelog,
    previousFileHash: prior?.fileHash,
    fileHash: newHash,
    previousChainHash: prior?.chainHash,
    chainHash,
    lastWriteTimestamp: parsed.generatedAt,
    validationWarnings: postValidation.warnings,
    validationErrors: postValidation.errors,
    entries: parsed.entries,
    entryCount: parsed.entries.length,
    days: parsed.days.map((d) => ({
      day: d.day,
      entryCount: d.entries.length,
    })),
    dayCount: parsed.days.length,
    warnings: notes.length ? notes : undefined,
  };
  try {
    await fs.promises.writeFile(
      indexPath,
      JSON.stringify(index, null, 2),
      "utf8"
    );
  } catch (e) {
    notes.push("Failed to write changelog index.json: " + (e as Error).message);
  }
  releaseLock(lock.lockPath);
  return { changed: true, plans: [plan], dryRun: false, notes };
}

/**
 * Parsed entry metadata for a single changelog entry.
 */
export interface ChangelogEntryMeta {
  /** Day (YYYY-MM-DD) derived from the enclosing day header. */
  day: string;
  /** Full timestamp (YYYY-MM-DD HH:MM:SS) from the entry heading. */
  timestamp: string;
  /** Normalized type extracted from heading (e.g., feat, fix, docs). */
  type: string;
  /** One-line summary after the type. */
  summary: string;
  /** 0-based line number within the file for the heading line. */
  line: number;
  /** Raw heading line text for reference. */
  rawHeading: string;
}

/**
 * Complete map structure emitted by `changelog map` for rapid discovery.
 */
export interface ChangelogMap {
  /** ISO timestamp when map was generated. */
  generatedAt: string;
  /** Absolute path to the changelog file. */
  file: string;
  /** Days with nested entries. */
  days: Array<{
    day: string;
    /** 0-based line number of the day header. */
    line: number;
    entries: ChangelogEntryMeta[];
  }>;
  /** Flat list of all entries for quick filtering. */
  entries: ChangelogEntryMeta[];
  /** Total line count of the source file. */
  totalLines: number;
}

const DAY_HEADER_RE = /^### \[(\d{4}-\d{2}-\d{2})\]/;
// #### 2025-11-14 12:53:22 chore: Deduplicate changelog; finalize postprocessDocs guard
const ENTRY_HEADER_RE =
  /^#### (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+([a-zA-Z]+):\s+(.*)$/;

/**
 * Build an index map of the changelog for usability (fast navigation, tooling).
 *
 * @param {string} filePath - Path to changelog file.
 * @returns {Promise<ChangelogMap>} Parsed map.
 */
export async function mapChangelog(filePath: string): Promise<ChangelogMap> {
  const buf = await fs.promises.readFile(filePath, "utf8");
  const lines = buf.replace(/\r\n?/g, "\n").split("\n");
  const days: ChangelogMap["days"] = [];
  const flat: ChangelogEntryMeta[] = [];
  let currentDay:
    | { day: string; line: number; entries: ChangelogEntryMeta[] }
    | undefined;
  lines.forEach((line, idx) => {
    const dayMatch = DAY_HEADER_RE.exec(line);
    if (dayMatch) {
      currentDay = { day: dayMatch[1], line: idx, entries: [] };
      days.push(currentDay);
      return;
    }
    const entryMatch = ENTRY_HEADER_RE.exec(line);
    if (entryMatch && currentDay) {
      const [, ts, typeRaw, summary] = entryMatch;
      const type = typeRaw.toLowerCase();
      const meta: ChangelogEntryMeta = {
        day: currentDay.day,
        timestamp: ts,
        type,
        summary: summary.trim(),
        line: idx,
        rawHeading: line,
      };
      currentDay.entries.push(meta);
      flat.push(meta);
    }
  });
  return {
    generatedAt: new Date().toISOString(),
    file: path.resolve(filePath),
    days,
    entries: flat,
    totalLines: lines.length,
  };
}

/** JSON index structure persisted for integrity checks & rapid queries. */
/** JSON index v2 structure with hash chain & validation metadata. */
interface ChangelogJsonIndexV2 {
  schemaVersion: number;
  generatedAt: string;
  changelogPath: string;
  previousFileHash?: string;
  fileHash: string;
  previousChainHash?: string;
  chainHash: string;
  lastWriteTimestamp?: string;
  validationWarnings: string[];
  validationErrors: string[];
  entries: ChangelogEntryMeta[];
  entryCount: number;
  days: { day: string; entryCount: number }[];
  dayCount: number;
  warnings?: string[];
}

/** Compute a stable SHA-256 hash of file contents. */
// Legacy computeFileHash removed – use validateChangelog + sha256 helpers.
