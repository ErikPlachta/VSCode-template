[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / RelevantDataManagerConfig

# Interface: RelevantDataManagerConfig

Defined in: [src/types/agentConfig.ts:327](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L327)

Relevant data manager-specific configuration

## Properties

### caching

> **caching**: `object`

Defined in: [src/types/agentConfig.ts:338](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L338)

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

Defined in: [src/types/agentConfig.ts:374](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L374)

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

Defined in: [src/types/agentConfig.ts:328](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L328)

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

Defined in: [src/types/agentConfig.ts:383](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L383)

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

Defined in: [src/types/agentConfig.ts:366](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L366)

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

Defined in: [src/types/agentConfig.ts:357](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L357)

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

Defined in: [src/types/agentConfig.ts:347](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L347)

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
