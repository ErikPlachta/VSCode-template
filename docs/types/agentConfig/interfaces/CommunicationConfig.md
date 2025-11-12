[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / CommunicationConfig

# Interface: CommunicationConfig

Defined in: [src/types/agentConfig.ts:335](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L335)

Communication agent-specific configuration for response formatting and user interaction

## Properties

### errorHandling

> **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:359](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L359)

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

Defined in: [src/types/agentConfig.ts:336](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L336)

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

Defined in: [src/types/agentConfig.ts:379](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L379)

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

Defined in: [src/types/agentConfig.ts:351](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L351)

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

Defined in: [src/types/agentConfig.ts:392](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/agentConfig.ts#L392)

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
