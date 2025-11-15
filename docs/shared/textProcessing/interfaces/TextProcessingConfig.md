[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/textProcessing](../README.md) / TextProcessingConfig

# Interface: TextProcessingConfig

Defined in: [src/shared/textProcessing.ts:11](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/textProcessing.ts#L11)

Configuration options for text processing operations.

## Properties

### fuzzyMatchThreshold?

> `optional` **fuzzyMatchThreshold**: `number`

Defined in: [src/shared/textProcessing.ts:17](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/textProcessing.ts#L17)

Fuzzy match threshold 0-1 (default: 0.8)

***

### handleInflections?

> `optional` **handleInflections**: `boolean`

Defined in: [src/shared/textProcessing.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/textProcessing.ts#L19)

Whether to handle plural/singular variations (default: true)

***

### minimumKeywordLength?

> `optional` **minimumKeywordLength**: `number`

Defined in: [src/shared/textProcessing.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/textProcessing.ts#L15)

Minimum keyword length to include (default: 3)

***

### stopWords?

> `optional` **stopWords**: `Set`\<`string`\>

Defined in: [src/shared/textProcessing.ts:13](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/textProcessing.ts#L13)

Set of stop words to exclude from keyword extraction
