import { describe, it, expect, beforeEach, afterEach, beforeAll, afterAll, jest } from "@jest/globals";
import * as https from "https";
import { fetchTools, MCPDiscoveryError } from "../src/extension/mcpSync";

// Mock the https module
jest.mock("https");

describe("fetchTools", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Normalizes tool schemas and required metadata", async () => {
    // Mock successful HTTP response
    const mockRequest = {
      on: jest.fn(),
      write: jest.fn(),
      end: jest.fn(),
    };
    
    const mockResponse = {
      statusCode: 200,
      on: jest.fn((event: string, handler: (chunk: string) => void) => {
        if (event === "data") {
          handler(JSON.stringify({
            result: {
              tools: [
                {
                  name: "t1",
                  title: "Test",
                  description: "desc",
                  input_schema: {
                    properties: {
                      metric: { description: "Metric", type: "string" },
                    },
                    required: ["metric"],
                  },
                },
              ],
            },
          }));
        } else if (event === "end") {
          handler("");
        }
        return mockResponse;
      }),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (https.request as any).mockImplementation((options: unknown, callback: (res: unknown) => void) => {
      callback(mockResponse);
      return mockRequest;
    });

    const result = await fetchTools("https://example.com");
    expect(result).toHaveLength(1);
    expect(result[0].input_schema?.properties?.metric?.required).toBe(true);
  });

  it("throws a discovery error when the server is unreachable", async () => {
    const mockRequest = {
      on: jest.fn((event: string, handler: (error: Error) => void) => {
        if (event === "error") {
          handler(new Error("boom"));
        }
        return mockRequest;
      }),
      write: jest.fn(),
      end: jest.fn(),
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (https.request as any).mockImplementation(() => mockRequest);

    await expect(fetchTools("https://example.com")).rejects.toBeInstanceOf(
      MCPDiscoveryError
    );
  });
});
