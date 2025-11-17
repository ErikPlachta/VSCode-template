import { parseFlags } from "../bin/repo-ops-next/flags";

describe("repo-ops-next flags parser", () => {
  it("parses positionals and long flags with values", () => {
    const argv = [
      "status",
      "changelog",
      "--type",
      "feat",
      "--summary=Add feature",
    ];
    const result = parseFlags(argv);

    expect(result.positionals).toEqual(["status", "changelog"]);
    expect(result.flags.type).toBe("feat");
    expect(result.flags.summary).toBe("Add feature");
  });

  it("parses boolean and negated flags", () => {
    const argv = ["changelog", "write", "--write", "--no-auto-verify"];
    const result = parseFlags(argv);

    expect(result.positionals).toEqual(["changelog", "write"]);
    expect(result.flags.write).toBe(true);
    expect(result.flags["auto-verify"]).toBe(false);
  });

  it("treats short flags as boolean", () => {
    const argv = ["status", "-v"];
    const result = parseFlags(argv);

    expect(result.positionals).toEqual(["status"]);
    expect(result.flags.v).toBe(true);
  });
});
