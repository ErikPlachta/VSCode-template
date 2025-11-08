[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AgentUsageAnalytics

# Class: AgentUsageAnalytics

Defined in: [src/shared/agentAnalytics.ts:122](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L122)

Agent usage analytics collector and processor.

## Constructors

### Constructor

> **new AgentUsageAnalytics**(`config`): `AgentUsageAnalytics`

Defined in: [src/shared/agentAnalytics.ts:133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L133)

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

Defined in: [src/shared/agentAnalytics.ts:377](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L377)

Clears all collected analytics data.

#### Returns

`void`

***

### exportData()

> **exportData**(`since?`): [`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)[]

Defined in: [src/shared/agentAnalytics.ts:369](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L369)

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

Defined in: [src/shared/agentAnalytics.ts:298](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L298)

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

Defined in: [src/shared/agentAnalytics.ts:241](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L241)

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

Defined in: [src/shared/agentAnalytics.ts:142](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L142)

Records an agent usage event.

#### Parameters

##### event

`Partial`\<[`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)\>

event parameter.

#### Returns

`void`

***

### trackExecution()

> **trackExecution**\<`T`\>(`agentName`, `method`, `execution`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/agentAnalytics.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentAnalytics.ts#L191)

Tracks the execution of an agent method with automatic timing.

#### Type Parameters

##### T

`T`

#### Parameters

##### agentName

`string`

agentName parameter.

##### method

`string`

method parameter.

##### execution

() => `Promise`\<`T`\>

execution parameter.

##### options

options parameter.

###### metadata?

`Record`\<`string`, `any`\>

###### userId?

`string`

#### Returns

`Promise`\<`T`\>

- TODO: describe return value.

#### Throws

- May throw an error.
