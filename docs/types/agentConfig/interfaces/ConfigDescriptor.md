[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ConfigDescriptor

# Interface: ConfigDescriptor

Defined in: [src/types/agentConfig.ts:956](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L956)

Descriptor describing a configurable item available on an agent.

## Properties

### description?

> `optional` **description**: `string`

Defined in: [src/types/agentConfig.ts:965](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L965)

Optional human-readable description.

***

### group?

> `optional` **group**: `string`

Defined in: [src/types/agentConfig.ts:963](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L963)

Optional group for organizing descriptors in UI.

***

### name

> **name**: `string`

Defined in: [src/types/agentConfig.ts:957](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L957)

***

### path

> **path**: `string`

Defined in: [src/types/agentConfig.ts:958](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L958)

***

### type

> **type**: `string`

Defined in: [src/types/agentConfig.ts:959](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L959)

***

### validate()?

> `optional` **validate**: (`value`) => `string` \| `boolean`

Defined in: [src/types/agentConfig.ts:967](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L967)

Optional validation function for basic type/shape checks.

#### Parameters

##### value

`unknown`

#### Returns

`string` \| `boolean`

***

### verifyPaths?

> `optional` **verifyPaths**: `string`[]

Defined in: [src/types/agentConfig.ts:961](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L961)

***

### visibility

> **visibility**: `"public"` \| `"private"`

Defined in: [src/types/agentConfig.ts:960](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/types/agentConfig.ts#L960)
