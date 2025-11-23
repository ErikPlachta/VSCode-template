[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/shared/validation/configValidation.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L25)

Validation result produced by configuration validators.

## Remarks

Exported for consumers that need to act on structured validation feedback
(tooling, CI health checks, UX reporting). When Phase 5+ migration is
complete this will be the single source type (types/ duplicate removed).

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/shared/validation/configValidation.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L27)

***

### isValid

> **isValid**: `boolean`

Defined in: [src/shared/validation/configValidation.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L26)

***

### warnings

> **warnings**: [`ValidationWarning`](ValidationWarning.md)[]

Defined in: [src/shared/validation/configValidation.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L28)
