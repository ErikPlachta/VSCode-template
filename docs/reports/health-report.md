---
title: Repository Compliance Health Report
summary: Automated validation status for documentation, schemas, and TypeScript types.
roles: ['quality-assurance', 'platform-engineering']
associations: ['repository-health-agent']
hierarchy: ['governance', 'quality', 'health-report']
generatedAt: 2025-11-08T03:48:57.436Z
---

# Repository Compliance Health Report

## Summary

- Generated at: 2025-11-08T03:48:57.436Z
- Overall status: FAILED

## Responsibilities

- Execute TypeScript linting to enforce doc coverage.
- Validate JSON schemas to maintain data integrity.
- Audit Markdown metadata for hierarchical governance.

## Inputs

- application.config.ts (preferred) or legacy mcp.config.json for configuration directives.
- JSON Schemas under the schemas directory.
- Repository TypeScript and Markdown sources.

## Outputs

- Compliance status for each enforcement area.
- Aggregated diagnostics for failing artifacts.
- Markdown report archived for auditability.

## Error Handling

- Exits with non-zero status when any check fails.
- Surfaces Ajv and ESLint diagnostics verbosely.
- Guides maintainers to remediation documentation.

## Examples

- npm run lint to enforce doc blocks prior to commit.
- npm run lint:json to vet dataset updates.
- npm run lint:docs to confirm metadata completeness.

## Check Results

### TypeScript ESLint

- Status: FAILED

