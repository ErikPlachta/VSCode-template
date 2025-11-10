[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationIssue

# Interface: DataValidationIssue

Defined in: [src/types/userContext.types.ts:293](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L293)

Issue detected while validating the raw data set for a category

## Properties

### field?

> `optional` **field**: `string`

Defined in: [src/types/userContext.types.ts:299](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L299)

Field that failed validation if available

***

### message

> **message**: `string`

Defined in: [src/types/userContext.types.ts:301](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L301)

Detailed error message

***

### recordId

> **recordId**: `string`

Defined in: [src/types/userContext.types.ts:295](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L295)

Identifier for the record that failed validation

***

### schema?

> `optional` **schema**: `string`

Defined in: [src/types/userContext.types.ts:297](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L297)

Optional schema name that triggered the error

***

### type

> **type**: `"schema"` \| `"relationship"`

Defined in: [src/types/userContext.types.ts:303](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L303)

Type of validation that generated the issue
