[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryOrchestrationConfig

# Interface: CategoryOrchestrationConfig

Defined in: src/types/userContext.types.ts:17

Category orchestration configuration for agents

## Properties

### agents

> **agents**: `object`

Defined in: src/types/userContext.types.ts:25

Agent-specific configuration

#### Index Signature

\[`agentName`: `string`\]: `object`

***

### escalateWhen?

> `optional` **escalateWhen**: `string`[]

Defined in: src/types/userContext.types.ts:23

Conditions when this category should escalate

***

### signals

> **signals**: `string`[]

Defined in: src/types/userContext.types.ts:21

Signals that indicate this category should be used

***

### summary

> **summary**: `string`

Defined in: src/types/userContext.types.ts:19

Summary description of what this category represents