#### Messages
- [0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\clarificationAgent\agent.config.ts[24m[0m
[0m  [2m1:2[22m  [31merror[39m  @packageDocumentation should be at the beginning of the file  [2mjsdoc/require-file-overview[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\clarificationAgent\config.ts[24m[0m
[0m   [2m22:14[22m  [31merror[39m    Missing JSDoc comment               [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m38:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m41:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m41:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m51:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m54:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m54:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m67:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m70:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m70:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m83:1[22m   [33mwarning[39m  Missing JSDoc @returns type         [2mjsdoc/require-returns-type[22m[0m
[0m   [2m85:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m85:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m97:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m100:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m100:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m112:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m115:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m115:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m127:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m134:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m141:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m148:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m155:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m162:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m169:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m176:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m183:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m190:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m197:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m204:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m211:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m226:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m241:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m244:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m244:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m255:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m262:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m269:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m272:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m272:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m285:3[22m   [31merror[39m    Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m288:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m288:3[22m   [31merror[39m    Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\clarificationAgent\index.ts[24m[0m
[0m  [2m54:1[22m  [33mwarning[39m  Missing JSDoc @param "knowledgeBase" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m64:1[22m  [33mwarning[39m  Missing JSDoc @param "documents" type      [2mjsdoc/require-param-type[22m[0m
[0m  [2m75:1[22m  [33mwarning[39m  Missing JSDoc @param "input" type          [2mjsdoc/require-param-type[22m[0m
[0m  [2m76:1[22m  [33mwarning[39m  Missing JSDoc @returns type                [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\dataAgent\agent.config.ts[24m[0m
[0m  [2m1:2[22m  [31merror[39m  @packageDocumentation should be at the beginning of the file  [2mjsdoc/require-file-overview[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\dataAgent\config.ts[24m[0m
[0m   [2m22:14[22m  [31merror[39m  Missing JSDoc comment               [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m37:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m40:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m40:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m50:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m53:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m53:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m64:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m67:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m67:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m77:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m80:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m80:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m90:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m93:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m93:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m105:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m108:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m108:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m121:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m124:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m124:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m137:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m144:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m151:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m158:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m165:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m172:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m179:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m186:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m193:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m200:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m207:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m214:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m221:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m237:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m252:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m268:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m275:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m278:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m278:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m290:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m293:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m293:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\dataAgent\index.ts[24m[0m
[0m   [2m15:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m17:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m22:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m27:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m34:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m41:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m55:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m66:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m73:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m80:1[22m   [31merror[39m    Missing JSDoc comment                                                      [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m113:1[22m   [33mwarning[39m  Missing JSDoc @param "input" type                                          [2mjsdoc/require-param-type[22m[0m
[0m  [2m114:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m119:13[22m  [31merror[39m    'qualityConfig' is assigned a value but never used                         [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m158:1[22m   [33mwarning[39m  Missing JSDoc @param "categoryId" type                                     [2mjsdoc/require-param-type[22m[0m
[0m  [2m159:1[22m   [33mwarning[39m  Missing JSDoc @param "question" type                                       [2mjsdoc/require-param-type[22m[0m
[0m  [2m160:1[22m   [33mwarning[39m  Missing JSDoc @param "availableData" type                                  [2mjsdoc/require-param-type[22m[0m
[0m  [2m161:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m216:1[22m   [33mwarning[39m  Missing JSDoc @param "sourceData" type                                     [2mjsdoc/require-param-type[22m[0m
[0m  [2m217:1[22m   [33mwarning[39m  Missing JSDoc @param "targetData" type                                     [2mjsdoc/require-param-type[22m[0m
[0m  [2m218:1[22m   [33mwarning[39m  Missing JSDoc @param "relationship" type                                   [2mjsdoc/require-param-type[22m[0m
[0m  [2m219:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m247:1[22m   [33mwarning[39m  Missing JSDoc @param "keyword" type                                        [2mjsdoc/require-param-type[22m[0m
[0m  [2m248:1[22m   [33mwarning[39m  Missing JSDoc @param "data" type                                           [2mjsdoc/require-param-type[22m[0m
[0m  [2m249:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m283:3[22m   [31merror[39m    Missing JSDoc @param "categoryId" declaration                              [2mjsdoc/require-param[22m[0m
[0m  [2m286:1[22m   [33mwarning[39m  Missing JSDoc @param "records" type                                        [2mjsdoc/require-param-type[22m[0m
[0m  [2m287:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m322:3[22m   [31merror[39m    Missing JSDoc @param "categoryId" declaration                              [2mjsdoc/require-param[22m[0m
[0m  [2m325:1[22m   [33mwarning[39m  Missing JSDoc @param "records" type                                        [2mjsdoc/require-param-type[22m[0m
[0m  [2m326:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m343:29[22m  [31merror[39m    Do not access Object.prototype method 'hasOwnProperty' from target object  [2mno-prototype-builtins[22m[0m
[0m  [2m357:41[22m  [31merror[39m    Do not access Object.prototype method 'hasOwnProperty' from target object  [2mno-prototype-builtins[22m[0m
[0m  [2m369:1[22m   [33mwarning[39m  Missing JSDoc @param "relationships" type                                  [2mjsdoc/require-param-type[22m[0m
[0m  [2m370:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m392:1[22m   [33mwarning[39m  Missing JSDoc @param "record" type                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m393:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m407:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\databaseAgent\agent.config.ts[24m[0m
[0m  [2m1:2[22m  [31merror[39m  @packageDocumentation should be at the beginning of the file  [2mjsdoc/require-file-overview[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\databaseAgent\config.ts[24m[0m
[0m   [2m22:14[22m  [31merror[39m  Missing JSDoc comment                        [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m37:3[22m   [31merror[39m  Missing JSDoc @param "category" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m37:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m   [2m44:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m   [2m51:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m   [2m54:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m54:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m65:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m   [2m68:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m68:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m78:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m   [2m81:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m81:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m91:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m   [2m94:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m94:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m104:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m125:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m128:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m128:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m150:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m153:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m153:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m163:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m166:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m166:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m176:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m179:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m179:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m188:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m191:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m191:3[22m   [31merror[39m  Missing return type on function              [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m201:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m208:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m215:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m222:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m229:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m  [2m236:3[22m   [31merror[39m  Missing JSDoc @returns declaration           [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\databaseAgent\index.ts[24m[0m
[0m  [2m352:3[22m  [31merror[39m    Missing JSDoc @param "prefix" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m  [2m358:1[22m  [33mwarning[39m  Syntax error in namepath: [prefix]-                                                                [2mjsdoc/valid-types[22m[0m
[0m  [2m358:1[22m  [33mwarning[39m  Expected @param names to be "categoryId, criteria, prefix". Got "categoryId, criteria, [prefix]-"  [2mjsdoc/check-param-names[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\interfaces.ts[24m[0m
[0m   [2m10:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m12:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m25:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m32:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m39:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m55:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m62:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m76:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m87:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m94:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m102:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m125:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m130:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m137:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m144:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m153:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m172:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m179:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m184:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m189:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m199:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m205:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m218:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m224:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\orchestrator\config.ts[24m[0m
[0m   [2m22:14[22m  [31merror[39m  Missing JSDoc comment                          [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m37:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m   [2m44:3[22m   [31merror[39m  Missing JSDoc @param "intent" declaration      [2mjsdoc/require-param[22m[0m
[0m   [2m44:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m   [2m47:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m47:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m51:3[22m   [31merror[39m  Missing JSDoc @param "intent" declaration      [2mjsdoc/require-param[22m[0m
[0m   [2m51:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m   [2m58:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m   [2m66:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m   [2m69:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m69:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m79:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m   [2m86:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m   [2m89:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m89:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m99:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m  [2m113:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m  [2m130:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m  [2m140:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m  [2m143:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m143:3[22m   [31merror[39m  Missing return type on function                [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m174:3[22m   [31merror[39m  Missing JSDoc @param "configPath" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m174:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m  [2m188:13[22m  [31merror[39m  'path' is assigned a value but never used      [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m201:3[22m   [31merror[39m  Missing JSDoc @returns declaration             [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\orchestrator\index.ts[24m[0m
[0m   [2m45:27[22m  [31merror[39m    Unexpected any. Specify a different type                                  [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m48:21[22m  [31merror[39m    Unexpected any. Specify a different type                                  [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m50:14[22m  [31merror[39m    Missing JSDoc comment                                                     [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m60:3[22m   [31merror[39m    Missing JSDoc @param "configPath" declaration                             [2mjsdoc/require-param[22m[0m
[0m   [2m60:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m   [2m77:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m   [2m80:3[22m   [31merror[39m    Missing return type on function                                           [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m80:3[22m   [31merror[39m    Missing return type on function                                           [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m84:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m   [2m91:3[22m   [31merror[39m    Missing JSDoc @param "text" declaration                                   [2mjsdoc/require-param[22m[0m
[0m   [2m91:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m  [2m103:3[22m   [31merror[39m    Missing JSDoc @param "question" declaration                               [2mjsdoc/require-param[22m[0m
[0m  [2m103:3[22m   [31merror[39m    Missing JSDoc @param "intent" declaration                                 [2mjsdoc/require-param[22m[0m
[0m  [2m103:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m  [2m108:48[22m  [31merror[39m    'intent' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m119:3[22m   [31merror[39m    Missing JSDoc @param "questionOrInput" declaration                        [2mjsdoc/require-param[22m[0m
[0m  [2m119:3[22m   [31merror[39m    Missing JSDoc @param "context" declaration                                [2mjsdoc/require-param[22m[0m
[0m  [2m119:3[22m   [31merror[39m    Missing JSDoc @param "context.topic" declaration                          [2mjsdoc/require-param[22m[0m
[0m  [2m119:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m  [2m218:3[22m   [31merror[39m    Missing JSDoc @param "input" declaration                                  [2mjsdoc/require-param[22m[0m
[0m  [2m218:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m  [2m245:3[22m   [31merror[39m    Missing JSDoc @param "classification" declaration                         [2mjsdoc/require-param[22m[0m
[0m  [2m245:3[22m   [31merror[39m    Missing JSDoc @param "input" declaration                                  [2mjsdoc/require-param[22m[0m
[0m  [2m245:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m  [2m270:3[22m   [31merror[39m    Missing JSDoc @param "classification" declaration                         [2mjsdoc/require-param[22m[0m
[0m  [2m270:3[22m   [31merror[39m    Missing JSDoc @param "input" declaration                                  [2mjsdoc/require-param[22m[0m
[0m  [2m270:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m  [2m315:1[22m   [33mwarning[39m  Missing JSDoc @param "input" type                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m316:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                               [2mjsdoc/require-returns-type[22m[0m
[0m  [2m347:1[22m   [33mwarning[39m  Missing JSDoc @param "response" type                                      [2mjsdoc/require-param-type[22m[0m
[0m  [2m348:1[22m   [33mwarning[39m  Missing JSDoc @param "input" type                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m349:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                               [2mjsdoc/require-returns-type[22m[0m
[0m  [2m353:5[22m   [31merror[39m    'input' is defined but never used. Allowed unused args must match /^_/u   [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m375:41[22m  [31merror[39m    Unexpected any. Specify a different type                                  [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m387:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                        [2mjsdoc/require-returns[22m[0m
[0m  [2m390:3[22m   [31merror[39m    Missing return type on function                                           [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m390:3[22m   [31merror[39m    Missing return type on function                                           [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\relevantDataManagerAgent\agent.config.ts[24m[0m
[0m  [2m1:2[22m  [31merror[39m  @packageDocumentation should be at the beginning of the file  [2mjsdoc/require-file-overview[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\relevantDataManagerAgent\config.ts[24m[0m
[0m   [2m22:14[22m  [31merror[39m  Missing JSDoc comment               [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m40:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m43:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m43:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m53:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m56:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m56:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m66:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m69:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m69:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m79:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m82:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m82:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m96:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m   [2m99:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m   [2m99:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m118:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m121:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m121:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m135:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m138:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m138:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m150:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m157:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m164:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m171:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m178:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m185:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m200:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m213:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m227:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m234:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m241:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m248:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m255:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m267:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m282:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m289:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m296:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m303:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m310:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m317:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m324:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m331:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m334:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m334:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m  [2m348:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m351:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-function-return-type[22m[0m
[0m  [2m351:3[22m   [31merror[39m  Missing return type on function     [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\agent\relevantDataManagerAgent\index.ts[24m[0m
[0m   [2m170:1[22m   [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m185:1[22m   [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m340:1[22m   [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m344:1[22m   [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m492:1[22m   [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m498:14[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m524:14[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m541:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m550:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m550:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m550:3[22m   [31merror[39m    Missing JSDoc @throws declaration             [2mjsdoc/require-throws[22m[0m
[0m   [2m560:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m560:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m565:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m565:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m570:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m570:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m575:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m575:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m580:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m580:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m585:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m585:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m590:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m590:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m595:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m595:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m603:1[22m   [33mwarning[39m  Missing JSDoc @param "topicOrId" type         [2mjsdoc/require-param-type[22m[0m
[0m   [2m604:1[22m   [33mwarning[39m  Missing JSDoc @returns type                   [2mjsdoc/require-returns-type[22m[0m
[0m   [2m614:1[22m   [33mwarning[39m  Missing JSDoc @returns type                   [2mjsdoc/require-returns-type[22m[0m
[0m   [2m620:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m620:3[22m   [31merror[39m    Missing JSDoc @param "recordId" declaration   [2mjsdoc/require-param[22m[0m
[0m   [2m620:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m625:3[22m   [31merror[39m    Missing JSDoc @param "keyword" declaration    [2mjsdoc/require-param[22m[0m
[0m   [2m625:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m676:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m676:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m715:3[22m   [31merror[39m    Missing JSDoc @param "topicOrId" declaration  [2mjsdoc/require-param[22m[0m
[0m   [2m715:3[22m   [31merror[39m    Missing JSDoc @param "recordId" declaration   [2mjsdoc/require-param[22m[0m
[0m   [2m715:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m715:3[22m   [31merror[39m    Missing JSDoc @throws declaration             [2mjsdoc/require-throws[22m[0m
[0m   [2m744:3[22m   [31merror[39m    Missing JSDoc @returns declaration            [2mjsdoc/require-returns[22m[0m
[0m   [2m749:22[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m795:23[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m870:39[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m920:33[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m946:23[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m957:28[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m975:31[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m996:27[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1003:23[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1017:22[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1031:30[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1051:23[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1065:34[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1138:22[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1152:40[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1205:22[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1244:28[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1295:31[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1307:37[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1324:37[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1336:41[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1361:31[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1381:22[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1395:25[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1414:38[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1431:33[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1446:26[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1467:23[22m  [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m1481:8[22m   [31merror[39m    Missing JSDoc comment                         [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\extension\index.ts[24m[0m
[0m  [2m13:1[22m   [31merror[39m  Missing JSDoc @param "context" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m13:1[22m   [31merror[39m  Missing JSDoc @returns declaration          [2mjsdoc/require-returns[22m[0m
[0m  [2m37:18[22m  [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m57:52[22m  [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\extension\mcpCache.ts[24m[0m
[0m   [2m50:1[22m  [33mwarning[39m  @throws should have a type            [2mjsdoc/require-throws-type[22m[0m
[0m   [2m57:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m   [2m72:1[22m  [33mwarning[39m  @throws should have a type            [2mjsdoc/require-throws-type[22m[0m
[0m   [2m75:1[22m  [33mwarning[39m  Missing JSDoc @param "cacheDir" type  [2mjsdoc/require-param-type[22m[0m
[0m   [2m76:1[22m  [33mwarning[39m  Missing JSDoc @param "entry" type     [2mjsdoc/require-param-type[22m[0m
[0m   [2m77:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m   [2m89:1[22m  [33mwarning[39m  @throws should have a type            [2mjsdoc/require-throws-type[22m[0m
[0m   [2m93:1[22m  [33mwarning[39m  Missing JSDoc @param "cacheDir" type  [2mjsdoc/require-param-type[22m[0m
[0m   [2m94:1[22m  [33mwarning[39m  Missing JSDoc @param "entry" type     [2mjsdoc/require-param-type[22m[0m
[0m   [2m95:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m109:1[22m  [33mwarning[39m  @throws should have a type            [2mjsdoc/require-throws-type[22m[0m
[0m  [2m113:1[22m  [33mwarning[39m  Missing JSDoc @param "cacheDir" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m114:1[22m  [33mwarning[39m  Missing JSDoc @param "key" type       [2mjsdoc/require-param-type[22m[0m
[0m  [2m115:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m136:1[22m  [33mwarning[39m  @throws should have a type            [2mjsdoc/require-throws-type[22m[0m
[0m  [2m140:1[22m  [33mwarning[39m  Missing JSDoc @param "cacheDir" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m141:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m167:1[22m  [33mwarning[39m  @throws should have a type            [2mjsdoc/require-throws-type[22m[0m
[0m  [2m170:1[22m  [33mwarning[39m  Missing JSDoc @param "cacheDir" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m171:1[22m  [33mwarning[39m  Missing JSDoc @param "key" type       [2mjsdoc/require-param-type[22m[0m
[0m  [2m172:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m195:1[22m  [33mwarning[39m  Missing JSDoc @param "key" type       [2mjsdoc/require-param-type[22m[0m
[0m  [2m196:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\extension\mcpProvider.ts[24m[0m
[0m   [2m7:8[22m   [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m18:36[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\extension\mcpRegistration.ts[24m[0m
[0m  [2m14:1[22m  [31merror[39m  Missing JSDoc comment                    [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m36:1[22m  [31merror[39m  Missing JSDoc comment                    [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m50:1[22m  [31merror[39m  Missing JSDoc comment                    [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m59:1[22m  [31merror[39m  Missing JSDoc comment                    [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m66:1[22m  [31merror[39m  Missing JSDoc @param "opts" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m66:1[22m  [31merror[39m  Missing JSDoc @returns declaration       [2mjsdoc/require-returns[22m[0m
[0m  [2m88:1[22m  [31merror[39m  Missing JSDoc @param "id" declaration    [2mjsdoc/require-param[22m[0m
[0m  [2m88:1[22m  [31merror[39m  Missing JSDoc @returns declaration       [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\extension\mcpSync.ts[24m[0m
[0m  [2m20:3[22m  [31merror[39m    Missing JSDoc block description        [2mjsdoc/require-description[22m[0m
[0m  [2m21:1[22m  [33mwarning[39m  Missing JSDoc @param "message" type    [2mjsdoc/require-param-type[22m[0m
[0m  [2m22:1[22m  [33mwarning[39m  Missing JSDoc @param "cause" type      [2mjsdoc/require-param-type[22m[0m
[0m  [2m34:1[22m  [33mwarning[39m  Missing JSDoc @param "tool" type       [2mjsdoc/require-param-type[22m[0m
[0m  [2m35:1[22m  [33mwarning[39m  Missing JSDoc @returns type            [2mjsdoc/require-returns-type[22m[0m
[0m  [2m59:1[22m  [33mwarning[39m  @throws should have a type             [2mjsdoc/require-throws-type[22m[0m
[0m  [2m62:1[22m  [33mwarning[39m  Missing JSDoc @param "serverUrl" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m63:1[22m  [33mwarning[39m  Missing JSDoc @param "token" type      [2mjsdoc/require-param-type[22m[0m
[0m  [2m64:1[22m  [33mwarning[39m  Missing JSDoc @returns type            [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\extension\schemaPrompt.ts[24m[0m
[0m  [2m12:1[22m  [33mwarning[39m  Missing JSDoc @param "property" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m13:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m22:1[22m  [33mwarning[39m  @throws should have a type            [2mjsdoc/require-throws-type[22m[0m
[0m  [2m25:1[22m  [33mwarning[39m  Missing JSDoc @param "rawValue" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m26:1[22m  [33mwarning[39m  Missing JSDoc @param "property" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m27:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m69:1[22m  [33mwarning[39m  Missing JSDoc @param "tool" type      [2mjsdoc/require-param-type[22m[0m
[0m  [2m70:1[22m  [33mwarning[39m  Missing JSDoc @returns type           [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\mcp\config\agentManifest.ts[24m[0m
[0m  [2m58:1[22m  [31merror[39m  Missing JSDoc @param "agentId" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m58:1[22m  [31merror[39m  Missing JSDoc @returns declaration          [2mjsdoc/require-returns[22m[0m
[0m  [2m58:1[22m  [31merror[39m  Missing JSDoc @throws declaration           [2mjsdoc/require-throws[22m[0m
[0m  [2m71:1[22m  [31merror[39m  Missing JSDoc @returns declaration          [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\mcp\config\unifiedAgentConfig.ts[24m[0m
[0m  [2m455:1[22m   [31merror[39m  Missing JSDoc @param "agentId" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m455:1[22m   [31merror[39m  Missing JSDoc @returns declaration          [2mjsdoc/require-returns[22m[0m
[0m  [2m464:36[22m  [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m470:32[22m  [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m474:31[22m  [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m490:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m491:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\mcp\knowledgeBase.ts[24m[0m
[0m   [2m5:1[22m   [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m12:1[22m   [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m19:8[22m   [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m22:16[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m26:17[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m30:8[22m   [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m56:1[22m   [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\mcp\prompts\index.ts[24m[0m
[0m   [2m9:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m16:8[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m48:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m55:8[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m79:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m84:8[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\mcp\schemaUtils.ts[24m[0m
[0m  [2m12:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m18:1[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m23:8[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m27:8[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m41:8[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m61:8[22m  [31merror[39m  Missing JSDoc comment  [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\mcp\telemetry.ts[24m[0m
[0m   [2m5:1[22m  [31merror[39m  Missing JSDoc comment                      [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m16:1[22m  [31merror[39m  Missing JSDoc comment                      [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m20:1[22m  [31merror[39m  Missing JSDoc comment                      [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m21:6[22m  [31merror[39m  Missing JSDoc comment                      [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m34:1[22m  [31merror[39m  Missing JSDoc comment                      [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m38:1[22m  [31merror[39m  Missing JSDoc @param "agent" declaration   [2mjsdoc/require-param[22m[0m
[0m  [2m38:1[22m  [31merror[39m  Missing JSDoc @param "logger" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m38:1[22m  [31merror[39m  Missing JSDoc @returns declaration         [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\server\embedded.ts[24m[0m
[0m  [2m14:1[22m  [31merror[39m    Missing JSDoc @param "port" declaration   [2mjsdoc/require-param[22m[0m
[0m  [2m15:1[22m  [31merror[39m    Expected 1 lines after block description  [2mjsdoc/tag-lines[22m[0m
[0m  [2m16:1[22m  [33mwarning[39m  Missing JSDoc @returns type               [2mjsdoc/require-returns-type[22m[0m
[0m  [2m67:1[22m  [31merror[39m    Expected 1 lines after block description  [2mjsdoc/tag-lines[22m[0m
[0m  [2m68:1[22m  [33mwarning[39m  Missing JSDoc @returns type               [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\server\index.ts[24m[0m
[0m   [2m39:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m45:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m58:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m79:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m97:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m167:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m193:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m198:1[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m339:8[22m   [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m363:1[22m   [31merror[39m  Missing JSDoc @param "message" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m363:1[22m   [31merror[39m  Missing JSDoc @returns declaration          [2mjsdoc/require-returns[22m[0m
[0m  [2m509:15[22m  [31merror[39m  Missing JSDoc comment                       [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\shared\agentAnalytics.ts[24m[0m
[0m   [2m40:29[22m  [31merror[39m    Unexpected any. Specify a different type                                                                     [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m123:3[22m   [31merror[39m    Missing JSDoc @param "config" declaration                                                                    [2mjsdoc/require-param[22m[0m
[0m  [2m126:1[22m   [33mwarning[39m  Expected @param names to be "config". Got "confi"                                                            [2mjsdoc/check-param-names[22m[0m
[0m  [2m126:1[22m   [33mwarning[39m  Missing JSDoc @param "confi" type                                                                            [2mjsdoc/require-param-type[22m[0m
[0m  [2m132:3[22m   [33mwarning[39m  Should have no text on the final line (before the `*/`)                                                      [2mjsdoc/multiline-blocks[22m[0m
[0m  [2m132:3[22m   [31merror[39m    Missing JSDoc @param "event" declaration                                                                     [2mjsdoc/require-param[22m[0m
[0m  [2m132:3[22m   [33mwarning[39m  JSDoc @returns declaration present but return expression not available in function                           [2mjsdoc/require-returns-check[22m[0m
[0m  [2m135:1[22m   [33mwarning[39m  Expected @param names to be "event". Got "even"                                                              [2mjsdoc/check-param-names[22m[0m
[0m  [2m135:1[22m   [33mwarning[39m  Missing JSDoc @param "even" type                                                                             [2mjsdoc/require-param-type[22m[0m
[0m  [2m136:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m169:3[22m   [31merror[39m    Missing JSDoc @param "agentName" declaration                                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m169:3[22m   [31merror[39m    Missing JSDoc @param "method" declaration                                                                    [2mjsdoc/require-param[22m[0m
[0m  [2m169:3[22m   [31merror[39m    Missing JSDoc @param "execution" declaration                                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m169:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                                   [2mjsdoc/require-param[22m[0m
[0m  [2m169:3[22m   [31merror[39m    Missing JSDoc @param "options.userId" declaration                                                            [2mjsdoc/require-param[22m[0m
[0m  [2m169:3[22m   [31merror[39m    Missing JSDoc @param "options.metadata" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m  [2m172:1[22m   [33mwarning[39m  Expected @param names to be "agentName, method, execution, option". Got "agentNam, metho, executio, option"  [2mjsdoc/check-param-names[22m[0m
[0m  [2m172:1[22m   [33mwarning[39m  Missing JSDoc @param "agentNam" type                                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m173:1[22m   [33mwarning[39m  Missing JSDoc @param "metho" type                                                                            [2mjsdoc/require-param-type[22m[0m
[0m  [2m174:1[22m   [33mwarning[39m  Missing JSDoc @param "executio" type                                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m175:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                                           [2mjsdoc/require-param-type[22m[0m
[0m  [2m176:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m184:33[22m  [31merror[39m    Unexpected any. Specify a different type                                                                     [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m221:3[22m   [31merror[39m    Missing JSDoc @param "agentName" declaration                                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m221:3[22m   [31merror[39m    Missing JSDoc @param "since" declaration                                                                     [2mjsdoc/require-param[22m[0m
[0m  [2m224:1[22m   [33mwarning[39m  Expected @param names to be "agentName, since". Got "agentNam, sinc"                                         [2mjsdoc/check-param-names[22m[0m
[0m  [2m224:1[22m   [33mwarning[39m  Missing JSDoc @param "agentNam" type                                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m225:1[22m   [33mwarning[39m  Missing JSDoc @param "sinc" type                                                                             [2mjsdoc/require-param-type[22m[0m
[0m  [2m226:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m279:3[22m   [31merror[39m    Missing JSDoc @param "since" declaration                                                                     [2mjsdoc/require-param[22m[0m
[0m  [2m282:1[22m   [33mwarning[39m  Expected @param names to be "since". Got "sinc"                                                              [2mjsdoc/check-param-names[22m[0m
[0m  [2m282:1[22m   [33mwarning[39m  Missing JSDoc @param "sinc" type                                                                             [2mjsdoc/require-param-type[22m[0m
[0m  [2m283:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m350:3[22m   [31merror[39m    Missing JSDoc @param "since" declaration                                                                     [2mjsdoc/require-param[22m[0m
[0m  [2m353:1[22m   [33mwarning[39m  Expected @param names to be "since". Got "sinc"                                                              [2mjsdoc/check-param-names[22m[0m
[0m  [2m353:1[22m   [33mwarning[39m  Missing JSDoc @param "sinc" type                                                                             [2mjsdoc/require-param-type[22m[0m
[0m  [2m354:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m360:3[22m   [33mwarning[39m  Should have no text on the final line (before the `*/`)                                                      [2mjsdoc/multiline-blocks[22m[0m
[0m  [2m360:3[22m   [33mwarning[39m  JSDoc @returns declaration present but return expression not available in function                           [2mjsdoc/require-returns-check[22m[0m
[0m  [2m363:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m372:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m378:3[22m   [33mwarning[39m  Should have no text on the final line (before the `*/`)                                                      [2mjsdoc/multiline-blocks[22m[0m
[0m  [2m378:3[22m   [33mwarning[39m  JSDoc @returns declaration present but return expression not available in function                           [2mjsdoc/require-returns-check[22m[0m
[0m  [2m381:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m397:3[22m   [33mwarning[39m  Should have no text on the final line (before the `*/`)                                                      [2mjsdoc/multiline-blocks[22m[0m
[0m  [2m397:3[22m   [31merror[39m    Missing JSDoc @param "event" declaration                                                                     [2mjsdoc/require-param[22m[0m
[0m  [2m397:3[22m   [33mwarning[39m  JSDoc @returns declaration present but return expression not available in function                           [2mjsdoc/require-returns-check[22m[0m
[0m  [2m400:1[22m   [33mwarning[39m  Expected @param names to be "event". Got "even"                                                              [2mjsdoc/check-param-names[22m[0m
[0m  [2m400:1[22m   [33mwarning[39m  Missing JSDoc @param "even" type                                                                             [2mjsdoc/require-param-type[22m[0m
[0m  [2m401:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m408:3[22m   [31merror[39m    Missing JSDoc @param "data" declaration                                                                      [2mjsdoc/require-param[22m[0m
[0m  [2m411:1[22m   [33mwarning[39m  Expected @param names to be "data". Got "dat"                                                                [2mjsdoc/check-param-names[22m[0m
[0m  [2m411:1[22m   [33mwarning[39m  Missing JSDoc @param "dat" type                                                                              [2mjsdoc/require-param-type[22m[0m
[0m  [2m412:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m  [2m414:30[22m  [31merror[39m    Unexpected any. Specify a different type                                                                     [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m440:1[22m   [31merror[39m    Missing JSDoc @param "config" declaration                                                                    [2mjsdoc/require-param[22m[0m
[0m  [2m443:1[22m   [33mwarning[39m  Expected @param names to be "config". Got "confi"                                                            [2mjsdoc/check-param-names[22m[0m
[0m  [2m443:1[22m   [33mwarning[39m  Missing JSDoc @param "confi" type                                                                            [2mjsdoc/require-param-type[22m[0m
[0m  [2m444:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                                  [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\shared\agentConfigResolver.ts[24m[0m
[0m    [2m5:8[22m   [31merror[39m  'path' is defined but never used                 [2m@typescript-eslint/no-unused-vars[22m[0m
[0m    [2m8:3[22m   [31merror[39m  'agentConfigurations' is defined but never used  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m   [2m27:1[22m   [31merror[39m  Missing JSDoc comment                            [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m51:1[22m   [31merror[39m  Missing JSDoc comment                            [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m55:1[22m   [31merror[39m  Missing JSDoc comment                            [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m61:8[22m   [31merror[39m  Missing JSDoc comment                            [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m62:14[22m  [31merror[39m  Missing JSDoc comment                            [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m64:3[22m   [31merror[39m  Missing JSDoc @param "agentId" declaration       [2mjsdoc/require-param[22m[0m
[0m   [2m64:3[22m   [31merror[39m  Missing JSDoc @returns declaration               [2mjsdoc/require-returns[22m[0m
[0m   [2m79:21[22m  [31merror[39m  Unexpected any. Specify a different type         [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m121:31[22m  [31merror[39m  Unexpected any. Specify a different type         [2m@typescript-eslint/no-explicit-any[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\shared\agentConfigurationService.ts[24m[0m
[0m   [2m27:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m   [2m39:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m   [2m48:3[22m  [33mwarning[39m  @throws should have a type              [2mjsdoc/require-throws-type[22m[0m
[0m   [2m51:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m   [2m52:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m   [2m93:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m112:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m113:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m125:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m126:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m138:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m139:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m149:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m150:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m162:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m163:1[22m  [33mwarning[39m  Missing JSDoc @param "capability" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m164:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m177:1[22m  [33mwarning[39m  Missing JSDoc @param "capability" type  [2mjsdoc/require-param-type[22m[0m
[0m  [2m178:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m200:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m201:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m213:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m214:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m224:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m225:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m239:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m240:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m254:1[22m  [33mwarning[39m  Missing JSDoc @param "agentId" type     [2mjsdoc/require-param-type[22m[0m
[0m  [2m255:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m  [2m266:3[22m  [31merror[39m    Missing JSDoc @returns declaration      [2mjsdoc/require-returns[22m[0m
[0m  [2m278:1[22m  [33mwarning[39m  Missing JSDoc @returns type             [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\shared\analyticsDashboard.ts[24m[0m
[0m    [2m5:38[22m  [31merror[39m    'AgentUsageStats' is defined but never used                                                [2m@typescript-eslint/no-unused-vars[22m[0m
[0m   [2m38:3[22m   [31merror[39m    Missing JSDoc @param "summary" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m   [2m38:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m   [2m38:3[22m   [31merror[39m    Missing JSDoc @throws declaration                                                          [2mjsdoc/require-throws[22m[0m
[0m   [2m41:1[22m   [33mwarning[39m  Expected @param names to be "summary, options". Got "summar, option"                       [2mjsdoc/check-param-names[22m[0m
[0m   [2m41:1[22m   [33mwarning[39m  Missing JSDoc @param "summar" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m   [2m42:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m   [2m43:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                [2mjsdoc/require-returns-type[22m[0m
[0m   [2m61:3[22m   [31merror[39m    Missing JSDoc @param "summary" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m   [2m64:1[22m   [33mwarning[39m  Expected @param names to be "summary". Got "summar"                                        [2mjsdoc/check-param-names[22m[0m
[0m   [2m64:1[22m   [33mwarning[39m  Missing JSDoc @param "summar" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m   [2m65:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m141:3[22m   [31merror[39m    Missing JSDoc @param "summary" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m141:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m144:1[22m   [33mwarning[39m  Expected @param names to be "summary, options". Got "summar, option"                       [2mjsdoc/check-param-names[22m[0m
[0m  [2m144:1[22m   [33mwarning[39m  Missing JSDoc @param "summar" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m145:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m146:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m257:3[22m   [31merror[39m    Missing JSDoc @param "summary" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m257:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m260:1[22m   [33mwarning[39m  Expected @param names to be "summary, options". Got "summar, option"                       [2mjsdoc/check-param-names[22m[0m
[0m  [2m260:1[22m   [33mwarning[39m  Missing JSDoc @param "summar" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m261:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m262:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m291:3[22m   [31merror[39m    Missing JSDoc @param "summary" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m291:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m294:1[22m   [33mwarning[39m  Expected @param names to be "summary, options". Got "summar, option"                       [2mjsdoc/check-param-names[22m[0m
[0m  [2m294:1[22m   [33mwarning[39m  Missing JSDoc @param "summar" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m295:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m296:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                [2mjsdoc/require-returns-type[22m[0m
[0m  [2m300:5[22m   [31merror[39m    'options' is defined but never used. Allowed unused args must match /^_/u                  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m331:1[22m   [31merror[39m    Missing JSDoc @param "summary" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m331:1[22m   [31merror[39m    Missing JSDoc @param "startDate" declaration                                               [2mjsdoc/require-param[22m[0m
[0m  [2m331:1[22m   [31merror[39m    Missing JSDoc @param "endDate" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m334:1[22m   [33mwarning[39m  Expected @param names to be "summary, startDate, endDate". Got "summar, startDat, endDat"  [2mjsdoc/check-param-names[22m[0m
[0m  [2m334:1[22m   [33mwarning[39m  Missing JSDoc @param "summar" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m335:1[22m   [33mwarning[39m  Missing JSDoc @param "startDat" type                                                       [2mjsdoc/require-param-type[22m[0m
[0m  [2m336:1[22m   [33mwarning[39m  Missing JSDoc @param "endDat" type                                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m337:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\shared\analyticsIntegration.ts[24m[0m
[0m    [2m8:1[22m   [31merror[39m    Missing JSDoc @param "agentName" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m    [2m8:1[22m   [31merror[39m    Missing JSDoc @param "methodName" declaration                                                         [2mjsdoc/require-param[22m[0m
[0m   [2m11:1[22m   [33mwarning[39m  Expected @param names to be "agentName, methodName". Got "agentNam, methodNam"                        [2mjsdoc/check-param-names[22m[0m
[0m   [2m11:1[22m   [33mwarning[39m  Missing JSDoc @param "agentNam" type                                                                  [2mjsdoc/require-param-type[22m[0m
[0m   [2m12:1[22m   [33mwarning[39m  Missing JSDoc @param "methodNam" type                                                                 [2mjsdoc/require-param-type[22m[0m
[0m   [2m13:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m   [2m16:40[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m16:58[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m17:5[22m   [31merror[39m    Argument 'target' should be typed with a non-any type                                                 [2m@typescript-eslint/explicit-module-boundary-types[22m[0m
[0m   [2m17:13[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m24:24[22m  [31merror[39m    Missing JSDoc comment                                                                                 [2mjsdoc/require-jsdoc[22m[0m
[0m   [2m24:49[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m24:65[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m49:3[22m   [31merror[39m    Missing JSDoc @param "agentName" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m   [2m52:1[22m   [33mwarning[39m  Expected @param names to be "agentName". Got "agentNam"                                               [2mjsdoc/check-param-names[22m[0m
[0m   [2m52:1[22m   [33mwarning[39m  Missing JSDoc @param "agentNam" type                                                                  [2mjsdoc/require-param-type[22m[0m
[0m   [2m59:3[22m   [31merror[39m    Missing JSDoc @param "operationName" declaration                                                      [2mjsdoc/require-param[22m[0m
[0m   [2m59:3[22m   [31merror[39m    Missing JSDoc @param "operation" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m   [2m59:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                            [2mjsdoc/require-param[22m[0m
[0m   [2m59:3[22m   [31merror[39m    Missing JSDoc @param "options.userId" declaration                                                     [2mjsdoc/require-param[22m[0m
[0m   [2m59:3[22m   [31merror[39m    Missing JSDoc @param "options.metadata" declaration                                                   [2mjsdoc/require-param[22m[0m
[0m   [2m62:1[22m   [33mwarning[39m  Expected @param names to be "operationName, operation, option". Got "operationNam, operatio, option"  [2mjsdoc/check-param-names[22m[0m
[0m   [2m62:1[22m   [33mwarning[39m  Missing JSDoc @param "operationNam" type                                                              [2mjsdoc/require-param-type[22m[0m
[0m   [2m63:1[22m   [33mwarning[39m  Missing JSDoc @param "operatio" type                                                                  [2mjsdoc/require-param-type[22m[0m
[0m   [2m64:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                                    [2mjsdoc/require-param-type[22m[0m
[0m   [2m65:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m   [2m72:33[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m   [2m83:3[22m   [33mwarning[39m  Should have no text on the final line (before the `*/`)                                               [2mjsdoc/multiline-blocks[22m[0m
[0m   [2m83:3[22m   [31merror[39m    Missing JSDoc @param "method" declaration                                                             [2mjsdoc/require-param[22m[0m
[0m   [2m83:3[22m   [31merror[39m    Missing JSDoc @param "eventData" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m   [2m83:3[22m   [33mwarning[39m  JSDoc @returns declaration present but return expression not available in function                    [2mjsdoc/require-returns-check[22m[0m
[0m   [2m86:1[22m   [33mwarning[39m  Expected @param names to be "method, eventData". Got "metho, eventDat"                                [2mjsdoc/check-param-names[22m[0m
[0m   [2m86:1[22m   [33mwarning[39m  Missing JSDoc @param "metho" type                                                                     [2mjsdoc/require-param-type[22m[0m
[0m   [2m87:1[22m   [33mwarning[39m  Missing JSDoc @param "eventDat" type                                                                  [2mjsdoc/require-param-type[22m[0m
[0m   [2m88:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m   [2m91:31[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m100:3[22m   [31merror[39m    Missing JSDoc @param "since" declaration                                                              [2mjsdoc/require-param[22m[0m
[0m  [2m103:1[22m   [33mwarning[39m  Expected @param names to be "since". Got "sinc"                                                       [2mjsdoc/check-param-names[22m[0m
[0m  [2m103:1[22m   [33mwarning[39m  Missing JSDoc @param "sinc" type                                                                      [2mjsdoc/require-param-type[22m[0m
[0m  [2m104:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m106:27[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m111:1[22m   [31merror[39m    Missing JSDoc @param "agentName" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m  [2m111:1[22m   [31merror[39m    Missing JSDoc @param "methodName" declaration                                                         [2mjsdoc/require-param[22m[0m
[0m  [2m111:1[22m   [31merror[39m    Missing JSDoc @param "handler" declaration                                                            [2mjsdoc/require-param[22m[0m
[0m  [2m114:1[22m   [33mwarning[39m  Expected @param names to be "agentName, methodName, handler". Got "agentNam, methodNam, handle"       [2mjsdoc/check-param-names[22m[0m
[0m  [2m114:1[22m   [33mwarning[39m  Missing JSDoc @param "agentNam" type                                                                  [2mjsdoc/require-param-type[22m[0m
[0m  [2m115:1[22m   [33mwarning[39m  Missing JSDoc @param "methodNam" type                                                                 [2mjsdoc/require-param-type[22m[0m
[0m  [2m116:1[22m   [33mwarning[39m  Missing JSDoc @param "handle" type                                                                    [2mjsdoc/require-param-type[22m[0m
[0m  [2m117:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m119:51[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m119:69[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m126:27[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m154:3[22m   [31merror[39m    Missing JSDoc @param "queryType" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m  [2m154:3[22m   [31merror[39m    Missing JSDoc @param "query" declaration                                                              [2mjsdoc/require-param[22m[0m
[0m  [2m154:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                            [2mjsdoc/require-param[22m[0m
[0m  [2m154:3[22m   [31merror[39m    Missing JSDoc @param "options.category" declaration                                                   [2mjsdoc/require-param[22m[0m
[0m  [2m154:3[22m   [31merror[39m    Missing JSDoc @param "options.filters" declaration                                                    [2mjsdoc/require-param[22m[0m
[0m  [2m157:1[22m   [33mwarning[39m  Expected @param names to be "queryType, query, option". Got "queryTyp, quer, option"                  [2mjsdoc/check-param-names[22m[0m
[0m  [2m157:1[22m   [33mwarning[39m  Missing JSDoc @param "queryTyp" type                                                                  [2mjsdoc/require-param-type[22m[0m
[0m  [2m158:1[22m   [33mwarning[39m  Missing JSDoc @param "quer" type                                                                      [2mjsdoc/require-param-type[22m[0m
[0m  [2m159:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                                    [2mjsdoc/require-param-type[22m[0m
[0m  [2m160:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m167:32[22m  [31merror[39m    Unexpected any. Specify a different type                                                              [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m180:3[22m   [31merror[39m    Missing JSDoc @param "operationType" declaration                                                      [2mjsdoc/require-param[22m[0m
[0m  [2m180:3[22m   [31merror[39m    Missing JSDoc @param "processor" declaration                                                          [2mjsdoc/require-param[22m[0m
[0m  [2m180:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                            [2mjsdoc/require-param[22m[0m
[0m  [2m180:3[22m   [31merror[39m    Missing JSDoc @param "options.inputSize" declaration                                                  [2mjsdoc/require-param[22m[0m
[0m  [2m180:3[22m   [31merror[39m    Missing JSDoc @param "options.category" declaration                                                   [2mjsdoc/require-param[22m[0m
[0m  [2m183:1[22m   [33mwarning[39m  Expected @param names to be "operationType, processor, option". Got "operationTyp, processo, option"  [2mjsdoc/check-param-names[22m[0m
[0m  [2m183:1[22m   [33mwarning[39m  Missing JSDoc @param "operationTyp" type                                                              [2mjsdoc/require-param-type[22m[0m
[0m  [2m184:1[22m   [33mwarning[39m  Missing JSDoc @param "processo" type                                                                  [2mjsdoc/require-param-type[22m[0m
[0m  [2m185:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                                    [2mjsdoc/require-param-type[22m[0m
[0m  [2m186:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m211:3[22m   [31merror[39m    Missing JSDoc @param "decision" declaration                                                           [2mjsdoc/require-param[22m[0m
[0m  [2m211:3[22m   [31merror[39m    Missing JSDoc @param "orchestration" declaration                                                      [2mjsdoc/require-param[22m[0m
[0m  [2m211:3[22m   [31merror[39m    Missing JSDoc @param "options" declaration                                                            [2mjsdoc/require-param[22m[0m
[0m  [2m211:3[22m   [31merror[39m    Missing JSDoc @param "options.intent" declaration                                                     [2mjsdoc/require-param[22m[0m
[0m  [2m211:3[22m   [31merror[39m    Missing JSDoc @param "options.agentCount" declaration                                                 [2mjsdoc/require-param[22m[0m
[0m  [2m214:1[22m   [33mwarning[39m  Expected @param names to be "decision, orchestration, option". Got "decisio, orchestratio, option"    [2mjsdoc/check-param-names[22m[0m
[0m  [2m214:1[22m   [33mwarning[39m  Missing JSDoc @param "decisio" type                                                                   [2mjsdoc/require-param-type[22m[0m
[0m  [2m215:1[22m   [33mwarning[39m  Missing JSDoc @param "orchestratio" type                                                              [2mjsdoc/require-param-type[22m[0m
[0m  [2m216:1[22m   [33mwarning[39m  Missing JSDoc @param "option" type                                                                    [2mjsdoc/require-param-type[22m[0m
[0m  [2m217:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m246:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m272:1[22m   [31merror[39m    Missing JSDoc @param "intervalMs" declaration                                                         [2mjsdoc/require-param[22m[0m
[0m  [2m272:1[22m   [31merror[39m    Missing JSDoc @param "outputPath" declaration                                                         [2mjsdoc/require-param[22m[0m
[0m  [2m275:1[22m   [33mwarning[39m  Expected @param names to be "intervalMs, outputPath". Got "intervalM, outputPat"                      [2mjsdoc/check-param-names[22m[0m
[0m  [2m275:1[22m   [33mwarning[39m  Missing JSDoc @param "intervalM" type                                                                 [2mjsdoc/require-param-type[22m[0m
[0m  [2m276:1[22m   [33mwarning[39m  Missing JSDoc @param "outputPat" type                                                                 [2mjsdoc/require-param-type[22m[0m
[0m  [2m277:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                                           [2mjsdoc/require-returns-type[22m[0m
[0m  [2m283:36[22m  [31merror[39m    A `require()` style import is forbidden                                                               [2m@typescript-eslint/no-require-imports[22m[0m
[0m  [2m292:13[22m  [31merror[39m    'report' is assigned a value but never used                                                           [2m@typescript-eslint/no-unused-vars[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\shared\configurationLoader.ts[24m[0m
[0m   [2m68:3[22m   [31merror[39m    Missing JSDoc @param "configPath" declaration                                  [2mjsdoc/require-param[22m[0m
[0m   [2m71:1[22m   [33mwarning[39m  Expected @param names to be "configPath". Got "configPat"                      [2mjsdoc/check-param-names[22m[0m
[0m   [2m71:1[22m   [33mwarning[39m  Missing JSDoc @param "configPat" type                                          [2mjsdoc/require-param-type[22m[0m
[0m   [2m77:3[22m   [33mwarning[39m  @throws should have a type                                                     [2mjsdoc/require-throws-type[22m[0m
[0m   [2m80:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m   [2m97:7[22m   [33mwarning[39m  Unused eslint-disable directive (no problems were reported from 'no-console')[0m
[0m  [2m116:3[22m   [31merror[39m    Missing JSDoc @returns declaration                                             [2mjsdoc/require-returns[22m[0m
[0m  [2m142:3[22m   [33mwarning[39m  @throws should have a type                                                     [2mjsdoc/require-throws-type[22m[0m
[0m  [2m142:3[22m   [31merror[39m    Missing JSDoc @param "environment" declaration                                 [2mjsdoc/require-param[22m[0m
[0m  [2m145:1[22m   [33mwarning[39m  Expected @param names to be "environment". Got "environmen"                    [2mjsdoc/check-param-names[22m[0m
[0m  [2m145:1[22m   [33mwarning[39m  Missing JSDoc @param "environmen" type                                         [2mjsdoc/require-param-type[22m[0m
[0m  [2m146:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m  [2m167:3[22m   [33mwarning[39m  @throws should have a type                                                     [2mjsdoc/require-throws-type[22m[0m
[0m  [2m167:3[22m   [31merror[39m    Missing JSDoc @param "agentName" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m170:1[22m   [33mwarning[39m  Expected @param names to be "agentName". Got "agentNam"                        [2mjsdoc/check-param-names[22m[0m
[0m  [2m170:1[22m   [33mwarning[39m  Missing JSDoc @param "agentNam" type                                           [2mjsdoc/require-param-type[22m[0m
[0m  [2m171:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m  [2m174:52[22m  [31merror[39m    Unexpected any. Specify a different type                                       [2m@typescript-eslint/no-explicit-any[22m[0m
[0m  [2m192:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m  [2m199:3[22m   [31merror[39m    Missing JSDoc @param "loadedConfig" declaration                                [2mjsdoc/require-param[22m[0m
[0m  [2m202:1[22m   [33mwarning[39m  Expected @param names to be "loadedConfig". Got "loadedConfi"                  [2mjsdoc/check-param-names[22m[0m
[0m  [2m202:1[22m   [33mwarning[39m  Missing JSDoc @param "loadedConfi" type                                        [2mjsdoc/require-param-type[22m[0m
[0m  [2m203:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m  [2m223:3[22m   [33mwarning[39m  @throws should have a type                                                     [2mjsdoc/require-throws-type[22m[0m
[0m  [2m223:3[22m   [31merror[39m    Missing JSDoc @param "config" declaration                                      [2mjsdoc/require-param[22m[0m
[0m  [2m226:1[22m   [33mwarning[39m  Expected @param names to be "config". Got "confi"                              [2mjsdoc/check-param-names[22m[0m
[0m  [2m226:1[22m   [33mwarning[39m  Missing JSDoc @param "confi" type                                              [2mjsdoc/require-param-type[22m[0m
[0m  [2m227:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m  [2m249:1[22m   [31merror[39m    Missing JSDoc @param "configPath" declaration                                  [2mjsdoc/require-param[22m[0m
[0m  [2m252:1[22m   [33mwarning[39m  Expected @param names to be "configPath". Got "configPat"                      [2mjsdoc/check-param-names[22m[0m
[0m  [2m252:1[22m   [33mwarning[39m  Missing JSDoc @param "configPat" type                                          [2mjsdoc/require-param-type[22m[0m
[0m  [2m253:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m  [2m264:1[22m   [31merror[39m    Missing JSDoc @param "configPath" declaration                                  [2mjsdoc/require-param[22m[0m
[0m  [2m267:1[22m   [33mwarning[39m  Expected @param names to be "configPath". Got "configPat"                      [2mjsdoc/check-param-names[22m[0m
[0m  [2m267:1[22m   [33mwarning[39m  Missing JSDoc @param "configPat" type                                          [2mjsdoc/require-param-type[22m[0m
[0m  [2m268:1[22m   [33mwarning[39m  Missing JSDoc @returns type                                                    [2mjsdoc/require-returns-type[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\types\agentConfig.ts[24m[0m
[0m  [2m471:14[22m  [31merror[39m  Missing JSDoc comment               [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m475:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m492:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m499:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m506:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m513:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m  [2m520:3[22m   [31merror[39m  Missing JSDoc @returns declaration  [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\types\configRegistry.ts[24m[0m
[0m  [2m157:3[22m  [31merror[39m  Missing JSDoc @param "configId" declaration          [2mjsdoc/require-param[22m[0m
[0m  [2m157:3[22m  [31merror[39m  Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m164:3[22m  [31merror[39m  Missing JSDoc @param "configId" declaration          [2mjsdoc/require-param[22m[0m
[0m  [2m164:3[22m  [31merror[39m  Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m171:3[22m  [31merror[39m  Missing JSDoc @param "configId" declaration          [2mjsdoc/require-param[22m[0m
[0m  [2m171:3[22m  [31merror[39m  Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m181:3[22m  [31merror[39m  Missing JSDoc @param "configId1" declaration         [2mjsdoc/require-param[22m[0m
[0m  [2m181:3[22m  [31merror[39m  Missing JSDoc @param "configId2" declaration         [2mjsdoc/require-param[22m[0m
[0m  [2m181:3[22m  [31merror[39m  Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m195:3[22m  [31merror[39m  Missing JSDoc @param "agentType" declaration         [2mjsdoc/require-param[22m[0m
[0m  [2m195:3[22m  [31merror[39m  Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m204:3[22m  [31merror[39m  Missing JSDoc @param "agentType" declaration         [2mjsdoc/require-param[22m[0m
[0m  [2m204:3[22m  [31merror[39m  Missing JSDoc @param "major" declaration             [2mjsdoc/require-param[22m[0m
[0m  [2m204:3[22m  [31merror[39m  Missing JSDoc @param "minor" declaration             [2mjsdoc/require-param[22m[0m
[0m  [2m204:3[22m  [31merror[39m  Missing JSDoc @param "patch" declaration             [2mjsdoc/require-param[22m[0m
[0m  [2m204:3[22m  [31merror[39m  Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m  [2m222:1[22m  [31merror[39m  Missing JSDoc @param "config" declaration            [2mjsdoc/require-param[22m[0m
[0m  [2m222:1[22m  [31merror[39m  Missing JSDoc @param "config.$configId" declaration  [2mjsdoc/require-param[22m[0m
[0m  [2m222:1[22m  [31merror[39m  Missing JSDoc @returns declaration                   [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\types\configValidation.ts[24m[0m
[0m    [2m9:23[22m  [31merror[39m  'CONFIG_REGISTRY' is defined but never used                                 [2m@typescript-eslint/no-unused-vars[22m[0m
[0m   [2m55:1[22m   [31merror[39m  Missing JSDoc @param "config" declaration                                   [2mjsdoc/require-param[22m[0m
[0m   [2m55:1[22m   [31merror[39m  Missing JSDoc @returns declaration                                          [2mjsdoc/require-returns[22m[0m
[0m  [2m141:1[22m   [31merror[39m  Missing JSDoc @param "agent" declaration                                    [2mjsdoc/require-param[22m[0m
[0m  [2m141:1[22m   [31merror[39m  Missing JSDoc @param "errors" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m141:1[22m   [31merror[39m  Missing JSDoc @param "warnings" declaration                                 [2mjsdoc/require-param[22m[0m
[0m  [2m201:1[22m   [31merror[39m  Missing JSDoc @param "config" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m201:1[22m   [31merror[39m  Missing JSDoc @param "agentType" declaration                                [2mjsdoc/require-param[22m[0m
[0m  [2m201:1[22m   [31merror[39m  Missing JSDoc @param "errors" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m201:1[22m   [31merror[39m  Missing JSDoc @param "warnings" declaration                                 [2mjsdoc/require-param[22m[0m
[0m  [2m236:1[22m   [31merror[39m  Missing JSDoc @param "config" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m236:1[22m   [31merror[39m  Missing JSDoc @param "errors" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m236:1[22m   [31merror[39m  Missing JSDoc @param "warnings" declaration                                 [2mjsdoc/require-param[22m[0m
[0m  [2m242:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m329:1[22m   [31merror[39m  Missing JSDoc @param "config" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m329:1[22m   [31merror[39m  Missing JSDoc @param "errors" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m329:1[22m   [31merror[39m  Missing JSDoc @param "warnings" declaration                                 [2mjsdoc/require-param[22m[0m
[0m  [2m333:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m334:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m335:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m340:1[22m   [31merror[39m  Missing JSDoc comment                                                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m341:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m342:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m343:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m348:1[22m   [31merror[39m  Missing JSDoc comment                                                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m349:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m350:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m351:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m356:1[22m   [31merror[39m  Missing JSDoc comment                                                       [2mjsdoc/require-jsdoc[22m[0m
[0m  [2m357:3[22m   [31merror[39m  'config' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m358:3[22m   [31merror[39m  'errors' is defined but never used. Allowed unused args must match /^_/u    [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m359:3[22m   [31merror[39m  'warnings' is defined but never used. Allowed unused args must match /^_/u  [2m@typescript-eslint/no-unused-vars[22m[0m
[0m  [2m364:1[22m   [31merror[39m  Missing JSDoc @param "config1" declaration                                  [2mjsdoc/require-param[22m[0m
[0m  [2m364:1[22m   [31merror[39m  Missing JSDoc @param "config2" declaration                                  [2mjsdoc/require-param[22m[0m
[0m  [2m364:1[22m   [31merror[39m  Missing JSDoc @returns declaration                                          [2mjsdoc/require-returns[22m[0m
[0m  [2m401:1[22m   [31merror[39m  Missing JSDoc @param "result" declaration                                   [2mjsdoc/require-param[22m[0m
[0m  [2m401:1[22m   [31merror[39m  Missing JSDoc @returns declaration                                          [2mjsdoc/require-returns[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\types\external.d.ts[24m[0m
[0m  [2m1:2[22m  [31merror[39m    Missing @packageDocumentation                                                         [2mjsdoc/require-file-overview[22m[0m
[0m  [2m2:1[22m  [33mwarning[39m  Invalid JSDoc tag (preference). Replace "file" JSDoc tag with "packageDocumentation"  [2mjsdoc/check-tag-names[22m[0m
[0m[0m
[0m[4mC:\repo\VSCode-template\src\types\vscode-chat.d.ts[24m[0m
[0m   [2m1:2[22m  [31merror[39m    Missing @packageDocumentation                                                         [2mjsdoc/require-file-overview[22m[0m
[0m   [2m2:1[22m  [33mwarning[39m  Invalid JSDoc tag (preference). Replace "file" JSDoc tag with "packageDocumentation"  [2mjsdoc/check-tag-names[22m[0m
[0m  [2m14:3[22m  [31merror[39m    Missing JSDoc comment                                                                 [2mjsdoc/require-jsdoc[22m[0m
[0m[0m
[0m[31m[1m✖ 826 problems (579 errors, 247 warnings)[22m[39m[0m
[0m[31m[1m[22m[39m[31m[1m  274 errors and 8 warnings potentially fixable with the `--fix` option.[22m[39m[0m
[0m[31m[1m[22m[39m[0m

### JSON Schema Validation

- Status: PASSED

#### Messages
- All JSON files satisfy their schemas.

### Markdown Metadata

- Status: PASSED

#### Messages
- All Markdown documents include the mandated metadata.

## Maintenance

- Review failing checks before merging changes.
