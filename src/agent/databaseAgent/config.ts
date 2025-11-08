/**
 * @packageDocumentation Database agent configuration management using TypeScript-based config
 */

import {
  BaseAgentConfig,
  AgentConfigDefinition,
  DatabaseConfig,
} from "../../types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "../../types/configValidation";
import { databaseAgentConfig } from "./agent.config";

/**
 * Database agent-specific configuration class
 */
export class DatabaseAgentConfig extends BaseAgentConfig {
  private databaseConfig: DatabaseConfig;

  constructor(config?: AgentConfigDefinition) {
    // Use the TypeScript config as default, allow override for testing
    const configToUse = config || databaseAgentConfig;

    // Validate configuration before using it
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid database agent configuration:\n${report}`);
    }

    super(configToUse);
    this.databaseConfig = this.config.database || ({} as DatabaseConfig);
  }

  /**
 * Get field aliases for a specific category
 *
 * @param category - - category parameter.
 * @returns - TODO: describe return value.
 */

  public getFieldAliases(category: string): Record<string, string> {
    return this.databaseConfig.fieldAliases?.[category] || {};
  }

  /**
 * Get all field aliases
 *
 * @returns - TODO: describe return value.
 */

  public getAllFieldAliases(): Record<string, Record<string, string>> {
    return this.databaseConfig.fieldAliases || {};
  }

  /**
 * Get caching configuration
 *
 * @returns - TODO: describe return value.
 */

  public getCachingConfig() {
    return (
      this.databaseConfig.performance?.caching || {
        enabledByDefault: true,
        defaultKeyPrefix: "db-query",
        maxCacheEntries: 1000,
        cacheTTL: 24 * 60 * 60 * 1000,
      }
    );
  }

  /**
 * Get query limits configuration
 *
 * @returns - TODO: describe return value.
 */

  public getQueryLimits() {
    return (
      this.databaseConfig.performance?.limits || {
        queryTimeout: 30000,
        maxResultSize: 10000,
        maxJoinDepth: 3,
      }
    );
  }

  /**
 * Get schema validation settings
 *
 * @returns - TODO: describe return value.
 */

  public getSchemaValidation() {
    return (
      this.databaseConfig.validation?.schemaValidation || {
        enableStrictValidation: true,
        allowUnknownFields: false,
        autoTransformAliases: true,
      }
    );
  }

  /**
 * Get integrity check settings
 *
 * @returns - TODO: describe return value.
 */

  public getIntegrityChecks() {
    return (
      this.databaseConfig.validation?.integrityChecks || {
        validateRelationships: true,
        checkMissingReferences: true,
        warnOnSchemaIssues: true,
      }
    );
  }

  /**
 * Get supported filter operators
 *
 * @returns - TODO: describe return value.
 */

  public getFilterOperators(): string[] {
    return (
      this.databaseConfig.operations?.filtering?.operators || [
        "eq",
        "ne",
        "gt",
        "gte",
        "lt",
        "lte",
        "in",
        "nin",
        "contains",
        "startswith",
        "endswith",
      ]
    );
  }

  /**
 * Get filtering configuration
 *
 * @returns - TODO: describe return value.
 */

  public getFilteringConfig() {
    return (
      this.databaseConfig.operations?.filtering || {
        operators: [
          "eq",
          "ne",
          "gt",
          "gte",
          "lt",
          "lte",
          "in",
          "nin",
          "contains",
          "startswith",
          "endswith",
        ],
        caseInsensitiveStrings: true,
        enableFuzzyMatching: false,
      }
    );
  }

  /**
 * Get join operation configuration
 *
 * @returns - TODO: describe return value.
 */

  public getJoinConfig() {
    return (
      this.databaseConfig.operations?.joins || {
        supportedJoinTypes: ["inner", "left", "right"],
        autoDiscoverRelationships: true,
        maxJoinRecords: 1000,
      }
    );
  }

  /**
 * Get aggregation configuration
 *
 * @returns - TODO: describe return value.
 */

  public getAggregationConfig() {
    return (
      this.databaseConfig.operations?.aggregation || {
        functions: ["count", "sum", "avg", "min", "max", "distinct"],
        enableGroupBy: true,
        maxGroups: 100,
      }
    );
  }

  /**
 * Get telemetry configuration
 *
 * @returns - TODO: describe return value.
 */

  public getTelemetryConfig() {
    return {
      logQueries: this.config.telemetry?.logQueries ?? true,
      logPerformance: this.config.telemetry?.logPerformance ?? true,
      logCacheStats: this.config.telemetry?.logCacheStats ?? true,
      slowQueryThreshold: this.config.telemetry?.slowQueryThreshold ?? 1000,
    };
  }

  /**
 * Get error handling configuration
 *
 * @returns - TODO: describe return value.
 */

  public getErrorHandlingConfig() {
    return {
      maxRetries: this.config.errorHandling?.maxRetries ?? 3,
      retryDelay: this.config.errorHandling?.retryDelay ?? 1000,
      exponentialBackoff: this.config.errorHandling?.exponentialBackoff ?? true,
      fallbackOnCacheError:
        this.config.errorHandling?.fallbackOnCacheError ?? true,
    };
  }

  /**
 * Check if caching is enabled by default
 *
 * @returns - TODO: describe return value.
 */

  public isCachingEnabled(): boolean {
    return this.getCachingConfig().enabledByDefault;
  }

  /**
 * Check if strict validation is enabled
 *
 * @returns - TODO: describe return value.
 */

  public isStrictValidationEnabled(): boolean {
    return this.getSchemaValidation().enableStrictValidation;
  }

  /**
 * Check if auto alias transformation is enabled
 *
 * @returns - TODO: describe return value.
 */

  public isAutoAliasTransformEnabled(): boolean {
    return this.getSchemaValidation().autoTransformAliases;
  }

  /**
 * Get default cache key prefix
 *
 * @returns - TODO: describe return value.
 */

  public getDefaultCacheKeyPrefix(): string {
    return this.getCachingConfig().defaultKeyPrefix;
  }

  /**
 * Get maximum result size for queries
 *
 * @returns - TODO: describe return value.
 */

  public getMaxResultSize(): number {
    return this.getQueryLimits().maxResultSize;
  }

  /**
 * Get query timeout in milliseconds
 *
 * @returns - TODO: describe return value.
 */

  public getQueryTimeout(): number {
    return this.getQueryLimits().queryTimeout;
  }
}
