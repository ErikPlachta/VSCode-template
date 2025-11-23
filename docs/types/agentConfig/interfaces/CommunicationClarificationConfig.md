[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / CommunicationClarificationConfig

# Interface: CommunicationClarificationConfig

Defined in: [src/types/agentConfig.ts:537](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L537)

Clarification formatting configuration for the CommunicationAgent.

Use groups with `usesCategories=true` to automatically substitute category names.
with runtime category names supplied via metadata.

Example removed for brevity.

## Properties

### availableCategoriesHeader?

> `optional` **availableCategoriesHeader**: `string`

Defined in: [src/types/agentConfig.ts:543](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L543)

Heading before category list

***

### closingPrompt?

> `optional` **closingPrompt**: `string`

Defined in: [src/types/agentConfig.ts:545](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L545)

Closing prompt encouraging specificity

***

### examplesHeader?

> `optional` **examplesHeader**: `string`

Defined in: [src/types/agentConfig.ts:541](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L541)

Heading before example prompts

***

### groups?

> `optional` **groups**: `object`[]

Defined in: [src/types/agentConfig.ts:551](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L551)

Example groups; when usesCategories=true, category placeholders are substituted.

#### sampleTemplates

> **sampleTemplates**: `string`[]

#### title

> **title**: `string`

#### usesCategories?

> `optional` **usesCategories**: `boolean`

***

### matchedIntentTemplate?

> `optional` **matchedIntentTemplate**: `string`

Defined in: [src/types/agentConfig.ts:549](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L549)

Template when an intent is guessed.

***

### maxCategoriesInExamples?

> `optional` **maxCategoriesInExamples**: `number`

Defined in: [src/types/agentConfig.ts:539](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L539)

Max number of categories to include in examples

***

### unknownRequestTemplate?

> `optional` **unknownRequestTemplate**: `string`

Defined in: [src/types/agentConfig.ts:547](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L547)

Template shown when the user request is unclear.
