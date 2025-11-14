[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / OrchestratorResponse

# Interface: OrchestratorResponse

Defined in: [src/types/agentConfig.ts:1296](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1296)

Result of orchestrating a question across the available agents.

## Properties

### agent

> **agent**: `string`

Defined in: [src/types/agentConfig.ts:1298](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1298)

***

### formatted?

> `optional` **formatted**: `object`

Defined in: [src/types/agentConfig.ts:1307](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1307)

Optional pre-formatted content. Prefer using `WorkflowResult.formatted` in
end-to-end workflows. This field exists only for transitional compatibility
with older orchestration paths.

#### markdown?

> `optional` **markdown**: `string`

Markdown-formatted content for rich display

#### message

> **message**: `string`

Human-readable message describing the routing/decision

***

### intent

> **intent**: `string`

Defined in: [src/types/agentConfig.ts:1297](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1297)

***

### ~~markdown?~~

> `optional` **markdown**: `string`

Defined in: [src/types/agentConfig.ts:1319](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1319)

#### Deprecated

Use `formatted` (above) and, in full workflows, rely on
`WorkflowResult.formatted` produced via the CommunicationAgent. This field
will be removed in a future release after the deprecation lifecycle.

***

### payload

> **payload**: `unknown`

Defined in: [src/types/agentConfig.ts:1301](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1301)

***

### rationale

> **rationale**: `string`

Defined in: [src/types/agentConfig.ts:1300](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1300)

***

### summary

> **summary**: `string`

Defined in: [src/types/agentConfig.ts:1299](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L1299)
