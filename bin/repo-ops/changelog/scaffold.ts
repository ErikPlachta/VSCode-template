/**
 * @packageDocumentation
 * Changelog entry scaffold generator.
 */
import { defaultConfig } from "../repo-ops.config";
import { formatTimestamp } from "./date";

/**
 * Build a logs-only changelog entry scaffold.
 *
 * @param type - Entry type (feat|fix|docs|refactor|test|perf|ci|build|style|chore).
 * @param summary - One-line summary.
 * @param context - Problem/Context description.
 * @param extras - Optional rich fields to populate template sections.
 * @param extras.changesMade - Pre-formatted list for "Changes Made" section.
 * @param extras.architectureNotes - Notes for the Architecture section.
 * @param extras.filesChanged - Pre-formatted list for "Files Changed" section.
 * @param extras.testingDetails - Details for the Testing line.
 * @param extras.impact - Impact description.
 * @returns Markdown block ready to paste into CHANGELOG.md.
 */
export function scaffoldEntry(
  type: string,
  summary: string,
  context?: string,
  extras?: {
    changesMade?: string;
    architectureNotes?: string;
    filesChanged?: string;
    testingDetails?: string;
    impact?: string;
  }
): string {
  const now = new Date();
  const ts = formatTimestamp(now, defaultConfig.changelog.timeZone);
  const cleanType = (type || "chore").trim();
  const cleanSummary = (summary || "Describe the change").trim();
  const ctx = (context || "What was wrong or needed").trim();
  const changesMade = (
    extras?.changesMade ||
    "1. file: PATH (lines X–Y) — what changed and why\n2. file: PATH (lines A–B) — what changed and why"
  ).trim();
  const architectureNotes = (
    extras?.architectureNotes || "(patterns/decisions)"
  ).trim();
  const filesChanged = extras?.filesChanged
    ? String(extras.filesChanged).trim()
    : "";
  const testingDetails = (
    extras?.testingDetails ||
    "Build: PASS|FAIL; Tests: summary; Lint: PASS|FAIL; Docs: PASS|FAIL; Health: PASS|FAIL; Coverage: %; JSDoc: status"
  ).trim();
  const impact = (extras?.impact || "(what this enables/fixes)").trim();
  const normalizeList = (value: string): string => {
    const src = value.replace(/\r\n?/g, "\n").trim();
    if (!src) return src;
    const segments = src
      .split(/\.\s*-\s*|\.\s*-/g)
      .map((s) => s.trim())
      .filter(Boolean);
    if (segments.length <= 1) {
      return src;
    }
    const normalized: string[] = [];
    for (let i = 0; i < segments.length; i++) {
      const part = segments[i]!;
      const suffix = i < segments.length - 1 ? "." : "";
      normalized.push(`- ${part}${suffix}`);
    }
    return normalized.join("\n");
  };
  const lines: string[] = [
    `#### ${ts} ${cleanType}: ${cleanSummary}`,
    "",
    `**Problem/Context**: ${ctx}`,
    "",
    "**Changes Made**:",
    "",
    normalizeList(changesMade),
    "",
    `**Architecture Notes**:`,
    "",
    normalizeList(architectureNotes),
    "",
    `**Testing**: ${testingDetails}`,
    "",
    `**Impact**:`,
    "",
    normalizeList(impact),
  ];

  if (filesChanged) {
    lines.splice(
      lines.indexOf(""),
      0,
      "",
      `**Files Changed**:`,
      "",
      filesChanged
    );
  }

  return lines.join("\n");
}
