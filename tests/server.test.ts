import { tools } from "../src/server";

describe("server", () => {
  it("exposes development tools for the MCP client", () => {
    expect(Array.isArray(tools)).toBe(true);
    expect(tools).not.toHaveLength(0);
    for (const tool of tools) {
      expect(tool).toHaveProperty("name");
      expect(tool).toHaveProperty("title");
      expect(tool).toHaveProperty("description");
    }
  });
});
