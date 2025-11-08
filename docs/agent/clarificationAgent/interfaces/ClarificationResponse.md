[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/clarificationAgent](../README.md) / ClarificationResponse

# Interface: ClarificationResponse

Defined in: [src/agent/clarificationAgent/index.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L31)

Response from the clarification agent containing guidance and context.

## Properties

### knowledgeSnippets

> **knowledgeSnippets**: [`KnowledgeHit`](../../../mcp/knowledgeBase/interfaces/KnowledgeHit.md)[]

Defined in: [src/agent/clarificationAgent/index.ts:35](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L35)

Relevant knowledge snippets to provide context.

***

### prompt

> **prompt**: `string`

Defined in: [src/agent/clarificationAgent/index.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L33)

The clarification prompt to guide the user.
