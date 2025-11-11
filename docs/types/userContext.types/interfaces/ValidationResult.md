[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/types/userContext.types.ts:585](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L585)

Validation result with detailed errors

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/types/userContext.types.ts:589](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L589)

List of validation errors (empty if valid)

***

### valid

> **valid**: `boolean`

Defined in: [src/types/userContext.types.ts:587](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L587)

Whether validation passed
