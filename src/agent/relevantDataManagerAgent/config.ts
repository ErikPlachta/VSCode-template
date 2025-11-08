/**
 * @file Relevant Data Manager agent configuration management using TypeScript-based config
 */

import {
  BaseAgentConfig,
  AgentConfigDefinition,
  RelevantDataManagerConfig,
} from "../../types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "../../types/configValidation";
import { relevantDataManagerAgentConfig } from "./agent.config";

/**
 * Relevant Data Manager agent-specific configuration class
 */
export class RelevantDataManagerAgentConfig extends BaseAgentConfig {
  private relevantDataManagerConfig: RelevantDataManagerConfig;

  constructor(config?: AgentConfigDefinition) {
    // Use the TypeScript config as default, allow override for testing
    const configToUse = config || relevantDataManagerAgentConfig;

    // Validate configuration before using it
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(
        `Invalid relevant data manager configuration:\n${report}`
      );
    }

    super(configToUse);
    this.relevantDataManagerConfig =
      this.config.relevantDataManager || ({} as RelevantDataManagerConfig);
  }

  /**
   * Get metadata management configuration
   */
  public getMetadataConfig() {
    return (
      this.relevantDataManagerConfig.metadata || {
        enableSchemaValidation: true,
        enforceDataQuality: true,
        trackDataLineage: true,
      }
    );
  }

  /**
   * Get caching configuration
   */
  public getCachingConfig() {
    return (
      this.relevantDataManagerConfig.caching || {
        enableSnapshotCaching: true,
        snapshotTTL: 60 * 60 * 1000,
        maxCachedSnapshots: 50,
      }
    );
  }

  /**
   * Get validation configuration
   */
  public getValidationConfig() {
    return (
      this.relevantDataManagerConfig.validation || {
        strictModeEnabled: true,
        allowPartialValidation: false,
        validationTimeout: 30000,
      }
    );
  }

  /**
   * Get schema management configuration
   */
  public getSchemaManagementConfig() {
    return (
      this.relevantDataManagerConfig.schemaManagement || {
        autoDetectSchemaChanges: true,
        enableSchemaVersioning: true,
        validationLibrary: "ajv",
        generateTypescriptTypes: false,
        validateSchemaCompatibility: true,
        maxSchemaFileSize: 1024 * 1024,
        supportedSchemaFormats: ["json-schema", "draft-07"],
      }
    );
  }

  /**
   * Get relationships configuration
   */
  public getRelationshipsConfig() {
    return (
      this.relevantDataManagerConfig.relationships || {
        enableAutoDiscovery: true,
        validateReferences: true,
        detectCircularReferences: true,
        maxTraversalDepth: 5,
        buildRelationshipIndexes: true,
        relationshipTypes: [
          "one-to-one",
          "one-to-many",
          "many-to-many",
          "hierarchical",
          "dependency",
        ],
      }
    );
  }

  /**
   * Get data management configuration
   */
  public getDataManagementConfig() {
    return (
      this.relevantDataManagerConfig.dataManagement || {
        enableAutoRefresh: false,
        refreshInterval: 24 * 60 * 60 * 1000,
        enableDataBackups: true,
        backupRetentionDays: 30,
        validateOnLoad: true,
        supportedImportFormats: ["json", "csv", "yaml"],
        maxImportFileSize: 10 * 1024 * 1024,
      }
    );
  }

  /**
   * Get performance configuration
   */
  public getPerformanceConfig() {
    return (
      this.relevantDataManagerConfig.performance || {
        enableParallelProcessing: true,
        maxConcurrentOperations: 5,
        defaultOperationTimeout: 45000,
        enableOperationCaching: true,
        memoryOptimizationLevel: "medium",
      }
    );
  }

  /**
   * Check if schema validation is enabled
   */
  public isSchemaValidationEnabled(): boolean {
    return this.getMetadataConfig().enableSchemaValidation;
  }

  /**
   * Check if data quality enforcement is enabled
   */
  public isDataQualityEnforced(): boolean {
    return this.getMetadataConfig().enforceDataQuality;
  }

  /**
   * Check if data lineage tracking is enabled
   */
  public isDataLineageTrackingEnabled(): boolean {
    return this.getMetadataConfig().trackDataLineage;
  }

  /**
   * Check if snapshot caching is enabled
   */
  public isSnapshotCachingEnabled(): boolean {
    return this.getCachingConfig().enableSnapshotCaching;
  }

  /**
   * Check if strict validation mode is enabled
   */
  public isStrictModeEnabled(): boolean {
    return this.getValidationConfig().strictModeEnabled;
  }

  /**
   * Get supported business categories
   */
  public getSupportedCategories(): string[] {
    return (
      this.getMetadataConfig().supportedCategories ?? [
        "people",
        "departments",
        "applications",
        "companyPolicies",
        "companyResources",
      ]
    );
  }

  /**
   * Get required category files configuration
   */
  public getRequiredCategoryFiles(): Record<string, string> {
    return (
      this.getMetadataConfig().requiredCategoryFiles ?? {
        configFile: "category.json",
        recordsFile: "records.json",
        relationshipsFile: "relationships.json",
      }
    );
  }

  /**
   * Get required directories configuration
   */
  public getRequiredDirectories(): Record<string, string> {
    return (
      this.getMetadataConfig().requiredDirectories ?? {
        schemas: "schemas",
        types: "types",
        examples: "examples",
        queries: "queries",
      }
    );
  }

  /**
   * Get snapshot cache TTL in milliseconds
   */
  public getSnapshotTTL(): number {
    return this.getCachingConfig().snapshotTTL;
  }

  /**
   * Get maximum cached snapshots
   */
  public getMaxCachedSnapshots(): number {
    return this.getCachingConfig().maxCachedSnapshots;
  }

  /**
   * Get validation timeout in milliseconds
   */
  public getValidationTimeout(): number {
    return this.getValidationConfig().validationTimeout;
  }

  /**
   * Get maximum schema file size in bytes
   */
  public getMaxSchemaFileSize(): number {
    return this.getSchemaManagementConfig().maxSchemaFileSize ?? 1024 * 1024;
  }

  /**
   * Get supported schema formats
   */
  public getSupportedSchemaFormats(): string[] {
    return (
      this.getSchemaManagementConfig().supportedSchemaFormats ?? [
        "json-schema",
        "draft-07",
      ]
    );
  }

  /**
   * Get relationship types to track
   */
  public getRelationshipTypes(): string[] {
    return (
      this.getRelationshipsConfig().relationshipTypes ?? [
        "one-to-one",
        "one-to-many",
        "many-to-many",
        "hierarchical",
        "dependency",
      ]
    );
  }

  /**
   * Get maximum relationship traversal depth
   */
  public getMaxTraversalDepth(): number {
    return this.getRelationshipsConfig().maxTraversalDepth ?? 5;
  }

  /**
   * Get validation library to use
   */
  public getValidationLibrary(): string {
    return this.getSchemaManagementConfig().validationLibrary ?? "ajv";
  }

  /**
   * Check if partial validation is allowed
   */
  public isPartialValidationAllowed(): boolean {
    return this.getValidationConfig().allowPartialValidation ?? false;
  }

  /**
   * Check if folder structure validation is enabled
   */
  public isFolderStructureValidationEnabled(): boolean {
    return this.getMetadataConfig().validateFolderStructure ?? true;
  }

  /**
   * Check if AJV validation is enabled
   */
  public isAjvValidationEnabled(): boolean {
    return this.getValidationConfig().enableAjvValidation ?? true;
  }

  /**
   * Check if relationship references should be validated
   */
  public shouldValidateRelationshipReferences(): boolean {
    return this.getRelationshipsConfig().validateReferences ?? true;
  }

  /**
   * Check if circular references should be detected
   */
  public shouldDetectCircularReferences(): boolean {
    return this.getRelationshipsConfig().detectCircularReferences ?? true;
  }

  /**
   * Get telemetry configuration
   */
  public getTelemetryConfig() {
    return {
      logQueries: this.config.telemetry?.logQueries ?? true,
      logPerformance: this.config.telemetry?.logPerformance ?? true,
      logCacheStats: this.config.telemetry?.logCacheStats ?? true,
      slowQueryThreshold: this.config.telemetry?.slowQueryThreshold ?? 10000,
      trackDataQuality: this.config.telemetry?.trackDataQuality ?? true,
      trackSchemaValidation:
        this.config.telemetry?.trackSchemaValidation ?? true,
      trackRelationshipIntegrity:
        this.config.telemetry?.trackRelationshipIntegrity ?? true,
    };
  }

  /**
   * Get error handling configuration
   */
  public getErrorHandlingConfig() {
    return {
      maxRetries: this.config.errorHandling?.maxRetries ?? 3,
      retryDelay: this.config.errorHandling?.retryDelay ?? 2000,
      exponentialBackoff: this.config.errorHandling?.exponentialBackoff ?? true,
      allowPartialDataLoad:
        this.config.errorHandling?.allowPartialDataLoad ?? true,
      gracefulSchemaFailure:
        this.config.errorHandling?.gracefulSchemaFailure ?? true,
      fallbackToCachedData:
        this.config.errorHandling?.fallbackToCachedData ?? true,
      skipCorruptedRecords:
        this.config.errorHandling?.skipCorruptedRecords ?? true,
    };
  }
}
