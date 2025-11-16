[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / shared/validation/configValidation

# shared/validation/configValidation

Shared configuration validation implementations.

Runtime validation implementations extracted (duplicated for Phase 3) from `src/types/configValidation.ts`.
These functions will become the single source of truth once agents migrate to shared modules
and the types directory is restored to types-only exports.

## Remarks

Phase 3 (partial): Logic is intentionally copied without modification to preserve behavior
locked by parity tests. No consumers import this file yet; later phases will switch imports
and remove the duplicated runtime code from `src/types/configValidation.ts`.

## Interfaces

- [ValidationError](interfaces/ValidationError.md)
- [ValidationResult](interfaces/ValidationResult.md)
- [ValidationWarning](interfaces/ValidationWarning.md)

## Functions

- [generateValidationReport](functions/generateValidationReport.md)
- [validateAgentConfig](functions/validateAgentConfig.md)
- [validateCompatibility](functions/validateCompatibility.md)
