import { describe, test, expect, jest } from "@jest/globals";

// Provide a synthetic TODO.md content with markers and one matching task
const sampleTODO = [
  "<!-- BEGIN:CURRENT_ACTION_ITEMS -->",
  "",
  "### Current Action Items",
  "",
  "- P1: Placeholder current task",
  "",
  "<!-- END:CURRENT_ACTION_ITEMS -->",
  "<!-- BEGIN:NEXT_ACTION_ITEMS -->",
  "",
  "### Next Action Items",
  "",
  "- P2: BUILD: Update build Pipeline to include bundler",
  "",
  "<!-- END:NEXT_ACTION_ITEMS -->",
  "<!-- BEGIN:BACKLOG_ACTION_ITEMS -->",
  "",
  "### Backlog Action Items",
  "",
  "<!-- END:BACKLOG_ACTION_ITEMS -->",
  "<!-- BEGIN:COMPLETED_ACTION_ITEMS -->",
  "",
  "## Completed TODOs",
  "",
  "<!-- END:COMPLETED_ACTION_ITEMS -->",
  "",
].join("\n");

jest.unstable_mockModule("../bin/../bin/repo-ops/fs", () => ({
  readFileUtf8: jest.fn(async (_p: string) => sampleTODO),
  writeFileUtf8: jest.fn(async () => {}),
  ensureDir: jest.fn(async () => {}),
  backupFile: jest.fn(async () => "backup-path"),
}));

const { moveTodo, completeTodo } = await import("../bin/../bin/repo-ops/todo");

describe("repo-ops.todo actions (dry-run)", () => {
  test("moveTodo plans moving a known Next item to P3", async () => {
    const res = await moveTodo({
      match: "BUILD: Update build Pipeline",
      to: "P3",
    });
    expect(res.dryRun).toBe(true);
    expect(res.changed).toBe(true);
    expect(res.plans.length).toBe(1);
    expect(res.plans[0].description).toContain("Move TODO to P3 section");
  });

  test("completeTodo plans moving a known Next item to Completed", async () => {
    const res = await completeTodo({ match: "BUILD: Update build Pipeline" });
    expect(res.dryRun).toBe(true);
    expect(res.changed).toBe(true);
    expect(res.plans.length).toBe(1);
    const after = res.plans[0].afterSnippet;
    expect(after.includes("<!-- BEGIN:COMPLETED_ACTION_ITEMS -->")).toBe(true);
    expect(after.includes("✅")).toBe(true);
  });
});
