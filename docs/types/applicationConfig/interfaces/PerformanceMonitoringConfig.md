[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / PerformanceMonitoringConfig

# Interface: PerformanceMonitoringConfig

Defined in: [src/types/applicationConfig.ts:322](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/applicationConfig.ts#L322)

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

Defined in: [src/types/applicationConfig.ts:324](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/applicationConfig.ts#L324)

Enable performance monitoring.

***

### sampleRate

> **sampleRate**: `number`

Defined in: [src/types/applicationConfig.ts:326](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/applicationConfig.ts#L326)

Sample rate for monitoring (0-1).
