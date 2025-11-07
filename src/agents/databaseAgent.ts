/**
 * @fileoverview Database-oriented agent that simulates querying the MCP
 * relevant-data workspace as if it were backed by persistent stores. The agent
 * focuses on structured retrieval with filtering, joins, and saved queries.
 *
 * @module agents/databaseAgent
 */

import * as crypto from "crypto";
import {
  deleteSharedCacheEntry,
  ensureCacheDirectory,
  readSharedCacheEntry,
  SharedCacheEntry,
  storeSharedCacheEntry
} from "../mcpCache";
import {
  CategoryId,
  CategoryRecord,
  RelevantDataManagerAgent,
  RemoteQueryBlueprint
} from "./relevantDataManagerAgent";
import { createInvocationLogger } from "../mcp/telemetry";
import { validateCategorySchemas } from "../mcp/schemaUtils";
import { DatabaseAgentProfile } from "../mcp/agentProfiles";

type BaseQuery = Record<string, unknown>;

const CRITERIA_FIELD_ALIASES: Record<CategoryId, Record<string, string>> = {
  people: {
    skill: "skills",
    applicationId: "applicationIds",
    policyId: "policyAcks"
  },
  departments: {
    applicationId: "applicationIds",
    policyId: "policyIds"
  },
  applications: {
    policyId: "relatedPolicyIds"
  },
  companyPolicies: {
    applicationId: "applicationIds"
  },
  companyResources: {
    applicationId: "applicationIds",
    policyId: "linkedPolicyIds"
  }
};

/**
 * Optional knobs for database queries.
 *
 * @typedef {object} QueryOptions
 * @property {boolean} [useCache] Whether the agent should cache the result in the shared cache.
 * @property {string} [cacheKeyPrefix] Prefix used when building the shared cache key.
 */
export interface QueryOptions {
  useCache?: boolean;
  cacheKeyPrefix?: string;
}

/**
 * Query filters used when searching for people.
 *
 * @typedef {object} PeopleQuery
 * @property {string} [departmentId]
 * @property {string} [skill]
 * @property {string} [location]
 * @property {string} [applicationId]
 * @property {string} [policyId]
 */
export interface PeopleQuery extends BaseQuery {
  departmentId?: string;
  skill?: string;
  location?: string;
  applicationId?: string;
  policyId?: string;
}

/**
 * Filters used to query departments.
 *
 * @typedef {object} DepartmentQuery
 * @property {string | null} [parentDepartmentId]
 * @property {string} [policyId]
 * @property {string} [applicationId]
 */
export interface DepartmentQuery extends BaseQuery {
  parentDepartmentId?: string | null;
  policyId?: string;
  applicationId?: string;
}

/**
 * Filters used to query applications.
 *
 * @typedef {object} ApplicationQuery
 * @property {string} [ownerDepartmentId]
 * @property {"low" | "medium" | "high"} [criticality]
 * @property {string} [policyId]
 */
export interface ApplicationQuery extends BaseQuery {
  ownerDepartmentId?: string;
  criticality?: "low" | "medium" | "high";
  policyId?: string;
}

/**
 * Filters used to query policies.
 *
 * @typedef {object} PolicyQuery
 * @property {string} [ownerDepartmentId]
 * @property {string} [category]
 * @property {string} [applicationId]
 */
export interface PolicyQuery extends BaseQuery {
  ownerDepartmentId?: string;
  category?: string;
  applicationId?: string;
}

/**
 * Filters used to query knowledge resources.
 *
 * @typedef {object} ResourceQuery
 * @property {string} [departmentId]
 * @property {string} [policyId]
 * @property {string} [applicationId]
 * @property {string} [type]
 */
export interface ResourceQuery extends BaseQuery {
  departmentId?: string;
  policyId?: string;
  applicationId?: string;
  type?: string;
}

/**
 * Structure returned when executing a saved remote query blueprint.
 *
 * @typedef {object} SavedQueryResult
 * @property {RemoteQueryBlueprint} blueprint Blueprint that was executed.
 * @property {CategoryRecord[]} results Matching records from the mock dataset.
 */
export interface SavedQueryResult {
  blueprint: RemoteQueryBlueprint;
  results: CategoryRecord[];
}

/**
 * Agent offering database-style access patterns.
 *
 * @example
 * ```ts
 * const database = new DatabaseAgent(new RelevantDataManagerAgent());
 * const people = await database.queryPeople({ departmentId: "dept-analytics" });
 * ```
 */
