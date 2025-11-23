[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / RelevantDataManagerConfig

# Interface: RelevantDataManagerConfig

Defined in: [src/types/agentConfig.ts:631](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L631)

RelevantDataManager configuration for metadata validation, relationship integrity,
caching, schema management, and operational performance.

## Example

```ts
const rdmCfg: RelevantDataManagerConfig = {
  metadata: { enableSchemaValidation: true, enforceDataQuality: true, trackDataLineage: false },
  caching: { enableSnapshotCaching: true, snapshotTTL: 60000, maxCachedSnapshots: 10 },
  validation: { strictModeEnabled: true, allowPartialValidation: false, validationTimeout: 15000 },
  performance: { enableParallelProcessing: true, maxConcurrentOperations: 4 }
};
```

## Properties

### caching

> **caching**: `object`

Defined in: [src/types/agentConfig.ts:642](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L642)

#### cacheCleanupThreshold?

> `optional` **cacheCleanupThreshold**: `number`

#### cacheValidationResults?

> `optional` **cacheValidationResults**: `boolean`

#### enableRecordHashCaching?

> `optional` **enableRecordHashCaching**: `boolean`

#### enableSnapshotCaching

> **enableSnapshotCaching**: `boolean`

#### maxCachedSnapshots

> **maxCachedSnapshots**: `number`

#### snapshotTTL

> **snapshotTTL**: `number`

#### validationCacheTTL?

> `optional` **validationCacheTTL**: `number`

***

### dataManagement?

> `optional` **dataManagement**: `object`

Defined in: [src/types/agentConfig.ts:678](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L678)

#### backupRetentionDays?

> `optional` **backupRetentionDays**: `number`

#### enableAutoRefresh?

> `optional` **enableAutoRefresh**: `boolean`

#### enableDataBackups?

> `optional` **enableDataBackups**: `boolean`

#### maxImportFileSize?

> `optional` **maxImportFileSize**: `number`

#### refreshInterval?

> `optional` **refreshInterval**: `number`

#### supportedImportFormats?

> `optional` **supportedImportFormats**: `string`[]

#### validateOnLoad?

> `optional` **validateOnLoad**: `boolean`

***

### metadata

> **metadata**: `object`

Defined in: [src/types/agentConfig.ts:632](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L632)

#### autoGenerateMetadata?

> `optional` **autoGenerateMetadata**: `boolean`

#### enableSchemaValidation

> **enableSchemaValidation**: `boolean`

#### enforceDataQuality

> **enforceDataQuality**: `boolean`

#### requiredCategoryFiles?

> `optional` **requiredCategoryFiles**: `Record`\<`string`, `string`\>

#### requiredDirectories?

> `optional` **requiredDirectories**: `Record`\<`string`, `string`\>

#### supportedCategories?

> `optional` **supportedCategories**: `string`[]

#### trackDataLineage

> **trackDataLineage**: `boolean`

#### validateFolderStructure?

> `optional` **validateFolderStructure**: `boolean`

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:687](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L687)

#### defaultOperationTimeout?

> `optional` **defaultOperationTimeout**: `number`

#### enableOperationCaching?

> `optional` **enableOperationCaching**: `boolean`

#### enableParallelProcessing?

> `optional` **enableParallelProcessing**: `boolean`

#### maxConcurrentOperations?

> `optional` **maxConcurrentOperations**: `number`

#### memoryOptimizationLevel?

> `optional` **memoryOptimizationLevel**: `string`

***

### relationships?

> `optional` **relationships**: `object`

Defined in: [src/types/agentConfig.ts:670](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L670)

#### buildRelationshipIndexes?

> `optional` **buildRelationshipIndexes**: `boolean`

#### detectCircularReferences?

> `optional` **detectCircularReferences**: `boolean`

#### enableAutoDiscovery?

> `optional` **enableAutoDiscovery**: `boolean`

#### maxTraversalDepth?

> `optional` **maxTraversalDepth**: `number`

#### relationshipTypes?

> `optional` **relationshipTypes**: `string`[]

#### validateReferences?

> `optional` **validateReferences**: `boolean`

***

### schemaManagement?

> `optional` **schemaManagement**: `object`

Defined in: [src/types/agentConfig.ts:661](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L661)

#### autoDetectSchemaChanges?

> `optional` **autoDetectSchemaChanges**: `boolean`

#### enableSchemaVersioning?

> `optional` **enableSchemaVersioning**: `boolean`

#### generateTypescriptTypes?

> `optional` **generateTypescriptTypes**: `boolean`

#### maxSchemaFileSize?

> `optional` **maxSchemaFileSize**: `number`

#### supportedSchemaFormats?

> `optional` **supportedSchemaFormats**: `string`[]

#### validateSchemaCompatibility?

> `optional` **validateSchemaCompatibility**: `boolean`

#### validationLibrary?

> `optional` **validationLibrary**: `string`

***

### validation

> **validation**: `object`

Defined in: [src/types/agentConfig.ts:651](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L651)

#### allowPartialValidation

> **allowPartialValidation**: `boolean`

#### checkDuplicateSchemas?

> `optional` **checkDuplicateSchemas**: `boolean`

#### checkOrphanedRecords?

> `optional` **checkOrphanedRecords**: `boolean`

#### enableAjvValidation?

> `optional` **enableAjvValidation**: `boolean`

#### strictModeEnabled

> **strictModeEnabled**: `boolean`

#### validateRelationshipIntegrity?

> `optional` **validateRelationshipIntegrity**: `boolean`

#### validationTimeout

> **validationTimeout**: `number`

#### validationWarningThreshold?

> `optional` **validationWarningThreshold**: `number`
