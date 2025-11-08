[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / CategoryOrchestrationConfig

# Interface: CategoryOrchestrationConfig

Defined in: [src/agent/relevantDataManagerAgent/index.ts:204](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L204)

CategoryOrchestrationConfig interface.

## Properties

### agents

> **agents**: `object`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:212](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L212)

Agent-specific routing guidance.

#### dataAgent

> **dataAgent**: [`AgentOrchestrationGuidance`](AgentOrchestrationGuidance.md)

#### databaseAgent

> **databaseAgent**: [`AgentOrchestrationGuidance`](AgentOrchestrationGuidance.md)

#### relevantDataManager

> **relevantDataManager**: [`AgentOrchestrationGuidance`](AgentOrchestrationGuidance.md)

***

### escalateWhen?

> `optional` **escalateWhen**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:210](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L210)

Situations where orchestration should escalate for clarification.

***

### signals

> **signals**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:208](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L208)

Triggers that indicate the category is relevant to the request.

***

### summary

> **summary**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:206](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L206)

High-level framing of how orchestration should leverage the category.
