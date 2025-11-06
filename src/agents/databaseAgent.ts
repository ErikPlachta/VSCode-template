/**
 * @fileoverview Database-oriented agent that simulates querying the MCP
 * relevant-data workspace as if it were backed by persistent stores. The agent
 * focuses on structured retrieval with filtering, joins, and saved queries.
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

/** Optional knobs for database queries. */
export interface QueryOptions {
  /** Whether the agent should cache the result in the shared cache. */
  useCache?: boolean;
  /** Prefix used when building the shared cache key. */
  cacheKeyPrefix?: string;
}

/** Query filters used when searching for people. */
export interface PeopleQuery extends BaseQuery {
  departmentId?: string;
  skill?: string;
  location?: string;
  applicationId?: string;
  policyId?: string;
}

/** Filters used to query departments. */
export interface DepartmentQuery extends BaseQuery {
  parentDepartmentId?: string | null;
  policyId?: string;
  applicationId?: string;
}

/** Filters used to query applications. */
export interface ApplicationQuery extends BaseQuery {
  ownerDepartmentId?: string;
  criticality?: "low" | "medium" | "high";
  policyId?: string;
}

/** Filters used to query policies. */
export interface PolicyQuery extends BaseQuery {
  ownerDepartmentId?: string;
  category?: string;
  applicationId?: string;
}

/** Filters used to query knowledge resources. */
export interface ResourceQuery extends BaseQuery {
  departmentId?: string;
  policyId?: string;
  applicationId?: string;
  type?: string;
}

/** Structure returned when executing a saved remote query blueprint. */
export interface SavedQueryResult {
  blueprint: RemoteQueryBlueprint;
  results: CategoryRecord[];
}

/** Agent offering database-style access patterns. */
export class DatabaseAgent {
  private readonly cacheDirPromise: Promise<string>;

  constructor(private readonly manager: RelevantDataManagerAgent, cacheDirPromise?: Promise<string>) {
    this.cacheDirPromise = cacheDirPromise ?? ensureCacheDirectory();
  }

  /** Search for people using the structured directory dataset. */
  async queryPeople(criteria: PeopleQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("people", criteria, options);
  }

  /** Retrieve departments by parent, applications, or policies. */
  async queryDepartments(criteria: DepartmentQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("departments", criteria, options);
  }

  /** Retrieve applications using ownership or criticality filters. */
  async queryApplications(criteria: ApplicationQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("applications", criteria, options);
  }

  /** Retrieve policies by department, category, or application coverage. */
  async queryPolicies(criteria: PolicyQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("companyPolicies", criteria, options);
  }

  /** Retrieve knowledge resources filtered by relationships. */
  async queryResources(criteria: ResourceQuery = {}, options?: QueryOptions): Promise<CategoryRecord[]> {
    return this.executeQuery("companyResources", criteria, options);
  }

  /**
   * Execute a saved query blueprint from the relevant-data repository and
   * return local matches that satisfy the provided criteria.
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

  /** Execute an ad-hoc search across a category with optional caching. */
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

  /** Run the actual filtering logic against the dataset. */
  private performFilter(categoryId: CategoryId, criteria: Record<string, unknown>): CategoryRecord[] {
    const records = this.manager.getRecords(categoryId);
    const remappedCriteria = this.applyAliases(categoryId, criteria);
    return records.filter((record) => this.matchesCriteria(record, remappedCriteria));
  }

  /** Remap friendly filter keys to dataset field names. */
  private applyAliases(categoryId: CategoryId, criteria: Record<string, unknown>): Record<string, unknown> {
    const aliases = CRITERIA_FIELD_ALIASES[categoryId] ?? {};
    return Object.entries(criteria).reduce<Record<string, unknown>>((acc, [key, value]) => {
      acc[aliases[key] ?? key] = value;
      return acc;
    }, {});
  }

  /** Normalise filter criteria for consistent caching and comparisons. */
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

  /** Ensure a value is ready for comparisons (case normalisation, etc.). */
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

  /** Determine whether a record satisfies all criteria. */
  private matchesCriteria(record: CategoryRecord, criteria: Record<string, unknown>): boolean {
    for (const [key, expected] of Object.entries(criteria)) {
      const actual = record[key];
      if (!this.valueMatches(actual, expected)) {
        return false;
      }
    }
    return true;
  }

  /** Compare two values supporting arrays and case-insensitive strings. */
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

  /** Compute a deterministic cache key for query results. */
  private buildCacheKey(categoryId: CategoryId, criteria: Record<string, unknown>, prefix = "query"): string {
    const serialised = JSON.stringify(this.sortObject(criteria));
    const digest = crypto.createHash("sha1").update(serialised).digest("hex");
    return `${prefix}:${categoryId}:${digest}`;
  }

  /** Recursively sort object keys to ensure stable cache keys. */
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

export function createDatabaseAgent(manager?: RelevantDataManagerAgent): DatabaseAgent {
  return new DatabaseAgent(manager ?? new RelevantDataManagerAgent());
}
