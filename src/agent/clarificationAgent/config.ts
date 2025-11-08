/**
 * @file Clarification agent configuration management using TypeScript-based config
 */

import {
  BaseAgentConfig,
  AgentConfigDefinition,
  ClarificationConfig,
} from "../../types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "../../types/configValidation";
import { clarificationAgentConfig } from "./agent.config";

/**
 * Clarification agent-specific configuration class
 */
export class ClarificationAgentConfig extends BaseAgentConfig {
  private clarificationConfig: ClarificationConfig;

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
   */
  public getGuidanceConfig() {
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
   */
  public getEscalationConfig() {
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
   */
  public getKnowledgeBaseConfig() {
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
   */
  public getRoutingConfig() {
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
   */
  public getContextAnalysisConfig() {
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
   */
  public getPerformanceConfig() {
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
   */
  public getMaxSuggestions(): number {
    return this.getGuidanceConfig().maxSuggestions;
  }

  /**
   * Get maximum knowledge snippets
   */
  public getMaxKnowledgeSnippets(): number {
    return this.getKnowledgeBaseConfig().maxKnowledgeSnippets;
  }

  /**
   * Get relevance threshold for knowledge snippets
   */
  public getRelevanceThreshold(): number {
    return this.getKnowledgeBaseConfig().relevanceThreshold;
  }

  /**
   * Get escalation threshold
   */
  public getEscalationThreshold(): number {
    return this.getEscalationConfig().escalationThreshold;
  }

  /**
   * Get maximum clarification rounds
   */
  public getMaxClarificationRounds(): number {
    return this.getEscalationConfig().maxClarificationRounds;
  }

  /**
   * Check if knowledge search is enabled
   */
  public isKnowledgeSearchEnabled(): boolean {
    return this.getKnowledgeBaseConfig().enableKnowledgeSearch;
  }

  /**
   * Check if category examples should be included
   */
  public shouldIncludeCategoryExamples(): boolean {
    return this.getGuidanceConfig().includeCategoryExamples;
  }

  /**
   * Check if query templates should be included
   */
  public shouldIncludeQueryTemplates(): boolean {
    return this.getGuidanceConfig().includeQueryTemplates;
  }

  /**
   * Check if alternative phrasings should be suggested
   */
  public shouldSuggestAlternativePhrasings(): boolean {
    return this.getGuidanceConfig().suggestAlternativePhrasings ?? true;
  }

  /**
   * Check if missing signals should be analyzed
   */
  public shouldAnalyzeMissingSignals(): boolean {
    return this.getRoutingConfig().analyzeMissingSignals ?? true;
  }

  /**
   * Check if alternative agents should be suggested
   */
  public shouldSuggestAlternativeAgents(): boolean {
    return this.getRoutingConfig().suggestAlternativeAgents ?? true;
  }

  /**
   * Get fallback strategies
   */
  public getFallbackStrategies(): string[] {
    return this.getEscalationConfig().fallbackStrategies;
  }

  /**
   * Get guidance types to provide
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
   */
  public getKnowledgeSearchTimeout(): number {
    return this.getKnowledgeBaseConfig().knowledgeSearchTimeout ?? 3000;
  }

  /**
   * Get maximum response time
   */
  public getMaxResponseTime(): number {
    return this.getPerformanceConfig().maxResponseTime ?? 5000;
  }

  /**
   * Get telemetry configuration
   */
  public getTelemetryConfig() {
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
   */
  public getErrorHandlingConfig() {
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
