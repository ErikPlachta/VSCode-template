/**
 * @packageDocumentation
 * Type definitions for `agentConfig` used across the application.
 *
 * This file defines all structures related to agent identity, routing,
 * scoring, profiling, escalation logic, and composite configuration.
 *
 * @remarks
 * ### Developer & LLM Instructions:
 * - This is the **single source of truth** for all agent configuration types.
 * - Prefer placing comprehensive TSDoc comments here, rather than duplicating
 *   them in `agent.config.ts`.
 * - Add `@example` blocks to definitions where meaningful to clarify usage.
 * - Use `/** ... *\/` inline docblocks directly above each property.
 * - Avoid redundancy; focus on clarity and completeness in type definitions.
 * - Comments in `agent.config.ts` should be minimal and not diverge from this.
 *
 * @example
 * ```ts
 * const agent: AgentIdentity = {
 *   id: "comm-agent",
 *   name: "Communications Agent",
 *   version: "1.0.0",
 *   description: "Handles formatting of outbound user-facing messages."
 * };
 * ```
 *
 * @see [TSDoc Main Reference](https://tsdoc.org)
 * @see [Using TSDoc](https://tsdoc.org/pages/intro/using_tsdoc/)
 * @see [TypeScript JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
 */

/**
 * Basic identity and human-readable metadata for an agent.
 *
 * @example
 * const identity: AgentIdentity = {
 *   id: "communication-agent",
 *   name: "Communication Agent",
 *   version: "1.0.0",
 *   description: "Formats responses from agents into user-friendly messages",
 * };
 */
export interface AgentIdentity {
  /**
   * Unique agent identifier used in routing and logging.
   */
  id: string;

  /**
   * Human-readable name of the agent.
   */
  name: string;

  /**
   * Semantic version of the agent configuration.
   */
  version: string;

  /**
   * Comprehensive description of the agent's purpose and capabilities.
   */
  description: string;
}

/**
 * Intent configuration for the Orchestrator routing system.
 *
 * Associates a named intent with a target agent and optional detection signals.
 *
 * @example
 * const classifyIntent: IntentConfig = {
 *   name: "fetch-metadata",
 *   description: "Retrieve category metadata and schemas",
 *   targetAgent: "data-agent",
 *   signals: ["schema", "fields", "metadata"],
 * };
 */
export interface IntentConfig {
  /* Unique name of the intent */
  name: string;
  /* Description of the intent's purpose */
  description: string;
  /* Identifier of the agent to handle this intent */
  targetAgent: string;
  /* Optional array of keywords/signals for intent detection */
  signals?: string[];
}

/**
 * Text processing configuration for extracting signals and keywords.
 *
 * @example
 * const textCfg: TextProcessingConfig = {
 *   stopWords: ["the", "a", "an"],
 *   minimumKeywordLength: 3,
 *   scoringWeights: {
 *     signalMatch: 0.6,
 *     focusMatch: 0.3,
 *     promptStarterMatch: 0.1,
 *   },
 * };
 */
export interface TextProcessingConfig {
  /* List of common stop words to ignore */
  stopWords: string[];
  /* Minimum length for valid keywords */
  minimumKeywordLength: number;
  /* Weights for different keyword matching criteria */
  scoringWeights: {
    /* Weight for signal match */
    signalMatch: number;
    /* Weight for focus match */
    focusMatch: number;
    /* Weight for prompt starter match */
    promptStarterMatch: number;
  };
}

/**
 * Escalation configuration controlling retries and fallback behavior.
 *
 * @example
 * const esc: EscalationConfig = {
 *   conditions: ["low-confidence", "missing-signals"],
 *   fallbackAgent: "clarification-agent",
 *   maxRetries: 1,
 *   vaguePhrases: ["help", "not sure"],
 * };
 */
export interface EscalationConfig {
  conditions: string[];
  fallbackAgent: string;
  maxRetries: number;
  vaguePhrases?: string[];
}

