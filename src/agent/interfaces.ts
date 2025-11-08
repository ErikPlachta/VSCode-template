/**
 * @packageDocumentation Agent Interfaces for Orchestrator Communication
 *
 * This file defines the clean interfaces that the orchestrator agent uses
 * to communicate with specialized agents. Each agent has a distinct purpose
 * and should only be used for its specific function.
 */

// Generic types that work with any data structure, not hard-coded categories
/**
 * Unique identifier for a business data category.
 * Used to reference specific categories across the agent system.
 */
export type CategoryId = string;

/**
 * Represents a generic record from any business data category.
 * Contains an id field and allows for additional dynamic properties.
 */
export interface CategoryRecord {
  id: string;
  [key: string]: unknown;
}

/**
 * ======================================
 * DATABASE AGENT INTERFACE
 * Purpose: Query data from external sources
 * Responsibility: Data retrieval only
 * ======================================
 */

/**
 * Represents a data source containing records from a specific category.
 * Used by database agents to provide structured access to category data.
 */
export interface DataSource {
  id: CategoryId;
  name: string;
  records: CategoryRecord[];
  schema?: unknown;
}

/**
 * Represents the result of a database query operation.
 * Contains the retrieved records along with metadata about the query execution.
 */
export interface QueryResult {
  categoryId: CategoryId;
  records: CategoryRecord[];
  totalCount: number;
  cached: boolean;
}

/**
 * Interface for database agents that handle data retrieval operations.
 * Provides methods to query and retrieve records from various data sources.
 */
export interface DatabaseAgentInterface {
  executeQuery(
    categoryId: CategoryId,
    criteria: Record<string, unknown>,
    options?: { useCache?: boolean; cacheKeyPrefix?: string }
  ): Promise<CategoryRecord[]>;
}

/**
 * ======================================
 * DATA AGENT INTERFACE
 * Purpose: Analyze data and generate insights
 * Responsibility: Data analysis only
 * ======================================
 */

/**
 * Input data structure for data analysis operations.
 * Contains the category data, records, and optional metadata needed for analysis.
 */
export interface AnalysisInput {
  categoryId: CategoryId;
  records: CategoryRecord[];
  schemas?: CategorySchema[];
  relationships?: RelationshipDescription[];
}

/**
 * Represents an insight generated from data analysis operations.
 * Contains information about patterns, anomalies, or other findings discovered in the data.
 */
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

/**
 * Represents a plan for exploring business data to answer a specific question.
 * Contains structured steps and recommended queries to guide data exploration.
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
 * Represents a single step in a data exploration plan.
 * Each step provides guidance for exploring a specific aspect of the business data.
 */
export interface ExplorationStep {
  title: string;
  description: string;
  recommendedCategory: CategoryId;
  hints: string[];
}

/**
 * Represents a connection between two different business data categories.
 * Used to describe relationships and their strength between categories in cross-category analysis.
 */
export interface CrossCategoryConnection {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  connectionType: string;
  strength: number;
  description: string;
}

/**
 * Interface for data agents that handle data analysis and insight generation operations.
 * Provides methods to analyze data, generate exploration plans, and discover connections between categories.
 */
export interface DataAgentInterface {
  analyzeData(input: AnalysisInput): Promise<DataInsight[]>;
  generateExplorationPlan(
    categoryId: CategoryId,
    question: string,
    availableData: AnalysisInput
  ): Promise<ExplorationPlan>;
  analyzeConnection(
    sourceData: AnalysisInput,
    targetData: AnalysisInput,
    relationship: RelationshipDescription
  ): Promise<CrossCategoryConnection>;
  searchData(keyword: string, data: AnalysisInput[]): TopicSearchResult[];
}

/**
 * ======================================
 * RELEVANT DATA MANAGER INTERFACE
 * Purpose: Manage business data schemas and metadata
 * Responsibility: Schema management and business context
 * ======================================
 */

/**
 * Represents the schema definition for a business data category.
 * Contains the name of the category and its schema structure.
 */
export interface CategorySchema {
  name: string;
  schema: unknown;
}

/**
 * Describes a relationship between business data categories.
 * Includes the relationship name, description, target category, and the field used for linking.
 */
