[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / AgentDefinition

# Interface: AgentDefinition

Defined in: [src/types/applicationConfig.ts:123](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L123)

Agent definition with comprehensive metadata.

## Remarks

`capabilities` describe high-level functions; detailed behavior is driven by
the agent's typed configuration (see `ApplicationConfig.agents`).

## Example

```ts
const commAgent: AgentDefinition = {
  name: "communicationAgent",
  description: "Formats responses for end users",
  label: "Communication",
  displayName: "Communication Agent",
  className: "CommunicationAgent",
  capabilities: ["formatting", "templating"],
  responsibility: "Owns all user-facing formatting",
  userFacing: { friendlyDescription: "Converts data into readable messages" },
};
```

## Properties

### applicationFacing?

> `optional` **applicationFacing**: `object`

Defined in: [src/types/applicationConfig.ts:150](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L150)

Application-facing metadata for improved logging/logic.

#### dependencies?

> `optional` **dependencies**: `string`[]

Dependencies on other agents.

#### errorHandling?

> `optional` **errorHandling**: `object`

Error handling strategies.

##### errorHandling.fallbackAgent?

> `optional` **fallbackAgent**: `string`

##### errorHandling.maxRetries?

> `optional` **maxRetries**: `number`

##### errorHandling.retryStrategy?

> `optional` **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

#### monitoring?

> `optional` **monitoring**: `object`

Monitoring and metrics.

##### monitoring.alertThresholds?

> `optional` **alertThresholds**: `Record`\<`string`, `number`\>

##### monitoring.healthCheckEndpoint?

> `optional` **healthCheckEndpoint**: `string`

##### monitoring.metricsToTrack?

> `optional` **metricsToTrack**: `string`[]

#### performance?

> `optional` **performance**: `object`

Performance characteristics.

##### performance.complexity?

> `optional` **complexity**: `"low"` \| `"medium"` \| `"high"`

##### performance.expectedResponseTime?

> `optional` **expectedResponseTime**: `number`

##### performance.memoryUsage?

> `optional` **memoryUsage**: `string`

#### technicalDescription?

> `optional` **technicalDescription**: `string`

Detailed technical description.

***

### capabilities

> **capabilities**: `string`[]

Defined in: [src/types/applicationConfig.ts:135](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L135)

List of capabilities this agent provides.

***

### className

> **className**: `string`

Defined in: [src/types/applicationConfig.ts:133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L133)

Class name used for instantiation.

***

### description

> **description**: `string`

Defined in: [src/types/applicationConfig.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L127)

Human-readable description of agent purpose.

***

### displayName

> **displayName**: `string`

Defined in: [src/types/applicationConfig.ts:131](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L131)

Formal display name for user interfaces.

***

### label

> **label**: `string`

Defined in: [src/types/applicationConfig.ts:129](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L129)

Short label for UI display and templates.

***

### name

> **name**: `string`

Defined in: [src/types/applicationConfig.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L125)

Technical name used in code/imports.

***

### responsibility

> **responsibility**: `string`

Defined in: [src/types/applicationConfig.ts:137](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L137)

Primary responsibility summary.

***

### userFacing?

> `optional` **userFacing**: `object`

Defined in: [src/types/applicationConfig.ts:139](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/applicationConfig.ts#L139)

User-facing metadata for enhanced UX.

#### exampleQueries?

> `optional` **exampleQueries**: `string`[]

Example user queries.

#### friendlyDescription?

> `optional` **friendlyDescription**: `string`

Friendly description for end users.

#### helpText?

> `optional` **helpText**: `string`

Help text for users.

#### useWhen?

> `optional` **useWhen**: `string`[]

When users should use this agent.
