[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / GetSnapshotParams

# Interface: GetSnapshotParams

Defined in: [src/types/workflow.types.ts:383](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L383)

Parameters for UserContextAgent.getOrCreateSnapshot()

If topicOrId is undefined, agent will use first available category (data-driven)

## Properties

### topicOrId?

> `optional` **topicOrId**: `string`

Defined in: [src/types/workflow.types.ts:385](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/workflow.types.ts#L385)

Optional category identifier. If undefined, uses first available category
