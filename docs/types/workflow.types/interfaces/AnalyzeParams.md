[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/workflow.types](../README.md) / AnalyzeParams

# Interface: AnalyzeParams

Defined in: [src/types/workflow.types.ts:415](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L415)

Parameters for DataAgent.analyzeData()

Accepts data from previous action or explicit dataset

## Properties

### analysisType?

> `optional` **analysisType**: `"correlation"` \| `"trend"` \| `"summary"` \| `"distribution"`

Defined in: [src/types/workflow.types.ts:420](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L420)

Type of analysis to perform

***

### data?

> `optional` **data**: `unknown`[]

Defined in: [src/types/workflow.types.ts:417](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L417)

Data to analyze. Can come from dependency resolution

***

### fields?

> `optional` **fields**: `string`[]

Defined in: [src/types/workflow.types.ts:423](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/workflow.types.ts#L423)

Fields to analyze. If undefined, analyzes all numeric/categorical fields
