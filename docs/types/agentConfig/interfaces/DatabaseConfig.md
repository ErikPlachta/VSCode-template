[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DatabaseConfig

# Interface: DatabaseConfig

Defined in: [src/types/agentConfig.ts:154](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L154)

Database agent-specific configuration

## Properties

### fieldAliases

> **fieldAliases**: `Record`\<`string`, `Record`\<`string`, `string`\>\>

Defined in: [src/types/agentConfig.ts:155](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L155)

***

### operations

> **operations**: `object`

Defined in: [src/types/agentConfig.ts:181](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L181)

#### aggregation

> **aggregation**: `object`

##### aggregation.enableGroupBy

> **enableGroupBy**: `boolean`

##### aggregation.functions

> **functions**: `string`[]

##### aggregation.maxGroups

> **maxGroups**: `number`

#### filtering

> **filtering**: `object`

##### filtering.caseInsensitiveStrings

> **caseInsensitiveStrings**: `boolean`

##### filtering.enableFuzzyMatching

> **enableFuzzyMatching**: `boolean`

##### filtering.operators

> **operators**: `string`[]

#### joins

> **joins**: `object`

##### joins.autoDiscoverRelationships

> **autoDiscoverRelationships**: `boolean`

##### joins.maxJoinRecords

> **maxJoinRecords**: `number`

##### joins.supportedJoinTypes

> **supportedJoinTypes**: `string`[]

***

### performance

> **performance**: `object`

Defined in: [src/types/agentConfig.ts:156](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L156)

#### caching

> **caching**: `object`

##### caching.cacheTTL

> **cacheTTL**: `number`

##### caching.defaultKeyPrefix

> **defaultKeyPrefix**: `string`

##### caching.enabledByDefault

> **enabledByDefault**: `boolean`

##### caching.maxCacheEntries

> **maxCacheEntries**: `number`

#### limits

> **limits**: `object`

##### limits.maxJoinDepth

> **maxJoinDepth**: `number`

##### limits.maxResultSize

> **maxResultSize**: `number`

##### limits.queryTimeout

> **queryTimeout**: `number`

***

### validation

> **validation**: `object`

Defined in: [src/types/agentConfig.ts:169](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L169)

#### integrityChecks

> **integrityChecks**: `object`

##### integrityChecks.checkMissingReferences

> **checkMissingReferences**: `boolean`

##### integrityChecks.validateRelationships

> **validateRelationships**: `boolean`

##### integrityChecks.warnOnSchemaIssues

> **warnOnSchemaIssues**: `boolean`

#### schemaValidation

> **schemaValidation**: `object`

##### schemaValidation.allowUnknownFields

> **allowUnknownFields**: `boolean`

##### schemaValidation.autoTransformAliases

> **autoTransformAliases**: `boolean`

##### schemaValidation.enableStrictValidation

> **enableStrictValidation**: `boolean`
