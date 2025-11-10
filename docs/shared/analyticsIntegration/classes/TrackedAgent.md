[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / TrackedAgent

# Abstract Class: TrackedAgent

Defined in: [src/shared/analyticsIntegration.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/analyticsIntegration.ts#L61)

Base class with built-in analytics tracking for agent implementations.

## Constructors

### Constructor

> **new TrackedAgent**(`agentName`): `TrackedAgent`

Defined in: [src/shared/analyticsIntegration.ts:71](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/analyticsIntegration.ts#L71)

Creates a new tracked agent instance.

#### Parameters

##### agentName

`string`

agentName parameter.

#### Returns

`TrackedAgent`

- TODO: describe return value.

## Methods

### getStats()

> **getStats**(`since?`): [`AgentUsageStats`](../../agentAnalytics/interfaces/AgentUsageStats.md) \| `null`

Defined in: [src/shared/analyticsIntegration.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/analyticsIntegration.ts#L127)

Get usage statistics for this tracked agent.

#### Parameters

##### since?

`Date`

Optional starting point for stats window.

#### Returns

[`AgentUsageStats`](../../agentAnalytics/interfaces/AgentUsageStats.md) \| `null`

Aggregated usage statistics or null if none recorded.
