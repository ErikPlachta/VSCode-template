[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / TextProcessingConfig

# Interface: TextProcessingConfig

Defined in: [src/types/agentConfig.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L107)

Text processing configuration for extracting signals and keywords.

## Example

```ts
const textCfg: TextProcessingConfig = {
  stopWords: ["the", "a", "an"],
  minimumKeywordLength: 3,
  scoringWeights: {
    signalMatch: 0.6,
    focusMatch: 0.3,
    promptStarterMatch: 0.1,
  },
};
```

## Properties

### minimumKeywordLength

> **minimumKeywordLength**: `number`

Defined in: [src/types/agentConfig.ts:111](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L111)

***

### scoringWeights

> **scoringWeights**: `object`

Defined in: [src/types/agentConfig.ts:113](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L113)

#### focusMatch

> **focusMatch**: `number`

#### promptStarterMatch

> **promptStarterMatch**: `number`

#### signalMatch

> **signalMatch**: `number`

***

### stopWords

> **stopWords**: `string`[]

Defined in: [src/types/agentConfig.ts:109](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L109)
