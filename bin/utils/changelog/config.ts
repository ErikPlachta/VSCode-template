import { ChangelogConfig } from "./types";

/** Default configuration for ChangeLogManager */
export const defaultChangelogConfig: ChangelogConfig = {
  filePath: "CHANGELOG.md",
  markers: {
    outstandingBegin: "<!-- CHANGELOG:BEGIN:OUTSTANDING_TASKS -->",
    outstandingEnd: "<!-- CHANGELOG:END:OUTSTANDING_TASKS -->",
    logsBegin: "<!-- CHANGELOG:BEGIN:LOGS -->",
    logsEnd: "<!-- CHANGELOG:END:LOGS -->",
  },
};

export const DAY_HEADING_PREFIX = "### ["; // e.g. "### [2025-11-09] ..."
export const LOG_HEADING_PREFIX = "#### "; // e.g. "#### 2025-11-09 10:45:00 type: Summary"

export function formatLogHeading(
  date: string,
  time: string,
  type: string,
  summary: string
): string {
  return `${LOG_HEADING_PREFIX}${date} ${time} ${type}: ${summary}`;
}

export function formatDayHeading(date: string, dailySummary?: string): string {
  return dailySummary
    ? `${DAY_HEADING_PREFIX}${date}] ${dailySummary}`
    : `${DAY_HEADING_PREFIX}${date}]`;
}
