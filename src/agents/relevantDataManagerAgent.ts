/**
 * @fileoverview Agent responsible for managing the mock "relevant data"
 * workspace that MCP servers expose to users. The agent keeps a rich catalogue
 * of categories (departments, people, applications, policies, resources) that
 * mirrors a repository folder structure complete with schemas, python type
 * hints, example datasets, tests, and remote query blueprints.
 *
 * @module agents/relevantDataManagerAgent
 */

import * as crypto from "crypto";
import * as fs from "fs";
import * as path from "path";
import {
  ensureCacheDirectory,
  readSharedCacheEntry,
  SharedCacheEntry,
  storeSharedCacheEntry
} from "../mcpCache";

/**
 * Description for how a category folder is organised.
 */
export interface FolderBlueprint {
  /** Root directory for the category. */
  root: string;
  /** Path to the category configuration file. */
  configFile: string;
  /** JSON schema file paths. */
  schemaFiles: string[];
  /** Python typing hint file paths. */
  pythonTypes: string[];
  /** Directory containing example datasets. */
  examplesDir: string;
  /** Directory containing tests. */
  testsDir: string;
  /** Directory containing query blueprints. */
  queriesDir: string;
}

/**
 * High-level relationship metadata surfaced to consumers.
 */
export interface RelationshipDescription {
  /** Relationship label. */
  name: string;
  /** Category on the other side of the relationship. */
  targetCategory: CategoryId;
  /** Field or property used to establish the link. */
  viaField: string;
  /** Expected cardinality of the relationship. */
  cardinality: "one" | "many";
  /** Narrative description of the relationship. */
  description: string;
}

/**
 * Requirements that each category must satisfy before being processed.
 */
export interface CategoryRequirements {
  /** Fields that every record must provide. */
  requiredRecordFields: string[];
  /** Record properties that should align with relationship definitions. */
  requiredRelationshipFields?: string[];
  /** Free-form notes surfaced to orchestration layers. */
  notes?: string[];
}

/** JSON schema snippet stored alongside a category. */
export interface CategorySchema {
  name: string;
  description: string;
  schema: Record<string, unknown>;
}

/** Python typing hints that mirror the JSON schemas. */
export interface PythonTypeDefinition {
  name: string;
  description: string;
  definition: string;
}

/** Example dataset artefact hosted in the category folder. */
export interface ExampleDataset {
  file: string;
  description: string;
  sample: Record<string, unknown>;
}

/** Test artefact reference stored for the category. */
export interface CategoryTestArtefact {
  name: string;
  description: string;
  command: string;
}

/** Remote query blueprint associated with the category. */
export interface RemoteQueryBlueprint {
  name: string;
  description: string;
  samplePayload: Record<string, unknown>;
}

/** Summary returned when enumerating available categories. */
export interface CategorySummary {
  id: CategoryId;
  name: string;
  description: string;
}

/** Minimal representation of a record stored under a category. */
export type CategoryRecord = Record<string, unknown> & { id: string; name?: string; title?: string };

/** Unique identifier for a category in the repository. */
export type CategoryId = string;

/** Full configuration stored for each business category. */
export interface BusinessCategory {
  id: CategoryId;
  name: string;
  description: string;
  aliases: string[];
  config: {
    purpose: string;
    primaryKeys: string[];
    updateCadence: string;
    access: string;
    folder: FolderBlueprint;
    requirements?: CategoryRequirements;
    relationships: RelationshipDescription[];
  };
  schemas: CategorySchema[];
  pythonTypes: PythonTypeDefinition[];
  examples: ExampleDataset[];
  tests: CategoryTestArtefact[];
  queries: RemoteQueryBlueprint[];
  records: CategoryRecord[];
}

/** Connections resolved for a specific record. */
export interface EntityConnections {
  categoryId: CategoryId;
  recordId: string;
  connections: Array<{
    relationship: string;
    targetCategory: CategoryId;
    records: CategoryRecord[];
  }>;
}

