---
title: Relevant Data Manager Agent Config
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

[mybusiness-mcp-extension](../../../../modules.md) / [agent/relevantDataManagerAgent/config](../README.md) / RelevantDataManagerAgentConfig

# Class: RelevantDataManagerAgentConfig

Defined in: [src/agent/relevantDataManagerAgent/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L19)

Relevant Data Manager agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new RelevantDataManagerAgentConfig**(`config?`): `RelevantDataManagerAgentConfig`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L22)

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

#### Returns

`RelevantDataManagerAgentConfig`

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

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

Defined in: [src/agent/relevantDataManagerAgent/config.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L56)

Get caching configuration

#### Returns

`object`

##### cacheCleanupThreshold?

> `optional` **cacheCleanupThreshold**: `number`

##### cacheValidationResults?

> `optional` **cacheValidationResults**: `boolean`

##### enableRecordHashCaching?

> `optional` **enableRecordHashCaching**: `boolean`

##### enableSnapshotCaching

> **enableSnapshotCaching**: `boolean`

##### maxCachedSnapshots

> **maxCachedSnapshots**: `number`

##### snapshotTTL

> **snapshotTTL**: `number`

##### validationCacheTTL?

> `optional` **validationCacheTTL**: `number`

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

### getDataManagementConfig()

> **getDataManagementConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L121)

Get data management configuration

#### Returns

`object`

##### backupRetentionDays?

> `optional` **backupRetentionDays**: `number`

##### enableAutoRefresh?

> `optional` **enableAutoRefresh**: `boolean`

##### enableDataBackups?

> `optional` **enableDataBackups**: `boolean`

##### maxImportFileSize?

> `optional` **maxImportFileSize**: `number`

##### refreshInterval?

> `optional` **refreshInterval**: `number`

##### supportedImportFormats?

> `optional` **supportedImportFormats**: `string`[]

##### validateOnLoad?

> `optional` **validateOnLoad**: `boolean`

---

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:351](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L351)

Get error handling configuration

#### Returns

`object`

##### allowPartialDataLoad

> **allowPartialDataLoad**: `boolean`

##### exponentialBackoff

> **exponentialBackoff**: `boolean`

##### fallbackToCachedData

> **fallbackToCachedData**: `boolean`

##### gracefulSchemaFailure

> **gracefulSchemaFailure**: `boolean`

##### maxRetries

> **maxRetries**: `number`

##### retryDelay

> **retryDelay**: `number`

##### skipCorruptedRecords

> **skipCorruptedRecords**: `boolean`

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

### getMaxCachedSnapshots()

> **getMaxCachedSnapshots**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:237](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L237)

Get maximum cached snapshots

#### Returns

`number`

---

### getMaxSchemaFileSize()

> **getMaxSchemaFileSize**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:251](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L251)

Get maximum schema file size in bytes

#### Returns

`number`

---

### getMaxTraversalDepth()

> **getMaxTraversalDepth**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L285)

Get maximum relationship traversal depth

#### Returns

`number`

---

### getMetadataConfig()

> **getMetadataConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L43)

Get metadata management configuration

#### Returns

`object`

##### autoGenerateMetadata?

> `optional` **autoGenerateMetadata**: `boolean`

##### enableSchemaValidation

> **enableSchemaValidation**: `boolean`

##### enforceDataQuality

> **enforceDataQuality**: `boolean`

##### requiredCategoryFiles?

> `optional` **requiredCategoryFiles**: `Record`\<`string`, `string`\>

##### requiredDirectories?

> `optional` **requiredDirectories**: `Record`\<`string`, `string`\>

##### supportedCategories?

> `optional` **supportedCategories**: `string`[]

##### trackDataLineage

> **trackDataLineage**: `boolean`

##### validateFolderStructure?

> `optional` **validateFolderStructure**: `boolean`

---

### getPerformanceConfig()

> **getPerformanceConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:138](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L138)

Get performance configuration

#### Returns

`object`

##### defaultOperationTimeout?

> `optional` **defaultOperationTimeout**: `number`

##### enableOperationCaching?

> `optional` **enableOperationCaching**: `boolean`

##### enableParallelProcessing?

> `optional` **enableParallelProcessing**: `boolean`

##### maxConcurrentOperations?

> `optional` **maxConcurrentOperations**: `number`

##### memoryOptimizationLevel?

> `optional` **memoryOptimizationLevel**: `string`

---

### getRelationshipsConfig()

> **getRelationshipsConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:99](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L99)

Get relationships configuration

#### Returns

`object`

##### buildRelationshipIndexes?

> `optional` **buildRelationshipIndexes**: `boolean`

##### detectCircularReferences?

> `optional` **detectCircularReferences**: `boolean`

##### enableAutoDiscovery?

> `optional` **enableAutoDiscovery**: `boolean`

##### maxTraversalDepth?

> `optional` **maxTraversalDepth**: `number`

##### relationshipTypes?

> `optional` **relationshipTypes**: `string`[]

##### validateReferences?

> `optional` **validateReferences**: `boolean`

---

### getRelationshipTypes()

> **getRelationshipTypes**(): `string`[]

