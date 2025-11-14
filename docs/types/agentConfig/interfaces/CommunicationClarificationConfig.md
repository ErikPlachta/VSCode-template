[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / CommunicationClarificationConfig

# Interface: CommunicationClarificationConfig

Defined in: [src/types/agentConfig.ts:692](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L692)

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

Defined in: [src/types/agentConfig.ts:698](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L698)

Heading before category list

***

### closingPrompt?

> `optional` **closingPrompt**: `string`

Defined in: [src/types/agentConfig.ts:700](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L700)

Closing prompt encouraging specificity

***

### examplesHeader?

> `optional` **examplesHeader**: `string`

Defined in: [src/types/agentConfig.ts:696](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L696)

Heading before example prompts

***

### groups?

> `optional` **groups**: `object`[]

Defined in: [src/types/agentConfig.ts:706](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L706)

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

Defined in: [src/types/agentConfig.ts:704](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L704)

Template when an intent is guessed: uses {{intent}}

***

### maxCategoriesInExamples?

> `optional` **maxCategoriesInExamples**: `number`

Defined in: [src/types/agentConfig.ts:694](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L694)

Max number of categories to include in examples

***

### unknownRequestTemplate?

> `optional` **unknownRequestTemplate**: `string`

Defined in: [src/types/agentConfig.ts:702](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L702)

Template: I'm not sure what you're looking for with "{{question}}".
