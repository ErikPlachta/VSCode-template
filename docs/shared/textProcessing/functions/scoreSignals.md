[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / scoreSignals

# Function: scoreSignals()

> **scoreSignals**(`text`, `signals`, `config?`): [`SignalMatchResult`](../interfaces/SignalMatchResult.md)

Defined in: src/shared/textProcessing.ts:203

Scores how well input text matches a set of signals, accounting for inflections.

## Parameters

### text

`string`

Input text to match against signals

### signals

`string`[]

Array of signal keywords to look for

### config?

[`TextProcessingConfig`](../interfaces/TextProcessingConfig.md)

Optional configuration for matching behavior

## Returns

[`SignalMatchResult`](../interfaces/SignalMatchResult.md)

Match results with matched/unmatched signals and total score

## Example

```typescript
const result = scoreSignals(
  "Show me all people records",
  ["people", "records", "department"],
  { handleInflections: true }
);
// Returns: { matched: ["people", "records"], unmatched: ["department"], score: 2 }
```
