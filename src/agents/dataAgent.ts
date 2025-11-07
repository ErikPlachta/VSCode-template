/**
 * @fileoverview High-level data agent that reasons about the relationships
 * between business categories and produces insights that orchestration logic
 * can feed to other MCP tools.
 *
 * @module agents/dataAgent
 */

import { DatabaseAgent } from "./databaseAgent";
import {
  CategoryId,
  CategoryRecord,
  CategorySchema,
  CategorySnapshot,
  ExampleDataset,
  CategoryTestArtefact,
  FolderBlueprint,
  PythonTypeDefinition,
  RelationshipDescription,
  RelevantDataManagerAgent,
  RemoteQueryBlueprint
} from "./relevantDataManagerAgent";

/**
 * Summary of a topic including schemas, examples, and queries.
 *
 * @interface TopicOverview
 * @property {CategorySnapshot} snapshot - Latest snapshot metadata for the category.
 * @property {RelationshipDescription[]} relationships - Declared relationships to other categories.
 * @property {CategorySchema[]} schemas - Schema documents linked to the topic.
 * @property {PythonTypeDefinition[]} pythonTypes - Python type definitions describing the data model.
 * @property {ExampleDataset[]} examples - Example datasets illustrating expected inputs and outputs.
 * @property {RemoteQueryBlueprint[]} queries - Query blueprints relevant to the topic.
 * @property {CategoryRecord[]} highlightRecords - Representative records that illustrate the topic.
 */
export interface TopicOverview {
  snapshot: CategorySnapshot;
  relationships: RelationshipDescription[];
  schemas: CategorySchema[];
  pythonTypes: PythonTypeDefinition[];
  examples: ExampleDataset[];
  queries: RemoteQueryBlueprint[];
  highlightRecords: CategoryRecord[];
}

/**
 * Mapping of a record's connections to other categories.
 *
 * @interface TopicConnections
 * @property {{ categoryId: CategoryId; record: CategoryRecord; }} focus - Primary record under analysis.
 * @property {Array<{ relationship: string; targetCategory: CategoryId; records: CategoryRecord[]; }>} connections -
 * Relationship entries describing cross-category links.
 * @property {string[]} narrative - Human readable description of the connections.
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
 * @interface ExplorationPlan
 * @property {string} topic - Name of the category being explored.
 * @property {string} question - User-supplied question or goal.
 * @property {ExplorationStep[]} steps - Ordered list of suggested actions.
 * @property {string[]} recommendedQueries - Query identifiers to execute for further insight.
 * @property {Array<{ categoryId: CategoryId; ids: string[]; }>} supportingResources - Records and categories to review.
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
 * @interface ExplorationStep
 * @property {string} title - Short heading describing the step.
 * @property {string} description - Rich explanation of the action to take.
 * @property {CategoryId} recommendedCategory - Category most relevant to the step.
 * @property {string[]} hints - Optional hints that provide additional guidance.
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
 * @interface TopicSearchResult
 * @property {CategoryId} categoryId - Identifier of the category containing the record.
 * @property {string} recordId - Primary key of the matching record.
 * @property {string} displayName - Human-friendly label for the record.
 * @property {string[]} matchingFields - Fields that matched the keyword search.
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
 * @interface CrossTopicConnection
 * @property {CategoryRecord} sourceRecord - Record in the source topic acting as the pivot.
 * @property {CategoryId} targetCategory - Category that the source record connects to.
 * @property {string} relationship - Name of the relationship linking the categories.
 * @property {CategoryRecord[]} relatedRecords - Records in the target category connected to the source.
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
 * @interface CategoryToolkit
 * @property {FolderBlueprint} folder - Folder configuration describing repository structure.
 * @property {CategorySchema[]} schemas - Category schema definitions.
 * @property {PythonTypeDefinition[]} pythonTypes - Python typing reference material.
 * @property {ExampleDataset[]} examples - Worked examples that illustrate data usage.
 * @property {CategoryTestArtefact[]} tests - Testing artefacts associated with the category.
 * @property {RemoteQueryBlueprint[]} queries - Remote query blueprints for data extraction.
 */
export interface CategoryToolkit {
  folder: FolderBlueprint;
  schemas: CategorySchema[];
  pythonTypes: PythonTypeDefinition[];
  examples: ExampleDataset[];
  tests: CategoryTestArtefact[];
  queries: RemoteQueryBlueprint[];
}

