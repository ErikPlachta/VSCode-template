/**
 * @file TypeScript types for individual agent configurations
 */

/**
 * Basic agent identity and metadata
 */
export interface AgentIdentity {
  id: string;
  name: string;
  version: string;
  description: string;
}

/**
 * Intent configuration for orchestration
 */
export interface IntentConfig {
  name: string;
  description: string;
  targetAgent: string;
  signals?: string[];
}

/**
 * Text processing configuration
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
 */
export interface EscalationConfig {
  conditions: string[];
  fallbackAgent: string;
  maxRetries: number;
  vaguePhrases?: string[];
}

/**
 * Orchestration-specific configuration
 */
export interface OrchestrationConfig {
  intents?: Record<string, IntentConfig>;
  textProcessing?: TextProcessingConfig;
  escalation?: EscalationConfig;
}

/**
 * Runtime execution configuration
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
 */
export interface UserFacingConfig {
  friendlyDescription?: string;
  useWhen?: string[];
  exampleQueries?: string[];
  helpText?: string;
}

/**
 * Performance configuration
 */
export interface PerformanceConfig {
  expectedResponseTime: number;
  memoryUsage: "low" | "medium" | "high";
  complexity: "low" | "medium" | "high";
}

/**
 * Error handling configuration
 */
export interface ErrorHandlingConfig {
  retryStrategy: "none" | "fixed" | "exponential";
  maxRetries: number;
  fallbackAgent?: string;
}

/**
 * Monitoring configuration
 */
export interface MonitoringConfig {
  metricsToTrack: string[];
  alertThresholds: Record<string, number>;
}

/**
 * Application-facing metadata
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
 * This replaces the JSON-based approach with full type safety and documentation.
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

  constructor(config: AgentConfigDefinition) {
    this.config = config;
  }

  /**
   * Get public-facing configuration (user and some application details)
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
   * Get complete configuration (private method for internal use)
   */
  protected _getConfig(): AgentConfigDefinition {
    return this.config;
  }

  /**
   * Get execution configuration
   */
  public getExecutionConfig(): ExecutionConfig | undefined {
    return this.config.execution;
  }

  /**
   * Get user-facing configuration
   */
  public getUserFacingConfig(): UserFacingConfig | undefined {
    return this.config.userFacing;
  }

  /**
   * Get application-facing configuration
   */
  public getApplicationFacingConfig(): ApplicationFacingConfig | undefined {
    return this.config.applicationFacing;
  }

  /**
   * Get configuration schema ID
   */
  public getConfigId(): string {
    return this.config.$configId;
  }
}
