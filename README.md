# VSCode Copilot Instructions Workspace Template

## Project Purpose
This repository provides a Python-powered toolkit for provisioning and interrogating a GitHub Copilot Chat workspace. The
`install-github-copilot-instructions-work.py` command now exposes both a generator and an action runner so that Copilot Chat can
delegate heavy lifting to Python utilities instead of spending tokens re-deriving context.

The toolkit delivers:

- domain-specific configuration for Copilot in JSON and Markdown;
- reusable dataset and bridge templates that give Copilot structured context; and
- helper actions that surface summaries, validation diagnostics, and template previews for Copilot Chat.

Everything is driven by declarative files that can be regenerated at any time to keep the workspace consistent.

## High-Level Design Intent
1. **Configurability** – Treat instructions, datasets, and bridges as data files that can be regenerated, versioned, or swapped
   out per project.
2. **Auditability** – Keep an automatically updated changelog and direct all validator output into
   `.github/copilot-instructions-output/` for traceability.
3. **Consistency** – Use shared dataset and bridge templates so each category (job, company, people, data-architecture,
   applications, coding-languages) exposes a predictable schema.
4. **Automation** – Provide Python scripts and actions that rebuild the workspace, validate relationships, and surface curated
   insights to Copilot Chat.

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
            ├── initial-setup/               # Reserved for bootstrap helpers
            ├── reset/                       # Reserved for reset scripts
            ├── validate/
            │   └── validate_all.py          # Python validator for dataset/bridge integrity
            └── CHANGELOG.md                 # First entry records initial scaffolding run
```

## Setup & Usage
1. **Create or refresh the workspace**
   ```bash
   python install-github-copilot-instructions-work.py generate /path/to/project
   ```
   Omitting the `generate` subcommand defaults to this behaviour.

2. **Run workspace actions for Copilot Chat**
   List available actions:
   ```bash
   python install-github-copilot-instructions-work.py run --list
   ```
   Execute an action and view JSON output suitable for piping back to Copilot Chat:
   ```bash
   python install-github-copilot-instructions-work.py run list_categories --format json
   ```

3. **Automate validation**
   The `validate` action runs the bundled Python validator and stores any diagnostics in
   `.github/copilot-instructions-output/validate.log`. Integrate it into CI or call it directly from Copilot Chat using the
   action interface.

## Collaboration Notes
- Treat the CLI script and the `copilot_workspace` package as the canonical description of the workspace. Regenerate rather than
  editing generated files manually.
- The Python validator keeps dependencies minimal and avoids Node.js requirements.
- Future work ideas:
  - Flesh out `initial-setup/` and `reset/` feature folders with real automation.
  - Add schema validation for `config.json` files.
  - Integrate automated changelog updates when validators or generators run.

## Current Status & Known Gaps
- Only the core scaffolding, validator, and helper actions exist; packaging for distribution is still minimal.
- Generated files remain untracked so collaborators can regenerate locally without merge conflicts.
- Additional instructions or examples for populating real datasets/bridges are still needed.

Use this README as our shared reference while we iterate on the architecture and fill in the missing automation.
