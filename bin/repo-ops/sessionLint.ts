/**
 * @packageDocumentation
 * Session lint: validate CONTEXT-SESSION.md structure and key sections.
 *
 * Read-only: returns a SyncResult with notes describing any issues found.
 */
import * as fs from "fs/promises";
import * as path from "path";
import { defaultConfig } from "./repo-ops.config";
import type { RepoPaths, SyncOptions, SyncResult } from "./types";

// Repo path resolution now sourced from central config

/**
 * Validate the content of CONTEXT-SESSION.md.
 *
 * @param {string} md - Markdown content of CONTEXT-SESSION.md
 * @param {{ maxAgeDays?: number }} opts - Optional validation options; maxAgeDays defaults to 14.
 * @param {number} [opts.maxAgeDays] - Maximum allowed age for the Started timestamp, in days (default 14).
 * @returns {{ ok: boolean; issues: string[] }} - Whether it passes and a list of issues.
 */
export function validateSessionContent(
  md: string,
  opts: { maxAgeDays?: number } = {}
): {
  ok: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  const lines = md.split(/\r?\n/);
  const maxAgeDays = opts.maxAgeDays ?? defaultConfig.sessionLint.maxAgeDays;

  // 1) First heading should be "# Session Context"
  const firstNonEmpty = lines.find((l) => l.trim().length > 0) ?? "";
  if (firstNonEmpty.trim() !== defaultConfig.sessionLint.topHeading) {
    issues.push(
      `Missing or incorrect top heading: expected "${defaultConfig.sessionLint.topHeading}"`
    );
  }

  // 2) Started: <ISO timestamp>
  const startedIndex = lines.findIndex((l) => /^\s*Started:\s+/.test(l));
  const startedLine = startedIndex >= 0 ? lines[startedIndex] : undefined;
  if (!startedLine) {
    issues.push(
      'Missing "Started:" line (e.g., "Started: 2025-11-12T15:00:00.000Z")'
    );
  } else {
    const isoLike = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:.+/;
    if (!isoLike.test(startedLine)) {
      issues.push(
        '"Started:" value does not look like ISO 8601 (YYYY-MM-DDTHH:MM:SSZ)'
      );
    } else {
      const ts = startedLine.split("Started:")[1]?.trim();
      const d = ts ? new Date(ts) : null;
      if (d && !isNaN(d.getTime())) {
        const ageMs = Date.now() - d.getTime();
        const ageDays = ageMs / (1000 * 60 * 60 * 24);
        if (ageDays > maxAgeDays) {
          issues.push(
            `Session appears stale: Started ${ageDays.toFixed(
              1
            )} days ago (> ${maxAgeDays} days)`
          );
        }
      }
    }
  }

  // 3) Related section exists and includes key files
  const relatedIndex = lines.findIndex((l) => l.trim() === "## Related");
  if (relatedIndex === -1) {
    issues.push('Missing "## Related" section');
  } else {
    const requiredRefs = defaultConfig.sessionLint.requiredRelated;
    for (const ref of requiredRefs) {
      if (!md.includes(ref)) {
        issues.push(`Related section missing reference to ${ref}`);
      }
    }
  }

  // 4) Copilot Instructions block exists (accept underscore or hyphen markers) and heading
  const copilotBeginIdx = md.indexOf("<!-- BEGIN:COPILOT_INSTRUCTIONS -->");
  const copilotEndIdx = md.indexOf("<!-- END:COPILOT_INSTRUCTIONS -->");
  const copilotBeginAltIdx = md.indexOf("<!-- BEGIN:COPILOT-INSTRUCTIONS -->");
  const copilotEndAltIdx = md.indexOf("<!-- END:COPILOT-INSTRUCTIONS -->");

  const hasCopilotBlock =
    (copilotBeginIdx !== -1 && copilotEndIdx !== -1 && copilotEndIdx > copilotBeginIdx) ||
    (copilotBeginAltIdx !== -1 && copilotEndAltIdx !== -1 && copilotEndAltIdx > copilotBeginAltIdx);

  if (!hasCopilotBlock) {
    issues.push(
      'Missing Copilot Instructions block (<!-- BEGIN:COPILOT_INSTRUCTIONS --> … <!-- END:COPILOT_INSTRUCTIONS -->)'
    );
  }

  const hasCopilotHeading = lines.some(
    (l) => l.trim().toLowerCase() === "## copilot instructions"
  );
  if (!hasCopilotHeading) {
    issues.push('Missing "## Copilot Instructions" heading');
  }

  // 5) Ordering: Related before Notes; Started before sections
  if (startedIndex !== -1) {
    if (relatedIndex !== -1 && startedIndex > relatedIndex) {
      issues.push(
        'Ordering: "Started:" line should appear before "## Related"'
      );
    }
  }

  // 6) Required boundary markers exist in correct order
  const boundaries = defaultConfig.sessionLint.boundaryMarkers;
  for (const b of boundaries) {
    const beginIdx = md.indexOf(b.begin);
    const endIdx = md.indexOf(b.end);
    if (beginIdx === -1) {
      issues.push(`Missing boundary marker: ${b.begin}`);
      continue;
    }
    if (endIdx === -1) {
      issues.push(`Missing boundary marker: ${b.end}`);
      continue;
    }
    if (endIdx < beginIdx) {
      issues.push(`Boundary order invalid: ${b.end} appears before ${b.begin}`);
    }
  }

  return { ok: issues.length === 0, issues };
}

/**
 * Lint the CONTEXT-SESSION.md file in the current repository (read-only).
 *
 * @param {Partial<SyncOptions>} options - Optional overrides (repo path).
 * @returns {Promise<SyncResult>} - SyncResult with notes describing findings.
 */
export async function lintSession(
  options?: Partial<SyncOptions>
): Promise<SyncResult> {
  const repo: RepoPaths =
    options?.repo ?? defaultConfig.resolveRepoPaths(process.cwd());
  const sessionPath = path.join(repo.root, "CONTEXT-SESSION.md");

  let content = "";
  try {
    content = await fs.readFile(sessionPath, "utf8");
  } catch {
    return {
      changed: false,
      plans: [],
      dryRun: true,
      notes: [
        `Missing CONTEXT-SESSION.md at ${sessionPath} – run: npm run repo:ops -- session rotate [--write]`,
      ],
    };
  }

  const { ok, issues } = validateSessionContent(content);
  return {
    changed: false,
    plans: [],
    dryRun: true,
    notes: ok ? [] : issues,
  };
}
