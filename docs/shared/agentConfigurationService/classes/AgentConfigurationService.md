[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentConfigurationService](../README.md) / AgentConfigurationService

# Class: AgentConfigurationService

Defined in: [src/shared/agentConfigurationService.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L15)

Service for managing agent configurations and metadata.

## Methods

### getAgentCapabilities()

> **getAgentCapabilities**(`agentId`): `Promise`\<`string`[]\>

Defined in: [src/shared/agentConfigurationService.ts:159](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L159)

Gets the capabilities for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<`string`[]\>

- TODO: describe return value.

***

### getAgentDefinition()

> **getAgentDefinition**(`agentId`): `Promise`\<[`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>

Defined in: [src/shared/agentConfigurationService.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L57)

Gets the agent definition for the specified agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<[`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>

- TODO: describe return value.

#### Throws

- May throw an error.

***

### getAgentDisplayName()

> **getAgentDisplayName**(`agentId`): `Promise`\<`string`\>

Defined in: [src/shared/agentConfigurationService.ts:148](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L148)

Gets the display name for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<`string`\>

- TODO: describe return value.

***

### getAgentsWithCapability()

> **getAgentsWithCapability**(`capability`): `Promise`\<[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]\>

Defined in: [src/shared/agentConfigurationService.ts:187](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L187)

Gets agents that have a specific capability.

#### Parameters

##### capability

`string`

capability parameter.

#### Returns

`Promise`\<[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]\>

- TODO: describe return value.

***

### getAllAgentDefinitions()

> **getAllAgentDefinitions**(): `Promise`\<`Record`\<`string`, [`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>\>

Defined in: [src/shared/agentConfigurationService.ts:101](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L101)

Gets all agent definitions.

#### Returns

`Promise`\<`Record`\<`string`, [`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>\>

- TODO: describe return value.

***

### getApplicationFacingInfo()

> **getApplicationFacingInfo**(`agentId`): `Promise`\<\{ `dependencies?`: `string`[]; `errorHandling?`: \{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \}; `monitoring?`: \{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \}; `performance?`: \{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \}; `technicalDescription?`: `string`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:135](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L135)

Gets application-facing information for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<\{ `dependencies?`: `string`[]; `errorHandling?`: \{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \}; `monitoring?`: \{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \}; `performance?`: \{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \}; `technicalDescription?`: `string`; \} \| `null` \| `undefined`\>

- TODO: describe return value.

***

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(`agentId`): `Promise`\<\{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:270](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L270)

Gets error handling configuration for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<\{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \} \| `null` \| `undefined`\>

- TODO: describe return value.

***

### getExampleQueries()

> **getExampleQueries**(`agentId`): `Promise`\<`string`[]\>

Defined in: [src/shared/agentConfigurationService.ts:223](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L223)

Gets example queries for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<`string`[]\>

- TODO: describe return value.

***

### getFriendlyDescription()

> **getFriendlyDescription**(`agentId`): `Promise`\<`string`\>

Defined in: [src/shared/agentConfigurationService.ts:210](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L210)

Gets friendly description for user interfaces.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<`string`\>

- TODO: describe return value.

***

### getMonitoringConfig()

> **getMonitoringConfig**(`agentId`): `Promise`\<\{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:236](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L236)

Gets monitoring configuration for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<\{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \} \| `null` \| `undefined`\>

- TODO: describe return value.

***

### getPerformanceConfig()

> **getPerformanceConfig**(`agentId`): `Promise`\<\{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:253](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L253)

Gets performance characteristics for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<\{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \} \| `null` \| `undefined`\>

- TODO: describe return value.

***

### getUserFacingInfo()

> **getUserFacingInfo**(`agentId`): `Promise`\<\{ `exampleQueries?`: `string`[]; `friendlyDescription?`: `string`; `helpText?`: `string`; `useWhen?`: `string`[]; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:122](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L122)

Gets user-facing information for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<\{ `exampleQueries?`: `string`[]; `friendlyDescription?`: `string`; `helpText?`: `string`; `useWhen?`: `string`[]; \} \| `null` \| `undefined`\>

- TODO: describe return value.

***

### hasCapability()

> **hasCapability**(`agentId`, `capability`): `Promise`\<`boolean`\>

Defined in: [src/shared/agentConfigurationService.ts:173](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L173)

Checks if an agent has a specific capability.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

##### capability

`string`

capability parameter.

#### Returns

`Promise`\<`boolean`\>

- TODO: describe return value.

***

### reloadConfiguration()

> **reloadConfiguration**(): `Promise`\<`void`\>

Defined in: [src/shared/agentConfigurationService.ts:284](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L284)

Reloads the configuration from disk.

#### Returns

`Promise`\<`void`\>

- TODO: describe return value.

***

### getInstance()

> `static` **getInstance**(): `AgentConfigurationService`

Defined in: [src/shared/agentConfigurationService.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/agentConfigurationService.ts#L31)

Gets the singleton instance of the agent configuration service.

#### Returns

`AgentConfigurationService`

- TODO: describe return value.
