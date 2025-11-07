---
title: Repository Health Agent
summary: Modular compliance agent enforcing documentation, schema validation, and health reporting for the MCP workspace.
roles:
  - quality-engineering
  - automation
associations:
  - compliance-enforcement-pipeline
  - agent-config
hierarchy:
  - governance
  - agents
  - repository-health
---

## Summary

The repository health agent centralises enforcement logic for TypeScript linting, JSON schema validation, and Markdown governance. It reads `agent.config.json` to orchestrate language-specific checks and publishes reports used by CI, release managers, and documentation tooling.

## Responsibilities

- Run ESLint against configured TypeScript sources with strict docstring requirements.
- Validate JSON datasets using Ajv and centrally maintained schemas.
- Audit Markdown files for front matter metadata and mandatory structural sections.
- Generate compliance reports in Markdown for inclusion in review workflows.

## Inputs

- Configuration contract stored in `agent.config.json`.
- Schema definitions inside the `schemas/` directory.
- Repository documentation under `docs/` excluding auto-generated API references.
- TypeScript source files referenced by linting globs.

## Outputs

- `docs/reports/health-report.md` summarising compliance status for each check.
- Console summaries consumed by GitHub Actions and local CLI invocations.
- Aggregated diagnostics for failing files with actionable remediation notes.
- Exit codes that gate CI pipelines and local developer workflows.

## Error Handling

- Propagates ESLint fatal errors to fail fast and highlight missing documentation blocks.
- Catches schema parsing failures and annotates files that violate required metadata.
- Emits descriptive logging when Markdown documents lack front matter or sections.
- Ensures the CLI exits non-zero on any failing check to block unsafe merges.

## Examples

- `npm run lint:json` validating relationship metadata across every dataset folder.
- `npm run lint:docs` checking that architecture notes contain required sections and hierarchy tags.
- `npm run health:report` executing the full suite and writing the compliance report.

## Maintenance

- Update the configuration file when new documentation sections or file types become mandatory.
- Extend schema coverage as new datasets or relationship structures are introduced.
- Review generated reports regularly to spot trends in compliance failures.

