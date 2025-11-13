#!/usr/bin/env node
/**
 * @packageDocumentation
 * Repo Ops CLI entrypoint. Provides governance automation for TODO/Session/
 * Changelog with a dry-run-first philosophy and backups on mutating actions.
 */

// ESM-safe import for process argv and output
const args = process.argv.slice(2);

type Command = "help" | "version" | "status" | "session";
type SessionSubcommand = "rotate" | "lint";

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
  console.log("  session            Session operations (rotate, lint)\n");

  console.log("Planned (not yet implemented):");
  console.log("  todo add|complete|move|export-json");
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

    case "session": {
      const sub = (args[1] as SessionSubcommand | undefined) ?? "rotate";
      const rest = args.slice(2);
      switch (sub) {
        case "rotate": {
          /**
           * Execute the session rotation flow (archive then create new session file).
           *
           * @returns {Promise<void>} - Resolves when the flow has printed results.
           */
          const runRotate = async (): Promise<void> => {
            const { rotateSession } = await import("./session");
            const write = rest.includes("--write");
            const result = await rotateSession({ write });
            console.log(
              `session rotate: ${
                result.changed
                  ? result.dryRun
                    ? "CHANGES (dry-run)"
                    : "APPLIED"
                  : "NO-OP"
              }`
            );
            for (const plan of result.plans) {
              console.log(
                `- ${plan.description} → ${plan.filePath} (${plan.wouldWriteBytes} bytes)`
              );
            }
            if (result.notes?.length) {
              for (const note of result.notes) console.log(`note: ${note}`);
            }
          };
          runRotate();
          return;
        }
        case "lint": {
          const runLint = async (): Promise<void> => {
            const { lintSession } = await import("./sessionLint");
            const result = await lintSession();
            console.log(
              `session lint: ${
                result.notes && result.notes.length ? "ISSUES" : "OK"
              }`
            );
            if (result.notes?.length) {
              for (const note of result.notes) console.log(`- ${note}`);
            } else {
              console.log("- No issues found. CONTEXT-SESSION.md looks good.");
            }
            // Exit non-zero if issues were found to enable CI gating
            if (result.notes && result.notes.length) {
              process.exitCode = 1;
            } else {
              process.exitCode = 0;
            }
          };
          runLint();
          return;
        }
        default:
          console.error(
            "Unknown session subcommand. Try: session rotate [--write] | session lint"
          );
          process.exitCode = 1;
          return;
      }
    }
    default:
      console.error(`Unknown command: ${args[0] ?? "<none>"}`);
      console.error("Try: npm run repo:ops -- help");
      process.exitCode = 1;
  }
};

main();
