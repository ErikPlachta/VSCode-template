/**
 * @packageDocumentation UserContext type definitions
 *
 * Shared interfaces for user context data validation. These interfaces define
 * the structure for compile-time type checking while allowing runtime data
 * to be loaded from user-configurable JSON files.
 *
 * @remarks
 * These types intentionally avoid importing agent implementations to prevent
 * circular dependencies. Use them for validation, schema mapping, and
 * IntelliSense in configuration authoring.
 */

/**
 * Unique identifier for a category
 */
export type CategoryId = string;

/**
 * Category orchestration configuration for agents
 */
export interface CategoryOrchestrationConfig {
  /** Summary description of what this category represents */
  summary: string;
  /** Signals that indicate this category should be used */
  signals: string[];
  /** Conditions when this category should escalate */
  escalateWhen?: string[];
  /** Agent-specific configuration */
  agents: {
    [agentName: string]: {
      /** What this agent focuses on for this category */
      focus: string;
      /** Signals specific to this agent */
      signals: string[];
      /** Example prompts that trigger this agent */
      promptStarters: string[];
    };
  };
}

/**
 * Category requirements and constraints
 */
export interface CategoryRequirements {
  /** Fields that must be present in records */
  requiredRecordFields: string[];
  /** Relationship fields that must be present */
  requiredRelationshipFields?: string[];
  /** Additional notes about requirements */
  notes?: string[];
}

/**
 * Category configuration (JSON-serializable subset of BusinessCategory)
 * This interface defines the structure for category.json files.
 */
export interface CategoryConfig {
  /** Unique identifier for this category */
  id: CategoryId;
  /** Human-readable name */
  name: string;
  /** Description of what this category contains */
  description: string;
  /** Alternative names/aliases for this category */
  aliases: string[];
  /** Configuration details */
  config: {
    /** Purpose/mission statement for this category */
    purpose: string;
    /** Primary key fields used for identification */
    primaryKeys: string[];
    /** How often this data is updated */
    updateCadence: string;
    /** Access control information */
    access: string;
    /** Optional requirements and constraints */
    requirements?: CategoryRequirements;
    /** Orchestration configuration for agents */
    orchestration: CategoryOrchestrationConfig;
  };
}

/**
 * Base record interface - all records must have an ID and either name or title
 */
export interface BaseRecord {
  /** Unique identifier for this record */
  id: string;
  /** Human-readable name (optional, but either name or title required) */
  name?: string;
  /** Alternative to name (optional, but either name or title required) */
  title?: string;
  /** Additional dynamic properties */
  [key: string]: unknown;
}

/**
 * Result of a bulk category discovery operation from DataLoaderAgent
 */
export interface CategoryDiscoveryResult {
  /** Successfully loaded categories */
  categories: Map<string, { config: CategoryConfig; records: BaseRecord[] }>;
  /** Errors encountered during discovery */
  errors: Array<{ categoryName: string; error: Error }>;
  /** Warnings for skipped or partial categories */
  warnings: string[];
}

/**
 * Person record with organizational and access information
 *
 * NOTE: This is a UserContext-specific type for the current data model.
 * Modify or replace these types based on your actual business data.
 */
export interface PersonRecord extends BaseRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  departmentId: string;
  managerId?: string;
  location: string;
  skills: string[];
  applicationIds: string[];
  policyAcks: string[];
  resourceIds: string[];
}

/**
 * Department record with organizational structure
 */
export interface DepartmentRecord extends BaseRecord {
  id: string;
  name: string;
  description: string;
  leadId: string;
  parentDepartmentId?: string;
  applicationIds: string[];
  policyIds: string[];
  resourceIds: string[];
}

/**
 * Application record with system information
 */
export interface ApplicationRecord extends BaseRecord {
  id: string;
  name: string;
  description: string;
  type: string;
  status: string;
  owner: string;
  url?: string;
  documentation?: string;
  supportContacts: string[];
}

/**
 * Company policy record
 */
export interface CompanyPolicyRecord extends BaseRecord {
  id: string;
  title: string;
  description: string;
  category: string;
  effectiveDate: string;
  lastUpdated: string;
  owner: string;
  applicableDepartments: string[];
  requiresAcknowledgment: boolean;
}

/**
 * Company resource record
 */
export interface CompanyResourceRecord extends BaseRecord {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  url?: string;
  accessRequirements?: string[];
  owner: string;
  lastUpdated: string;
}

/**
 * Union type for category records in the current UserContext data model.
 *
 * NOTE: Modify this union type when you add, remove, or change record types.
 */
