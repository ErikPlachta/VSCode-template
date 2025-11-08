[**myBusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[myBusiness-mcp-extension](../../../../modules.md) / [agent/relevantDataManagerAgent/config](../README.md) / RelevantDataManagerAgentConfig

# Class: RelevantDataManagerAgentConfig

Defined in: [src/agent/relevantDataManagerAgent/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L19)

Relevant Data Manager agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new RelevantDataManagerAgentConfig**(`config?`): `RelevantDataManagerAgentConfig`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L29)

constructor function.

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

config parameter.

#### Returns

`RelevantDataManagerAgentConfig`

- TODO: describe return value.

#### Throws

- May throw an error.

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:545](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L545)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

***

### getCachingConfig()

> **getCachingConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L67)

Get caching configuration

#### Returns

`object`

- TODO: describe return value.

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

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:499](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L499)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:554](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L554)

Get configuration schema ID

#### Returns

`string`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

***

### getDataManagementConfig()

> **getDataManagementConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:140](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L140)

Get data management configuration

#### Returns

`object`

- TODO: describe return value.

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

***

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/relevantDataManagerAgent/config.ts:418](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L418)

Get error handling configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:527](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L527)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

***

### getMaxCachedSnapshots()

> **getMaxCachedSnapshots**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:278](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L278)

Get maximum cached snapshots

#### Returns

`number`

- TODO: describe return value.

***

### getMaxSchemaFileSize()

> **getMaxSchemaFileSize**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:296](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L296)

Get maximum schema file size in bytes

#### Returns

`number`

- TODO: describe return value.

***

### getMaxTraversalDepth()

> **getMaxTraversalDepth**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:336](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L336)

Get maximum relationship traversal depth

#### Returns

`number`

- TODO: describe return value.

***

### getMetadataConfig()

> **getMetadataConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L52)

Get metadata management configuration

#### Returns

`object`

- TODO: describe return value.

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

***

### getPerformanceConfig()

> **getPerformanceConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:159](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L159)

Get performance configuration

#### Returns

`object`

- TODO: describe return value.

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

***

### getRelationshipsConfig()

> **getRelationshipsConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:116](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L116)

Get relationships configuration

#### Returns

`object`

- TODO: describe return value.

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

***

### getRelationshipTypes()

> **getRelationshipTypes**(): `string`[]

Defined in: [src/agent/relevantDataManagerAgent/config.ts:319](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L319)

Get relationship types to track

#### Returns

`string`[]

- TODO: describe return value.

***

### getRequiredCategoryFiles()

> **getRequiredCategoryFiles**(): `Record`\<`string`, `string`\>

Defined in: [src/agent/relevantDataManagerAgent/config.ts:238](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L238)

Get required category files configuration

#### Returns

`Record`\<`string`, `string`\>

- TODO: describe return value.

***

### getRequiredDirectories()

> **getRequiredDirectories**(): `Record`\<`string`, `string`\>

Defined in: [src/agent/relevantDataManagerAgent/config.ts:253](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L253)

Get required directories configuration

#### Returns

`Record`\<`string`, `string`\>

- TODO: describe return value.

***

### getSchemaManagementConfig()

> **getSchemaManagementConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:97](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L97)

Get schema management configuration

#### Returns

`object`

- TODO: describe return value.

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

***

### getSnapshotTTL()

> **getSnapshotTTL**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:269](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L269)

Get snapshot cache TTL in milliseconds

#### Returns

`number`

- TODO: describe return value.

***

### getSupportedCategories()

> **getSupportedCategories**(): `string`[]

Defined in: [src/agent/relevantDataManagerAgent/config.ts:221](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L221)

Get supported business categories

#### Returns

`string`[]

- TODO: describe return value.

***

### getSupportedSchemaFormats()

> **getSupportedSchemaFormats**(): `string`[]

Defined in: [src/agent/relevantDataManagerAgent/config.ts:305](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L305)

Get supported schema formats

#### Returns

`string`[]

- TODO: describe return value.

***

### getTelemetryConfig()

> **getTelemetryConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/relevantDataManagerAgent/config.ts:399](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L399)

Get telemetry configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:536](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L536)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

***

### getValidationConfig()

> **getValidationConfig**(): `object`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L82)

Get validation configuration

#### Returns

`object`

- TODO: describe return value.

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

***

### getValidationLibrary()

> **getValidationLibrary**(): `string`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:345](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L345)

Get validation library to use

#### Returns

`string`

- TODO: describe return value.

***

### getValidationTimeout()

> **getValidationTimeout**(): `number`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:287](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L287)

Get validation timeout in milliseconds

#### Returns

`number`

- TODO: describe return value.

***

### isAjvValidationEnabled()

> **isAjvValidationEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:372](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L372)

Check if AJV validation is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isDataLineageTrackingEnabled()

> **isDataLineageTrackingEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:194](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L194)

Check if data lineage tracking is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isDataQualityEnforced()

> **isDataQualityEnforced**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:185](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L185)

Check if data quality enforcement is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isFolderStructureValidationEnabled()

> **isFolderStructureValidationEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:363](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L363)

Check if folder structure validation is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isPartialValidationAllowed()

> **isPartialValidationAllowed**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:354](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L354)

Check if partial validation is allowed

#### Returns

`boolean`

- TODO: describe return value.

***

### isSchemaValidationEnabled()

> **isSchemaValidationEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:176](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L176)

Check if schema validation is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isSnapshotCachingEnabled()

> **isSnapshotCachingEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L203)

Check if snapshot caching is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isStrictModeEnabled()

> **isStrictModeEnabled**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:212](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L212)

Check if strict validation mode is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### shouldDetectCircularReferences()

> **shouldDetectCircularReferences**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:390](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L390)

Check if circular references should be detected

#### Returns

`boolean`

- TODO: describe return value.

***

### shouldValidateRelationshipReferences()

> **shouldValidateRelationshipReferences**(): `boolean`

Defined in: [src/agent/relevantDataManagerAgent/config.ts:381](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/config.ts#L381)

Check if relationship references should be validated

#### Returns

`boolean`

- TODO: describe return value.
