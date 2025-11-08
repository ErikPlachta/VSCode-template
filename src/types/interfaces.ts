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
 *
 */
export interface CategoryRecord {
  id: string;
  [key: string]: unknown;
}

/**
 * ======================================
 *
 */
export interface DataSource {
  id: CategoryId;
  name: string;
  records: CategoryRecord[];
  schema?: unknown;
}

/**
 * Represents the result of a database query operation.
 *
 */
export interface QueryResult {
  categoryId: CategoryId;
  records: CategoryRecord[];
  totalCount: number;
  cached: boolean;
}

/**
 * Interface for database agents that handle data retrieval operations.
 *
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
 *
 */
export interface AnalysisInput {
  categoryId: CategoryId;
  records: CategoryRecord[];
  schemas?: CategorySchema[];
  relationships?: RelationshipDescription[];
}

/**
 * DataInsight interface.
 *
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
 * ExplorationPlan interface.
 *
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
 * ExplorationStep interface.
 *
 */
export interface ExplorationStep {
  title: string;
  description: string;
  recommendedCategory: CategoryId;
  hints: string[];
}

/**
 * CrossCategoryConnection interface.
 *
 */
export interface CrossCategoryConnection {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  connectionType: string;
  strength: number;
  description: string;
}

/**
 * DataAgentInterface interface.
 *
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
 *
 */
export interface CategorySchema {
  name: string;
  schema: unknown;
}

/**
 * RelationshipDescription interface.
 *
 */
export interface RelationshipDescription {
  name: string;
  description: string;
  targetCategory: CategoryId;
  viaField: string;
}

/**
 * BusinessDataCatalogue interface.
 *
 */
export interface BusinessDataCatalogue {
  categories: CategoryInfo[];
  relationships: RelationshipDescription[];
  schemas: CategorySchema[];
  lastUpdated: string;
}

/**
 * CategoryInfo interface.
 *
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
 * RelevantDataManagerInterface interface.
 *
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
 *
 */
export interface ClarificationInput {
  question: string;
  topic?: string;
  missingSignals?: string[];
  candidateAgents: string[];
}

/**
 * ClarificationResponse interface.
 *
 */
export interface ClarificationResponse {
  prompt: string;
  knowledgeSnippets: KnowledgeSnippet[];
}

/**
 * KnowledgeSnippet interface.
 *
 */
export interface KnowledgeSnippet {
  source: string;
  summary: string;
}

/**
 * ClarificationAgentInterface interface.
 *
 */
export interface ClarificationAgentInterface {
  clarify(input: ClarificationInput): Promise<ClarificationResponse>;
}

/**
 * ======================================
 *
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * TopicSearchResult interface.
 *
 */
export interface TopicSearchResult {
  categoryId: CategoryId;
  recordId: string;
  displayName: string;
  matchingFields: string[];
}

/**
 * ======================================
 *
 */
export interface AgentRequest {
  agentType: "database" | "data" | "relevantDataManager" | "clarification";
  operation: string;
  parameters: unknown;
}

/**
 * AgentResponse interface.
 *
 * @template T
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
 *
 */
export interface OrchestrationWorkflow {
  userQuery: string;
  classifiedIntent: string;
  requiredAgents: string[];
  agentRequests: AgentRequest[];
  agentResponses: AgentResponse[];
  finalResponse: string;
}
