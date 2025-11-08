/**
 * @packageDocumentation Agent Interfaces for Orchestrator Communication
 *
 * This file defines the clean interfaces that the orchestrator agent uses
 * to communicate with specialized agents. Each agent has a distinct purpose
 * and should only be used for its specific function.
 */

// Generic types that work with any data structure, not hard-coded categories
export type CategoryId = string;

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

export interface DataSource {
  id: CategoryId;
  name: string;
  records: CategoryRecord[];
  schema?: unknown;
}

export interface QueryResult {
  categoryId: CategoryId;
  records: CategoryRecord[];
  totalCount: number;
  cached: boolean;
}

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

export interface CrossCategoryConnection {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  connectionType: string;
  strength: number;
  description: string;
}

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

export interface BusinessDataCatalogue {
  categories: CategoryInfo[];
  relationships: RelationshipDescription[];
  schemas: CategorySchema[];
  lastUpdated: string;
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  description: string;
  recordCount: number;
  schemaVersion: string;
  relationships: RelationshipDescription[];
}

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

export interface ClarificationInput {
  question: string;
  topic?: string;
  missingSignals?: string[];
  candidateAgents: string[];
}

export interface ClarificationResponse {
  prompt: string;
  knowledgeSnippets: KnowledgeSnippet[];
}

export interface KnowledgeSnippet {
  source: string;
  summary: string;
}

export interface ClarificationAgentInterface {
  clarify(input: ClarificationInput): Promise<ClarificationResponse>;
}

/**
 * ======================================
 * SHARED TYPES
 * ======================================
 */

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

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

export interface AgentRequest {
  agentType: "database" | "data" | "relevantDataManager" | "clarification";
  operation: string;
  parameters: unknown;
}

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
