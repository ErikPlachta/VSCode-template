/**
 * @file High-level data agent that reasons about the relationships between business categories and produces insights.
 * @fileoverview High-level data agent that reasons about the relationships
 * between business categories and produces insights that orchestration logic
 * can feed to other MCP tools.
 *
 * @module agent/dataAgent
 */

import { DatabaseAgent } from "@agent/databaseAgent";
import {
  CategoryId,
  CategoryRecord,
  CategorySchema,
  CategorySnapshot,
  ExampleDataset,
  DataValidationReport,
  DatasetCatalogueEntry,
  FolderBlueprint,
  TypeDefinition,
  RelationshipDescription,
  RelevantDataManagerAgent,
  RemoteQueryBlueprint,
} from "@agent/relevantDataManagerAgent";
import { createInvocationLogger } from "@mcp/telemetry";
import { detectDuplicateSchemas } from "@mcp/schemaUtils";
import { DataAgentProfile } from "@mcp/config/agentProfiles";

/**
 * Summary of a topic including schemas, examples, and queries.
 *
 * @typedef {object} TopicOverview
 * @property {CategorySnapshot} snapshot Snapshot metadata persisted in the shared cache.
 * @property {RelationshipDescription[]} relationships Relationship definitions originating from the topic.
 * @property {CategorySchema[]} schemas JSON schema descriptors associated with the topic.
 * @property {TypeDefinition[]} types Structured typing hints that mirror the schemas.
 * @property {ExampleDataset[]} examples Example datasets that illustrate typical records.
 * @property {RemoteQueryBlueprint[]} queries Remote query blueprints for the authoritative systems.
 * @property {CategoryRecord[]} highlightRecords Example records that should be highlighted to the user.
 * @property {DataValidationReport} validation Validation summary describing data quality checks.
 */
export interface TopicOverview {
  snapshot: CategorySnapshot;
  relationships: RelationshipDescription[];
  schemas: CategorySchema[];
  types: TypeDefinition[];
  examples: ExampleDataset[];
  queries: RemoteQueryBlueprint[];
  highlightRecords: CategoryRecord[];
  validation: DataValidationReport;
}

/**
 * Mapping of a record's connections to other categories.
 *
 * @typedef {object} TopicConnections
 * @property {{categoryId: CategoryId, record: CategoryRecord}} focus Record that serves as the anchor for the exploration.
 * @property {Array<{relationship: string, targetCategory: CategoryId, records: CategoryRecord[]}>} connections List of resolved relationships.
 * @property {string[]} narrative Human-readable relationship statements for UI rendering.
 */
export interface TopicConnections {
  focus: {
    categoryId: CategoryId;
    record: CategoryRecord;
  };
  connections: Array<{
    relationship: string;
    targetCategory: CategoryId;
    records: CategoryRecord[];
  }>;
  narrative: string[];
}

/**
 * A plan that helps a user explore or solve a problem.
 *
 * @typedef {object} ExplorationPlan
 * @property {string} topic Canonical category identifier.
 * @property {string} question End-user question that motivated the plan.
 * @property {ExplorationStep[]} steps Ordered list of recommended analysis actions.
 * @property {string[]} recommendedQueries Names of saved queries that can help answer the question.
 * @property {Array<{categoryId: CategoryId, ids: string[]}>} supportingResources References to related records for quick access.
 */
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

/**
 * Individual step inside an exploration plan.
 *
 * @typedef {object} ExplorationStep
 * @property {string} title Short step title.
 * @property {string} description Explanation of the action to take.
 * @property {CategoryId} recommendedCategory Category that should be explored in this step.
 * @property {string[]} hints Additional hints or nudges to guide investigation.
 */
export interface ExplorationStep {
  title: string;
  description: string;
  recommendedCategory: CategoryId;
  hints: string[];
}

/**
 * Result returned when searching the dataset for a keyword.
 *
 * @typedef {object} TopicSearchResult
 * @property {CategoryId} categoryId Category that contains the match.
 * @property {string} recordId Identifier of the matching record.
 * @property {string} displayName Friendly name rendered in UI surfaces.
 * @property {string[]} matchingFields Fields that matched the search term.
 */
