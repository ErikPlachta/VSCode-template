/**
 * @packageDocumentation Configuration Validation Type Declarations (Phase 6)
 *
 * All runtime validation logic has migrated to `src/shared/validation/configValidation.ts`.
 * This file now exposes only the type shapes consumed by agents, tools, and tests.
 */

/** Detailed validation error information (runtime logic lives in shared module). */
export interface ValidationError {
  level: "error" | "warning";
  category: "schema" | "type" | "business_rule" | "compatibility";
  path: string;
  message: string;
  expected?: unknown;
  actual?: unknown;
}

/** Validation warning (non-blocking issue). */
export interface ValidationWarning extends Omit<ValidationError, "level"> {
  level: "warning";
}

/** Validation result with detailed error and warning information. */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

// Phase 6 completion note: previous runtime exports (validateAgentConfig, validateCompatibility,
// generateValidationReport) removed. Import these from `@shared/validation/configValidation` instead.
