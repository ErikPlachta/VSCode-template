[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / CategoryRequirements

# Interface: CategoryRequirements

Defined in: [src/agent/relevantDataManagerAgent/index.ts:65](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L65)

Requirements that each category must satisfy before being processed.

## Properties

### notes?

> `optional` **notes**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:71](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L71)

Free-form notes surfaced to orchestration layers.

***

### requiredRecordFields

> **requiredRecordFields**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L67)

Fields that every record must provide.

***

### requiredRelationshipFields?

> `optional` **requiredRelationshipFields**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L69)

Record properties that should align with relationship definitions.
