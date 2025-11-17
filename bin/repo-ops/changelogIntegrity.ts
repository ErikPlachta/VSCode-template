/**
 * @packageDocumentation
 * Changelog integrity utilities: structural validation and hash chain computation.
 * Provides pre/post write validation used by repo-ops changelog commands.
 */
import * as crypto from "crypto";
import * as fs from "fs";

/** Result of validating CHANGELOG structural integrity. */
export interface ChangelogValidationResult {
  /** Absolute path of validated file. */
  filePath: string;
  /** SHA-256 hash of raw file contents (after normalization). */
  fileHash: string;
  /** Collected error messages (validation failed if non-empty). */
  errors: string[];
  /** Collected warning messages (non-fatal). */
  warnings: string[];
  /** Total line count. */
  totalLines: number;
  /** Parsed entry timestamps for uniqueness analysis. */
  timestamps: string[];
}

/** Marker definitions / regexes */
const LOGS_BEGIN_MARKER = "<!-- CHANGELOG:BEGIN:LOGS -->";
const LOGS_HEADER = "## Logs";
const DAY_HEADER_RE = /^### \[(\d{4}-\d{2}-\d{2})\]$/;
const ENTRY_HEADER_RE =
  /^#### (\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+([a-zA-Z]+):\s+(.*)$/;

/**
 * Normalize newlines to `\n` for consistent parsing.
 *
 * @param text - Raw file contents (may contain Windows `\r\n`).
 * @returns Contents with all newlines normalized to `\n`.
 */
function normalize(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}

/**
 * Compute SHA-256 hash of provided UTF-8 contents.
 *
 * @param contents - Raw UTF-8 string.
 * @returns Hex-encoded digest.
 */
export function sha256(contents: string): string {
  return crypto.createHash("sha256").update(contents, "utf8").digest("hex");
}

/**
 * Validate CHANGELOG structure: markers, headings, uniqueness, absence of conflict markers.
 *
 * @param filePath - Path to changelog markdown file.
 * @returns Validation result object.
 */
export async function validateChangelog(
  filePath: string
): Promise<ChangelogValidationResult> {
  const raw = await fs.promises.readFile(filePath, "utf8");
  const norm = normalize(raw);
  const lines = norm.split("\n");
  const errors: string[] = [];
  const warnings: string[] = [];

  // Basic markers
  const beginIdx = norm.indexOf(LOGS_BEGIN_MARKER);
  if (beginIdx === -1)
    errors.push("Missing logs begin marker <!-- CHANGELOG:BEGIN:LOGS -->");
  const logsIdx = norm.indexOf(LOGS_HEADER, beginIdx === -1 ? 0 : beginIdx);
  if (logsIdx === -1)
    errors.push("Missing '## Logs' heading after logs marker");

  // Conflict markers detection
  if (/<<<<<<<|=======|>>>>>>>/.test(norm)) {
    errors.push("File contains unresolved merge conflict markers");
  }

  // Parse day and entry headings
  const timestamps: string[] = [];
  const seenTimestamps = new Set<string>();
  let currentDay: string | undefined;
  let lastDay: string | undefined;
  let dayOrderViolation = false;

  lines.forEach((line) => {
    const dayMatch = DAY_HEADER_RE.exec(line.trim());
    if (dayMatch) {
      currentDay = dayMatch[1];
      if (lastDay) {
        // Expect newest first (descending); so new day must be <= lastDay lexically
        if (currentDay > lastDay) dayOrderViolation = true;
      }
      lastDay = currentDay;
      return;
    }
    const entryMatch = ENTRY_HEADER_RE.exec(line.trim());
    if (entryMatch) {
      if (!currentDay)
        warnings.push("Entry heading encountered before any day header");
      const ts = entryMatch[1];
      timestamps.push(ts);
      if (seenTimestamps.has(ts))
        errors.push(`Duplicate entry timestamp: ${ts}`);
      seenTimestamps.add(ts);
    }
  });
  if (dayOrderViolation)
    warnings.push(
      "Day headers not in descending (newest-first) order; navigation may be less efficient"
    );
  if (timestamps.length === 0)
    warnings.push(
      "No entry timestamps parsed; logs section may be empty or malformed"
    );

  return {
    filePath,
    fileHash: sha256(norm),
    errors,
    warnings,
    totalLines: lines.length,
    timestamps,
  };
}

/**
 * Compute a hash chain value combining previous chain hash + current file hash.
 * Provides tamper detection between CLI-mediated writes.
 *
 * @param previousChainHash - Prior chain hash (or undefined for genesis).
 * @param currentFileHash - Current file SHA-256 hash.
 * @returns New chain hash string.
 */
export function computeChainHash(
  previousChainHash: string | undefined,
  currentFileHash: string
): string {
  const base = previousChainHash
    ? previousChainHash + currentFileHash
    : currentFileHash;
  return sha256(base);
}
