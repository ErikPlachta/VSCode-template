import { invokeLocalTool, listLocalTools, LocalToolError } from "../src/mcp/localToolRegistry";

describe("localToolRegistry", () => {
  it("exposes local tools with schema metadata", async () => {
    const tools = await listLocalTools();
    expect(Array.isArray(tools)).toBe(true);
    const describeCategory = tools.find((tool) => tool.name === "relevant-data.describeCategory");
    expect(describeCategory?.input_schema?.properties?.categoryId?.required).toBe(true);
  });

  it("invokes the describeCategory tool", async () => {
    const result = (await invokeLocalTool("relevant-data.describeCategory", {
      categoryId: "people"
    })) as { category: Record<string, unknown> };
    expect(result.category).toBeDefined();
  });

  it("throws a LocalToolError when arguments are missing", async () => {
    await expect(invokeLocalTool("relevant-data.describeCategory", {})).rejects.toBeInstanceOf(
      LocalToolError
    );
  });
});
