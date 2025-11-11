/**
 * @packageDocumentation Tests for AgentResponse pattern demonstration
 */

import { promises as fs } from "fs";
import * as os from "os";
import * as path from "path";
import { UserContextAgent } from "../src/agent/userContextAgent";
import { CommunicationAgent } from "../src/agent/communicationAgent";
import {
  createSuccessResponse,
  createErrorResponse,
  createProgressResponse,
  createPartialResponse,
} from "../src/agent/communicationAgent";
import type { AgentResponse } from "../src/agent/communicationAgent";

describe("AgentResponse Pattern Integration", () => {
  beforeAll(() => {
    // Ensure the agent reads datasets from the userContext directory
    process.env.VSCODE_TEMPLATE_DATA_ROOT = path.resolve(
      __dirname,
      "../src/userContext"
    );
  });

  async function createTestAgent(): Promise<UserContextAgent> {
    const cacheDir = await fs.mkdtemp(
      path.join(os.tmpdir(), "agent-response-test-")
    );
    return new UserContextAgent(undefined, Promise.resolve(cacheDir));
  }
  describe("Response Builder Utilities", () => {
    it("createSuccessResponse creates properly structured success response", () => {
      const data = { id: "test", name: "Test Item" };
      const response = createSuccessResponse(data, {
        message: "Operation successful",
        metadata: {
          agentId: "test-agent",
          operation: "retrieve",
          duration: 150,
        },
      });

      expect(response.type).toBe("success");
      expect(response.status).toBe("success");
      expect(response.data).toEqual(data);
      expect(response.message).toBe("Operation successful");
      expect(response.metadata?.agentId).toBe("test-agent");
      expect(response.metadata?.operation).toBe("retrieve");
      expect(response.metadata?.duration).toBe(150);
      expect(response.metadata?.timestamp).toBeDefined();
    });

    it("createErrorResponse creates properly structured error response", () => {
      const response = createErrorResponse("Something went wrong", {
        metadata: {
          agentId: "test-agent",
          operation: "process",
        },
        errors: [
          {
            message: "Something went wrong",
            code: "TEST_ERROR",
            severity: "high",
            suggestions: ["Check input", "Retry operation"],
          },
        ],
      });

      expect(response.type).toBe("error");
      expect(response.status).toBe("error");
      expect(response.message).toBe("Something went wrong");
      expect(response.errors).toHaveLength(1);
      expect(response.errors?.[0].code).toBe("TEST_ERROR");
      expect(response.errors?.[0].severity).toBe("high");
      expect(response.errors?.[0].suggestions).toContain("Check input");
    });

    it("createProgressResponse creates properly structured progress response", () => {
      const response = createProgressResponse(45, "Processing data", {
        message: "Processing data (45%)",
        metadata: {
          agentId: "test-agent",
        },
        progress: {
          totalSteps: 10,
          elapsedTime: 5000,
        },
      });

      expect(response.type).toBe("progress");
      expect(response.status).toBe("in-progress");
      expect(response.progress?.percentage).toBe(45);
      expect(response.progress?.currentStep).toBe("Processing data");
      expect(response.progress?.totalSteps).toBe(10);
      expect(response.progress?.elapsedTime).toBe(5000);
    });

    it("createPartialResponse creates properly structured partial success response", () => {
      const data = { processed: 8, skipped: 2 };
      const errors = [
        { message: "Item 5 failed validation", severity: "medium" as const },
        { message: "Item 8 had invalid format", severity: "low" as const },
      ];

      const response = createPartialResponse(data, errors, {
        metadata: {
          agentId: "test-agent",
          operation: "bulkProcess",
        },
      });

      expect(response.type).toBe("success");
      expect(response.status).toBe("partial");
      expect(response.data).toEqual(data);
      expect(response.errors).toHaveLength(2);
      expect(response.message).toContain("partially completed");
      expect(response.message).toContain("2 errors");
    });
  });

  describe("UserContextAgent.getSnapshotResponse()", () => {
    let agent: UserContextAgent;

    beforeEach(async () => {
      agent = await createTestAgent();
    });

    it("returns AgentResponse<CategorySnapshot> with success status", async () => {
      const response = await agent.getSnapshotResponse("people");

      // Verify response structure
      expect(response.type).toBe("success");
      expect(response.status).toBe("success");
      expect(response.data).toBeDefined();
      expect(response.metadata?.agentId).toBe("relevant-data-manager");
      expect(response.metadata?.operation).toBe("getSnapshot");
      expect(response.metadata?.entityType).toBe("CategorySnapshot");
      expect(response.message).toContain("Retrieved snapshot");

      // Verify snapshot data
      expect(response.data?.id).toBe("people");
      expect(response.data?.name).toBe("People");
      expect(response.data?.recordCount).toBeGreaterThan(0);
    });

    it("returns error response when category does not exist", async () => {
      const response = await agent.getSnapshotResponse("nonexistent");

      expect(response.type).toBe("error");
      expect(response.status).toBe("error");
      expect(response.message).toContain("Unknown category");
      expect(response.errors).toBeDefined();
      expect(response.errors?.[0].severity).toBe("high");
      expect(response.errors?.[0].code).toBe("SNAPSHOT_RETRIEVAL_FAILED");
      expect(response.errors?.[0].suggestions).toContain(
        "Verify the category exists"
      );
    });

    it("includes timing metadata in successful response", async () => {
      const response = await agent.getSnapshotResponse("people");

      expect(response.metadata?.duration).toBeDefined();
      expect(typeof response.metadata?.duration).toBe("number");
      expect(response.metadata?.duration).toBeGreaterThanOrEqual(0);
      expect(response.metadata?.timestamp).toBeDefined();
    });

    it("includes record count in metadata", async () => {
      const response = await agent.getSnapshotResponse("people");

      expect(response.metadata?.count).toBeDefined();
      expect(response.metadata?.count).toBeGreaterThan(0);
      expect(response.metadata?.count).toBe(response.data?.recordCount);
    });
  });

  describe("CommunicationAgent Integration", () => {
    let communicationAgent: CommunicationAgent;
    let userContextAgent: UserContextAgent;

    beforeEach(async () => {
      communicationAgent = new CommunicationAgent();
      userContextAgent = await createTestAgent();
    });

    it("formats success response from userContextAgent", async () => {
      const agentResponse = await userContextAgent.getSnapshotResponse(
        "people"
      );
      const formatted = communicationAgent.formatSuccess(agentResponse);

      expect(formatted.message).toBeDefined();
      expect(formatted.raw).toEqual(agentResponse);
      expect(formatted.format).toBeDefined();
    });

    it("formats error response with recovery suggestions", async () => {
      const agentResponse = await userContextAgent.getSnapshotResponse(
        "nonexistent"
      );
      const formatted = communicationAgent.formatError(agentResponse);

      expect(formatted.message).toContain("Unknown");
      expect(formatted.raw).toEqual(agentResponse);
      expect(formatted.format).toBeDefined();
    });

    it("preserves response data through formatting", async () => {
      const agentResponse = await userContextAgent.getSnapshotResponse(
        "people"
      );
      const formatted = communicationAgent.formatSuccess(agentResponse);

      expect(formatted.raw).toBeDefined();
      if (formatted.raw) {
        expect(formatted.raw.data).toBeDefined();
        expect(formatted.raw.metadata?.count).toBeGreaterThan(0);
      }
    });
  });

  describe("Response Type Safety", () => {
    it("correctly types response data", async () => {
      const agent = await createTestAgent();

      const response = await agent.getSnapshotResponse("people");

      // TypeScript should infer CategorySnapshot type
      if (response.status === "success" && response.data) {
        expect(response.data.id).toBeDefined();
        expect(response.data.name).toBeDefined();
        expect(response.data.recordCount).toBeDefined();
        expect(response.data.schemaNames).toBeDefined();
      }
    });

    it("AgentResponse<T> maintains generic type parameter", () => {
      const stringResponse: AgentResponse<string> =
        createSuccessResponse("test data");
      expect(stringResponse.data).toBe("test data");

      const numberResponse: AgentResponse<number> = createSuccessResponse(42);
      expect(numberResponse.data).toBe(42);

      const objectResponse: AgentResponse<{ id: string; value: number }> =
        createSuccessResponse({ id: "test", value: 100 });
      expect(objectResponse.data?.id).toBe("test");
      expect(objectResponse.data?.value).toBe(100);
    });
  });

  describe("Backward Compatibility", () => {
    it("original getOrCreateSnapshot still works without wrapper", async () => {
      const agent = await createTestAgent();

      // Original method returns CategorySnapshot directly
      const snapshot = await agent.getOrCreateSnapshot("people");

      expect(snapshot.id).toBe("people");
      expect(snapshot.name).toBe("People");
      expect(snapshot.recordCount).toBeGreaterThan(0);
    });

    it("both methods return equivalent data", async () => {
      const agent = await createTestAgent();

      const directSnapshot = await agent.getOrCreateSnapshot("people");
      const wrappedResponse = await agent.getSnapshotResponse("people");

      expect(wrappedResponse.data).toEqual(directSnapshot);
    });
  });
});
