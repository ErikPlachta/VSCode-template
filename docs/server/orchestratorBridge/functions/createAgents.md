[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/orchestratorBridge](../README.md) / createAgents

# Function: createAgents()

> **createAgents**(): `Promise`\<\{ `database`: `any`; `orchestrator`: `any`; `userContext`: `any`; \}\>

Defined in: [src/server/orchestratorBridge.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/server/orchestratorBridge.ts#L60)

Create fully initialized agent instances used for bridge operations.
Exported for server dynamic tool registry assembly to avoid duplicating
agent instantiation logic in transport layer.

## Returns

`Promise`\<\{ `database`: `any`; `orchestrator`: `any`; `userContext`: `any`; \}\>

Initialized orchestrator, userContext, and database agents.
