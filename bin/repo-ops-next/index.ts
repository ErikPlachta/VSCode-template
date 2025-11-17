/**
 * @packageDocumentation
 * Next-gen Repo-ops CLI entrypoint.
 *
 * Fresh, typed CLI for governance automation around TODO, session, and
 * changelog files. Built alongside legacy `bin/repo-ops` to allow a
 * clean migration path.
 */

import process from "node:process";
import { parseFlags } from "./flags";
import { getStatus, printStatus } from "./commands/status";
import { lintSession, printSessionLint } from "./commands/session";
import { COMMANDS, EXIT_CODES, RepoOpsCommandId } from "./architecture";
import { isDebugEnabled, logDebug, logError, ensureErrorExitCode } from "./log";

/** Supported top-level commands for the next-gen CLI. */
type NextCommand = RepoOpsCommandId;

/** Print a short header. */
function printHeader(): void {
  // Keep output minimal for now; will evolve with design.
  // eslint-disable-next-line no-console
  console.log("Repo-ops Next CLI (scaffold)");
}

/** Print basic help text. */
function printHelp(): void {
  printHeader();
  // eslint-disable-next-line no-console
  console.log("Usage: repo-ops-next <command> [options]\n");
  // eslint-disable-next-line no-console
  console.log("Commands:");
  for (const command of COMMANDS) {
    const label = command.id.padEnd(10, " ");
    // eslint-disable-next-line no-console
    console.log(`  ${label} ${command.description}`);
  }
}

/** Print a placeholder version string. */
function printVersion(): void {
  // eslint-disable-next-line no-console
  console.log("repo-ops-next version 0.0.0-scaffold");
}

/**
 * Main entrypoint for the next-gen repo-ops CLI.
 *
 * The supported commands and their semantics are defined in
 * `architecture.ts` (COMMANDS/RepoOpsCommandId). This function is
 * responsible solely for routing argv to those commands and applying the
 * shared exit-code policy.
 */
export function main(argv: string[] = process.argv.slice(2)): void {
  const { positionals, flags } = parseFlags(argv);
  if (isDebugEnabled(flags)) {
    logDebug({ argv, positionals, flags });
  }

  const [command, subcommand] = positionals;
  const cmd = (command as NextCommand) || "help";

  switch (cmd) {
    case "help":
      printHelp();
      process.exitCode = EXIT_CODES.success;
      break;
    case "version":
      printVersion();
      process.exitCode = EXIT_CODES.success;
      break;
    case "status":
      printHeader();
      printStatus(getStatus());
      process.exitCode = EXIT_CODES.success;
      break;
    case "session":
      if (subcommand === "lint" || subcommand === undefined) {
        printHeader();
        printSessionLint(lintSession());
        process.exitCode = EXIT_CODES.success;
      } else {
        logError(`Unknown session subcommand: ${subcommand}`);
        process.exitCode = EXIT_CODES.validationError;
      }
      break;
    case "todo":
    case "changelog":
      logError(
        `Command '${cmd}' is not implemented yet. This is a placeholder based on the architecture descriptor.`
      );
      process.exitCode = EXIT_CODES.validationError;
      break;
    default:
      logError(`Unknown command: ${command ?? "<none>"}`);
      logError("Try: repo-ops-next help");
      process.exitCode = EXIT_CODES.validationError;
  }

  ensureErrorExitCode(EXIT_CODES.unknownError);
}
