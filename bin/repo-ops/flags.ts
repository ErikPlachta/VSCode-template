/**
 * @packageDocumentation
 * Shared flag parsing utilities for the repo-ops CLI.
 */

export type FlagValue = string | string[] | boolean;

export type FlagMap = Record<string, FlagValue>;

/**
 * Parse a flat argv array into a map of flags.
 *
 * Flags are expected in the form `--flag value` or standalone `--flag` for booleans.
 * Multiple occurrences of the same value flag are collected into an array.
 *
 * @param argv - Argument vector to parse (excluding command and subcommand).
 * @returns Parsed flag/value map.
 */
export function parseFlags(argv: string[]): FlagMap {
  const out: FlagMap = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      out[key] = true;
    } else {
      if (out[key] === undefined) out[key] = next;
      else if (Array.isArray(out[key])) (out[key] as string[]).push(next);
      else out[key] = [out[key] as string, next];
      i++;
    }
  }
  return out;
}
