---
title: Relevant Data Manager Config
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

[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

---

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / RelevantDataManagerConfig

# Interface: RelevantDataManagerConfig

Defined in: [src/types/agentConfig.ts:315](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L315)

Relevant data manager-specific configuration

## Properties

### caching

> **caching**: `object`

Defined in: [src/types/agentConfig.ts:326](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L326)

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

---

### dataManagement?

> `optional` **dataManagement**: `object`

Defined in: [src/types/agentConfig.ts:362](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L362)

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

---

### metadata

> **metadata**: `object`

Defined in: [src/types/agentConfig.ts:316](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L316)

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

---

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:371](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L371)

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

---

### relationships?

> `optional` **relationships**: `object`

Defined in: [src/types/agentConfig.ts:354](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L354)

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

---

### schemaManagement?

> `optional` **schemaManagement**: `object`

Defined in: [src/types/agentConfig.ts:345](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L345)

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

---

### validation

> **validation**: `object`

Defined in: [src/types/agentConfig.ts:335](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L335)

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
