/**
 * @packageDocumentation Data-agnostic database agent for structured data retrieval.
 * @packageDocumentation Generic database agent that can work with any data structure
 * without hard-coded knowledge of specific categories or fields.
 *
 * @module agent/databaseAgent
 */

import * as crypto from "crypto";
import {
  deleteSharedCacheEntry,
  readSharedCacheEntry,
  SharedCacheEntry,
  storeSharedCacheEntry,
} from "@extension/mcpCache";
import { createInvocationLogger } from "@mcp/telemetry";
import { DatabaseAgentProfile } from "@mcp/config/agentProfiles";
import {
  BaseAgentConfig,
  type AgentConfigDefinition,
  type DatabaseConfig,
} from "@internal-types/agentConfig";
import {
  validateAgentConfig,
  generateValidationReport,
} from "@internal-types/configValidation";
import { databaseAgentConfig } from "@agent/databaseAgent/agent.config";

// Generic types that work with any data structure
/** Identifier for a generic category or data source. */
export type CategoryId = string;

/**
 * Generic record model allowing arbitrary fields.
 *
 */
export interface CategoryRecord {
  id: string;
  [key: string]: unknown;
}

/**
 * Definition for a data source the agent can query.
 *
 */
export interface DataSource {
  id: CategoryId;
  name: string;
  records: CategoryRecord[];
  schema?: unknown;
  /** Optional field mapping for this data source */
  fieldAliases?: Record<string, string>;
}

/**
 * Result metadata returned after executing a query.
 *
 */
export interface QueryResult {
  categoryId: CategoryId;
  records: CategoryRecord[];
  totalCount: number;
  cached: boolean;
}

/**
 * Optional knobs for query execution behavior.
 *
 */
export interface QueryOptions {
  useCache?: boolean;
  cacheKeyPrefix?: string;
}

/**
 * Generic database agent that can query any structured data without hard-coded assumptions.
 *
 * The agent is completely data-agnostic and receives all necessary context from the orchestrator:
 * - Data sources with their records and schemas
 * - Field aliases for flexible querying
 * - Query criteria as generic key-value pairs
 *
 * @example
 * ```typescript
 * const dataSources = [
 *   {
 *     id: "employees",
 *     name: "Employee Directory",
 *     records: employeeData,
 *     fieldAliases: { "skill": "skills", "dept": "departmentId" }
 *   }
 * ];
 *
 * const agent = new DatabaseAgent(dataSources, cacheDirectory);
 * const results = await agent.executeQuery("employees", { skill: "javascript" });
 * ```
 */
export class DatabaseAgent {
  private readonly dataSources: Map<CategoryId, DataSource>;
  private readonly cacheDirectory: Promise<string>;
  private readonly telemetry: ReturnType<typeof createInvocationLogger>;
  private readonly profile: typeof DatabaseAgentProfile;
  private readonly config: DatabaseAgentConfig;

  /**
   * Creates a new DatabaseAgent instance.
   *
   * @param {DataSource[]} dataSources - One or more data sources to query.
   * @param {Promise<string>} cacheDirectory - Directory where shared cache entries are stored.
   * @param {Partial<DatabaseAgentConfig>} _config - Optional overrides for agent behavior (reserved).
   */
  constructor(
    dataSources: DataSource[],
    cacheDirectory: Promise<string>,
    _config?: Partial<DatabaseAgentConfig>
  ) {
    this.dataSources = new Map(dataSources.map((ds) => [ds.id, ds]));
    this.cacheDirectory = cacheDirectory;
    this.config = new DatabaseAgentConfig();
    this.profile = DatabaseAgentProfile;
    this.telemetry = createInvocationLogger(this.profile.id);
  }

