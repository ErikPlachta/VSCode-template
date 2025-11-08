[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

Defined in: [src/agent/relevantDataManagerAgent/index.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/index.ts#L191)

Full configuration stored for each business category.

## Properties

### focus

> **focus**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:193](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/index.ts#L193)

Core responsibility for the agent when invoked for this category.

***

### promptStarters

> **promptStarters**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:197](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/index.ts#L197)

Prompt starters that the orchestrator can feed to the agent.

***

### signals

> **signals**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:195](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/relevantDataManagerAgent/index.ts#L195)

Signals that hint the orchestrator should route the request to this agent.
