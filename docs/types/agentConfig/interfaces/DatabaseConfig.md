[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DatabaseConfig

# Interface: DatabaseConfig

Defined in: [src/types/agentConfig.ts:379](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L379)

DatabaseAgent configuration for query behavior, validation, and performance.

All business values (aliases, operators) must come from configuration.

## Example

```ts
const dbCfg: DatabaseConfig = {
  fieldAliases: { people: { dept: "departmentId" } },
  performance: {
    caching: { enabledByDefault: true, defaultKeyPrefix: "db:", maxCacheEntries: 500, cacheTTL: 60000 },
    limits: { queryTimeout: 5000, maxResultSize: 1000, maxJoinDepth: 2 }
  },
  validation: {
    schemaValidation: { enableStrictValidation: true, allowUnknownFields: false, autoTransformAliases: true },
    integrityChecks: { validateRelationships: true, checkMissingReferences: true, warnOnSchemaIssues: true }
  },
  operations: {
    filtering: { operators: ["=", "!=", "in"], caseInsensitiveStrings: true, enableFuzzyMatching: false },
    joins: { supportedJoinTypes: ["inner", "left"], autoDiscoverRelationships: true, maxJoinRecords: 5000 },
    aggregation: { functions: ["count", "avg"], enableGroupBy: true, maxGroups: 100 }
  }
};
```

## Properties

### fieldAliases

> **fieldAliases**: `Record`\<`string`, `Record`\<`string`, `string`\>\>

Defined in: [src/types/agentConfig.ts:380](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L380)

***

### operations

> **operations**: `object`

Defined in: [src/types/agentConfig.ts:406](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L406)

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

Defined in: [src/types/agentConfig.ts:381](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L381)

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

Defined in: [src/types/agentConfig.ts:394](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L394)

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