export class DatabaseAgent {
  private readonly cacheDirPromise: Promise<string>;
  private readonly telemetry = createInvocationLogger(DatabaseAgentProfile.id);

  /**
   * Create a {@link DatabaseAgent} instance.
   *
   * @param {RelevantDataManagerAgent} manager Data manager providing dataset access.
   * @param {Promise<string>} [cacheDirPromise] Optional override for the cache directory resolution.
   */
  constructor(private readonly manager: RelevantDataManagerAgent, cacheDirPromise?: Promise<string>) {
    this.cacheDirPromise = cacheDirPromise ?? ensureCacheDirectory();
    const categories = this.manager.listCategories().map((entry) => this.manager.getCategory(entry.id));
    const schemaSummary = validateCategorySchemas(categories);
    if (schemaSummary.missingRelationships.length || schemaSummary.duplicateSchemaNames.length) {
      console.warn(
        "[database-agent] Schema integrity issues detected",
        schemaSummary
      );
    }
  }

  /**
   * Search for people using the structured directory dataset.
   *
   * @param {PeopleQuery} [criteria] Filter parameters.
   * @param {QueryOptions} [options] Query execution options.
   * @returns {Promise<CategoryRecord[]>} Matching people records.
   */
  async queryPeople(criteria: PeopleQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("people", criteria, options);
  }

  /**
   * Retrieve departments by parent, applications, or policies.
   *
   * @param {DepartmentQuery} [criteria] Filter parameters.
   * @param {QueryOptions} [options] Query execution options.
   * @returns {Promise<CategoryRecord[]>} Matching department records.
   */
  async queryDepartments(criteria: DepartmentQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("departments", criteria, options);
  }

  /**
   * Retrieve applications using ownership or criticality filters.
   *
   * @param {ApplicationQuery} [criteria] Filter parameters.
   * @param {QueryOptions} [options] Query execution options.
   * @returns {Promise<CategoryRecord[]>} Matching application records.
   */
  async queryApplications(criteria: ApplicationQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("applications", criteria, options);
  }

  /**
   * Retrieve policies by department, category, or application coverage.
   *
   * @param {PolicyQuery} [criteria] Filter parameters.
   * @param {QueryOptions} [options] Query execution options.
   * @returns {Promise<CategoryRecord[]>} Matching policy records.
   */
  async queryPolicies(criteria: PolicyQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("companyPolicies", criteria, options);
  }

  /**
   * Retrieve knowledge resources filtered by relationships.
   *
   * @param {ResourceQuery} [criteria] Filter parameters.
   * @param {QueryOptions} [options] Query execution options.
   * @returns {Promise<CategoryRecord[]>} Matching resource records.
   */
  async queryResources(criteria: ResourceQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("companyResources", criteria, options);
  }

  /**
   * Execute a query against any category by identifier or alias.
   *
   * @param {string} topicOrId Category identifier or alias to query.
   * @param {Record<string, unknown>} [criteria] Filter parameters applied to the category.
   * @param {QueryOptions} [options] Query execution options.
   * @returns {Promise<CategoryRecord[]>} Matching records from the category.
   */
  async queryCategory(
    topicOrId: string,
    criteria: Record<string, unknown> = {},
    options?: QueryOptions
  ): Promise<CategoryRecord[]> {
    const category = this.manager.getCategory(topicOrId);
    return this.executeQuery(category.id, criteria, options);
  }

  /**
   * Execute a saved query blueprint from the relevant-data repository and
   * return local matches that satisfy the provided criteria.
   *
   * @param {string} topicOrId Category name or identifier that owns the blueprint.
   * @param {string} queryName Name of the saved query to execute.
   * @param {Record<string, unknown>} [criteria] Optional filters applied to the query.
   * @param {QueryOptions} [options] Additional execution options, including caching overrides.
   * @returns {Promise<SavedQueryResult>} Blueprint and results pair.
   * @throws {Error} When the query cannot be found for the given category.
   * @example
   * ```ts
   * const saved = await database.runSavedQuery("departments", "List departments");
   * console.log(saved.results.length);
   * ```
   */
  async runSavedQuery(
    topicOrId: string,
    queryName: string,
    criteria: Record<string, unknown> = {},
    options?: QueryOptions
  ): Promise<SavedQueryResult> {
    const category = this.manager.getCategory(topicOrId);
    const blueprint = category.queries.find((entry) => entry.name.toLowerCase() === queryName.toLowerCase());
    if (!blueprint) {
      throw new Error(`Unknown query '${queryName}' for category '${category.name}'`);
    }
    const results = await this.executeQuery(category.id, criteria, {
      cacheKeyPrefix: `saved-query:${category.id}:${blueprint.name}`,
      ...options
    });
    return { blueprint, results };
  }

