[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / formatValidationErrors

# Function: formatValidationErrors()

> **formatValidationErrors**(`errors`, `maxErrors`): `string`

Defined in: [src/types/userContext.types.ts:943](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L943)

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
