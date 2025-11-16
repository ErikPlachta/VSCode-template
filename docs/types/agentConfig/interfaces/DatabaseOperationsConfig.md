[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DatabaseOperationsConfig

# Interface: DatabaseOperationsConfig

Defined in: [src/types/agentConfig.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L283)

Supported query operations and their configurations.

## Properties

### aggregation

> **aggregation**: `object`

Defined in: [src/types/agentConfig.ts:294](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L294)

#### enableGroupBy?

> `optional` **enableGroupBy**: `boolean`

#### functions

> **functions**: `string`[]

#### maxGroups?

> `optional` **maxGroups**: `number`

***

### filtering

> **filtering**: `object`

Defined in: [src/types/agentConfig.ts:284](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L284)

#### caseInsensitiveStrings?

> `optional` **caseInsensitiveStrings**: `boolean`

#### enableFuzzyMatching?

> `optional` **enableFuzzyMatching**: `boolean`

#### operators

> **operators**: `string`[]

***

### joins

> **joins**: `object`

Defined in: [src/types/agentConfig.ts:289](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L289)

#### autoDiscoverRelationships?

> `optional` **autoDiscoverRelationships**: `boolean`

#### maxJoinRecords?

> `optional` **maxJoinRecords**: `number`

#### supportedJoinTypes

> **supportedJoinTypes**: `string`[]
