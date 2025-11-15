[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / CommunicationConfig

# Interface: CommunicationConfig

Defined in: [src/types/agentConfig.ts:450](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L450)

CommunicationAgent configuration for response formatting and user interaction.

## Indexable

\[`key`: `string`\]: `unknown`

Allow forward-compatible keys

## Properties

### clarification?

> `optional` **clarification**: [`CommunicationClarificationConfig`](CommunicationClarificationConfig.md)

Defined in: [src/types/agentConfig.ts:524](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L524)

Clarification message templates and settings for CommunicationAgent

***

### errorHandling

> **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:483](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L483)

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

Defined in: [src/types/agentConfig.ts:451](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L451)

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

Defined in: [src/types/agentConfig.ts:503](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L503)

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

### successDisplay?

> `optional` **successDisplay**: `object`

Defined in: [src/types/agentConfig.ts:475](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L475)

Optional success-path display customization (enumeration of categories)

#### availableCategoriesHeader?

> `optional` **availableCategoriesHeader**: `string`

Header to use above enumerated categories; falls back to clarification header or static default

#### includeAvailableCategories?

> `optional` **includeAvailableCategories**: `boolean`

Enable enumeration of availableCategories in success responses when metadata provides them

#### maxCategoriesInSuccess?

> `optional` **maxCategoriesInSuccess**: `number`

Maximum categories to enumerate (default implementation uses 6)

***

### successTemplates?

> `optional` **successTemplates**: `object`

Defined in: [src/types/agentConfig.ts:466](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L466)

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

Defined in: [src/types/agentConfig.ts:516](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/agentConfig.ts#L516)

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
