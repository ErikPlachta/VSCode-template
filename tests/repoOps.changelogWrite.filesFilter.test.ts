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
    "### [2025-11-15]",
    "",
  ].join("\n");
}

function createSyntheticChangelog(): string {
  const tmpDir = path.join(process.cwd(), "tests_tmp");
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);
  const filePath = path.join(tmpDir, `CHANGELOG.files.${Date.now()}.md`);
  fs.writeFileSync(filePath, syntheticChangelogBase(), "utf8");
  return filePath;
}

describe("repo-ops changelog write – files filter and verify block", () => {
  test("filters Files Changed with --files-include only", () => {
    const changelogPath = createSyntheticChangelog();
    // Provide fake git numstat covering docs and src
    const NUMSTAT = [
      "10\t0\tdocs/guide.md",
      "5\t2\tsrc/app.ts",
      "1\t0\tcoverage/lcov.info",
    ].join("\n");
    execSync(
      `npx tsx bin/repo-ops/index.ts changelog write \
        --type chore \
        --summary "Files include filter" \
        --context "Ensure include prefixes narrow scope" \
        --include-files \
        --files-include "src/" \
        --write`,
      {
        encoding: "utf8",
        env: {
          ...process.env,
          REPO_OPS_CHANGELOG_PATH: changelogPath,
          REPO_OPS_FAKE_GIT_NUMSTAT: NUMSTAT,
        },
      }
    );
    const text = fs.readFileSync(changelogPath, "utf8");
    expect(text).toMatch(/\*\*Files Changed\*\*:\s*\n- src\/app\.ts: \+5 -2/);
    expect(text).not.toContain("docs/guide.md");
    expect(text).not.toContain("coverage/lcov.info");
  });

  test("filters Files Changed with additional --files-exclude", () => {
    const changelogPath = createSyntheticChangelog();
    const NUMSTAT = ["2\t1\tsrc/generated/autogen.ts", "7\t0\tsrc/app.ts"].join(
      "\n"
    );
    execSync(
      `npx tsx bin/repo-ops/index.ts changelog write \
        --type chore \
        --summary "Files exclude filter" \
        --context "Ensure exclude prefixes take precedence" \
        --include-files \
        --files-exclude "src/generated/" \
        --write`,
      {
        encoding: "utf8",
        env: {
          ...process.env,
          REPO_OPS_CHANGELOG_PATH: changelogPath,
          REPO_OPS_FAKE_GIT_NUMSTAT: NUMSTAT,
        },
      }
    );
    const text = fs.readFileSync(changelogPath, "utf8");
    expect(text).toMatch(/\*\*Files Changed\*\*:\s*\n- src\/app\.ts: \+7 -0/);
    expect(text).not.toContain("src/generated/autogen.ts");
  });

  test("verify-block opt-in appends verification block", () => {
    const changelogPath = createSyntheticChangelog();
    const NUMSTAT = "";
    execSync(
      `npx tsx bin/repo-ops/index.ts changelog write \
        --type docs \
        --summary "Verify block opt-in" \
        --context "Append verification block when opted in" \
        --verify-block \
        --auto-verify \
        --write`,
      {
        encoding: "utf8",
        env: {
          ...process.env,
          REPO_OPS_CHANGELOG_PATH: changelogPath,
          REPO_OPS_FAKE_GATES: "1",
          REPO_OPS_FAKE_GIT_NUMSTAT: NUMSTAT,
        },
      }
    );
    const text = fs.readFileSync(changelogPath, "utf8");
    expect(text).toMatch(
      /##### Verification – \d{4}-\d{2}-\d{2} \(Auto Verify\)/
    );
  });

  afterAll(() => {
    const dir = path.join(process.cwd(), "tests_tmp");
    if (fs.existsSync(dir)) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
      } catch {}
    }
  });
});
