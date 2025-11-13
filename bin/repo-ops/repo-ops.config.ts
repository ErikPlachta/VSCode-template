/**
 * @packageDocumentation
 * Central configuration for repo-ops. Consolidates defaults and governance
 * strings so all behavior remains config-, data-, and type-driven.
 */
import * as path from "path";
import type { MarkerBounds, MarkerSet, RepoPaths } from "./types";

/**
 * Shape of the repo-ops configuration. Extend as new modules are added.
 */
export interface RepoOpsConfig {
  /** Marker sets used across repo-ops features. */
  markers: MarkerSet;
  /** Resolve absolute repository paths used by repo-ops commands. */
  resolveRepoPaths(root: string): RepoPaths;
  /** Backup directory name at repo root. */
  backupDirName: string;
  /** Default session file template content factory. */
  sessionTemplate(): string;
  /** Marker bounds for generated action items block in TODO.md. */
  actionsMarkers: MarkerBounds;
  /** Regex string (source) for a preferred insertion anchor; optional. */
  insertAnchorRegex?: string;
  /** Heading text used atop generated actions. */
  generatedActionsHeading: string;
  /** Advisory text included in the imported-from-changelog mirror block. */
  mirrorAdvisory: string;
  /** Session lint expectations. */
  sessionLint: {
    topHeading: string;
    requiredRelated: string[];
    maxAgeDays: number;
  };
}

/**
 * Default markers used by repo-ops. Edit here to change repository conventions.
 */
const markers: MarkerSet = {
  changelogOutstanding: {
    begin: "<!-- CHANGELOG:BEGIN:OUTSTANDING_TASKS -->",
    end: "<!-- CHANGELOG:END:OUTSTANDING_TASKS -->",
  },
  todoImportedMirror: {
    begin: "<!-- TODO:BEGIN:IMPORTED_FROM_CHANGELOG -->",
    end: "<!-- TODO:END:IMPORTED_FROM_CHANGELOG -->",
  },
};

/** Return a compact default session markdown template. */
function defaultSessionTemplate(): string {
  const now = new Date().toISOString();
  return [
    "# Session Context",
    "",
    `Started: ${now}`,
    "",
    "## Related",
    "- CHANGELOG.md",
    "- CONTEXT-BRANCH.md",
    "- TODO.md",
    "",
    "## Notes",
    "-",
    "",
  ].join("\n");
}

/** Default configuration instance consumed by repo-ops modules. */
export const defaultConfig: RepoOpsConfig = {
  markers,
  resolveRepoPaths(root: string): RepoPaths {
    return {
      root,
      changelog: path.join(root, "CHANGELOG.md"),
      todo: path.join(root, "TODO.md"),
    };
  },
  backupDirName: ".repo-ops-backups",
  sessionTemplate: defaultSessionTemplate,
  // Align with current TODO.md marker usage (no TODO: prefix)
  actionsMarkers: {
    begin: "<!-- BEGIN:GENERATED_ACTION_ITEMS -->",
    end: "<!-- END:GENERATED_ACTION_ITEMS -->",
  },
  // Prefer inserting after this heading if present; otherwise insert at top
  insertAnchorRegex: "\n##\\s+Generated\\s+Action\\s+Items\\s*\n",
  generatedActionsHeading:
    "### Action Items (generated from CHANGELOG Outstanding Tasks)",
  mirrorAdvisory:
    "READ-ONLY MIRROR – This section is imported from CHANGELOG Outstanding Tasks for migration. Do not edit here.",
  sessionLint: {
    topHeading: "# Session Context",
    requiredRelated: ["CHANGELOG.md", "CONTEXT-BRANCH.md", "TODO.md"],
    maxAgeDays: 14,
  },
};
