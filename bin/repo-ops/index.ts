#!/usr/bin/env node
/**
 * @packageDocumentation
 * Repo-Ops CLI – Safe, config-driven utilities for session context, TODOs, and changelog management.
 *
 * Overview
 * - Purpose: governance automation for `CONTEXT-SESSION.md`, `TODO.md`, and `CHANGELOG.md`.
 * - Philosophy: dry-run first; on `--write`, create a timestamped backup before mutating files.
 * - Source of truth: tasks live only in `TODO.md`; `CHANGELOG.md` is logs-only history.
 *
 * Commands
 * - Session
 *   - `session rotate [--write]` – Archive current session, scaffold a fresh session file from template.
 *   - `session lint` – Validate required headings/markers and ISO 8601 Started line.
 * - TODOs
 *   - `todo add --title "..." [--priority P1|P2|P3] [--parent "..."] [--details "..."] [--child "..."] [--owner \@me] [--deps id1,id2] [--status "⏳"] [--write]`
 *   - `todo complete --match "substring" [--write]` – Move first matching bullet to Completed with a ✅ prefix.
 *   - `todo move --match "substring" --to P1|P2|P3 [--write]` – Relocate a matching bullet between sections.
 * - Changelog
 *   - `changelog scaffold --type feat|fix|docs|refactor|test|perf|ci|build|style|chore --summary "..." [--context "..."]`
 *   - `changelog write --type <type> --summary "..." [--context "..."] [--write]` – Insert entry under `## Logs`, grouped by day `### [YYYY-MM-DD]`, newest-first.
 *
 * Safety
 * - Dry-run by default: prints a plan showing file path, description, and byte size.
 * - Backups: on `--write`, creates a backup in the configured backup directory before writing.
 * - Deterministic parsing: uses configured markers for sections; avoids hardcoded business values.
 *
 * Configuration
 * - See `bin/repo-ops/repo-ops.config.ts` for:
 *   - `todoSections` markers (Current/Next/Backlog/Completed) and repo paths
 *   - `changelog.entryTypes` and `changelog.timeZone` (default: `America/New_York`)
 *   - `backupDirName` and repo path resolution
 *
 * Examples
 * ```bash
 * # Complete a TODO without writing
 * npm run repo:ops -- todo complete --match "BUILD: Update build Pipeline"
 *
 * # Add a logs-only changelog entry (dry-run)
 * npm run repo:ops -- changelog write --type chore --summary "Bump docs and tests"
 *
 * # Apply the changelog entry and create a backup
 * npm run repo:ops -- changelog write --type chore --summary "Bump docs and tests" --write
 * ```
 */

import { defaultConfig } from "./repo-ops.config";
// ESM-safe import for process argv and output
const args = process.argv.slice(2);

