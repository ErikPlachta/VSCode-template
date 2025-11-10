[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / normalizeText

# Function: normalizeText()

> **normalizeText**(`text`): `string`

Defined in: src/shared/textProcessing.ts:268

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
