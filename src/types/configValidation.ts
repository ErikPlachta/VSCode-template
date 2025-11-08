/**
 * @packageDocumentation Configuration Validation Utilities
 *
 * Provides comprehensive validation functions for agent configurations,
 * including schema validation, type checking, and business rule validation.
 */

import { AgentConfigDefinition } from "@internal-types/agentConfig";
import { ConfigUtils, CONFIG_REGISTRY } from "@internal-types/configRegistry";

/**
 * Validation result with detailed error information
 *
 */
export interface ValidationResult {
  /** Whether validation passed */
  isValid: boolean;

  /** List of validation errors found */
  errors: ValidationError[];

  /** List of validation warnings (non-blocking issues) */
  warnings: ValidationWarning[];
}

/**
 * Detailed validation error information
 *
 */
export interface ValidationError {
  /** Error severity level */
  level: "error" | "warning";

  /** Error category */
  category: "schema" | "type" | "business_rule" | "compatibility";

  /** JSON path to the problematic field */
  path: string;

  /** Human-readable error message */
  message: string;

  /** Expected value or format */
  expected?: unknown;

  /** Actual value found */
  actual?: unknown;
}

/**
 * Validation warning (non-blocking issue)
 *
 */
export interface ValidationWarning extends Omit<ValidationError, "level"> {
  level: "warning";
}

/**
 * Comprehensive validation function for agent configurations
 *
 * @param {unknown} config - config parameter.
 * @returns {ValidationResult} - TODO: describe return value.
 */