Defined in: [src/agent/relevantDataManagerAgent/config.ts:270](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L270)

Get relationship types to track

#### Returns

`string`[]

---

### getRequiredCategoryFiles()

> **getRequiredCategoryFiles**(): `Record`\<`string`, `string`\>

Defined in: [src/agent/relevantDataManagerAgent/config.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L203)

Get required category files configuration

#### Returns

`Record`\<`string`, `string`\>

---

### getRequiredDirectories()

> **getRequiredDirectories**(): `Record`\<`string`, `string`\>

Defined in: [src/agent/relevantDataManagerAgent/config.ts:216](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L216)

Get required directories configuration

#### Returns

`Record`\<`string`, `string`\>

---

### getSchemaManagementConfig()

> **getSchemaManagementConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L82)

Get schema management configuration

#### Returns

`object`

##### autoDetectSchemaChanges?

> `optional` **autoDetectSchemaChanges**: `boolean`

##### enableSchemaVersioning?

> `optional` **enableSchemaVersioning**: `boolean`

##### generateTypescriptTypes?

> `optional` **generateTypescriptTypes**: `boolean`

##### maxSchemaFileSize?

> `optional` **maxSchemaFileSize**: `number`

##### supportedSchemaFormats?

> `optional` **supportedSchemaFormats**: `string`[]

##### validateSchemaCompatibility?

> `optional` **validateSchemaCompatibility**: `boolean`

##### validationLibrary?

> `optional` **validationLibrary**: `string`

---

### getSnapshotTTL()

> **getSnapshotTTL**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:230](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L230)

Get snapshot cache TTL in milliseconds

#### Returns

`number`

---

### getSupportedCategories()

> **getSupportedCategories**(): `string`[]

Defined in: [src/agent/relevantDataManagerAgent/config.ts:188](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L188)

Get supported business categories

#### Returns

`string`[]

---

### getSupportedSchemaFormats()

> **getSupportedSchemaFormats**(): `string`[]

Defined in: [src/agent/relevantDataManagerAgent/config.ts:258](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L258)

Get supported schema formats

#### Returns

`string`[]

---

### getTelemetryConfig()

> **getTelemetryConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:334](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L334)

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

##### trackDataQuality

> **trackDataQuality**: `boolean`

##### trackRelationshipIntegrity

> **trackRelationshipIntegrity**: `boolean`

##### trackSchemaValidation

> **trackSchemaValidation**: `boolean`

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

### getValidationConfig()

> **getValidationConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L69)

Get validation configuration

#### Returns

`object`

##### allowPartialValidation

> **allowPartialValidation**: `boolean`

##### checkDuplicateSchemas?

> `optional` **checkDuplicateSchemas**: `boolean`

##### checkOrphanedRecords?

> `optional` **checkOrphanedRecords**: `boolean`

##### enableAjvValidation?

> `optional` **enableAjvValidation**: `boolean`

##### strictModeEnabled

> **strictModeEnabled**: `boolean`

##### validateRelationshipIntegrity?

> `optional` **validateRelationshipIntegrity**: `boolean`

##### validationTimeout

> **validationTimeout**: `number`

##### validationWarningThreshold?

> `optional` **validationWarningThreshold**: `number`

---

### getValidationLibrary()

> **getValidationLibrary**(): `string`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:292](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L292)

Get validation library to use

#### Returns

`string`

---

### getValidationTimeout()

> **getValidationTimeout**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:244](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L244)

Get validation timeout in milliseconds

#### Returns

`number`

---

### isAjvValidationEnabled()

> **isAjvValidationEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:313](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L313)

Check if AJV validation is enabled

#### Returns

`boolean`

---

### isDataLineageTrackingEnabled()

> **isDataLineageTrackingEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:167](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L167)

Check if data lineage tracking is enabled

#### Returns

`boolean`

---

### isDataQualityEnforced()

> **isDataQualityEnforced**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:160](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L160)

Check if data quality enforcement is enabled

#### Returns

`boolean`

---

### isFolderStructureValidationEnabled()

> **isFolderStructureValidationEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:306](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L306)

Check if folder structure validation is enabled

#### Returns

`boolean`

---

### isPartialValidationAllowed()

> **isPartialValidationAllowed**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:299](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L299)

Check if partial validation is allowed

#### Returns

`boolean`

---

### isSchemaValidationEnabled()

> **isSchemaValidationEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:153](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L153)

Check if schema validation is enabled

#### Returns

`boolean`

---

### isSnapshotCachingEnabled()

> **isSnapshotCachingEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:174](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L174)

Check if snapshot caching is enabled

#### Returns

`boolean`

---

### isStrictModeEnabled()

> **isStrictModeEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:181](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L181)

Check if strict validation mode is enabled

#### Returns

`boolean`

---

### shouldDetectCircularReferences()

> **shouldDetectCircularReferences**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:327](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L327)

Check if circular references should be detected

#### Returns

`boolean`

---

### shouldValidateRelationshipReferences()

> **shouldValidateRelationshipReferences**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:320](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/config.ts#L320)

Check if relationship references should be validated

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
