[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).AgentOrchestrationGuidance

Full configuration stored for each business category.

## Table of contents

### Properties

- [focus](agents_relevantDataManagerAgent.AgentOrchestrationGuidance.md#focus)
- [promptStarters](agents_relevantDataManagerAgent.AgentOrchestrationGuidance.md#promptstarters)
- [signals](agents_relevantDataManagerAgent.AgentOrchestrationGuidance.md#signals)

## Properties

### focus

• **focus**: `string`

Core responsibility for the agent when invoked for this category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:158](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L158)

___

### promptStarters

• **promptStarters**: `string`[]

Prompt starters that the orchestrator can feed to the agent.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:162](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L162)

___

### signals

• **signals**: `string`[]

Signals that hint the orchestrator should route the request to this agent.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:160](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L160)
