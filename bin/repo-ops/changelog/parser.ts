import fs from "node:fs";
import path from "node:path";
import { ChangelogConfig, ChangelogData, OutstandingTaskItem } from "./types";
import { DAY_HEADING_PREFIX, LOG_HEADING_PREFIX } from "./config";

export interface SectionRange {
  start: number;
  end: number;
}

export function readFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

export function writeFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, "utf8");
}

export function ensureMarkers(content: string, cfg: ChangelogConfig): string {
  const lines = content.split(/\r?\n/);
  const outIdx = lines.findIndex((l) => l.includes(cfg.headings.outstanding));
  const logsIdx = lines.findIndex((l) => l.trim() === cfg.headings.logs);

  // Insert Outstanding markers if missing
  const hasOutBegin = lines.some((l) =>
    l.includes(cfg.markers.outstandingBegin)
  );
  const hasOutEnd = lines.some((l) => l.includes(cfg.markers.outstandingEnd));
  if (outIdx !== -1 && (!hasOutBegin || !hasOutEnd)) {
    // place begin before heading, end before Logs heading
    if (!hasOutBegin) lines.splice(outIdx, 0, cfg.markers.outstandingBegin);
    const logsHeadingIdx = lines.findIndex(
      (l) => l.trim() === cfg.headings.logs
    );
    const endAt = logsHeadingIdx !== -1 ? logsHeadingIdx : lines.length;
    if (!hasOutEnd) lines.splice(endAt, 0, cfg.markers.outstandingEnd);
  }

  // Insert Logs begin marker if missing (just above Logs heading)
  const hasLogsBegin = lines.some((l) => l.includes(cfg.markers.logsBegin));
  if (logsIdx !== -1 && !hasLogsBegin) {
    lines.splice(logsIdx, 0, cfg.markers.logsBegin);
  }
  // Ensure logs end marker exists at EOF
  const hasLogsEnd = lines.some((l) => l.includes(cfg.markers.logsEnd ?? ""));
  if (cfg.markers.logsEnd && !hasLogsEnd) {
    if (lines[lines.length - 1] !== "") lines.push("");
    lines.push(cfg.markers.logsEnd);
  }

  return lines.join("\n");
}

export function findLogsSection(
  content: string,
  cfg: ChangelogConfig
): SectionRange | null {
  const lines = content.split(/\r?\n/);
  const begin = lines.findIndex((l) => l.includes(cfg.markers.logsBegin));
  if (begin === -1) return null;
  const end = cfg.markers.logsEnd
    ? lines.findIndex(
        (l, idx) => idx > begin && l.includes(cfg.markers.logsEnd!)
      )
    : lines.length;
  return { start: begin, end: end === -1 ? lines.length : end };
}

export function insertLogEntry(
  content: string,
  cfg: ChangelogConfig,
  dateStr: string,
  timeStr: string,
  type: string,
  summary: string,
  details?: string[],
  verification?: { summary: string; lines: string[] }
): string {
  const lines = content.split(/\r?\n/);
  const dayHeading = `### [${dateStr}]`;
  const dayIdx = lines.findIndex((l) => l.startsWith(dayHeading));
  const logHeading = `${LOG_HEADING_PREFIX}${dateStr} ${timeStr} ${type}: ${summary}`;

  if (dayIdx === -1) {
    // Insert new day heading at top of Logs
    const logsHeadingIdx = lines.findIndex(
      (l) => l.trim() === cfg.headings.logs
    );
    if (logsHeadingIdx === -1) return content; // no Logs section found
    let insertAt = logsHeadingIdx + 1;
    // Ensure exactly one blank line after day heading. Avoid double-blank lines.
    if (lines[insertAt] === "") insertAt++;
    const entryBlock = [dayHeading, "", logHeading, ""]; // ensure blank line after log heading
    if (details && details.length) {
      for (const d of details) entryBlock.push(`- ${d}`);
    }
    if (verification && verification.summary) {
      entryBlock.push("");
      entryBlock.push(`##### Verification – ${verification.summary}`);
      entryBlock.push("");
      for (const v of verification.lines || []) entryBlock.push(`- ${v}`);
    }
    entryBlock.push("");
    lines.splice(insertAt, 0, ...entryBlock);
    return lines.join("\n");
  }
  // Insert under existing day heading (newest-first)
  const insertAt = dayIdx + 1;
  if (lines[insertAt] !== "") lines.splice(insertAt, 0, "");
  const insertion: string[] = [logHeading, ""]; // ensure blank line after log heading
  if (details && details.length) {
    for (const d of details) insertion.push(`- ${d}`);
  }
  if (verification && verification.summary) {
    insertion.push("");
    insertion.push(`##### Verification – ${verification.summary}`);
    insertion.push("");
    for (const v of verification.lines || []) insertion.push(`- ${v}`);
  }
  insertion.push("");
  lines.splice(insertAt + 1, 0, ...insertion);
  return lines.join("\n");
}

