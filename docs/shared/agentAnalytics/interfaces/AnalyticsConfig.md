[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AnalyticsConfig

# Interface: AnalyticsConfig

Defined in: [src/shared/agentAnalytics.ts:102](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L102)

Configuration for analytics collection.

## Properties

### batchSize

> **batchSize**: `number`

Defined in: [src/shared/agentAnalytics.ts:112](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L112)

Batch size for event processing.

***

### enabled

> **enabled**: `boolean`

Defined in: [src/shared/agentAnalytics.ts:104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L104)

Enable analytics collection.

***

### maxEvents

> **maxEvents**: `number`

Defined in: [src/shared/agentAnalytics.ts:108](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L108)

Maximum number of events to store.

***

### persistentStorage

> **persistentStorage**: `boolean`

Defined in: [src/shared/agentAnalytics.ts:114](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L114)

Enable persistent storage.

***

### retentionPeriod

> **retentionPeriod**: `number`

Defined in: [src/shared/agentAnalytics.ts:110](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L110)

Retention period in milliseconds.

***

### sampleRate

> **sampleRate**: `number`

Defined in: [src/shared/agentAnalytics.ts:106](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L106)

Sample rate for event collection (0-1).

***

### storageFile?

> `optional` **storageFile**: `string`

Defined in: [src/shared/agentAnalytics.ts:116](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/agentAnalytics.ts#L116)

Storage file path for persistent storage.
