/**
 * @file repoOps.changelogMap.test.ts
 * Tests the changelog map subcommand and direct parser to ensure entries
 * and days are discovered correctly without needing the large real CHANGELOG.
 */
import { mapChangelog } from "../bin/repo-ops/changelog";
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const SYNTH_FILE = path.join(process.cwd(), "CHANGELOG_MAP_SYNTHETIC.md");

function writeSynthetic() {
  const content = [
    "<!-- CHANGELOG:BEGIN:LOGS -->",
    "",
    "## Logs",
    "",
    "### [2025-11-14]",
    "",
    "#### 2025-11-14 10:10:10 feat: First synthetic feature",
    "",
    "#### 2025-11-14 11:11:11 fix: Resolve mapping anomaly",
    "",
    "### [2025-11-13]",
    "",
    "#### 2025-11-13 09:09:09 docs: Prior day documentation",
    "",
  ].join("\n");
  fs.writeFileSync(SYNTH_FILE, content, "utf8");
}

describe("repo-ops changelog map", () => {
  beforeAll(() => {
    writeSynthetic();
  });

  afterAll(() => {
    if (fs.existsSync(SYNTH_FILE)) fs.unlinkSync(SYNTH_FILE);
  });

  test("mapChangelog parses days and entries", async () => {
    const map = await mapChangelog(SYNTH_FILE);
    expect(map.days.length).toBe(2);
    const today = map.days.find((d) => d.day === "2025-11-14");
    expect(today).toBeTruthy();
    expect(today!.entries.length).toBe(2);
    const feature = today!.entries.find((e) => e.type === "feat");
    expect(feature).toBeTruthy();
    expect(feature!.summary).toBe("First synthetic feature");
  });

  test("CLI map subcommand outputs JSON with filters", () => {
    // Invoke repo-ops with env override using execSync env option (Windows-safe).
    // Invoke via tsx directly to avoid npm wrapper noise in output.
    const cmd = `npx tsx bin/repo-ops/index.ts changelog map --filter-day 2025-11-14 --filter-type fix --pretty`;
    const out = execSync(cmd, {
      encoding: "utf8",
      env: { ...process.env, REPO_OPS_CHANGELOG_PATH: SYNTH_FILE },
    });
    const parsed = JSON.parse(out);
    // Original day count remains >= 1 (full map day count before filtering)
    expect(parsed.dayCount).toBeGreaterThanOrEqual(1);
    // Filter applied: only one fix entry on 2025-11-14
    expect(parsed.entryCount).toBe(1);
    expect(parsed.days[0].entries[0].type).toBe("fix");
    expect(parsed.days[0].entries[0].summary).toBe("Resolve mapping anomaly");
  });
});
