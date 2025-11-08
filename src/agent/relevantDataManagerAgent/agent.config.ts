import type { AgentConfigDefinition } from "../../types/agentConfig";
import { CONFIG_IDS } from "../../types/configRegistry";

/**
 * @packageDocumentation Relevant Data Manager Agent Configuration
 *
 * This configuration defines all settings for the relevant data manager agent, which
 * handles metadata management, schema validation, and category orchestration for
 * the business data workspace.
 *
 * The relevant data manager serves as the foundational data layer, managing
 * categories, schemas, relationships, and data quality across the entire system.
 */

/**
 * Complete configuration for the Relevant Data Manager Agent
 *
 * The relevant data manager is responsible for the core data infrastructure,
 * maintaining category definitions, schema validation, data quality, and
 * serving as the source of truth for all business data metadata.
 */
export const relevantDataManagerAgentConfig: AgentConfigDefinition = {
  /**
   * Unique configuration schema identifier from central registry
   */
  $configId: CONFIG_IDS.RELEVANT_DATA_MANAGER,

  /**
   * Basic agent identity and metadata
   */
  agent: {
    /** Unique agent identifier used in routing and logging */
    id: "relevant-data-manager",

    /** Human-readable name displayed in UI */
    name: "Relevant Data Manager",

    /** Semantic version for tracking configuration changes */
    version: "1.0.0",

    /** Comprehensive description of agent purpose and capabilities */
    description:
      "Manages metadata, schemas, and data quality for all business categories, serving as the foundational data layer",
  },

  /**
   * Relevant data manager-specific configuration section
   */
  relevantDataManager: {
    /**
     * Metadata management and cataloguing settings
     */
    metadata: {
      /** Whether to enforce strict schema validation across all categories */
      enableSchemaValidation: true,

      /** Whether to actively monitor and enforce data quality standards */
      enforceDataQuality: true,

      /** Whether to track data lineage and change history */
      trackDataLineage: true,

      /** Whether to automatically generate metadata summaries */
      autoGenerateMetadata: true,

      /** Supported business categories */
      supportedCategories: [
        "people",
        "departments",
        "applications",
        "companyPolicies",
        "companyResources",
      ],

      /** Required files for each category */
      requiredCategoryFiles: {
        configFile: "category.json",
        recordsFile: "records.json",
        relationshipsFile: "relationships.json",
      },

      /** Required subdirectories for each category */
      requiredDirectories: {
        schemas: "schemas",
        types: "types",
        examples: "examples",
        queries: "queries",
      },

      /** Whether to validate category folder structure */
      validateFolderStructure: true,
    },

    /**
     * Caching and performance optimization settings
     */
    caching: {
      /** Whether to enable snapshot caching for categories */
      enableSnapshotCaching: true,

      /** Time-to-live for cached snapshots (milliseconds) */
      snapshotTTL: 60 * 60 * 1000, // 1 hour

      /** Maximum number of snapshots to cache simultaneously */
      maxCachedSnapshots: 50,

      /** Whether to cache schema validation results */
      cacheValidationResults: true,

      /** TTL for cached validation results (milliseconds) */
      validationCacheTTL: 30 * 60 * 1000, // 30 minutes

      /** Whether to enable record hash caching for change detection */
      enableRecordHashCaching: true,

      /** Automatic cache cleanup threshold (number of entries) */
      cacheCleanupThreshold: 1000,
    },

    /**
     * Data validation and quality assurance settings
     */
    validation: {
      /** Whether to enable strict mode for all validations */
      strictModeEnabled: true,

      /** Whether to allow partial validation when some checks fail */
      allowPartialValidation: false,

      /** Maximum time allowed for validation operations (milliseconds) */
      validationTimeout: 30000,

      /** Whether to validate JSON schemas using AJV */
      enableAjvValidation: true,

      /** Whether to check for duplicate schema names across categories */
      checkDuplicateSchemas: true,

      /** Whether to validate relationship integrity */
      validateRelationshipIntegrity: true,

      /** Whether to check for orphaned records */
      checkOrphanedRecords: true,

      /** Minimum confidence threshold for validation warnings */
      validationWarningThreshold: 0.8,
    },

    /**
     * Schema and type management settings
     */
    schemaManagement: {
      /** Whether to automatically detect schema changes */
      autoDetectSchemaChanges: true,

      /** Whether to version schemas automatically */
      enableSchemaVersioning: true,

      /** Schema validation library to use */
      validationLibrary: "ajv",

      /** Whether to generate TypeScript types from schemas */
      generateTypescriptTypes: false,

      /** Whether to validate schema compatibility on updates */
      validateSchemaCompatibility: true,

      /** Maximum schema file size in bytes */
      maxSchemaFileSize: 1024 * 1024, // 1 MB

      /** Supported schema formats */
      supportedSchemaFormats: ["json-schema", "draft-07"],
    },

    /**
     * Relationship mapping and management settings
     */
    relationships: {
      /** Whether to enable automatic relationship discovery */
      enableAutoDiscovery: true,

      /** Whether to validate all relationship references */
      validateReferences: true,

      /** Whether to detect circular relationships */
      detectCircularReferences: true,

      /** Maximum relationship traversal depth */
      maxTraversalDepth: 5,

      /** Whether to build relationship indexes for performance */
      buildRelationshipIndexes: true,

      /** Types of relationships to track */
      relationshipTypes: [
        "one-to-one",
        "one-to-many",
        "many-to-many",
        "hierarchical",
        "dependency",
      ],
    },

    /**
     * Data import and export settings
     */
    dataManagement: {
      /** Whether to enable automatic data refresh */
      enableAutoRefresh: false,

      /** Data refresh interval (milliseconds) */
      refreshInterval: 24 * 60 * 60 * 1000, // 24 hours

      /** Whether to backup data before major operations */
      enableDataBackups: true,

      /** Maximum backup retention period (days) */
      backupRetentionDays: 30,

      /** Whether to validate data integrity on load */
      validateOnLoad: true,

      /** Supported file formats for data import */
      supportedImportFormats: ["json", "csv", "yaml"],

      /** Maximum file size for imports (bytes) */
      maxImportFileSize: 10 * 1024 * 1024, // 10 MB
    },
  },

  /**
   * User-facing configuration for better experience
   */
  userFacing: {
    /** Friendly description shown to users */
    friendlyDescription:
      "I manage all the metadata, schemas, and data quality for your business information, ensuring everything is organized and accessible.",

    /** When to recommend using this agent */
    useWhen: [
      "You need information about available data categories",
      "You want to understand the structure of your business data",
      "You need to validate data quality or schema compliance",
      "You're exploring what data is available in the system",
      "You want to understand relationships between data categories",
    ],

    /** Example queries that work well with this agent */
    exampleQueries: [
      "What categories of data do we have available?",
      "Show me the schema for the people category",
      "What's the structure of our application data?",
      "How are departments and people related in our data?",
      "Generate a summary of our data quality status",
    ],

    /** Help text for users */
    helpText:
      "Ask me about data categories, schemas, relationships, or data quality. I maintain the foundational structure that powers all other agents.",
  },

  /**
   * Performance and monitoring configuration
   */
  performance: {
    /** Enable parallel processing for multiple category operations */
    enableParallelProcessing: true,

    /** Maximum concurrent operations */
    maxConcurrentOperations: 5,

    /** Default timeout for operations (milliseconds) */
    defaultOperationTimeout: 45000,

    /** Enable operation result caching */
    enableOperationCaching: true,

    /** Memory usage optimization level */
    memoryOptimizationLevel: "medium",
  },

  /**
   * Telemetry and monitoring configuration
   */
  telemetry: {
    /** Log all data management operations */
    logQueries: true,

    /** Log performance metrics for operations */
    logPerformance: true,

    /** Log cache statistics */
    logCacheStats: true,

    /** Threshold for logging slow operations (milliseconds) */
    slowQueryThreshold: 10000,

    /** Track data quality metrics */
    trackDataQuality: true,

    /** Track schema validation metrics */
    trackSchemaValidation: true,

    /** Track relationship integrity metrics */
    trackRelationshipIntegrity: true,
  },

  /**
   * Error handling and recovery settings
   */
  errorHandling: {
    /** Maximum retry attempts for failed operations */
    maxRetries: 3,

    /** Base delay between retry attempts (milliseconds) */
    retryDelay: 2000,

    /** Use exponential backoff for retries */
    exponentialBackoff: true,

    /** Continue with partial data when some sources fail */
    allowPartialDataLoad: true,

    /** Gracefully handle schema validation failures */
    gracefulSchemaFailure: true,

    /** Fallback to cached data when fresh data unavailable */
    fallbackToCachedData: true,

    /** Skip corrupted records instead of failing entirely */
    skipCorruptedRecords: true,
  },
};
