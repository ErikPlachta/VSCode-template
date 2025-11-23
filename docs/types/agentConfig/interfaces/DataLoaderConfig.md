[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DataLoaderConfig

# Interface: DataLoaderConfig

Defined in: [src/types/agentConfig.ts:561](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L561)

DataLoader configuration for file I/O, validation, discovery, and performance.

## Properties

### discovery

> **discovery**: `object`

Defined in: [src/types/agentConfig.ts:605](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L605)

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

Defined in: [src/types/agentConfig.ts:589](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L589)

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

Defined in: [src/types/agentConfig.ts:570](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L570)

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

Defined in: [src/types/agentConfig.ts:581](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L581)

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

Defined in: [src/types/agentConfig.ts:597](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L597)

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

Defined in: [src/types/agentConfig.ts:562](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L562)

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
