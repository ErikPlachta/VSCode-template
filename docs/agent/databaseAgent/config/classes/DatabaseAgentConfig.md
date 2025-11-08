---
title: Database Agent Config
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---

[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

---

[mybusiness-mcp-extension](../../../../modules.md) / [agent/databaseAgent/config](../README.md) / DatabaseAgentConfig

# Class: DatabaseAgentConfig

Defined in: [src/agent/databaseAgent/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L19)

Database agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new DatabaseAgentConfig**(`config?`): `DatabaseAgentConfig`

Defined in: [src/agent/databaseAgent/config.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L22)

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

#### Returns

`DatabaseAgentConfig`

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getAggregationConfig()

> **getAggregationConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:166](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L166)

Get aggregation configuration

#### Returns

`object`

##### enableGroupBy

> **enableGroupBy**: `boolean`

##### functions

> **functions**: `string`[]

##### maxGroups

> **maxGroups**: `number`

---

### getAllFieldAliases()

> **getAllFieldAliases**(): `Record`\<`string`, `Record`\<`string`, `string`\>\>

Defined in: [src/agent/databaseAgent/config.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L47)

Get all field aliases

#### Returns

`Record`\<`string`, `Record`\<`string`, `string`\>\>

---

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:516](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L516)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

---

### getCachingConfig()

> **getCachingConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L54)

Get caching configuration

#### Returns

`object`

##### cacheTTL

> **cacheTTL**: `number`

##### defaultKeyPrefix

> **defaultKeyPrefix**: `string`

##### enabledByDefault

> **enabledByDefault**: `boolean`

##### maxCacheEntries

> **maxCacheEntries**: `number`

---

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:478](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L478)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

---

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:523](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L523)

Get configuration schema ID

#### Returns

`string`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

---

### getDefaultCacheKeyPrefix()

> **getDefaultCacheKeyPrefix**(): `string`

Defined in: [src/agent/databaseAgent/config.ts:225](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L225)

Get default cache key prefix

#### Returns

`string`

---

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L191)

Get error handling configuration

#### Returns

`object`

##### exponentialBackoff

> **exponentialBackoff**: `boolean`

##### fallbackOnCacheError

> **fallbackOnCacheError**: `boolean`

##### maxRetries

> **maxRetries**: `number`

##### retryDelay

> **retryDelay**: `number`

---

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:502](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L502)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

---

### getFieldAliases()

> **getFieldAliases**(`category`): `Record`\<`string`, `string`\>

Defined in: [src/agent/databaseAgent/config.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L40)

Get field aliases for a specific category

#### Parameters

##### category

`string`

#### Returns

`Record`\<`string`, `string`\>

---

### getFilteringConfig()

> **getFilteringConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L128)

Get filtering configuration

#### Returns

`object`

##### caseInsensitiveStrings

> **caseInsensitiveStrings**: `boolean`

##### enableFuzzyMatching

> **enableFuzzyMatching**: `boolean`

##### operators

> **operators**: `string`[]

---

### getFilterOperators()

> **getFilterOperators**(): `string`[]

Defined in: [src/agent/databaseAgent/config.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L107)

Get supported filter operators

#### Returns

`string`[]

---

### getIntegrityChecks()

> **getIntegrityChecks**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:94](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L94)

Get integrity check settings

#### Returns

`object`

##### checkMissingReferences

> **checkMissingReferences**: `boolean`

##### validateRelationships

> **validateRelationships**: `boolean`

##### warnOnSchemaIssues

> **warnOnSchemaIssues**: `boolean`

---

### getJoinConfig()

> **getJoinConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:153](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L153)

Get join operation configuration

#### Returns

`object`

##### autoDiscoverRelationships

> **autoDiscoverRelationships**: `boolean`

##### maxJoinRecords

> **maxJoinRecords**: `number`

##### supportedJoinTypes

> **supportedJoinTypes**: `string`[]

---

### getMaxResultSize()

> **getMaxResultSize**(): `number`

Defined in: [src/agent/databaseAgent/config.ts:232](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L232)

Get maximum result size for queries

#### Returns

`number`

---

### getQueryLimits()

> **getQueryLimits**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L68)

Get query limits configuration

#### Returns

`object`

##### maxJoinDepth

> **maxJoinDepth**: `number`

##### maxResultSize

> **maxResultSize**: `number`

##### queryTimeout

> **queryTimeout**: `number`

---

### getQueryTimeout()

> **getQueryTimeout**(): `number`

Defined in: [src/agent/databaseAgent/config.ts:239](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L239)

Get query timeout in milliseconds

#### Returns

`number`

---

### getSchemaValidation()

> **getSchemaValidation**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:81](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L81)

Get schema validation settings

#### Returns

`object`

##### allowUnknownFields

> **allowUnknownFields**: `boolean`

##### autoTransformAliases

> **autoTransformAliases**: `boolean`

##### enableStrictValidation

> **enableStrictValidation**: `boolean`

---

### getTelemetryConfig()

> **getTelemetryConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:179](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L179)

Get telemetry configuration

#### Returns

`object`

##### logCacheStats

> **logCacheStats**: `boolean`

##### logPerformance

> **logPerformance**: `boolean`

##### logQueries

> **logQueries**: `boolean`

##### slowQueryThreshold

> **slowQueryThreshold**: `number`

---

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:509](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L509)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

---

### isAutoAliasTransformEnabled()

> **isAutoAliasTransformEnabled**(): `boolean`

Defined in: [src/agent/databaseAgent/config.ts:218](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L218)

Check if auto alias transformation is enabled

#### Returns

`boolean`

---

### isCachingEnabled()

> **isCachingEnabled**(): `boolean`

Defined in: [src/agent/databaseAgent/config.ts:204](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L204)

Check if caching is enabled by default

#### Returns

`boolean`

---

### isStrictValidationEnabled()

> **isStrictValidationEnabled**(): `boolean`

Defined in: [src/agent/databaseAgent/config.ts:211](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/config.ts#L211)

Check if strict validation is enabled

#### Returns

`boolean`

## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
