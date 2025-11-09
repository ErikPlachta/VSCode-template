/**
 * @packageDocumentation ChangeLogManager type definitions.
 */

export const ALLOWED_TYPES = [
  "fix",
  "feat",
  "chore",
  "docs",
  "refactor",
  "test",
  "perf",
  "ci",
  "build",
  "style",
] as const;
export type LogType = (typeof ALLOWED_TYPES)[number];

export interface VerificationStatus {
  build: string; // PASS/FAIL or descriptive
  tests: string;
  lint: string;
  docs: string;
  health: string;
  coverage?: string;
  jsdoc?: string;
}

export interface VerificationBlock {
  heading: string; // e.g. "verification – timestamp helpers"
  status: VerificationStatus;
}

export interface LogEntry {
  date: string; // YYYY-MM-DD
  time: string; // HH:MM:SS
  type: LogType;
  summary: string; // short heading summary
  details: string[]; // bullet lines
  verification?: VerificationBlock;
}

export interface DayLogSection {
  date: string; // YYYY-MM-DD day heading
  summary?: string; // optional daily summary after date heading
  entries: LogEntry[]; // newest-first
}

export interface OutstandingTaskItem {
  rawLine: string; // original markdown line for fidelity
  priority: 1 | 2 | 3;
}

export interface ChangelogData {
  outstanding: OutstandingTaskItem[];
  logs: DayLogSection[];
}

export interface ChangelogConfig {
  filePath: string;
  markers: {
    outstandingBegin: string;
    outstandingEnd: string;
    logsBegin: string;
    logsEnd?: string; // optional future end marker
  };
}
