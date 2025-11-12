/**
 * @packageDocumentation
 * Pure parsing helpers for working with delimited sections in markdown files.
 */
import type { MarkerBounds, ExtractResult } from "./types";

/**
 * Normalize CRLF to LF for predictable string operations.
 *
 * @param {string} input - Raw file content.
 * @returns {string} - Normalized content using only LF newlines.
 */
export function normalizeNewlines(input: string): string {
  return input.replace(/\r\n/g, "\n");
}

/**
 * Extract the first section delimited by the provided markers (inclusive).
 *
 * @param {string} content - Host markdown content.
 * @param {MarkerBounds} markers - Marker bounds identifying the section.
 * @returns {ExtractResult} - Result with ok=false if markers not found or misordered.
 */
export function extractBetweenMarkers(
  content: string,
  markers: MarkerBounds
): ExtractResult {
  const src = normalizeNewlines(content);
  const beginIdx = src.indexOf(markers.begin);
  const endIdx = src.indexOf(markers.end);

  if (beginIdx === -1 || endIdx === -1 || endIdx <= beginIdx) {
    return {
      ok: false,
      content: "",
      message: `Markers not found or out of order: begin='${markers.begin}', end='${markers.end}'`,
    };
  }

  // Slice inclusive of markers to preserve context
  const section = src.slice(beginIdx, endIdx + markers.end.length);
  return { ok: true, content: section };
}

/**
 * Insert or replace a delimited section in the host content.
 * If an existing range is found, it is replaced; otherwise, the section is
 * inserted after a suitable anchor.
 *
 * @param {string} hostContent - The full host markdown content.
 * @param {string} sectionContent - The complete, marker-inclusive section to upsert.
 * @param {MarkerBounds} markers - The markers that bound the section.
 * @returns {{ next: string; replaced: boolean }} - The next content and whether a replacement occurred.
 */
export function upsertSection(
  hostContent: string,
  sectionContent: string,
  markers: MarkerBounds
): { next: string; replaced: boolean } {
  const src = normalizeNewlines(hostContent);
  const beginIdx = src.indexOf(markers.begin);
  const endIdx = src.indexOf(markers.end);

  if (beginIdx !== -1 && endIdx !== -1 && endIdx > beginIdx) {
    // Replace existing block
    const before = src.slice(0, beginIdx);
    const after = src.slice(endIdx + markers.end.length);
    const next = before + sectionContent + after;
    return { next, replaced: true };
  }

  // Insert at a reasonable location: after main heading or at end
  const anchor = findInsertionAnchor(src);
  const next =
    src.slice(0, anchor) + "\n\n" + sectionContent + "\n\n" + src.slice(anchor);
  return { next, replaced: false };
}

/**
 * Heuristic to place inserted sections at a stable, logical location.
 * Prefers the Incomplete TODOs heading; falls back to after frontmatter or
 * the file start.
 *
 * @param {string} src - Normalized host content.
 * @returns {number} - Character index for insertion.
 */
function findInsertionAnchor(src: string): number {
  // Prefer to insert after the "## Incomplete TODOs" heading if present
  const heading = /\n##\s+Incomplete\s+TODOs\s*\n/i;
  const match = heading.exec(src);
  if (match && match.index !== undefined) {
    return match.index + match[0].length;
  }

  // Fallback: after front-matter or at beginning
  if (src.startsWith("---\n")) {
    const fmEnd = src.indexOf("\n---\n", 3);
    if (fmEnd !== -1) return fmEnd + "\n---\n".length;
  }
  return 0;
}
