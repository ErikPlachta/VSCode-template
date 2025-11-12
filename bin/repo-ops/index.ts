#!/usr/bin/env node
/**
 * @packageDocumentation
 * Repo Ops CLI entrypoint. Provides governance automation for TODO/Session/
 * Changelog with a dry-run-first philosophy and backups on mutating actions.
 */

// ESM-safe import for process argv and output
const args = process.argv.slice(2);

type Command = "help" | "version" | "status" | "todo";
type TodoSubcommand = "sync-from-changelog" | "generate-actions";

/**
 * Handle `todo` subcommands.
 *
 * @param {TodoSubcommand | undefined} sub - Subcommand name (currently only 'sync-from-changelog').
 * @param {string[]} rest - Remaining argv (supports --write).
 * @returns {Promise<number>} - Exit code (0=success).
 */
async function runTodo(
  sub: TodoSubcommand | undefined,
  rest: string[]
): Promise<number> {
  switch (sub) {
    case "sync-from-changelog": {
      const { syncFromChangelog } = await import("./todoSync");
      const write = rest.includes("--write");
      const result = await syncFromChangelog({ write });
      console.log(
        `todo sync-from-changelog: ${
          result.changed
            ? result.dryRun
              ? "CHANGES (dry-run)"
              : "APPLIED"
            : "NO-OP"
        }`
      );
      if (result.plans.length) {
        for (const plan of result.plans) {
          console.log(
            `- ${plan.description} → ${plan.filePath} (${plan.wouldWriteBytes} bytes)`
          );
        }
      }
      if (result.notes?.length) {
        for (const note of result.notes) console.log(`note: ${note}`);
      }
      return result.changed ? 0 : 0;
    }
    case "generate-actions": {
      const { generateActionsFromChangelog } = await import("./todoActions");
      const write = rest.includes("--write");
      const result = await generateActionsFromChangelog({ write });
      console.log(
        `todo generate-actions: ${
          result.changed
            ? result.dryRun
              ? "CHANGES (dry-run)"
              : "APPLIED"
            : "NO-OP"
        }`
      );
      if (result.plans.length) {
        for (const plan of result.plans) {
          console.log(
            `- ${plan.description} → ${plan.filePath} (${plan.wouldWriteBytes} bytes)`
          );
        }
      }
      if (result.notes?.length) {
        for (const note of result.notes) console.log(`note: ${note}`);
      }
      return 0;
    }
    default:
      console.error(
        "Unknown or missing todo subcommand. Try: npm run repo:ops -- todo sync-from-changelog [--write] | generate-actions [--write]"
      );
      return 1;
  }
}

/** Print a concise header for CLI screens. */
const printHeader = (): void => {
  console.log("Repo Ops CLI – scaffolding (read-only)");
  console.log(
    "Purpose: governance automation for TODO, session, and changelog."
  );
  console.log("");
};

/** Print usage and describe available subcommands. */
const printHelp = (): void => {
  printHeader();
  console.log("Usage:");
  console.log("  npm run repo:ops -- <command> [options]\n");

  console.log("Commands:");
  console.log("  help              Show this help and exit");
  console.log("  version           Print CLI version info");
  console.log(
    "  status            Read-only checks for governance files (COMING SOON)\n"
  );

  console.log("Planned (not yet implemented):");
  console.log("  todo add|complete|move|export-json|sync-from-changelog");
  console.log("  session note|rotate --archive|lint");
  console.log("  changelog reuse existing manager + helpers");
  console.log("  shared markers|io|backups|diff\n");

  console.log("Safety:");
  console.log(
    "  - All mutating commands will support --dry-run and auto-backup before write."
  );
  console.log("  - Current scaffold is read-only.");
};

/** Print the current CLI version string. */
const printVersion = (): void => {
  // Lazy read package.json without ESM file path gymnastics by requiring via createRequire if needed.
  // Keep it simple here: show placeholder while scaffolding.
  console.log("repo-ops version 0.0.1-scaffold");
};

/** CLI main entrypoint. Parses argv and dispatches subcommands. */
const main = (): void => {
  const cmd: Command = (args[0] as Command) || "help";
  switch (cmd) {
    case "help":
      printHelp();
      return;
    case "version":
      printVersion();
      return;
    case "status":
      printHeader();
      console.log("status: OK (scaffold) – no checks implemented yet");
      return;
    case "todo": {
      const sub = args[1] as TodoSubcommand | undefined;
      const rest = args.slice(2);
      runTodo(sub, rest).then((code) => {
        if (code !== 0) process.exitCode = code;
      });
      return;
    }
    default:
      console.error(`Unknown command: ${args[0] ?? "<none>"}`);
      console.error("Try: npm run repo:ops -- help");
      process.exitCode = 1;
  }
};

main();
