/**
 * @packageDocumentation
 * Changelog map utilities for indexing days and entries.
 */
import * as fs from "fs";
import * as path from "path";

/** Parsed entry metadata for a single changelog entry. */
export interface ChangelogEntryMeta {
  day: string; // YYYY-MM-DD
  timestamp: string; // YYYY-MM-DD HH:MM:SS
  type: string; // feat|fix|docs|...
  summary: string;
  line: number; // 0-based line number of heading
  rawHeading: string;
}

/** Complete map structure emitted for rapid discovery. */
export interface ChangelogMap {
  generatedAt: string;
  file: string;
  days: Array<{
    day: string;
    line: number;
    entries: ChangelogEntryMeta[];
  }>;
  entries: ChangelogEntryMeta[];
  totalLines: number;
}

const DAY_HEADER_RE = /^### \[(\d{4}-\d{2}-\d{2})\]/;
const ENTRY_HEADER_RE =
  /^#### (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+([a-zA-Z]+):\s+(.*)$/;

/**
 * Build an index map of the changelog for usability (fast navigation, tooling).
 *
 * @param filePath - Path to changelog file.
 * @returns Parsed map.
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
