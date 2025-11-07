/**
 * @fileoverview Database-oriented agent that simulates querying the MCP
 * relevant-data workspace as if it were backed by persistent stores. The agent
 * focuses on structured retrieval with filtering, joins, and saved queries.
 *
 * @module agents/databaseAgent
 */

import * as crypto from "crypto";
import {
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
 * @interface QueryOptions
 * @property {boolean=} useCache - Whether the agent should cache the result in the shared cache.
 * @property {string=} cacheKeyPrefix - Prefix used when building the shared cache key.
 */
export interface QueryOptions {
  /** Whether the agent should cache the result in the shared cache. */
  useCache?: boolean;
  /** Prefix used when building the shared cache key. */
  cacheKeyPrefix?: string;
}

/**
 * Query filters used when searching for people.
 *
 * @interface PeopleQuery
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
 * @interface DepartmentQuery
 */
export interface DepartmentQuery extends BaseQuery {
  parentDepartmentId?: string | null;
  policyId?: string;
  applicationId?: string;
}

/**
 * Filters used to query applications.
 *
 * @interface ApplicationQuery
 */
export interface ApplicationQuery extends BaseQuery {
  ownerDepartmentId?: string;
  criticality?: "low" | "medium" | "high";
  policyId?: string;
}

/**
 * Filters used to query policies.
 *
 * @interface PolicyQuery
 */
export interface PolicyQuery extends BaseQuery {
  ownerDepartmentId?: string;
  category?: string;
  applicationId?: string;
}

/**
 * Filters used to query knowledge resources.
 *
 * @interface ResourceQuery
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
 * @interface SavedQueryResult
 * @property {RemoteQueryBlueprint} blueprint - Blueprint metadata describing the query executed.
 * @property {CategoryRecord[]} results - Records that satisfied the blueprint and criteria.
 */
export interface SavedQueryResult {
  blueprint: RemoteQueryBlueprint;
  results: CategoryRecord[];
}

/**
 * Agent offering database-style access patterns.
 *
 * @example
 * const agent = new DatabaseAgent(manager);
 * const people = await agent.queryPeople({ departmentId: "sales" });
 */
export class DatabaseAgent {
  private readonly cacheDirPromise: Promise<string>;

  /**
   * Create a new database agent.
   *
   * @param {RelevantDataManagerAgent} manager - Data manager providing dataset access.
   * @param {Promise<string>=} cacheDirPromise - Optional promise resolving to the cache directory.
   */
  constructor(private readonly manager: RelevantDataManagerAgent, cacheDirPromise?: Promise<string>) {
    this.cacheDirPromise = cacheDirPromise ?? ensureCacheDirectory();
  }

  /**
   * Search for people using the structured directory dataset.
   *
   * @param {PeopleQuery=} criteria - Optional filters limiting the result set.
   * @param {QueryOptions=} options - Optional query execution flags.
   * @returns {Promise<CategoryRecord[]>} Matching people records.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the underlying dataset cannot be resolved.
   * @example
   * const staff = await agent.queryPeople({ skill: "typescript" });
   */
  async queryPeople(criteria: PeopleQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("people", criteria, options);
  }

  /**
   * Retrieve departments by parent, applications, or policies.
   *
   * @param {DepartmentQuery=} criteria - Filters to apply when searching departments.
   * @param {QueryOptions=} options - Optional query execution flags.
   * @returns {Promise<CategoryRecord[]>} Department records that match the criteria.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the underlying dataset cannot be resolved.
   * @example
   * const departments = await agent.queryDepartments({ parentDepartmentId: "hq" });
   */
  async queryDepartments(criteria: DepartmentQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("departments", criteria, options);
  }

  /**
   * Retrieve applications using ownership or criticality filters.
   *
   * @param {ApplicationQuery=} criteria - Filters used to narrow down applications.
   * @param {QueryOptions=} options - Optional query execution flags.
   * @returns {Promise<CategoryRecord[]>} Application records.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the underlying dataset cannot be resolved.
   * @example
   * const apps = await agent.queryApplications({ criticality: "high" });
   */
  async queryApplications(criteria: ApplicationQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("applications", criteria, options);
  }

  /**
   * Retrieve policies by department, category, or application coverage.
   *
   * @param {PolicyQuery=} criteria - Filters describing which policies to return.
   * @param {QueryOptions=} options - Optional query execution flags.
   * @returns {Promise<CategoryRecord[]>} Matching policy records.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the underlying dataset cannot be resolved.
   * @example
   * const policies = await agent.queryPolicies({ category: "security" });
   */
  async queryPolicies(criteria: PolicyQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("companyPolicies", criteria, options);
  }

  /**
   * Retrieve knowledge resources filtered by relationships.
   *
   * @param {ResourceQuery=} criteria - Filters describing the desired resources.
   * @param {QueryOptions=} options - Optional query execution flags.
   * @returns {Promise<CategoryRecord[]>} Knowledge resource records.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the underlying dataset cannot be resolved.
   * @example
   * const resources = await agent.queryResources({ type: "guide" });
   */
  async queryResources(criteria: ResourceQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("companyResources", criteria, options);
  }

  /**
   * Execute a saved query blueprint from the relevant-data repository and
   * return local matches that satisfy the provided criteria.
   *
   * @param {string} topicOrId - Category name or identifier containing the blueprint.
   * @param {string} queryName - Display name of the blueprint to execute.
   * @param {Record<string, unknown>=} criteria - Additional filters applied during execution.
   * @param {QueryOptions=} options - Optional query execution flags.
   * @returns {Promise<SavedQueryResult>} Blueprint metadata and associated results.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the category cannot be resolved.
   * @throws {Error} When the requested blueprint does not exist.
   * @example
   * const saved = await agent.runSavedQuery("people", "By Skill", { skill: "python" });
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
   * @param {CategoryId} categoryId - Category identifier to search within.
   * @param {Record<string, unknown>} criteria - Normalised filter criteria.
   * @param {QueryOptions=} options - Optional query execution flags.
   * @returns {Promise<CategoryRecord[]>} Records matching the given criteria.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the category cannot be resolved.
   * @example
   * const results = await agent["executeQuery"]("people", { skill: "sql" });
   */
  private async executeQuery(
    categoryId: CategoryId,
    criteria: Record<string, unknown>,
    options: QueryOptions = {}
  ): Promise<CategoryRecord[]> {
    const normalisedCriteria = this.normaliseCriteria(criteria);
    const useCache = options.useCache ?? true;
    const cacheKey = useCache
      ? this.buildCacheKey(categoryId, normalisedCriteria, options.cacheKeyPrefix)
      : undefined;

    if (cacheKey) {
      const cacheDir = await this.cacheDirPromise;
      const cached = await readSharedCacheEntry<CategoryRecord[]>(cacheDir, cacheKey);
      if (cached) {
        return cached.value;
      }
      const results = this.performFilter(categoryId, normalisedCriteria);
      const entry: SharedCacheEntry<CategoryRecord[]> = {
        key: cacheKey,
        toolName: "database-agent",
        timestamp: new Date().toISOString(),
        value: results,
        metadata: { categoryId, criteria: normalisedCriteria }
      };
      await storeSharedCacheEntry(cacheDir, entry);
      return results;
    }

    return this.performFilter(categoryId, normalisedCriteria);
  }

  /**
   * Run the actual filtering logic against the dataset.
   *
   * @param {CategoryId} categoryId - Category identifier to search within.
   * @param {Record<string, unknown>} criteria - Normalised filter criteria.
   * @returns {CategoryRecord[]} Filtered records that match the criteria.
   * @throws {import("./relevantDataManagerAgent").UnknownCategoryError} When the category cannot be resolved.
   * @example
   * const filtered = agent["performFilter"]("people", { skills: ["sql"] });
   */
  private performFilter(categoryId: CategoryId, criteria: Record<string, unknown>): CategoryRecord[] {
    const records = this.manager.getRecords(categoryId);
    const remappedCriteria = this.applyAliases(categoryId, criteria);
    return records.filter((record) => this.matchesCriteria(record, remappedCriteria));
  }

  /**
   * Remap friendly filter keys to dataset field names.
   *
   * @param {CategoryId} categoryId - Category identifier used to resolve aliases.
   * @param {Record<string, unknown>} criteria - Filter criteria possibly using aliases.
   * @returns {Record<string, unknown>} Criteria with canonical field names.
   * @example
   * const remapped = agent["applyAliases"]("people", { skill: "sql" });
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
   * @param {Record<string, unknown>} criteria - Raw criteria supplied by the caller.
   * @returns {Record<string, unknown>} Cleaned and normalised criteria.
   * @example
   * const normalised = agent["normaliseCriteria"]({ skill: " SQL " });
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
   * @param {unknown} value - Input value requiring normalisation.
   * @returns {unknown} Normalised value used during comparisons.
   * @example
   * const value = agent["normaliseValue"](" Example ");
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
   * @param {CategoryRecord} record - Record under evaluation.
   * @param {Record<string, unknown>} criteria - Criteria to validate against.
   * @returns {boolean} `true` when the record satisfies every condition.
   * @example
   * const isMatch = agent["matchesCriteria"](record, { skills: ["sql"] });
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
   * @param {unknown} actual - Value sourced from the record.
   * @param {unknown} expected - Value derived from the criteria.
   * @returns {boolean} `true` when the values are considered equivalent.
   * @example
   * const matches = agent["valueMatches"](["SQL"], "sql");
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
   * @param {CategoryId} categoryId - Category identifier.
   * @param {Record<string, unknown>} criteria - Normalised filter criteria.
   * @param {string=} prefix - Optional cache key prefix.
   * @returns {string} Deterministic cache key derived from the inputs.
   * @example
   * const key = agent["buildCacheKey"]("people", { skill: "sql" });
   */
  private buildCacheKey(categoryId: CategoryId, criteria: Record<string, unknown>, prefix = "query"): string {
    const serialised = JSON.stringify(this.sortObject(criteria));
    const digest = crypto.createHash("sha1").update(serialised).digest("hex");
    return `${prefix}:${categoryId}:${digest}`;
  }

  /**
   * Recursively sort object keys to ensure stable cache keys.
   *
   * @param {unknown} value - Value that should have a stable serialisation order.
   * @returns {unknown} Value with sorted object keys.
   * @example
   * const sorted = agent["sortObject"]({ b: 1, a: 2 });
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
 * Factory helper that constructs a {@link DatabaseAgent} with a default manager.
 *
 * @param {RelevantDataManagerAgent=} manager - Optional data manager to reuse.
 * @returns {DatabaseAgent} Database agent ready for use.
 * @example
 * const agent = createDatabaseAgent();
 */
export function createDatabaseAgent(manager?: RelevantDataManagerAgent): DatabaseAgent {
  return new DatabaseAgent(manager ?? new RelevantDataManagerAgent());
}