/**
 * Orchestration configuration: intents, text handling, escalation, and messages.
 *
 * @property {Record<string, IntentConfig>} [intents] - Mapping of intent names to their configurations
 * @property {TextProcessingConfig} [textProcessing] - Configuration for text signal extraction
 * @property {EscalationConfig} [escalation] - Configuration for escalation and fallback behavior
 * @property {object} [messages] - Customizable messages for various orchestration scenarios
 *
 * @example
 * const orchConfig: OrchestrationConfig = {
 *   intents: {
 *     "fetch-metadata": {
 *       name: "fetch-metadata",
 *       description: "Retrieve category metadata and schemas",
 *       targetAgent: "data-agent",
 *       signals: ["schema", "fields", "metadata"],
 *     },
 *   },
 *   textProcessing: {
 *     stopWords: ["the", "a", "an"],
 *     minimumKeywordLength: 3,
 *     scoringWeights: {
 *       signalMatch: 0.6,
 *       focusMatch: 0.3,
 *       promptStarterMatch: 0.1,
 *     },
 *   },
 *   escalation: {
 *     conditions: ["low-confidence", "missing-signals"],
 *     fallbackAgent: "clarification-agent",
 *     maxRetries: 1,
 *     vaguePhrases: ["help", "not sure"],
 *   },
 *   messages: {
 *     noIntentDetected: "I'm not sure how to help with that.",
 *     needMoreContext: "Could you provide more details?",
 *     questionTooVague: "Your question seems too broad.",
 *     missingSignalsHint: [
 *       "Try including specific keywords.",
 *       "Provide more context about what you're looking for.",
 *     ],
 *     errorOccurred: "Something went wrong while processing your request.",
 *     summaries: {
 *       metadata: "Here's the metadata I found.",
 *       records: "Here are the records matching your query.",
 *       insight: "Here are some insights based on the data.",
 *       clarification: "I need some clarification to proceed.",
 *       defaultTopic: "Here's what I found on that topic.",
 *     },
 *     guidance: {
 *       metadata: "You can ask about specific categories or fields.",
 *       recordsConnections: "Try asking about relationships between categories.",
 *       recordsFiltering: "You can filter records by specific criteria.",
 *       insightPlan: [
 *         "Consider exploring related categories.",
 *         "Look for trends over time.",
 *         "Analyze key metrics for deeper insights.",
 *       ],
 *       insightOverview: "Here's an overview of the insights generated.",
 *       insightRecommendations: "Based on the insights, consider these actions.",
 *       clarificationPrompt: "Could you clarify what you're looking for?",
 *     },
 *   },
 * };
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
 * Runtime execution configuration for an agent.
 *
 * @property {"high" | "medium" | "low"} priority - Execution priority level
 * @property {number} timeout - Maximum execution time in milliseconds
 * @property {boolean} [cacheEnabled] - Whether caching is enabled for this agent
 * @property {"none" | "fixed" | "exponential"} [retryStrategy] - Strategy for retrying failed operations
 * @property {number} [maxRetries] - Maximum number of retry attempts
 * @property {string} [fallbackAgent] - Identifier of the fallback agent to use on repeated failures
 *
 * @example
 * const exec: ExecutionConfig = {
 *   priority: "high",
 *   timeout: 8000,
 *   cacheEnabled: true,
 *   retryStrategy: "exponential",
 *   maxRetries: 2,
 * };
 */
export interface ExecutionConfig {
  priority: "high" | "medium" | "low";
  timeout: number;
  cacheEnabled?: boolean;
  retryStrategy?: "none" | "fixed" | "exponential";
  maxRetries?: number;
}

/**
 * User-facing documentation and guidance shown in help/UX.
 *
 * Prefer adding examples here instead of inline comments in configs.
 *
 * @property {string} [friendlyDescription] - Simple description of the agent's purpose for users
 * @property {string[]} [useWhen] - List of scenarios when users should use this agent
 * @property {string[]} [exampleQueries] - Example queries users can ask this agent
 * @property {string} [helpText] - Detailed help text shown to users about the agent's capabilities
 *
 * @example
 * const userFacing: UserFacingConfig = {
 *   friendlyDescription: "Analyze relationships and summarize insights.",
 *   useWhen: ["Find connections", "Summarize data"],
 *   exampleQueries: [
 *     "Show connections between categories",
 *     "Summarize recent changes across datasets",
 *   ],
 * };
 */
export interface UserFacingConfig {
  friendlyDescription?: string;
  useWhen?: string[];
  exampleQueries?: string[];
  helpText?: string;
}

