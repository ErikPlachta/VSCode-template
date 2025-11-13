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
  /** Marker bounds for TODO sections where actionable items are stored. */
  todoSections: {
    current: MarkerBounds;
    next: MarkerBounds;
    backlog: MarkerBounds;
    completed: MarkerBounds;
  };
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
    boundaryMarkers: { begin: string; end: string }[];
  };
  /** Help metadata to render CLI help without hardcoded strings. */
  help: {
    header: string[];
    commands: Array<{
      name: string;
      description: string;
      subcommands?: Array<{ name: string; description: string }>;
    }>;
    safety: string[];
  };
  /** Changelog settings. */
  changelog: {
    entryTypes: string[];
    /** IANA timezone for timestamps and day headers, e.g., 'America/New_York'. */
    timeZone: string;
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

/**
 * Return a compact default session markdown template.
 *
 * @returns {string} Default session markdown content.
 */
function defaultSessionTemplate(): string {
  const now = new Date().toISOString();
  return [
    "# Session Context",
    "",
    `Started: ${now}`,
    "",
    "## Related",
    "- CHANGELOG.md",
    "- TODO.md",
    "",
    "<!-- BEGIN:COPILOT_INSTRUCTIONS -->",
    "",
    "## Copilot Instructions",
    "",
    "- Keep this session file concise; use it for current focus, quick notes, and links.",
    "- Tasks live in TODO.md; add/change priorities there.",
    "- Log changes and verification in CHANGELOG.md.",
    "",
    "<!-- END:COPILOT_INSTRUCTIONS -->",
    "",
    "<!-- BEGIN:CURRENT-FOCUS-SUMMARY -->",
    "",
    "## Current Focus Summary",
    "",
    "<!-- END:CURRENT-FOCUS-SUMMARY -->",
    "",
    "<!-- BEGIN:CURRENT-FOCUS-DETAIL -->",
    "",
    "## Current Focus Detail",
    "",
    "<!-- END:CURRENT-FOCUS-DETAIL -->",
    "",
  ].join("\n");
}

/**
 * Default configuration instance consumed by repo-ops modules.
 * Provides marker sets, path resolution, session template, and section markers.
 */
export const defaultConfig: RepoOpsConfig = {
  markers,
  /**
   * Resolve absolute repository paths used by repo-ops commands.
   *
   * @param {string} root - Repository root directory.
   * @returns {RepoPaths} Absolute paths to governance files.
   */
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
  todoSections: {
    current: {
      begin: "<!-- BEGIN:CURRENT_ACTION_ITEMS -->",
      end: "<!-- END:CURRENT_ACTION_ITEMS -->",
    },
    next: {
      begin: "<!-- BEGIN:NEXT_ACTION_ITEMS -->",
      end: "<!-- END:NEXT_ACTION_ITEMS -->",
    },
    backlog: {
      begin: "<!-- BEGIN:BACKLOG_ACTION_ITEMS -->",
      end: "<!-- END:BACKLOG_ACTION_ITEMS -->",
    },
    // Completed section is rendered for historical reference
    // (automation may append bullet entries with links to changelog).
    completed: {
      begin: "<!-- BEGIN:COMPLETED_ACTION_ITEMS -->",
      end: "<!-- END:COMPLETED_ACTION_ITEMS -->",
    },
  },
  // Prefer inserting after this heading if present; otherwise insert at top
  insertAnchorRegex: "\n##\\s+Generated\\s+Action\\s+Items\\s*\n",
  generatedActionsHeading:
    "### Action Items (generated from CHANGELOG Outstanding Tasks)",
  mirrorAdvisory:
    "READ-ONLY MIRROR – This section is imported from CHANGELOG Outstanding Tasks for migration. Do not edit here.",
  sessionLint: {
    topHeading: "# Session Context",
    requiredRelated: ["CHANGELOG.md", "TODO.md"],
    maxAgeDays: 14,
    boundaryMarkers: [
      {
        begin: "<!-- BEGIN:CURRENT-FOCUS-SUMMARY -->",
        end: "<!-- END:CURRENT-FOCUS-SUMMARY -->",
      },
      {
        begin: "<!-- BEGIN:CURRENT-FOCUS-DETAIL -->",
        end: "<!-- END:CURRENT-FOCUS-DETAIL -->",
      },
    ],
  },
  help: {
    header: [
      "Repo Ops CLI – governance automation for TODO, session, and changelog.",
      "Dry-run first; backups on write.",
    ],
    commands: [
      {
        name: "session",
        description: "Session operations",
        subcommands: [
          {
            name: "rotate [--write]",
            description: "Archive and create fresh CONTEXT-SESSION.md",
          },
          {
            name: "lint",
            description: "Validate CONTEXT-SESSION.md structure",
          },
        ],
      },
      {
        name: "todo",
        description: "TODO operations",
        subcommands: [
          { name: "add", description: "Insert a task (defaults to P2)" },
          {
            name: "complete",
            description: "Mark a task done and move to Completed",
          },
          {
            name: "move",
            description: "Move a task to another priority section",
          },
        ],
      },
      {
        name: "changelog",
        description: "Changelog helpers",
        subcommands: [
          { name: "scaffold", description: "Print a logs-only entry template" },
          {
            name: "write",
            description: "Insert a logs-only entry (with backup)",
          },
        ],
      },
    ],
    safety: [
      "All mutating commands support --write and create backups before saving.",
      "Default behavior is dry-run to preview changes.",
    ],
  },
  changelog: {
    timeZone: "America/New_York",
    entryTypes: [
      "feat",
      "fix",
      "docs",
      "refactor",
      "test",
      "perf",
      "ci",
      "build",
      "style",
      "chore",
      "revert",
    ],
  },
};
