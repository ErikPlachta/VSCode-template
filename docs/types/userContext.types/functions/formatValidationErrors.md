[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / formatValidationErrors

# Function: formatValidationErrors()

> **formatValidationErrors**(`errors`, `maxErrors`): `string`

Defined in: [src/types/userContext.types.ts:943](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L943)

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
