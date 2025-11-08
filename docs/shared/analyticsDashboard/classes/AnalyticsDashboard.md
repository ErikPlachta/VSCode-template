[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsDashboard](../README.md) / AnalyticsDashboard

# Class: AnalyticsDashboard

Defined in: [src/shared/analyticsDashboard.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/analyticsDashboard.ts#L38)

Analytics dashboard for generating usage reports and insights.

## Constructors

### Constructor

> **new AnalyticsDashboard**(): `AnalyticsDashboard`

#### Returns

`AnalyticsDashboard`

## Methods

### generateRecommendations()

> **generateRecommendations**(`summary`): `string`[]

Defined in: [src/shared/analyticsDashboard.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/analyticsDashboard.ts#L69)

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

> **generateReport**(`summary`, `options`): `string`

Defined in: [src/shared/analyticsDashboard.ts:47](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/shared/analyticsDashboard.ts#L47)

Generates a comprehensive analytics report.

#### Parameters

##### summary

[`UsageAnalyticsSummary`](../../agentAnalytics/interfaces/UsageAnalyticsSummary.md)

summary parameter.

##### options

[`ReportOptions`](../interfaces/ReportOptions.md)

options parameter.

#### Returns

`string`

- TODO: describe return value.

#### Throws

- May throw an error.