  /**
   * Execute an ad-hoc search across a category with optional caching.
   *
   * @param {CategoryId} categoryId Category being queried.
   * @param {Record<string, unknown>} criteria Normalised filter criteria.
   * @param {QueryOptions} [options] Query execution options.
   * @returns {Promise<CategoryRecord[]>} Matching records.
   */
  private async executeQuery(
    categoryId: CategoryId,
    criteria: Record<string, unknown>,
    options: QueryOptions = {}
  ): Promise<CategoryRecord[]> {
    return this.telemetry(
      "executeQuery",
      async () => {
        const normalisedCriteria = this.normaliseCriteria(criteria);
        const useCache = options.useCache ?? true;
        const cacheKey = useCache
          ? this.buildCacheKey(categoryId, normalisedCriteria, options.cacheKeyPrefix)
          : undefined;

        if (!cacheKey) {
          return this.performFilter(categoryId, normalisedCriteria);
        }

        const cacheDir = await this.cacheDirPromise;
        const cached = await readSharedCacheEntry<CategoryRecord[]>(cacheDir, cacheKey);
        const currentHash = this.manager.getCategoryRecordHash(categoryId);
        if (cached?.metadata?.recordHash === currentHash) {
          return cached.value;
        }

        if (cached) {
          await deleteSharedCacheEntry(cacheDir, cacheKey);
        }

        const results = this.performFilter(categoryId, normalisedCriteria);
        const entry: SharedCacheEntry<CategoryRecord[]> = {
          key: cacheKey,
          toolName: DatabaseAgentProfile.id,
          timestamp: new Date().toISOString(),
          value: results,
          metadata: {
            categoryId,
            criteria: normalisedCriteria,
            recordHash: currentHash,
            datasetFingerprint: this.manager.getDatasetFingerprint()
          }
        };
        await storeSharedCacheEntry(cacheDir, entry);
        return results;
      },
      { categoryId }
    );
  }

  /**
   * Run the actual filtering logic against the dataset.
   *
   * @param {CategoryId} categoryId Category to evaluate.
   * @param {Record<string, unknown>} criteria Filter criteria after aliasing.
   * @returns {CategoryRecord[]} Records that satisfy the criteria.
   */
  private performFilter(categoryId: CategoryId, criteria: Record<string, unknown>): CategoryRecord[] {
    const records = this.manager.getRecords(categoryId);
    const remappedCriteria = this.applyAliases(categoryId, criteria);
    return records.filter((record) => this.matchesCriteria(record, remappedCriteria));
  }

  /**
   * Remap friendly filter keys to dataset field names.
   *
   * @param {CategoryId} categoryId Category whose alias map should be used.
   * @param {Record<string, unknown>} criteria Original filter criteria supplied by the user.
   * @returns {Record<string, unknown>} Criteria with keys remapped to dataset fields.
   */
  private applyAliases(categoryId: CategoryId, criteria: Record<string, unknown>): Record<string, unknown> {
    const aliases = CRITERIA_FIELD_ALIASES[categoryId] ?? {};
    return Object.entries(criteria).reduce<Record<string, unknown>>((acc, [key, value]) => {
      acc[aliases[key] ?? key] = value;
      return acc;
    }, {});
  }

