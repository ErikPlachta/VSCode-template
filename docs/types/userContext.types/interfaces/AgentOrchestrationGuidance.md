[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

Defined in: src/types/userContext.types.ts:339

Agent orchestration guidance for specific agents

## Properties

### focus

> **focus**: `string`

Defined in: src/types/userContext.types.ts:341

Core responsibility for the agent when invoked for this category

***

### promptStarters

> **promptStarters**: `string`[]

Defined in: src/types/userContext.types.ts:345

Prompt starters that the orchestrator can feed to the agent

***

### signals

> **signals**: `string`[]

Defined in: src/types/userContext.types.ts:343

Signals that hint the orchestrator should route the request to this agent
