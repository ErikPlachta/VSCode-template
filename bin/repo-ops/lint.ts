/**
 * @packageDocumentation
 * Unified lint helpers for repo-ops. Currently shells out to npm scripts.
 * This is a thin wrapper for future consolidation and internalization.
 */

import { spawn } from "node:child_process";

/**
 * Execute an npm script and return success status.
 *
 * @param script - NPM script name (e.g. 'lint:docs').
 * @returns Promise resolving true if exit code == 0.
 */
export async function runNpmScript(script: string): Promise<boolean> {
  return await new Promise<boolean>((resolve) => {
    const cmd = process.platform === "win32" ? "npm.cmd" : "npm";
    const p = spawn(cmd, ["run", script], { stdio: "inherit" });
    p.on("exit", (code) => resolve(code === 0));
  });
}

/**
 * Options controlling which lint groups to execute.
 *
 * @property {boolean} docs - Run documentation markdown lint.
 * @property {boolean} json - Run JSON structural lint.
 * @property {boolean} all - Convenience flag to run all lint groups.
 */
export interface UnifiedLintOptions {
  docs?: boolean;
  json?: boolean;
  all?: boolean;
}

/**
 * Run unified lint flows according to flags. Defaults to docs when no flags passed.
 *
 * @param options - Lint option flags specifying which groups to run.
 * @returns Overall success boolean and a list of executed scripts.
 */
export async function runUnifiedLint(
  options: UnifiedLintOptions
): Promise<{ ok: boolean; executed: string[] }> {
  const useAll = Boolean(options.all);
  const useDocs =
    useAll || Boolean(options.docs) || (!options.all && !options.json);
  const useJson = useAll || Boolean(options.json);

  const executed: string[] = [];
  let ok = true;

  if (useDocs) {
    executed.push("lint:docs");
    ok = (await runNpmScript("lint:docs")) && ok;
  }
  if (useJson) {
    executed.push("lint:json");
    ok = (await runNpmScript("lint:json")) && ok;
  }
  return { ok, executed };
}
