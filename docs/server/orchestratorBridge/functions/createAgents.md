[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / createAgents

# Function: createAgents()

> **createAgents**(): `Promise`\<\{ `database`: `any`; `orchestrator`: `any`; `userContext`: `any`; \}\>

Defined in: [src/server/orchestratorBridge.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/server/orchestratorBridge.ts#L60)

Create fully initialized agent instances used for bridge operations.
Exported for server dynamic tool registry assembly to avoid duplicating
agent instantiation logic in transport layer.

## Returns

`Promise`\<\{ `database`: `any`; `orchestrator`: `any`; `userContext`: `any`; \}\>

Initialized orchestrator, userContext, and database agents.