export interface TopicSearchResult {
  categoryId: CategoryId;
  recordId: string;
  displayName: string;
  matchingFields: string[];
}

/**
 * Result describing connections between two topics via a specific record.
 *
 * @typedef {object} CrossTopicConnection
 * @property {CategoryRecord} sourceRecord Record in the source category used to find links.
 * @property {CategoryId} targetCategory Category that was connected through a relationship.
 * @property {string} relationship Human-readable name for the relationship.
 * @property {CategoryRecord[]} relatedRecords Records in the target category that satisfy the relationship.
 */
export interface CrossTopicConnection {
  sourceRecord: CategoryRecord;
  targetCategory: CategoryId;
  relationship: string;
  relatedRecords: CategoryRecord[];
}

/**
 * Bundle of artefacts that help contributors work with a category.
 *
 * @typedef {object} CategoryToolkit
 * @property {FolderBlueprint} folder Blueprint describing the folder layout for the category.
 * @property {CategorySchema[]} schemas Schemas that define expected record structure.
 * @property {TypeDefinition[]} types Structured typing hints for SDK implementers.
 * @property {ExampleDataset[]} examples Example datasets demonstrating data shape.
 * @property {DataValidationReport} validation Validation summary for the category data.
 * @property {RemoteQueryBlueprint[]} queries Remote query definitions that fetch authoritative data.
 */
export interface CategoryToolkit {
  folder: FolderBlueprint;
  schemas: CategorySchema[];
  types: TypeDefinition[];
  examples: ExampleDataset[];
  validation: DataValidationReport;
  queries: RemoteQueryBlueprint[];
}

/**
 * Agent that understands data relationships between categories.
 *
 * @example
 * ```ts
 * const agent = new DataAgent();
 * const overview = await agent.getTopicOverview("departments");
 * console.log(overview.schemas.map((schema) => schema.name));
 * ```
 */
export class DataAgent {
  private readonly manager: RelevantDataManagerAgent;
  private readonly database: DatabaseAgent;
  private readonly telemetry = createInvocationLogger(DataAgentProfile.id);

  /**
   * Create a new {@link DataAgent}.
   *
   * @param manager-  - Optional manager responsible for dataset access.
   * @param databaseAgent-  - Optional database agent instance to reuse.
   */
  constructor(
    manager?: RelevantDataManagerAgent,
    databaseAgent?: DatabaseAgent
  ) {
    this.manager = manager ?? new RelevantDataManagerAgent();
    this.database = databaseAgent ?? new DatabaseAgent(this.manager);
  }

  /**
   * Expose the consolidated dataset catalogue built from on-disk data sources.
   *
   * @returns - Summaries for each category with key metadata.
   */
  getDatasetCatalogue(): DatasetCatalogueEntry[] {
    return this.manager.getDatasetCatalogue();
  }

  /**
   * summarize a topic including schema references and highlight data.
   *
   * @param topic-  - Category identifier or alias to summarize.
   * @returns Promise resolving to snapshot of the category and related artefacts.
   * @throws UnknownCategoryError When the topic cannot be resolved.
   * @example
   * ```ts
   * const overview = await agent.getTopicOverview("people");
   * console.log(overview.examples[0]?.file);
   * ```
   */
  async getTopicOverview(topic: string): Promise<TopicOverview> {
    return this.telemetry("getTopicOverview", async () => {
      const category = this.manager.getCategory(topic);
      const duplicateSchemas = detectDuplicateSchemas(category.schemas);
      if (duplicateSchemas.length) {
        throw new Error(
          `Duplicate schema definitions detected for ${
            category.id
          }: ${duplicateSchemas.join(", ")}`
        );
      }
      const snapshot = await this.manager.getOrCreateSnapshot(category.id);
      const highlightRecords = category.records.slice(0, 3);
      return {
        snapshot,
        relationships: category.config.relationships,
        schemas: category.schemas,
        types: category.types,
        examples: category.examples,
        queries: category.queries,
        highlightRecords,
        validation: category.validation,
      };
    });
  }

