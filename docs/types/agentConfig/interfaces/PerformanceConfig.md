[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / PerformanceConfig

# Interface: PerformanceConfig

Defined in: [src/types/agentConfig.ts:173](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L173)

Performance characteristics and optional limits for an agent.

## Indexable

\[`key`: `string`\]: `unknown`

## Properties

### caching?

> `optional` **caching**: `object`

Defined in: [src/types/agentConfig.ts:177](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L177)

#### cacheTTL?

> `optional` **cacheTTL**: `number`

#### defaultKeyPrefix?

> `optional` **defaultKeyPrefix**: `string`

#### enabledByDefault?

> `optional` **enabledByDefault**: `boolean`

#### maxCacheEntries?

> `optional` **maxCacheEntries**: `number`

***

### complexity?

> `optional` **complexity**: `string`

Defined in: [src/types/agentConfig.ts:176](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L176)

***

### expectedResponseTime?

> `optional` **expectedResponseTime**: `number`

Defined in: [src/types/agentConfig.ts:174](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L174)

***

### limits?

> `optional` **limits**: `object`

Defined in: [src/types/agentConfig.ts:183](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L183)

#### maxJoinDepth?

> `optional` **maxJoinDepth**: `number`

#### maxResultSize?

> `optional` **maxResultSize**: `number`

#### queryTimeout?

> `optional` **queryTimeout**: `number`

***

### memoryUsage?

> `optional` **memoryUsage**: `string`

Defined in: [src/types/agentConfig.ts:175](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L175)
