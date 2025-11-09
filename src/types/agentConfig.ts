/**
 * @packageDocumentation agentConfig definitions for types module.
 * Central typed structures describing agent identities, intent routing,
 * scoring parameters, escalation, profiling, and composite configuration.
 */
/**
 * AgentIdentity interface.
 */
export interface AgentIdentity {
  id: string;
  name: string;
  version: string;
  description: string;
}

/**
 * Intent configuration for orchestration
 *
 */
export interface IntentConfig {
  name: string;
  description: string;
  targetAgent: string;
  signals?: string[];
}

/**
 * Text processing configuration
 *
 */
export interface TextProcessingConfig {
  stopWords: string[];
  minimumKeywordLength: number;
  scoringWeights: {
    signalMatch: number;
    focusMatch: number;
    promptStarterMatch: number;
  };
}

/**
 * Escalation configuration
 *
 */
export interface EscalationConfig {
  conditions: string[];
  fallbackAgent: string;
  maxRetries: number;
  vaguePhrases?: string[];
}

/**
 * Orchestration-specific configuration
 *
 */
export interface OrchestrationConfig {
  intents?: Record<string, IntentConfig>;
  textProcessing?: TextProcessingConfig;
  escalation?: EscalationConfig;
  messages?: {
    noIntentDetected?: string;
    needMoreContext?: string;
    questionTooVague?: string;
    missingSignalsHint?: string[];
    errorOccurred?: string;
    summaries?: {
      metadata?: string;
      records?: string;
      insight?: string;
      clarification?: string;
      defaultTopic?: string;
    };
    guidance?: {
      metadata?: string;
      recordsConnections?: string;
      recordsFiltering?: string;
      insightPlan?: string[];
      insightOverview?: string;
      insightRecommendations?: string;
      clarificationPrompt?: string;
    };
  };
}

/**
 * Runtime execution configuration
 *
 */
export interface ExecutionConfig {
  priority: "high" | "medium" | "low";
  timeout: number;
  cacheEnabled?: boolean;
  retryStrategy?: "none" | "fixed" | "exponential";
  maxRetries?: number;
}

/**
 * User-facing metadata
 *
 */
export interface UserFacingConfig {
  friendlyDescription?: string;
  useWhen?: string[];
  exampleQueries?: string[];
  helpText?: string;
}

/**
 * Performance configuration
 *
 */
export interface PerformanceConfig {
  expectedResponseTime: number;
  memoryUsage: "low" | "medium" | "high";
  complexity: "low" | "medium" | "high";
}

/**
 * Error handling configuration
 *
 */
export interface ErrorHandlingConfig {
  retryStrategy: "none" | "fixed" | "exponential";
  maxRetries: number;
  fallbackAgent?: string;
}

/**
 * Monitoring configuration
 *
 */
export interface MonitoringConfig {
  metricsToTrack: string[];
  alertThresholds: Record<string, number>;
}

/**
 * Application-facing metadata
 *
 */
export interface ApplicationFacingConfig {
  technicalDescription?: string;
  dependencies?: string[];
  capabilities?: string[];
  performance?: PerformanceConfig;
  errorHandling?: ErrorHandlingConfig;
  monitoring?: MonitoringConfig;
}

/**
 * Database agent-specific configuration
 *
 */
export interface DatabaseConfig {
  fieldAliases: Record<string, Record<string, string>>;
  performance: {
    caching: {
      enabledByDefault: boolean;
      defaultKeyPrefix: string;
      maxCacheEntries: number;
      cacheTTL: number;
    };
    limits: {
      queryTimeout: number;
      maxResultSize: number;
      maxJoinDepth: number;
    };
  };
  validation: {
    schemaValidation: {
      enableStrictValidation: boolean;
      allowUnknownFields: boolean;
      autoTransformAliases: boolean;
    };
    integrityChecks: {
      validateRelationships: boolean;
      checkMissingReferences: boolean;
      warnOnSchemaIssues: boolean;
    };
  };
  operations: {
    filtering: {
      operators: string[];
      caseInsensitiveStrings: boolean;
      enableFuzzyMatching: boolean;
    };
    joins: {
      supportedJoinTypes: string[];
      autoDiscoverRelationships: boolean;
      maxJoinRecords: number;
    };
    aggregation: {
      functions: string[];
      enableGroupBy: boolean;
      maxGroups: number;
    };
  };
}

