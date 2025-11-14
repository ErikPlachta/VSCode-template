[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / MonitoringConfig

# Interface: MonitoringConfig

Defined in: [src/types/agentConfig.ts:315](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L315)

Monitoring/telemetry configuration for an agent.

## Example

```ts
const monitoring: MonitoringConfig = {
metricsToTrack: ["responseTime", "errorRate"],
alertThresholds: {
responseTime: 2000,
errorRate: 5,
},
};
```

## Properties

### alertThresholds

> **alertThresholds**: `Record`\<`string`, `number`\>

Defined in: [src/types/agentConfig.ts:317](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L317)

***

### metricsToTrack

> **metricsToTrack**: `string`[]

Defined in: [src/types/agentConfig.ts:316](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L316)
