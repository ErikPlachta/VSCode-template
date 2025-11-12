/**
 * @packageDocumentation
 * Default marker configuration for repo-ops.
 *
 * Centralizes strings so parsing logic remains data-driven. Callers can
 * provide overrides if repository conventions differ.
 */
import type { MarkerSet } from "./types";

/**
 * Default markers used by the sync tooling.
 */
export const defaultMarkers: MarkerSet = {
  changelogOutstanding: {
    begin: "<!-- CHANGELOG:BEGIN:OUTSTANDING_TASKS -->",
    end: "<!-- CHANGELOG:END:OUTSTANDING_TASKS -->",
  },
  todoImportedMirror: {
    begin: "<!-- TODO:BEGIN:IMPORTED_FROM_CHANGELOG -->",
    end: "<!-- TODO:END:IMPORTED_FROM_CHANGELOG -->",
  },
};
