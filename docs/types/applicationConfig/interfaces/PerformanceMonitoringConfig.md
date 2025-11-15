[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / PerformanceMonitoringConfig

# Interface: PerformanceMonitoringConfig

Defined in: [src/types/applicationConfig.ts:322](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L322)

Performance monitoring configuration.

## Example

```ts
const perfMon: PerformanceMonitoringConfig = {
  enabled: true,
  sampleRate: 0.25,
};
```

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [src/types/applicationConfig.ts:324](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L324)

Enable performance monitoring.

***

### sampleRate

> **sampleRate**: `number`

Defined in: [src/types/applicationConfig.ts:326](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/applicationConfig.ts#L326)

Sample rate for monitoring (0-1).
