[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ApplicationFacingConfig

# Interface: ApplicationFacingConfig

Defined in: [src/types/agentConfig.ts:345](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L345)

Technical/application-facing metadata for operators and docs.

## Example

```ts
const appFacing: ApplicationFacingConfig = {
technicalDescription: "This agent handles data analysis tasks.",
dependencies: ["database-agent", "clarification-agent"],
capabilities: ["data analysis", "relationship mapping"],
performance: {
expectedResponseTime: 7000,
memoryUsage: "high",
complexity: "high",
},
errorHandling: {
retryStrategy: "fixed",
maxRetries: 2,
},
monitoring: {
metricsToTrack: ["responseTime", "throughput"],
alertThresholds: {
responseTime: 3000,
throughput: 100,
},
};
```

## Properties

### capabilities?

> `optional` **capabilities**: `string`[]

Defined in: [src/types/agentConfig.ts:348](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L348)

***

### dependencies?

> `optional` **dependencies**: `string`[]

Defined in: [src/types/agentConfig.ts:347](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L347)

***

### errorHandling?

> `optional` **errorHandling**: [`ErrorHandlingConfig`](ErrorHandlingConfig.md)

Defined in: [src/types/agentConfig.ts:350](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L350)

***

### monitoring?

> `optional` **monitoring**: [`MonitoringConfig`](MonitoringConfig.md)

Defined in: [src/types/agentConfig.ts:351](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L351)

***

### performance?

> `optional` **performance**: [`PerformanceConfig`](PerformanceConfig.md)

Defined in: [src/types/agentConfig.ts:349](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L349)

***

### technicalDescription?

> `optional` **technicalDescription**: `string`

Defined in: [src/types/agentConfig.ts:346](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L346)
