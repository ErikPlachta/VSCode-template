# VSCode Copilot Instructions Workspace Template

## Project Purpose
This repository experiments with a repeatable way to spin up a GitHub Copilot Chat "workspace" inside a repository. The `install-github-copilot-instructions-work.py` script provisions a tree under `.github/` that contains:

- domain-specific configuration for Copilot in JSON and Markdown;
- reusable dataset and bridge templates that give Copilot structured context; and
- helper scripts grouped by purpose (initial setup, validation, reset) so the workspace can be regenerated or audited on demand.

The goal is to make Copilot Chat aware of organizational context (jobs, departments, people, applications, etc.) without hard-coding that knowledge in source files. Everything should be derived from declarative files that are easy to regenerate.

## High-Level Design Intent
1. **Configurability** – Treat instructions, datasets, and bridges as data files that can be regenerated, versioned, or swapped out per project.
2. **Auditability** – Keep an automatically updated changelog and direct all validator output into `.github/copilot-instructions-output/` for traceability.
3. **Consistency** – Use shared dataset and bridge templates so each category (job, company, people, data-architecture, applications, coding-languages) exposes a predictable schema.
4. **Automation** – Provide scripts that rebuild the workspace (`install-github-copilot-instructions-work.py`), run validations (`validate/validate-all.js`), and eventually reset or bootstrap custom content.

## Generated Directory Layout
After running the installer script you should see the following structure:

```
.github/
├── .copilot-instructions.md                 # High level Copilot Chat guidance
├── copilot-instructions-output/             # Logs, validation reports, changelog exports
└── copilot-instructions-work/
    ├── README.md                            # Architecture & intent recap
    └── config/
        ├── categories/                      # One folder per domain (job, company, ...)
        │   ├── <category>/
        │   │   ├── config.json              # Name/description
        │   │   ├── dataset.json             # Category-specific dataset template
        │   │   ├── bridge.json              # Relationships back to core datasets
        │   │   └── resources/README.md      # Placeholders for manual docs
        ├── utilities/
        │   ├── bridge-dataset-schema.json   # JSON schema describing bridge files
        │   └── template-datasets/*.json     # Canonical dataset examples
        └── features/
            ├── initial-setup/               # Reserved for bootstrap helpers (TODO)
            ├── reset/                       # Reserved for reset scripts (TODO)
            ├── validate/
            │   └── validate-all.js          # Node-based validator for dataset/bridge integrity
            └── CHANGELOG.md                 # First entry records initial scaffolding run
```

## Setup & Usage
1. **Create the workspace**
   ```bash
   python install-github-copilot-instructions-work.py
   ```
   The script emits status messages as each category is created.

2. **Run validations** (requires Node.js ≥ 18)
   ```bash
   node .github/copilot-instructions-work/config/features/validate/validate-all.js
   ```
   When datasets and bridges are consistent you will see a success message. If issues exist the script writes `validate.log` inside `.github/copilot-instructions-output/`.

3. **Iterate on category data**
   - Update the `dataset.json` and `bridge.json` files under each category.
   - Add documentation to `resources/README.md` to help Copilot understand bespoke workflows.
   - Re-run the validator to ensure changes remain coherent.

## Collaboration Notes
- Treat the `install-github-copilot-instructions-work.py` script as the canonical description of the intended structure. When we evolve the design, update the script first so regenerated workspaces stay consistent.
- Keep Node-based tooling minimal so that collaborators who only have Python installed can still generate the base tree. Consider porting the validator to Python for consistency.
- The `setup.sh` helper currently references an old script name (`setup_copilot_framework_v0_0_6.py`). We should update or regenerate this shell script once the Python installer is finalized.
- Future work ideas:
  - flesh out `initial-setup/` and `reset/` feature folders with real automation;
  - add schema validation for `config.json` files;
  - integrate automated changelog updates when validators or generators run.

## Current Status & Known Gaps
- Only the core scaffolding and validator template exist; no CI or packaging is configured.
- The repository intentionally keeps generated files out of version control so collaborators can run the installer locally without merge noise.
- Additional instructions or examples for populating real datasets/bridges are still needed.

Use this README as our shared reference while we iterate on the architecture and fill in the missing automation.
