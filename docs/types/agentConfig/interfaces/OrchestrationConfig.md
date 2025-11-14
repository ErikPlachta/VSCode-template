[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / OrchestrationConfig

# Interface: OrchestrationConfig

Defined in: [src/types/agentConfig.ts:201](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L201)

Orchestration configuration: intents, text handling, escalation, and messages.

## Example

```ts
const orchConfig: OrchestrationConfig = {
  intents: {
    "fetch-metadata": {
      name: "fetch-metadata",
      description: "Retrieve category metadata and schemas",
      targetAgent: "data-agent",
      signals: ["schema", "fields", "metadata"],
    },
  },
  textProcessing: {
    stopWords: ["the", "a", "an"],
    minimumKeywordLength: 3,
    scoringWeights: {
      signalMatch: 0.6,
      focusMatch: 0.3,
      promptStarterMatch: 0.1,
    },
  },
  escalation: {
    conditions: ["low-confidence", "missing-signals"],
    fallbackAgent: "clarification-agent",
    maxRetries: 1,
    vaguePhrases: ["help", "not sure"],
  },
  messages: {
    noIntentDetected: "I'm not sure how to help with that.",
    needMoreContext: "Could you provide more details?",
    questionTooVague: "Your question seems too broad.",
    missingSignalsHint: [
      "Try including specific keywords.",
      "Provide more context about what you're looking for.",
    ],
    errorOccurred: "Something went wrong while processing your request.",
    summaries: {
      metadata: "Here's the metadata I found.",
      records: "Here are the records matching your query.",
      insight: "Here are some insights based on the data.",
      clarification: "I need some clarification to proceed.",
      defaultTopic: "Here's what I found on that topic.",
    },
    guidance: {
      metadata: "You can ask about specific categories or fields.",
      recordsConnections: "Try asking about relationships between categories.",
      recordsFiltering: "You can filter records by specific criteria.",
      insightPlan: [
        "Consider exploring related categories.",
        "Look for trends over time.",
        "Analyze key metrics for deeper insights.",
      ],
      insightOverview: "Here's an overview of the insights generated.",
      insightRecommendations: "Based on the insights, consider these actions.",
      clarificationPrompt: "Could you clarify what you're looking for?",
    },
  },
};
```

## Properties

### escalation?

> `optional` **escalation**: [`EscalationConfig`](EscalationConfig.md)

Defined in: [src/types/agentConfig.ts:204](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L204)

***

### intents?

> `optional` **intents**: `Record`\<`string`, [`IntentConfig`](IntentConfig.md)\>

Defined in: [src/types/agentConfig.ts:202](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L202)

***

### messages?

> `optional` **messages**: `object`

Defined in: [src/types/agentConfig.ts:205](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L205)

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

Defined in: [src/types/agentConfig.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L203)
