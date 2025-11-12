[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/types/userContext.types.ts:602](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L602)

Validation result with detailed errors

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/types/userContext.types.ts:606](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L606)

List of validation errors (empty if valid)

***

### valid

> **valid**: `boolean`

Defined in: [src/types/userContext.types.ts:604](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L604)

Whether validation passed
