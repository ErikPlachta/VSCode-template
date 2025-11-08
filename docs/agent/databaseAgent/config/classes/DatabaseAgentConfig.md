[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[mybusiness-mcp-extension](../../../../modules.md) / [agent/databaseAgent/config](../README.md) / DatabaseAgentConfig

# Class: DatabaseAgentConfig

Defined in: [src/agent/databaseAgent/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L19)

Database agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new DatabaseAgentConfig**(`config?`): `DatabaseAgentConfig`

Defined in: [src/agent/databaseAgent/config.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L29)

constructor function.

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

config parameter.

#### Returns

`DatabaseAgentConfig`

- TODO: describe return value.

#### Throws

- May throw an error.

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getAggregationConfig()

> **getAggregationConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:194](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L194)

Get aggregation configuration

#### Returns

`object`

- TODO: describe return value.

##### enableGroupBy

> **enableGroupBy**: `boolean`

##### functions

> **functions**: `string`[]

##### maxGroups

> **maxGroups**: `number`

***

### getAllFieldAliases()

> **getAllFieldAliases**(): `Record`\<`string`, `Record`\<`string`, `string`\>\>

Defined in: [src/agent/databaseAgent/config.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L59)

Get all field aliases

#### Returns

`Record`\<`string`, `Record`\<`string`, `string`\>\>

- TODO: describe return value.

***

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:545](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L545)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

***

### getCachingConfig()

> **getCachingConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L68)

Get caching configuration

#### Returns

`object`

- TODO: describe return value.

##### cacheTTL

> **cacheTTL**: `number`

##### defaultKeyPrefix

> **defaultKeyPrefix**: `string`

##### enabledByDefault

> **enabledByDefault**: `boolean`

##### maxCacheEntries

> **maxCacheEntries**: `number`

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:499](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L499)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:554](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L554)

Get configuration schema ID

#### Returns

`string`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

***

### getDefaultCacheKeyPrefix()

> **getDefaultCacheKeyPrefix**(): `string`

Defined in: [src/agent/databaseAgent/config.ts:265](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L265)

Get default cache key prefix

#### Returns

`string`

- TODO: describe return value.

***

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/databaseAgent/config.ts:223](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L223)

Get error handling configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:527](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L527)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

***

### getFieldAliases()

> **getFieldAliases**(`category`): `Record`\<`string`, `string`\>

Defined in: [src/agent/databaseAgent/config.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L50)

Get field aliases for a specific category

#### Parameters

##### category

`string`

category parameter.

#### Returns

`Record`\<`string`, `string`\>

- TODO: describe return value.

***

### getFilteringConfig()

> **getFilteringConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:152](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L152)

Get filtering configuration

#### Returns

`object`

- TODO: describe return value.

##### caseInsensitiveStrings

> **caseInsensitiveStrings**: `boolean`

##### enableFuzzyMatching

> **enableFuzzyMatching**: `boolean`

##### operators

> **operators**: `string`[]

***

### getFilterOperators()

> **getFilterOperators**(): `string`[]

Defined in: [src/agent/databaseAgent/config.ts:129](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L129)

Get supported filter operators

#### Returns

`string`[]

- TODO: describe return value.

***

### getIntegrityChecks()

> **getIntegrityChecks**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:114](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L114)

Get integrity check settings

#### Returns

`object`

- TODO: describe return value.

##### checkMissingReferences

> **checkMissingReferences**: `boolean`

##### validateRelationships

> **validateRelationships**: `boolean`

##### warnOnSchemaIssues

> **warnOnSchemaIssues**: `boolean`

***

### getJoinConfig()

> **getJoinConfig**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:179](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L179)

Get join operation configuration

#### Returns

`object`

- TODO: describe return value.

##### autoDiscoverRelationships

> **autoDiscoverRelationships**: `boolean`

##### maxJoinRecords

> **maxJoinRecords**: `number`

##### supportedJoinTypes

> **supportedJoinTypes**: `string`[]

***

### getMaxResultSize()

> **getMaxResultSize**(): `number`

Defined in: [src/agent/databaseAgent/config.ts:274](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L274)

Get maximum result size for queries

#### Returns

`number`

- TODO: describe return value.

***

### getQueryLimits()

> **getQueryLimits**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:84](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L84)

Get query limits configuration

#### Returns

`object`

- TODO: describe return value.

##### maxJoinDepth

> **maxJoinDepth**: `number`

##### maxResultSize

> **maxResultSize**: `number`

##### queryTimeout

> **queryTimeout**: `number`

***

### getQueryTimeout()

> **getQueryTimeout**(): `number`

Defined in: [src/agent/databaseAgent/config.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L283)

Get query timeout in milliseconds

#### Returns

`number`

- TODO: describe return value.

***

### getSchemaValidation()

> **getSchemaValidation**(): `object`

Defined in: [src/agent/databaseAgent/config.ts:99](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L99)

Get schema validation settings

#### Returns

`object`

- TODO: describe return value.

##### allowUnknownFields

> **allowUnknownFields**: `boolean`

##### autoTransformAliases

> **autoTransformAliases**: `boolean`

##### enableStrictValidation

> **enableStrictValidation**: `boolean`

***

### getTelemetryConfig()

> **getTelemetryConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/databaseAgent/config.ts:209](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L209)

Get telemetry configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:536](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L536)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

***

### isAutoAliasTransformEnabled()

> **isAutoAliasTransformEnabled**(): `boolean`

Defined in: [src/agent/databaseAgent/config.ts:256](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L256)

Check if auto alias transformation is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isCachingEnabled()

> **isCachingEnabled**(): `boolean`

Defined in: [src/agent/databaseAgent/config.ts:238](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L238)

Check if caching is enabled by default

#### Returns

`boolean`

- TODO: describe return value.

***

### isStrictValidationEnabled()

> **isStrictValidationEnabled**(): `boolean`

Defined in: [src/agent/databaseAgent/config.ts:247](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/databaseAgent/config.ts#L247)

Check if strict validation is enabled

#### Returns

`boolean`

- TODO: describe return value.
