[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / TextProcessingConfig

# Interface: TextProcessingConfig

Defined in: [src/types/agentConfig.ts:83](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L83)

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

Defined in: [src/types/agentConfig.ts:87](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L87)

***

### scoringWeights

> **scoringWeights**: `object`

Defined in: [src/types/agentConfig.ts:89](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L89)

#### focusMatch

> **focusMatch**: `number`

#### promptStarterMatch

> **promptStarterMatch**: `number`

#### signalMatch

> **signalMatch**: `number`

***

### stopWords

> **stopWords**: `string`[]

Defined in: [src/types/agentConfig.ts:85](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L85)
