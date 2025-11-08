[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/clarificationAgent](../README.md) / ClarificationAgentInput

# Interface: ClarificationAgentInput

Defined in: [src/agent/clarificationAgent/index.ts:16](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L16)

Input parameters for the clarification agent.

## Properties

### candidateAgents

> **candidateAgents**: `string`[]

Defined in: [src/agent/clarificationAgent/index.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L24)

List of candidate agents that could handle the query.

***

### missingSignals?

> `optional` **missingSignals**: `string`[]

Defined in: [src/agent/clarificationAgent/index.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L22)

Signals that were missing from the original query.

***

### question

> **question**: `string`

Defined in: [src/agent/clarificationAgent/index.ts:18](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L18)

The user's question that needs clarification.

***

### topic?

> `optional` **topic**: `string`

Defined in: [src/agent/clarificationAgent/index.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/index.ts#L20)

Optional topic context for the question.
