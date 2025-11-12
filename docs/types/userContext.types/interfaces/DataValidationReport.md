[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationReport

# Interface: DataValidationReport

Defined in: [src/types/userContext.types.ts:309](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L309)

Summary produced after normalizing the dataset

## Properties

### checkedAt

> **checkedAt**: `string`

Defined in: [src/types/userContext.types.ts:311](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L311)

Timestamp when validation occurred

***

### issues

> **issues**: [`DataValidationIssue`](DataValidationIssue.md)[]

Defined in: [src/types/userContext.types.ts:315](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L315)

Detailed issues encountered during validation

***

### status

> **status**: `"pass"` \| `"fail"`

Defined in: [src/types/userContext.types.ts:313](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L313)

Overall status for the category
