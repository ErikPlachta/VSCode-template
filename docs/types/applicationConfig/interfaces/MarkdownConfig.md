[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / MarkdownConfig

# Interface: MarkdownConfig

Defined in: [src/types/applicationConfig.ts:424](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L424)

Markdown validation configuration.

## Example

```ts
const md: MarkdownConfig = {
  include: ["docs/*.md"],
  exclude: ["_ARCHIVE/**"],
  requiredFrontMatter: ["title"],
  requiredSections: ["## Logs"],
};
```

## See

docs/tools/validateMarkdown/README.md

## Properties

### exclude

> **exclude**: `string`[]

Defined in: [src/types/applicationConfig.ts:428](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L428)

File patterns to exclude from validation.

***

### include

> **include**: `string`[]

Defined in: [src/types/applicationConfig.ts:426](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L426)

File patterns to include in validation.

***

### requiredFrontMatter

> **requiredFrontMatter**: `string`[]

Defined in: [src/types/applicationConfig.ts:430](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L430)

Required front matter fields.

***

### requiredSections

> **requiredSections**: `string`[]

Defined in: [src/types/applicationConfig.ts:432](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/applicationConfig.ts#L432)

Required section headings.