/**
 * Static performance profile hints for docs/diagnostics.
 *
 * @property {number} expectedResponseTime - Expected response time in milliseconds
 * @property {"low" | "medium" | "high"} memoryUsage - Expected memory usage profile
 * @property {"low" | "medium" | "high"} complexity - Expected computational complexity
 *
 * @example
 * const perf: PerformanceConfig = {
 * expectedResponseTime: 5000,
 * memoryUsage: "medium",
 * complexity: "high",
 * };
 */
export interface PerformanceConfig {
  expectedResponseTime: number;
  memoryUsage: "low" | "medium" | "high";
  complexity: "low" | "medium" | "high";
}

/**
 * Error handling preferences for an agent.
 *
 * @property {"none" | "fixed" | "exponential"} retryStrategy - Strategy for retrying failed operations
 * @property {number} maxRetries - Maximum number of retry attempts
 * @property {string} [fallbackAgent] - Identifier of the fallback agent to use on repeated failures
 *
 * @example
 * const errorHandling: ErrorHandlingConfig = {
 * retryStrategy: "exponential",
 * maxRetries: 3,
 * };
 */
export interface ErrorHandlingConfig {
  retryStrategy: "none" | "fixed" | "exponential";
  maxRetries: number;
  fallbackAgent?: string;
}

/**
 * Monitoring/telemetry configuration for an agent.
 *
 * @property {string[]} metricsToTrack - List of performance metrics to monitor
 * @property {Record<string, number>} alertThresholds - Thresholds for triggering alerts on specific metrics
 *
 * @example
 * const monitoring: MonitoringConfig = {
 * metricsToTrack: ["responseTime", "errorRate"],
 * alertThresholds: {
 * responseTime: 2000,
 * errorRate: 5,
 * },
 * };
 */
export interface MonitoringConfig {
  metricsToTrack: string[];
  alertThresholds: Record<string, number>;
}

/**
 * Technical/application-facing metadata for operators and docs.
 *
 * @property {string} [technicalDescription] - Detailed technical description of the agent
 * @property {string[]} [dependencies] - List of other agents or services this agent depends on
 * @property {string[]} [capabilities] - List of key capabilities provided by this agent
 * @property {PerformanceConfig} [performance] - Performance profile configuration
 * @property {ErrorHandlingConfig} [errorHandling] - Error handling preferences
 * @property {MonitoringConfig} [monitoring] - Monitoring and telemetry configuration
 *
 * @example
 * const appFacing: ApplicationFacingConfig = {
 * technicalDescription: "This agent handles data analysis tasks.",
 * dependencies: ["database-agent", "clarification-agent"],
 * capabilities: ["data analysis", "relationship mapping"],
 * performance: {
 * expectedResponseTime: 7000,
 * memoryUsage: "high",
 * complexity: "high",
 * },
 * errorHandling: {
 * retryStrategy: "fixed",
 * maxRetries: 2,
 * },
 * monitoring: {
 * metricsToTrack: ["responseTime", "throughput"],
 * alertThresholds: {
 * responseTime: 3000,
 * throughput: 100,
 * },
 * };
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
 * DatabaseAgent configuration for query behavior, validation, and performance.
 *
 * All business values (aliases, operators) must come from configuration.
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
 * DataAgent configuration governing analysis, exploration, relationships, search, and performance.
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
 * ClarificationAgent configuration for guidance, escalation, knowledge search, routing, and performance.
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
    helpSystem?: {
      enabled?: boolean;
      listAgentCapabilities?: boolean;
      includeExampleQueries?: boolean;
      maxExamplesPerAgent?: number;
      includeCategorySummaries?: boolean;
      maxCategoriesToList?: number;
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
 * CommunicationAgent configuration for response formatting and user interaction.
 *
 * Prefer defining copy/templates here and referencing them from agents to avoid
 * hardcoded business values in code.
 *
 * @example
 * const comm: CommunicationConfig = {
 *   formatting: {
 *     defaultFormat: "markdown",
 *     tone: { success: "friendly", error: "helpful", progress: "informative", validation: "constructive" },
 *     verbosity: "balanced",
 *     maxMessageLength: 1000,
 *   },
 *   clarification: {
 *     maxCategoriesInExamples: 3,
 *     examplesHeader: "Examples:",
 *     availableCategoriesHeader: "Available Categories:",
 *     unknownRequestTemplate: "I'm not sure what you're looking for with \"{{question}}\".",
 *     matchedIntentTemplate: "Your question seems related to {{intent}}.",
 *     groups: [
 *       { title: "**Category Information**", usesCategories: true, sampleTemplates: [
 *         "What's in the {{category}} category?",
 *         "Describe the {{category}} data model",
 *       ]},
 *     ],
 *   },
 * };
 */
