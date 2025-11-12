/**
 * @packageDocumentation
 * Typed contracts for repo-ops modules (markers, IO, parsing, and sync).
 *
 * These interfaces define the data shapes passed between the CLI entrypoint and
 * the underlying helpers to keep behavior data-driven and testable.
 */

/** Bounds describing a delimited region within a markdown file. */
export interface MarkerBounds {
  begin: string;
  end: string;
}

/** Collection of all marker groups used by repo-ops. */
export interface MarkerSet {
  changelogOutstanding: MarkerBounds;
  todoImportedMirror: MarkerBounds;
}

/** Absolute repository paths used by sync operations. */
export interface RepoPaths {
  root: string;
  changelog: string; // absolute path
  todo: string; // absolute path
}

/** Runtime options controlling sync behavior and sources. */
export interface SyncOptions {
  write: boolean; // default false → dry-run
  markers: MarkerSet;
  repo: RepoPaths;
}

/** Result from extracting a section between markers. */
export interface ExtractResult {
  ok: boolean;
  content: string;
  message?: string;
}

/** A concrete edit step to be applied (or previewed in dry-run). */
export interface ApplyPlan {
  filePath: string;
  description: string;
  beforeSnippet: string;
  afterSnippet: string;
  wouldWriteBytes: number;
}

/** Aggregate result from a sync operation. */
export interface SyncResult {
  changed: boolean;
  plans: ApplyPlan[];
  dryRun: boolean;
  notes?: string[];
}
