[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / UsageAnalyticsSummary

# Interface: UsageAnalyticsSummary

Defined in: [src/shared/agentAnalytics.ts:77](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L77)

Usage analytics summary across all agents.

## Properties

### agentStats

> **agentStats**: [`AgentUsageStats`](AgentUsageStats.md)[]

Defined in: [src/shared/agentAnalytics.ts:87](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L87)

Per-agent statistics.

***

### averageResponseTime

> **averageResponseTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:91](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L91)

Average response time across all agents.

***

### highestErrorRateAgent

> **highestErrorRateAgent**: `string`

Defined in: [src/shared/agentAnalytics.ts:95](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L95)

Agent with highest error rate.

***

### mostUsedAgent

> **mostUsedAgent**: `string`

Defined in: [src/shared/agentAnalytics.ts:93](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L93)

Most frequently used agent.

***

### overallSuccessRate

> **overallSuccessRate**: `number`

Defined in: [src/shared/agentAnalytics.ts:89](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L89)

Overall success rate across all agents.

***

### periodEnd

> **periodEnd**: `Date`

Defined in: [src/shared/agentAnalytics.ts:85](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L85)

End of time period covered.

***

### periodStart

> **periodStart**: `Date`

Defined in: [src/shared/agentAnalytics.ts:83](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L83)

Time period covered by the summary.

***

### timestamp

> **timestamp**: `Date`

Defined in: [src/shared/agentAnalytics.ts:79](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L79)

Summary generation timestamp.

***

### totalEvents

> **totalEvents**: `number`

Defined in: [src/shared/agentAnalytics.ts:81](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/shared/agentAnalytics.ts#L81)

Total events processed.
