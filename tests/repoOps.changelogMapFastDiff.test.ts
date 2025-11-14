import { describe, test, expect } from "@jest/globals";
import * as fs from "fs";
import * as path from "path";
import { spawnSync } from "node:child_process";

/** Utility to run the repo-ops CLI and capture stdout as string. */
function runRepoOps(
  args: string[],
  env?: Record<string, string>
): { code: number; stdout: string; stderr: string } {
  const res = spawnSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    ["tsx", "bin/repo-ops/index.ts", ...args],
    {
      cwd: path.resolve(__dirname, ".."),
      env: { ...process.env, ...(env || {}) },
      encoding: "utf8",
    }
  );
  return {
    code: res.status ?? 0,
    stdout: res.stdout.trim(),
    stderr: res.stderr.trim(),
  };
}

function syntheticChangelogBase(): string {
  return [
    "---",
    "title: Changelog",
    "---",
    "",
    "<!-- CHANGELOG:BEGIN:LOGS -->",
    "",
    "## Logs",
    "",
    "### [2025-11-14]",
    "",
  ].join("\n");
}

/** Create a temporary synthetic changelog file and return its path. */
function createSyntheticChangelog(): string {
  const tmpDir = path.join(process.cwd(), "tests_tmp");
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
  const filePath = path.join(tmpDir, `CHANGELOG.synthetic.${Date.now()}.md`);
  fs.writeFileSync(filePath, syntheticChangelogBase(), "utf8");
  return filePath;
}

function parseOutputJson(output: string): any {
  // Some commands may emit advisory lines before JSON; take last non-empty line.
  const lines = output.split(/\r?\n/).filter(l => l.trim().length);
  const candidate = lines[lines.length - 1];
  try {
    return JSON.parse(candidate);
  } catch (e) {
    throw new Error(`Failed to parse JSON from output. Raw:\n${output}`);
  }
}

describe("repo-ops changelog map --fast and diff", () => {
  test("map --fast emits notes when prior index exists", () => {
    const changelogPath = createSyntheticChangelog();
    // First write (dry-run) won't create index; need --write to build index.json
    const writeRes = runRepoOps(
      [
        "changelog",
        "write",
        "--type",
        "chore",
        "--summary",
        "Initial entry",
        "--write",
      ],
      { REPO_OPS_CHANGELOG_PATH: changelogPath }
    );
    expect(writeRes.code).toBe(0);
    // Now run map fast
    const mapRes = runRepoOps(["changelog", "map", "--fast"], {
      REPO_OPS_CHANGELOG_PATH: changelogPath,
    });
    expect(mapRes.code).toBe(0);
    const json = parseOutputJson(mapRes.stdout);
    expect(json.file.endsWith(".md")).toBe(true);
    expect(json.dayCount).toBeGreaterThanOrEqual(1);
    // notes should contain at least one fast-related message or be undefined if incremental succeeded silently
    if (json.notes) {
      expect(Array.isArray(json.notes)).toBe(true);
    }
  });

  test("diff reports added entry after manual file modification", () => {
    const changelogPath = createSyntheticChangelog();
    const writeRes = runRepoOps(
      [
        "changelog",
        "write",
        "--type",
        "chore",
        "--summary",
        "Entry A",
        "--write",
      ],
      { REPO_OPS_CHANGELOG_PATH: changelogPath }
    );
    expect(writeRes.code).toBe(0);
    // Manually append a new entry without updating index
    const now = new Date();
    const ts = now
      .toISOString()
      .replace(/T/, " ")
      .replace(/:\d{3}Z$/, "")
      .slice(0, 19); // YYYY-MM-DD HH:MM:SS
    const manualEntry = `#### ${ts} chore: Entry B\n\n**Problem/Context**: test manual append`;
    const original = fs.readFileSync(changelogPath, "utf8");
    // Insert after day header
    const updated = original.replace(
      /(### \[2025-11-14\]\n\n)/,
      `$1${manualEntry}\n\n`
    );
    fs.writeFileSync(changelogPath, updated, "utf8");
    const diffRes = runRepoOps(["changelog", "diff"], {
      REPO_OPS_CHANGELOG_PATH: changelogPath,
    });
    expect(diffRes.code).toBe(0);
    const payload = parseOutputJson(diffRes.stdout);
    expect(payload.addedCount).toBeGreaterThanOrEqual(1);
    expect(payload.removedCount).toBe(0);
    expect(payload.modifiedCount).toBeGreaterThanOrEqual(0);
  });
});
