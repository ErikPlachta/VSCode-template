[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[mybusiness-mcp-extension](../../../../modules.md) / [mcp/config/agentManifest](../README.md) / AgentCapabilityMetadata

# Interface: AgentCapabilityMetadata

Defined in: [src/mcp/config/agentManifest.ts:18](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/mcp/config/agentManifest.ts#L18)

Description of an agent's shared responsibilities and boundaries.

## Properties

### dependsOn?

> `optional` **dependsOn**: [`AgentIdentifier`](../../unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]

Defined in: [src/mcp/config/agentManifest.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/mcp/config/agentManifest.ts#L30)

Downstream agents or services that this agent commonly depends on.

***

### description

> **description**: `string`

Defined in: [src/mcp/config/agentManifest.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/mcp/config/agentManifest.ts#L24)

Summary of what the agent is responsible for.

***

### escalateWhen

> **escalateWhen**: `string`[]

Defined in: [src/mcp/config/agentManifest.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/mcp/config/agentManifest.ts#L28)

Situations where the agent must escalate to another party.

***

### id

> **id**: [`AgentIdentifier`](../../unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Defined in: [src/mcp/config/agentManifest.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/mcp/config/agentManifest.ts#L20)

Stable identifier that matches orchestrator routing names.

***

### primarySignals

> **primarySignals**: `string`[]

Defined in: [src/mcp/config/agentManifest.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/mcp/config/agentManifest.ts#L26)

Signals that strongly suggest this agent should be invoked.

***

### title

> **title**: `string`

Defined in: [src/mcp/config/agentManifest.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/mcp/config/agentManifest.ts#L22)

Human readable agent name.
