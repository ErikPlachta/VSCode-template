import { defaultMarkers } from "../bin/../bin/repo-ops/markers";
import { extractOutstandingTasks } from "../bin/../bin/repo-ops/changelogExtract";

const BEGIN = defaultMarkers.changelogOutstanding.begin;
const END = defaultMarkers.changelogOutstanding.end;

describe("changelogExtract.extractOutstandingTasks", () => {
  test("happy path: extracts marker-inclusive section", () => {
    const content = [
      "# Changelog",
      "",
      BEGIN,
      "- Item A",
      "- Item B",
      END,
      "",
      "## Logs",
    ].join("\n");
    const res = extractOutstandingTasks(content, defaultMarkers);
    expect(res.ok).toBe(true);
    expect(res.content.startsWith(BEGIN)).toBe(true);
    expect(res.content.endsWith(END)).toBe(true);
    expect(res.content).toContain("Item A");
  });

  test("missing markers: ok=false", () => {
    const content = ["# Changelog", "", "No markers here"].join("\n");
    const res = extractOutstandingTasks(content, defaultMarkers);
    expect(res.ok).toBe(false);
  });

  test("end before begin: ok=false", () => {
    const content = ["# Changelog", END, "- orphan", BEGIN].join("\n");
    const res = extractOutstandingTasks(content, defaultMarkers);
    expect(res.ok).toBe(false);
  });
});
