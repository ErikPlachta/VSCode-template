/**
 * @packageDocumentation
 * Barrel exports for repo-ops changelog helpers.
 * This module re-exports split implementations to preserve import paths.
 */
export { scaffoldEntry } from "./changelog/scaffold";
export type { WriteEntryArgs } from "./changelog/write";
export { writeEntry } from "./changelog/write";
export { verifyLatestEntry } from "./changelog/verify";
export type { ChangelogEntryMeta, ChangelogMap } from "./changelog/map";
export { mapChangelog } from "./changelog/map";
