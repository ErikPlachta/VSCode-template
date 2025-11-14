/**
 * @packageDocumentation
 * Incremental (fast) changelog mapping utilities. Attempts to derive new map by parsing
 * only the top portion of the file until an existing timestamp boundary is found.
 * Falls back to full parse when assumptions fail.
 */
import * as fs from "fs";
import * as path from "path";
import type { ChangelogEntryMeta, ChangelogMap } from "./changelog";

const DAY_HEADER_RE = /^### \[(\d{4}-\d{2}-\d{2})\]$/;
const ENTRY_HEADER_RE =
  /^#### (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+([a-zA-Z]+):\s+(.*)$/;

/** Result of an incremental map attempt. */
export interface IncrementalMapResult {
  /** Map produced (may be partial merged with prior). */
  map: ChangelogMap;
  /** True if incremental algorithm succeeded; false if full parse recommended. */
  incremental: boolean;
  /** Notes describing decisions or fallback reasons. */
  notes: string[];
}

/** Normalize newlines. */
function nl(t: string): string {
  return t.replace(/\r\n?/g, "\n");
}

/**
 * Attempt incremental mapping using prior index entries.
 *
 * @param filePath Path to changelog file.
 * @param priorEntries Previous entries from index (assumed stable below new insertions).
 * @param priorDays Previous day summary list.
 * @param maxScanLines Upper bound on lines to scan before fallback.
 * @returns IncrementalMapResult
 */
export async function incrementalMap(
  filePath: string,
  priorEntries: ChangelogEntryMeta[],
  priorDays: { day: string; entryCount: number }[],
  maxScanLines = 1200
): Promise<IncrementalMapResult> {
  const notes: string[] = [];
  const raw = nl(await fs.promises.readFile(filePath, "utf8"));
  const lines = raw.split("\n");
  const priorTimestampSet = new Set(priorEntries.map((e) => e.timestamp));
  const newDays: Array<{
    day: string;
    line: number;
    entries: ChangelogEntryMeta[];
  }> = [];
  const flat: ChangelogEntryMeta[] = [];
  let currentDay:
    | { day: string; line: number; entries: ChangelogEntryMeta[] }
    | undefined;
  let boundaryFound = false;

  for (let i = 0; i < lines.length && i < maxScanLines; i++) {
    const line = lines[i];
    const dayMatch = DAY_HEADER_RE.exec(line);
    if (dayMatch) {
      currentDay = { day: dayMatch[1], line: i, entries: [] };
      newDays.push(currentDay);
      continue;
    }
    const entryMatch = ENTRY_HEADER_RE.exec(line);
    if (entryMatch && currentDay) {
      const [, ts, typeRaw, summary] = entryMatch;
      if (priorTimestampSet.has(ts)) {
        boundaryFound = true;
        break; // stop scanning; rest presumed unchanged
      }
      const meta: ChangelogEntryMeta = {
        day: currentDay.day,
        timestamp: ts,
        type: typeRaw.toLowerCase(),
        summary: summary.trim(),
        line: i,
        rawHeading: line,
      };
      currentDay.entries.push(meta);
      flat.push(meta);
    }
  }

  if (!boundaryFound) {
    notes.push(
      "Incremental boundary (existing timestamp) not found within scan window; fallback required."
    );
    return {
      incremental: false,
      notes,
      map: await fullParse(filePath),
    };
  }

  // Merge new entries with prior ones (prior entries retain original order).
  const mergedEntries = [...flat, ...priorEntries];

  // Merge day summaries: adjust counts for modified first day or add new day if present.
  const mergedDaysMap = new Map<
    string,
    { day: string; line: number; entries: ChangelogEntryMeta[] }
  >();
  // Add newDays first (top of file)
  for (const d of newDays) mergedDaysMap.set(d.day, d);
  // Reconstruct prior day objects referencing priorEntries (group by day)
  for (const d of priorDays) {
    const dayEntries = priorEntries.filter((e) => e.day === d.day);
    if (mergedDaysMap.has(d.day)) {
      // Append prior entries to existing day
      const existing = mergedDaysMap.get(d.day)!;
      existing.entries.push(...dayEntries);
    } else {
      mergedDaysMap.set(d.day, {
        day: d.day,
        line: -1, // unknown without full parse
        entries: dayEntries,
      });
    }
  }
  const mergedDays = Array.from(mergedDaysMap.values());

  const result: ChangelogMap = {
    generatedAt: new Date().toISOString(),
    file: path.resolve(filePath),
    days: mergedDays,
    entries: mergedEntries,
    totalLines: lines.length,
  };
  notes.push(
    `Incremental map succeeded with ${flat.length} new entries and ${mergedEntries.length} total entries.`
  );
  return { incremental: true, notes, map: result };
}

/** Full parse fallback (import kept local to avoid circular). */
async function fullParse(filePath: string): Promise<ChangelogMap> {
  const mod = await import("./changelog");
  return mod.mapChangelog(filePath);
}
