/**
 * @packageDocumentation Data agent configuration management using TypeScript-based config
 */

import {
  BaseAgentConfig,
  AgentConfigDefinition,
  DataConfig,
} from "../../types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "../../types/configValidation";
import { dataAgentConfig } from "./agent.config";

/**
 * Data agent-specific configuration class
 */
export class DataAgentConfig extends BaseAgentConfig {
  private dataConfig: DataConfig;

  /**
   * constructor function.
   *
   * @param {AgentConfigDefinition} config - config parameter.
   * @returns {unknown} - TODO: describe return value.
   * @throws {Error} - May throw an error.
   */
constructor(config?: AgentConfigDefinition) {
    // Use the TypeScript config as default, allow override for testing
    const configToUse = config || dataAgentConfig;

    // Validate configuration before using it
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid data agent configuration:\n${report}`);
    }

    super(configToUse);
    this.dataConfig = this.config.data || ({} as DataConfig);
  }

    /**
 * Get analysis configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getAnalysisConfig() {
    return (
      this.dataConfig.analysis || {
        enableInsightGeneration: true,
        maxInsightDepth: 3,
        crossCategoryAnalysis: true,
      }
    );
  }

    /**
 * Get quality configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getQualityConfig() {
    return (
      this.dataConfig.quality || {
        missingFieldThreshold: 0.1,
        anomalyDetectionEnabled: true,
        minimumRecordCount: 5,
        fieldCompletenessThreshold: 0.9,
      }
    );
  }

    /**
 * Get exploration configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getExplorationConfig() {
    return (
      this.dataConfig.exploration || {
        maxExplorationSteps: 8,
        enableAutomaticPlanGeneration: true,
        planComplexityLimit: "medium" as const,
      }
    );
  }

    /**
 * Get relationships configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getRelationshipsConfig() {
    return (
      this.dataConfig.relationships || {
        enableRelationshipMapping: true,
        maxRelationshipDepth: 4,
        includeWeakRelationships: false,
      }
    );
  }

    /**
 * Get synthesis configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getSynthesisConfig() {
    return (
      this.dataConfig.synthesis || {
        enableTopicOverviews: true,
        maxHighlightRecords: 5,
        includeValidationReports: true,
        enableMultiSourceSynthesis: true,
        synthesisConfidenceThreshold: 0.6,
      }
    );
  }

    /**
 * Get performance configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getPerformanceConfig() {
    return (
      this.dataConfig.performance || {
        enableTopicOverviewCaching: true,
        topicOverviewCacheTTL: 30 * 60 * 1000,
        maxConcurrentAnalyses: 3,
        analysisTimeout: 60000,
        enableParallelRelationshipMapping: true,
        processingBatchSize: 100,
      }
    );
  }

    /**
 * Get search configuration
 *
 * @returns {unknown} - TODO: describe return value.
 */
public getSearchConfig() {
    return (
      this.dataConfig.search || {
        maxResults: 50,
        enableFuzzyMatching: true,
        searchTimeout: 5000,
        minimumMatchScore: 0.3,
        enableCategoryFiltering: true,
        prioritizeRecentResults: false,
      }
    );
  }

    /**
 * Check if insight generation is enabled
 *
 * @returns {boolean} - TODO: describe return value.
 */
public isInsightGenerationEnabled(): boolean {
    return this.getAnalysisConfig().enableInsightGeneration;
  }

    /**
 * Check if cross-category analysis is enabled
 *
 * @returns {boolean} - TODO: describe return value.
 */
public isCrossCategoryAnalysisEnabled(): boolean {
    return this.getAnalysisConfig().crossCategoryAnalysis;
  }

    /**
 * Check if relationship mapping is enabled
 *
 * @returns {boolean} - TODO: describe return value.
 */
public isRelationshipMappingEnabled(): boolean {
    return this.getRelationshipsConfig().enableRelationshipMapping;
  }

    /**
 * Check if automatic plan generation is enabled
 *
 * @returns {boolean} - TODO: describe return value.
 */
public isAutomaticPlanGenerationEnabled(): boolean {
    return this.getExplorationConfig().enableAutomaticPlanGeneration;
  }

    /**
 * Get maximum insight depth
 *
 * @returns {number} - TODO: describe return value.
 */
public getMaxInsightDepth(): number {
    return this.getAnalysisConfig().maxInsightDepth;
  }

    /**
 * Get maximum exploration steps
 *
 * @returns {number} - TODO: describe return value.
 */
public getMaxExplorationSteps(): number {
    return this.getExplorationConfig().maxExplorationSteps;
  }

    /**
 * Get maximum relationship depth
 *
 * @returns {number} - TODO: describe return value.
 */
public getMaxRelationshipDepth(): number {
    return this.getRelationshipsConfig().maxRelationshipDepth;
  }

    /**
 * Get plan complexity limit
 *
 * @returns {"low" | "medium" | "high"} - TODO: describe return value.
 */
public getPlanComplexityLimit(): "low" | "medium" | "high" {
    return this.getExplorationConfig().planComplexityLimit;
  }

    /**
 * Get insight confidence threshold
 *
 * @returns {number} - TODO: describe return value.
 */
public getInsightConfidenceThreshold(): number {
    return this.getAnalysisConfig().insightConfidenceThreshold ?? 0.7;
  }

    /**
 * Get relationship strength threshold
 *
 * @returns {number} - TODO: describe return value.
 */
public getRelationshipStrengthThreshold(): number {
    return this.getRelationshipsConfig().relationshipStrengthThreshold ?? 0.3;
  }

    /**
 * Get maximum insights per analysis
 *
 * @returns {number} - TODO: describe return value.
 */
public getMaxInsightsPerAnalysis(): number {
    return this.getAnalysisConfig().maxInsightsPerAnalysis ?? 10;
  }

    /**
 * Get maximum relationships per analysis
 *
 * @returns {number} - TODO: describe return value.
 */
public getMaxRelationshipsPerAnalysis(): number {
    return this.getRelationshipsConfig().maxRelationshipsPerAnalysis ?? 25;
  }

    /**
 * Get insight categories to focus on
 *
 * @returns {string[]} - TODO: describe return value.
 */
public getInsightCategories(): string[] {
    return (
      this.getAnalysisConfig().insightCategories ?? [
        "patterns",
        "anomalies",
        "correlations",
        "trends",
        "opportunities",
        "risks",
      ]
    );
  }

    /**
 * Get exploration priorities
 *
 * @returns {string[]} - TODO: describe return value.
 */
public getExplorationPriorities(): string[] {
    return (
      this.getExplorationConfig().explorationPriorities ?? [
        "people",
        "departments",
        "applications",
        "companyPolicies",
        "companyResources",
      ]
    );
  }

    /**
 * Get relationship types to track
 *
 * @returns {string[]} - TODO: describe return value.
 */
public getRelationshipTypes(): string[] {
    return (
      this.getRelationshipsConfig().relationshipTypes ?? [
        "direct",
        "hierarchical",
        "dependency",
        "correlation",
        "temporal",
        "functional",
      ]
    );
  }

    /**
 * Get analysis timeout in milliseconds
 *
 * @returns {number} - TODO: describe return value.
 */
public getAnalysisTimeout(): number {
    return this.getPerformanceConfig().analysisTimeout ?? 60000;
  }

    /**
 * Get telemetry configuration
 *
 * @returns {Record<string, unknown>} - TODO: describe return value.
 */
public getTelemetryConfig(): Record<string, unknown>  {
    return {
      logQueries: this.config.telemetry?.logQueries ?? true,
      logPerformance: this.config.telemetry?.logPerformance ?? true,
      logCacheStats: this.config.telemetry?.logCacheStats ?? true,
      slowQueryThreshold: this.config.telemetry?.slowQueryThreshold ?? 5000,
      trackInsightMetrics: this.config.telemetry?.trackInsightMetrics ?? true,
      trackRelationshipMetrics:
        this.config.telemetry?.trackRelationshipMetrics ?? true,
    };
  }

    /**
 * Get error handling configuration
 *
 * @returns {Record<string, unknown>} - TODO: describe return value.
 */
public getErrorHandlingConfig(): Record<string, unknown>  {
    return {
      maxRetries: this.config.errorHandling?.maxRetries ?? 2,
      retryDelay: this.config.errorHandling?.retryDelay ?? 2000,
      exponentialBackoff: this.config.errorHandling?.exponentialBackoff ?? true,
      fallbackToSimpleAnalysis:
        this.config.errorHandling?.fallbackToSimpleAnalysis ?? true,
      allowPartialAnalysis:
        this.config.errorHandling?.allowPartialAnalysis ?? true,
      gracefulRelationshipHandling:
        this.config.errorHandling?.gracefulRelationshipHandling ?? true,
    };
  }
}
