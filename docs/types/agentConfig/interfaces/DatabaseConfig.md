[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DatabaseConfig

# Interface: DatabaseConfig

Defined in: [src/types/agentConfig.ts:246](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L246)

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

Defined in: [src/types/agentConfig.ts:247](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L247)

***

### operations

> **operations**: [`DatabaseOperationsConfig`](DatabaseOperationsConfig.md)

Defined in: [src/types/agentConfig.ts:265](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L265)

***

### performance

> **performance**: `object`

Defined in: [src/types/agentConfig.ts:248](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L248)

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

#### limits?

> `optional` **limits**: `object`

##### limits.maxJoinDepth?

> `optional` **maxJoinDepth**: `number`

Maximum depth of joins permitted

##### limits.maxResultSize?

> `optional` **maxResultSize**: `number`

Maximum number of records to return

##### limits.queryTimeout?

> `optional` **queryTimeout**: `number`

Maximum time (ms) allowed for query execution

***

### validation

> **validation**: [`DatabaseValidationConfig`](DatabaseValidationConfig.md)

Defined in: [src/types/agentConfig.ts:264](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L264)
