/**
 * @packageDocumentation High-level data agent that analyzes data and produces insights.
 * @packageDocumentation Data agent that focuses purely on data analysis and insight generation.
 * This agent does not manage other agents or data sources - it receives data as input
 * and returns analysis results.
 *
 * @module agent/dataAgent
 */

import { createInvocationLogger } from "@mcp/telemetry";
import { DataAgentProfile } from "@mcp/config/agentProfiles";
import {
  BaseAgentConfig,
  type AgentConfigDefinition,
  type DataConfig,
  type CategoryId,
  type CategoryRecord,
  type RelationshipDescription,
  type AnalysisInput,
  type DataInsight,
  type ExplorationPlan,
  type ExplorationStep,
  type TopicSearchResult,
  type CrossCategoryConnection,
} from "@internal-types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "@internal-types/configValidation";
import { dataAgentConfig } from "@agent/dataAgent/agent.config";

/**
 * Agent that analyzes data and generates insights.
 * Focuses purely on data analysis without managing other agents or data sources.
 *
 * @example
 * ```ts
 * const agent = new DataAgent();
 * const insights = await agent.analyzeData(analysisInput);
 * console.log(insights.map(insight => insight.description));
 * ```
 */
export class DataAgent {
  private readonly telemetry = createInvocationLogger(DataAgentProfile.id);
  private readonly config: DataAgentConfig;

  /**
   * Create a new {@link DataAgent}.
   *
   * @returns {unknown} - TODO: describe return value.
   */
  constructor() {
    this.config = new DataAgentConfig();
  }

  /**
   * Analyze data and generate insights.
   *
   * @param {AnalysisInput} input - input parameter.
   * @returns {Promise<DataInsight[]>} - TODO: describe return value.
   */
  async analyzeData(input: AnalysisInput): Promise<DataInsight[]> {
    return this.telemetry("analyzeData", async () => {
      const analysisConfig = this.config.getAnalysisConfig();
      // Quality configuration is used in detectAnomalies; no need to fetch here.
      const insights: DataInsight[] = [];

      if (!analysisConfig.enableInsightGeneration) {
        return insights;
      }

      // Pattern analysis
      const patterns = this.detectPatterns(input.records, input.categoryId);
      insights.push(...patterns);

      // Anomaly detection
      const anomalies = this.detectAnomalies(input.records, input.categoryId);
      insights.push(...anomalies);

      // Relationship analysis if relationships provided
      if (input.relationships && analysisConfig.crossCategoryAnalysis) {
        const relationshipInsights = this.analyzeRelationships(
          input.relationships
        );
        insights.push(...relationshipInsights);
      }

      // Filter by confidence threshold
      const filteredInsights = insights.filter(
        (insight) =>
          insight.confidence >=
          (analysisConfig.insightConfidenceThreshold || 0.7)
      );

      // Limit results
      const maxInsights = analysisConfig.maxInsightsPerAnalysis || 10;
      return filteredInsights.slice(0, maxInsights);
    });
  }

  /**
   * Generate an exploration plan for data analysis.
   *
   * @param {CategoryId} categoryId - categoryId parameter.
   * @param {string} question - question parameter.
   * @param {AnalysisInput} availableData - availableData parameter.
   * @returns {Promise<ExplorationPlan>} - TODO: describe return value.
   */
  async generateExplorationPlan(
    categoryId: CategoryId,
    question: string,
    availableData: AnalysisInput
  ): Promise<ExplorationPlan> {
    return this.telemetry("generateExplorationPlan", async () => {
      const explorationConfig = this.config.getExplorationConfig();

      const steps: ExplorationStep[] = [];

      // Basic data overview step
      steps.push({
        title: "Data Overview",
        description: `Review ${availableData.records.length} records in ${categoryId} category`,
        recommendedCategory: categoryId,
        hints: [
          `Total records: ${availableData.records.length}`,
          "Look for data completeness and quality patterns",
        ],
      });

      // Relationship analysis steps
      if (availableData.relationships) {
        availableData.relationships.forEach((rel) => {
          steps.push({
            title: `Analyze ${rel.name}`,
            description: rel.description,
            recommendedCategory: rel.targetCategory,
            hints: [`Focus on ${rel.viaField} connections`],
          });
        });
      }

      // Limit steps based on configuration
      const maxSteps = explorationConfig.maxExplorationSteps || 8;
      return {
        topic: categoryId,
        question,
        steps: steps.slice(0, maxSteps),
        recommendedQueries: [], // No saved queries in pure analysis agent
        supportingResources: [
          {
            categoryId,
            ids: availableData.records.slice(0, 3).map((r) => r.id),
          },
        ],
      };
    });
  }

