/**
 * @packageDocumentation
 * Session commands for repo-ops-next.
 *
 * Initial focus is `session lint`, which validates the structure and
 * required markers of `CONTEXT-SESSION.md` without mutating it.
 */

import { readFileSafe } from "../fs";
import { CONTEXT_SESSION_MARKERS } from "../markers";

export interface SessionLintIssue {
  message: string;
}

export interface SessionLintResult {
  ok: boolean;
  issues: SessionLintIssue[];
}

const CONTEXT_SESSION_FILE = "CONTEXT-SESSION.md";

/**
 * Lint the `CONTEXT-SESSION.md` file for required markers and basic structure.
 */
export function lintSession(cwd: string = process.cwd()): SessionLintResult {
  const issues: SessionLintIssue[] = [];

  const readResult = readFileSafe(cwd, CONTEXT_SESSION_FILE);
  if (!readResult.ok || !readResult.content) {
    issues.push({
      message: `${CONTEXT_SESSION_FILE} is missing or unreadable.`,
    });
    return { ok: false, issues };
  }

  for (const marker of CONTEXT_SESSION_MARKERS) {
    if (!readResult.content.includes(marker.value)) {
      issues.push({ message: `Missing required marker: ${marker.value}` });
    }
  }

  return { ok: issues.length === 0, issues };
}

/**
 * Print a human-friendly lint report to stdout.
 */
export function printSessionLint(result: SessionLintResult): void {
  // eslint-disable-next-line no-console
  console.log("Session lint results:");

  if (result.ok) {
    // eslint-disable-next-line no-console
    console.log("- CONTEXT-SESSION.md: OK");
    return;
  }

  for (const issue of result.issues) {
    // eslint-disable-next-line no-console
    console.log(`- ${issue.message}`);
  }
}
