[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / formatValidationErrors

# Function: formatValidationErrors()

> **formatValidationErrors**(`errors`, `maxErrors`): `string`

Defined in: [src/types/userContext.types.ts:943](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L943)

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
