[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / DataValidationReport

# Interface: DataValidationReport

Defined in: [src/agent/relevantDataManagerAgent/index.ts:148](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L148)

Summary produced after normalising the dataset.

## Properties

### checkedAt

> **checkedAt**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:150](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L150)

Timestamp when validation occurred.

***

### issues

> **issues**: [`DataValidationIssue`](DataValidationIssue.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:154](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L154)

Detailed issues encountered during validation.

***

### status

> **status**: `"pass"` \| `"fail"`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:152](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L152)

Overall status for the category.