/**
 * Data agent-specific configuration
 *
 */
export interface DataConfig {
  analysis: {
    enableInsightGeneration: boolean;
    maxInsightDepth: number;
    crossCategoryAnalysis: boolean;
    insightConfidenceThreshold?: number;
    maxInsightsPerAnalysis?: number;
    insightCategories?: string[];
    enableInsightRanking?: boolean;
    highlightRecordLimit?: number;
    maxSupportingRecords?: number;
    maxExampleHints?: number;
  };
  quality?: {
    missingFieldThreshold?: number;
    anomalyDetectionEnabled?: boolean;
    minimumRecordCount?: number;
    fieldCompletenessThreshold?: number;
  };
  exploration: {
    maxExplorationSteps: number;
    enableAutomaticPlanGeneration: boolean;
    planComplexityLimit: "low" | "medium" | "high";
    includeExampleQueries?: boolean;
    includeDateValidationSteps?: boolean;
    explorationPriorities?: string[];
    enableDynamicPlanAdjustment?: boolean;
    minSupportingResources?: number;
  };
  relationships: {
    enableRelationshipMapping: boolean;
    maxRelationshipDepth: number;
    includeWeakRelationships: boolean;
    relationshipStrengthThreshold?: number;
    relationshipTypes?: string[];
    enableImpactAssessment?: boolean;
    maxRelationshipsPerAnalysis?: number;
  };
  search?: {
    maxResults?: number;
    enableFuzzyMatching?: boolean;
    searchTimeout?: number;
    minimumMatchScore?: number;
    enableCategoryFiltering?: boolean;
    prioritizeRecentResults?: boolean;
  };
  synthesis?: {
    enableTopicOverviews?: boolean;
    maxHighlightRecords?: number;
    includeValidationReports?: boolean;
    enableMultiSourceSynthesis?: boolean;
    synthesisConfidenceThreshold?: number;
  };
  performance?: {
    enableTopicOverviewCaching?: boolean;
    topicOverviewCacheTTL?: number;
    maxConcurrentAnalyses?: number;
    analysisTimeout?: number;
    enableParallelRelationshipMapping?: boolean;
    processingBatchSize?: number;
  };
}

/**
 * Clarification agent-specific configuration
 *
 */
export interface ClarificationConfig {
  guidance: {
    maxSuggestions: number;
    includeCategoryExamples: boolean;
    includeQueryTemplates: boolean;
    suggestAlternativePhrasings?: boolean;
    guidanceTypes?: string[];
    responseStyle?: {
      tone?: string;
      formality?: string;
      includeEncouragement?: boolean;
      maxResponseLength?: number;
    };
  };
  escalation: {
    escalationThreshold: number;
    fallbackStrategies: string[];
    maxClarificationRounds: number;
    suggestHumanSupportAfterMaxRounds?: boolean;
    clarificationTimeWindow?: number;
  };
  knowledgeBase: {
    enableKnowledgeSearch: boolean;
    maxKnowledgeSnippets: number;
    relevanceThreshold: number;
    enableKnowledgeRanking?: boolean;
    knowledgeSources?: string[];
    knowledgeSearchTimeout?: number;
  };
  routing?: {
    analyzeMissingSignals?: boolean;
    suggestAlternativeAgents?: boolean;
    maxCandidateAgents?: number;
    routingConfidenceThreshold?: number;
    includeAgentCapabilitySummaries?: boolean;
  };
  contextAnalysis?: {
    enableIntentAnalysis?: boolean;
    identifyMissingComponents?: boolean;
    suggestQueryStructure?: boolean;
    handleDomainTerminology?: boolean;
    contextConfidenceThreshold?: number;
  };
  performance?: {
    enableResponseCaching?: boolean;
    responseCacheTTL?: number;
    maxResponseTime?: number;
    enableParallelProcessing?: boolean;
    processingBatchSize?: number;
  };
}

/**
 * Relevant data manager-specific configuration
 *
 */
