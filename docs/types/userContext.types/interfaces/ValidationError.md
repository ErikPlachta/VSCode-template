[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ValidationError

# Interface: ValidationError

Defined in: [src/types/userContext.types.ts:571](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L571)

Validation error detail

## Properties

### actual?

> `optional` **actual**: `string`

Defined in: [src/types/userContext.types.ts:579](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L579)

Actual value received (for debugging)

***

### expected?

> `optional` **expected**: `string`

Defined in: [src/types/userContext.types.ts:577](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L577)

Expected value or type

***

### message

> **message**: `string`

Defined in: [src/types/userContext.types.ts:575](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L575)

Description of what went wrong

***

### path

> **path**: `string`

Defined in: [src/types/userContext.types.ts:573](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L573)

Path to the field with the error (e.g., "config.primaryKeys")
