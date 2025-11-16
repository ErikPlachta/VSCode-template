[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationIssue

# Interface: DataValidationIssue

Defined in: [src/types/userContext.types.ts:318](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L318)

Issue detected while validating the raw data set for a category

## Properties

### field?

> `optional` **field**: `string`

Defined in: [src/types/userContext.types.ts:324](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L324)

Field that failed validation if available

***

### message

> **message**: `string`

Defined in: [src/types/userContext.types.ts:326](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L326)

Detailed error message

***

### recordId

> **recordId**: `string`

Defined in: [src/types/userContext.types.ts:320](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L320)

Identifier for the record that failed validation

***

### schema?

> `optional` **schema**: `string`

Defined in: [src/types/userContext.types.ts:322](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L322)

Optional schema name that triggered the error

***

### type

> **type**: `"schema"` \| `"relationship"`

Defined in: [src/types/userContext.types.ts:328](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L328)

Type of validation that generated the issue
