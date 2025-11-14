[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / GetSnapshotParams

# Interface: GetSnapshotParams

Defined in: [src/types/workflow.types.ts:383](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L383)

Parameters for UserContextAgent.getOrCreateSnapshot()

If topicOrId is undefined, agent will use first available category (data-driven)

## Properties

### topicOrId?

> `optional` **topicOrId**: `string`

Defined in: [src/types/workflow.types.ts:385](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/workflow.types.ts#L385)

Optional category identifier. If undefined, uses first available category
