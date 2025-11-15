[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DataLoaderConfig

# Interface: DataLoaderConfig

Defined in: [src/types/agentConfig.ts:725](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L725)

DataLoader configuration for file I/O, validation, discovery, and performance.

## Properties

### discovery

> **discovery**: `object`

Defined in: [src/types/agentConfig.ts:769](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L769)

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

Defined in: [src/types/agentConfig.ts:753](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L753)

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

Defined in: [src/types/agentConfig.ts:734](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L734)

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

Defined in: [src/types/agentConfig.ts:745](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L745)

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

Defined in: [src/types/agentConfig.ts:761](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L761)

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

Defined in: [src/types/agentConfig.ts:726](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L726)

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
