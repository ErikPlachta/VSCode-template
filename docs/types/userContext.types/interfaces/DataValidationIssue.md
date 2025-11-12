[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationIssue

# Interface: DataValidationIssue

Defined in: [src/types/userContext.types.ts:310](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L310)

Issue detected while validating the raw data set for a category

## Properties

### field?

> `optional` **field**: `string`

Defined in: [src/types/userContext.types.ts:316](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L316)

Field that failed validation if available

***

### message

> **message**: `string`

Defined in: [src/types/userContext.types.ts:318](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L318)

Detailed error message

***

### recordId

> **recordId**: `string`

Defined in: [src/types/userContext.types.ts:312](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L312)

Identifier for the record that failed validation

***

### schema?

> `optional` **schema**: `string`

Defined in: [src/types/userContext.types.ts:314](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L314)

Optional schema name that triggered the error

***

### type

> **type**: `"schema"` \| `"relationship"`

Defined in: [src/types/userContext.types.ts:320](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L320)

Type of validation that generated the issue