export interface RelevantDataManagerConfig {
  metadata: {
    enableSchemaValidation: boolean;
    enforceDataQuality: boolean;
    trackDataLineage: boolean;
    autoGenerateMetadata?: boolean;
    supportedCategories?: string[];
    requiredCategoryFiles?: Record<string, string>;
    requiredDirectories?: Record<string, string>;
    validateFolderStructure?: boolean;
  };
  caching: {
    enableSnapshotCaching: boolean;
    snapshotTTL: number;
    maxCachedSnapshots: number;
    cacheValidationResults?: boolean;
    validationCacheTTL?: number;
    enableRecordHashCaching?: boolean;
    cacheCleanupThreshold?: number;
  };
  validation: {
    strictModeEnabled: boolean;
    allowPartialValidation: boolean;
    validationTimeout: number;
    enableAjvValidation?: boolean;
    checkDuplicateSchemas?: boolean;
    validateRelationshipIntegrity?: boolean;
    checkOrphanedRecords?: boolean;
    validationWarningThreshold?: number;
  };
  schemaManagement?: {
    autoDetectSchemaChanges?: boolean;
    enableSchemaVersioning?: boolean;
    validationLibrary?: string;
    generateTypescriptTypes?: boolean;
    validateSchemaCompatibility?: boolean;
    maxSchemaFileSize?: number;
    supportedSchemaFormats?: string[];
  };
  relationships?: {
    enableAutoDiscovery?: boolean;
    validateReferences?: boolean;
    detectCircularReferences?: boolean;
    maxTraversalDepth?: number;
    buildRelationshipIndexes?: boolean;
    relationshipTypes?: string[];
  };
  dataManagement?: {
    enableAutoRefresh?: boolean;
    refreshInterval?: number;
    enableDataBackups?: boolean;
    backupRetentionDays?: number;
    validateOnLoad?: boolean;
    supportedImportFormats?: string[];
    maxImportFileSize?: number;
  };
  performance?: {
    enableParallelProcessing?: boolean;
    maxConcurrentOperations?: number;
    defaultOperationTimeout?: number;
    enableOperationCaching?: boolean;
    memoryOptimizationLevel?: string;
  };
}

/**
 * Complete TypeScript-based agent configuration definition.
 *
 */
export interface AgentConfigDefinition {
  /** Unique configuration schema identifier for validation and versioning */
  $configId: string;

  /** Basic agent identity and metadata */
  agent: AgentIdentity;

  /** Agent-specific configuration (varies by agent type) */
  orchestration?: OrchestrationConfig;
  database?: DatabaseConfig;
  data?: DataConfig;
  clarification?: ClarificationConfig;
  relevantDataManager?: RelevantDataManagerConfig;

  /** Runtime execution configuration */
  execution?: ExecutionConfig;

  /** User-facing metadata */
  userFacing?: UserFacingConfig;

  /** Application-facing metadata */
  applicationFacing?: ApplicationFacingConfig;

  /** Performance configuration */
  performance?: {
    enableResponseCaching?: boolean;
    responseCacheTTL?: number;
    maxResponseTime?: number;
    enableParallelProcessing?: boolean;
    processingBatchSize?: number;
    maxConcurrentOperations?: number;
    defaultOperationTimeout?: number;
    enableOperationCaching?: boolean;
    memoryOptimizationLevel?: string;
  };

  /** Telemetry configuration */
  telemetry?: {
    logQueries?: boolean;
    logPerformance?: boolean;
    logCacheStats?: boolean;
    slowQueryThreshold?: number;
    trackInsightMetrics?: boolean;
    trackRelationshipMetrics?: boolean;
    trackClarificationSuccess?: boolean;
    trackUserSatisfaction?: boolean;
    trackDataQuality?: boolean;
    trackSchemaValidation?: boolean;
    trackRelationshipIntegrity?: boolean;
  };

  /** Error handling configuration */
  errorHandling?: {
    maxRetries?: number;
    retryDelay?: number;
    exponentialBackoff?: boolean;
    fallbackOnCacheError?: boolean;
    fallbackToSimpleAnalysis?: boolean;
    allowPartialAnalysis?: boolean;
    gracefulRelationshipHandling?: boolean;
    fallbackToGenericHelp?: boolean;
    allowPartialClarification?: boolean;
    gracefulKnowledgeFailure?: boolean;
    allowPartialDataLoad?: boolean;
    gracefulSchemaFailure?: boolean;
    fallbackToCachedData?: boolean;
    skipCorruptedRecords?: boolean;
  };
}

/**
 * Complete individual agent configuration (legacy - for JSON compatibility)
 *
 */
export interface IndividualAgentConfig {
  agent: AgentIdentity;
  orchestration?: OrchestrationConfig;
  execution: ExecutionConfig;
  userFacing?: UserFacingConfig;
  applicationFacing?: ApplicationFacingConfig;
}

