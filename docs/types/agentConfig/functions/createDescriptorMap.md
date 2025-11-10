[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / createDescriptorMap

# Function: createDescriptorMap()

> **createDescriptorMap**(`entries`): `Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Defined in: [src/types/agentConfig.ts:976](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/agentConfig.ts#L976)

Create a descriptor map from a list of descriptor entries.

## Parameters

### entries

\[`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\][]

Tuples of key and descriptor metadata.

## Returns

`Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Normalized descriptor map.
