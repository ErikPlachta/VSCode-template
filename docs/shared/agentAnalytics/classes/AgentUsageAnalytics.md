[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AgentUsageAnalytics

# Class: AgentUsageAnalytics

Defined in: [src/shared/agentAnalytics.ts:130](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L130)

Agent usage analytics collector and processor.

## Constructors

### Constructor

> **new AgentUsageAnalytics**(`config`): `AgentUsageAnalytics`

Defined in: [src/shared/agentAnalytics.ts:141](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L141)

Creates a new analytics collector instance.

#### Parameters

##### config

[`AnalyticsConfig`](../interfaces/AnalyticsConfig.md)

config parameter.

#### Returns

`AgentUsageAnalytics`

- TODO: describe return value.

## Methods

### clearData()

> **clearData**(): `void`

Defined in: [src/shared/agentAnalytics.ts:382](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L382)

Clears all collected analytics data.

#### Returns

`void`

***

### exportData()

> **exportData**(`since?`): [`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)[]

Defined in: [src/shared/agentAnalytics.ts:374](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L374)

Exports analytics data for external analysis.

#### Parameters

##### since?

`Date`

since parameter.

#### Returns

[`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)[]

- TODO: describe return value.

***

### generateSummary()

> **generateSummary**(`since?`): [`UsageAnalyticsSummary`](../interfaces/UsageAnalyticsSummary.md)

Defined in: [src/shared/agentAnalytics.ts:300](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L300)

Generates comprehensive usage analytics summary.

#### Parameters

##### since?

`Date`

since parameter.

#### Returns

[`UsageAnalyticsSummary`](../interfaces/UsageAnalyticsSummary.md)

- TODO: describe return value.

***

### getAgentStats()

> **getAgentStats**(`agentName`, `since?`): [`AgentUsageStats`](../interfaces/AgentUsageStats.md) \| `null`

Defined in: [src/shared/agentAnalytics.ts:240](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L240)

Generates usage statistics for a specific agent.

#### Parameters

##### agentName

`string`

agentName parameter.

##### since?

`Date`

since parameter.

#### Returns

[`AgentUsageStats`](../interfaces/AgentUsageStats.md) \| `null`

- TODO: describe return value.

***

### recordEvent()

> **recordEvent**(`event`): `void`

Defined in: [src/shared/agentAnalytics.ts:150](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L150)

Records an agent usage event.

#### Parameters

##### event

`Partial`\<[`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)\>

event parameter.

#### Returns

`void`

***

### trackExecution()

> **trackExecution**\<`T`\>(`agentName`, `method`, `execution`, `options?`): `Promise`\<`T`\>

Defined in: [src/shared/agentAnalytics.ts:193](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/agentAnalytics.ts#L193)

Tracks the execution of an agent method with automatic timing.

#### Type Parameters

##### T

`T`

#### Parameters

##### agentName

`string`

Name of the agent being executed.

##### method

`string`

Logical operation name.

##### execution

() => `Promise`\<`T`\>

Async function to execute and measure.

##### options?

[`AnalyticsExecutionOptions`](../interfaces/AnalyticsExecutionOptions.md) = `{}`

Optional user and context metadata to record.

#### Returns

`Promise`\<`T`\>

Resolves with the result of the execution.

#### Throws

Propagates any error thrown by the execution.
