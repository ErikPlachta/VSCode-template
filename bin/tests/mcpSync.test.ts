import axios from "axios";
import { fetchTools, MCPDiscoveryError } from "../../src/extension/mcpSync";

jest.mock("axios");

describe("fetchTools", () => {
  beforeEach(() => {
    (axios.post as jest.Mock).mockReset();
  });

  it("normalises tool schemas and required metadata", async () => {
    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: {
        result: {
          tools: [
            {
              name: "t1",
              title: "Test",
              description: "desc",
              input_schema: {
                properties: {
                  metric: { description: "Metric", type: "string" }
                },
                required: ["metric"]
              }
            }
          ]
        }
      }
    });

    const result = await fetchTools("https://example.com");
    expect(result).toHaveLength(1);
    expect(result[0].input_schema?.properties?.metric?.required).toBe(true);
  });

  it("throws a discovery error when the server is unreachable", async () => {
    (axios.post as jest.Mock).mockRejectedValueOnce(new Error("boom"));
    await expect(fetchTools("https://example.com")).rejects.toBeInstanceOf(
      MCPDiscoveryError
    );
  });
});
