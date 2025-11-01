# Copilot Instructions Configuration Framework

## High-Level Concept
This workspace represents a **modular Copilot knowledge graph** packaged directly with the
`copilot_workspace` Python library. It enables Copilot Chat and the Python API helpers to reason about
organisational datasets, governance, and automation without requiring a separate generation step.

### Core Design Intent
1. **Configurability** — All logic is externally defined in JSON/Markdown files.
2. **Auditability** — Every modification or Copilot-driven change is logged.
3. **Consistency** — Uniform dataset schema and bridges ensure cross-validation integrity.
4. **Automation** — Scripts manage validation, setup, and regeneration with no manual effort.
5. **Python Native** — Optimised for the Copilot Workspace Python APIs.

---

## Directory Overview
- **categories/** — Holds domain contexts (job, company, people, data, apps, coding)
- **utilities/** — Contains templates and schemas
- **features/** — Functional automation grouped by purpose
  - `initial-setup/` — Regenerates base files and templates
  - `validate/` — Runs configuration and dataset validators
  - `reset/` — Restores defaults or reinitialises environment
  - `CHANGELOG.md` — Tracks every modification for audit purposes

---

## Logs and Outputs
All operational results, validation logs, and audit reports are written to:
```
.github/copilot-instructions-output/
```

This directory allows ongoing review and version control of Copilot Chat interactions.
