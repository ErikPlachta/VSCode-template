---
title: Repository Compliance Health Report
summary: Automated validation status for documentation, schemas, and TypeScript types.
roles: ['quality-assurance', 'platform-engineering']
associations: ['repository-health-agent']
hierarchy: ['governance', 'quality', 'health-report']
generatedAt: 2025-11-07T21:26:29.384Z
---

# Repository Compliance Health Report

## Summary

- Generated at: 2025-11-07T21:26:29.384Z
- Overall status: PASSED

## Responsibilities

- Execute TypeScript linting to enforce doc coverage.
- Validate JSON schemas to maintain data integrity.
- Audit Markdown metadata for hierarchical governance.

## Inputs

- agent.config.json for configuration directives.
- JSON Schemas under the schemas directory.
- Repository TypeScript and Markdown sources.

## Outputs

- Compliance status for each enforcement area.
- Aggregated diagnostics for failing artefacts.
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

- Status: PASSED

#### Messages
- All TypeScript files contain required documentation.

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
