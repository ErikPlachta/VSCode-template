import { describe, expect, it, vi, beforeEach } from "vitest";
import axios from "axios";
import { fetchTools } from "../src/mcpSync";

vi.mock("axios", () => ({
  default: {
    post: vi.fn()
  }
}));

describe("fetchTools", () => {
  const mockedPost = axios.post as unknown as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockedPost.mockReset();
  });

  it("returns validated tools with normalized schema", async () => {
    mockedPost.mockResolvedValue({
      data: {
        result: {
          tools: [
            {
              name: "search",
              title: "Search",
              description: "Run a search",
              input_schema: {
                type: "object",
                required: ["query"],
                properties: {
                  query: {
                    type: "string",
                    description: "Search query"
                  }
                }
              }
            }
          ]
        }
      }
    });

    const tools = await fetchTools("https://example.com", "token");
    expect(tools).toHaveLength(1);
    expect(tools[0].input_schema?.additionalProperties).toBe(false);
    expect(tools[0].input_schema?.required).toEqual(["query"]);
  });

  it("throws when schema validation fails", async () => {
    mockedPost.mockResolvedValue({
      data: {
        result: {
          tools: [
            {
              title: "Missing name",
              description: "No name provided"
            }
          ]
        }
      }
    });

    await expect(fetchTools("https://example.com", "token")).rejects.toThrow(
      /name/
    );
  });

  it("returns empty list when server URL is empty", async () => {
    const tools = await fetchTools("", "token");
    expect(tools).toEqual([]);
    expect(mockedPost).not.toHaveBeenCalled();
  });
});