  /**
   * Executes a generic query against any data source.
   *
   * @param {CategoryId} categoryId - Identifier of the data source to query.
   * @param {Record<string, unknown>} criteria - Key-value filters; supports operators like $eq, $in, $regex, etc.
   * @param {QueryOptions} options - Execution options (cache behavior, key prefix).
   * @returns {Promise<CategoryRecord[]>} Matching records (possibly retrieved from cache when enabled).
   * @throws {Error} When the categoryId does not exist.
   */
  async executeQuery(
    categoryId: CategoryId,
    criteria: Record<string, unknown> = {},
    options: QueryOptions = {}
  ): Promise<CategoryRecord[]> {
    const startTime = Date.now();
    const { useCache = true, cacheKeyPrefix } = options;

    try {
      // Check if data source exists
      const dataSource = this.dataSources.get(categoryId);
      if (!dataSource) {
        throw new Error(`Data source not found: ${categoryId}`);
      }

      // Try cache first if enabled
      if (useCache) {
        const cacheKey = this.buildCacheKey(
          categoryId,
          criteria,
          cacheKeyPrefix
        );
        const cached = await this.getCachedResult(cacheKey);
        if (cached) {
          // Emit telemetry for cache hit
          await this.telemetry("cacheHit", async () => cached, {
            categoryId,
            criteria,
            cacheKey,
          });
          return cached;
        }
      }

      // Execute the query
      const results = this.filterRecords(dataSource, criteria);
      const duration = Date.now() - startTime;

      await this.telemetry("queryExecuted", async () => results.length, {
        categoryId,
        criteria,
        resultCount: results.length,
        duration,
        cached: false,
      });

      // Cache result if enabled
      if (useCache) {
        const cacheKey = this.buildCacheKey(
          categoryId,
          criteria,
          cacheKeyPrefix
        );
        await this.cacheResult(cacheKey, results);
      }

      return results;
    } catch (error) {
      const duration = Date.now() - startTime;
      await this.telemetry("queryFailed", async () => Promise.reject(error), {
        categoryId,
        criteria,
        error: error instanceof Error ? error.message : String(error),
        duration,
      });
      throw error;
    }
  }

  /**
   * Gets available data sources.
   *
   * @returns {CategoryId[]} Array of known category identifiers.
   */
  getAvailableCategories(): CategoryId[] {
    return Array.from(this.dataSources.keys());
  }

  /**
   * Gets metadata for a specific data source.
   *
   * @param {CategoryId} categoryId - Category identifier to look up.
   * @returns {DataSource | undefined} Data source details or undefined when not found.
   */
  getCategoryInfo(categoryId: CategoryId): DataSource | undefined {
    return this.dataSources.get(categoryId);
  }

  /**
   * Clears cached results for a specific category.
   *
   * @param {CategoryId} categoryId - Category identifier for which to clear cached results.
   * @returns {Promise<void>} Resolves when deletion attempts complete.
   */
  async clearCache(categoryId: CategoryId): Promise<void> {
    const cacheDir = await this.cacheDirectory;
    const pattern = this.buildCacheKey(categoryId, {});
    // Note: This is a simplified implementation - in practice you'd want more sophisticated cache management
    await deleteSharedCacheEntry(cacheDir, pattern);
    await this.telemetry("cacheCleared", async () => true, { categoryId });
  }

  /**
   * Filters records based on generic criteria.
   *
   * @param {DataSource} dataSource - Data source to scan.
   * @param {Record<string, unknown>} criteria - Key-value filters to apply.
   * @returns {CategoryRecord[]} Records that satisfy all provided criteria.
   */
  private filterRecords(
    dataSource: DataSource,
    criteria: Record<string, unknown>
  ): CategoryRecord[] {
    if (Object.keys(criteria).length === 0) {
      return [...dataSource.records];
    }

    const fieldAliases = dataSource.fieldAliases ?? {};

    return dataSource.records.filter((record) => {
      return Object.entries(criteria).every(([field, value]) => {
        // Support field aliases for flexible querying
        const actualField = fieldAliases[field] ?? field;
        return this.matchesCriteria(record, actualField, value);
      });
    });
  }

