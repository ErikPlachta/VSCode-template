[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / OrchestrationConfig

# Interface: OrchestrationConfig

Defined in: [src/types/agentConfig.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L120)

Orchestration configuration: intents, text handling, escalation, and messages.

## Properties

### escalation?

> `optional` **escalation**: [`EscalationConfig`](EscalationConfig.md)

Defined in: [src/types/agentConfig.ts:123](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L123)

***

### intents?

> `optional` **intents**: `Record`\<`string`, [`IntentConfig`](IntentConfig.md)\>

Defined in: [src/types/agentConfig.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L121)

***

### messages?

> `optional` **messages**: `object`

Defined in: [src/types/agentConfig.ts:124](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L124)

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

Defined in: [src/types/agentConfig.ts:122](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L122)
