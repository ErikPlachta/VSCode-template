[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryOrchestrationConfig

# Interface: CategoryOrchestrationConfig

Defined in: [src/types/userContext.types.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L25)

Category orchestration configuration for agents

## Properties

### agents

> **agents**: `object`

Defined in: [src/types/userContext.types.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L33)

Agent-specific configuration

#### Index Signature

\[`agentName`: `string`\]: `object`

***

### escalateWhen?

> `optional` **escalateWhen**: `string`[]

Defined in: [src/types/userContext.types.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L31)

Conditions when this category should escalate

***

### signals

> **signals**: `string`[]

Defined in: [src/types/userContext.types.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L29)

Signals that indicate this category should be used

***

### summary

> **summary**: `string`

Defined in: [src/types/userContext.types.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L27)

Summary description of what this category represents
