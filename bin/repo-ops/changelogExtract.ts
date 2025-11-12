/**
 * @packageDocumentation
 * Helpers for extracting structured sections from the CHANGELOG.
 */
import * as path from "path";
import { readFileUtf8 } from "./fs";
import { extractBetweenMarkers } from "./parse";
import type { ExtractResult, MarkerSet, RepoPaths } from "./types";

/**
 * Build absolute repo paths for common governance files.
 *
 * @param {string} root - Repository root directory path.
 * @returns {RepoPaths} - Absolute paths to CHANGELOG and TODO files.
 */
export function resolveRepoPaths(root: string): RepoPaths {
  return {
    root,
    changelog: path.join(root, "CHANGELOG.md"),
    todo: path.join(root, "TODO.md"),
  };
}

/**
 * Extract the Outstanding Tasks section from a changelog string (inclusive of markers).
 *
 * @param {string} changelogContent - Full CHANGELOG.md content.
 * @param {MarkerSet} markers - Marker set defining the Outstanding Tasks bounds.
 * @returns {ExtractResult} - Marker-delimited content when ok=true.
 */
export function extractOutstandingTasks(
  changelogContent: string,
  markers: MarkerSet
): ExtractResult {
  return extractBetweenMarkers(changelogContent, markers.changelogOutstanding);
}

/**
 * Read CHANGELOG.md from disk and extract Outstanding Tasks.
 *
 * @param {RepoPaths} repo - Absolute repository paths.
 * @param {MarkerSet} markers - Marker set defining the Outstanding Tasks bounds.
 * @returns {Promise<ExtractResult>} - Marker-delimited content when ok=true.
 */
export async function readOutstandingTasks(
  repo: RepoPaths,
  markers: MarkerSet
): Promise<ExtractResult> {
  const changelogContent = await readFileUtf8(repo.changelog);
  return extractOutstandingTasks(changelogContent, markers);
}
