[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcp/agentManifest](../modules/mcp_agentManifest.md) / AgentCapabilityMetadata

# Interface: AgentCapabilityMetadata

[mcp/agentManifest](../modules/mcp_agentManifest.md).AgentCapabilityMetadata

Description of an agent's shared responsibilities and boundaries.

## Table of contents

### Properties

- [dependsOn](mcp_agentManifest.AgentCapabilityMetadata.md#dependson)
- [description](mcp_agentManifest.AgentCapabilityMetadata.md#description)
- [escalateWhen](mcp_agentManifest.AgentCapabilityMetadata.md#escalatewhen)
- [id](mcp_agentManifest.AgentCapabilityMetadata.md#id)
- [primarySignals](mcp_agentManifest.AgentCapabilityMetadata.md#primarysignals)
- [title](mcp_agentManifest.AgentCapabilityMetadata.md#title)

## Properties

### dependsOn

• `Optional` **dependsOn**: [`AgentIdentifier`](../modules/mcp_agentProfiles.md#agentidentifier)[]

Downstream agents or services that this agent commonly depends on.

#### Defined in

[src/mcp/agentManifest.ts:24](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L24)

___

### description

• **description**: `string`

Summary of what the agent is responsible for.

#### Defined in

[src/mcp/agentManifest.ts:18](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L18)

___

### escalateWhen

• **escalateWhen**: `string`[]

Situations where the agent must escalate to another party.

#### Defined in

[src/mcp/agentManifest.ts:22](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L22)

___

### id

• **id**: [`AgentIdentifier`](../modules/mcp_agentProfiles.md#agentidentifier)

Stable identifier that matches orchestrator routing names.

#### Defined in

[src/mcp/agentManifest.ts:14](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L14)

___

### primarySignals

• **primarySignals**: `string`[]

Signals that strongly suggest this agent should be invoked.

#### Defined in

[src/mcp/agentManifest.ts:20](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L20)

___

### title

• **title**: `string`

Human readable agent name.

#### Defined in

[src/mcp/agentManifest.ts:16](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/mcp/agentManifest.ts#L16)
