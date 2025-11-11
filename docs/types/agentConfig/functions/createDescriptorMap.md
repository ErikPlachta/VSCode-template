[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / createDescriptorMap

# Function: createDescriptorMap()

> **createDescriptorMap**(`entries`): `Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Defined in: [src/types/agentConfig.ts:1055](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L1055)

Create a descriptor map from a list of descriptor entries.

## Parameters

### entries

\[`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\][]

Tuples of key and descriptor metadata.

## Returns

`Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Normalized descriptor map.
