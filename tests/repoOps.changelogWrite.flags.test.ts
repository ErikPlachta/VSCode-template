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
  const filePath = path.join(tmpDir, `CHANGELOG.flags.${Date.now()}.md`);
  fs.writeFileSync(filePath, syntheticChangelogBase(), "utf8");
  return filePath;
}

describe("repo-ops changelog write flags & inline testing", () => {
  test("populates rich sections via flags", () => {
    const changelogPath = createSyntheticChangelog();
    // Ensure no stale lock interferes with test
    try {
      execSync(
        `npx tsx bin/repo-ops/index.ts changelog lock --remove --force`,
        {
          encoding: "utf8",
          env: { ...process.env, REPO_OPS_CHANGELOG_PATH: changelogPath },
        }
      );
    } catch {
      // ignore
    }
    const CHANGES = "1. file a.ts; 2. file b.ts";
    const ARCH = "No hardcoded values; single-path CLI";
    const FILES = "- bin/repo-ops/index.ts: +12 -0";
    const TESTING =
      "Build: PASS; Tests: PASS; Docs: PASS; Health: PASS; Lint: PASS";
    const IMPACT = "Reduces manual edits; improves reliability.";

    const out1 = execSync(
      `npx tsx bin/repo-ops/index.ts changelog write \
        --type docs \
        --summary "Test flags population" \
        --context "Populate sections via flags" \
        --changes "${CHANGES}" \
        --architecture "${ARCH}" \
        --files "${FILES}" \
        --testing "${TESTING}" \
        --impact "${IMPACT}" \
        --write`,
      {
        encoding: "utf8",
        env: { ...process.env, REPO_OPS_CHANGELOG_PATH: changelogPath },
      }
    );
    expect(out1).toContain("changelog write:");
    expect(out1).toMatch(/APPLIED|CHANGES \(dry-run\)/);

    const text = fs.readFileSync(changelogPath, "utf8");
    expect(text).toContain("**Changes Made**:");
    expect(text).toContain("file a.ts");
    expect(text).toContain("**Architecture Notes**: No hardcoded values");
    expect(text).toMatch(
      /\*\*Files Changed\*\*:\s*\n- bin\/repo-ops\/index\.ts/
    );
    expect(text).toContain("**Testing**: Build: PASS; Tests: PASS");
    expect(text).toContain(
      "**Impact**: Reduces manual edits; improves reliability."
    );
  });

  test("inline Testing is updated when auto-verify runs (fake gates)", () => {
    const changelogPath = createSyntheticChangelog();
    try {
      execSync(
        `npx tsx bin/repo-ops/index.ts changelog lock --remove --force`,
        {
          encoding: "utf8",
          env: { ...process.env, REPO_OPS_CHANGELOG_PATH: changelogPath },
        }
      );
    } catch {}
    const out2 = execSync(
      `npx tsx bin/repo-ops/index.ts changelog write \
        --type chore \
        --summary "Inline testing update" \
        --context "Ensure Testing line reflects gate outcomes" \
        --auto-verify \
        --write`,
      {
        encoding: "utf8",
        env: {
          ...process.env,
          REPO_OPS_CHANGELOG_PATH: changelogPath,
          REPO_OPS_FAKE_GATES: "1",
        },
      }
    );
    expect(out2).toContain("changelog write:");
    expect(out2).toMatch(/APPLIED|CHANGES \(dry-run\)/);
    const text = fs.readFileSync(changelogPath, "utf8");
    // Inline Testing updated
    expect(text).toMatch(
      /\*\*Testing\*\*: Build: PASS; Tests: PASS; Docs: PASS; Health: PASS; Lint: N\/A/
    );
    // No assertion on Verification block presence (default is suppressed)
  });

  afterAll(() => {
    const dir = path.join(process.cwd(), "tests_tmp");
    if (fs.existsSync(dir)) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
      } catch {
        // ignore
      }
    }
  });
});