  /**
   * Analyze relationships between categories.
   *
   * @param {AnalysisInput} sourceData - sourceData parameter.
   * @param {AnalysisInput} targetData - targetData parameter.
   * @param {RelationshipDescription} relationship - relationship parameter.
   * @returns {Promise<CrossCategoryConnection>} - TODO: describe return value.
   */
  async analyzeConnection(
    sourceData: AnalysisInput,
    targetData: AnalysisInput,
    relationship: RelationshipDescription
  ): Promise<CrossCategoryConnection> {
    return this.telemetry("analyzeConnection", async () => {
      // Count connections
      const connections = sourceData.records.filter(
        (record) => record[relationship.viaField] !== undefined
      );

      const connectionStrength = connections.length / sourceData.records.length;

      return {
        sourceCategory: sourceData.categoryId,
        targetCategory: targetData.categoryId,
        connectionType: relationship.name,
        strength: connectionStrength,
        description: `${connections.length} out of ${sourceData.records.length} records have ${relationship.name} connections`,
      };
    });
  }

  /**
   * Search for patterns in data records.
   *
   * @param {string} keyword - keyword parameter.
   * @param {AnalysisInput[]} data - data parameter.
   * @returns {TopicSearchResult[]} - TODO: describe return value.
   */
  searchData(keyword: string, data: AnalysisInput[]): TopicSearchResult[] {
    const searchConfig = this.config.getSearchConfig();
    const results: TopicSearchResult[] = [];

    data.forEach((input) => {
      input.records.forEach((record) => {
        const matchingFields: string[] = [];

        // Search through all record fields
        Object.entries(record).forEach(([field, value]) => {
          if (
            typeof value === "string" &&
            value.toLowerCase().includes(keyword.toLowerCase())
          ) {
            matchingFields.push(field);
          }
        });

        if (matchingFields.length > 0) {
          results.push({
            categoryId: input.categoryId,
            recordId: record.id,
            displayName: this.getRecordDisplayName(record),
            matchingFields,
          });
        }
      });
    });

    return results.slice(0, searchConfig.maxResults || 50);
  }

  /**
   * Detect patterns in data records.
   *
   * @param {CategoryRecord[]} records - records parameter.
   * @param {CategoryId} categoryId - categoryId parameter.
   * @returns {DataInsight[]} - TODO: describe return value.
   */
  private detectPatterns(
    records: CategoryRecord[],
    categoryId: CategoryId
  ): DataInsight[] {
    const insights: DataInsight[] = [];

    // Field frequency analysis
    const fieldFrequency: Record<string, number> = {};
    records.forEach((record) => {
      Object.keys(record).forEach((field) => {
        fieldFrequency[field] = (fieldFrequency[field] || 0) + 1;
      });
    });

    // Find common patterns
    const totalRecords = records.length;
    Object.entries(fieldFrequency).forEach(([field, count]) => {
      if (count / totalRecords > 0.8) {
        // 80% or more have this field
        insights.push({
          type: "pattern",
          description: `Field '${field}' is present in ${Math.round(
            (count / totalRecords) * 100
          )}% of records`,
          confidence: count / totalRecords,
          category: categoryId, // Use the provided category ID
        });
      }
    });

    return insights;
  }

