import { describe, test, expect } from "@jest/globals";
import * as fs from "node:fs";
import * as path from "node:path";
import { runChangelogCommand } from "../bin/../bin/repo-ops-next/commands/changelog";
import { EXIT_CODES } from "../bin/../bin/repo-ops-next/architecture";

describe("repo-ops-next runChangelogCommand(write)", () => {
  test("writes a formatted entry with flags into a synthetic changelog", async () => {
    const tmpDir = fs.mkdtempSync(
      path.join(process.cwd(), "tests_tmp_changelog_cmd_")
    );
    const syntheticName = "CHANGELOG_CMD_SYNTHETIC.md";
    const syntheticPath = path.join(tmpDir, syntheticName);

    const origCwd = process.cwd();
    process.chdir(tmpDir);
    process.env.REPO_OPS_CHANGELOG_PATH = syntheticName;

    try {
      const code = await runChangelogCommand("write", {
        type: "feat",
        summary: "Command integration entry",
        context: "Context from command test",
        changes: "Changes from command test",
      });

      expect(code).toBe(EXIT_CODES.success);
      const content = fs.readFileSync(syntheticPath, "utf8");

      // Heading line should follow the exact format from formatEntryBlock.
      expect(
        /#### \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} feat: Command integration entry/u.test(
          content
        )
      ).toBe(true);

      // Section labels and bodies should match the Problem/Context and Changes Made sections.
      expect(content.includes("**Problem/Context**:")).toBe(true);
      expect(content.includes("Context from command test")).toBe(true);
      expect(content.includes("**Changes Made**:")).toBe(true);
      expect(content.includes("Changes from command test")).toBe(true);
    } finally {
      process.chdir(origCwd);
      delete process.env.REPO_OPS_CHANGELOG_PATH;
    }
  });
});
