[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / AgentGlobalConfig

# Interface: AgentGlobalConfig

Defined in: [src/types/applicationConfig.ts:210](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L210)

Global agent configuration settings.

## Example

```ts
const global: AgentGlobalConfig = {
  maxExecutionTime: 15000,
  enableTelemetry: true,
  cacheEnabled: true,
  cacheTtl: 60000,
};
```

## Properties

### cacheEnabled

> **cacheEnabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:216](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L216)

Enable caching globally for agents.

***

### cacheTtl

> **cacheTtl**: `number`

Defined in: [src/types/applicationConfig.ts:218](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L218)

Cache time-to-live in milliseconds.

***

### enableTelemetry

> **enableTelemetry**: `boolean`

Defined in: [src/types/applicationConfig.ts:214](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L214)

Enable telemetry collection for agents.

***

### maxExecutionTime

> **maxExecutionTime**: `number`

Defined in: [src/types/applicationConfig.ts:212](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L212)

Maximum execution time for any agent in milliseconds.
