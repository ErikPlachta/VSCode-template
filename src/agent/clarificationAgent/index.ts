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
  type ClarificationConfig,
  type ClarificationAgentInput,
  type ClarificationResponse,
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
export class ClarificationAgent {
  /** The knowledge base for finding relevant context. */
  private readonly knowledgeBase: KnowledgeBase;
  /** Telemetry logger for tracking agent invocations. */
  private readonly telemetry = createInvocationLogger(
    ClarificationAgentProfile.id
  );
  /** Configuration for the clarification agent. */
  private readonly config: ClarificationAgentConfig;

  /**
   * Creates a new clarification agent instance.
   *
   * @param {KnowledgeBase} knowledgeBase - knowledgeBase parameter.
   * @returns {unknown} - TODO: describe return value.
   */
  constructor(knowledgeBase?: KnowledgeBase) {
    this.config = new ClarificationAgentConfig();
    this.knowledgeBase = knowledgeBase ?? new KnowledgeBase();
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
      const knowledgeSnippets = this.knowledgeBase.query(input.question, 2);
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
}

/**
 * Clarification agent-specific configuration class (merged from config.ts)
 */
export class ClarificationAgentConfig extends BaseAgentConfig {
  private clarificationConfig: ClarificationConfig;

  /**
   * Create a config wrapper using default TS config or overrides (for tests)
   *
   * @param {AgentConfigDefinition} [config] - Optional override configuration.
   */
  constructor(config?: AgentConfigDefinition) {
    const configToUse = config || clarificationAgentConfig;
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid clarification agent configuration:\n${report}`);
    }

    super(configToUse);
    this.clarificationConfig =
      this.config.clarification || ({} as ClarificationConfig);
  }

  /**
   * Get guidance configuration.
   *
   * @returns {ClarificationConfig['guidance']} Guidance settings including suggestion limits and style.
   * @throws {Error} When clarification config lacks the guidance section.
   */
  public getGuidanceConfig(): ClarificationConfig["guidance"] {
    if (!this.clarificationConfig.guidance) {
      throw new Error("Clarification config missing guidance section");
    }
    return this.clarificationConfig.guidance;
  }

  /**
   * Get escalation configuration.
   *
   * @returns {ClarificationConfig['escalation']} Escalation thresholds and fallback strategies.
   * @throws {Error} When clarification config lacks the escalation section.
   */
  public getEscalationConfig(): ClarificationConfig["escalation"] {
    if (!this.clarificationConfig.escalation) {
      throw new Error("Clarification config missing escalation section");
    }
    return this.clarificationConfig.escalation;
  }

  /**
   * Get knowledge base configuration.
   *
   * @returns {ClarificationConfig['knowledgeBase']} Knowledge search limits and relevance thresholds.
   * @throws {Error} When clarification config lacks the knowledgeBase section.
   */
  public getKnowledgeBaseConfig(): ClarificationConfig["knowledgeBase"] {
    if (!this.clarificationConfig.knowledgeBase) {
      throw new Error("Clarification config missing knowledgeBase section");
    }
    return this.clarificationConfig.knowledgeBase;
  }

  /**
   * Get routing configuration.
   *
   * @returns {NonNullable<ClarificationConfig['routing']>} Routing behavior including alternative agent suggestions.
   * @throws {Error} When clarification config lacks the routing section.
   */
  public getRoutingConfig(): NonNullable<ClarificationConfig["routing"]> {
    if (!this.clarificationConfig.routing) {
      throw new Error("Clarification config missing routing section");
    }
    return this.clarificationConfig.routing as NonNullable<
      ClarificationConfig["routing"]
    >;
  }

  /**
   * Get context analysis configuration.
   *
   * @returns {NonNullable<ClarificationConfig['contextAnalysis']>} Context inference and terminology handling settings.
   * @throws {Error} When clarification config lacks the contextAnalysis section.
   */
  public getContextAnalysisConfig(): NonNullable<
    ClarificationConfig["contextAnalysis"]
  > {
    if (!this.clarificationConfig.contextAnalysis) {
      throw new Error("Clarification config missing contextAnalysis section");
    }
    return this.clarificationConfig.contextAnalysis as NonNullable<
      ClarificationConfig["contextAnalysis"]
    >;
  }

  /**
   * Get performance configuration.
   *
   * @returns {NonNullable<ClarificationConfig['performance']>} Performance and caching related settings.
   * @throws {Error} When clarification config lacks the performance section.
   */
  public getPerformanceConfig(): NonNullable<
    ClarificationConfig["performance"]
  > {
    if (!this.clarificationConfig.performance) {
      throw new Error("Clarification config missing performance section");
    }
    return this.clarificationConfig.performance as NonNullable<
      ClarificationConfig["performance"]
    >;
  }

  /**
   * Get maximum suggestions to provide.
   *
   * @returns {number} Maximum number of suggestions.
   */
  public getMaxSuggestions(): number {
    return this.getGuidanceConfig().maxSuggestions;
  }

  /**
   * Get maximum knowledge snippets.
   *
   * @returns {number} Max knowledge snippets to include.
   */
  public getMaxKnowledgeSnippets(): number {
    return this.getKnowledgeBaseConfig().maxKnowledgeSnippets;
  }

  /**
   * Get relevance threshold for knowledge snippets.
   *
   * @returns {number} Minimum relevance score threshold.
   */
  public getRelevanceThreshold(): number {
    return this.getKnowledgeBaseConfig().relevanceThreshold;
  }

  /**
   * Get escalation threshold.
   *
   * @returns {number} Number of failed clarifications before escalation.
   */
  public getEscalationThreshold(): number {
    return this.getEscalationConfig().escalationThreshold;
  }

  /**
   * Get maximum clarification rounds.
   *
   * @returns {number} Maximum number of clarification rounds.
   */
  public getMaxClarificationRounds(): number {
    return this.getEscalationConfig().maxClarificationRounds;
  }

  /**
   * Check if knowledge search is enabled.
   *
   * @returns {boolean} True when knowledge search is enabled.
   */
  public isKnowledgeSearchEnabled(): boolean {
    return this.getKnowledgeBaseConfig().enableKnowledgeSearch;
  }

  /**
   * Check if category examples should be included.
   *
   * @returns {boolean} True when category examples are included.
   */
  public shouldIncludeCategoryExamples(): boolean {
    return this.getGuidanceConfig().includeCategoryExamples;
  }

  /**
   * Check if query templates should be included.
   *
   * @returns {boolean} True when query templates are included.
   */
  public shouldIncludeQueryTemplates(): boolean {
    return this.getGuidanceConfig().includeQueryTemplates;
  }

  /**
   * Check if alternative phrasings should be suggested.
   *
   * @returns {boolean} True when alternative phrasings are suggested.
   */
  public shouldSuggestAlternativePhrasings(): boolean {
    return !!this.getGuidanceConfig().suggestAlternativePhrasings;
  }

  /**
   * Check if missing signals should be analyzed.
   *
   * @returns {boolean} True when analyzing missing signals.
   */
  public shouldAnalyzeMissingSignals(): boolean {
    return !!this.getRoutingConfig().analyzeMissingSignals;
  }

  /**
   * Check if alternative agents should be suggested.
   *
   * @returns {boolean} True when suggesting alternative agents.
   */
  public shouldSuggestAlternativeAgents(): boolean {
    return !!this.getRoutingConfig().suggestAlternativeAgents;
  }

  /**
   * Get fallback strategies.
   *
   * @returns {string[]} Fallback strategy identifiers.
   */
  public getFallbackStrategies(): string[] {
    return this.getEscalationConfig().fallbackStrategies;
  }

  /**
   * Get guidance types to provide.
   *
   * @returns {string[]} Guidance categories to include.
   */
  public getGuidanceTypes(): string[] {
    const types = this.getGuidanceConfig().guidanceTypes;
    return Array.isArray(types) ? types : [];
  }

  /**
   * Get knowledge sources to search.
   *
   * @returns {string[]} Knowledge source identifiers.
   */
  public getKnowledgeSources(): string[] {
    const sources = this.getKnowledgeBaseConfig().knowledgeSources;
    return Array.isArray(sources) ? sources : [];
  }

  /**
   * Get response style configuration.
   *
   * @returns {{tone:string,formality:string,includeEncouragement:boolean,maxResponseLength:number}} Style knobs for rendering responses.
   */
  public getResponseStyle(): {
    tone: string;
    formality: string;
    includeEncouragement: boolean;
    maxResponseLength: number;
  } {
    const style = this.getGuidanceConfig().responseStyle || {};
    return {
      tone: style.tone ?? "",
      formality: style.formality ?? "",
      includeEncouragement: style.includeEncouragement ?? false,
      maxResponseLength: style.maxResponseLength ?? 0,
    };
  }
}

// Export configuration types and instances for external use
export { clarificationAgentConfig } from "@agent/clarificationAgent/agent.config";
