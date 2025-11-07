[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / agents/dataAgent

# Module: agents/dataAgent

**`Fileoverview`**

High-level data agent that reasons about the relationships
between business categories and produces insights that orchestration logic
can feed to other MCP tools.

## Table of contents

### Classes

- [DataAgent](../classes/agents_dataAgent.DataAgent.md)

### Interfaces

- [CategoryToolkit](../interfaces/agents_dataAgent.CategoryToolkit.md)
- [CrossTopicConnection](../interfaces/agents_dataAgent.CrossTopicConnection.md)
- [ExplorationPlan](../interfaces/agents_dataAgent.ExplorationPlan.md)
- [ExplorationStep](../interfaces/agents_dataAgent.ExplorationStep.md)
- [TopicConnections](../interfaces/agents_dataAgent.TopicConnections.md)
- [TopicOverview](../interfaces/agents_dataAgent.TopicOverview.md)
- [TopicSearchResult](../interfaces/agents_dataAgent.TopicSearchResult.md)

### Functions

- [createDataAgent](agents_dataAgent.md#createdataagent)

## Functions

### createDataAgent

▸ **createDataAgent**(): [`DataAgent`](../classes/agents_dataAgent.DataAgent.md)

Factory function that creates a [DataAgent](../classes/agents_dataAgent.DataAgent.md) with default collaborators.

#### Returns

[`DataAgent`](../classes/agents_dataAgent.DataAgent.md)

Freshly constructed data agent.

**`Example`**

```ts
import { createDataAgent } from "./agents/dataAgent";
const agent = createDataAgent();
```

#### Defined in

[src/agents/dataAgent.ts:431](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L431)
