[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/analyticsDashboard](../README.md) / createStandardReport

# Function: createStandardReport()

> **createStandardReport**(`summary`, `startDate`, `endDate`): `string`

Defined in: [src/shared/analyticsDashboard.ts:341](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/shared/analyticsDashboard.ts#L341)

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
