[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ConfigDescriptor

# Interface: ConfigDescriptor

Defined in: [src/types/agentConfig.ts:1095](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1095)

Descriptor describing a configurable item available on an agent.

## Properties

### description?

> `optional` **description**: `string`

Defined in: [src/types/agentConfig.ts:1104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1104)

Optional human-readable description.

***

### group?

> `optional` **group**: `string`

Defined in: [src/types/agentConfig.ts:1102](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1102)

Optional group for organizing descriptors in UI.

***

### name

> **name**: `string`

Defined in: [src/types/agentConfig.ts:1096](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1096)

***

### path

> **path**: `string`

Defined in: [src/types/agentConfig.ts:1097](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1097)

***

### type

> **type**: `string`

Defined in: [src/types/agentConfig.ts:1098](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1098)

***

### validate()?

> `optional` **validate**: (`value`) => `string` \| `boolean`

Defined in: [src/types/agentConfig.ts:1106](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1106)

Optional validation function for basic type/shape checks.

#### Parameters

##### value

`unknown`

#### Returns

`string` \| `boolean`

***

### verifyPaths?

> `optional` **verifyPaths**: `string`[]

Defined in: [src/types/agentConfig.ts:1100](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1100)

***

### visibility

> **visibility**: `"public"` \| `"private"`

Defined in: [src/types/agentConfig.ts:1099](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1099)
