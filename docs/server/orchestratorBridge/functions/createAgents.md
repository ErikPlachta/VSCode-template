[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / createAgents

# Function: createAgents()

> **createAgents**(): `Promise`\<\{ `database`: [`DatabaseAgent`](../../../agent/databaseAgent/classes/DatabaseAgent.md); `orchestrator`: [`Orchestrator`](../../../agent/orchestrator/classes/Orchestrator.md); `userContext`: [`UserContextAgent`](../../../agent/userContextAgent/classes/UserContextAgent.md); \}\>

Defined in: [src/server/orchestratorBridge.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/server/orchestratorBridge.ts#L32)

Create fully initialized agent instances used for bridge operations.
Exported for server dynamic tool registry assembly to avoid duplicating
agent instantiation logic in transport layer.

## Returns

`Promise`\<\{ `database`: [`DatabaseAgent`](../../../agent/databaseAgent/classes/DatabaseAgent.md); `orchestrator`: [`Orchestrator`](../../../agent/orchestrator/classes/Orchestrator.md); `userContext`: [`UserContextAgent`](../../../agent/userContextAgent/classes/UserContextAgent.md); \}\>

Initialized orchestrator, userContext, and database agents.
