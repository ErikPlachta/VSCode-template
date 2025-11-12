import { validateSessionContent } from "../bin/../bin/repo-ops/sessionLint";

describe("sessionLint.validateSessionContent", () => {
  test("happy path: default session template structure passes", () => {
    const now = new Date().toISOString();
    const md = [
      "# Session Context",
      "",
      `Started: ${now}`,
      "",
      "## Related",
      "- CHANGELOG.md",
      "- CONTEXT-BRANCH.md",
      "- TODO.md",
      "",
      "## Notes",
      "-",
      "",
    ].join("\n");

    const res = validateSessionContent(md);
    expect(res.ok).toBe(true);
    expect(res.issues.length).toBe(0);
  });

  test("flags missing sections and bad started line", () => {
    const md = [
      "# Session Context",
      "",
      "Started: not-a-timestamp",
      "",
      // Missing Related
      "## Notes",
      "-",
      "",
    ].join("\n");

    const res = validateSessionContent(md);
    expect(res.ok).toBe(false);
    expect(res.issues.some((s) => s.includes("ISO 8601"))).toBe(true);
    expect(res.issues.some((s) => s.includes('Missing "## Related"'))).toBe(
      true
    );
  });

  test("flags incorrect top heading", () => {
    const now = new Date().toISOString();
    const md = [
      "# Wrong Title",
      "",
      `Started: ${now}`,
      "",
      "## Related",
      "- CHANGELOG.md",
      "- CONTEXT-BRANCH.md",
      "- TODO.md",
      "",
      "## Notes",
      "-",
      "",
    ].join("\n");

    const res = validateSessionContent(md);
    expect(res.ok).toBe(false);
    expect(
      res.issues.some((s) => s.includes('expected "# Session Context"'))
    ).toBe(true);
  });
});
