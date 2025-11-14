[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / CommunicationConfig

# Interface: CommunicationConfig

Defined in: [src/types/agentConfig.ts:602](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L602)

CommunicationAgent configuration for response formatting and user interaction.

Prefer defining copy/templates here and referencing them from agents to avoid
hardcoded business values in code.

## Example

```ts
const comm: CommunicationConfig = {
  formatting: {
    defaultFormat: "markdown",
    tone: { success: "friendly", error: "helpful", progress: "informative", validation: "constructive" },
    verbosity: "balanced",
    maxMessageLength: 1000,
  },
  clarification: {
    maxCategoriesInExamples: 3,
    examplesHeader: "Examples:",
    availableCategoriesHeader: "Available Categories:",
    unknownRequestTemplate: "I'm not sure what you're looking for with \"{{question}}\".",
    matchedIntentTemplate: "Your question seems related to {{intent}}.",
    groups: [
      { title: "**Category Information**", usesCategories: true, sampleTemplates: [
        "What's in the {{category}} category?",
        "Describe the {{category}} data model",
      ]},
    ],
  },
};
```

## Properties

### clarification?

> `optional` **clarification**: [`CommunicationClarificationConfig`](CommunicationClarificationConfig.md)

Defined in: [src/types/agentConfig.ts:667](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L667)

Clarification message templates and settings for CommunicationAgent

***

### errorHandling

> **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:626](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L626)

#### errorTemplates?

> `optional` **errorTemplates**: `object`

##### errorTemplates.configurationError?

> `optional` **configurationError**: `string`

##### errorTemplates.externalError?

> `optional` **externalError**: `string`

##### errorTemplates.notFound?

> `optional` **notFound**: `string`

##### errorTemplates.permissionDenied?

> `optional` **permissionDenied**: `string`

##### errorTemplates.unexpected?

> `optional` **unexpected**: `string`

##### errorTemplates.validationFailed?

> `optional` **validationFailed**: `string`

#### includeErrorCodes?

> `optional` **includeErrorCodes**: `boolean`

#### includeStackTrace?

> `optional` **includeStackTrace**: `boolean`

#### maxRecoverySuggestions?

> `optional` **maxRecoverySuggestions**: `number`

#### recoveryActions?

> `optional` **recoveryActions**: `object`

##### recoveryActions.configurationError?

> `optional` **configurationError**: `string`[]

##### recoveryActions.notFound?

> `optional` **notFound**: `string`[]

##### recoveryActions.permissionDenied?

> `optional` **permissionDenied**: `string`[]

##### recoveryActions.validationFailed?

> `optional` **validationFailed**: `string`[]

#### suggestRecoveryActions?

> `optional` **suggestRecoveryActions**: `boolean`

***

### formatting

> **formatting**: `object`

Defined in: [src/types/agentConfig.ts:603](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L603)

#### defaultFormat

> **defaultFormat**: `"markdown"` \| `"plaintext"` \| `"html"`

#### formatLists?

> `optional` **formatLists**: `boolean`

#### highlightKeyInfo?

> `optional` **highlightKeyInfo**: `boolean`

#### includeEmoji?

> `optional` **includeEmoji**: `boolean`

#### includeSectionHeaders?

> `optional` **includeSectionHeaders**: `boolean`

#### maxMessageLength

> **maxMessageLength**: `number`

#### tone

> **tone**: `object`

##### tone.error

> **error**: `string`

##### tone.progress

> **progress**: `string`

##### tone.success

> **success**: `string`

##### tone.validation

> **validation**: `string`

#### verbosity

> **verbosity**: `"minimal"` \| `"balanced"` \| `"detailed"`

***

### progressTracking?

> `optional` **progressTracking**: `object`

Defined in: [src/types/agentConfig.ts:646](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L646)

#### enabled?

> `optional` **enabled**: `boolean`

#### minimumDuration?

> `optional` **minimumDuration**: `number`

#### progressTemplates?

> `optional` **progressTemplates**: `object`

##### progressTemplates.completed?

> `optional` **completed**: `string`

##### progressTemplates.inProgress?

> `optional` **inProgress**: `string`

##### progressTemplates.started?

> `optional` **started**: `string`

#### showElapsedTime?

> `optional` **showElapsedTime**: `boolean`

#### showEstimatedTimeRemaining?

> `optional` **showEstimatedTimeRemaining**: `boolean`

#### showPercentage?

> `optional` **showPercentage**: `boolean`

#### updateInterval?

> `optional` **updateInterval**: `number`

***

### successTemplates?

> `optional` **successTemplates**: `object`

Defined in: [src/types/agentConfig.ts:618](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L618)

#### analysisComplete?

> `optional` **analysisComplete**: `string`

#### dataRetrieved?

> `optional` **dataRetrieved**: `string`

#### exportComplete?

> `optional` **exportComplete**: `string`

#### importComplete?

> `optional` **importComplete**: `string`

#### metadataRetrieved?

> `optional` **metadataRetrieved**: `string`

#### validationPassed?

> `optional` **validationPassed**: `string`

***

### validation?

> `optional` **validation**: `object`

Defined in: [src/types/agentConfig.ts:659](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L659)

#### groupByCategory?

> `optional` **groupByCategory**: `boolean`

#### maxErrorsPerEntity?

> `optional` **maxErrorsPerEntity**: `number`

#### showExpectedActual?

> `optional` **showExpectedActual**: `boolean`

#### showFieldPaths?

> `optional` **showFieldPaths**: `boolean`

#### summaryTemplate?

> `optional` **summaryTemplate**: `string`