/** Snapshot persisted to the shared cache for quick lookups. */
export interface CategorySnapshot {
  id: CategoryId;
  name: string;
  description: string;
  recordCount: number;
  schemaNames: string[];
  pythonTypeNames: string[];
  queryNames: string[];
  exampleFiles: string[];
  folder: FolderBlueprint;
}

/** Consolidated index entry persisted to the shared cache. */
export interface DatasetCatalogueEntry {
  id: CategoryId;
  name: string;
  description: string;
  primaryKeys: string[];
  recordIds: string[];
  relationships: Array<{
    name: string;
    targetCategory: CategoryId;
    viaField: string;
    cardinality: "one" | "many";
  }>;
  schemaNames: string[];
  requirements?: CategoryRequirements;
}

/** Structure representing how different categories reference each other. */
interface RelationshipDefinition {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  relationshipName: string;
  sourceField: string;
  targetField: string;
  cardinality: "one" | "many";
}

interface LoadedDataset {
  categories: Map<CategoryId, BusinessCategory>;
  lookupIndex: Map<string, BusinessCategory>;
  relationships: RelationshipDefinition[];
  consolidatedIndex: DatasetCatalogueEntry[];
  fingerprint: string;
}

interface RelationshipLoadResult {
  descriptions: RelationshipDescription[];
  definitions: RelationshipDefinition[];
}

interface RawCategoryMetadata {
  id: string;
  name: string;
  description: string;
  aliases?: string[];
  config: {
    purpose: string;
    primaryKeys: string[];
    updateCadence: string;
    access: string;
    requirements?: CategoryRequirements;
  };
}

interface RawRelationshipEntry {
  key: string;
  name: string;
  description: string;
  targetCategory: string;
  sourceField: string;
  targetField: string;
  cardinality: "one" | "many";
}

interface RawSchemaFile {
  name: string;
  description: string;
  schema: Record<string, unknown>;
}

interface RawPythonTypeFile {
  name: string;
  description: string;
  definition: string;
}

interface RawExampleFile {
  description: string;
  sample: Record<string, unknown>;
}

interface RawTestFile {
  name: string;
  description: string;
  command: string;
}

interface RawQueryFile {
  name: string;
  description: string;
  samplePayload: Record<string, unknown>;
}

const DEFAULT_DATA_ROOT = path.resolve(__dirname, "..", "..", "data");
const CONSOLIDATED_INDEX_CACHE_KEY = "relevant-data:catalogue";

function toPosixPath(filePath: string): string {
  return filePath.split(path.sep).join("/");
}

function normaliseLookupKey(value: string): string {
  return value.trim().toLowerCase();
}

/** Error thrown when a caller references an unknown category. */
export class UnknownCategoryError extends Error {
  constructor(topic: string) {
    super(`Unknown category or topic: ${topic}`);
  }
}

/**
 * Agent that manages the relevant-data workspace representation.
 */
export class RelevantDataManagerAgent {
  private readonly cacheDirPromise: Promise<string>;
  private readonly dataRoot: string;
  private readonly categories: Map<CategoryId, BusinessCategory>;
  private readonly lookupIndex: Map<string, BusinessCategory>;
  private readonly relationshipDefinitions: RelationshipDefinition[];
  private readonly relationshipsBySource: Map<CategoryId, RelationshipDefinition[]>;
  private readonly consolidatedIndex: DatasetCatalogueEntry[];
  private readonly datasetFingerprint: string;

  constructor(cacheDirPromise?: Promise<string>) {
    this.cacheDirPromise = cacheDirPromise ?? ensureCacheDirectory();
    this.dataRoot = process.env.VSCODE_TEMPLATE_DATA_ROOT ?? DEFAULT_DATA_ROOT;
    const dataset = this.loadDataset();
    this.categories = dataset.categories;
    this.lookupIndex = dataset.lookupIndex;
    this.relationshipDefinitions = dataset.relationships;
    this.relationshipsBySource = this.groupRelationshipsBySource(dataset.relationships);
    this.consolidatedIndex = dataset.consolidatedIndex;
    this.datasetFingerprint = dataset.fingerprint;
    void this.persistConsolidatedIndex();
  }

