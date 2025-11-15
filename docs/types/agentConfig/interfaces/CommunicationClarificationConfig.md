[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / CommunicationClarificationConfig

# Interface: CommunicationClarificationConfig

Defined in: [src/types/agentConfig.ts:701](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L701)

Clarification formatting configuration for the CommunicationAgent.

Use groups with `usesCategories=true` to automatically substitute `{{category}}`
with runtime category names supplied via metadata.

## Example

```ts
const clar: CommunicationClarificationConfig = {
  maxCategoriesInExamples: 4,
  examplesHeader: "Here are some examples:",
  availableCategoriesHeader: "Available Categories:",
  closingPrompt: "Please be more specific.",
  unknownRequestTemplate: "I'm not sure what you're looking for with \"{{question}}\".",
  matchedIntentTemplate: "Your question seems related to {{intent}}.",
  groups: [
    { title: "**Query Records**", usesCategories: true, sampleTemplates: [
      "List recent items in {{category}}",
      "Find items matching specific keywords in {{category}}",
    ]},
  ],
};
```

## Properties

### availableCategoriesHeader?

> `optional` **availableCategoriesHeader**: `string`

Defined in: [src/types/agentConfig.ts:707](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L707)

Heading before category list

***

### closingPrompt?

> `optional` **closingPrompt**: `string`

Defined in: [src/types/agentConfig.ts:709](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L709)

Closing prompt encouraging specificity

***

### examplesHeader?

> `optional` **examplesHeader**: `string`

Defined in: [src/types/agentConfig.ts:705](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L705)

Heading before example prompts

***

### groups?

> `optional` **groups**: `object`[]

Defined in: [src/types/agentConfig.ts:715](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L715)

Example groups; when usesCategories=true, replace {{category}}

#### sampleTemplates

> **sampleTemplates**: `string`[]

#### title

> **title**: `string`

#### usesCategories?

> `optional` **usesCategories**: `boolean`

***

### matchedIntentTemplate?

> `optional` **matchedIntentTemplate**: `string`

Defined in: [src/types/agentConfig.ts:713](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L713)

Template when an intent is guessed: uses {{intent}}

***

### maxCategoriesInExamples?

> `optional` **maxCategoriesInExamples**: `number`

Defined in: [src/types/agentConfig.ts:703](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L703)

Max number of categories to include in examples

***

### unknownRequestTemplate?

> `optional` **unknownRequestTemplate**: `string`

Defined in: [src/types/agentConfig.ts:711](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L711)

Template: I'm not sure what you're looking for with "{{question}}".
