[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / fuzzyMatch

# Function: fuzzyMatch()

> **fuzzyMatch**(`str1`, `str2`): `number`

Defined in: [src/shared/textProcessing.ts:136](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/shared/textProcessing.ts#L136)

Calculates fuzzy match score between two strings using Levenshtein distance ratio.
Score ranges from 0 (no match) to 1 (exact match).

## Parameters

### str1

`string`

First string to compare

### str2

`string`

Second string to compare

## Returns

`number`

Similarity score between 0 and 1

## Example

```typescript
const score = fuzzyMatch("people", "person");
// Returns: ~0.66 (partial match)
```
