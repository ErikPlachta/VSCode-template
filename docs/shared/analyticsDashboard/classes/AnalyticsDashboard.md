[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/analyticsDashboard](../README.md) / AnalyticsDashboard

# Class: AnalyticsDashboard

Defined in: [src/shared/analyticsDashboard.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/analyticsDashboard.ts#L38)

Analytics dashboard for generating usage reports and insights.

## Constructors

### Constructor

> **new AnalyticsDashboard**(): `AnalyticsDashboard`

#### Returns

`AnalyticsDashboard`

## Methods

### generateRecommendations()

> **generateRecommendations**(`summary`): `string`[]

Defined in: [src/shared/analyticsDashboard.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/analyticsDashboard.ts#L69)

Generates performance recommendations based on analytics data.

#### Parameters

##### summary

[`UsageAnalyticsSummary`](../../agentAnalytics/interfaces/UsageAnalyticsSummary.md)

summary parameter.

#### Returns

`string`[]

- TODO: describe return value.

***

### generateReport()

> **generateReport**(`summary`, `_options`): `string`

Defined in: [src/shared/analyticsDashboard.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/analyticsDashboard.ts#L47)

Generates a comprehensive analytics report.

#### Parameters

##### summary

[`UsageAnalyticsSummary`](../../agentAnalytics/interfaces/UsageAnalyticsSummary.md)

Aggregated usage analytics summary.

##### \_options

[`ReportOptions`](../interfaces/ReportOptions.md)

Report generation options (format & sections).

#### Returns

`string`

Report content rendered in the requested format.

#### Throws

If an unsupported format is requested.
