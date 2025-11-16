/**
 * @packageDocumentation
 * Minimal command execution helpers and typed gate results for repo-ops.
 */
import { execSync } from "node:child_process";

/** Typed results for verification gates. */
export interface GateResults {
  buildOk: boolean;
  testsOk: boolean;
  docsOk: boolean;
  healthOk: boolean;
  lintOk: boolean;
}

/** Run compile/test/prebuild gates with optional fake mode for tests. */
export function runGates(options?: { fake?: boolean }): GateResults {
  const fake = options?.fake === true || process.env.REPO_OPS_FAKE_GATES === "1";
  const run = (cmd: string): boolean => {
    try {
      execSync(cmd, { stdio: ["ignore", "pipe", "pipe"] });
      return true;
    } catch {
      return false;
    }
  };
  const buildOk = fake ? true : run("npm run compile");
  const testsOk = fake ? true : run("npm test --silent");
  const docsOk = fake ? true : run("npm run prebuild");
  const healthOk = docsOk ? true : false;
  const lintOk = false; // lint not run in this gate set
  return { buildOk, testsOk, docsOk, healthOk, lintOk };
}