export function validateAgentConfig(config: unknown): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  // Basic type checking
  if (typeof config !== "object" || config === null) {
    errors.push({
      level: "error",
      category: "type",
      path: "$root",
      message: "Configuration must be an object",
      expected: "object",
      actual: typeof config,
    });
    return { isValid: false, errors, warnings };
  }

  const configObj = config as Record<string, unknown>;

  // Validate required $configId field
  if (!configObj.$configId) {
    errors.push({
      level: "error",
      category: "schema",
      path: "$configId",
      message: "Missing required $configId field",
      expected: "string (configuration ID from registry)",
    });
  } else if (typeof configObj.$configId !== "string") {
    errors.push({
      level: "error",
      category: "type",
      path: "$configId",
      message: "$configId must be a string",
      expected: "string",
      actual: typeof configObj.$configId,
    });
  } else if (!ConfigUtils.isValidConfigId(configObj.$configId)) {
    errors.push({
      level: "error",
      category: "schema",
      path: "$configId",
      message: "Invalid configuration ID not found in registry",
      actual: configObj.$configId,
      expected: "Valid configuration ID from registry",
    });
  }

  // Validate agent field structure
  if (!configObj.agent) {
    errors.push({
      level: "error",
      category: "schema",
      path: "agent",
      message: "Missing required agent field",
    });
  } else {
    validateAgentField(configObj.agent, errors, warnings);
  }

  // Validate configuration sections based on config ID
  if (
    configObj.$configId &&
    ConfigUtils.isValidConfigId(configObj.$configId as string)
  ) {
    const metadata = ConfigUtils.getMetadata(configObj.$configId as string);
    if (metadata) {
      validateConfigurationSections(
        configObj,
        metadata.agentType,
        errors,
        warnings
      );
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate the agent field structure
 *
 * @param {unknown} agent - agent parameter.
 * @param {ValidationError[]} errors - errors parameter.
 * @param {ValidationWarning[]} warnings - warnings parameter.
 */
function validateAgentField(
  agent: unknown,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  if (typeof agent !== "object" || agent === null) {
    errors.push({
      level: "error",
      category: "type",
      path: "agent",
      message: "Agent field must be an object",
      expected: "object",
      actual: typeof agent,
    });
    return;
  }

  const agentObj = agent as Record<string, unknown>;

  // Required fields
  const requiredFields = ["id", "name", "version", "description"];
  for (const field of requiredFields) {
    if (!agentObj[field]) {
      errors.push({
        level: "error",
        category: "schema",
        path: `agent.${field}`,
        message: `Missing required field: ${field}`,
      });
    } else if (typeof agentObj[field] !== "string") {
      errors.push({
        level: "error",
        category: "type",
        path: `agent.${field}`,
        message: `Field ${field} must be a string`,
        expected: "string",
        actual: typeof agentObj[field],
      });
    }
  }

  // Validate version format
  if (agentObj.version && typeof agentObj.version === "string") {
    const versionPattern = /^\d+\.\d+\.\d+$/;
    if (!versionPattern.test(agentObj.version as string)) {
      warnings.push({
        level: "warning",
        category: "business_rule",
        path: "agent.version",
        message: "Version should follow semantic versioning (x.y.z)",
        actual: agentObj.version,
        expected: "x.y.z format",
      });
    }
  }
}

/**
 * Validate configuration sections specific to agent type
 *
 * @param {Record<string, unknown>} config - config parameter.
 * @param {string} agentType - agentType parameter.
 * @param {ValidationError[]} errors - errors parameter.
 * @param {ValidationWarning[]} warnings - warnings parameter.
 */
function validateConfigurationSections(
  config: Record<string, unknown>,
  agentType: string,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  switch (agentType) {
    case "orchestrator":
      validateOrchestratorConfig(config, errors, warnings);
      break;
    case "database-agent":
      validateDatabaseAgentConfig(config, errors, warnings);
      break;
    case "data-agent":
      validateDataAgentConfig(config, errors, warnings);
      break;
    case "clarification-agent":
      validateClarificationAgentConfig(config, errors, warnings);
      break;
    case "relevant-data-manager":
      validateRelevantDataManagerConfig(config, errors, warnings);
      break;
    case "user-context":
      // user-context is a rename/alias of relevant-data-manager; reuse validation
      validateRelevantDataManagerConfig(config, errors, warnings);
      break;
    default:
      warnings.push({
        level: "warning",
        category: "schema",
        path: "$configId",
        message: `Unknown agent type: ${agentType}. Skipping specialized validation.`,
      });
  }
}

/**
 * Validate orchestrator-specific configuration
 *
 * @param {Record<string, unknown>} config - config parameter.
 * @param {ValidationError[]} errors - errors parameter.
 * @param {ValidationWarning[]} warnings - warnings parameter.
 */
function validateOrchestratorConfig(
  config: Record<string, unknown>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  // Check for orchestration section first
  const orchestration = config.orchestration as
    | Record<string, unknown>
    | undefined;

  if (!orchestration) {
    errors.push({
      level: "error",
      category: "schema",
      path: "orchestration",
      message:
        "Orchestrator configuration missing required orchestration section",
    });
    return;
  }

  // Validate intents section within orchestration
  if (!orchestration.intents) {
    errors.push({
      level: "error",
      category: "schema",
      path: "orchestration.intents",
      message: "Orchestrator configuration missing required intents section",
    });
  } else if (
    typeof orchestration.intents !== "object" ||
    orchestration.intents === null
  ) {
    errors.push({
      level: "error",
      category: "type",
      path: "orchestration.intents",
      message: "Intents section must be an object",
    });
  }

  // Validate textProcessing section
  if (
    orchestration.textProcessing &&
    typeof orchestration.textProcessing === "object"
  ) {
    const textProcessing = orchestration.textProcessing as Record<
      string,
      unknown
    >;

    if (textProcessing.stopWords && !Array.isArray(textProcessing.stopWords)) {
      errors.push({
        level: "error",
        category: "type",
        path: "textProcessing.stopWords",
        message: "stopWords must be an array of strings",
      });
    }

    if (textProcessing.scoring && typeof textProcessing.scoring === "object") {
      const scoring = textProcessing.scoring as Record<string, unknown>;

      if (scoring.weights && typeof scoring.weights === "object") {
        const weights = scoring.weights as Record<string, unknown>;
        const weightFields = [
          "exactMatch",
          "partialMatch",
          "wordOrder",
          "frequency",
        ];

        for (const field of weightFields) {
          if (
            weights[field] !== undefined &&
            typeof weights[field] !== "number"
          ) {
            errors.push({
              level: "error",
              category: "type",
              path: `textProcessing.scoring.weights.${field}`,
              message: `Weight ${field} must be a number`,
            });
          }
        }
      }
    }
  }
}

/**
 * Placeholder validation functions for other agent types
 *
 * @param {Record<string, unknown>} config - config parameter.
 * @param {ValidationError[]} errors - errors parameter.
 * @param {ValidationWarning[]} warnings - warnings parameter.
 */
function validateDatabaseAgentConfig(
  config: Record<string, unknown>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  // TODO: Implement database agent specific validation
}

/**
 * validateDataAgentConfig function.
 *
 * @param {Record<string, unknown>} config - config parameter.
 * @param {ValidationError[]} errors - errors parameter.
 * @param {ValidationWarning[]} warnings - warnings parameter.
 */
function validateDataAgentConfig(
  config: Record<string, unknown>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  // TODO: Implement data agent specific validation
}

/**
 * validateClarificationAgentConfig function.
 *
 * @param {Record<string, unknown>} config - config parameter.
 * @param {ValidationError[]} errors - errors parameter.
 * @param {ValidationWarning[]} warnings - warnings parameter.
 */
function validateClarificationAgentConfig(
  config: Record<string, unknown>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  // TODO: Implement clarification agent specific validation
}

/**
 * validateRelevantDataManagerConfig function.
 *
 * @param {Record<string, unknown>} config - config parameter.
 * @param {ValidationError[]} errors - errors parameter.
 * @param {ValidationWarning[]} warnings - warnings parameter.
 */
function validateRelevantDataManagerConfig(
  config: Record<string, unknown>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  // TODO: Implement relevant data manager specific validation
}

/**
 * Validate configuration compatibility between different versions
 *
 * @param {AgentConfigDefinition} config1 - config1 parameter.
 * @param {AgentConfigDefinition} config2 - config2 parameter.
 * @returns {ValidationResult} - TODO: describe return value.
 */
export function validateCompatibility(
  config1: AgentConfigDefinition,
  config2: AgentConfigDefinition
): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];

  if (!config1.$configId || !config2.$configId) {
    errors.push({
      level: "error",
      category: "compatibility",
      path: "$configId",
      message: "Cannot check compatibility without configuration IDs",
    });
    return { isValid: false, errors, warnings };
  }

  if (!ConfigUtils.areCompatible(config1.$configId, config2.$configId)) {
    errors.push({
      level: "error",
      category: "compatibility",
      path: "$configId",
      message: "Configuration versions are not compatible",
      actual: `${config1.$configId} vs ${config2.$configId}`,
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Generate a validation report for display
 *
 * @param {ValidationResult} result - result parameter.
 * @returns {string} - TODO: describe return value.
 */
export function generateValidationReport(result: ValidationResult): string {
  const lines: string[] = [];

  if (result.isValid) {
    lines.push("✅ Configuration validation passed");
  } else {
    lines.push("❌ Configuration validation failed");
  }

  if (result.errors.length > 0) {
    lines.push("\nErrors:");
    result.errors.forEach((error, index) => {
      lines.push(
        `  ${index + 1}. [${error.category.toUpperCase()}] ${error.path}: ${
          error.message
        }`
      );
      if (error.expected !== undefined) {
        lines.push(`     Expected: ${JSON.stringify(error.expected)}`);
      }
      if (error.actual !== undefined) {
        lines.push(`     Actual: ${JSON.stringify(error.actual)}`);
      }
    });
  }

  if (result.warnings.length > 0) {
    lines.push("\nWarnings:");
    result.warnings.forEach((warning, index) => {
      lines.push(
        `  ${index + 1}. [${warning.category.toUpperCase()}] ${warning.path}: ${
          warning.message
        }`
      );
    });
  }

  return lines.join("\n");
}
