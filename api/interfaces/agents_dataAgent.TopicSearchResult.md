[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / TopicSearchResult

# Interface: TopicSearchResult

[agents/dataAgent](../modules/agents_dataAgent.md).TopicSearchResult

Result returned when searching the dataset for a keyword.

## Table of contents

### Properties

- [categoryId](agents_dataAgent.TopicSearchResult.md#categoryid)
- [displayName](agents_dataAgent.TopicSearchResult.md#displayname)
- [matchingFields](agents_dataAgent.TopicSearchResult.md#matchingfields)
- [recordId](agents_dataAgent.TopicSearchResult.md#recordid)

## Properties

### categoryId

• **categoryId**: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)

Category that contains the match.

#### Defined in

[src/agents/dataAgent.ts:114](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L114)

___

### displayName

• **displayName**: `string`

Friendly name rendered in UI surfaces.

#### Defined in

[src/agents/dataAgent.ts:116](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L116)

___

### matchingFields

• **matchingFields**: `string`[]

Fields that matched the search term.

#### Defined in

[src/agents/dataAgent.ts:117](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L117)

___

### recordId

• **recordId**: `string`

Identifier of the matching record.

#### Defined in

[src/agents/dataAgent.ts:115](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/dataAgent.ts#L115)
