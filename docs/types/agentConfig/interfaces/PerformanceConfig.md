[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / PerformanceConfig

# Interface: PerformanceConfig

Defined in: [src/types/agentConfig.ts:282](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L282)

Static performance profile hints for docs/diagnostics.

## Example

```ts
const perf: PerformanceConfig = {
expectedResponseTime: 5000,
memoryUsage: "medium",
complexity: "high",
};
```

## Properties

### complexity

> **complexity**: `"high"` \| `"medium"` \| `"low"`

Defined in: [src/types/agentConfig.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L285)

***

### expectedResponseTime

> **expectedResponseTime**: `number`

Defined in: [src/types/agentConfig.ts:283](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L283)

***

### memoryUsage

> **memoryUsage**: `"high"` \| `"medium"` \| `"low"`

Defined in: [src/types/agentConfig.ts:284](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L284)