  /**
   * Checks if a record matches specific criteria.
   *
   * @param {CategoryRecord} record - Candidate record to test.
   * @param {string} field - Field to evaluate.
   * @param {unknown} value - Expected value or operator object.
   * @returns {boolean} True when the record satisfies the condition.
   */
  private matchesCriteria(
    record: CategoryRecord,
    field: string,
    value: unknown
  ): boolean {
    const recordValue = record[field];

    if (value === null || value === undefined) {
      return recordValue === value;
    }

    // Support complex query operators
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      const operators = value as Record<string, unknown>;

      for (const [op, opValue] of Object.entries(operators)) {
        switch (op) {
          case "$eq":
            if (recordValue !== opValue) return false;
            break;
          case "$ne":
            if (recordValue === opValue) return false;
            break;
          case "$gt":
            if (
              typeof recordValue !== "number" ||
              typeof opValue !== "number" ||
              !(recordValue > opValue)
            )
              return false;
            break;
          case "$gte":
            if (
              typeof recordValue !== "number" ||
              typeof opValue !== "number" ||
              !(recordValue >= opValue)
            )
              return false;
            break;
          case "$lt":
            if (
              typeof recordValue !== "number" ||
              typeof opValue !== "number" ||
              !(recordValue < opValue)
            )
              return false;
            break;
          case "$lte":
            if (
              typeof recordValue !== "number" ||
              typeof opValue !== "number" ||
              !(recordValue <= opValue)
            )
              return false;
            break;
          case "$in":
            if (!Array.isArray(opValue) || !opValue.includes(recordValue))
              return false;
            break;
          case "$nin":
            if (!Array.isArray(opValue) || opValue.includes(recordValue))
              return false;
            break;
          case "$regex": {
            if (typeof recordValue !== "string") return false;
            if (typeof opValue !== "string") return false;
            const regex = new RegExp(opValue, "i");
            if (!regex.test(recordValue)) return false;
            break;
          }
          case "$exists": {
            const exists = recordValue !== undefined;
            if (typeof opValue !== "boolean" || exists !== opValue)
              return false;
            break;
          }
        }
      }
      return true;
    }

    // Simple equality check
    if (typeof recordValue === "string" && typeof value === "string") {
      return recordValue.toLowerCase().includes(value.toLowerCase());
    }

    // Array contains check
    if (Array.isArray(recordValue)) {
      return recordValue.includes(value);
    }