/**
 * Base class for agent configuration management
 */
export abstract class BaseAgentConfig {
  protected config: AgentConfigDefinition;
  // Runtime, non-persistent overrides. Local overrides take precedence over global when both present.
  private overridesLocal: Record<string, unknown> = {};
  private overridesGlobal: Record<string, unknown> = {};

  /**
   * Initialize the base agent configuration wrapper.
   *
   * @param {AgentConfigDefinition} config - Fully-typed configuration object for the agent.
   */
  constructor(config: AgentConfigDefinition) {
    this.config = config;
  }

  /**
   * Retrieve a configuration value by a dot-delimited path, with runtime overrides applied.
   *
   * The path is resolved relative to the root AgentConfigDefinition (e.g.,
   * "orchestration.escalation.vaguePhrases" or "database.performance.caching.enabledByDefault").
   * Local overrides have higher precedence than global overrides, both override the base config.
   *
   * @param {string} path - Dot-delimited key path within the configuration object.
   * @returns {unknown} Resolved configuration value, or undefined when not found.
   */
  public getConfigItem<T = unknown>(path: string): T | undefined {
    const fromLocal = this.deepGet<T>(this.overridesLocal, path);
    if (fromLocal !== undefined) return fromLocal;
    const fromGlobal = this.deepGet<T>(this.overridesGlobal, path);
    if (fromGlobal !== undefined) return fromGlobal;
    return this.deepGet<T>(
      this.config as unknown as Record<string, unknown>,
      path
    );
  }

  /**
   * Set a runtime override for a configuration value.
   *
   * This does not persist to disk; it is intended for live adjustments (e.g., UI or chat-driven changes).
   *
   * @param {string} path - Dot-delimited key path to set.
   * @param {unknown} value - New value for the configuration item.
   * @param {"local"|"global"} [env="local"] - Scope for the override; local has higher precedence than global.
   * @returns {void}
   */
  public setConfigItem(
    path: string,
    value: unknown,
    env: "local" | "global" = "local"
  ): void {
    const target = env === "local" ? this.overridesLocal : this.overridesGlobal;
    // Setting undefined/null is treated as clearing the override so base/global resolution can fall back.
    if (value === undefined || value === null) {
      this.deepDelete(target, path);
      return;
    }
    this.deepSet(target, path, value);
  }

  /**
   * Verify a list of required configuration paths are present after overrides are applied.
   *
   * @param {readonly string[]} requiredPaths - Collection of dot-delimited paths that must exist.
   * @returns {{ missing: string[]; passed: boolean }} Result indicating which required items are missing.
   */
  public confirmConfigItems(requiredPaths: readonly string[]): {
    missing: string[];
    passed: boolean;
  } {
    const missing: string[] = [];
    for (const p of requiredPaths) {
      const v = this.getConfigItem(p);
      if (v === undefined || v === null) missing.push(p);
    }
    return { missing, passed: missing.length === 0 };
  }

  /**
   * Retrieve a configuration value using a {@link ConfigDescriptor} reference.
   *
   * @param {ConfigDescriptor} descriptor - Descriptor describing the config item.
   * @returns {unknown} Resolved configuration value or undefined when not found.
   */
  public getByDescriptor<T = unknown>(
    descriptor: ConfigDescriptor
  ): T | undefined {
    return this.getConfigItem<T>(descriptor.path);
  }

  /**
   * Set a runtime override for a configuration item given its {@link ConfigDescriptor}.
   *
   * @param {ConfigDescriptor} descriptor - Descriptor describing the config item.
   * @param {unknown} value - New value to assign.
   * @param {"local"|"global"} [env="local"] - Override environment scope.
   */
  public setByDescriptor(
    descriptor: ConfigDescriptor,
    value: unknown,
    env: "local" | "global" = "local"
  ): void {
    this.setConfigItem(descriptor.path, value, env);
  }

  /**
   * Verify a descriptor's declared verifyPaths (or its own path if none provided) exist.
   *
   * @param {ConfigDescriptor} descriptor - Descriptor whose paths will be validated.
   * @returns {{ passed: boolean; missing: string[] }} Verification outcome.
   */
  public verifyDescriptor(descriptor: ConfigDescriptor): {
    passed: boolean;
    missing: string[];
  } {
    const paths =
      descriptor.verifyPaths && descriptor.verifyPaths.length > 0
        ? descriptor.verifyPaths
        : [descriptor.path];
    const { missing, passed } = this.confirmConfigItems(paths);
    return { missing, passed };
  }