/**
 * Agent that understands data relationships between categories.
 *
 * @example
 * const agent = new DataAgent();
 * const overview = await agent.getTopicOverview("marketing");
 *
 * @class
 */
export class DataAgent {
  private readonly manager: RelevantDataManagerAgent;
  private readonly database: DatabaseAgent;

  /**
   * Create a new data agent.
   *
   * @param {RelevantDataManagerAgent=} manager - Optional data manager instance.
   * @param {DatabaseAgent=} databaseAgent - Optional database agent dependency.
   */
  constructor(manager?: RelevantDataManagerAgent, databaseAgent?: DatabaseAgent) {
    this.manager = manager ?? new RelevantDataManagerAgent();
    this.database = databaseAgent ?? new DatabaseAgent(this.manager);
  }

  /**
   * Summarise a topic including schema references and highlight data.
   *
   * @param {string} topic - Identifier or slug of the category to summarise.
   * @returns {Promise<TopicOverview>} Collated overview including schemas, examples, and queries.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the provided topic cannot be resolved.
   * @example
   * const overview = await agent.getTopicOverview("sales");
   */
  async getTopicOverview(topic: string): Promise<TopicOverview> {
    const category = this.manager.getCategory(topic);
    const snapshot = await this.manager.getOrCreateSnapshot(category.id);
    const highlightRecords = category.records.slice(0, 3);
    return {
      snapshot,
      relationships: category.config.relationships,
      schemas: category.schemas,
      pythonTypes: category.pythonTypes,
      examples: category.examples,
      queries: category.queries,
      highlightRecords
    };
  }

  /**
   * Map the connections from a given record to other categories.
   *
   * @param {string} topic - Category identifier describing the focus of the map.
   * @param {string=} recordId - Optional record identifier to analyse; defaults to the first record.
   * @returns {Promise<TopicConnections>} Relationship map for the provided record.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the provided topic cannot be resolved.
   * @throws {Error} When the requested record cannot be located.
   * @example
   * const connections = await agent.mapTopicConnections("support", "ticket-1");
   */
  async mapTopicConnections(topic: string, recordId?: string): Promise<TopicConnections> {
    const category = this.manager.getCategory(topic);
    const focusRecord = recordId
      ? this.manager.getRecord(category.id, recordId)
      : category.records[0];
    if (!focusRecord) {
      throw new Error(`No record found in category ${category.id} to analyse.`);
    }
    const connections = this.manager.getEntityConnections(category.id, focusRecord.id);
    const narrative = connections.connections.map((entry) => {
      const names = entry.records.map((record) => this.getRecordDisplayName(record));
      return `${this.getRecordDisplayName(focusRecord)} → ${entry.relationship}: ${names.join(", ")}`;
    });
    return {
      focus: { categoryId: category.id, record: focusRecord },
      connections: connections.connections,
      narrative
    };
  }

  /**
   * Build an exploration plan for answering a specific user question.
   *
   * @param {string} topic - Category identifier anchoring the plan.
   * @param {string} question - User-provided question or goal.
   * @returns {Promise<ExplorationPlan>} Structured plan of analysis steps and resources.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the topic or related categories cannot be resolved.
   * @example
   * const plan = await agent.buildExplorationPlan("marketing", "How to increase retention?");
   */
  async buildExplorationPlan(topic: string, question: string): Promise<ExplorationPlan> {
    const category = this.manager.getCategory(topic);
    const overview = await this.getTopicOverview(category.id);
    const supportingResources = this.collectSupportingResources(category.id);
    const steps: ExplorationStep[] = overview.relationships.map((relationship) => {
      const relatedCategory = this.manager.getCategory(relationship.targetCategory);
      const schemaHint = relatedCategory.config.folder.schemaFiles.length
        ? `Inspect schemas: ${relatedCategory.config.folder.schemaFiles.join(", ")}`
        : undefined;
      return {
        title: `Analyse ${relationship.name}`,
        description: relationship.description,
        recommendedCategory: relatedCategory.id,
        hints: [
          schemaHint,
          `Use databaseAgent to query ${relatedCategory.name} by '${relationship.viaField}'.`
        ].filter((hint): hint is string => Boolean(hint))
      };
    });
    // Add a final step encouraging tests/examples review for context.
    steps.push({
      title: "Review examples and tests",
      description: `Use the example datasets and tests under ${category.config.folder.root} to understand edge cases before making changes.`,
      recommendedCategory: category.id,
      hints: category.examples.map((example) => `Example: ${example.file}`)
    });

    return {
      topic: category.name,
      question,
      steps,
      recommendedQueries: overview.queries.map((query) => query.name),
      supportingResources
    };
  }