  /**
   * Detect anomalies in data records.
   *
   * @param {CategoryRecord[]} records - records parameter.
   * @param {CategoryId} categoryId - categoryId parameter.
   * @returns {DataInsight[]} - TODO: describe return value.
   */
  private detectAnomalies(
    records: CategoryRecord[],
    categoryId: CategoryId
  ): DataInsight[] {
    const insights: DataInsight[] = [];
    const qualityConfig = this.config.getQualityConfig();

    // Missing field analysis
    const allFields = new Set<string>();
    records.forEach((record) => {
      Object.keys(record).forEach((field) => allFields.add(field));
    });

    allFields.forEach((field) => {
      const missingCount = records.filter(
        (record) => !(field in record)
      ).length;
      if (
        missingCount > 0 &&
        missingCount / records.length >
          (qualityConfig.missingFieldThreshold ?? 0.1)
      ) {
        // More than configured threshold missing
        insights.push({
          type: "anomaly",
          description: `${missingCount} records missing field '${field}'`,
          confidence: missingCount / records.length,
          category: categoryId,
          affectedRecords: records
            .filter((record) => !(field in record))
            .map((record) => record.id),
        });
      }
    });

    return insights;
  }

  /**
   * Analyze relationships for insights.
   *
   * @param {RelationshipDescription[]} relationships - relationships parameter.
   * @returns {DataInsight[]} - TODO: describe return value.
   */
  private analyzeRelationships(
    relationships: RelationshipDescription[]
  ): DataInsight[] {
    const insights: DataInsight[] = [];

    relationships.forEach((rel) => {
      insights.push({
        type: "correlation",
        description: `Relationship found: ${rel.name} connects to ${rel.targetCategory} via ${rel.viaField}`,
        confidence: 0.8, // Static confidence for relationship existence
        category: rel.targetCategory,
      });
    });

    return insights;
  }

  /**
   * Get display name for a record.
   *
   * @param {CategoryRecord} record - record parameter.
   * @returns {string} - TODO: describe return value.
   */
  private getRecordDisplayName(record: CategoryRecord): string {
    return (
      (typeof record.name === "string" && record.name) ||
      (typeof record.title === "string" && record.title) ||
      String(record.id)
    );
  }
}

/**
 * Data agent-specific configuration class (merged from config.ts)
 */
export class DataAgentConfig extends BaseAgentConfig {
  private dataConfig: DataConfig;

