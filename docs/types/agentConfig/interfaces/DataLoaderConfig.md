[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DataLoaderConfig

# Interface: DataLoaderConfig

Defined in: [src/types/agentConfig.ts:404](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L404)

DataLoader agent-specific configuration for file I/O and data validation

## Properties

### discovery

> **discovery**: `object`

Defined in: [src/types/agentConfig.ts:448](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L448)

#### continueOnError

> **continueOnError**: `boolean`

#### enableAutoDiscovery

> **enableAutoDiscovery**: `boolean`

#### logDiscoveryWarnings

> **logDiscoveryWarnings**: `boolean`

#### maxDepth

> **maxDepth**: `number`

#### optionalCategoryFiles

> **optionalCategoryFiles**: `string`[]

#### requiredCategoryFiles

> **requiredCategoryFiles**: `string`[]

#### skipHiddenFiles

> **skipHiddenFiles**: `boolean`

#### skipPatterns

> **skipPatterns**: `string`[]

***

### errorHandling

> **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:432](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L432)

#### includeStackTrace

> **includeStackTrace**: `boolean`

#### logSeverityThreshold

> **logSeverityThreshold**: `"info"` \| `"warning"` \| `"error"` \| `"critical"`

#### logToTelemetry

> **logToTelemetry**: `boolean`

#### provideFilePath

> **provideFilePath**: `boolean`

#### suggestRecovery

> **suggestRecovery**: `boolean`

#### wrapNativeErrors

> **wrapNativeErrors**: `boolean`

***

### fileOperations

> **fileOperations**: `object`

Defined in: [src/types/agentConfig.ts:413](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L413)

#### allowSyncOperations

> **allowSyncOperations**: `boolean`

#### cacheTTL

> **cacheTTL**: `number`

#### enableCaching

> **enableCaching**: `boolean`

#### enableRetry

> **enableRetry**: `boolean`

#### encoding

> **encoding**: `"utf-8"` \| `"ascii"` \| `"utf8"`

#### maxCacheEntries

> **maxCacheEntries**: `number`

#### maxFileSize

> **maxFileSize**: `number`

#### maxRetries

> **maxRetries**: `number`

#### retryDelay

> **retryDelay**: `number`

***

### pathResolution

> **pathResolution**: `object`

Defined in: [src/types/agentConfig.ts:424](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L424)

#### allowAbsolutePaths

> **allowAbsolutePaths**: `boolean`

#### enableExamplesFallback

> **enableExamplesFallback**: `boolean`

#### examplesDirectory

> **examplesDirectory**: `string`

#### followSymlinks

> **followSymlinks**: `boolean`

#### normalizePaths

> **normalizePaths**: `boolean`

#### resolveFromDataRoot

> **resolveFromDataRoot**: `boolean`

***

### performance

> **performance**: `object`

Defined in: [src/types/agentConfig.ts:440](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L440)

#### enableMemoryOptimization

> **enableMemoryOptimization**: `boolean`

#### enableParallelLoading

> **enableParallelLoading**: `boolean`

#### enableStreaming

> **enableStreaming**: `boolean`

#### maxConcurrentOperations

> **maxConcurrentOperations**: `number`

#### maxMemoryUsage

> **maxMemoryUsage**: `number`

#### streamingThreshold

> **streamingThreshold**: `number`

***

### validation

> **validation**: `object`

Defined in: [src/types/agentConfig.ts:405](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/agentConfig.ts#L405)

#### allowPartialRecords

> **allowPartialRecords**: `boolean`

#### enableStrictTypeChecking

> **enableStrictTypeChecking**: `boolean`

#### logValidationWarnings

> **logValidationWarnings**: `boolean`

#### maxValidationErrors

> **maxValidationErrors**: `number`

#### useTypeGuards

> **useTypeGuards**: `boolean`

#### validateOnLoad

> **validateOnLoad**: `boolean`
