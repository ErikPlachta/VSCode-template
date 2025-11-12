[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ConfigDescriptor

# Interface: ConfigDescriptor

Defined in: [src/types/agentConfig.ts:1035](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1035)

Descriptor describing a configurable item available on an agent.

## Properties

### description?

> `optional` **description**: `string`

Defined in: [src/types/agentConfig.ts:1044](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1044)

Optional human-readable description.

***

### group?

> `optional` **group**: `string`

Defined in: [src/types/agentConfig.ts:1042](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1042)

Optional group for organizing descriptors in UI.

***

### name

> **name**: `string`

Defined in: [src/types/agentConfig.ts:1036](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1036)

***

### path

> **path**: `string`

Defined in: [src/types/agentConfig.ts:1037](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1037)

***

### type

> **type**: `string`

Defined in: [src/types/agentConfig.ts:1038](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1038)

***

### validate()?

> `optional` **validate**: (`value`) => `string` \| `boolean`

Defined in: [src/types/agentConfig.ts:1046](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1046)

Optional validation function for basic type/shape checks.

#### Parameters

##### value

`unknown`

#### Returns

`string` \| `boolean`

***

### verifyPaths?

> `optional` **verifyPaths**: `string`[]

Defined in: [src/types/agentConfig.ts:1040](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1040)

***

### visibility

> **visibility**: `"public"` \| `"private"`

Defined in: [src/types/agentConfig.ts:1039](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1039)
