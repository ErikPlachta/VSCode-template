[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / containsAnyPhrase

# Function: containsAnyPhrase()

> **containsAnyPhrase**(`text`, `phrases`): `boolean`

Defined in: [src/shared/textProcessing.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/textProcessing.ts#L285)

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