    return recordValue === value;
  }

  /**
   * Builds a stable cache key for a query.
   *
   * @param {CategoryId} categoryId - Category identifier.
   * @param {Record<string, unknown>} criteria - Query criteria used to derive a hash.
   * @param {string} prefix - Optional namespace prefix to avoid collisions.
   * @returns {string} Stable cache key.
   */
  private buildCacheKey(
    categoryId: CategoryId,
    criteria: Record<string, unknown>,
    prefix?: string
  ): string {
    // Sort criteria keys for stable cache keys
    const sortedCriteria = Object.keys(criteria)
      .sort()
      .reduce((acc, key) => {
        acc[key] = criteria[key];
        return acc;
      }, {} as Record<string, unknown>);

    const criteriaStr = JSON.stringify(sortedCriteria);
    const hash = crypto
      .createHash("md5")
      .update(criteriaStr)
      .digest("hex")
      .substring(0, 8);

    const parts = [prefix, "db-query", categoryId, hash].filter(Boolean);
    return parts.join(".");
  }

  /**
   * Retrieves cached query result.
   *
   * @param {string} cacheKey - Cache key previously generated via {@link buildCacheKey}.
   * @returns {Promise<CategoryRecord[] | null>} Cached records or null when not found.
   */
  private async getCachedResult(
    cacheKey: string
  ): Promise<CategoryRecord[] | null> {
    try {
      const cacheDir = await this.cacheDirectory;
      const entry = await readSharedCacheEntry<CategoryRecord[]>(
        cacheDir,
        cacheKey
      );
      return entry?.value ?? null;
    } catch {
      return null;
    }
  }

  /**
   * Stores query result in cache.
   *
   * @param {string} cacheKey - Cache key where the results will be stored.
   * @param {CategoryRecord[]} results - Records to persist.
   * @returns {Promise<void>} Resolves when the cache entry is written (errors are swallowed and logged).
   */
  private async cacheResult(
    cacheKey: string,
    results: CategoryRecord[]
  ): Promise<void> {
    try {
      const cacheDir = await this.cacheDirectory;
      const entry: SharedCacheEntry<CategoryRecord[]> = {
        key: cacheKey,
        toolName: this.profile.id,
        timestamp: new Date().toISOString(),
        value: results,
        metadata: { version: "1.0" },
      };
      await storeSharedCacheEntry(cacheDir, entry);
    } catch (error) {
      await this.telemetry("cacheWriteFailed", async () => false, {
        cacheKey,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}

/**
 * Database agent-specific configuration class (merged from config.ts)
 */
export class DatabaseAgentConfig extends BaseAgentConfig {
  private databaseConfig: DatabaseConfig;

  /**
   * Create a config wrapper using default TS config or overrides (for tests)
   *
   * @param {AgentConfigDefinition} [config] - Optional override configuration.
   */
  constructor(config?: AgentConfigDefinition) {
    const configToUse = config || databaseAgentConfig;
    const validationResult = validateAgentConfig(configToUse);
    if (!validationResult.isValid) {
      const report = generateValidationReport(validationResult);
      throw new Error(`Invalid database agent configuration:\n${report}`);
    }

    super(configToUse);
    this.databaseConfig = this.config.database || ({} as DatabaseConfig);
  }

  /**
   * Get field aliases for a specific category.
   *
   * @param {string} category - Canonical category identifier.
   * @returns {Record<string,string>} Map of alias → canonical field.
   */
  public getFieldAliases(category: string): Record<string, string> {
    return this.databaseConfig.fieldAliases?.[category] || {};
  }

  /**
   * Get all field aliases across categories.
   *
   * @returns {Record<string, Record<string,string>>} Map of category → alias map.
   */
  public getAllFieldAliases(): Record<string, Record<string, string>> {
    return this.databaseConfig.fieldAliases || {};
  }

  /**
   * Get caching configuration.
   *
   * @returns {DatabaseConfig['performance']['caching']} Caching knobs for query results.
   */
  public getCachingConfig(): DatabaseConfig["performance"]["caching"] {
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
   * Get query limits configuration.
   *
   * @returns {DatabaseConfig['performance']['limits']} Limits for query size and timeout.
   */
  public getQueryLimits(): DatabaseConfig["performance"]["limits"] {
    return (
      this.databaseConfig.performance?.limits || {
        queryTimeout: 30000,
        maxResultSize: 10000,
        maxJoinDepth: 3,
      }
    );
  }

  /**
   * Get schema validation settings.
   *
   * @returns {DatabaseConfig['validation']['schemaValidation']} Validation behavior options.
   */
  public getSchemaValidation(): DatabaseConfig["validation"]["schemaValidation"] {
    return (
      this.databaseConfig.validation?.schemaValidation || {
        enableStrictValidation: true,
        allowUnknownFields: false,
        autoTransformAliases: true,
      }
    );
  }

  /**
   * Get integrity check settings.
   *
   * @returns {DatabaseConfig['validation']['integrityChecks']} Integrity verification options.
   */
  public getIntegrityChecks(): DatabaseConfig["validation"]["integrityChecks"] {
    return (
      this.databaseConfig.validation?.integrityChecks || {
        validateRelationships: true,
        checkMissingReferences: true,
        warnOnSchemaIssues: true,
      }
    );
  }

  /**
   * Get supported filter operators.
   *
   * @returns {string[]} Operator names supported by filtering.
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
   * Get filtering configuration.
   *
   * @returns {DatabaseConfig['operations']['filtering']} Filtering behavior and operators.
   */
  public getFilteringConfig(): DatabaseConfig["operations"]["filtering"] {
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
   * Get join operation configuration.
   *
   * @returns {DatabaseConfig['operations']['joins']} Join options and limits.
   */
  public getJoinConfig(): DatabaseConfig["operations"]["joins"] {
    return (
      this.databaseConfig.operations?.joins || {
        supportedJoinTypes: ["inner", "left", "right"],
        autoDiscoverRelationships: true,
        maxJoinRecords: 1000,
      }
    );
  }

  /**
   * Get aggregation configuration.
   *
   * @returns {DatabaseConfig['operations']['aggregation']} Supported functions and limits.
   */
  public getAggregationConfig(): DatabaseConfig["operations"]["aggregation"] {
    return (
      this.databaseConfig.operations?.aggregation || {
        functions: ["count", "sum", "avg", "min", "max", "distinct"],
        enableGroupBy: true,
        maxGroups: 100,
      }
    );
  }

  /**
   * Get telemetry configuration.
   *
   * @returns {Record<string,unknown>} Telemetry logging thresholds and flags.
   */
  public getTelemetryConfig(): Record<string, unknown> {
    return {
      logQueries: this.config.telemetry?.logQueries ?? true,
      logPerformance: this.config.telemetry?.logPerformance ?? true,
      logCacheStats: this.config.telemetry?.logCacheStats ?? true,
      slowQueryThreshold: this.config.telemetry?.slowQueryThreshold ?? 1000,
    };
  }

  /**
   * Get error handling configuration.
   *
   * @returns {Record<string,unknown>} Retry and fallback strategy settings.
   */
  public getErrorHandlingConfig(): Record<string, unknown> {
    return {
      maxRetries: this.config.errorHandling?.maxRetries ?? 3,
      retryDelay: this.config.errorHandling?.retryDelay ?? 1000,
      exponentialBackoff: this.config.errorHandling?.exponentialBackoff ?? true,
      fallbackOnCacheError:
        this.config.errorHandling?.fallbackOnCacheError ?? true,
    };
  }

  /**
   * Check if caching is enabled by default.
   *
   * @returns {boolean} True when caching is enabled by default.
   */
  public isCachingEnabled(): boolean {
    return this.getCachingConfig().enabledByDefault;
  }

  /**
   * Check if strict validation is enabled.
   *
   * @returns {boolean} True when strict schema validation is enabled.
   */
  public isStrictValidationEnabled(): boolean {
    return this.getSchemaValidation().enableStrictValidation;
  }

  /**
   * Check if auto alias transformation is enabled.
   *
   * @returns {boolean} True when alias → field normalization is on.
   */
  public isAutoAliasTransformEnabled(): boolean {
    return this.getSchemaValidation().autoTransformAliases;
  }

  /**
   * Get default cache key prefix.
   *
   * @returns {string} Default cache key prefix string.
   */
  public getDefaultCacheKeyPrefix(): string {
    return this.getCachingConfig().defaultKeyPrefix;
  }

  /**
   * Get maximum result size for queries.
   *
   * @returns {number} Maximum number of records allowed in a result.
   */
  public getMaxResultSize(): number {
    return this.getQueryLimits().maxResultSize;
  }

  /**
   * Get query timeout in milliseconds.
   *
   * @returns {number} Query timeout in ms.
   */
  public getQueryTimeout(): number {
    return this.getQueryLimits().queryTimeout;
  }
}

/**
 * Creates a new DatabaseAgent instance with the provided data sources.
 *
 * @param {DataSource[]} dataSources - dataSources parameter.
 * @param {Promise<string>} cacheDirectory - cacheDirectory parameter.
 * @param {Partial<DatabaseAgentConfig>} config - config parameter.
 * @returns {DatabaseAgent} A configured database agent.
 */
export function createDatabaseAgent(
  dataSources: DataSource[],
  cacheDirectory: Promise<string>,
  config?: Partial<DatabaseAgentConfig>
): DatabaseAgent {
  return new DatabaseAgent(dataSources, cacheDirectory, config);
}
