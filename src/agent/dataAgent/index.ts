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
import { DataAgentConfig } from "./config";

// Define core data types without importing from other agents
export type CategoryId = string;

export interface CategoryRecord {
  id: string;
  [key: string]: unknown;
}

export interface CategorySchema {
  name: string;
  schema: unknown;
}

export interface RelationshipDescription {
  name: string;
  description: string;
  targetCategory: CategoryId;
  viaField: string;
}

export interface AnalysisInput {
  categoryId: CategoryId;
  records: CategoryRecord[];
  schemas?: CategorySchema[];
  relationships?: RelationshipDescription[];
}

export interface DataInsight {
  type:
    | "pattern"
    | "anomaly"
    | "correlation"
    | "trend"
    | "opportunity"
    | "risk";
  description: string;
  confidence: number;
  category: CategoryId;
  affectedRecords?: string[];
}

export interface ExplorationPlan {
  topic: string;
  question: string;
  steps: ExplorationStep[];
  recommendedQueries: string[];
  supportingResources: Array<{
    categoryId: CategoryId;
    ids: string[];
  }>;
}

export interface ExplorationStep {
  title: string;
  description: string;
  recommendedCategory: CategoryId;
  hints: string[];
}

export interface TopicSearchResult {
  categoryId: CategoryId;
  recordId: string;
  displayName: string;
  matchingFields: string[];
}

export interface CrossCategoryConnection {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  connectionType: string;
  strength: number;
  description: string;
}

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
      const qualityConfig = this.config.getQualityConfig();
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
        (record) => !record.hasOwnProperty(field)
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
            .filter((record) => !record.hasOwnProperty(field))
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
 * Factory function that creates a {@link DataAgent} with default configuration.
 *
 * @returns {DataAgent} - TODO: describe return value.
 */
export function createDataAgent(): DataAgent {
  return new DataAgent();
}

// Export configuration types and instances for external use
export { DataAgentConfig } from "./config";
export { dataAgentConfig } from "./agent.config";
