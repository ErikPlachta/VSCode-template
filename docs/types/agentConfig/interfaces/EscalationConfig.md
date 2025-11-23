[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / EscalationConfig

# Interface: EscalationConfig

Defined in: [src/types/agentConfig.ts:112](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L112)

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

Defined in: [src/types/agentConfig.ts:113](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L113)

***

### fallbackAgent

> **fallbackAgent**: `string`

Defined in: [src/types/agentConfig.ts:114](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L114)

***

### maxRetries

> **maxRetries**: `number`

Defined in: [src/types/agentConfig.ts:115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L115)

***

### vaguePhrases?

> `optional` **vaguePhrases**: `string`[]

Defined in: [src/types/agentConfig.ts:116](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L116)
