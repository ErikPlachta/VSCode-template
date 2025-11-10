[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationReport

# Interface: DataValidationReport

Defined in: src/types/userContext.types.ts:309

Summary produced after normalizing the dataset

## Properties

### checkedAt

> **checkedAt**: `string`

Defined in: src/types/userContext.types.ts:311

Timestamp when validation occurred

***

### issues

> **issues**: [`DataValidationIssue`](DataValidationIssue.md)[]

Defined in: src/types/userContext.types.ts:315

Detailed issues encountered during validation

***

### status

> **status**: `"pass"` \| `"fail"`

Defined in: src/types/userContext.types.ts:313

Overall status for the category
