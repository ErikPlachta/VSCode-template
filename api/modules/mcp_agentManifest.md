[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcp/agentManifest

# Module: mcp/agentManifest

## Table of contents

### Interfaces

- [AgentCapabilityMetadata](../interfaces/mcp_agentManifest.AgentCapabilityMetadata.md)

### Variables

- [agentManifest](mcp_agentManifest.md#agentmanifest)

### Functions

- [getAgentMetadata](mcp_agentManifest.md#getagentmetadata)
- [listAgentCapabilities](mcp_agentManifest.md#listagentcapabilities)

## Variables

### agentManifest

• `Const` **agentManifest**: `Record`\<[`AgentIdentifier`](mcp_agentProfiles.md#agentidentifier), [`AgentCapabilityMetadata`](../interfaces/mcp_agentManifest.AgentCapabilityMetadata.md)\>

Manifest describing the capabilities of every agent.

#### Defined in

[src/mcp/agentManifest.ts:30](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L30)

## Functions

### getAgentMetadata

▸ **getAgentMetadata**(`agentId`): [`AgentCapabilityMetadata`](../interfaces/mcp_agentManifest.AgentCapabilityMetadata.md)

Retrieve manifest metadata for a given agent identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `agentId` | [`AgentIdentifier`](mcp_agentProfiles.md#agentidentifier) |

#### Returns

[`AgentCapabilityMetadata`](../interfaces/mcp_agentManifest.AgentCapabilityMetadata.md)

#### Defined in

[src/mcp/agentManifest.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L52)

___

### listAgentCapabilities

▸ **listAgentCapabilities**(): [`AgentCapabilityMetadata`](../interfaces/mcp_agentManifest.AgentCapabilityMetadata.md)[]

Return all agent capability entries.

#### Returns

[`AgentCapabilityMetadata`](../interfaces/mcp_agentManifest.AgentCapabilityMetadata.md)[]

#### Defined in

[src/mcp/agentManifest.ts:63](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L63)