  /**
   * Normalise filter criteria for consistent caching and comparisons.
   *
   * @param {Record<string, unknown>} criteria Filter criteria supplied by callers.
   * @returns {Record<string, unknown>} Criteria stripped of empty values and with consistent casing.
   */
  private normaliseCriteria(criteria: Record<string, unknown>): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(criteria)) {
      if (value === undefined || value === "") {
        continue;
      }
      if (Array.isArray(value)) {
        result[key] = value.filter((item) => item !== undefined && item !== null).map((item) => this.normaliseValue(item));
        continue;
      }
      result[key] = this.normaliseValue(value);
    }
    return result;
  }

  /**
   * Ensure a value is ready for comparisons (case normalisation, etc.).
   *
   * @param {unknown} value Raw value supplied in the criteria.
   * @returns {unknown} Normalised value ready for strict comparisons.
   */
  private normaliseValue(value: unknown): unknown {
    if (typeof value === "string") {
      return value.trim().toLowerCase();
    }
    if (typeof value === "number" || typeof value === "boolean") {
      return value;
    }
    if (value == null) {
      return value;
    }
    if (Array.isArray(value)) {
      return value.map((entry) => this.normaliseValue(entry));
    }
    return value;
  }

  /**
   * Determine whether a record satisfies all criteria.
   *
   * @param {CategoryRecord} record Record being evaluated.
   * @param {Record<string, unknown>} criteria Normalised comparison values.
   * @returns {boolean} `true` when the record matches all filters.
   */
  private matchesCriteria(record: CategoryRecord, criteria: Record<string, unknown>): boolean {
    for (const [key, expected] of Object.entries(criteria)) {
      const actual = record[key];
      if (!this.valueMatches(actual, expected)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Compare two values supporting arrays and case-insensitive strings.
   *
   * @param {unknown} actual Value sourced from the record.
   * @param {unknown} expected Comparison value derived from the criteria.
   * @returns {boolean} `true` when the values are considered a match.
   */
  private valueMatches(actual: unknown, expected: unknown): boolean {
    if (expected == null) {
      return actual == null;
    }
    if (typeof expected === "string") {
      if (Array.isArray(actual)) {
        return actual.some((item) => typeof item === "string" && item.toLowerCase() === expected);
      }
      if (typeof actual !== "string") {
        return false;
      }
      return actual.toLowerCase() === expected;
    }
    if (Array.isArray(expected)) {
      if (!Array.isArray(actual)) {
        return false;
      }
      const expectedValues = expected.map((item) =>
        typeof item === "string" ? item : String(item).toLowerCase()
      );
      const actualValues = actual.map((item) => (typeof item === "string" ? item.toLowerCase() : String(item)));
      return expectedValues.every((value) => actualValues.includes(value));
    }
    if (typeof expected === "number" || typeof expected === "boolean") {
      return actual === expected;
    }
    if (typeof expected === "object") {
      if (expected && typeof actual === "object" && actual) {
        return Object.entries(expected).every(([key, value]) =>
          this.valueMatches((actual as Record<string, unknown>)[key], value)
        );
      }
      return false;
    }
    return Object.is(actual, expected);
  }

  /**
   * Compute a deterministic cache key for query results.
   *
   * @param {CategoryId} categoryId Category for which the query is executed.
   * @param {Record<string, unknown>} criteria Normalised filter criteria.
   * @param {string} [prefix="query"] Cache key prefix.
   * @returns {string} Hash-based cache key.
   */
  private buildCacheKey(categoryId: CategoryId, criteria: Record<string, unknown>, prefix = "query"): string {
    const serialised = JSON.stringify(this.sortObject(criteria));
    const digest = crypto.createHash("sha1").update(serialised).digest("hex");
    return `${prefix}:${categoryId}:${digest}`;
  }

  /**
   * Recursively sort object keys to ensure stable cache keys.
   *
   * @param {unknown} value Value to be sorted.
   * @returns {unknown} Value with deterministic key ordering.
   */
  private sortObject(value: unknown): unknown {
    if (Array.isArray(value)) {
      return value.map((entry) => this.sortObject(entry));
    }
    if (value && typeof value === "object") {
      return Object.keys(value as Record<string, unknown>)
        .sort()
        .reduce<Record<string, unknown>>((acc, key) => {
          acc[key] = this.sortObject((value as Record<string, unknown>)[key]);
          return acc;
        }, {});
    }
    return value;
  }
}

/**
 * Factory helper that produces a {@link DatabaseAgent} with a default manager.
 *
 * @param {RelevantDataManagerAgent} [manager] Optional manager to reuse.
 * @returns {DatabaseAgent} Instantiated database agent.
 * @example
 * ```ts
 * const agent = createDatabaseAgent();
 * const policies = await agent.queryPolicies({ category: "security" });
 * ```
 */
export function createDatabaseAgent(manager?: RelevantDataManagerAgent): DatabaseAgent {
  return new DatabaseAgent(manager ?? new RelevantDataManagerAgent());
}
