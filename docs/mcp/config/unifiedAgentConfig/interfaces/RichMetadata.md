[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[mybusiness-mcp-extension](../../../../modules.md) / [mcp/config/unifiedAgentConfig](../README.md) / RichMetadata

# Interface: RichMetadata

Defined in: [src/mcp/config/unifiedAgentConfig.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L42)

Rich metadata for user and application interfaces

## Properties

### applicationFacing

> **applicationFacing**: `object`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L55)

#### dependencies

> **dependencies**: `string`[]

#### errorHandling

> **errorHandling**: `object`

##### errorHandling.fallbackAgent?

> `optional` **fallbackAgent**: `string`

##### errorHandling.maxRetries

> **maxRetries**: `number`

##### errorHandling.retryStrategy

> **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

#### monitoring

> **monitoring**: `object`

##### monitoring.alertThresholds

> **alertThresholds**: `object`

##### monitoring.alertThresholds.error\_rate\_percent

> **error\_rate\_percent**: `number`

##### monitoring.alertThresholds.response\_time\_ms

> **response\_time\_ms**: `number`

##### monitoring.metricsToTrack

> **metricsToTrack**: `string`[]

#### performance

> **performance**: `object`

##### performance.complexity

> **complexity**: `"high"` \| `"medium"` \| `"low"`

##### performance.expectedResponseTime

> **expectedResponseTime**: `number`

##### performance.memoryUsage

> **memoryUsage**: `"high"` \| `"medium"` \| `"low"`

#### technicalDescription

> **technicalDescription**: `string`

***

### capabilities

> **capabilities**: `string`[]

Defined in: [src/mcp/config/unifiedAgentConfig.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L47)

***

### className

> **className**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:46](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L46)

***

### displayName

> **displayName**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:45](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L45)

***

### label

> **label**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L44)

***

### name

> **name**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L43)

***

### responsibility

> **responsibility**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L48)

***

### userFacing

> **userFacing**: `object`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/mcp/config/unifiedAgentConfig.ts#L49)

#### exampleQueries

> **exampleQueries**: `string`[]

#### friendlyDescription

> **friendlyDescription**: `string`

#### helpText

> **helpText**: `string`

#### useWhen

> **useWhen**: `string`[]
