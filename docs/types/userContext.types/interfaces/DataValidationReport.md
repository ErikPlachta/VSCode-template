[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DataValidationReport

# Interface: DataValidationReport

Defined in: [src/types/userContext.types.ts:334](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L334)

Summary produced after normalizing the dataset

## Properties

### checkedAt

> **checkedAt**: `string`

Defined in: [src/types/userContext.types.ts:336](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L336)

Timestamp when validation occurred

***

### issues

> **issues**: [`DataValidationIssue`](DataValidationIssue.md)[]

Defined in: [src/types/userContext.types.ts:340](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L340)

Detailed issues encountered during validation

***

### status

> **status**: `"pass"` \| `"fail"`

Defined in: [src/types/userContext.types.ts:338](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L338)

Overall status for the category
