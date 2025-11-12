[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / createDescriptorMap

# Function: createDescriptorMap()

> **createDescriptorMap**(`entries`): `Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Defined in: [src/types/agentConfig.ts:1055](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L1055)

Create a descriptor map from a list of descriptor entries.

## Parameters

### entries

\[`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\][]

Tuples of key and descriptor metadata.

## Returns

`Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Normalized descriptor map.