/**
 * Remove completed items from Outstanding section based on configured prefixes.
 * Returns updated content and count of pruned lines.
 */
export function pruneCompletedOutstanding(
  content: string,
  cfg: ChangelogConfig
): { content: string; pruned: number; removedLines: string[] } {
  const lines = content.split(/\r?\n/);
  const sec = findOutstandingSection(content, cfg);
  if (!sec) return { content, pruned: 0, removedLines: [] };
  const prefixes = cfg.patterns.completedPrefixes || [];
  if (!prefixes.length) return { content, pruned: 0, removedLines: [] };
  let pruned = 0;
  const removed: string[] = [];
  for (let i = sec.start + 1; i < sec.end && i < lines.length; i++) {
    const trimmed = lines[i]?.trim() || "";
    if (!trimmed) continue;
    if (prefixes.some((p) => trimmed.startsWith(p))) {
      removed.push(trimmed);
      lines.splice(i, 1);
      pruned++;
      i--;
      // adjust section end since we removed a line
      sec.end--;
    }
  }
  return { content: lines.join("\n"), pruned, removedLines: removed };
}

export function findOutstandingSection(
  content: string,
  cfg: ChangelogConfig
): SectionRange | null {
  const lines = content.split(/\r?\n/);
  const begin = lines.findIndex((l) =>
    l.includes(cfg.markers.outstandingBegin)
  );
  if (begin === -1) return null;
  const end = lines.findIndex(
    (l, idx) => idx > begin && l.includes(cfg.markers.outstandingEnd)
  );
  return { start: begin, end: end === -1 ? lines.length : end };
}

export function ensureCurrentTasksSection(
  content: string,
  cfg: ChangelogConfig
): string {
  if (!cfg.headings.currentTasks) return content;
  const lines = content.split(/\r?\n/);
  const outIdx = lines.findIndex((l) => l.trim() === cfg.headings.outstanding);
  if (outIdx === -1) return content;
  const currentIdx = lines.findIndex(
    (l, idx) => idx > outIdx && l.trim() === cfg.headings.currentTasks
  );
  if (currentIdx !== -1) return content;
  // Insert after Outstanding heading, before any priority headings
  let insertAt = outIdx + 1;
  // Skip a single blank line after Outstanding header if present
  if (lines[insertAt] === "") insertAt++;
  const headingBlock = [cfg.headings.currentTasks, ""];
  lines.splice(insertAt, 0, ...headingBlock);
  return lines.join("\n");
}

export function insertCurrentTask(
  content: string,
  cfg: ChangelogConfig,
  text: string,
  subTasks?: string[]
): string {
  content = ensureCurrentTasksSection(content, cfg);
  const lines = content.split(/\r?\n/);
  const currentIdx = lines.findIndex(
    (l) => l.trim() === cfg.headings.currentTasks
  );
  if (currentIdx === -1) return content;
  let insertAt = currentIdx + 1;
  // Ensure exactly one blank line after the heading
  if (lines[insertAt] !== "") {
    lines.splice(insertAt, 0, "");
    insertAt++;
  } else {
    insertAt++;
  }
  // Append at end of current tasks block (until next heading or end marker)
  while (
    insertAt < lines.length &&
    lines[insertAt] !== cfg.headings.currentTasks &&
    !lines[insertAt].startsWith(cfg.patterns.priorityPrefix) &&
    lines[insertAt] !== cfg.markers.outstandingEnd &&
    !lines[insertAt].startsWith("## ")
  ) {
    insertAt++;
  }
  lines.splice(insertAt, 0, `${cfg.patterns.bullet}${text}`);
  if (subTasks && subTasks.length) {
    for (const st of subTasks) {
      insertAt++;
      lines.splice(insertAt, 0, `${cfg.patterns.subBullet}${st}`);
    }
  }
  return lines.join("\n");
}

