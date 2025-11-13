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
 * ```ts
 * const identity: AgentIdentity = {
 *   id: "communication-agent",
 *   name: "Communication Agent",
 *   version: "1.0.0",
 *   description: "Formats responses from agents into user-friendly messages",
 * };
 * ```
 */
export interface AgentIdentity {
  /** Unique agent identifier used in routing and logging. */
  id: string;

  /** Human-readable name of the agent. */
  name: string;

  /** Semantic version of the agent configuration. */
  version: string;

  /** Comprehensive description of the agent's purpose and capabilities. */
  description: string;
}

/**
 * Intent configuration for the Orchestrator routing system.
 *
 * Associates a named intent with a target agent and optional detection signals.
 *
 * @example
 * ```ts
 * const classifyIntent: IntentConfig = {
 *   name: "fetch-metadata",
 *   description: "Retrieve category metadata and schemas",
 *   targetAgent: "data-agent",
 *   signals: ["schema", "fields", "metadata"],
 * };
 * ```
 */
export interface IntentConfig {
  /** Unique name of the intent. */
  name: string;

  /** Description of the intent's purpose. */
  description: string;

  /** Identifier of the agent to handle this intent. */
  targetAgent: string;

  /** Optional array of keywords/signals for intent detection. */
  signals?: string[];
}

/**
 * Text processing configuration for extracting signals and keywords.
 *
 * @example
 * ```ts
 * const textCfg: TextProcessingConfig = {
 *   stopWords: ["the", "a", "an"],
 *   minimumKeywordLength: 3,
 *   scoringWeights: {
 *     signalMatch: 0.6,
 *     focusMatch: 0.3,
 *     promptStarterMatch: 0.1,
 *   },
 * };
 * ```
 */
export interface TextProcessingConfig {
  /** List of common stop words to ignore. */
  stopWords: string[];

  /** Minimum length for valid keywords. */
  minimumKeywordLength: number;

  /** Weights for different keyword matching criteria. */
  scoringWeights: {
    /** Weight for signal match. */
    signalMatch: number;

    /** Weight for focus match. */
    focusMatch: number;

    /** Weight for prompt starter match. */
    promptStarterMatch: number;
  };
}

/**
 * Escalation configuration controlling retries and fallback behavior.
 *
 * @example
 * ```ts
 * const esc: EscalationConfig = {
 *   conditions: ["low-confidence", "missing-signals"],
 *   fallbackAgent: "clarification-agent",
 *   maxRetries: 1,
 *   vaguePhrases: ["help", "not sure"],
 * };
 * ```
 */
export interface EscalationConfig {
  /** List of conditions that trigger escalation. */
  conditions: string[];

  /** Fallback agent used when escalation occurs. */
  fallbackAgent: string;

  /** Maximum number of retries allowed. */
  maxRetries: number;

  /** Optional list of vague phrases that indicate unclear input. */
  vaguePhrases?: string[];
}

/**
 * Orchestration configuration: intents, text handling, escalation, and messages.
 *
 * @example
 * ```ts
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
 *   },
 * };
 * ```
 */
export interface OrchestrationConfig {
  /** Mapping of intent names to their configurations. */
  intents?: Record<string, IntentConfig>;

  /** Configuration for text signal extraction. */
  textProcessing?: TextProcessingConfig;

  /** Configuration for escalation and fallback behavior. */
  escalation?: EscalationConfig;

  /** Customizable messages for various orchestration scenarios. */
  messages?: {
    /** Message when no intent is detected. */
    noIntentDetected?: string;

    /** Message asking user to clarify or provide more details. */
    needMoreContext?: string;

    /** Message when the user query is too vague. */
    questionTooVague?: string;

    /** Hints shown when missing key signals. */
    missingSignalsHint?: string[];

    /** Message shown when an error occurs. */
    errorOccurred?: string;

    /** Summary messages based on task outcome. */
    summaries?: {
      metadata?: string;
      records?: string;
      insight?: string;
      clarification?: string;
      defaultTopic?: string;
    };

    /** Guidance messages based on interaction context. */
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
 * DatabaseAgent configuration for query behavior, validation, and performance.
 *
 * All business values (aliases, operators) must come from configuration.
 */
export interface DatabaseConfig {
  /** Alias mapping for fields by category and alias name. */
  fieldAliases: Record<string, Record<string, string>>;

  /** Performance-related configurations. */
  performance: {
    /** Caching behavior. */
    caching: {
      /** Whether caching is enabled by default. */
      enabledByDefault: boolean;
      /** Prefix to prepend to all cache keys. */
      defaultKeyPrefix: string;
      /** Maximum number of entries in cache. */
      maxCacheEntries: number;
      /** Time-to-live (TTL) for cached entries, in milliseconds. */
      cacheTTL: number;
    };
    /** Query execution limits. */
    limits: {
      /** Timeout for a query in milliseconds. */
      queryTimeout: number;
      /** Maximum number of results to return from a query. */
      maxResultSize: number;
      /** Maximum allowed depth for joins. */
      maxJoinDepth: number;
    };
  };

  /** Validation rules for schema and integrity. */
  validation: {
    /** Schema-level validation rules. */
    schemaValidation: {
      /** Enable strict schema validation. */
      enableStrictValidation: boolean;
      /** Whether unknown fields are allowed. */
      allowUnknownFields: boolean;
      /** Automatically transform alias names. */
      autoTransformAliases: boolean;
    };
    /** Data integrity checks. */
    integrityChecks: {
      /** Ensure all relationships are valid. */
      validateRelationships: boolean;
      /** Check for missing references in joins. */
      checkMissingReferences: boolean;
      /** Warn on schema mismatches or missing fields. */
      warnOnSchemaIssues: boolean;
    };
  };

  /** Query operation configurations. */
  operations: {
    /** Filtering behavior and operators. */
    filtering: {
      /** Allowed filter operators. */
      operators: string[];
      /** Whether string comparisons are case-insensitive. */
      caseInsensitiveStrings: boolean;
      /** Enable fuzzy matching for strings. */
      enableFuzzyMatching: boolean;
    };
    /** Join operation behaviors. */
    joins: {
      /** Supported join types. */
      supportedJoinTypes: string[];
      /** Automatically discover joins based on schema. */
      autoDiscoverRelationships: boolean;
      /** Limit on records processed in joins. */
      maxJoinRecords: number;
    };
    /** Aggregation configuration. */
    aggregation: {
      /** Supported aggregation functions. */
      functions: string[];
      /** Whether grouping is allowed in aggregations. */
      enableGroupBy: boolean;
      /** Max number of groups allowed in results. */
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
