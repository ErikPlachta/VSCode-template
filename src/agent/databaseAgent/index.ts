/**
 * @file Data-agnostic database agent for structured data retrieval.
 * @fileoverview Generic database agent that can work with any data structure
 * without hard-coded knowledge of specific categories or fields.
 *
 * @module agent/databaseAgent
 */

import * as crypto from "crypto";
import {
  deleteSharedCacheEntry,
  ensureCacheDirectory,
  readSharedCacheEntry,
  SharedCacheEntry,
  storeSharedCacheEntry,
} from "@extension/mcpCache";
import { createInvocationLogger } from "@mcp/telemetry";
import { DatabaseAgentProfile } from "@mcp/config/agentProfiles";
import { DatabaseAgentConfig } from "./config";

// Generic types that work with any data structure
export type CategoryId = string;

export interface CategoryRecord {
  id: string;
  [key: string]: unknown;
}

export interface DataSource {
  id: CategoryId;
  name: string;
  records: CategoryRecord[];
  schema?: unknown;
  fieldAliases?: Record<string, string>; // Optional field mapping for this data source
}

export interface QueryResult {
  categoryId: CategoryId;
  records: CategoryRecord[];
  totalCount: number;
  cached: boolean;
}

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
  private readonly log: ReturnType<typeof createInvocationLogger>;
  private readonly profile: DatabaseAgentProfile;
  private readonly config: DatabaseAgentConfig;

  /**
   * Creates a new DatabaseAgent instance.
   *
   * @param dataSources - Array of data sources to query against
   * @param cacheDirectory - Promise resolving to cache directory path
   * @param config - Optional configuration for the agent
   */
  constructor(
    dataSources: DataSource[],
    cacheDirectory: Promise<string>,
    config?: Partial<DatabaseAgentConfig>
  ) {
    this.dataSources = new Map(dataSources.map((ds) => [ds.id, ds]));
    this.cacheDirectory = cacheDirectory;
    this.config = { ...DatabaseAgentConfig.defaults, ...config };
    this.profile = DatabaseAgentProfile;
    this.log = createInvocationLogger(this.profile.name);
  }

  /**
   * Executes a generic query against any data source.
   *
   * @param categoryId - Identifier of the data source to query
   * @param criteria - Query criteria as key-value pairs
   * @param options - Optional query configuration
   * @returns Promise resolving to matching records
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
          this.log.debug(`Cache hit for query`, {
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

      this.log.info(`Query executed`, {
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
      this.log.error(`Query failed`, {
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
   * @returns Array of category IDs that can be queried
   */
  getAvailableCategories(): CategoryId[] {
    return Array.from(this.dataSources.keys());
  }

  /**
   * Gets metadata for a specific data source.
   *
   * @param categoryId - Category to get info for
   * @returns Data source metadata or undefined if not found
   */
  getCategoryInfo(categoryId: CategoryId): DataSource | undefined {
    return this.dataSources.get(categoryId);
  }

  /**
   * Clears cached results for a specific category.
   *
   * @param categoryId - Category to clear cache for
   */
  async clearCache(categoryId: CategoryId): Promise<void> {
    const cacheDir = await this.cacheDirectory;
    const pattern = this.buildCacheKey(categoryId, {});
    // Note: This is a simplified implementation - in practice you'd want more sophisticated cache management
    await deleteSharedCacheEntry(pattern);
    this.log.info(`Cache cleared for category`, { categoryId });
  }

  /**
   * Filters records based on generic criteria.
   *
   * @private
   * @param dataSource - Data source to filter
   * @param criteria - Generic filter criteria
   * @returns Filtered records
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
   * @param record - Record to check
   * @param field - Field to check
   * @param value - Expected value or complex criteria
   * @returns True if record matches criteria
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
            if (!(((recordValue as number) > opValue) as number)) return false;
            break;
          case "$gte":
            if (!(((recordValue as number) >= opValue) as number)) return false;
            break;
          case "$lt":
            if (!(((recordValue as number) < opValue) as number)) return false;
            break;
          case "$lte":
            if (!(((recordValue as number) <= opValue) as number)) return false;
            break;
          case "$in":
            if (!Array.isArray(opValue) || !opValue.includes(recordValue))
              return false;
            break;
          case "$nin":
            if (!Array.isArray(opValue) || opValue.includes(recordValue))
              return false;
            break;
          case "$regex":
            if (typeof recordValue !== "string") return false;
            const regex = new RegExp(opValue as string, "i");
            if (!regex.test(recordValue)) return false;
            break;
          case "$exists":
            const exists = recordValue !== undefined;
            if (exists !== opValue) return false;
            break;
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
   * @param categoryId - Category being queried
   * @param criteria - Query criteria
   * @param prefix - Optional cache key prefix
   * @returns Cache key string
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
   * @param cacheKey - Cache key to lookup
   * @returns Cached records or null if not found
   */
  private async getCachedResult(
    cacheKey: string
  ): Promise<CategoryRecord[] | null> {
    try {
      const entry = await readSharedCacheEntry<CategoryRecord[]>(cacheKey);
      return entry?.data ?? null;
    } catch {
      return null;
    }
  }

  /**
   * Stores query result in cache.
   *
   * @private
   * @param cacheKey - Cache key for storage
   * @param results - Results to cache
   */
  private async cacheResult(
    cacheKey: string,
    results: CategoryRecord[]
  ): Promise<void> {
    try {
      const entry: SharedCacheEntry<CategoryRecord[]> = {
        key: cacheKey,
        data: results,
        timestamp: Date.now(),
        version: "1.0",
      };
      await storeSharedCacheEntry(entry);
    } catch (error) {
      this.log.warn(`Failed to cache result`, { cacheKey, error });
    }
  }
}

/**
 * Creates a new DatabaseAgent instance with the provided data sources.
 *
 * @param dataSources - Data sources for the agent to query
 * @param cacheDirectory - Cache directory path promise
 * @param config - Optional agent configuration
 * @returns New DatabaseAgent instance
 */
export function createDatabaseAgent(
  dataSources: DataSource[],
  cacheDirectory: Promise<string>,
  config?: Partial<DatabaseAgentConfig>
): DatabaseAgent {
  return new DatabaseAgent(dataSources, cacheDirectory, config);
}
