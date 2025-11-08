---
title: Analytics Dashboard
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

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsDashboard](../README.md) / AnalyticsDashboard

# Class: AnalyticsDashboard

Defined in: [src/shared/analyticsDashboard.ts:37](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L37)

Analytics dashboard for generating usage reports and insights.

## Constructors

### Constructor

> **new AnalyticsDashboard**(): `AnalyticsDashboard`

#### Returns

`AnalyticsDashboard`

## Methods

### generateRecommendations()

> **generateRecommendations**(`summary`): `string`[]

Defined in: [src/shared/analyticsDashboard.ts:67](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L67)

Generates performance recommendations based on analytics data.

#### Parameters

##### summary

[`UsageAnalyticsSummary`](../../agentAnalytics/interfaces/UsageAnalyticsSummary.md)

#### Returns

`string`[]

- Array of performance recommendations.

***

### generateReport()

> **generateReport**(`summary`, `options`): `string`

Defined in: [src/shared/analyticsDashboard.ts:45](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L45)

Generates a comprehensive analytics report.

#### Parameters

##### summary

[`UsageAnalyticsSummary`](../../agentAnalytics/interfaces/UsageAnalyticsSummary.md)

##### options

[`ReportOptions`](../interfaces/ReportOptions.md)

#### Returns

`string`

- Generated report content.


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
