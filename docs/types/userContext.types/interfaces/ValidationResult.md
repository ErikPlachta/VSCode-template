[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/types/userContext.types.ts:623](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L623)

Validation result with detailed errors.

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/types/userContext.types.ts:627](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L627)

List of validation errors (empty if valid)

***

### valid

> **valid**: `boolean`

Defined in: [src/types/userContext.types.ts:625](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L625)

Whether validation passed
