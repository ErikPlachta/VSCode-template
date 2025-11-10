[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsDashboard](../README.md) / createStandardReport

# Function: createStandardReport()

> **createStandardReport**(`summary`, `startDate`, `endDate`): `string`

Defined in: [src/shared/analyticsDashboard.ts:341](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/analyticsDashboard.ts#L341)

Create a standard markdown analytics report for a given date range.

## Parameters

### summary

[`UsageAnalyticsSummary`](../../agentAnalytics/interfaces/UsageAnalyticsSummary.md)

Aggregated usage analytics summary.

### startDate

`Date`

Start of reporting period.

### endDate

`Date`

End of reporting period.

## Returns

`string`

Markdown report string.