type Command =
  | "help"
  | "version"
  | "status"
  | "lint"
  | "session"
  | "todo"
  | "changelog";
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

  const cfg = defaultConfig;
  for (const line of cfg.help.header) console.log(line);
  console.log("");
  console.log("Commands:");
  console.log("  help              Show this help and exit");
  console.log("  version           Print CLI version info");
  console.log("  status            Read-only checks (COMING SOON)\n");
  for (const cmd of cfg.help.commands) {
    console.log(`  ${cmd.name.padEnd(18)} ${cmd.description}`);
    if (cmd.subcommands?.length) {
      for (const sc of cmd.subcommands) {
        console.log(`    - ${sc.name.padEnd(22)} ${sc.description}`);
      }
      console.log("");
    }
  }
  console.log("Safety:");
  for (const line of cfg.help.safety) console.log(`  - ${line}`);
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

    case "lint": {
      // Simple flags: default to --docs if none provided; --all runs both
      const rest = args.slice(1);
      const useAll = rest.includes("--all");
      const useDocs = useAll || rest.includes("--docs") || rest.length === 0;
      const useJson = useAll || rest.includes("--json");
      /** Run a single npm script and return success boolean */
      const runScript = async (script: string): Promise<boolean> => {
        const { spawn } = await import("node:child_process");
        return await new Promise<boolean>((resolve) => {
          const p = spawn(process.platform === "win32" ? "npm.cmd" : "npm", [
            "run",
            script,
          ], {
            stdio: "inherit",
          });
          p.on("exit", (code) => resolve(code === 0));
        });
      };
      (async () => {
        printHeader();
        console.log("lint: starting consolidated lint runner\n");
        let ok = true;
        if (useDocs) {
          console.log("→ docs: npm run lint:docs");
          ok = (await runScript("lint:docs")) && ok;
          console.log("");
        }
        if (useJson) {
          console.log("→ json: npm run lint:json");
          ok = (await runScript("lint:json")) && ok;
          console.log("");
        }
        console.log(`lint: ${ok ? "OK" : "ISSUES"}`);
        process.exitCode = ok ? 0 : 1;
      })();
      return;
    }

    case "session": {
      const sub = (args[1] as SessionSubcommand | undefined) ?? "rotate";
      const rest = args.slice(2);
      switch (sub) {
        case "rotate": {
          /**
           * Execute the session rotation flow (archive then create new session file).
           *
           * @returns {Promise<void>} Resolves when the flow has printed results.
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
          /**
           * Run session linter and set exit code on failure.
           *
           * @returns {Promise<void>} Resolves when lint results have been printed.
           */
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
    case "todo": {
      /**
       * Parse simple --flag value pairs into a map supporting multi-flags.
       *
       * @param {string[]} argv - Argument vector to parse (excluding command/subcommand).
       * @returns {Record<string, string | string[] | boolean>} Parsed flags.
       */
      const parseFlags = (
        argv: string[]
      ): Record<string, string | string[] | boolean> => {
        const out: Record<string, string | string[] | boolean> = {};
        for (let i = 0; i < argv.length; i++) {
          const t = argv[i];
          if (!t.startsWith("--")) continue;
          const key = t.slice(2);
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
      };
      const sub = (args[1] as string | undefined) ?? "add";
      const rest = args.slice(2);
      switch (sub) {
        case "add": {
          /**
           * Add a TODO item into TODO.md with dry-run default.
           *
           * @returns {Promise<void>} Resolves when operation finishes printing plan/results.
           */
          const runAdd = async (): Promise<void> => {
            const { addTodo } = await import("./todo");
            const flags = parseFlags(rest);
            const title = (flags.title as string) ?? "";
            if (!title) {
              console.error("todo add: --title is required");
              process.exitCode = 1;
              return;
            }
            const write = Boolean(flags.write);
            const priority = (flags.priority as "P1" | "P2" | "P3") ?? "P2";
            const parent = flags.parent as string | undefined;
            const owner = flags.owner as string | undefined;
            const status = flags.status as string | undefined;
            const details = flags.details
              ? Array.isArray(flags.details)
                ? (flags.details as string[])
                : [flags.details as string]
              : undefined;
            const children = flags.child
              ? Array.isArray(flags.child)
                ? (flags.child as string[])
                : [flags.child as string]
              : undefined;
            const deps = flags.deps
              ? String(flags.deps)
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean)
              : undefined;
            const result = await addTodo({
              title,
              priority,
              parent,
              owner,
              status,
              details,
              children,
              deps,
              write,
            });
            console.log(
              `todo add: ${
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
            if (result.notes?.length)
              for (const n of result.notes) console.log(`note: ${n}`);
            process.exitCode = result.notes && result.notes.length ? 0 : 0;
          };
          runAdd();
          return;
        }
        case "complete": {
          /**
           * Complete a TODO: move matching bullet to Completed section.
           *
           * @returns {Promise<void>} Resolves when operation finishes printing plan/results.
           */
          const runComplete = async (): Promise<void> => {
            const { completeTodo } = await import("./todo");
            const flags = parseFlags(rest);
            const match = (flags.match as string) ?? "";
            if (!match) {
              console.error(
                "todo complete: --match is required (substring to find)"
              );
              process.exitCode = 1;
              return;
            }
            const write = Boolean(flags.write);
            const result = await completeTodo({ match, write });
            console.log(
              `todo complete: ${
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
            if (result.notes?.length)
              for (const n of result.notes) console.log(`note: ${n}`);
          };
          runComplete();
          return;
        }
        case "move": {
          /**
           * Move a TODO: relocate matching bullet to another priority section.
           *
           * @returns {Promise<void>} Resolves when operation finishes printing plan/results.
           */
          const runMove = async (): Promise<void> => {
            const { moveTodo } = await import("./todo");
            const flags = parseFlags(rest);
            const match = (flags.match as string) ?? "";
            const to = (flags.to as "P1" | "P2" | "P3") ?? undefined;
            if (!match || !to) {
              console.error(
                "todo move: --match and --to (P1|P2|P3) are required"
              );
              process.exitCode = 1;
              return;
            }
            const write = Boolean(flags.write);
            const result = await moveTodo({ match, to, write });
            console.log(
              `todo move: ${
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
            if (result.notes?.length)
              for (const n of result.notes) console.log(`note: ${n}`);
          };
          runMove();
          return;
        }
        default:
          console.error(
            "Unknown todo subcommand. Try: todo add|complete|move (see help)"
          );
          process.exitCode = 1;
          return;
      }
    }
    case "changelog": {
      const sub = (args[1] as string | undefined) ?? "scaffold";
      const rest = args.slice(2);
      switch (sub) {
        case "scaffold": {
          /**
           * Print a logs-only entry scaffold to stdout.
           *
           * @returns {Promise<void>} Completes after printing scaffold block.
           */
          const runScaffold = async (): Promise<void> => {
            const { scaffoldEntry } = await import("./changelog");
            const typeIdx = rest.indexOf("--type");
            const sumIdx = rest.indexOf("--summary");
            const ctxIdx = rest.indexOf("--context");
            const type = typeIdx !== -1 ? rest[typeIdx + 1] : "chore";
            const summary =
              sumIdx !== -1 ? rest[sumIdx + 1] : "Describe the change";
            const context = ctxIdx !== -1 ? rest[ctxIdx + 1] : undefined;
            // Newline validation: warn if literal \n sequences appear (suggesting ANSI C quoting misuse)
            if (context && /\\n/.test(context) && !/\n/.test(context.replace(/\\n/g, ""))) {
              console.warn(
                "warning: context contains literal \\n escapes; use heredoc or external file for real newlines (see Multi-line Context guidance)."
              );
            }
            const block = scaffoldEntry(type, summary, context);
            console.log(block);
          };
          runScaffold();
          return;
        }
        case "write": {
          /**
           * Insert a logs-only entry into CHANGELOG.md (dry-run by default).
           *
           * @returns {Promise<void>} Completes after applying or printing plan.
           */
          const runWrite = async (): Promise<void> => {
            const { writeEntry } = await import("./changelog");
            const typeIdx = rest.indexOf("--type");
            const sumIdx = rest.indexOf("--summary");
            const ctxIdx = rest.indexOf("--context");
            const writeFlag = rest.includes("--write");
            const type = typeIdx !== -1 ? rest[typeIdx + 1] : "chore";
            const summary =
              sumIdx !== -1 ? rest[sumIdx + 1] : "Describe the change";
            const context = ctxIdx !== -1 ? rest[ctxIdx + 1] : undefined;
            if (!summary) {
              console.error("changelog write: --summary is required");
              process.exitCode = 1;
              return;
            }
            if (context && /\\n/.test(context) && !/\n/.test(context.replace(/\\n/g, ""))) {
              console.warn(
                "warning: write context contains literal \\n sequences; they will not render as newlines. Use heredoc or external file."
              );
            }
            const result = await writeEntry({
              type,
              summary,
              context,
              write: writeFlag,
            });
            console.log(
              `changelog write: ${
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
            if (result.notes?.length)
              for (const n of result.notes) console.log(`note: ${n}`);
          };
          runWrite();
          return;
        }
        default:
          console.error(
            "Unknown changelog subcommand. Try: changelog scaffold|write (see help)"
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
