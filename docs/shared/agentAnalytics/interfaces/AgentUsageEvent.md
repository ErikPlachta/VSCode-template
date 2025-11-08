[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AgentUsageEvent

# Interface: AgentUsageEvent

Defined in: [src/shared/agentAnalytics.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L19)

Agent usage event data structure.

## Properties

### agentName

> **agentName**: `string`

Defined in: [src/shared/agentAnalytics.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L25)

Name of the agent that was invoked.

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [src/shared/agentAnalytics.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L37)

Error message if execution failed.

***

### executionTime

> **executionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L31)

Duration of execution in milliseconds.

***

### id

> **id**: `string`

Defined in: [src/shared/agentAnalytics.ts:21](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L21)

Unique identifier for the event.

***

### inputSize

> **inputSize**: `number`

Defined in: [src/shared/agentAnalytics.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L33)

Input parameters passed to the agent.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

Defined in: [src/shared/agentAnalytics.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L41)

Additional context metadata.

***

### method

> **method**: `string`

Defined in: [src/shared/agentAnalytics.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L27)

Method or operation that was called.

***

### outputSize

> **outputSize**: `number`

Defined in: [src/shared/agentAnalytics.ts:35](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L35)

Output data size in bytes.

***

### status

> **status**: [`AgentExecutionStatus`](../enumerations/AgentExecutionStatus.md)

Defined in: [src/shared/agentAnalytics.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L29)

Execution status of the agent call.

***

### timestamp

> **timestamp**: `Date`

Defined in: [src/shared/agentAnalytics.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L23)

Timestamp when the event occurred.

***

### userId?

> `optional` **userId**: `string`

Defined in: [src/shared/agentAnalytics.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/shared/agentAnalytics.ts#L39)

User or session identifier.
