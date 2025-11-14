[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryOrchestrationConfig

# Interface: CategoryOrchestrationConfig

Defined in: [src/types/userContext.types.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L27)

Category orchestration configuration for agents

## Properties

### agents

> **agents**: `object`

Defined in: [src/types/userContext.types.ts:35](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L35)

Agent-specific configuration

#### Index Signature

\[`agentName`: `string`\]: `object`

***

### escalateWhen?

> `optional` **escalateWhen**: `string`[]

Defined in: [src/types/userContext.types.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L33)

Conditions when this category should escalate

***

### signals

> **signals**: `string`[]

Defined in: [src/types/userContext.types.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L31)

Signals that indicate this category should be used

***

### summary

> **summary**: `string`

Defined in: [src/types/userContext.types.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L29)

Summary description of what this category represents
