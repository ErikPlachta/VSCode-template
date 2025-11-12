/**
 * @packageDocumentation
 * Helpers for constructing and inserting the read-only TODO mirror block.
 */
import { upsertSection } from "./parse";
import type { MarkerSet } from "./types";

/**
 * Construct a read-only mirror block for TODO.md, wrapped by mirror markers.
 * The incoming markdown should already include the changelog Outstanding Tasks markers
 * so that context is preserved for future syncs.
 *
 * @param {string} markdown - The extracted Outstanding Tasks section (marker-inclusive).
 * @param {MarkerSet} markers - Marker set to use for the TODO mirror block.
 * @returns {string} - Marker-inclusive block to upsert into TODO.md.
 */
export function buildImportedBlock(
  markdown: string,
  markers: MarkerSet
): string {
  const lines: string[] = [];
  lines.push(markers.todoImportedMirror.begin);
  lines.push("");
  lines.push(
    "> READ-ONLY MIRROR – This section is imported from CHANGELOG Outstanding Tasks for migration. Do not edit here."
  );
  lines.push("");
  lines.push(markdown.trimEnd());
  lines.push("");
  lines.push(markers.todoImportedMirror.end);
  return lines.join("\n");
}

/**
 * Upsert the mirror block into TODO.md content, replacing an existing block if present.
 *
 * @param {string} todoContent - The existing TODO.md content.
 * @param {string} importedBlock - The complete, marker-inclusive mirror block.
 * @param {MarkerSet} markers - Marker set defining the TODO mirror bounds.
 * @returns {{ next: string; replaced: boolean }} - The next content and whether a replacement occurred.
 */
export function upsertTodoMirror(
  todoContent: string,
  importedBlock: string,
  markers: MarkerSet
): { next: string; replaced: boolean } {
  return upsertSection(todoContent, importedBlock, markers.todoImportedMirror);
}