  /**
   * Map the connections from a given record to other categories.
   *
   * @param topic - Category that owns the record being inspected.
   * @param [recordId] - Optional record identifier. Defaults to the first record in the category.
   * @returns - Structured description of relationships originating from the record.
   * @throws - When no records are available for the category.
   * @example
   * ```ts
   * const connections = await agent.mapTopicConnections("applications", "app-aurora");
   * connections.connections.forEach((link) => console.log(link.relationship));
   * ```
   */
  async mapTopicConnections(
    topic: string,
    recordId?: string
  ): Promise<TopicConnections> {
    return this.telemetry("mapTopicConnections", async () => {
      const category = this.manager.getCategory(topic);
      const focusRecord = recordId
        ? this.manager.getRecord(category.id, recordId)
        : category.records[0];
      if (!focusRecord) {
        throw new Error(
          `No record found in category ${category.id} to analyse.`
        );
      }
      const connections = this.manager.getEntityConnections(
        category.id,
        focusRecord.id
      );
      const narrative = connections.connections.map((entry) => {
        const names = entry.records.map((record) =>
          this.getRecordDisplayName(record)
        );
        return `${this.getRecordDisplayName(focusRecord)} → ${
          entry.relationship
        }: ${names.join(", ")}`;
      });
      return {
        focus: { categoryId: category.id, record: focusRecord },
        connections: connections.connections,
        narrative,
      };
    });
  }

  /**
   * Build an exploration plan for answering a specific user question.
   *
   * @param topic - Category that anchors the exploration.
   * @param question - Natural language problem that needs to be solved.
   * @returns - Plan describing steps, queries, and supporting resources.
   * @throws - When the topic cannot be resolved.
   * @example
   * ```ts
   * const plan = await agent.buildExplorationPlan("departments", "How is the analytics team structured?");
   * console.log(plan.steps.map((step) => step.title));
   * ```
   */
  async buildExplorationPlan(
    topic: string,
    question: string
  ): Promise<ExplorationPlan> {
    return this.telemetry("buildExplorationPlan", async () => {
      const category = this.manager.getCategory(topic);
      const overview = await this.getTopicOverview(category.id);
      const supportingResources = this.collectSupportingResources(category.id);
      const steps: ExplorationStep[] = overview.relationships.map(
        (relationship) => {
          const relatedCategory = this.manager.getCategory(
            relationship.targetCategory
          );
          const schemaHint = relatedCategory.config.folder.schemaFiles.length
            ? `Inspect schemas: ${relatedCategory.config.folder.schemaFiles.join(
                ", "
              )}`
            : undefined;
          return {
            title: `Analyze ${relationship.name}`,
            description: relationship.description,
            recommendedCategory: relatedCategory.id,
            hints: [
              schemaHint,
              `Use databaseAgent to query ${relatedCategory.name} by '${relationship.viaField}'.`,
            ].filter((hint): hint is string => Boolean(hint)),
          };
        }
      );
      steps.push({
        title: "Review examples and validation",
        description: `Use the example datasets and validation summary under ${category.config.folder.root} to understand data quality considerations before making changes.`,
        recommendedCategory: category.id,
        hints: [
          ...category.examples.map((example) => `Example: ${example.file}`),
          `Validation status: ${category.validation.status}`,
        ],
      });

      return {
        topic: category.name,
        question,
        steps,
        recommendedQueries: overview.queries.map((query) => query.name),
        supportingResources,
      };
    });
  }

