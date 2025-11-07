---
title: Compliance Enforcement Pipeline
summary: Continuous integration pipeline enforcing documentation, schema validation, and health reporting gates.
roles:
  - platform-engineering
  - release-management
associations:
  - repository-health-agent
  - github-actions
hierarchy:
  - governance
  - compliance
  - pipeline
---

## Summary

The compliance enforcement pipeline runs on every push and pull request to prevent undocumented or schema-invalid code from landing in the repository. It coordinates linting, schema validation, documentation audits, and health report generation to deliver strict governance.

## Responsibilities

- Execute TypeScript linting with mandatory docstring coverage across files, classes, and members.
- Validate JSON assets against centrally managed schemas to maintain relational consistency.
- Inspect Markdown documentation for mandated metadata, section coverage, and hierarchical tagging.
- Generate a signed compliance report stored under `docs/reports/health-report.md`.

## Inputs

- GitHub Actions workflow definitions stored in `.github/workflows`.
- npm scripts `lint`, `lint:json`, `lint:docs`, and `health:report`.
- Agent configuration declared in `agent.config.json` and schemas within `schemas/`.
- Repository metadata including data assets, documentation, and TypeScript sources.

## Outputs

- Status checks that gate pull requests on linting, schema validation, and markdown compliance.
- Automated documentation updates summarising enforcement outcomes for reviewers.
- Artifacts containing the compliance health report for traceability.
- Console logs detailing remediation steps for any failing stage.

## Error Handling

- Aborts the workflow if any linting stage exits non-zero, surfacing ESLint diagnostics inline.
- Captures JSON schema validation errors with precise instance paths for rapid triage.
- Displays Markdown metadata gaps alongside the offending files to guide documentation fixes.
- Emits failure annotations in GitHub Actions to block merges until issues are resolved.

## Examples

- Pull request failing because a new agent lacked summary and example sections in its docstring.
- JSON data update rejected when a relationship referenced a missing target category.
- Markdown architecture note updated to include required hierarchy metadata after pipeline feedback.

## Maintenance

- Review workflow schedules quarterly to ensure all enforcement scripts align with evolving standards.
- Update `agent.config.json` whenever new file types or documentation sections become mandatory.
- Monitor dependency updates for ESLint, Ajv, and Markdown tooling to keep rules current.

