---
title: Report Options
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsDashboard](../README.md) / ReportOptions

# Interface: ReportOptions

Defined in: [src/shared/analyticsDashboard.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L20)

Report generation options.

## Properties

### format

> **format**: `"markdown"` \| `"json"` \| `"csv"`

Defined in: [src/shared/analyticsDashboard.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L26)

Format for the report output.

---

### includeDetails

> **includeDetails**: `boolean`

Defined in: [src/shared/analyticsDashboard.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L24)

Include detailed statistics.

---

### period

> **period**: `object`

Defined in: [src/shared/analyticsDashboard.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L28)

Time period for the report.

#### end

> **end**: `Date`

#### start

> **start**: `Date`

---

### sections

> **sections**: [`ReportSection`](../enumerations/ReportSection.md)[]

Defined in: [src/shared/analyticsDashboard.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsDashboard.ts#L22)

Sections to include in the report.

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
