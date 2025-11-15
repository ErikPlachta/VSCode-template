[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AgentUsageStats

# Interface: AgentUsageStats

Defined in: [src/shared/agentAnalytics.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L48)

Aggregated usage statistics for an agent.

## Properties

### agentName

> **agentName**: `string`

Defined in: [src/shared/agentAnalytics.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L50)

Agent name.

***

### averageExecutionTime

> **averageExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L58)

Average execution time in milliseconds.

***

### failedInvocations

> **failedInvocations**: `number`

Defined in: [src/shared/agentAnalytics.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L56)

Number of failed invocations.

***

### lastInvocation

> **lastInvocation**: `Date`

Defined in: [src/shared/agentAnalytics.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L68)

Most recent invocation timestamp.

***

### maxExecutionTime

> **maxExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L62)

Maximum execution time in milliseconds.

***

### minExecutionTime

> **minExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L60)

Minimum execution time in milliseconds.

***

### mostUsedMethod

> **mostUsedMethod**: `string`

Defined in: [src/shared/agentAnalytics.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L70)

Most frequently called method.

***

### successfulInvocations

> **successfulInvocations**: `number`

Defined in: [src/shared/agentAnalytics.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L54)

Number of successful invocations.

***

### successRate

> **successRate**: `number`

Defined in: [src/shared/agentAnalytics.ts:66](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L66)

Success rate as a percentage.

***

### totalExecutionTime

> **totalExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L64)

Total execution time in milliseconds.

***

### totalInvocations

> **totalInvocations**: `number`

Defined in: [src/shared/agentAnalytics.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/agentAnalytics.ts#L52)

Total number of invocations.
