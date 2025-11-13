/**
 * @packageDocumentation
 * Central configuration for repo-ops. Consolidates defaults and governance
 * strings so all behavior remains config-, data-, and type-driven.
 */
import * as path from "path";
import type { MarkerSet, RepoPaths } from "./types";

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
};