export function parseOutstanding(
  content: string,
  cfg: ChangelogConfig
): OutstandingTaskItem[] {
  const lines = content.split(/\r?\n/);
  const sec = findOutstandingSection(content, cfg);
  if (!sec) return [];
  const items: OutstandingTaskItem[] = [];
  let currentPriority: 1 | 2 | 3 = 1;
  let lastIndex: number | null = null;
  for (let i = sec.start; i < sec.end; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed.startsWith(`${cfg.patterns.priorityPrefix}1`))
      currentPriority = 1;
    else if (trimmed.startsWith(`${cfg.patterns.priorityPrefix}2`))
      currentPriority = 2;
    else if (trimmed.startsWith(`${cfg.patterns.priorityPrefix}3`))
      currentPriority = 3;
    else if (trimmed.startsWith(cfg.patterns.bullet)) {
      items.push({ rawLine: line, priority: currentPriority });
      lastIndex = items.length - 1;
    } else if (
      trimmed.startsWith(cfg.patterns.subBullet.trim()) &&
      lastIndex !== null
    ) {
      const withoutMarker = trimmed
        .replace(cfg.patterns.subBullet.trim(), "")
        .trimStart();
      const target = items[lastIndex];
      target.subTasks = target.subTasks || [];
      target.subTasks.push(withoutMarker);
    }
  }
  return items;
}

export function insertOutstandingItem(
  content: string,
  cfg: ChangelogConfig,
  priority: 1 | 2 | 3,
  text: string,
  subTasks?: string[]
): string {
  const lines = content.split(/\r?\n/);
  const sec = findOutstandingSection(content, cfg);
  if (!sec) throw new Error("Outstanding Tasks section not found");
  const heading = `${cfg.patterns.priorityPrefix}${priority}`;
  const headingIdx = lines.findIndex(
    (line, idx) =>
      idx >= sec.start && idx <= sec.end && line.trim().startsWith(heading)
  );
  if (headingIdx === -1) throw new Error(`Heading ${heading} not found`);

  let insertAt = headingIdx + 1;
  while (insertAt < lines.length) {
    const trimmed = (lines[insertAt] ?? "").trim();
    if (
      trimmed.startsWith(cfg.patterns.priorityPrefix) ||
      trimmed === cfg.markers.outstandingEnd
    ) {
      break;
    }
    insertAt++;
  }

  // Avoid creating extra blank lines: ensure there's exactly one blank line between heading and first bullet only if none exists.
  // If immediately after heading is the end marker or another heading, don't add blank lines.
  if (insertAt === headingIdx + 1) {
    // No extra blank line insertion.
  } else {
    // We are appending after existing bullets; avoid adding blank separators.
  }

  // Normalize multiple blank lines before insertion to at most one
  while (
    insertAt - 1 > headingIdx + 1 &&
    lines[insertAt - 1] === "" &&
    lines[insertAt - 2] === ""
  ) {
    lines.splice(insertAt - 1, 1);
    insertAt--;
  }

  // Remove a single blank line directly preceding insertion when previous line is a bullet.
  if (
    insertAt - 1 > headingIdx &&
    lines[insertAt - 1] === "" &&
    lines[insertAt - 2] &&
    lines[insertAt - 2].trim().startsWith(cfg.patterns.bullet.trim())
  ) {
    lines.splice(insertAt - 1, 1);
    insertAt--;
  }

  // Insert bullet without adding an extra blank line
  lines.splice(insertAt, 0, `${cfg.patterns.bullet}${text}`);
  if (subTasks && subTasks.length) {
    for (const st of subTasks) {
      insertAt++;
      lines.splice(insertAt, 0, `${cfg.patterns.subBullet}${st}`);
    }
  }
  return lines.join("\n");
}

export function exportChangelogJSON(
  content: string,
  cfg: ChangelogConfig
): ChangelogData {
  const outstanding = parseOutstanding(content, cfg);
  return { outstanding, logs: [] };
}
