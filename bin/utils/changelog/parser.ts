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
  const outIdx = lines.findIndex((l) => l.includes("## Outstanding Tasks"));
  const logsIdx = lines.findIndex((l) => l.trim() === "## Logs");

  // Insert Outstanding markers if missing
  const hasOutBegin = lines.some((l) =>
    l.includes(cfg.markers.outstandingBegin)
  );
  const hasOutEnd = lines.some((l) => l.includes(cfg.markers.outstandingEnd));
  if (outIdx !== -1 && (!hasOutBegin || !hasOutEnd)) {
    // place begin before heading, end before Logs heading
    if (!hasOutBegin) lines.splice(outIdx, 0, cfg.markers.outstandingBegin);
    const logsHeadingIdx = lines.findIndex((l) => l.trim() === "## Logs");
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
  dateStr: string,
  timeStr: string,
  type: string,
  summary: string
): string {
  const lines = content.split(/\r?\n/);
  const dayHeading = `### [${dateStr}]`;
  const dayIdx = lines.findIndex((l) => l.startsWith(dayHeading));
  const logHeading = `${LOG_HEADING_PREFIX}${dateStr} ${timeStr} ${type}: ${summary}`;

  if (dayIdx === -1) {
    // Insert new day heading at top of Logs
    const logsHeadingIdx = lines.findIndex((l) => l.trim() === "## Logs");
    if (logsHeadingIdx === -1) return content; // no Logs section found
    let insertAt = logsHeadingIdx + 1;
    if (lines[insertAt] === "") insertAt++;
    lines.splice(insertAt, 0, dayHeading, "", logHeading, "");
    return lines.join("\n");
  }
  // Insert under existing day heading (newest-first)
  const insertAt = dayIdx + 1;
  if (lines[insertAt] !== "") lines.splice(insertAt, 0, "");
  lines.splice(insertAt + 1, 0, logHeading, "");
  return lines.join("\n");
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

export function parseOutstanding(
  content: string,
  cfg: ChangelogConfig
): OutstandingTaskItem[] {
  const lines = content.split(/\r?\n/);
  const sec = findOutstandingSection(content, cfg);
  if (!sec) return [];
  const items: OutstandingTaskItem[] = [];
  let currentPriority: 1 | 2 | 3 = 1;
  for (let i = sec.start; i < sec.end; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (trimmed.startsWith("### Priority 1")) currentPriority = 1;
    else if (trimmed.startsWith("### Priority 2")) currentPriority = 2;
    else if (trimmed.startsWith("### Priority 3")) currentPriority = 3;
    else if (trimmed.startsWith("- ")) {
      items.push({ rawLine: line, priority: currentPriority });
    }
  }
  return items;
}

export function insertOutstandingItem(
  content: string,
  cfg: ChangelogConfig,
  priority: 1 | 2 | 3,
  text: string
): string {
  const lines = content.split(/\r?\n/);
  const sec = findOutstandingSection(content, cfg);
  if (!sec) throw new Error("Outstanding Tasks section not found");
  const heading = `### Priority ${priority}`;
  const headingIdx = lines.findIndex(
    (line, idx) => idx >= sec.start && idx <= sec.end && line.trim().startsWith(heading)
  );
  if (headingIdx === -1) throw new Error(`Heading ${heading} not found`);

  let insertAt = headingIdx + 1;
  while (insertAt < lines.length) {
    const trimmed = (lines[insertAt] ?? "").trim();
    if (trimmed.startsWith("### Priority ") || trimmed === cfg.markers.outstandingEnd) {
      break;
    }
    insertAt++;
  }

  if (insertAt > headingIdx + 1 && lines[insertAt - 1]?.trim() !== "") {
    lines.splice(insertAt, 0, "");
    insertAt++;
  }

  lines.splice(insertAt, 0, `- ${text}`);
  return lines.join("\n");
}

export function exportChangelogJSON(
  content: string,
  cfg: ChangelogConfig
): ChangelogData {
  const outstanding = parseOutstanding(content, cfg);
  // Logs parsing can be added later; return empty for now, as optional improvement phase 1
  return { outstanding, logs: [] };
}
