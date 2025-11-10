[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryConfig

# Interface: CategoryConfig

Defined in: src/types/userContext.types.ts:53

Category configuration (JSON-serializable subset of BusinessCategory)
This interface defines the structure for category.json files.

## Properties

### aliases

> **aliases**: `string`[]

Defined in: src/types/userContext.types.ts:61

Alternative names/aliases for this category

***

### config

> **config**: `object`

Defined in: src/types/userContext.types.ts:63

Configuration details

#### access

> **access**: `string`

Access control information

#### orchestration

> **orchestration**: [`CategoryOrchestrationConfig`](CategoryOrchestrationConfig.md)

Orchestration configuration for agents

#### primaryKeys

> **primaryKeys**: `string`[]

Primary key fields used for identification

#### purpose

> **purpose**: `string`

Purpose/mission statement for this category

#### requirements?

> `optional` **requirements**: [`CategoryRequirements`](CategoryRequirements.md)

Optional requirements and constraints

#### updateCadence

> **updateCadence**: `string`

How often this data is updated

***

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:59

Description of what this category contains

***

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:55

Unique identifier for this category

***

### name

> **name**: `string`

Defined in: src/types/userContext.types.ts:57

Human-readable name
