[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / containsAnyPhrase

# Function: containsAnyPhrase()

> **containsAnyPhrase**(`text`, `phrases`): `boolean`

Defined in: [src/shared/textProcessing.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/textProcessing.ts#L285)

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