export interface CommunicationConfig {
  formatting: {
    defaultFormat: "markdown" | "plaintext" | "html";
    tone: {
      success: string;
      error: string;
      progress: string;
      validation: string;
    };
    verbosity: "minimal" | "balanced" | "detailed";
    maxMessageLength: number;
    includeEmoji?: boolean;
    includeSectionHeaders?: boolean;
    formatLists?: boolean;
    highlightKeyInfo?: boolean;
  };
  successTemplates?: {
    dataRetrieved?: string;
    analysisComplete?: string;
    metadataRetrieved?: string;
    exportComplete?: string;
    importComplete?: string;
    validationPassed?: string;
  };
  errorHandling: {
    includeStackTrace?: boolean;
    includeErrorCodes?: boolean;
    suggestRecoveryActions?: boolean;
    maxRecoverySuggestions?: number;
    errorTemplates?: {
      notFound?: string;
      validationFailed?: string;
      permissionDenied?: string;
      configurationError?: string;
      externalError?: string;
      unexpected?: string;
    };
    recoveryActions?: {
      notFound?: string[];
      validationFailed?: string[];
      permissionDenied?: string[];
      configurationError?: string[];
    };
  };
  progressTracking?: {
    enabled?: boolean;
    minimumDuration?: number;
    showPercentage?: boolean;
    showElapsedTime?: boolean;
    showEstimatedTimeRemaining?: boolean;
    updateInterval?: number;
    progressTemplates?: {
      started?: string;
      inProgress?: string;
      completed?: string;
    };
  };
  validation?: {
    groupByCategory?: boolean;
    maxErrorsPerEntity?: number;
    showFieldPaths?: boolean;
    showExpectedActual?: boolean;
    summaryTemplate?: string;
  };
  /** Clarification message templates and settings for CommunicationAgent */
  clarification?: CommunicationClarificationConfig;
}

/**
 * Clarification formatting configuration for the CommunicationAgent.
 *
 * Use groups with `usesCategories=true` to automatically substitute `{{category}}`
 * with runtime category names supplied via metadata.
 *
 * @example
 * const clar: CommunicationClarificationConfig = {
 *   maxCategoriesInExamples: 4,
 *   examplesHeader: "Here are some examples:",
 *   availableCategoriesHeader: "Available Categories:",
 *   closingPrompt: "Please be more specific.",
 *   unknownRequestTemplate: "I'm not sure what you're looking for with \"{{question}}\".",
 *   matchedIntentTemplate: "Your question seems related to {{intent}}.",
 *   groups: [
 *     { title: "**Query Records**", usesCategories: true, sampleTemplates: [
 *       "List recent items in {{category}}",
 *       "Find items matching specific keywords in {{category}}",
 *     ]},
 *   ],
 * };
 */
export interface CommunicationClarificationConfig {
  /** Max number of categories to include in examples */
  maxCategoriesInExamples?: number;
  /** Heading before example prompts */
  examplesHeader?: string;
  /** Heading before category list */
  availableCategoriesHeader?: string;
  /** Closing prompt encouraging specificity */
  closingPrompt?: string;
  /** Template: I'm not sure what you're looking for with "{{question}}". */
  unknownRequestTemplate?: string;
  /** Template when an intent is guessed: uses {{intent}} */
  matchedIntentTemplate?: string;
  /** Example groups; when usesCategories=true, replace {{category}} */
  groups?: Array<{
    title: string;
    usesCategories?: boolean;
    sampleTemplates: string[];
  }>;
}

/**
 * DataLoader configuration for file I/O, validation, discovery, and performance.
 */