  /**
   * Retrieve the records in the target topic that are connected to the source
   * record via declared relationships.
   *
   * @param {string} sourceTopic - Category containing the source record.
   * @param {string} sourceRecordId - Identifier of the record acting as the pivot.
   * @param {string} targetTopic - Category that may include related records.
   * @returns {Promise<CrossTopicConnection | undefined>} Connection details when relationships exist.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When either the source or target topic cannot be resolved.
   * @throws {Error} When the source record cannot be located.
   * @example
   * const connection = await agent.findCrossTopicConnection("sales", "order-1", "support");
   */
  async findCrossTopicConnection(
    sourceTopic: string,
    sourceRecordId: string,
    targetTopic: string
  ): Promise<CrossTopicConnection | undefined> {
    const sourceCategory = this.manager.getCategory(sourceTopic);
    const targetCategory = this.manager.getCategory(targetTopic);
    const focusRecord = this.manager.getRecord(sourceCategory.id, sourceRecordId);
    if (!focusRecord) {
      throw new Error(`Record ${sourceRecordId} not found for category ${sourceCategory.id}`);
    }
    const connections = this.manager.getEntityConnections(sourceCategory.id, focusRecord.id);
    const connection = connections.connections.find((entry) => entry.targetCategory === targetCategory.id);
    if (!connection) {
      return undefined;
    }
    return {
      sourceRecord: focusRecord,
      targetCategory: targetCategory.id,
      relationship: connection.relationship,
      relatedRecords: connection.records
    };
  }

  /**
   * Run a keyword search across every category.
   *
   * @param {string} keyword - Case-insensitive keyword used for matching.
   * @returns {TopicSearchResult[]} Matching records across all categories.
   * @example
   * const results = agent.search("onboarding");
   */
  search(keyword: string): TopicSearchResult[] {
    return this.manager.searchAcrossCategories(keyword).map((match) => ({
      categoryId: match.categoryId,
      recordId: match.record.id,
      displayName: this.getRecordDisplayName(match.record),
      matchingFields: match.matchingFields
    }));
  }

  /**
   * Access to the underlying database agent for orchestration workflows.
   *
   * @returns {DatabaseAgent} The configured database agent instance.
   * @example
   * const databaseAgent = agent.getDatabaseAgent();
   */
  getDatabaseAgent(): DatabaseAgent {
    return this.database;
  }

  /**
   * Gather the test, schema, and query artefacts for a category.
   *
   * @param {string} topic - Category identifier being inspected.
   * @returns {CategoryToolkit} Toolkit bundle of relevant assets.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the provided topic cannot be resolved.
   * @example
   * const toolkit = agent.getCategoryToolkit("support");
   */
  getCategoryToolkit(topic: string): CategoryToolkit {
    const category = this.manager.getCategory(topic);
    return {
      folder: category.config.folder,
      schemas: category.schemas,
      pythonTypes: category.pythonTypes,
      examples: category.examples,
      tests: category.tests,
      queries: category.queries
    };
  }

  /**
   * Compose supporting resource references for a category.
   *
   * @param {CategoryId} categoryId - Category being evaluated.
   * @returns {Array<{ categoryId: CategoryId; ids: string[] }>} Structured supporting resource references.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When a referenced category cannot be resolved.
   * @example
   * const resources = agent["collectSupportingResources"]("marketing");
   */
  private collectSupportingResources(categoryId: CategoryId): Array<{ categoryId: CategoryId; ids: string[] }> {
    const category = this.manager.getCategory(categoryId);
    const focusRecord = category.records[0];
    const resources: Array<{ categoryId: CategoryId; ids: string[] }> = [
      {
        categoryId: category.id,
        ids: category.records.slice(0, 2).map((record) => record.id)
      }
    ];
    if (!focusRecord) {
      return resources;
    }
    const connections = this.manager.getEntityConnections(category.id, focusRecord.id);
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
   * @param {CategoryRecord} record - Record whose display name is required.
   * @returns {string} Chosen display name using name, title, or identifier.
   * @example
   * const displayName = agent["getRecordDisplayName"](record);
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
 * Factory helper that constructs a {@link DataAgent} instance with default dependencies.
 *
 * @returns {DataAgent} Freshly instantiated data agent.
 * @example
 * const agent = createDataAgent();
 */
export function createDataAgent(): DataAgent {
  return new DataAgent();
}
