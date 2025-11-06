/**
 * @fileoverview High-level data agent that reasons about the relationships
 * between business categories and produces insights that orchestration logic
 * can feed to other MCP tools.
 */

import { DatabaseAgent } from "./databaseAgent";
import {
  CategoryId,
  CategoryRecord,
  CategorySchema,
  CategorySnapshot,
  ExampleDataset,
  PythonTypeDefinition,
  RelationshipDescription,
  RelevantDataManagerAgent,
  RemoteQueryBlueprint
} from "./relevantDataManagerAgent";

/** Summary of a topic including schemas, examples, and queries. */
export interface TopicOverview {
  snapshot: CategorySnapshot;
  relationships: RelationshipDescription[];
  schemas: CategorySchema[];
  pythonTypes: PythonTypeDefinition[];
  examples: ExampleDataset[];
  queries: RemoteQueryBlueprint[];
  highlightRecords: CategoryRecord[];
}

/** Mapping of a record's connections to other categories. */
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

/** A plan that helps a user explore or solve a problem. */
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

/** Individual step inside an exploration plan. */
export interface ExplorationStep {
  title: string;
  description: string;
  recommendedCategory: CategoryId;
  hints: string[];
}

/** Result returned when searching the dataset for a keyword. */
export interface TopicSearchResult {
  categoryId: CategoryId;
  recordId: string;
  displayName: string;
  matchingFields: string[];
}

/** Result describing connections between two topics via a specific record. */
export interface CrossTopicConnection {
  sourceRecord: CategoryRecord;
  targetCategory: CategoryId;
  relationship: string;
  relatedRecords: CategoryRecord[];
}

/** Agent that understands data relationships between categories. */
export class DataAgent {
  private readonly manager: RelevantDataManagerAgent;
  private readonly database: DatabaseAgent;

  constructor(manager?: RelevantDataManagerAgent, databaseAgent?: DatabaseAgent) {
    this.manager = manager ?? new RelevantDataManagerAgent();
    this.database = databaseAgent ?? new DatabaseAgent(this.manager);
  }

  /** Summarise a topic including schema references and highlight data. */
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

  /** Map the connections from a given record to other categories. */
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

  /** Build an exploration plan for answering a specific user question. */
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

  /** Run a keyword search across every category. */
  search(keyword: string): TopicSearchResult[] {
    return this.manager.searchAcrossCategories(keyword).map((match) => ({
      categoryId: match.categoryId,
      recordId: match.record.id,
      displayName: this.getRecordDisplayName(match.record),
      matchingFields: match.matchingFields
    }));
  }

  /** Access to the underlying database agent for orchestration workflows. */
  getDatabaseAgent(): DatabaseAgent {
    return this.database;
  }

  /** Compose supporting resource references for a category. */
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

  /** Determine a consistent display name for a record. */
  private getRecordDisplayName(record: CategoryRecord): string {
    return (
      (typeof record.name === "string" && record.name) ||
      (typeof record.title === "string" && record.title) ||
      String(record.id)
    );
  }
}

export function createDataAgent(): DataAgent {
  return new DataAgent();
}