  /**
   * Create a config wrapper using default TS config or overrides (for tests)
   *
   * @param {AgentConfigDefinition} [config] - Optional override configuration.
   */
  constructor(config?: AgentConfigDefinition) {
    const configToUse = config || dataAgentConfig;
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid data agent configuration:\n${report}`);
    }

    super(configToUse);
    this.dataConfig = this.config.data || ({} as DataConfig);
  }

  /**
   * Get analysis configuration.
   *
   * @returns {DataConfig['analysis']} Insight generation and depth settings.
   */
  public getAnalysisConfig(): DataConfig["analysis"] {
    return this.dataConfig.analysis || ({} as DataConfig["analysis"]);
  }

  /**
   * Get quality configuration.
   *
   * @returns {NonNullable<DataConfig['quality']>} Data quality thresholds and flags.
   */
  public getQualityConfig(): NonNullable<DataConfig["quality"]> {
    return (
      this.dataConfig.quality || ({} as NonNullable<DataConfig["quality"]>)
    );
  }

  /**
   * Get exploration configuration.
   *
   * @returns {DataConfig['exploration']} Exploration plan and complexity settings.
   */
  public getExplorationConfig(): DataConfig["exploration"] {
    return this.dataConfig.exploration || ({} as DataConfig["exploration"]);
  }

  /**
   * Get relationships configuration.
   *
   * @returns {DataConfig['relationships']} Relationship mapping behaviors.
   */
  public getRelationshipsConfig(): DataConfig["relationships"] {
    return this.dataConfig.relationships || ({} as DataConfig["relationships"]);
  }

  /**
   * Get synthesis configuration.
   *
   * @returns {NonNullable<DataConfig['synthesis']>} Synthesis and overview generation settings.
   */
  public getSynthesisConfig(): NonNullable<DataConfig["synthesis"]> {
    return (
      this.dataConfig.synthesis || ({} as NonNullable<DataConfig["synthesis"]>)
    );
  }

  /**
   * Get performance configuration.
   *
   * @returns {NonNullable<DataConfig['performance']>} Performance and caching settings for analyses.
   */
  public getPerformanceConfig(): NonNullable<DataConfig["performance"]> {
    return (
      this.dataConfig.performance ||
      ({} as NonNullable<DataConfig["performance"]>)
    );
  }

  /**
   * Get search configuration.
   *
   * @returns {NonNullable<DataConfig['search']>} Search behavior (fuzzy matching, result limits).
   */
  public getSearchConfig(): NonNullable<DataConfig["search"]> {
    return this.dataConfig.search || ({} as NonNullable<DataConfig["search"]>);
  }

  /**
   * Check if insight generation is enabled.
   *
   * @returns {boolean} True when insights are generated during analysis.
   */
  public isInsightGenerationEnabled(): boolean {
    return this.getAnalysisConfig().enableInsightGeneration;
  }

  /**
   * Check if cross-category analysis is enabled.
   *
   * @returns {boolean} True for cross-category relationship exploration.
   */
  public isCrossCategoryAnalysisEnabled(): boolean {
    return this.getAnalysisConfig().crossCategoryAnalysis;
  }

  /**
   * Check if relationship mapping is enabled.
   *
   * @returns {boolean} True when mapping across category relationships.
   */
  public isRelationshipMappingEnabled(): boolean {
    return this.getRelationshipsConfig().enableRelationshipMapping;
  }

  /**
   * Check if automatic plan generation is enabled.
   *
   * @returns {boolean} True when exploration plans are auto-generated.
   */
  public isAutomaticPlanGenerationEnabled(): boolean {
    return this.getExplorationConfig().enableAutomaticPlanGeneration;
  }

  /**
   * Get maximum insight depth.
   *
   * @returns {number} Maximum reasoning depth for insights.
   */
  public getMaxInsightDepth(): number {
    return this.getAnalysisConfig().maxInsightDepth;
  }

  /**
   * Get maximum exploration steps.
   *
   * @returns {number} Maximum number of steps in exploration sequences.
   */
  public getMaxExplorationSteps(): number {
    return this.getExplorationConfig().maxExplorationSteps;
  }

  /**
   * Get maximum relationship depth.
   *
   * @returns {number} Maximum traversal depth for relationship mapping.
   */
  public getMaxRelationshipDepth(): number {
    return this.getRelationshipsConfig().maxRelationshipDepth;
  }

  /**
   * Get plan complexity limit.
   *
   * @returns {"low"|"medium"|"high"} Configured exploration complexity cap.
   */
  public getPlanComplexityLimit(): "low" | "medium" | "high" {
    return this.getExplorationConfig().planComplexityLimit;
  }

  /**
   * Get insight confidence threshold.
   *
   * @returns {number} Minimum confidence required to surface an insight.
   */
  public getInsightConfidenceThreshold(): number {
    return this.getAnalysisConfig().insightConfidenceThreshold ?? 0.7;
  }

  /**
   * Get relationship strength threshold.
   *
   * @returns {number} Minimum strength for relationship inclusion.
   */
  public getRelationshipStrengthThreshold(): number {
    return this.getRelationshipsConfig().relationshipStrengthThreshold ?? 0.3;
  }

  /**
   * Get maximum insights per analysis.
   *
   * @returns {number} Cap for insights surfaced in one analysis run.
   */
  public getMaxInsightsPerAnalysis(): number {
    return this.getAnalysisConfig().maxInsightsPerAnalysis ?? 10;
  }

  /**
   * Get maximum relationships per analysis.
   *
   * @returns {number} Cap for relationships surfaced in one analysis run.
   */
  public getMaxRelationshipsPerAnalysis(): number {
    return this.getRelationshipsConfig().maxRelationshipsPerAnalysis ?? 25;
  }

  /**
   * Get insight categories to focus on.
   *
   * @returns {string[]} Ordered list of categories for insight classification.
   */
  public getInsightCategories(): string[] {
    return this.getAnalysisConfig().insightCategories ?? [];
  }

  /**
   * Get exploration priorities.
   *
   * @returns {string[]} Ordered category priorities when constructing plans.
   */
  public getExplorationPriorities(): string[] {
    const priorities = this.getExplorationConfig().explorationPriorities;
    // Avoid hard-coding business category IDs in code; fall back to empty array when not configured.
    return Array.isArray(priorities) ? priorities : [];
  }
}

/**
 * Factory function that creates a {@link DataAgent} with default configuration.
 *
 * @returns {DataAgent} - TODO: describe return value.
 */
export function createDataAgent(): DataAgent {
  return new DataAgent();
}

// Export configuration types and instances for external use
export { dataAgentConfig } from "@agent/dataAgent/agent.config";
