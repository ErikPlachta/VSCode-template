[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / OrchestratorResponse

# Interface: OrchestratorResponse

Defined in: [src/types/agentConfig.ts:1305](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1305)

Result of orchestrating a question across the available agents.

## Properties

### agent

> **agent**: `string`

Defined in: [src/types/agentConfig.ts:1307](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1307)

***

### formatted?

> `optional` **formatted**: `object`

Defined in: [src/types/agentConfig.ts:1316](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1316)

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

Defined in: [src/types/agentConfig.ts:1306](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1306)

***

### ~~markdown?~~

> `optional` **markdown**: `string`

Defined in: [src/types/agentConfig.ts:1328](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1328)

#### Deprecated

Use `formatted` (above) and, in full workflows, rely on
`WorkflowResult.formatted` produced via the CommunicationAgent. This field
will be removed in a future release after the deprecation lifecycle.

***

### payload

> **payload**: `unknown`

Defined in: [src/types/agentConfig.ts:1310](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1310)

***

### rationale

> **rationale**: `string`

Defined in: [src/types/agentConfig.ts:1309](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1309)

***

### summary

> **summary**: `string`

Defined in: [src/types/agentConfig.ts:1308](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1308)