  /**
   * Get a sanitized, public-facing view of the configuration suitable for diagnostics and UI.
   *
   * @returns {Partial<AgentConfigDefinition>} Minimal public configuration snapshot.
   */
  public getConfig(): Partial<AgentConfigDefinition> {
    return {
      $configId: this.config.$configId,
      agent: this.config.agent,
      userFacing: this.config.userFacing,
      applicationFacing: {
        technicalDescription:
          this.config.applicationFacing?.technicalDescription,
        capabilities: this.config.applicationFacing?.capabilities,
        performance: this.config.applicationFacing?.performance,
      },
    };
  }

  /**
   * Get complete configuration (private method for internal use).
   *
   * @returns {AgentConfigDefinition} Full underlying configuration object.
   */
  protected _getConfig(): AgentConfigDefinition {
    return this.config;
  }

  /**
   * Get execution configuration.
   *
   * @returns {ExecutionConfig | undefined} Execution settings when defined.
   */
  public getExecutionConfig(): ExecutionConfig | undefined {
    return this.config.execution;
  }

  /**
   * Get user-facing configuration.
   *
   * @returns {UserFacingConfig | undefined} User documentation and examples when defined.
   */
  public getUserFacingConfig(): UserFacingConfig | undefined {
    return this.config.userFacing;
  }

  /**
   * Get application-facing configuration.
   *
   * @returns {ApplicationFacingConfig | undefined} Operational details for internal use.
   */
  public getApplicationFacingConfig(): ApplicationFacingConfig | undefined {
    return this.config.applicationFacing;
  }

  /**
   * Get configuration schema ID.
   *
   * @returns {string} Canonical configuration identifier.
   */
  public getConfigId(): string {
    return this.config.$configId;
  }

  // -------------------------
  // Internal helpers
  // -------------------------

  /**
   * Safely retrieve a nested value by path from the given object.
   *
   * @param {Record<string, unknown>} obj - Source object.
   * @param {string} path - Dot-delimited path.
   * @returns {unknown} Value at the given path, or undefined if not present.
   */
  private deepGet<T = unknown>(
    obj: Record<string, unknown>,
    path: string
  ): T | undefined {
    const parts = path.split(".").filter(Boolean);
    let cur: unknown = obj;
    for (const key of parts) {
      if (typeof cur !== "object" || cur === null) return undefined;
      const next = (cur as Record<string, unknown>)[key];
      if (next === undefined) return undefined;
      cur = next;
    }
    return cur as T;
  }

  /**
   * Safely assign a nested value by path on the given object, creating containers as needed.
   *
   * @param {Record<string, unknown>} obj - Target object to mutate.
   * @param {string} path - Dot-delimited path.
   * @param {unknown} value - Value to set.
   * @returns {void}
   */
  private deepSet(
    obj: Record<string, unknown>,
    path: string,
    value: unknown
  ): void {
    const parts = path.split(".").filter(Boolean);
    let cur: Record<string, unknown> = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const key = parts[i]!;
      if (typeof cur[key] !== "object" || cur[key] === null) {
        cur[key] = {} as unknown as Record<string, unknown>;
      }
      cur = cur[key] as Record<string, unknown>;
    }
    cur[parts[parts.length - 1]!] = value as unknown;
  }

  /**
   * Safely delete a nested value by path from the given object. Prunes empty containers.
   *
   * @param {Record<string, unknown>} obj - Target object to mutate.
   * @param {string} path - Dot-delimited path to delete.
   * @returns {void}
   */
  private deepDelete(obj: Record<string, unknown>, path: string): void {
    const parts = path.split(".").filter(Boolean);
    const stack: Array<[Record<string, unknown>, string]> = [];
    let cur: Record<string, unknown> | undefined = obj;
    for (let i = 0; i < parts.length - 1; i++) {
      const key = parts[i]!;
      const next = cur[key];
      if (typeof next !== "object" || next === null) {
        return; // nothing to delete
      }
      stack.push([cur, key]);
      cur = next as Record<string, unknown>;
    }
    if (cur) {
      delete cur[parts[parts.length - 1]!];
    }
    // prune empty objects from the bottom up
    for (let i = stack.length - 1; i >= 0; i--) {
      const [parent, key] = stack[i]!;
      const child = parent[key];
      if (
        typeof child === "object" &&
        child !== null &&
        Object.keys(child as Record<string, unknown>).length === 0
      ) {
        delete parent[key];
      }
    }
  }
}

