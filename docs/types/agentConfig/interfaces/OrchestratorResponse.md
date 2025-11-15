[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / OrchestratorResponse

# Interface: OrchestratorResponse

Defined in: [src/types/agentConfig.ts:836](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L836)

Result of orchestrating a question across the available agents.

## Properties

### agent

> **agent**: `string`

Defined in: [src/types/agentConfig.ts:838](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L838)

***

### formatted?

> `optional` **formatted**: `object`

Defined in: [src/types/agentConfig.ts:847](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L847)

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

Defined in: [src/types/agentConfig.ts:837](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L837)

***

### ~~markdown?~~

> `optional` **markdown**: `string`

Defined in: [src/types/agentConfig.ts:859](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L859)

#### Deprecated

Use `formatted` (above) and, in full workflows, rely on
`WorkflowResult.formatted` produced via the CommunicationAgent. This field
will be removed in a future release after the deprecation lifecycle.

***

### payload

> **payload**: `unknown`

Defined in: [src/types/agentConfig.ts:841](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L841)

***

### rationale

> **rationale**: `string`

Defined in: [src/types/agentConfig.ts:840](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L840)

***

### summary

> **summary**: `string`

Defined in: [src/types/agentConfig.ts:839](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L839)
