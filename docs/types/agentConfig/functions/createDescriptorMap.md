[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / createDescriptorMap

# Function: createDescriptorMap()

> **createDescriptorMap**(`entries`): `Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Defined in: [src/types/agentConfig.ts:1115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L1115)

Create a descriptor map from a list of descriptor entries.

## Parameters

### entries

\[`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\][]

Tuples of key and descriptor metadata.

## Returns

`Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Normalized descriptor map.
