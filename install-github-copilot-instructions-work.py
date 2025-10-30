#!/usr/bin/env python3
# =============================================================================
# File: setup_copilot_framework_v0_0_6.py
# Author: Erik Plachta
# Version: 0.0.6
# -----------------------------------------------------------------------------
# Purpose:
#   Builds a complete GitHub Copilot Chat configuration workspace under:
#   `.github/copilot-instructions-work/`
#
#   Includes:
#   - Markdown-based Copilot instructions
#   - Renamed categories (job, company, people, etc.)
#   - Consolidated single bridge file per category (no subfolders)
#   - Comprehensive root README (architecture + intent)
#   - Features folder grouping scripts by purpose (initial-setup, validate, reset)
#   - Automatic CHANGELOG file to track Copilot Chat-driven changes
#   - Dedicated `.github/copilot-instructions-output/` for logs and reports
#
# =============================================================================

import json
from datetime import datetime
from pathlib import Path
from textwrap import dedent

# -----------------------------------------------------------------------------
# Core Utility Functions
# -----------------------------------------------------------------------------
def create_file(path: Path, content: str):
    \"\"\"Create a text file, ensuring parent directories exist.\"\"\"
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, \"w\", encoding=\"utf-8\") as f:
        f.write(dedent(content).strip() + \"\\n\")


def create_json(path: Path, data: dict):
    \"\"\"Create a JSON file, ensuring parent directories exist.\"\"\"
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, \"w\", encoding=\"utf-8\") as f:
        json.dump(data, f, indent=2)


# -----------------------------------------------------------------------------
# Category Definitions
# -----------------------------------------------------------------------------
CATEGORIES = [
    (\"job\", \"Defines roles, workflows, policies, and required resources.\"),
    (\"company\", \"Covers departments, governance, reporting, and structure.\"),
    (\"people\", \"Defines individuals, teams, and cross-functional relationships.\"),
    (\"data-architecture\", \"Outlines datasets, schemas, and ETL processes.\"),
    (\"applications\", \"Lists applications, APIs, and data integrations.\"),
    (\"coding-languages\", \"Specifies code standards, linting, and snippets.\"),
]

# -----------------------------------------------------------------------------
# Markdown Instruction File
# -----------------------------------------------------------------------------
COPILOT_INSTRUCTIONS_MD = \"\"\"\
# GitHub Copilot Chat Workspace Instructions

## Purpose
This workspace provides structured context and relationship mapping for GitHub Copilot Chat within VS Code.
It defines datasets, relationships, bridges, and automation features enabling Copilot to reason across
organizational systems, roles, and data pipelines.

---

## Behavior
1. Read all JSON configurations from `.github/copilot-instructions-work/config/categories/**`.
2. Load `dataset.json` and `bridge.json` from each category to infer relationships.
3. Use `features` scripts to reset, validate, or regenerate content dynamically.
4. Output all logs, summaries, and audits into `.github/copilot-instructions-output`.

---

## Structural Overview
```
.github/
├── copilot-instructions-work/
│   ├── config/
│   │   ├── categories/
│   │   ├── utilities/
│   │   └── features/
│   └── README.md
├── copilot-instructions-output/
└── .copilot-instructions.md
```

- **categories/** → All domain contexts (job, company, people, data, apps, coding).
- **utilities/** → Templates, schemas, and example data models.
- **features/** → Organized feature scripts (setup, validation, reset, changelog).
- **copilot-instructions-output/** → Log and output folder for results, audits, and changelogs.

---

## Features
- Full schema validation and dataset sample generation
- Self-healing framework regeneration scripts
- Built-in changelog tracking Copilot Chat interactions and updates
- Segmented validation and reset utilities for controlled execution

---

## Example Queries
- “Show all bridges connecting company and people datasets.”
- “What workflows exist for my role in the job category?”
- “Validate all configurations and output logs.”

_Last updated: {date} — Erik Plachta_
\"\"\".format(date=datetime.now().strftime(\"%Y-%m-%d\"))

# -----------------------------------------------------------------------------
# Dataset + Bridge Templates
# -----------------------------------------------------------------------------
def dataset_template(name: str):
    \"\"\"Return a base dataset schema used for each category and for global templates.\"\"\"
    return {
        \"dataset_name\": f\"{name}_Dataset\",
        \"primary_keys\": [\"ID\"],
        \"foreign_keys\": [
            {\"column\": \"EmployeeID\", \"references\": \"PeopleDataset.EmployeeID\"},
            {\"column\": \"DepartmentID\", \"references\": \"CompanyDataset.DepartmentID\"},
        ],
        \"columns\": [
            {\"name\": \"ID\", \"type\": \"INT\"},
            {\"name\": \"EmployeeID\", \"type\": \"INT\"},
            {\"name\": \"DepartmentID\", \"type\": \"INT\"},
            {\"name\": \"Name\", \"type\": \"VARCHAR(255)\"},
            {\"name\": \"ModifiedDate\", \"type\": \"DATETIME\"},
        ],
        \"sample_rows\": [
            {
                \"ID\": 1,
                \"EmployeeID\": 101,
                \"DepartmentID\": 10,
                \"Name\": f\"{name.capitalize()} Example 1\",
                \"ModifiedDate\": \"2025-01-01\",
            },
            {
                \"ID\": 2,
                \"EmployeeID\": 102,
                \"DepartmentID\": 20,
                \"Name\": f\"{name.capitalize()} Example 2\",
                \"ModifiedDate\": \"2025-01-02\",
            },
        ],
        \"notes\": \"Template dataset for Copilot Chat validation.\",
    }


def bridge_template(name: str):
    \"\"\"Return a single per-category bridge definition (no folder nesting).\"\"\"
    return {
        \"$schema\": \"./utilities/bridge-dataset-schema.json\",
        \"bridge_name\": f\"{name.capitalize()}Bridge\",
        \"entity_type\": \"conceptual\",
        \"participants\": [
            {
                \"source_category\": \"company\",
                \"dataset\": \"CompanyDataset\",
                \"keys\": [\"DepartmentID\"],
            },
            {
                \"source_category\": \"people\",
                \"dataset\": \"PeopleDataset\",
                \"keys\": [\"EmployeeID\"],
            },
        ],
        \"bridge_keys\": [
            {\"name\": \"DepartmentID\", \"type\": \"INT\"},
            {\"name\": \"EmployeeID\", \"type\": \"INT\"},
        ],
        \"join_conditions\": [\"CompanyDataset.DepartmentID = PeopleDataset.DepartmentID\"],
        \"relationship_type\": \"one-to-many\",
        \"confidence_score\": 0.95,
        \"criticality\": \"medium\",
        \"created_by\": \"System\",
        \"last_validated\": datetime.now().strftime(\"%Y-%m-%d\"),
    }


# -----------------------------------------------------------------------------
# Schema and Utilities
# -----------------------------------------------------------------------------
BRIDGE_DATASET_SCHEMA = {
    \"$id\": \"https://schema.local/bridge-dataset.schema.json\",
    \"title\": \"Bridge Dataset Definition\",
    \"type\": \"object\",
    \"required\": [
        \"bridge_name\",
        \"participants\",
        \"bridge_keys\",
        \"join_conditions\",
        \"relationship_type\",
    ],
    \"properties\": {
        \"bridge_name\": {\"type\": \"string\"},
        \"participants\": {\"type\": \"array\"},
        \"bridge_keys\": {\"type\": \"array\"},
        \"join_conditions\": {\"type\": \"array\"},
        \"relationship_type\": {\"type\": \"string\"},
    },
}

README_CONTENT = \"\"\"\
# Copilot Instructions Configuration Framework

## High-Level Concept
This workspace represents a **modular Copilot knowledge graph** for reasoning across datasets, departments,
people, applications, and systems. It allows Copilot Chat to understand **contextual interconnections** in
a structured, validated way.

### Core Design Intent
1. **Configurability** — All logic is externally defined in JSON/Markdown files.
2. **Auditability** — Every modification or Copilot-driven change is logged.
3. **Consistency** — Uniform dataset schema and bridges ensure cross-validation integrity.
4. **Automation** — Scripts manage validation, setup, and regeneration with no manual effort.

---

## Directory Overview
- **categories/** — Holds domain contexts (job, company, people, etc.)
- **utilities/** — Contains templates and schemas
- **features/** — Functional automation grouped by purpose
  - `initial-setup/` — Regenerates base files and templates
  - `validate/` — Runs configuration and dataset validators
  - `reset/` — Restores defaults or reinitializes environment
  - `CHANGELOG.md` — Tracks every modification for audit purposes

---

## Logs and Outputs
All operational results, validation logs, and audit reports are written to:
```
.github/copilot-instructions-output/
```

This directory allows ongoing review and version control of Copilot Chat interactions.

---

_Last generated: {date}_
\"\"\".format(date=datetime.now().strftime(\"%Y-%m-%d\"))

# -----------------------------------------------------------------------------
# Scripts for Features
# -----------------------------------------------------------------------------
VALIDATE_SCRIPT = \"\"\"\
#!/usr/bin/env node
// validate-all.js
// Validates dataset and bridge integrity.
import fs from 'fs';
import path from 'path';
const root = './.github/copilot-instructions-work/config/categories';
const errors = [];

function loadMap() {
  const m = {};
  for (const c of fs.readdirSync(root)) {
    const p = path.join(root, c, 'dataset.json');
    if (fs.existsSync(p)) {
      const d = JSON.parse(fs.readFileSync(p, 'utf8'));
      m[d.dataset_name] = d;
    }
  }
  return m;
}

function validateBridge(f, map) {
  const b = JSON.parse(fs.readFileSync(f, 'utf8'));
  b.participants.forEach(p => {
    if (!map[p.dataset]) {
      console.warn(`${f}: dataset ${p.dataset} not found (conceptual ok)`);
      return;
    }
    for (const k of p.keys) {
      const ok = map[p.dataset].columns.some(c => c.name === k);
      if (!ok) errors.push(`${f}: key ${k} missing in ${p.dataset}`);
    }
  });
}

const map = loadMap();
for (const cat of fs.readdirSync(root)) {
  const bridge = path.join(root, cat, 'bridge.json');
  if (fs.existsSync(bridge)) validateBridge(bridge, map);
}

if (errors.length) {
  fs.writeFileSync('./.github/copilot-instructions-output/validate.log', errors.join('\\n'));
  console.error('Validation failed, see validate.log');
  process.exit(1);
} else {
  console.log('All bridge and dataset files validated successfully.');
}
\"\"\"

CHANGELOG_INIT = \"\"\"\
# CHANGELOG

This file records all automated and manual changes performed within the Copilot workspace.

| Date | Action | File | Details |
|------|---------|------|----------|
| {date} | INIT | setup_copilot_framework_v0_0_6.py | Initial framework build |
\"\"\".format(date=datetime.now().strftime(\"%Y-%m-%d\"))

# -----------------------------------------------------------------------------
# Build
# -----------------------------------------------------------------------------
def build_framework(base_dir=\".\"):
    base = Path(base_dir)
    gh = base / \".github\"
    work = gh / \"copilot-instructions-work\"
    cfg = work / \"config\"
    cats = cfg / \"categories\"
    utils = cfg / \"utilities\"
    feats = cfg / \"features\"
    output = gh / \"copilot-instructions-output\"

    for d in [gh, work, cfg, cats, utils, feats, output]:
        d.mkdir(parents=True, exist_ok=True)

    # Copilot Chat markdown
    create_file(gh / \".copilot-instructions.md\", COPILOT_INSTRUCTIONS_MD)

    # Root README
    create_file(work / \"README.md\", README_CONTENT)

    # Utility schema
    create_json(utils / \"bridge-dataset-schema.json\", BRIDGE_DATASET_SCHEMA)

    # Feature scripts grouped by function
    setup_dir = feats / \"initial-setup\"
    validate_dir = feats / \"validate\"
    reset_dir = feats / \"reset\"
    for d in [setup_dir, validate_dir, reset_dir]:
        d.mkdir(parents=True, exist_ok=True)
    create_file(validate_dir / \"validate-all.js\", VALIDATE_SCRIPT)
    create_file(feats / \"CHANGELOG.md\", CHANGELOG_INIT)

    # Template datasets for validation
    tmpl_dir = utils / \"template-datasets\"
    for ds in [\"PeopleDataset\", \"CompanyDataset\", \"ApplicationsDataset\"]:
        create_json(tmpl_dir / f\"{ds}.json\", dataset_template(ds.replace(\"Dataset\", \"\")))

    # Categories + Single Bridge
    for name, desc in CATEGORIES:
        cat_dir = cats / name
        cat_dir.mkdir(parents=True, exist_ok=True)
        create_json(cat_dir / \"config.json\", {\"name\": name, \"description\": desc})
        create_json(cat_dir / \"dataset.json\", dataset_template(name))
        create_json(cat_dir / \"bridge.json\", bridge_template(name))
        # Per-category resources
        res_dir = cat_dir / \"resources\"
        res_dir.mkdir(parents=True, exist_ok=True)
        create_file(res_dir / \"README.md\", f\"# {name} Resources\\nAdd docs, links, and samples here.\")
        print(f\"[+] Created category: {name}\")

    create_file(output / \"README.md\", \"# Copilot Instructions Output\\nThis folder stores logs and reports.\")

    print(\"\\n✅ Copilot Framework v0.0.6 built successfully under .github/copilot-instructions-work/\\n\")


# -----------------------------------------------------------------------------
# Run
# -----------------------------------------------------------------------------
if __name__ == \"__main__\":
    build_framework()
