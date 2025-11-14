[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / TextProcessingConfig

# Interface: TextProcessingConfig

Defined in: [src/types/agentConfig.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L107)

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

Defined in: [src/types/agentConfig.ts:111](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L111)

***

### scoringWeights

> **scoringWeights**: `object`

Defined in: [src/types/agentConfig.ts:113](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L113)

#### focusMatch

> **focusMatch**: `number`

#### promptStarterMatch

> **promptStarterMatch**: `number`

#### signalMatch

> **signalMatch**: `number`

***

### stopWords

> **stopWords**: `string`[]

Defined in: [src/types/agentConfig.ts:109](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L109)