export type CategoryRecord =
  | PersonRecord
  | DepartmentRecord
  | ApplicationRecord
  | CompanyPolicyRecord
  | CompanyResourceRecord
  | BaseRecord;

/**
 * Relationship definition between categories
 */
export interface RelationshipDefinition {
  /** Source category ID */
  from: CategoryId;
  /** Target category ID */
  to: CategoryId;
  /** Type of relationship */
  type: string;
  /** Fields used to join/link records */
  fields: {
    /** Field in source category */
    source: string;
    /** Field in target category */
    target: string;
  };
  /** Description of the relationship */
  description: string;
  /** Whether the relationship is required */
  required?: boolean;
}

/**
 * Description for how a category folder is organized
 */
export interface FolderBlueprint {
  /** Root directory for the category */
  root: string;
  /** Path to the category configuration file */
  configFile: string;
  /** JSON schema file paths */
  schemaFiles: string[];
  /** Structured type definition file paths */
  typeFiles: string[];
  /** Directory containing example datasets */
  examplesDir: string;
  /** Directory containing query blueprints */
  queriesDir: string;
}

/**
 * High-level relationship metadata surfaced to consumers
 */
export interface RelationshipDescription {
  /** Relationship label */
  name: string;
  /** Category on the other side of the relationship */
  targetCategory: CategoryId;
  /** Field or property used to establish the link */
  viaField: string;
  /** Expected cardinality of the relationship */
  cardinality: "one" | "many";
  /** Narrative description of the relationship */
  description: string;
}

/**
 * JSON schema snippet stored alongside a category
 */
export interface CategorySchema {
  name: string;
  description: string;
  schema: Record<string, unknown>;
}

/**
 * Supported primitive names within a type definition schema
 */
export type PrimitiveTypeName = "str" | "int" | "float" | "bool" | "datetime";

/**
 * JSON description for a structured type that can be materialized by an MCP server
 */
export type TypeSchema =
  | { kind: "primitive"; name: PrimitiveTypeName }
  | { kind: "optional"; value: TypeSchema }
  | { kind: "list"; element: TypeSchema }
  | { kind: "literal"; value: string | number | boolean | null }
  | { kind: "enum"; values: Array<string | number | boolean> }
  | { kind: "typedDict"; fields: TypedDictField[] };

/**
 * Field description used within a TypedDict schema
 */
export interface TypedDictField {
  name: string;
  type: TypeSchema;
  required?: boolean;
  description?: string;
}

/**
 * Python typing hints that mirror the JSON schemas
 */
export interface TypeDefinition {
  name: string;
  description: string;
  schema: TypeSchema;
}

/**
 * Example dataset artifact hosted in the category folder
 */
export interface ExampleDataset {
  file: string;
  description: string;
  sample: Record<string, unknown>;
}

/**
 * Issue detected while validating the raw data set for a category
 */
export interface DataValidationIssue {
  /** Identifier for the record that failed validation */
  recordId: string;
  /** Optional schema name that triggered the error */
  schema?: string;
  /** Field that failed validation if available */
  field?: string;
  /** Detailed error message */
  message: string;
  /** Type of validation that generated the issue */
  type: "schema" | "relationship";
}

/**
 * Summary produced after normalizing the dataset
 */
export interface DataValidationReport {
  /** Timestamp when validation occurred */
  checkedAt: string;
  /** Overall status for the category */
  status: "pass" | "fail";
  /** Detailed issues encountered during validation */
  issues: DataValidationIssue[];
}

/**
 * Remote query blueprint associated with the category
 */
export interface RemoteQueryBlueprint {
  name: string;
  description: string;
  samplePayload: Record<string, unknown>;
}

/**
 * Summary returned when enumerating available categories
 */
export interface CategorySummary {
  id: CategoryId;
  name: string;
  description: string;
}

/**
 * Agent orchestration guidance for specific agents
 */
export interface AgentOrchestrationGuidance {
  /** Core responsibility for the agent when invoked for this category */
  focus: string;
  /** Signals that hint the orchestrator should route the request to this agent */
  signals: string[];
  /** Prompt starters that the orchestrator can feed to the agent */
  promptStarters: string[];
}

/**
 * Full business category configuration
 */
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
    orchestration: CategoryOrchestrationConfig;
  };
  schemas: CategorySchema[];
  types: TypeDefinition[];
  examples: ExampleDataset[];
  queries: RemoteQueryBlueprint[];
  records: CategoryRecord[];
  validation: DataValidationReport;
}