// -------------------------
// Runtime agent types (centralized)
// -------------------------

/** Identifier for a generic category or data source. */
export type CategoryId = string;

/** Generic record model allowing arbitrary fields. */
export interface CategoryRecord {
  id: string;
  [key: string]: unknown;
}

// Orchestrator runtime types

/** List of supported orchestration intents (from configuration). */
export type OrchestratorIntent = string;

/** Classification metadata returned before executing a task. */
export interface OrchestratorClassification {
  intent: OrchestratorIntent;
  rationale: string;
  escalationPrompt?: string;
  matchedSignals?: string[];
  missingSignals?: string[];
}

/** Input supplied when asking the orchestrator to fulfil a task. */
export interface OrchestratorInput {
  topic?: string;
  question: string;
  criteria?: Record<string, unknown>;
}

/** Result of orchestrating a question across the available agents. */
export interface OrchestratorResponse {
  intent: OrchestratorIntent;
  agent: string;
  summary: string;
  rationale: string;
  payload: unknown;
  markdown: string;
}

// Clarification agent runtime types
import type { KnowledgeHit } from "@mcp/knowledgeBase";

/** Input parameters for the clarification agent. */
export interface ClarificationAgentInput {
  question: string;
  topic?: string;
  missingSignals?: string[];
  candidateAgents: string[];
}

/** Response from the clarification agent containing guidance and context. */
export interface ClarificationResponse {
  prompt: string;
  knowledgeSnippets: KnowledgeHit[];
}

// Data agent runtime types

/** Schema definition for a category. */
export interface CategorySchema {
  name: string;
  schema: unknown;
}

/** Description of a relationship between two categories. */
export interface RelationshipDescription {
  name: string;
  description: string;
  targetCategory: CategoryId;
  viaField: string;
}

/** Input payload used for data analysis operations. */
export interface AnalysisInput {
  categoryId: CategoryId;
  records: CategoryRecord[];
  schemas?: CategorySchema[];
  relationships?: RelationshipDescription[];
}

/** Insight produced by analysis over data records. */
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

/** Single step within a generated exploration plan. */
export interface ExplorationStep {
  title: string;
  description: string;
  recommendedCategory: CategoryId;
  hints: string[];
}

/** Structured plan for guiding a data exploration workflow. */
export interface ExplorationPlan {
  topic: string;
  question: string;
  steps: ExplorationStep[];
  recommendedQueries: string[];
  supportingResources: Array<{ categoryId: CategoryId; ids: string[] }>;
}

/** Match result from searching across topic records. */
export interface TopicSearchResult {
  categoryId: CategoryId;
  recordId: string;
  displayName: string;
  matchingFields: string[];
}

/** Aggregated description of a connection between categories. */
export interface CrossCategoryConnection {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  connectionType: string;
  strength: number;
  description: string;
}

// Database agent runtime types

/** Definition for a data source the database agent can query. */
export interface DataSource {
  id: CategoryId;
  name: string;
  records: CategoryRecord[];
  schema?: unknown;
  fieldAliases?: Record<string, string>;
}

/** Metadata for the result of executing a query. */
export interface QueryResult {
  categoryId: CategoryId;
  records: CategoryRecord[];
  totalCount: number;
  cached: boolean;
}

/** Optional knobs controlling query execution behavior. */
export interface QueryOptions {
  useCache?: boolean;
  cacheKeyPrefix?: string;
}

// -------------------------
// Descriptor helper (for agent config UIs)
// -------------------------

/** Descriptor describing a configurable item available on an agent. */
export interface ConfigDescriptor {
  name: string;
  path: string;
  type: string;
  visibility: "public" | "private";
  verifyPaths?: string[];
}

/**
 * Create a descriptor map from a list of descriptor entries.
 *
 * @param {Array<[string, ConfigDescriptor]>} entries - Tuples of key and descriptor metadata.
 * @returns {Record<string, ConfigDescriptor>} Normalized descriptor map.
 */
export function createDescriptorMap(
  entries: Array<[string, ConfigDescriptor]>
): Record<string, ConfigDescriptor> {
  return Object.fromEntries(entries);
}
