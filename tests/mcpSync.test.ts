import { fetchTools } from "../src/mcpSync";
import axios from "axios";
jest.mock("axios");

describe("fetchTools", () => {
  it("returns list of tools", async () => {
    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: { result: { tools: [{ name: "t1", title: "Test", description: "desc" }] } }
    });
    const result = await fetchTools("https://example.com");
    expect(result).toHaveLength(1);
  });
});
