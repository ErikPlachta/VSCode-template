/**
 * @packageDocumentation Clarification agent for handling ambiguous user requests and guiding users toward actionable queries.
 */

import { getAgentMetadata } from "@mcp/config/agentManifest";
import { KnowledgeBase } from "@mcp/knowledgeBase";
import { renderClarificationPrompt } from "@mcp/prompts";
import { createInvocationLogger } from "@mcp/telemetry";
import { ClarificationAgentProfile } from "@mcp/config/agentProfiles";
import {
  BaseAgentConfig,
  type AgentConfigDefinition,
  // ClarificationConfig,
  type ClarificationAgentInput,
  type ClarificationResponse,
  type ConfigDescriptor,
  createDescriptorMap,
} from "@internal-types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "@internal-types/configValidation";
import { clarificationAgentConfig } from "@agent/clarificationAgent/agent.config";

export { ClarificationAgentProfile };

/**
 * Agent responsible for handling ambiguous user requests and providing clarification guidance.
 */
export class ClarificationAgent extends BaseAgentConfig {
  /** The knowledge base for finding relevant context. */
  private readonly knowledgeBase: KnowledgeBase;
  /** Telemetry logger for tracking agent invocations. */
  private readonly telemetry = createInvocationLogger(
    ClarificationAgentProfile.id
  );

  /**
   * Creates a new clarification agent instance.
   *
   * Overloads:
   * - constructor(config?: AgentConfigDefinition, knowledgeBase?: KnowledgeBase)
   * - constructor(knowledgeBase?: KnowledgeBase)
   *
   * @param {AgentConfigDefinition | KnowledgeBase | undefined} arg1 - Optional config or knowledge base.
   * @param {KnowledgeBase | undefined} arg2 - Optional knowledge base when config provided as first argument.
   */
  constructor(
    arg1?: AgentConfigDefinition | KnowledgeBase,
    arg2?: KnowledgeBase
  ) {
    // Determine parameter pattern
    const configCandidate =
      arg1 && "agent" in (arg1 as AgentConfigDefinition)
        ? (arg1 as AgentConfigDefinition)
        : undefined;
    const kbCandidate =
      (configCandidate ? arg2 : (arg1 as KnowledgeBase)) ?? new KnowledgeBase();

    const configToUse = configCandidate || clarificationAgentConfig;
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid clarification agent configuration:\n${report}`);
    }

    super(configToUse);
    this._validateRequiredSections();
    this.knowledgeBase = kbCandidate;
  }

  /**
   * Loads documents into the knowledge base for context retrieval.
   *
   * @param {Parameters<KnowledgeBase["indexDocuments"]>[0]} documents - documents parameter.
   */
  loadKnowledge(
    documents: Parameters<KnowledgeBase["indexDocuments"]>[0]
  ): void {
    this.knowledgeBase.indexDocuments(documents);
  }

  /**
   * Generates clarification guidance for ambiguous user requests.
   *
   * @param {ClarificationAgentInput} input - input parameter.
   * @returns {Promise<ClarificationResponse>} - TODO: describe return value.
   */
  async clarify(
    input: ClarificationAgentInput
  ): Promise<ClarificationResponse> {
    return this.telemetry("clarify", async () => {
      // Use configured maxKnowledgeSnippets when available; fallback to 2
      const maxSnippets =
        this.getConfigItem<number>(
          "clarification.knowledgeBase.maxKnowledgeSnippets"
        ) ?? 2;
      const knowledgeSnippets = this.knowledgeBase.query(
        input.question,
        maxSnippets
      );
      const focusAgentId = (input.candidateAgents[0] ??
        ClarificationAgentProfile.id) as never;
      const manifest = getAgentMetadata(focusAgentId);
      const prompt = renderClarificationPrompt({
        question: input.question,
        manifest,
        missingSignals: input.missingSignals,
        knowledgeSnippets: knowledgeSnippets.map((hit) => ({
          source: hit.title,
          summary: hit.summary,
        })),
      });
      return { prompt, knowledgeSnippets };
    });
  }

  /**
   * Validate presence of required configuration sections.
   *
   * @returns {void}
   * @throws {Error} When required configuration paths are missing.
   */
  private _validateRequiredSections(): void {
    const requiredPaths: readonly string[] = [
      // Guidance
      "clarification.guidance.maxSuggestions",
      "clarification.guidance.includeCategoryExamples",
      "clarification.guidance.includeQueryTemplates",
      // Knowledge base
      "clarification.knowledgeBase.enableKnowledgeSearch",
      "clarification.knowledgeBase.maxKnowledgeSnippets",
      "clarification.knowledgeBase.relevanceThreshold",
      // Escalation
      "clarification.escalation.escalationThreshold",
      "clarification.escalation.fallbackStrategies",
      "clarification.escalation.maxClarificationRounds",
    ];
    const { passed, missing } = this.confirmConfigItems(requiredPaths);
    if (!passed) {
      throw new Error(
        `Clarification agent config missing required paths: ${missing.join(
          ", "
        )}`
      );
    }
  }

  /**
   * Descriptor map for dynamic configuration access and UI.
   *
   * @returns {Record<string, ConfigDescriptor>} Descriptor definitions.
   */
  public getConfigDescriptors(): Record<string, ConfigDescriptor> {
    return createDescriptorMap([
      [
        "guidance",
        {
          name: "Guidance",
          path: "clarification.guidance",
          type: "ClarificationConfig['guidance']",
          visibility: "public",
          verifyPaths: [
            "clarification.guidance.maxSuggestions",
            "clarification.guidance.includeCategoryExamples",
            "clarification.guidance.includeQueryTemplates",
          ],
        },
      ],
      [
        "escalation",
        {
          name: "Escalation",
          path: "clarification.escalation",
          type: "ClarificationConfig['escalation']",
          visibility: "public",
          verifyPaths: [
            "clarification.escalation.escalationThreshold",
            "clarification.escalation.fallbackStrategies",
            "clarification.escalation.maxClarificationRounds",
          ],
        },
      ],
      [
        "knowledgeBase",
        {
          name: "Knowledge Base",
          path: "clarification.knowledgeBase",
          type: "ClarificationConfig['knowledgeBase']",
          visibility: "public",
          verifyPaths: [
            "clarification.knowledgeBase.enableKnowledgeSearch",
            "clarification.knowledgeBase.maxKnowledgeSnippets",
            "clarification.knowledgeBase.relevanceThreshold",
          ],
        },
      ],
      [
        "routing",
        {
          name: "Routing",
          path: "clarification.routing",
          type: "NonNullable<ClarificationConfig['routing']>",
          visibility: "public",
          verifyPaths: ["clarification.routing.maxCandidateAgents"],
        },
      ],
      [
        "contextAnalysis",
        {
          name: "Context Analysis",
          path: "clarification.contextAnalysis",
          type: "NonNullable<ClarificationConfig['contextAnalysis']>",
          visibility: "public",
          verifyPaths: ["clarification.contextAnalysis.enableIntentAnalysis"],
        },
      ],
      [
        "performance",
        {
          name: "Performance",
          path: "performance",
          type: "NonNullable<ClarificationConfig['performance']>",
          visibility: "private",
          verifyPaths: ["performance.maxResponseTime"],
        },
      ],
    ]);
  }
}

// Export configuration types and instances for external use
export { clarificationAgentConfig } from "@agent/clarificationAgent/agent.config";
