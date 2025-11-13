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
 * @param {Date} d - Date instance.
 * @param {string} timeZone - IANA timezone.
 * @returns {string} Date string.
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
    "1. <file path> (lines X-Y): <What changed and why>",
    "2. <file path> (lines A-B): <What changed and why>",
    "",
    "**Architecture Notes**: <Patterns/decisions>",
    "",
    "**Files Changed**: <List files with line counts>",
    "",
    "**Testing**: Build: <PASS/FAIL>; Tests: <summary>; Lint: <PASS/FAIL>; Docs: <PASS/FAIL>; Health: <PASS/FAIL>; Coverage: <%>; JSDoc: <status>",
    "",
    "**Impact**: <What this enables/fixes>",
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
}

/**
 * Write a logs-only entry into CHANGELOG.md under the Logs section.
 * Dry-run by default. On write, creates a backup under the configured backup folder.
 *
 * @param {WriteEntryArgs} args - Entry fields and write flag.
 * @returns {Promise<{changed:boolean; plans:ApplyPlan[]; dryRun:boolean; notes?:string[]}>} Result summary.
 */
export async function writeEntry(
  args: WriteEntryArgs
): Promise<{
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
    description: "Insert logs-only changelog entry (newest-first)",
    beforeSnippet: content.slice(0, 400),
    afterSnippet: next.slice(0, 400),
    wouldWriteBytes: Buffer.byteLength(next, "utf8"),
  };
  if (!args.write)
    return {
      changed: true,
      plans: [plan],
      dryRun: true,
      notes: ["Dry-run: no files written"],
    };
  const backupRoot = path.join(repo.root, defaultConfig.backupDirName);
  await ensureDir(backupRoot);
  await backupFile(repo.changelog, backupRoot);
  await writeFileUtf8(repo.changelog, next);
  return { changed: true, plans: [plan], dryRun: false };
}
