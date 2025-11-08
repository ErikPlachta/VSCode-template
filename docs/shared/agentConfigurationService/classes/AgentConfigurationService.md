---
title: Agent Configuration Service
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---

[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

---

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentConfigurationService](../README.md) / AgentConfigurationService

# Class: AgentConfigurationService

Defined in: [src/shared/agentConfigurationService.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L15)

Service for managing agent configurations and metadata.

## Methods

### getAgentCapabilities()

> **getAgentCapabilities**(`agentId`): `Promise`\<`string`[]\>

Defined in: [src/shared/agentConfigurationService.ts:152](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L152)

Gets the capabilities for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<`string`[]\>

- Array of capability strings.

---

### getAgentDefinition()

> **getAgentDefinition**(`agentId`): `Promise`\<[`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>

Defined in: [src/shared/agentConfigurationService.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L55)

Gets the agent definition for the specified agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<[`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>

- The agent definition.

#### Throws

- Error if agent not found.

---

### getAgentDisplayName()

> **getAgentDisplayName**(`agentId`): `Promise`\<`string`\>

Defined in: [src/shared/agentConfigurationService.ts:141](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L141)

Gets the display name for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<`string`\>

- The display name.

---

### getAgentsWithCapability()

> **getAgentsWithCapability**(`capability`): `Promise`\<[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]\>

Defined in: [src/shared/agentConfigurationService.ts:180](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L180)

Gets agents that have a specific capability.

#### Parameters

##### capability

`string`

The capability to search for.

#### Returns

`Promise`\<[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]\>

- Promise resolving to array of agent identifiers.

---

### getAllAgentDefinitions()

> **getAllAgentDefinitions**(): `Promise`\<`Record`\<`string`, [`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>\>

Defined in: [src/shared/agentConfigurationService.ts:95](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L95)

Gets all agent definitions.

#### Returns

`Promise`\<`Record`\<`string`, [`AgentDefinition`](../../../types/applicationConfig/interfaces/AgentDefinition.md)\>\>

- Promise resolving to map of agent definitions.

---

### getApplicationFacingInfo()

> **getApplicationFacingInfo**(`agentId`): `Promise`\<\{ `dependencies?`: `string`[]; `errorHandling?`: \{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \}; `monitoring?`: \{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \}; `performance?`: \{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \}; `technicalDescription?`: `string`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L128)

Gets application-facing information for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<\{ `dependencies?`: `string`[]; `errorHandling?`: \{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \}; `monitoring?`: \{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \}; `performance?`: \{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \}; `technicalDescription?`: `string`; \} \| `null` \| `undefined`\>

- Application-facing metadata or null if not available.

---

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(`agentId`): `Promise`\<\{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:257](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L257)

Gets error handling configuration for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<\{ `fallbackAgent?`: `string`; `maxRetries?`: `number`; `retryStrategy?`: `"none"` \| `"fixed"` \| `"exponential"`; \} \| `null` \| `undefined`\>

- Error handling configuration or null if not available.

---

### getExampleQueries()

> **getExampleQueries**(`agentId`): `Promise`\<`string`[]\>

Defined in: [src/shared/agentConfigurationService.ts:216](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L216)

Gets example queries for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<`string`[]\>

- Array of example query strings.

---

### getFriendlyDescription()

> **getFriendlyDescription**(`agentId`): `Promise`\<`string`\>

Defined in: [src/shared/agentConfigurationService.ts:203](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L203)

Gets friendly description for user interfaces.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<`string`\>

- User-friendly description or fallback to technical description.

---

### getMonitoringConfig()

> **getMonitoringConfig**(`agentId`): `Promise`\<\{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:227](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L227)

Gets monitoring configuration for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<\{ `alertThresholds?`: `Record`\<`string`, `number`\>; `healthCheckEndpoint?`: `string`; `metricsToTrack?`: `string`[]; \} \| `null` \| `undefined`\>

- Monitoring configuration or null if not available.

---

### getPerformanceConfig()

> **getPerformanceConfig**(`agentId`): `Promise`\<\{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:242](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L242)

Gets performance characteristics for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<\{ `complexity?`: `"high"` \| `"medium"` \| `"low"`; `expectedResponseTime?`: `number`; `memoryUsage?`: `string`; \} \| `null` \| `undefined`\>

- Performance configuration or null if not available.

---

### getUserFacingInfo()

> **getUserFacingInfo**(`agentId`): `Promise`\<\{ `exampleQueries?`: `string`[]; `friendlyDescription?`: `string`; `helpText?`: `string`; `useWhen?`: `string`[]; \} \| `null` \| `undefined`\>

Defined in: [src/shared/agentConfigurationService.ts:115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L115)

Gets user-facing information for an agent.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

#### Returns

`Promise`\<\{ `exampleQueries?`: `string`[]; `friendlyDescription?`: `string`; `helpText?`: `string`; `useWhen?`: `string`[]; \} \| `null` \| `undefined`\>

- User-facing metadata or null if not available.

---

### hasCapability()

> **hasCapability**(`agentId`, `capability`): `Promise`\<`boolean`\>

Defined in: [src/shared/agentConfigurationService.ts:166](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L166)

Checks if an agent has a specific capability.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

The agent identifier.

##### capability

`string`

The capability to check.

#### Returns

`Promise`\<`boolean`\>

- Promise resolving to true if agent has the capability.

---

### reloadConfiguration()

> **reloadConfiguration**(): `Promise`\<`void`\>

Defined in: [src/shared/agentConfigurationService.ts:269](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L269)

Reloads the configuration from disk.

#### Returns

`Promise`\<`void`\>

---

### getInstance()

> `static` **getInstance**(): `AgentConfigurationService`

Defined in: [src/shared/agentConfigurationService.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigurationService.ts#L29)

Gets the singleton instance of the agent configuration service.

#### Returns

`AgentConfigurationService`

- The singleton instance.

## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
