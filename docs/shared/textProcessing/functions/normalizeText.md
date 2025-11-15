[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / normalizeText

# Function: normalizeText()

> **normalizeText**(`text`): `string`

Defined in: [src/shared/textProcessing.ts:268](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/textProcessing.ts#L268)

Normalizes text for comparison by lowercasing and removing extra whitespace.

## Parameters

### text

`string`

Text to normalize

## Returns

`string`

Normalized text

## Example

```typescript
const normalized = normalizeText("  Show ME   the   PEOPLE  ");
// Returns: "show me the people"
```