/**
 * Connections resolved for a specific record
 */
export interface EntityConnections {
  categoryId: CategoryId;
  recordId: string;
  connections: Array<{
    relationship: string;
    targetCategory: CategoryId;
    records: CategoryRecord[];
  }>;
}

/**
 * Snapshot persisted to the shared cache for quick lookups
 */
export interface CategorySnapshot {
  id: CategoryId;
  name: string;
  description: string;
  recordCount: number;
  schemaNames: string[];
  typeNames: string[];
  queryNames: string[];
  exampleFiles: string[];
  folder: FolderBlueprint;
}

/**
 * Consolidated index entry persisted to the shared cache
 */
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

/**
 * Internal relationship definition used by the agent for resolution logic.
 * (Distinct from public RelationshipDefinition which models high-level joins.)
 */
export interface InternalRelationshipDefinition {
  sourceCategory: CategoryId;
  targetCategory: CategoryId;
  relationshipName: string;
  sourceField: string;
  targetField: string;
  cardinality: "one" | "many";
}

/** Loaded dataset bundle produced during agent initialisation */
export interface LoadedDataset {
  categories: Map<CategoryId, BusinessCategory>;
  lookupIndex: Map<string, BusinessCategory>;
  relationships: InternalRelationshipDefinition[];
  consolidatedIndex: DatasetCatalogueEntry[];
  fingerprint: string;
}

/** Relationship load result (descriptions exposed + internal definitions) */
export interface RelationshipLoadResult {
  descriptions: RelationshipDescription[];
  definitions: InternalRelationshipDefinition[];
}

/** Raw (unvalidated) category metadata structure read from category.json */
export interface RawCategoryMetadata {
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
    orchestration: RawOrchestrationConfig;
  };
}

/** Unvalidated agent guidance block */
export interface RawAgentOrchestrationGuidance {
  focus?: unknown;
  signals?: unknown;
  promptStarters?: unknown;
}

/** Unvalidated orchestration configuration */
export interface RawOrchestrationConfig {
  summary?: unknown;
  signals?: unknown;
  escalateWhen?: unknown;
  agents?: {
    relevantDataManager?: RawAgentOrchestrationGuidance;
    databaseAgent?: RawAgentOrchestrationGuidance;
    dataAgent?: RawAgentOrchestrationGuidance;
  };
}

/** Raw relationship entry from relationships.json */
export interface RawRelationshipEntry {
  key: string;
  name: string;
  description: string;
  targetCategory: string;
  sourceField: string;
  targetField: string;
  cardinality: "one" | "many";
}

/** Raw schema file contents */
export interface RawSchemaFile {
  name: string;
  description: string;
  schema: Record<string, unknown>;
}

/** Raw type definition file contents */
export interface RawTypeFile {
  name: string;
  description: string;
  schema: unknown;
}

/** Raw example file contents */
export interface RawExampleFile {
  description: string;
  sample: Record<string, unknown>;
}

/** Raw query file contents */
export interface RawQueryFile {
  name: string;
  description: string;
  samplePayload: Record<string, unknown>;
}

/**
 * Type guard to check if a value is a valid {@link CategoryConfig}.
 *
 * @param obj - The value to validate.
 * @returns True if the value is a valid CategoryConfig.
 *
 * @example
 * ```ts
 * if (isCategoryConfig(maybe)) {
 *   console.log(maybe.id);
 * }
 * ```
 */
export function isCategoryConfig(obj: unknown): obj is CategoryConfig {
  if (typeof obj !== "object" || obj === null) return false;
  const config = obj as Record<string, unknown>;

  return (
    typeof config.id === "string" &&
    typeof config.name === "string" &&
    typeof config.description === "string" &&
    Array.isArray(config.aliases) &&
    typeof config.config === "object" &&
    config.config !== null
  );
}

/**
 * Type guard to check if a value is a valid {@link BaseRecord}.
 *
 * @param obj - The value to validate.
 * @returns True if the value is a valid BaseRecord.
 */
export function isBaseRecord(obj: unknown): obj is BaseRecord {
  if (typeof obj !== "object" || obj === null) return false;
  const record = obj as Record<string, unknown>;

  return (
    typeof record.id === "string" &&
    (typeof record.name === "string" || typeof record.title === "string")
  );
}

/**
 * Type guard to check if a value is an array of {@link BaseRecord}.
 *
 * @param obj - The value to validate.
 * @returns True if the value is an array of valid records.
 */
