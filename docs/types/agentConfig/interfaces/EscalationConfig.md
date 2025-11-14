[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / EscalationConfig

# Interface: EscalationConfig

Defined in: [src/types/agentConfig.ts:134](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L134)

Escalation configuration controlling retries and fallback behavior.

## Example

```ts
const esc: EscalationConfig = {
  conditions: ["low-confidence", "missing-signals"],
  fallbackAgent: "clarification-agent",
  maxRetries: 1,
  vaguePhrases: ["help", "not sure"],
};
```

## Properties

### conditions

> **conditions**: `string`[]

Defined in: [src/types/agentConfig.ts:135](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L135)

***

### fallbackAgent

> **fallbackAgent**: `string`

Defined in: [src/types/agentConfig.ts:136](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L136)

***

### maxRetries

> **maxRetries**: `number`

Defined in: [src/types/agentConfig.ts:137](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L137)

***

### vaguePhrases?

> `optional` **vaguePhrases**: `string`[]

Defined in: [src/types/agentConfig.ts:138](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L138)
