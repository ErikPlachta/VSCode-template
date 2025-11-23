[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / containsAnyPhrase

# Function: containsAnyPhrase()

> **containsAnyPhrase**(`text`, `phrases`): `boolean`

Defined in: [src/shared/textProcessing.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/textProcessing.ts#L285)

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
