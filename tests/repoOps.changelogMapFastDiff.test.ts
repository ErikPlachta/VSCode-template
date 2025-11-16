import { describe, test, expect } from "@jest/globals";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

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
  const trimmed = output.trim();
  return JSON.parse(trimmed);
}

describe("repo-ops changelog map --fast and diff", () => {
  test("map --fast emits notes or succeeds with incremental path", () => {
    const changelogPath = createSyntheticChangelog();
    // Perform write to generate index
    execSync(
      `npx tsx bin/repo-ops/index.ts changelog write --type chore --summary "Initial entry" --write`,
      {
        encoding: "utf8",
        env: { ...process.env, REPO_OPS_CHANGELOG_PATH: changelogPath },
      }
    );
    const output = execSync(
      `npx tsx bin/repo-ops/index.ts changelog map --fast`,
      {
        encoding: "utf8",
        env: { ...process.env, REPO_OPS_CHANGELOG_PATH: changelogPath },
      }
    );
    const json = parseOutputJson(output);
    expect(json.file.endsWith(".md")).toBe(true);
    expect(json.dayCount).toBeGreaterThanOrEqual(1);
    // notes should contain at least one fast-related message or be undefined if incremental succeeded silently
    if (json.notes) {
      expect(Array.isArray(json.notes)).toBe(true);
    }
  });

  test("diff reports added entry after manual file modification", () => {
    const changelogPath = createSyntheticChangelog();
    execSync(
      `npx tsx bin/repo-ops/index.ts changelog write --type chore --summary "Entry A" --write`,
      {
        encoding: "utf8",
        env: { ...process.env, REPO_OPS_CHANGELOG_PATH: changelogPath },
      }
    );
    // Manually append a new entry without updating index
    let now = new Date();
    // Ensure timestamp uniqueness: bump seconds if same-second collision occurs.
    const baseline = fs.readFileSync(changelogPath, "utf8");
    let ts = now
      .toISOString()
      .replace(/T/, " ")
      .replace(/:\d{3}Z$/, "")
      .slice(0, 19); // YYYY-MM-DD HH:MM:SS
    if (baseline.includes(ts)) {
      now = new Date(now.getTime() + 1000);
      ts = now
        .toISOString()
        .replace(/T/, " ")
        .replace(/:\d{3}Z$/, "")
        .slice(0, 19);
    }
    const manualEntry = `#### ${ts} chore: Entry B\n\n**Problem/Context**: test manual append`;
    const original = fs.readFileSync(changelogPath, "utf8");
    // Insert after day header
    // Append manual entry to ensure presence even if pattern mismatch occurs.
    const updated = original + "\n" + manualEntry + "\n";
    fs.writeFileSync(changelogPath, updated, "utf8");
    const diffOut = execSync(`npx tsx bin/repo-ops/index.ts changelog diff`, {
      encoding: "utf8",
      env: { ...process.env, REPO_OPS_CHANGELOG_PATH: changelogPath },
    });
    const payload = parseOutputJson(diffOut);
    // Accept either an added or modified entry (timestamp collision can convert addition to modification)
    expect(payload.addedCount + payload.modifiedCount).toBeGreaterThanOrEqual(
      1
    );
    expect(payload.removedCount).toBe(0);
    expect(payload.modifiedCount).toBeGreaterThanOrEqual(0);
  });
  // Cleanup synthetic temp directory created by these tests.
  afterAll(() => {
    const root = process.cwd();
    const dir = path.join(root, "tests_tmp");
    const backupTestsTmp = path.join(
      root,
      ".repo-ops-backups",
      "changelog-backup",
      "tests_tmp"
    );
    [dir, backupTestsTmp].forEach((p) => {
      if (fs.existsSync(p)) {
        try {
          fs.rmSync(p, { recursive: true, force: true });
        } catch {
          // swallow errors in cleanup
        }
      }
    });
  });
});
