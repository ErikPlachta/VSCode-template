[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryOrchestrationConfig

# Interface: CategoryOrchestrationConfig

Defined in: [src/types/userContext.types.ts:17](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L17)

Category orchestration configuration for agents

## Properties

### agents

> **agents**: `object`

Defined in: [src/types/userContext.types.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L25)

Agent-specific configuration

#### Index Signature

\[`agentName`: `string`\]: `object`

***

### escalateWhen?

> `optional` **escalateWhen**: `string`[]

Defined in: [src/types/userContext.types.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L23)

Conditions when this category should escalate

***

### signals

> **signals**: `string`[]

Defined in: [src/types/userContext.types.ts:21](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L21)

Signals that indicate this category should be used

***

### summary

> **summary**: `string`

Defined in: [src/types/userContext.types.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L19)

Summary description of what this category represents
