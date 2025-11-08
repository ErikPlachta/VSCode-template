---
title: Relevant Data Manager Interface
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/interfaces](../README.md) / RelevantDataManagerInterface

# Interface: RelevantDataManagerInterface

Defined in: [src/agent/interfaces.ts:153](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L153)

## Methods

### getBusinessDataCatalogue()

> **getBusinessDataCatalogue**(): [`BusinessDataCatalogue`](BusinessDataCatalogue.md)

Defined in: [src/agent/interfaces.ts:154](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L154)

#### Returns

[`BusinessDataCatalogue`](BusinessDataCatalogue.md)

---

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`CategoryInfo`](CategoryInfo.md)

Defined in: [src/agent/interfaces.ts:155](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L155)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategoryInfo`](CategoryInfo.md)

---

### getCategorySchema()

> **getCategorySchema**(`categoryId`): [`CategorySchema`](CategorySchema.md)[]

Defined in: [src/agent/interfaces.ts:156](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L156)

#### Parameters

##### categoryId

`string`

#### Returns

[`CategorySchema`](CategorySchema.md)[]

---

### getRelationships()

> **getRelationships**(`categoryId`): [`RelationshipDescription`](RelationshipDescription.md)[]

Defined in: [src/agent/interfaces.ts:161](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L161)

#### Parameters

##### categoryId

`string`

#### Returns

[`RelationshipDescription`](RelationshipDescription.md)[]

---

### validateCategoryData()

> **validateCategoryData**(`categoryId`, `records`): [`ValidationResult`](ValidationResult.md)

Defined in: [src/agent/interfaces.ts:157](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L157)

#### Parameters

##### categoryId

`string`

##### records

[`CategoryRecord`](CategoryRecord.md)[]

#### Returns

[`ValidationResult`](ValidationResult.md)

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