  /**
   * Retrieve the records in the target topic that are connected to the source
   * record via declared relationships.
   *
   * @param sourceTopic - Category that contains the anchor record.
   * @param sourceRecordId - Identifier for the anchor record.
   * @param targetTopic - Category whose records should be matched.
   * @returns - Relationship details when a link exists, otherwise `undefined`.
   * @throws - When the source record cannot be found.
   * @example
   * ```ts
   * const connection = await agent.findCrossTopicConnection("people", "person-001", "departments");
   * console.log(connection?.relationship);
   * ```
   */
  async findCrossTopicConnection(
    sourceTopic: string,
    sourceRecordId: string,
    targetTopic: string
  ): Promise<CrossTopicConnection | undefined> {
    return this.telemetry("findCrossTopicConnection", async () => {
      const sourceCategory = this.manager.getCategory(sourceTopic);
      const targetCategory = this.manager.getCategory(targetTopic);
      const focusRecord = this.manager.getRecord(
        sourceCategory.id,
        sourceRecordId
      );
      if (!focusRecord) {
        throw new Error(
          `Record ${sourceRecordId} not found for category ${sourceCategory.id}`
        );
      }
      const connections = this.manager.getEntityConnections(
        sourceCategory.id,
        focusRecord.id
      );
      const connection = connections.connections.find(
        (entry) => entry.targetCategory === targetCategory.id
      );
      if (!connection) {
        return undefined;
      }
      return {
        sourceRecord: focusRecord,
        targetCategory: targetCategory.id,
        relationship: connection.relationship,
        relatedRecords: connection.records,
      };
    });
  }

  /**
   * Run a keyword search across every category.
   *
   * @param keyword - Case-insensitive search string.
   * @returns - Matching records grouped by category.
   * @example
   * ```ts
   * const matches = agent.search("analytics");
   * console.log(matches[0]?.displayName);
   * ```
   */
  search(keyword: string): TopicSearchResult[] {
    return this.manager.searchAcrossCategories(keyword).map((match) => ({
      categoryId: match.categoryId,
      recordId: match.record.id,
      displayName: this.getRecordDisplayName(match.record),
      matchingFields: match.matchingFields,
    }));
  }

  /**
   * Access to the underlying database agent for orchestration workflows.
   *
   * @returns - Database-like helper that exposes query primitives.
   */
  getDatabaseAgent(): DatabaseAgent {
    return this.database;
  }

  /**
   * Gather the test, schema, and query artefacts for a category.
   *
   * @param topic - Category identifier or alias.
   * @returns - Collection of supporting artefacts.
   * @throws - When the category cannot be resolved.
   */
  getCategoryToolkit(topic: string): CategoryToolkit {
    const category = this.manager.getCategory(topic);
    return {
      folder: category.config.folder,
      schemas: category.schemas,
      types: category.types,
      examples: category.examples,
      validation: category.validation,
      queries: category.queries,
    };
  }

  /**
   * Compose supporting resource references for a category.
   *
   * @param categoryId - Category used to source supporting artefacts.
   * @returns - >} Related record references including neighbouring categories.
   */
  private collectSupportingResources(
    categoryId: CategoryId
  ): Array<{ categoryId: CategoryId; ids: string[] }> {
    const category = this.manager.getCategory(categoryId);
    const focusRecord = category.records[0];
    const resources: Array<{ categoryId: CategoryId; ids: string[] }> = [
      {
        categoryId: category.id,
        ids: category.records.slice(0, 2).map((record) => record.id),
      },
    ];
    if (!focusRecord) {
      return resources;
    }
    const connections = this.manager.getEntityConnections(
      category.id,
      focusRecord.id
    );
    for (const connection of connections.connections) {
      const ids = connection.records.slice(0, 2).map((record) => record.id);
      if (ids.length === 0) {
        continue;
      }
      resources.push({ categoryId: connection.targetCategory, ids });
    }
    return resources;
  }

  /**
   * Determine a consistent display name for a record.
   *
   * @param record - Record being formatted.
   * @returns - Human-friendly name for the record.
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
 * Factory function that creates a {@link DataAgent} with default collaborators.
 *
 * @returns - Freshly constructed data agent.
 * @example
 * ```ts
 * import { createDataAgent } from "@agent/dataAgent";
 * const agent = createDataAgent();
 * ```
 */
export function createDataAgent(): DataAgent {
  return new DataAgent();
}
