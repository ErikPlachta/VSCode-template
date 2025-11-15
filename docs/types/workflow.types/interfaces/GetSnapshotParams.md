[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / GetSnapshotParams

# Interface: GetSnapshotParams

Defined in: [src/types/workflow.types.ts:383](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L383)

Parameters for UserContextAgent.getOrCreateSnapshot()

If topicOrId is undefined, agent will use first available category (data-driven)

## Properties

### topicOrId?

> `optional` **topicOrId**: `string`

Defined in: [src/types/workflow.types.ts:385](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/workflow.types.ts#L385)

Optional category identifier. If undefined, uses first available category
