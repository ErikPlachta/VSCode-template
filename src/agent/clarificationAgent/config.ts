/**
 * @packageDocumentation Clarification agent configuration management using TypeScript-based config
 */

import {
  BaseAgentConfig,
  AgentConfigDefinition,
  ClarificationConfig,
} from "@internal-types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "@internal-types/configValidation";
import { clarificationAgentConfig } from "@agent/clarificationAgent/agent.config";

/**
 * Clarification agent-specific configuration class
 */
export class ClarificationAgentConfig extends BaseAgentConfig {
  private clarificationConfig: ClarificationConfig;

  /**
   * constructor function.
   *
   * @param {AgentConfigDefinition} config - config parameter.
   * @returns {unknown} - TODO: describe return value.
   * @throws {Error} - May throw an error.
   */
  constructor(config?: AgentConfigDefinition) {
    // Use the TypeScript config as default, allow override for testing
    const configToUse = config || clarificationAgentConfig;

    // Validate configuration before using it
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
   * Get guidance configuration
   *
   * @returns {ClarificationConfig['guidance']} Guidance settings including suggestion limits and style.
   */
  public getGuidanceConfig(): ClarificationConfig["guidance"] {
    return (
      this.clarificationConfig.guidance || {
        maxSuggestions: 5,
        includeCategoryExamples: true,
        includeQueryTemplates: true,
      }
    );
  }

  /**
   * Get escalation configuration
   *
   * @returns {ClarificationConfig['escalation']} Escalation thresholds and fallback strategies.
   */
  public getEscalationConfig(): ClarificationConfig["escalation"] {
    return (
      this.clarificationConfig.escalation || {
        escalationThreshold: 3,
        fallbackStrategies: [
          "provide_general_help",
          "suggest_browsing_categories",
        ],
        maxClarificationRounds: 3,
      }
    );
  }

  /**
   * Get knowledge base configuration
   *
   * @returns {ClarificationConfig['knowledgeBase']} Knowledge search limits and relevance thresholds.
   */
  public getKnowledgeBaseConfig(): ClarificationConfig["knowledgeBase"] {
    return (
      this.clarificationConfig.knowledgeBase || {
        enableKnowledgeSearch: true,
        maxKnowledgeSnippets: 2,
        relevanceThreshold: 0.6,
      }
    );
  }

  /**
   * Get routing configuration
   *
   * @returns {NonNullable<ClarificationConfig['routing']>} Routing behaviour including alternative agent suggestions.
   */
  public getRoutingConfig(): NonNullable<ClarificationConfig["routing"]> {
    return (
      this.clarificationConfig.routing || {
        analyzeMissingSignals: true,
        suggestAlternativeAgents: true,
        maxCandidateAgents: 3,
        routingConfidenceThreshold: 0.5,
        includeAgentCapabilitySummaries: true,
      }
    );
  }

  /**
   * Get context analysis configuration
   *
   * @returns {NonNullable<ClarificationConfig['contextAnalysis']>} Context inference and terminology handling settings.
   */
  public getContextAnalysisConfig(): NonNullable<
    ClarificationConfig["contextAnalysis"]
  > {
    return (
      this.clarificationConfig.contextAnalysis || {
        enableIntentAnalysis: true,
        identifyMissingComponents: true,
        suggestQueryStructure: true,
        handleDomainTerminology: true,
        contextConfidenceThreshold: 0.4,
      }
    );
  }

  /**
   * Get performance configuration
   *
   * @returns {NonNullable<ClarificationConfig['performance']>} Performance and caching related settings.
   */
  public getPerformanceConfig(): NonNullable<
    ClarificationConfig["performance"]
  > {
    return (
      this.clarificationConfig.performance || {
        enableResponseCaching: true,
        responseCacheTTL: 60 * 60 * 1000,
        maxResponseTime: 5000,
        enableParallelProcessing: true,
        processingBatchSize: 5,
      }
    );
  }

  /**
   * Get maximum suggestions to provide
   *
   * @returns {number} - TODO: describe return value.
   */
  public getMaxSuggestions(): number {
    return this.getGuidanceConfig().maxSuggestions;
  }

  /**
   * Get maximum knowledge snippets
   *
   * @returns {number} - TODO: describe return value.
   */
  public getMaxKnowledgeSnippets(): number {
    return this.getKnowledgeBaseConfig().maxKnowledgeSnippets;
  }

  /**
   * Get relevance threshold for knowledge snippets
   *
   * @returns {number} - TODO: describe return value.
   */
  public getRelevanceThreshold(): number {
    return this.getKnowledgeBaseConfig().relevanceThreshold;
  }

  /**
   * Get escalation threshold
   *
   * @returns {number} - TODO: describe return value.
   */
  public getEscalationThreshold(): number {
    return this.getEscalationConfig().escalationThreshold;
  }

  /**
   * Get maximum clarification rounds
   *
   * @returns {number} - TODO: describe return value.
   */
  public getMaxClarificationRounds(): number {
    return this.getEscalationConfig().maxClarificationRounds;
  }

  /**
   * Check if knowledge search is enabled
   *
   * @returns {boolean} - TODO: describe return value.
   */
  public isKnowledgeSearchEnabled(): boolean {
    return this.getKnowledgeBaseConfig().enableKnowledgeSearch;
  }

  /**
   * Check if category examples should be included
   *
   * @returns {boolean} - TODO: describe return value.
   */
  public shouldIncludeCategoryExamples(): boolean {
    return this.getGuidanceConfig().includeCategoryExamples;
  }

  /**
   * Check if query templates should be included
   *
   * @returns {boolean} - TODO: describe return value.
   */
  public shouldIncludeQueryTemplates(): boolean {
    return this.getGuidanceConfig().includeQueryTemplates;
  }

  /**
   * Check if alternative phrasings should be suggested
   *
   * @returns {boolean} - TODO: describe return value.
   */
  public shouldSuggestAlternativePhrasings(): boolean {
    return this.getGuidanceConfig().suggestAlternativePhrasings ?? true;
  }

  /**
   * Check if missing signals should be analyzed
   *
   * @returns {boolean} - TODO: describe return value.
   */
  public shouldAnalyzeMissingSignals(): boolean {
    return this.getRoutingConfig().analyzeMissingSignals ?? true;
  }

  /**
   * Check if alternative agents should be suggested
   *
   * @returns {boolean} - TODO: describe return value.
   */
  public shouldSuggestAlternativeAgents(): boolean {
    return this.getRoutingConfig().suggestAlternativeAgents ?? true;
  }

  /**
   * Get fallback strategies
   *
   * @returns {string[]} - TODO: describe return value.
   */
  public getFallbackStrategies(): string[] {
    return this.getEscalationConfig().fallbackStrategies;
  }

  /**
   * Get guidance types to provide
   *
   * @returns {string[]} - TODO: describe return value.
   */
  public getGuidanceTypes(): string[] {
    return (
      this.getGuidanceConfig().guidanceTypes ?? [
        "query_refinement",
        "category_suggestions",
        "example_questions",
        "available_data_overview",
        "related_topics",
      ]
    );
  }

  /**
   * Get knowledge sources to search
   *
   * @returns {string[]} - TODO: describe return value.
   */
  public getKnowledgeSources(): string[] {
    return (
      this.getKnowledgeBaseConfig().knowledgeSources ?? [
        "category_descriptions",
        "example_queries",
        "data_schemas",
        "relationship_definitions",
        "user_guides",
      ]
    );
  }

  /**
   * Get response style configuration
   *
   * @returns {unknown} - TODO: describe return value.
   */
  public getResponseStyle() {
    return (
      this.getGuidanceConfig().responseStyle ?? {
        tone: "helpful",
        formality: "friendly",
        includeEncouragement: true,
        maxResponseLength: 500,
      }
    );
  }

  /**
   * Get knowledge search timeout
   *
   * @returns {number} - TODO: describe return value.
   */
  public getKnowledgeSearchTimeout(): number {
    return this.getKnowledgeBaseConfig().knowledgeSearchTimeout ?? 3000;
  }

  /**
   * Get maximum response time
   *
   * @returns {number} - TODO: describe return value.
   */
  public getMaxResponseTime(): number {
    return this.getPerformanceConfig().maxResponseTime ?? 5000;
  }

  /**
   * Get telemetry configuration
   *
   * @returns {Record<string, unknown>} - TODO: describe return value.
   */
  public getTelemetryConfig(): Record<string, unknown> {
    return {
      logQueries: this.config.telemetry?.logQueries ?? true,
      logPerformance: this.config.telemetry?.logPerformance ?? true,
      logCacheStats: this.config.telemetry?.logCacheStats ?? true,
      slowQueryThreshold: this.config.telemetry?.slowQueryThreshold ?? 3000,
      trackClarificationSuccess:
        this.config.telemetry?.trackClarificationSuccess ?? true,
      trackUserSatisfaction:
        this.config.telemetry?.trackUserSatisfaction ?? true,
    };
  }

  /**
   * Get error handling configuration
   *
   * @returns {Record<string, unknown>} - TODO: describe return value.
   */
  public getErrorHandlingConfig(): Record<string, unknown> {
    return {
      maxRetries: this.config.errorHandling?.maxRetries ?? 1,
      retryDelay: this.config.errorHandling?.retryDelay ?? 1000,
      exponentialBackoff:
        this.config.errorHandling?.exponentialBackoff ?? false,
      fallbackToGenericHelp:
        this.config.errorHandling?.fallbackToGenericHelp ?? true,
      allowPartialClarification:
        this.config.errorHandling?.allowPartialClarification ?? true,
      gracefulKnowledgeFailure:
        this.config.errorHandling?.gracefulKnowledgeFailure ?? true,
    };
  }
}
