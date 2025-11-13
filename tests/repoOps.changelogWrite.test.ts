import { describe, test, expect, jest } from "@jest/globals";
import { defaultConfig } from "../bin/../bin/repo-ops/repo-ops.config";

// Mock repo-ops fs helpers to avoid touching real files
const sampleChangelog = [
  "---",
  "title: Changelog",
  "---",
  "",
  "<!-- CHANGELOG:BEGIN:LOGS -->",
  "",
  "## Logs",
  "",
].join("\n");

jest.unstable_mockModule("../bin/../bin/repo-ops/fs", () => ({
  readFileUtf8: jest.fn(async (_p: string) => sampleChangelog),
  writeFileUtf8: jest.fn(async () => {}),
  ensureDir: jest.fn(async () => {}),
  backupFile: jest.fn(async () => "backup-path"),
}));

const { writeEntry } = await import("../bin/../bin/repo-ops/changelog");

function formatDay(d: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .formatToParts(d)
    .reduce<Record<string, string>>((acc, p) => {
      if (p.type !== "literal") acc[p.type] = p.value;
      return acc;
    }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

describe("repo-ops.changelog.writeEntry", () => {
  test("dry-run plans insertion under today's day header", async () => {
    const today = formatDay(new Date(), defaultConfig.changelog.timeZone);
    const summary = "Test entry for unit";
    const res = await writeEntry({ type: "chore", summary, context: "unit" });

    expect(res.dryRun).toBe(true);
    expect(res.changed).toBe(true);
    expect(res.plans.length).toBe(1);
    const after = res.plans[0].afterSnippet;
    expect(after.includes(`### [${today}]`)).toBe(true);
    expect(after.includes(`: ${summary}`)).toBe(true);
    expect(after.includes("## Logs")).toBe(true);
  });
});
