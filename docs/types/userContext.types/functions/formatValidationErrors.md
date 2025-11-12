[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / formatValidationErrors

# Function: formatValidationErrors()

> **formatValidationErrors**(`errors`, `maxErrors`): `string`

Defined in: [src/types/userContext.types.ts:960](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L960)

Formats validation errors into a human-readable string

## Parameters

### errors

[`ValidationError`](../interfaces/ValidationError.md)[]

Array of validation errors

### maxErrors

`number` = `3`

Maximum number of errors to include (default: 3)

## Returns

`string`

Formatted error message