  /** Enumerate the categories available to the MCP client. */
  listCategories(): CategorySummary[] {
    return Array.from(this.categories.values()).map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description
    }));
  }

  /** Resolve a topic or identifier to the underlying category definition. */
  getCategory(topicOrId: string): BusinessCategory {
    const key = normaliseLookupKey(topicOrId);
    const category = this.lookupIndex.get(key);
    if (!category) {
      throw new UnknownCategoryError(topicOrId);
    }
    return category;
  }

  /** Retrieve the folder blueprint for a given topic. */
  getFolderBlueprint(topicOrId: string): FolderBlueprint {
    return this.getCategory(topicOrId).config.folder;
  }

  /** Access category configuration metadata such as relationships. */
  getCategoryConfig(topicOrId: string): BusinessCategory["config"] {
    return this.getCategory(topicOrId).config;
  }

  /** Access the JSON schemas associated with a category. */
  getCategorySchemas(topicOrId: string): CategorySchema[] {
    return this.getCategory(topicOrId).schemas;
  }

  /** Retrieve Python type definitions provided as guidance for SDK authors. */
  getPythonTypes(topicOrId: string): PythonTypeDefinition[] {
    return this.getCategory(topicOrId).pythonTypes;
  }

  /** Fetch example datasets included inside the category folder. */
  getExamples(topicOrId: string): ExampleDataset[] {
    return this.getCategory(topicOrId).examples;
  }

  /** List the unit/integration tests referenced by the category. */
  getTests(topicOrId: string): CategoryTestArtefact[] {
    return this.getCategory(topicOrId).tests;
  }

  /** Retrieve query blueprints that demonstrate how to call the authoritative upstream system. */
  getQueries(topicOrId: string): RemoteQueryBlueprint[] {
    return this.getCategory(topicOrId).queries;
  }

  /** Return all records stored in the local mock dataset for a category. */
  getRecords(topicOrId: string): CategoryRecord[] {
    return this.getCategory(topicOrId).records;
  }

  /** Retrieve a single record by identifier. */
  getRecord(topicOrId: string, recordId: string): CategoryRecord | undefined {
    return this.getRecords(topicOrId).find((record) => record.id === recordId);
  }

  /** Perform a keyword search across every category. */
  searchAcrossCategories(keyword: string): Array<{
    categoryId: CategoryId;
    record: CategoryRecord;
    matchingFields: string[];
  }> {
    const needle = keyword.trim().toLowerCase();
    const matches: Array<{ categoryId: CategoryId; record: CategoryRecord; matchingFields: string[] }> = [];
    if (!needle) {
      return matches;
    }
    for (const category of this.categories.values()) {
      for (const record of category.records) {
        const matchedFields: string[] = [];
        for (const [field, value] of Object.entries(record)) {
          if (value == null) {
            continue;
          }
          if (typeof value === "string" && value.toLowerCase().includes(needle)) {
            matchedFields.push(field);
            continue;
          }
          if (Array.isArray(value) && value.some((item) => typeof item === "string" && item.toLowerCase().includes(needle))) {
            matchedFields.push(field);
          }
        }
        if (matchedFields.length > 0) {
          matches.push({ categoryId: category.id, record, matchingFields: matchedFields });
        }
      }
    }
    return matches;
  }

  /** Build a snapshot view of a category and persist it to the shared cache. */
  async getOrCreateSnapshot(topicOrId: string): Promise<CategorySnapshot> {
    const category = this.getCategory(topicOrId);
    const cacheKey = `relevant-data:${category.id}:snapshot`;
    const cacheDir = await this.cacheDirPromise;
    const cached = await readSharedCacheEntry<CategorySnapshot>(cacheDir, cacheKey);
    if (cached) {
      return cached.value;
    }
    const snapshot: CategorySnapshot = {
      id: category.id,
      name: category.name,
      description: category.description,
      recordCount: category.records.length,
      schemaNames: category.schemas.map((schema) => schema.name),
      pythonTypeNames: category.pythonTypes.map((typeDef) => typeDef.name),
      queryNames: category.queries.map((query) => query.name),
      exampleFiles: category.examples.map((example) => example.file),
      folder: category.config.folder
    };
    const entry: SharedCacheEntry<CategorySnapshot> = {
      key: cacheKey,
      toolName: "relevant-data-manager",
      timestamp: new Date().toISOString(),
      value: snapshot,
      metadata: {
        recordHash: this.hashRecords(category.records)
      }
    };
    await storeSharedCacheEntry(cacheDir, entry);
    return snapshot;
  }

  /** Resolve relationships for a given record across categories. */
  getEntityConnections(topicOrId: string, recordId: string): EntityConnections {
    const category = this.getCategory(topicOrId);
    const record = this.getRecord(category.id, recordId);
    if (!record) {
      throw new Error(`Record ${recordId} not found in category ${category.id}`);
    }
    const connections: EntityConnections["connections"] = [];
    const relationshipRules = this.relationshipsBySource.get(category.id) ?? [];
    for (const relationship of relationshipRules) {
      const value = record[relationship.sourceField];
      if (value == null) {
        continue;
      }
      const relatedRecords = this.resolveTargets(relationship, value);
      if (relatedRecords.length === 0) {
        continue;
      }
      connections.push({
        relationship: relationship.relationshipName,
        targetCategory: relationship.targetCategory,
        records: relatedRecords
      });
    }
    return { categoryId: category.id, recordId, connections };
  }

  /** Expose the consolidated dataset catalogue built from the data directory. */
  getDatasetCatalogue(): DatasetCatalogueEntry[] {
    return this.consolidatedIndex;
  }

  private loadDataset(): LoadedDataset {
    if (!fs.existsSync(this.dataRoot)) {
      throw new Error(`Data directory '${this.dataRoot}' does not exist.`);
    }
    const categories = new Map<CategoryId, BusinessCategory>();
    const lookupIndex = new Map<string, BusinessCategory>();
    const relationships: RelationshipDefinition[] = [];
    const consolidatedIndex: DatasetCatalogueEntry[] = [];

    const entries = fs.readdirSync(this.dataRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory());
    if (entries.length === 0) {
      throw new Error(`No category folders were found inside '${this.dataRoot}'.`);
    }

    for (const entry of entries) {
      const categoryDir = path.join(this.dataRoot, entry.name);
      const { category, relationshipDefinitions } = this.loadCategory(categoryDir);
      categories.set(category.id, category);
      consolidatedIndex.push(this.createCatalogueEntry(category));
      relationships.push(...relationshipDefinitions);
      for (const key of [category.id, category.name, ...category.aliases]) {
        lookupIndex.set(normaliseLookupKey(key), category);
      }
    }

    const fingerprint = crypto
      .createHash("sha1")
      .update(JSON.stringify(consolidatedIndex))
      .digest("hex");

    return { categories, lookupIndex, relationships, consolidatedIndex, fingerprint };
  }

  private loadCategory(categoryDir: string): { category: BusinessCategory; relationshipDefinitions: RelationshipDefinition[] } {
    const configPath = path.join(categoryDir, "category.json");
    if (!fs.existsSync(configPath)) {
      throw new Error(`Missing category.json inside '${categoryDir}'.`);
    }
    const metadata = this.loadJsonFile<RawCategoryMetadata>(configPath, `metadata for ${categoryDir}`);
    if (!metadata.id || !metadata.name || !metadata.description) {
      throw new Error(`Category metadata at '${configPath}' is missing required fields.`);
    }
    const folder = this.buildFolderBlueprint(categoryDir, configPath);
    const schemas = this.loadSchemas(categoryDir);
    const pythonTypes = this.loadPythonTypes(categoryDir);
    const examples = this.loadExamples(categoryDir);
    const tests = this.loadTests(categoryDir);
    const queries = this.loadQueries(categoryDir);
    const { descriptions, definitions } = this.loadRelationships(categoryDir, metadata.id);
    const records = this.loadRecords(categoryDir, metadata.id, metadata.config.requirements);

    const category: BusinessCategory = {
      id: metadata.id,
      name: metadata.name,
      description: metadata.description,
      aliases: metadata.aliases ?? [],
      config: {
        purpose: metadata.config.purpose,
        primaryKeys: metadata.config.primaryKeys,
        updateCadence: metadata.config.updateCadence,
        access: metadata.config.access,
        folder,
        requirements: metadata.config.requirements,
        relationships: descriptions
      },
      schemas,
      pythonTypes,
      examples,
      tests,
      queries,
      records
    };

    if (metadata.config.requirements?.requiredRelationshipFields) {
      this.assertRelationshipCoverage(
        metadata.config.requirements.requiredRelationshipFields,
        definitions,
        `category ${metadata.id}`
      );
    }

    return { category, relationshipDefinitions: definitions };
  }

  private buildFolderBlueprint(categoryDir: string, configPath: string): FolderBlueprint {
    const schemasDir = this.requireDirectory(path.join(categoryDir, "schemas"));
    const pythonDir = this.requireDirectory(path.join(categoryDir, "python-types"));
    const examplesDir = this.requireDirectory(path.join(categoryDir, "examples"));
    const testsDir = this.requireDirectory(path.join(categoryDir, "tests"));
    const queriesDir = this.requireDirectory(path.join(categoryDir, "queries"));

    return {
      root: toPosixPath(path.relative(process.cwd(), categoryDir)),
      configFile: toPosixPath(path.relative(process.cwd(), configPath)),
      schemaFiles: this.collectFiles(schemasDir, [".json"]),
      pythonTypes: this.collectFiles(pythonDir, [".json", ".py"]),
      examplesDir: toPosixPath(path.relative(process.cwd(), examplesDir)),
      testsDir: toPosixPath(path.relative(process.cwd(), testsDir)),
      queriesDir: toPosixPath(path.relative(process.cwd(), queriesDir))
    };
  }

  private requireDirectory(target: string): string {
    if (!fs.existsSync(target) || !fs.statSync(target).isDirectory()) {
      throw new Error(`Expected directory '${target}' to exist.`);
    }
    return target;
  }

  private collectFiles(targetDir: string, extensions: string[]): string[] {
    return fs
      .readdirSync(targetDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && extensions.includes(path.extname(entry.name)))
      .map((entry) => toPosixPath(path.relative(process.cwd(), path.join(targetDir, entry.name))));
  }

  private loadSchemas(categoryDir: string): CategorySchema[] {
    const target = path.join(categoryDir, "schemas");
    return this.collectFiles(target, [".json"]).map((file) => {
      const schema = this.loadJsonFile<RawSchemaFile>(path.join(process.cwd(), file), `schema '${file}'`);
      if (!schema.name || !schema.description || !schema.schema) {
        throw new Error(`Schema file '${file}' is missing required fields.`);
      }
      return schema;
    });
  }

  private loadPythonTypes(categoryDir: string): PythonTypeDefinition[] {
    const target = path.join(categoryDir, "python-types");
    return this.collectFiles(target, [".json", ".py"]).map((file) => {
      if (file.endsWith(".py")) {
        const definition = fs.readFileSync(path.join(process.cwd(), file), "utf8");
        const name = path.basename(file, path.extname(file));
        return { name, description: `Python types defined in ${file}`, definition };
      }
      const typeFile = this.loadJsonFile<RawPythonTypeFile>(path.join(process.cwd(), file), `python types '${file}'`);
      if (!typeFile.name || !typeFile.definition) {
        throw new Error(`Python type file '${file}' is missing required fields.`);
      }
      return typeFile;
    });
  }

  private loadExamples(categoryDir: string): ExampleDataset[] {
    const target = path.join(categoryDir, "examples");
    return this.collectFiles(target, [".json"]).map((file) => {
      const example = this.loadJsonFile<RawExampleFile>(path.join(process.cwd(), file), `example '${file}'`);
      if (!example.description || !example.sample) {
        throw new Error(`Example file '${file}' is missing required fields.`);
      }
      return { file, description: example.description, sample: example.sample };
    });
  }

  private loadTests(categoryDir: string): CategoryTestArtefact[] {
    const target = path.join(categoryDir, "tests");
    return this.collectFiles(target, [".json"]).map((file) => {
      const test = this.loadJsonFile<RawTestFile>(path.join(process.cwd(), file), `test '${file}'`);
      if (!test.name || !test.command) {
        throw new Error(`Test file '${file}' is missing required fields.`);
      }
      return test;
    });
  }

  private loadQueries(categoryDir: string): RemoteQueryBlueprint[] {
    const target = path.join(categoryDir, "queries");
    return this.collectFiles(target, [".json"]).map((file) => {
      const query = this.loadJsonFile<RawQueryFile>(path.join(process.cwd(), file), `query '${file}'`);
      if (!query.name || !query.samplePayload) {
        throw new Error(`Query file '${file}' is missing required fields.`);
      }
      return query;
    });
  }

  private loadRecords(
    categoryDir: string,
    categoryId: string,
    requirements?: CategoryRequirements
  ): CategoryRecord[] {
    const recordsPath = path.join(categoryDir, "records.json");
    if (!fs.existsSync(recordsPath)) {
      throw new Error(`Missing records.json for category '${categoryId}'.`);
    }
    const raw = this.loadJsonFile<unknown[]>(recordsPath, `records for ${categoryId}`);
    if (!Array.isArray(raw)) {
      throw new Error(`Records at '${recordsPath}' must be an array.`);
    }
    const records: CategoryRecord[] = [];
    for (const entry of raw) {
      if (!entry || typeof entry !== "object") {
        throw new Error(`Invalid record encountered for category '${categoryId}'.`);
      }
      const record = entry as CategoryRecord;
      if (typeof record.id !== "string" || record.id.trim() === "") {
        throw new Error(`Record in category '${categoryId}' is missing an id.`);
      }
      if (requirements?.requiredRecordFields) {
        this.assertRequiredFields(record, requirements.requiredRecordFields, `record ${record.id}`);
      }
      records.push(record);
    }
    return records;
  }

  private loadRelationships(categoryDir: string, categoryId: string): RelationshipLoadResult {
    const relationshipsPath = path.join(categoryDir, "relationships.json");
    if (!fs.existsSync(relationshipsPath)) {
      throw new Error(`Missing relationships.json for category '${categoryId}'.`);
    }
    const raw = this.loadJsonFile<RawRelationshipEntry[]>(relationshipsPath, `relationships for ${categoryId}`);
    if (!Array.isArray(raw) || raw.length === 0) {
      throw new Error(`Relationships at '${relationshipsPath}' must be a non-empty array.`);
    }
    const descriptions: RelationshipDescription[] = [];
    const definitions: RelationshipDefinition[] = [];
    for (const relationship of raw) {
      if (!relationship.key || !relationship.name || !relationship.sourceField || !relationship.targetField) {
        throw new Error(`Relationship entry in '${relationshipsPath}' is missing required fields.`);
      }
      descriptions.push({
        name: relationship.name,
        targetCategory: relationship.targetCategory,
        viaField: relationship.sourceField,
        cardinality: relationship.cardinality,
        description: relationship.description
      });
      definitions.push({
        sourceCategory: categoryId,
        targetCategory: relationship.targetCategory,
        relationshipName: relationship.key,
        sourceField: relationship.sourceField,
        targetField: relationship.targetField,
        cardinality: relationship.cardinality
      });
    }
    return { descriptions, definitions };
  }

  private assertRequiredFields(record: CategoryRecord, fields: string[], context: string): void {
    for (const field of fields) {
      if (!(field in record)) {
        throw new Error(`Field '${field}' is required on ${context}.`);
      }
    }
  }

  private assertRelationshipCoverage(fields: string[], relationships: RelationshipDefinition[], context: string): void {
    const covered = new Set(relationships.map((relationship) => relationship.sourceField));
    for (const field of fields) {
      if (!covered.has(field)) {
        throw new Error(`Relationship coverage for field '${field}' was not declared in ${context}.`);
      }
    }
  }

  private groupRelationshipsBySource(relations: RelationshipDefinition[]): Map<CategoryId, RelationshipDefinition[]> {
    const map = new Map<CategoryId, RelationshipDefinition[]>();
    for (const relationship of relations) {
      const existing = map.get(relationship.sourceCategory) ?? [];
      existing.push(relationship);
      map.set(relationship.sourceCategory, existing);
    }
    return map;
  }

  private async persistConsolidatedIndex(): Promise<void> {
    try {
      const cacheDir = await this.cacheDirPromise;
      const cached = await readSharedCacheEntry<DatasetCatalogueEntry[]>(cacheDir, CONSOLIDATED_INDEX_CACHE_KEY);
      if (cached?.metadata?.fingerprint === this.datasetFingerprint) {
        return;
      }
      const entry: SharedCacheEntry<DatasetCatalogueEntry[]> = {
        key: CONSOLIDATED_INDEX_CACHE_KEY,
        toolName: "relevant-data-manager",
        timestamp: new Date().toISOString(),
        value: this.consolidatedIndex,
        metadata: { fingerprint: this.datasetFingerprint }
      };
      await storeSharedCacheEntry(cacheDir, entry);
    } catch (error) {
      // Swallow cache persistence errors to avoid breaking caller flows.
      console.warn("Failed to persist consolidated dataset index", error);
    }
  }

  private createCatalogueEntry(category: BusinessCategory): DatasetCatalogueEntry {
    return {
      id: category.id,
      name: category.name,
      description: category.description,
      primaryKeys: category.config.primaryKeys,
      recordIds: category.records.map((record) => record.id),
      relationships: category.config.relationships.map((relationship) => ({
        name: relationship.name,
        targetCategory: relationship.targetCategory,
        viaField: relationship.viaField,
        cardinality: relationship.cardinality
      })),
      schemaNames: category.schemas.map((schema) => schema.name),
      requirements: category.config.requirements
    };
  }

  private hashRecords(records: CategoryRecord[]): string {
    const normalised = records.map((record) =>
      Object.fromEntries(Object.entries(record).sort(([left], [right]) => left.localeCompare(right)))
    );
    return crypto.createHash("sha1").update(JSON.stringify(normalised)).digest("hex");
  }

  private resolveTargets(relationship: RelationshipDefinition, value: unknown): CategoryRecord[] {
    const targetCategory = this.categories.get(relationship.targetCategory);
    if (!targetCategory) {
      return [];
    }
    const values: string[] = Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string").map((item) => item.trim())
      : typeof value === "string" || typeof value === "number"
      ? [String(value)]
      : [];
    if (values.length === 0) {
      return [];
    }
    return targetCategory.records.filter((record) => {
      const targetValue = record[relationship.targetField];
      if (targetValue == null) {
        return false;
      }
      if (Array.isArray(targetValue)) {
        return targetValue.some((item) => values.includes(String(item)));
      }
      return values.includes(String(targetValue));
    });
  }

  private loadJsonFile<T>(filePath: string, context: string): T {
    const raw = fs.readFileSync(filePath, "utf8");
    try {
      return JSON.parse(raw) as T;
    } catch (error) {
      throw new Error(`Unable to parse ${context} at '${filePath}': ${(error as Error).message}`);
    }
  }
}

export function createRelevantDataManagerAgent(): RelevantDataManagerAgent {
  return new RelevantDataManagerAgent();
}
