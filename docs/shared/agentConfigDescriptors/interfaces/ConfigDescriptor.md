[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/agentConfigDescriptors](../README.md) / ConfigDescriptor

# Interface: ConfigDescriptor

Defined in: [src/shared/agentConfigDescriptors.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L31)

Descriptor describing a configurable item available on an agent.

## Properties

### description?

> `optional` **description**: `string`

Defined in: [src/shared/agentConfigDescriptors.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L40)

Optional human-readable description.

***

### group?

> `optional` **group**: `string`

Defined in: [src/shared/agentConfigDescriptors.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L38)

Optional group for organizing descriptors in UI.

***

### name

> **name**: `string`

Defined in: [src/shared/agentConfigDescriptors.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L32)

***

### path

> **path**: `string`

Defined in: [src/shared/agentConfigDescriptors.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L33)

***

### type

> **type**: `string`

Defined in: [src/shared/agentConfigDescriptors.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L34)

***

### validate()?

> `optional` **validate**: (`value`) => `string` \| `boolean`

Defined in: [src/shared/agentConfigDescriptors.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L42)

Optional validation function for basic type/shape checks.

#### Parameters

##### value

`unknown`

#### Returns

`string` \| `boolean`

***

### verifyPaths?

> `optional` **verifyPaths**: `string`[]

Defined in: [src/shared/agentConfigDescriptors.ts:36](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L36)

***

### visibility

> **visibility**: `"public"` \| `"private"`

Defined in: [src/shared/agentConfigDescriptors.ts:35](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/agentConfigDescriptors.ts#L35)
