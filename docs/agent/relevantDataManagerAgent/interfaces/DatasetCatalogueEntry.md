[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / DatasetCatalogueEntry

# Interface: DatasetCatalogueEntry

Defined in: [src/agent/relevantDataManagerAgent/index.ts:280](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L280)

Consolidated index entry persisted to the shared cache.

## Properties

### description

> **description**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L283)

***

### id

> **id**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:281](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L281)

***

### name

> **name**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:282](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L282)

***

### primaryKeys

> **primaryKeys**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:284](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L284)

***

### recordIds

> **recordIds**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L285)

***

### relationships

> **relationships**: `object`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:286](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L286)

#### cardinality

> **cardinality**: `"one"` \| `"many"`

#### name

> **name**: `string`

#### targetCategory

> **targetCategory**: `string`

#### viaField

> **viaField**: `string`

***

### requirements?

> `optional` **requirements**: [`CategoryRequirements`](CategoryRequirements.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:293](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L293)

***

### schemaNames

> **schemaNames**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:292](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L292)
