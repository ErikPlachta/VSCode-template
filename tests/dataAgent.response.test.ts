/**
 * Integration tests for DataAgent AgentResponse pattern.
 * Tests the new analyzeDataResponse() and generateExplorationPlanResponse() wrapper methods.
 */

import { DataAgent } from "@agent/dataAgent";
import type {
  AnalysisInput,
  DataInsight,
  ExplorationPlan,
} from "@internal-types/agentConfig";
import type { AgentResponse } from "@agent/communicationAgent";

describe("DataAgent AgentResponse Pattern", () => {
  let agent: DataAgent;

  const mockAnalysisInput: AnalysisInput = {
    categoryId: "employees",
    records: [
      {
        id: "emp1",
        name: "Alice",
        department: "Engineering",
        skills: ["javascript", "typescript"],
      },
      {
        id: "emp2",
        name: "Bob",
        department: "Engineering",
        skills: ["python", "machine-learning"],
      },
      {
        id: "emp3",
        name: "Charlie",
        department: "Sales",
        skills: ["communication", "negotiation"],
      },
      {
        id: "emp4",
        name: "Diana",
        department: "Engineering",
        skills: ["javascript", "react"],
      },
    ],
  };

  beforeEach(() => {
    agent = new DataAgent();
  });

  describe("analyzeDataResponse()", () => {
    describe("Success Responses", () => {
      it("should return AgentResponse with success type and insights data", async () => {
        const response = await agent.analyzeDataResponse(mockAnalysisInput);

        expect(response.type).toBe("success");
        expect(response.status).toBe("success");
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.message).toContain("Analysis complete");
        expect(response.message).toContain("employees");
      });

      it("should include timing metadata in success response", async () => {
        const response = await agent.analyzeDataResponse(mockAnalysisInput);

        expect(response.metadata).toBeDefined();
        expect(response.metadata?.agentId).toBe("data-agent");
        expect(response.metadata?.operation).toBe("analyzeData");
        expect(response.metadata?.duration).toBeGreaterThanOrEqual(0);
        expect(response.metadata?.timestamp).toBeDefined();
      });

      it("should include insight count and record count in metadata", async () => {
        const response = await agent.analyzeDataResponse(mockAnalysisInput);

        expect(response.metadata?.count).toBeDefined();
        expect(typeof response.metadata?.count).toBe("number");
        expect(response.metadata?.recordCount).toBe(4);
        expect(response.metadata?.categoryId).toBe("employees");
        expect(response.metadata?.entityType).toBe("DataInsight[]");
      });

      it("should return empty insights array when analysis disabled", async () => {
        // Create agent with insight generation disabled but all required paths present
        const disabledAgent = new DataAgent({
          data: {
            analysis: {
              enableInsightGeneration: false,
              maxInsightDepth: 3,
              crossCategoryAnalysis: false,
              insightConfidenceThreshold: 0.7,
              maxInsightsPerAnalysis: 10,
            },
            exploration: {
              maxExplorationSteps: 8,
              enableAutomaticPlanGeneration: true,
              planComplexityLimit: "medium",
            },
            relationships: {
              enableRelationshipMapping: true,
              maxRelationshipDepth: 3,
              relationshipStrengthThreshold: 0.5,
            },
          } as any,
        });

        const response = await disabledAgent.analyzeDataResponse(
          mockAnalysisInput
        );

        expect(response.type).toBe("success");
        expect(response.status).toBe("success");
        expect(response.data).toEqual([]);
        expect(response.metadata?.count).toBe(0);
      });

      it("should handle analysis input with relationships", async () => {
        const inputWithRelationships: AnalysisInput = {
          ...mockAnalysisInput,
          relationships: [
            {
              name: "departmentOf",
              description: "Employee belongs to department",
              targetCategory: "departments",
              viaField: "department",
            },
          ],
        };

        const response = await agent.analyzeDataResponse(
          inputWithRelationships
        );

        expect(response.type).toBe("success");
        expect(response.data).toBeDefined();
      });

      it("should detect patterns in data", async () => {
        const response = await agent.analyzeDataResponse(mockAnalysisInput);

        expect(response.type).toBe("success");
        // Most employees are in Engineering - should detect this pattern
        const insights = response.data as DataInsight[];
        expect(insights.length).toBeGreaterThan(0);
      });
    });

    describe("Error Responses", () => {
      it("should handle errors gracefully with error response", async () => {
        // Pass malformed input to trigger error
        const malformedInput = {
          categoryId: "test",
          records: null as any,
        };

        const response = await agent.analyzeDataResponse(malformedInput);

        expect(response.type).toBe("error");
        expect(response.status).toBe("error");
        expect(response.message).toBeDefined();
      });

      it("should include error details with severity and code", async () => {
        const malformedInput = {
          categoryId: "test",
          records: null as any,
        };

        const response = await agent.analyzeDataResponse(malformedInput);

        expect(response.errors).toBeDefined();
        expect(response.errors!.length).toBeGreaterThan(0);
        expect(response.errors![0].severity).toBeDefined();
        expect(response.errors![0].code).toBeDefined();
      });

      it("should provide recovery suggestions for errors", async () => {
        const malformedInput = {
          categoryId: "test",
          records: null as any,
        };

        const response = await agent.analyzeDataResponse(malformedInput);

        expect(response.errors![0].suggestions).toBeDefined();
        expect(response.errors![0].suggestions!.length).toBeGreaterThan(0);
      });

      it("should include metadata even for error responses", async () => {
        const malformedInput = {
          categoryId: "test",
          records: null as any,
        };

        const response = await agent.analyzeDataResponse(malformedInput);

        expect(response.metadata).toBeDefined();
        expect(response.metadata?.agentId).toBe("data-agent");
        expect(response.metadata?.operation).toBe("analyzeData");
      });
    });

    describe("Type Safety", () => {
      it("should maintain DataInsight[] type in response data", async () => {
        const response: AgentResponse<DataInsight[]> =
          await agent.analyzeDataResponse(mockAnalysisInput);

        expect(Array.isArray(response.data)).toBe(true);
        response.data?.forEach((insight) => {
          expect(insight).toHaveProperty("type");
          expect(insight).toHaveProperty("description");
          expect(insight).toHaveProperty("confidence");
        });
      });

      it("should preserve insight structure from analysis", async () => {
        const response = await agent.analyzeDataResponse(mockAnalysisInput);

        const insights = response.data as DataInsight[];
        insights.forEach((insight) => {
          expect(["pattern", "anomaly", "relationship"]).toContain(
            insight.type
          );
          expect(typeof insight.description).toBe("string");
          expect(typeof insight.confidence).toBe("number");
          expect(insight.confidence).toBeGreaterThanOrEqual(0);
          expect(insight.confidence).toBeLessThanOrEqual(1);
        });
      });
    });

    describe("Backward Compatibility", () => {
      it("should not break original analyzeData method", async () => {
        const originalResults = await agent.analyzeData(mockAnalysisInput);

        expect(Array.isArray(originalResults)).toBe(true);
      });

      it("should return equivalent data between both methods", async () => {
        const originalResults = await agent.analyzeData(mockAnalysisInput);
        const wrappedResponse = await agent.analyzeDataResponse(
          mockAnalysisInput
        );

        expect(wrappedResponse.data).toEqual(originalResults);
      });
    });
  });

  describe("generateExplorationPlanResponse()", () => {
    const question =
      "What skills are most common in the Engineering department?";

    describe("Success Responses", () => {
      it("should return AgentResponse with success type and plan data", async () => {
        const response = await agent.generateExplorationPlanResponse(
          "employees",
          question,
          mockAnalysisInput
        );

        expect(response.type).toBe("success");
        expect(response.status).toBe("success");
        expect(response.data).toBeDefined();
        expect(response.data?.topic).toBe("employees");
        expect(response.data?.question).toBe(question);
        expect(response.message).toContain("Exploration plan generated");
      });

      it("should include timing metadata in success response", async () => {
        const response = await agent.generateExplorationPlanResponse(
          "employees",
          question,
          mockAnalysisInput
        );

        expect(response.metadata).toBeDefined();
        expect(response.metadata?.agentId).toBe("data-agent");
        expect(response.metadata?.operation).toBe("generateExplorationPlan");
        expect(response.metadata?.duration).toBeGreaterThanOrEqual(0);
        expect(response.metadata?.timestamp).toBeDefined();
      });

      it("should include step count in metadata", async () => {
        const response = await agent.generateExplorationPlanResponse(
          "employees",
          question,
          mockAnalysisInput
        );

        expect(response.metadata?.count).toBeDefined();
        expect(response.metadata?.count).toBe(response.data?.steps.length);
        expect(response.metadata?.entityType).toBe("ExplorationPlan");
        expect(response.metadata?.categoryId).toBe("employees");
      });

      it("should generate exploration steps", async () => {
        const response = await agent.generateExplorationPlanResponse(
          "employees",
          question,
          mockAnalysisInput
        );

        const plan = response.data as ExplorationPlan;
        expect(plan.steps.length).toBeGreaterThan(0);
        plan.steps.forEach((step) => {
          expect(step).toHaveProperty("title");
          expect(step).toHaveProperty("description");
          expect(step).toHaveProperty("recommendedCategory");
        });
      });

      it("should include relationships in plan when provided", async () => {
        const inputWithRelationships: AnalysisInput = {
          ...mockAnalysisInput,
          relationships: [
            {
              name: "departmentOf",
              description: "Employee belongs to department",
              targetCategory: "departments",
              viaField: "department",
            },
          ],
        };

        const response = await agent.generateExplorationPlanResponse(
          "employees",
          question,
          inputWithRelationships
        );

        const plan = response.data as ExplorationPlan;
        expect(plan.steps.length).toBeGreaterThan(1); // Should have overview + relationship steps
      });
    });

    describe("Error Responses", () => {
      it("should handle errors gracefully with error response", async () => {
        const malformedInput = {
          categoryId: "test",
          records: null as any,
        };

        const response = await agent.generateExplorationPlanResponse(
          "test",
          question,
          malformedInput
        );

        expect(response.type).toBe("error");
        expect(response.status).toBe("error");
      });

      it("should include error details with severity and code", async () => {
        const malformedInput = {
          categoryId: "test",
          records: null as any,
        };

        const response = await agent.generateExplorationPlanResponse(
          "test",
          question,
          malformedInput
        );

        expect(response.errors).toBeDefined();
        expect(response.errors!.length).toBeGreaterThan(0);
        expect(response.errors![0].code).toBe("EXPLORATION_PLAN_FAILED");
      });

      it("should provide recovery suggestions", async () => {
        const malformedInput = {
          categoryId: "test",
          records: null as any,
        };

        const response = await agent.generateExplorationPlanResponse(
          "test",
          question,
          malformedInput
        );

        expect(response.errors![0].suggestions).toBeDefined();
        expect(response.errors![0].suggestions!.length).toBeGreaterThan(0);
      });
    });

    describe("Type Safety", () => {
      it("should maintain ExplorationPlan type in response data", async () => {
        const response: AgentResponse<ExplorationPlan> =
          await agent.generateExplorationPlanResponse(
            "employees",
            question,
            mockAnalysisInput
          );

        expect(response.data).toHaveProperty("topic");
        expect(response.data).toHaveProperty("question");
        expect(response.data).toHaveProperty("steps");
        expect(Array.isArray(response.data?.steps)).toBe(true);
      });
    });

    describe("Backward Compatibility", () => {
      it("should not break original generateExplorationPlan method", async () => {
        const originalPlan = await agent.generateExplorationPlan(
          "employees",
          question,
          mockAnalysisInput
        );

        expect(originalPlan).toHaveProperty("topic");
        expect(originalPlan).toHaveProperty("steps");
      });

      it("should return equivalent data between both methods", async () => {
        const originalPlan = await agent.generateExplorationPlan(
          "employees",
          question,
          mockAnalysisInput
        );
        const wrappedResponse = await agent.generateExplorationPlanResponse(
          "employees",
          question,
          mockAnalysisInput
        );

        expect(wrappedResponse.data).toEqual(originalPlan);
      });
    });
  });

  describe("Integration with CommunicationAgent", () => {
    it("should produce analysis response compatible with CommunicationAgent.formatSuccess", async () => {
      const { CommunicationAgent } = await import("@agent/communicationAgent");
      const commAgent = new CommunicationAgent();

      const analysisResponse = await agent.analyzeDataResponse(
        mockAnalysisInput
      );
      const formatted = commAgent.formatSuccess(analysisResponse);

      expect(formatted.message).toBeDefined();
      expect(formatted.format).toBeDefined();
      expect(formatted.raw).toEqual(analysisResponse);
    });

    it("should produce exploration plan response compatible with CommunicationAgent.formatSuccess", async () => {
      const { CommunicationAgent } = await import("@agent/communicationAgent");
      const commAgent = new CommunicationAgent();

      const planResponse = await agent.generateExplorationPlanResponse(
        "employees",
        "Test question",
        mockAnalysisInput
      );
      const formatted = commAgent.formatSuccess(planResponse);

      expect(formatted.message).toBeDefined();
      expect(formatted.format).toBeDefined();
      expect(formatted.raw).toEqual(planResponse);
    });

    it("should produce error response compatible with CommunicationAgent.formatError", async () => {
      const { CommunicationAgent } = await import("@agent/communicationAgent");
      const commAgent = new CommunicationAgent();

      const malformedInput = {
        categoryId: "test",
        records: null as any,
      };
      const errorResponse = await agent.analyzeDataResponse(malformedInput);
      const formatted = commAgent.formatError(errorResponse);

      expect(formatted.message).toBeDefined();
      expect(formatted.severity).toBeDefined();
      expect(formatted.raw).toEqual(errorResponse);
    });
  });
});