export interface DataLoaderConfig {
  validation: {
    enableStrictTypeChecking: boolean;
    allowPartialRecords: boolean;
    validateOnLoad: boolean;
    useTypeGuards: boolean;
    maxValidationErrors: number;
    logValidationWarnings: boolean;
  };
  fileOperations: {
    encoding: "utf-8" | "ascii" | "utf8";
    maxFileSize: number;
    enableCaching: boolean;
    cacheTTL: number;
    maxCacheEntries: number;
    allowSyncOperations: boolean;
    enableRetry: boolean;
    maxRetries: number;
    retryDelay: number;
  };
  pathResolution: {
    enableExamplesFallback: boolean;
    examplesDirectory: string;
    resolveFromDataRoot: boolean;
    followSymlinks: boolean;
    normalizePaths: boolean;
    allowAbsolutePaths: boolean;
  };
  errorHandling: {
    includeStackTrace: boolean;
    provideFilePath: boolean;
    suggestRecovery: boolean;
    wrapNativeErrors: boolean;
    logToTelemetry: boolean;
    logSeverityThreshold: "info" | "warning" | "error" | "critical";
  };
  performance: {
    enableParallelLoading: boolean;
    maxConcurrentOperations: number;
    enableStreaming: boolean;
    streamingThreshold: number;
    enableMemoryOptimization: boolean;
    maxMemoryUsage: number;
  };
  discovery: {
    enableAutoDiscovery: boolean;
    requiredCategoryFiles: string[];
    optionalCategoryFiles: string[];
    skipHiddenFiles: boolean;
    skipPatterns: string[];
    maxDepth: number;
    continueOnError: boolean;
    logDiscoveryWarnings: boolean;
  };
}

/**
 * RelevantDataManager configuration for metadata validation, relationship integrity,
 * caching, schema management, and operational performance.
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
 * The single source of truth for all agent settings. Agents must not hardcode
 * business values in code; derive from this configuration or loaded data.
 *
 * @example
 * const cfg: AgentConfigDefinition = {
 *   $configId: "communication-agent",
 *   agent: { id: "communication-agent", name: "Communication Agent", version: "1.0.0", description: "Formats responses" },
 *   communication: { formatting: { defaultFormat: "markdown", tone: { success: "friendly", error: "helpful", progress: "informative", validation: "constructive" }, verbosity: "balanced", maxMessageLength: 1000 } },
 * };
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
  communication?: CommunicationConfig;
  dataLoader?: DataLoaderConfig;
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
 * Complete individual agent configuration (legacy) for JSON compatibility.
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

  /**
   * Clear an override for a configuration item given its {@link ConfigDescriptor}.
   *
   * @param {ConfigDescriptor} descriptor - Descriptor describing the config item.
   * @param {"local" | "global"} env - Override scope to clear.
   * @returns {void}
   */
  public clearOverride(
    descriptor: ConfigDescriptor,
    env: "local" | "global" = "local"
  ): void {
    const targetOverrides =
      env === "local" ? this.overridesLocal : this.overridesGlobal;
    this.deepDelete(targetOverrides, descriptor.path);
  }

  /**
   * Get all descriptors for this agent (default implementation returns empty object).
   * Agents should override this method to provide their specific descriptors.
   *
   * @returns {Record<string, ConfigDescriptor>} Map of descriptor keys to their definitions.
   */
  public getAllDescriptors(): Record<string, ConfigDescriptor> {
    return {};
  }
}

// ---------------------------------------------------------------------------------------------------------------------
// Runtime agent types (centralized)
// ---------------------------------------------------------------------------------------------------------------------

/** Identifier for a generic category or data source. */
export type CategoryId = string;

/**
 * Generic record model allowing arbitrary fields.
 * Represents a minimal record from any business data category.
 *
 * @param id - Unique identifier for the record (required)
 * @param name - Optional human-readable name
 * @param title - Optional alternative to name (some records use title instead)
 */
export interface CategoryRecord {
  id: string;
  name?: string;
  title?: string;
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
  /**
   * Optional pre-formatted content. Prefer using `WorkflowResult.formatted` in
   * end-to-end workflows. This field exists only for transitional compatibility
   * with older orchestration paths.
   */
  formatted?: {
    /** Human-readable message describing the routing/decision */
    message: string;
    /** Markdown-formatted content for rich display */
    markdown?: string;
  };

  /**
   * @deprecated Use `formatted` (above) and, in full workflows, rely on
   * `WorkflowResult.formatted` produced via the CommunicationAgent. This field
   * will be removed in a future release after the deprecation lifecycle.
   */
  markdown?: string;
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
  /** Optional group for organizing descriptors in UI. */
  group?: string;
  /** Optional human-readable description. */
  description?: string;
  /** Optional validation function for basic type/shape checks. */
  validate?: (value: unknown) => boolean | string;
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
