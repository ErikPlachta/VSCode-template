[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / DataValidationIssue

# Interface: DataValidationIssue

Defined in: [src/agent/relevantDataManagerAgent/index.ts:131](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L131)

Issue detected while validating the raw data set for a category.

## Properties

### field?

> `optional` **field**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:137](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L137)

Field that failed validation if available.

***

### message

> **message**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:139](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L139)

Detailed error message.

***

### recordId

> **recordId**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L133)

Identifier for the record that failed validation.

***

### schema?

> `optional` **schema**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:135](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L135)

Optional schema name that triggered the error.

***

### type

> **type**: `"schema"` \| `"relationship"`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:141](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L141)

Type of validation that generated the issue.
