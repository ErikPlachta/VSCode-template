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
import { DatabaseAgentConfig } from "./config";

// Generic types that work with any data structure
/** Identifier for a generic category or data source. */
export type CategoryId = string;

/** Generic record model allowing arbitrary fields. */
export interface CategoryRecord {
  id: string;
  [key: string]: unknown;
}

/** Definition for a data source the agent can query. */
export interface DataSource {
  id: CategoryId;
  name: string;
  records: CategoryRecord[];
  schema?: unknown;
  /** Optional field mapping for this data source */
  fieldAliases?: Record<string, string>;
}

/** Result metadata returned after executing a query. */
export interface QueryResult {
  categoryId: CategoryId;
  records: CategoryRecord[];
  totalCount: number;
  cached: boolean;
}

/** Optional knobs for query execution behaviour. */
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
   * @param {DataSource[]} dataSources - - Array of data sources to query against
   * @param {Promise<string>} cacheDirectory - - Promise resolving to cache directory path
   * @param {Partial<DatabaseAgentConfig>} _config - - Optional configuration for the agent (currently ignored; config driven by typed defaults)
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
   * @param {CategoryId} categoryId - - Identifier of the data source to query
   * @param {Record<string, unknown>} criteria - - Query criteria as key-value pairs
   * @param {QueryOptions} options - - Optional query configuration
   * @returns {Promise<CategoryRecord[]>} - Promise resolving to matching records
   *
   * @example
   * ```typescript
   * // Query any data source with any criteria
   * const results = await agent.executeQuery("products", {
   *   category: "electronics",
   *   price: { $lt: 1000 }
   * });
   * ```
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
   * @returns {CategoryId[]} - Array of category IDs that can be queried
   */
  getAvailableCategories(): CategoryId[] {
    return Array.from(this.dataSources.keys());
  }

  /**
   * Gets metadata for a specific data source.
   *
   * @param {CategoryId} categoryId - - Category to get info for
   * @returns {DataSource | undefined} - Data source metadata or undefined if not found
   */
  getCategoryInfo(categoryId: CategoryId): DataSource | undefined {
    return this.dataSources.get(categoryId);
  }

  /**
   * Clears cached results for a specific category.
   *
   * @param {CategoryId} categoryId - - Category to clear cache for
   * @returns {Promise<void>} - Resolves when cache clear telemetry completes
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
   * @private
   * @param {DataSource} dataSource - - Data source to filter
   * @param {Record<string, unknown>} criteria - - Generic filter criteria
   * @returns {CategoryRecord[]} - Filtered records
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
   * @private
   * @param {CategoryRecord} record - - Record to check
   * @param {string} field - - Field to check
   * @param {unknown} value - - Expected value or complex criteria
   * @returns {boolean} - True if record matches criteria
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
   * @private
   * @param {CategoryId} categoryId - - Category being queried
   * @param {Record<string, unknown>} criteria - - Query criteria
   * @param {string} [prefix]-  - Optional cache key prefix
   * @returns {string} - Cache key string
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
   * @private
   * @param {string} cacheKey - - Cache key to lookup
   * @returns {Promise<CategoryRecord[] | null>} - Cached records or null if not found
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
   * @private
   * @param {string} cacheKey - - Cache key for storage
   * @param {CategoryRecord[]} results - - Results to cache
   * @returns {Promise<void>} - Resolves when the cache write completes (best-effort)
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
 * Creates a new DatabaseAgent instance with the provided data sources.
 *
 * @param {DataSource[]} dataSources - - Data sources for the agent to query
 * @param {Promise<string>} cacheDirectory - - Cache directory path promise
 * @param {Partial<DatabaseAgentConfig>} config - - Optional agent configuration
 * @returns {DatabaseAgent} - New DatabaseAgent instance
 */
export function createDatabaseAgent(
  dataSources: DataSource[],
  cacheDirectory: Promise<string>,
  config?: Partial<DatabaseAgentConfig>
): DatabaseAgent {
  return new DatabaseAgent(dataSources, cacheDirectory, config);
}
