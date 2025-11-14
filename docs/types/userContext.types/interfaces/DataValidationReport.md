[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationReport

# Interface: DataValidationReport

Defined in: [src/types/userContext.types.ts:336](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L336)

Summary produced after normalizing the dataset

## Properties

### checkedAt

> **checkedAt**: `string`

Defined in: [src/types/userContext.types.ts:338](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L338)

Timestamp when validation occurred

***

### issues

> **issues**: [`DataValidationIssue`](DataValidationIssue.md)[]

Defined in: [src/types/userContext.types.ts:342](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L342)

Detailed issues encountered during validation

***

### status

> **status**: `"pass"` \| `"fail"`

Defined in: [src/types/userContext.types.ts:340](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L340)

Overall status for the category
