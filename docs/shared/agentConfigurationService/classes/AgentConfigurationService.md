[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/agentConfigurationService](../README.md) / AgentConfigurationService

# Class: AgentConfigurationService

Defined in: [src/shared/agentConfigurationService.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L15)

Service for managing agent configurations and metadata.

## Methods

### getAgentCapabilities()

> **getAgentCapabilities**(`agentId`): `Promise`\<`string`[]\>

Defined in: [src/shared/agentConfigurationService.ts:156](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L156)

Gets the capabilities for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<`string`[]\>

Array of capability identifiers.

***

### getAgentDefinition()

> **getAgentDefinition**(`agentId`): `Promise`\<[`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>

Defined in: [src/shared/agentConfigurationService.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L56)

Gets the agent definition for the specified agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the agent definition to load.

#### Returns

`Promise`\<[`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>

Resolved agent definition including metadata.

#### Throws

Throws if the agent identifier is unknown or definition missing.

***

### getAgentDisplayName()

> **getAgentDisplayName**(`agentId`): `Promise`\<`string`\>

Defined in: [src/shared/agentConfigurationService.ts:145](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L145)

Gets the display name for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<`string`\>

Human-friendly display name.

***

### getAgentsWithCapability()

> **getAgentsWithCapability**(`capability`): `Promise`\<[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]\>

Defined in: [src/shared/agentConfigurationService.ts:184](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L184)

Gets agents that have a specific capability.

#### Parameters

##### capability

`string`

Capability identifier to match.

#### Returns

`Promise`\<[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]\>

Array of agent identifiers supporting the capability.

***

### getAllAgentDefinitions()

> **getAllAgentDefinitions**(): `Promise`\<`Record`\<`string`, [`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>\>

Defined in: [src/shared/agentConfigurationService.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L98)

Gets all agent definitions keyed by agent identifier, including migration aliases.

#### Returns

`Promise`\<`Record`\<`string`, [`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>\>

Map of agent identifiers to definitions.

***

### getApplicationFacingInfo()

> **getApplicationFacingInfo**(`agentId`): `Promise`\<\{ `dependencies?`: `string`[]; `errorHandling?`: \{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \}; `monitoring?`: \{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \}; `performance?`: \{ `complexity?`: `"low"` \| `"medium"` \| `"high"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \}; `technicalDescription?`: `string`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:132](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L132)

Gets application-facing information for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<\{ `dependencies?`: `string`[]; `errorHandling?`: \{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \}; `monitoring?`: \{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \}; `performance?`: \{ `complexity?`: `"low"` \| `"medium"` \| `"high"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \}; `technicalDescription?`: `string`; \} \| `null` \| `undefined`\>

Application-facing info or null.

***

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(`agentId`): `Promise`\<\{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:261](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L261)

Gets error handling configuration for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<\{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \} \| `null` \| `undefined`\>

Error handling config or null.

***

### getExampleQueries()

> **getExampleQueries**(`agentId`): `Promise`\<`string`[]\>

Defined in: [src/shared/agentConfigurationService.ts:220](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L220)

Gets example queries for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<`string`[]\>

Example user queries or empty array.

***

### getFriendlyDescription()

> **getFriendlyDescription**(`agentId`): `Promise`\<`string`\>

Defined in: [src/shared/agentConfigurationService.ts:207](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L207)

Gets friendly description for user interfaces.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<`string`\>

Friendly description string.

***

### getMonitoringConfig()

> **getMonitoringConfig**(`agentId`): `Promise`\<\{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:231](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L231)

Gets monitoring configuration for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<\{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \} \| `null` \| `undefined`\>

Monitoring config or null.

***

### getPerformanceConfig()

> **getPerformanceConfig**(`agentId`): `Promise`\<\{ `complexity?`: `"low"` \| `"medium"` \| `"high"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:246](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L246)

Gets performance characteristics for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<\{ `complexity?`: `"low"` \| `"medium"` \| `"high"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \} \| `null` \| `undefined`\>

Performance config or null.

***

### getUserFacingInfo()

> **getUserFacingInfo**(`agentId`): `Promise`\<\{ `exampleQueries?`: `string`[]; `friendlyDescription?`: `string`; `helpText?`: `string`; `useWhen?`: `string`[]; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L119)

Gets user-facing information for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

#### Returns

`Promise`\<\{ `exampleQueries?`: `string`[]; `friendlyDescription?`: `string`; `helpText?`: `string`; `useWhen?`: `string`[]; \} \| `null` \| `undefined`\>

User-facing info or null if absent.

***

### hasCapability()

> **hasCapability**(`agentId`, `capability`): `Promise`\<`boolean`\>

Defined in: [src/shared/agentConfigurationService.ts:170](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L170)

Checks if an agent has a specific capability.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Identifier for the target agent.

##### capability

`string`

Capability identifier to check.

#### Returns

`Promise`\<`boolean`\>

True if capability is present; otherwise false.

***

### reloadConfiguration()

> **reloadConfiguration**(): `Promise`\<`void`\>

Defined in: [src/shared/agentConfigurationService.ts:276](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L276)

Reloads the configuration from disk.
Clears cached configuration and re-loads from disk.

#### Returns

`Promise`\<`void`\>

Resolves once configuration is reloaded.

***

### getInstance()

> `static` **getInstance**(): `AgentConfigurationService`

Defined in: [src/shared/agentConfigurationService.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/agentConfigurationService.ts#L30)

Gets the singleton instance of the agent configuration service.

#### Returns

`AgentConfigurationService`

Active singleton service instance.
