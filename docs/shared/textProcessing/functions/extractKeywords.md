[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / extractKeywords

# Function: extractKeywords()

> **extractKeywords**(`text`, `config?`): `string`[]

Defined in: src/shared/textProcessing.ts:107

Extracts meaningful keywords from text by filtering stop words and applying length constraints.

## Parameters

### text

`string`

Source text to extract keywords from

### config?

[`TextProcessingConfig`](../interfaces/TextProcessingConfig.md)

Optional configuration for extraction behavior

## Returns

`string`[]

Array of extracted keyword tokens

## Example

```typescript
const keywords = extractKeywords("Show me all the people", { minimumKeywordLength: 3 });
// Returns: ["show", "people"]
```
