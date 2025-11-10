[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationIssue

# Interface: DataValidationIssue

Defined in: src/types/userContext.types.ts:293

Issue detected while validating the raw data set for a category

## Properties

### field?

> `optional` **field**: `string`

Defined in: src/types/userContext.types.ts:299

Field that failed validation if available

***

### message

> **message**: `string`

Defined in: src/types/userContext.types.ts:301

Detailed error message

***

### recordId

> **recordId**: `string`

Defined in: src/types/userContext.types.ts:295

Identifier for the record that failed validation

***

### schema?

> `optional` **schema**: `string`

Defined in: src/types/userContext.types.ts:297

Optional schema name that triggered the error

***

### type

> **type**: `"schema"` \| `"relationship"`

Defined in: src/types/userContext.types.ts:303

Type of validation that generated the issue