export interface RelationshipDescription {
  name: string;
  description: string;
  targetCategory: CategoryId;
  viaField: string;
}

/**
 * Represents the catalogue of business data categories, their relationships, schemas, and last update timestamp.
 */
export interface BusinessDataCatalogue {
  categories: CategoryInfo[];
  relationships: RelationshipDescription[];
  schemas: CategorySchema[];
  lastUpdated: string;
}

/**
 * Represents metadata and relationship information for a business data category.
 * Includes category id, name, description, record count, schema version, and relationships.
 */
export interface CategoryInfo {
  id: CategoryId;
  name: string;
  description: string;
  recordCount: number;
  schemaVersion: string;
  relationships: RelationshipDescription[];
}

/**
 * Interface for managing business data schemas, metadata, and relationships.
 * Provides methods for retrieving category information, validating data, and accessing relationships.
 */
export interface RelevantDataManagerInterface {
  getBusinessDataCatalogue(): BusinessDataCatalogue;
  getCategoryInfo(categoryId: CategoryId): CategoryInfo;
  getCategorySchema(categoryId: CategoryId): CategorySchema[];
  validateCategoryData(
    categoryId: CategoryId,
    records: CategoryRecord[]
  ): ValidationResult;
  getRelationships(categoryId: CategoryId): RelationshipDescription[];
}

/**
 * ======================================
 * CLARIFICATION AGENT INTERFACE
 * Purpose: Handle ambiguous user requests and provide guidance
 * Responsibility: User guidance and query clarification
 * ======================================
 */

/**
 * Input structure for clarification agent requests.
 * Contains the user's question, optional topic, missing signals, and candidate agents.
 */
export interface ClarificationInput {
  question: string;
  topic?: string;
  missingSignals?: string[];
  candidateAgents: string[];
}

/**
 * Represents the response from the clarification agent.
 * Contains a prompt and knowledge snippets to guide the user.
 */
export interface ClarificationResponse {
  prompt: string;
  knowledgeSnippets: KnowledgeSnippet[];
}

/**
 * Represents a snippet of knowledge used for clarification purposes.
 * Contains the source of the knowledge and a summary of its content.
 */
export interface KnowledgeSnippet {
  source: string;
  summary: string;
}

/**
 * Interface for agents that handle clarification of ambiguous user requests.
 * Provides a method to clarify questions and return guidance or knowledge snippets.
 */
export interface ClarificationAgentInterface {
  clarify(input: ClarificationInput): Promise<ClarificationResponse>;
}

/**
 * ======================================
 * SHARED TYPES
 * ======================================
 */

/**
 * Represents the result of validating category data.
 * Indicates whether the data is valid, and provides lists of errors and warnings.
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Represents the result of a topic search operation.
 * Contains the category ID, record ID, display name, and matching fields.
 */
export interface TopicSearchResult {
  categoryId: CategoryId;
  recordId: string;
  displayName: string;
  matchingFields: string[];
}

/**
 * ======================================
 * ORCHESTRATOR COORDINATION TYPES
 * ======================================
 */

/**
 * Represents a request sent to an agent, specifying the agent type, operation, and parameters.
 */
export interface AgentRequest {
  agentType: "database" | "data" | "relevantDataManager" | "clarification";
  operation: string;
  parameters: unknown;
}

/**
 * Represents the response from an agent after performing an operation.
 *
 * Contains the success status, returned data, error message (if any), agent type, and operation performed.
 *
 * @template T The type of data returned by the agent.
 */
export interface AgentResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  agentType: string;
  operation: string;
}

/**
 * Orchestrator workflow for handling user requests:
 * 1. Parse user input and classify intent
 * 2. If ambiguous -> ClarificationAgent
 * 3. If data needed -> RelevantDataManagerAgent (for schemas/metadata)
 * 4. If query needed -> DatabaseAgent (for data retrieval)
 * 5. If analysis needed -> DataAgent (for insights)
 * 6. Coordinate results and respond to user
 */
export interface OrchestrationWorkflow {
  userQuery: string;
  classifiedIntent: string;
  requiredAgents: string[];
  agentRequests: AgentRequest[];
  agentResponses: AgentResponse[];
  finalResponse: string;
}
