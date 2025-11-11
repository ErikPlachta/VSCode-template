/**
 * Integration tests for DatabaseAgent AgentResponse pattern.
 * Tests the new executeQueryResponse() wrapper method that returns structured AgentResponse<T>.
 */

import { DatabaseAgent } from "@agent/databaseAgent";
import type { DataSource, CategoryRecord } from "@internal-types/agentConfig";
import type { AgentResponse } from "@agent/communicationAgent";
import { promises as fs } from "fs";
import * as path from "path";
import * as os from "os";

describe("DatabaseAgent AgentResponse Pattern", () => {
  let agent: DatabaseAgent;
  let cacheDir: string;
  let cacheDirPromise: Promise<string>;

  const mockDataSource: DataSource = {
    id: "employees",
    name: "Employee Directory",
    records: [
      {
        id: "emp1",
        name: "Alice",
        department: "Engineering",
        skill: "javascript",
      },
      { id: "emp2", name: "Bob", department: "Sales", skill: "communication" },
      {
        id: "emp3",
        name: "Charlie",
        department: "Engineering",
        skill: "python",
      },
    ],
    fieldAliases: { dept: "department" },
  };

  beforeEach(async () => {
    cacheDir = path.join(os.tmpdir(), `db-agent-response-test-${Date.now()}`);
    await fs.mkdir(cacheDir, { recursive: true });
    cacheDirPromise = Promise.resolve(cacheDir);
    agent = new DatabaseAgent([mockDataSource], cacheDirPromise);
  });

  afterEach(async () => {
    try {
      await fs.rm(cacheDir, { recursive: true, force: true });
    } catch {
      // Ignore cleanup errors
    }
  });

  describe("executeQueryResponse()", () => {
    describe("Success Responses", () => {
      it("should return AgentResponse with success type and data", async () => {
        const response = await agent.executeQueryResponse("employees", {
          department: "Engineering",
        });

        expect(response.type).toBe("success");
        expect(response.status).toBe("success");
        expect(response.data).toHaveLength(2);
        expect(response.data?.map((r) => r.name)).toEqual(["Alice", "Charlie"]);
        expect(response.message).toContain("Query executed successfully");
        expect(response.message).toContain("employees");
      });

      it("should include timing metadata in success response", async () => {
        const response = await agent.executeQueryResponse("employees", {
          skill: "javascript",
        });

        expect(response.metadata).toBeDefined();
        expect(response.metadata?.agentId).toBe("database-agent");
        expect(response.metadata?.operation).toBe("executeQuery");
        expect(response.metadata?.duration).toBeGreaterThanOrEqual(0);
        expect(response.metadata?.timestamp).toBeDefined();
      });

      it("should include record count in metadata", async () => {
        const response = await agent.executeQueryResponse("employees", {
          department: "Engineering",
        });

        expect(response.metadata?.count).toBe(2);
        expect(response.metadata?.entityType).toBe("CategoryRecord[]");
      });

      it("should handle empty result sets successfully", async () => {
        const response = await agent.executeQueryResponse("employees", {
          department: "NonExistent",
        });

        expect(response.type).toBe("success");
        expect(response.status).toBe("success");
        expect(response.data).toEqual([]);
        expect(response.metadata?.count).toBe(0);
      });

      it("should handle queries with no criteria (return all)", async () => {
        const response = await agent.executeQueryResponse("employees", {});

        expect(response.type).toBe("success");
        expect(response.data).toHaveLength(3);
        expect(response.metadata?.count).toBe(3);
      });

      it("should include cache status in metadata", async () => {
        const response = await agent.executeQueryResponse(
          "employees",
          {},
          { useCache: true }
        );

        expect(response.metadata?.cached).toBe(true);
      });

      it("should reflect cache disabled when useCache=false", async () => {
        const response = await agent.executeQueryResponse(
          "employees",
          {},
          { useCache: false }
        );

        expect(response.metadata?.cached).toBe(false);
      });
    });

    describe("Error Responses", () => {
      it("should return error response for unknown category", async () => {
        const response = await agent.executeQueryResponse(
          "unknown-category",
          {}
        );

        expect(response.type).toBe("error");
        expect(response.status).toBe("error");
        expect(response.message).toContain("not found");
        expect(response.message).toContain("unknown-category");
      });

      it("should include error details with severity and code", async () => {
        const response = await agent.executeQueryResponse(
          "unknown-category",
          {}
        );

        expect(response.errors).toBeDefined();
        expect(response.errors).toHaveLength(1);
        expect(response.errors?.[0].severity).toBe("medium");
        expect(response.errors?.[0].code).toBe("DATA_SOURCE_NOT_FOUND");
      });

      it("should provide recovery suggestions for not found errors", async () => {
        const response = await agent.executeQueryResponse(
          "unknown-category",
          {}
        );

        expect(response.errors?.[0].suggestions).toBeDefined();
        expect(response.errors?.[0].suggestions).toContain(
          'Verify category ID "unknown-category" exists'
        );
        expect(response.errors?.[0].suggestions).toContain(
          "Check available categories with getAvailableCategories()"
        );
      });

      it("should include metadata even for error responses", async () => {
        const response = await agent.executeQueryResponse(
          "unknown-category",
          {}
        );

        expect(response.metadata).toBeDefined();
        expect(response.metadata?.agentId).toBe("database-agent");
        expect(response.metadata?.operation).toBe("executeQuery");
      });
    });

    describe("Type Safety", () => {
      it("should maintain CategoryRecord[] type in response data", async () => {
        const response: AgentResponse<CategoryRecord[]> =
          await agent.executeQueryResponse("employees", {
            department: "Engineering",
          });

        expect(Array.isArray(response.data)).toBe(true);
        response.data?.forEach((record) => {
          expect(record).toHaveProperty("id");
          expect(typeof record.id).toBe("string");
        });
      });

      it("should preserve record structure from data source", async () => {
        const response = await agent.executeQueryResponse("employees", {
          name: "Alice",
        });

        expect(response.data).toHaveLength(1);
        const record = response.data?.[0];
        expect(record).toMatchObject({
          id: "emp1",
          name: "Alice",
          department: "Engineering",
          skill: "javascript",
        });
      });
    });

    describe("Backward Compatibility", () => {
      it("should not break original executeQuery method", async () => {
        const originalResults = await agent.executeQuery("employees", {
          department: "Engineering",
        });

        expect(originalResults).toHaveLength(2);
        expect(originalResults.map((r) => r.name)).toEqual([
          "Alice",
          "Charlie",
        ]);
      });

      it("should return equivalent data between both methods", async () => {
        const criteria = { department: "Sales" };

        const originalResults = await agent.executeQuery("employees", criteria);
        const wrappedResponse = await agent.executeQueryResponse(
          "employees",
          criteria
        );

        expect(wrappedResponse.data).toEqual(originalResults);
      });
    });

    describe("Complex Query Scenarios", () => {
      it("should handle operator-based queries successfully", async () => {
        const response = await agent.executeQueryResponse("employees", {
          department: { $in: ["Engineering", "Sales"] },
        });

        expect(response.type).toBe("success");
        expect(response.data).toHaveLength(3);
      });

      it("should handle regex queries successfully", async () => {
        const response = await agent.executeQueryResponse("employees", {
          name: { $regex: "^[AC]" },
        });

        expect(response.type).toBe("success");
        expect(response.data).toHaveLength(2); // Alice and Charlie
      });

      it("should handle field aliases in queries", async () => {
        const response = await agent.executeQueryResponse("employees", {
          dept: "Engineering", // Using alias
        });

        expect(response.type).toBe("success");
        expect(response.data).toHaveLength(2);
        expect(
          response.data?.every((r) => r.department === "Engineering")
        ).toBe(true);
      });
    });

    describe("Integration with CommunicationAgent", () => {
      it("should produce response compatible with CommunicationAgent.formatSuccess", async () => {
        const { CommunicationAgent } = await import(
          "@agent/communicationAgent"
        );
        const commAgent = new CommunicationAgent();

        const queryResponse = await agent.executeQueryResponse("employees", {
          department: "Engineering",
        });

        const formatted = commAgent.formatSuccess(queryResponse);

        expect(formatted.message).toBeDefined();
        expect(formatted.format).toBeDefined();
        expect(formatted.raw).toEqual(queryResponse);
      });

      it("should produce error response compatible with CommunicationAgent.formatError", async () => {
        const { CommunicationAgent } = await import(
          "@agent/communicationAgent"
        );
        const commAgent = new CommunicationAgent();

        const errorResponse = await agent.executeQueryResponse(
          "unknown-category",
          {}
        );

        const formatted = commAgent.formatError(errorResponse);

        expect(formatted.message).toContain("not found");
        expect(formatted.severity).toBeDefined();
        expect(formatted.raw).toEqual(errorResponse);
      });
    });
  });
});
