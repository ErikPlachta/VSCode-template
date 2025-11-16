import { describe, test, expect } from "@jest/globals";
import { parseFlags } from "../bin/../bin/repo-ops/flags";

describe("repo-ops flags parser", () => {
  test("parses boolean and value flags", () => {
    const argv = [
      "--write",
      "--summary",
      "Test",
      "--changes",
      "C1",
      "--changes",
      "C2",
    ];
    const flags = parseFlags(argv);
    expect(flags.write).toBe(true);
    expect(flags.summary).toBe("Test");
    expect(flags.changes).toEqual(["C1", "C2"]);
  });

  test("ignores non-flag tokens", () => {
    const argv = ["changelog", "write", "--write", "--summary", "X"];
    const flags = parseFlags(argv);
    expect(flags.write).toBe(true);
    expect(flags.summary).toBe("X");
  });
});