export function isRecordArray(obj: unknown): obj is BaseRecord[] {
  return Array.isArray(obj) && obj.every(isBaseRecord);
}

/**
 * Validation error detail.
 */
export interface ValidationError {
  /** Path to the field with the error (e.g., "config.primaryKeys") */
  path: string;
  /** Description of what went wrong */
  message: string;
  /** Expected value or type */
  expected?: string;
  /** Actual value received (for debugging) */
  actual?: string;
}

/**
 * Validation result with detailed errors.
 */
export interface ValidationResult {
  /** Whether validation passed */
  valid: boolean;
  /** List of validation errors (empty if valid) */
  errors: ValidationError[];
}

/**
 * Validates a {@link CategoryConfig} object with detailed error reporting.
 *
 * @param obj - The value to validate.
 * @returns Validation result with detailed errors.
 *
 * @example
 * ```ts
 * const result = validateCategoryConfig(candidate);
 * if (!result.valid) {
 *   console.warn(formatValidationErrors(result.errors));
 * }
 * ```
 */
export function validateCategoryConfig(obj: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  // Check if object exists and is an object
  if (!obj || typeof obj !== "object") {
    return {
      valid: false,
      errors: [
        {
          path: "",
          message: "Value must be an object",
          expected: "object",
          actual: typeof obj,
        },
      ],
    };
  }

  const record = obj as Record<string, unknown>;

  // Validate required top-level fields
  if (typeof record.id !== "string") {
    errors.push({
      path: "id",
      message: "Missing or invalid id field",
      expected: "string",
      actual: typeof record.id,
    });
  }

  if (typeof record.name !== "string") {
    errors.push({
      path: "name",
      message: "Missing or invalid name field",
      expected: "string",
      actual: typeof record.name,
    });
  }

  if (typeof record.description !== "string") {
    errors.push({
      path: "description",
      message: "Missing or invalid description field",
      expected: "string",
      actual: typeof record.description,
    });
  }

  if (!Array.isArray(record.aliases)) {
    errors.push({
      path: "aliases",
      message: "Missing or invalid aliases field",
      expected: "string[]",
      actual: typeof record.aliases,
    });
  } else if (!record.aliases.every((a) => typeof a === "string")) {
    errors.push({
      path: "aliases",
      message: "All aliases must be strings",
      expected: "string[]",
      actual: "mixed types",
    });
  }

  // Validate config object
  if (!record.config || typeof record.config !== "object") {
    errors.push({
      path: "config",
      message: "Missing or invalid config field",
      expected: "object",
      actual: typeof record.config,
    });
    // Stop here if config is missing - can't validate nested fields
    return { valid: false, errors };
  }

  const config = record.config as Record<string, unknown>;

  // Validate config fields
  if (typeof config.purpose !== "string") {
    errors.push({
      path: "config.purpose",
      message: "Missing or invalid purpose field",
      expected: "string",
      actual: typeof config.purpose,
    });
  }

  if (!Array.isArray(config.primaryKeys)) {
    errors.push({
      path: "config.primaryKeys",
      message: "Missing or invalid primaryKeys field",
      expected: "string[]",
      actual: typeof config.primaryKeys,
    });
  } else if (!config.primaryKeys.every((k) => typeof k === "string")) {
    errors.push({
      path: "config.primaryKeys",
      message: "All primaryKeys must be strings",
      expected: "string[]",
      actual: "mixed types",
    });
  }

  if (typeof config.updateCadence !== "string") {
    errors.push({
      path: "config.updateCadence",
      message: "Missing or invalid updateCadence field",
      expected: "string",
      actual: typeof config.updateCadence,
    });
  }

  if (typeof config.access !== "string") {
    errors.push({
      path: "config.access",
      message: "Missing or invalid access field",
      expected: "string",
      actual: typeof config.access,
    });
  }

  // Validate orchestration object
  if (!config.orchestration || typeof config.orchestration !== "object") {
    errors.push({
      path: "config.orchestration",
      message: "Missing or invalid orchestration field",
      expected: "object",
      actual: typeof config.orchestration,
    });
  } else {
    const orch = config.orchestration as Record<string, unknown>;

    if (typeof orch.summary !== "string") {
      errors.push({
        path: "config.orchestration.summary",
        message: "Missing or invalid summary field",
        expected: "string",
        actual: typeof orch.summary,
      });
    }

    if (!Array.isArray(orch.signals)) {
      errors.push({
        path: "config.orchestration.signals",
        message: "Missing or invalid signals field",
        expected: "string[]",
        actual: typeof orch.signals,
      });
    } else if (!orch.signals.every((s) => typeof s === "string")) {
      errors.push({
        path: "config.orchestration.signals",
        message: "All signals must be strings",
        expected: "string[]",
        actual: "mixed types",
      });
    }

    if (!orch.agents || typeof orch.agents !== "object") {
      errors.push({
        path: "config.orchestration.agents",
        message: "Missing or invalid agents field",
        expected: "object",
        actual: typeof orch.agents,
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates a {@link CategoryRecord} object with detailed error reporting.
 *
 * @param obj - The value to validate.
 * @returns Validation result with detailed errors.
 */
export function validateCategoryRecord(obj: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  // Check if object exists and is an object
  if (!obj || typeof obj !== "object") {
    return {
      valid: false,
      errors: [
        {
          path: "",
          message: "Value must be an object",
          expected: "object",
          actual: typeof obj,
        },
      ],
    };
  }

  const record = obj as Record<string, unknown>;

  // Validate required id field
  if (typeof record.id !== "string") {
    errors.push({
      path: "id",
      message: "Missing or invalid id field",
      expected: "string",
      actual: typeof record.id,
    });
  }

  // Validate that either name or title is present
  const hasName = typeof record.name === "string";
  const hasTitle = typeof record.title === "string";

  if (!hasName && !hasTitle) {
    errors.push({
      path: "name/title",
      message: "Record must have either 'name' or 'title' field",
      expected: "string (name or title)",
      actual: `name: ${typeof record.name}, title: ${typeof record.title}`,
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validates a {@link RelationshipDefinition} object with detailed error reporting.
 *
 * @param obj - The value to validate.
 * @returns Validation result with detailed errors.
 */
export function validateRelationshipDefinition(obj: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  // Check if object exists and is an object
  if (!obj || typeof obj !== "object") {
    return {
      valid: false,
      errors: [
        {
          path: "",
          message: "Value must be an object",
          expected: "object",
          actual: typeof obj,
        },
      ],
    };
  }

  const record = obj as Record<string, unknown>;

  // Validate required fields
  if (typeof record.from !== "string") {
    errors.push({
      path: "from",
      message: "Missing or invalid from field",
      expected: "string",
      actual: typeof record.from,
    });
  }

  if (typeof record.to !== "string") {
    errors.push({
      path: "to",
      message: "Missing or invalid to field",
      expected: "string",
      actual: typeof record.to,
    });
  }

  if (typeof record.type !== "string") {
    errors.push({
      path: "type",
      message: "Missing or invalid type field",
      expected: "string",
      actual: typeof record.type,
    });
  }

  // Validate fields object
  if (!record.fields || typeof record.fields !== "object") {
    errors.push({
      path: "fields",
      message: "Missing or invalid fields object",
      expected: "object",
      actual: typeof record.fields,
    });
  } else {
    const fields = record.fields as Record<string, unknown>;

    if (typeof fields.source !== "string") {
      errors.push({
        path: "fields.source",
        message: "Missing or invalid source field",
        expected: "string",
        actual: typeof fields.source,
      });
    }

    if (typeof fields.target !== "string") {
      errors.push({
        path: "fields.target",
        message: "Missing or invalid target field",
        expected: "string",
        actual: typeof fields.target,
      });
    }
  }

  if (typeof record.description !== "string") {
    errors.push({
      path: "description",
      message: "Missing or invalid description field",
      expected: "string",
      actual: typeof record.description,
    });
  }

  // Optional: validate required field if present
  if (record.required !== undefined && typeof record.required !== "boolean") {
    errors.push({
      path: "required",
      message: "Invalid required field (must be boolean if present)",
      expected: "boolean",
      actual: typeof record.required,
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Formats validation errors into a human-readable string.
 *
 * @param errors - Array of validation errors.
 * @param maxErrors - Maximum number of errors to include (default: 3).
 * @returns Formatted error message string.
 *
 * @example
 * ```ts
 * const msg = formatValidationErrors(result.errors, 5);
 * console.log(msg);
 * ```
 */
export function formatValidationErrors(
  errors: ValidationError[],
  maxErrors: number = 3
): string {
  if (errors.length === 0) {
    return "";
  }

  return errors
    .slice(0, maxErrors)
    .map((error) => {
      if (error.path) {
        return `${error.path}: ${error.message}`;
      }
      return error.message;
    })
    .join("; ");
}
