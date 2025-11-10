[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / RelevantDataManagerConfig

# Interface: RelevantDataManagerConfig

Defined in: [src/types/agentConfig.ts:405](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L405)

Relevant data manager-specific configuration

## Properties

### caching

> **caching**: `object`

Defined in: [src/types/agentConfig.ts:416](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L416)

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

Defined in: [src/types/agentConfig.ts:452](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L452)

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

Defined in: [src/types/agentConfig.ts:406](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L406)

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

Defined in: [src/types/agentConfig.ts:461](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L461)

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

Defined in: [src/types/agentConfig.ts:444](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L444)

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

Defined in: [src/types/agentConfig.ts:435](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L435)

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

Defined in: [src/types/agentConfig.ts:425](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L425)

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
