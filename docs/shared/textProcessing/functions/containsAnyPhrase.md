[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / containsAnyPhrase

# Function: containsAnyPhrase()

> **containsAnyPhrase**(`text`, `phrases`): `boolean`

Defined in: src/shared/textProcessing.ts:285

Checks if text contains any of the provided phrases (case-insensitive).

## Parameters

### text

`string`

Text to search within

### phrases

`string`[]

Phrases to look for

## Returns

`boolean`

True if any phrase is found

## Example

```typescript
const hasVague = containsAnyPhrase("help me", ["help", "assist", "what"]);
// Returns: true
```
