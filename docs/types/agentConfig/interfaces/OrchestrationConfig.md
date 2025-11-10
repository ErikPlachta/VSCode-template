[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / OrchestrationConfig

# Interface: OrchestrationConfig

Defined in: [src/types/agentConfig.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L56)

Orchestration-specific configuration

## Properties

### escalation?

> `optional` **escalation**: [`EscalationConfig`](EscalationConfig.md)

Defined in: [src/types/agentConfig.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L59)

***

### intents?

> `optional` **intents**: `Record`\<`string`, [`IntentConfig`](IntentConfig.md)\>

Defined in: [src/types/agentConfig.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L57)

***

### messages?

> `optional` **messages**: `object`

Defined in: [src/types/agentConfig.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L60)

#### errorOccurred?

> `optional` **errorOccurred**: `string`

#### guidance?

> `optional` **guidance**: `object`

##### guidance.clarificationPrompt?

> `optional` **clarificationPrompt**: `string`

##### guidance.insightOverview?

> `optional` **insightOverview**: `string`

##### guidance.insightPlan?

> `optional` **insightPlan**: `string`[]

##### guidance.insightRecommendations?

> `optional` **insightRecommendations**: `string`

##### guidance.metadata?

> `optional` **metadata**: `string`

##### guidance.recordsConnections?

> `optional` **recordsConnections**: `string`

##### guidance.recordsFiltering?

> `optional` **recordsFiltering**: `string`

#### missingSignalsHint?

> `optional` **missingSignalsHint**: `string`[]

#### needMoreContext?

> `optional` **needMoreContext**: `string`

#### noIntentDetected?

> `optional` **noIntentDetected**: `string`

#### questionTooVague?

> `optional` **questionTooVague**: `string`

#### summaries?

> `optional` **summaries**: `object`

##### summaries.clarification?

> `optional` **clarification**: `string`

##### summaries.defaultTopic?

> `optional` **defaultTopic**: `string`

##### summaries.insight?

> `optional` **insight**: `string`

##### summaries.metadata?

> `optional` **metadata**: `string`

##### summaries.records?

> `optional` **records**: `string`

***

### textProcessing?

> `optional` **textProcessing**: [`TextProcessingConfig`](TextProcessingConfig.md)

Defined in: [src/types/agentConfig.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/agentConfig.ts#L58)
