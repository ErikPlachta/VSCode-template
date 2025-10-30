#!/usr/bin/env python3
# =============================================================================
# File: setup_copilot_framework_v0_0_3_FINAL.py
# Author: Erik Plachta
# Version: 0.0.3 (Final)
# -----------------------------------------------------------------------------
# Purpose:
#   Generates a complete GitHub Copilot Configuration Framework under `.github/`
#   with schema validation, extended job framework, and cross-category
#   consistency checks for bridge datasets.
#
# Outputs:
#   .github/.copilot-instructions
#   .github/copilot-instructions-config/
#       ├── globals/
#       ├── categories/
#       ├── utilities/
#       ├── scripts/
#
# =============================================================================

import json
from pathlib import Path
from textwrap import dedent

# -----------------------------------------------------------------------------
# Utility Functions
# -----------------------------------------------------------------------------

def create_file(path: Path, content: str):
    """Create a UTF-8 text file with ensured parent directories."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(dedent(content).strip() + "\n")

def create_json(path: Path, data: dict):
    """Create a JSON file with ensured parent directories."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

# -----------------------------------------------------------------------------
# .copilot-instructions
# -----------------------------------------------------------------------------

COPILOT_INSTRUCTIONS = """\
version: 1
purpose: >
  Enables GitHub Copilot Chat to act as a reasoning system aware of datasets,
  bridges, relationships, and job context across the organization.

behavior:
  - Use dataset.json and bridge-datasets/*.bridge.json to infer key relationships.
  - Reference utilities/bridge-dataset-schema.json for schema validation.
  - Maintain factual, typed, structured responses.

context_integration:
  - globals: .github/copilot-instructions-config/globals/*
  - categories: .github/copilot-instructions-config/categories/*
  - datasets: .github/copilot-instructions-config/categories/**/dataset.json
  - bridges: .github/copilot-instructions-config/categories/**/bridge-datasets/*.bridge.json
  - utilities: .github/copilot-instructions-config/utilities/*
  - scripts: .github/copilot-instructions-config/scripts/*

examples:
  - "To trace project allocation, follow EmployeeProjectBridge between HRDataset and ProjectDataset."
  - "To align workflows with policy, join WorkflowPolicyBridge between understanding-job and applications."
"""

# -----------------------------------------------------------------------------
# Category Definitions
# -----------------------------------------------------------------------------

CATEGORIES = [
    ("understanding-job", "Defines role, deliverables, workflows, policies, and dependencies."),
    ("understanding-company", "Outlines departments, reporting, and inter-departmental relationships."),
    ("understanding-people", "Captures individuals, teams, and collaboration patterns."),
    ("data-architecture", "Describes datasets, schemas, warehouses, and ETL flows."),
    ("applications", "Lists applications, APIs, integrations, and ownership."),
    ("coding-languages", "Documents code standards, linting rules, and reusable templates.")
]

# -----------------------------------------------------------------------------
# Templates
# -----------------------------------------------------------------------------

def dataset_template(name: str):
    return {
        "dataset_name": f"{name}_Dataset",
        "primary_keys": ["ID"],
        "foreign_keys": [
            {"column": "RelatedID", "references": "OtherDataset.ID", "relationship_type": "one-to-many"}
        ],
        "columns": [
            {"name": "ID", "type": "INT", "description": "Primary key"},
            {"name": "Name", "type": "VARCHAR(255)", "description": "Entity name"},
            {"name": "ModifiedDate", "type": "DATETIME", "description": "Last modified timestamp"}
        ],
        "notes": "Extend this with domain-specific schema fields."
    }

def bridge_template(name: str):
    return {
        "$schema": "../utilities/bridge-dataset-schema.json",
        "bridge_name": f"{name.capitalize()}Bridge",
        "description": "Bridge template connecting conceptual or physical entities.",
        "entity_type": "conceptual",
        "participants": [
            {"source_category": "CategoryA", "dataset": "DatasetA", "keys": ["KeyA1"]},
            {"source_category": "CategoryB", "dataset": "DatasetB", "keys": ["KeyB1"]}
        ],
        "bridge_keys": [
            {"name": "KeyA1", "type": "INT"},
            {"name": "KeyB1", "type": "INT"}
        ],
        "join_conditions": ["DatasetA.KeyA1 = DatasetB.KeyB1"],
        "conditional_rules": [],
        "relationship_type": "one-to-many",
        "confidence_score": 1.0,
        "criticality": "medium",
        "created_by": "",
        "last_validated": ""
    }

def links_template(name: str):
    return {
        "relationships": [
            {
                "source": f"{name}_Dataset",
                "target": "FinanceDataset",
                "relationship_type": "one-to-many",
                "keys": {"source_key": "EmployeeID", "target_key": "EmployeeID"},
                "join_conditions": ["source.EmployeeID = target.EmployeeID"],
                "relationship_metadata": {"confidence_score": 0.9, "direction": "bidirectional"}
            }
        ],
        "bridges": [
            {"bridge_ref": "TemplateBridge", "source_keys": ["EmployeeID"], "target_keys": ["DepartmentID"]}
        ],
        "notes": "Extend this file with relevant bridges and relationships."
    }

# -----------------------------------------------------------------------------
# Context Templates
# -----------------------------------------------------------------------------

CONTEXT_TEMPLATE = """\
# {category}

## Purpose
{description}

## Files
- dataset.json: Schema and key definitions.
- bridge-datasets/*.bridge.json: Composite or conceptual bridges.
- links.json: High-level relationships and references.

Copilot will:
1. Load dataset.json for keys.
2. Resolve relationships via links.json.
3. Apply bridge joins for conceptual mappings.
"""

JOB_FRAMEWORK = """\
# Job Framework

## Job Requirements
| Area | Description | Examples |
|-------|--------------|-----------|
| Skills | Core technical and soft skills | Data modeling, Power BI, Python |
| Certifications | Required credentials | AZ-204, PL-300 |
| Access | Required system access | Azure SQL, Databricks |
| Compliance | Organizational policies | GDPR, ISO 27001 |

## Workflows
| Stage | Description | Tools |
|--------|-------------|--------|
| Intake | Receive data requests | ServiceNow |
| Analysis | Explore data | Power BI, SQL |
| Transformation | ETL operations | Databricks |
| Delivery | Publish output | Power BI Service |

## Policies
- Data governance follows retention and classification policies.
- All transformations must pass schema validation.

## Resources
| Type | Location | Purpose |
|-------|-----------|----------|
| SOPs | SharePoint/SOPs | Process documentation |
| Templates | utilities/snippets | Code templates |
| Training | LMS Portal | Onboarding modules |
| Helpdesk | Teams/#data-support | Live assistance |
"""

GLOSSARY = """\
# Glossary

| Term | Definition | Category |
|------|-------------|-----------|
| Foreign Key | Column linking one dataset to another | data-architecture |
| Bridge Dataset | Synthetic entity joining multiple sources | data-architecture |
| Workflow Policy | Defines automation or control rule | understanding-job |
"""

# -----------------------------------------------------------------------------
# Utilities and Schema Files
# -----------------------------------------------------------------------------

BRIDGE_DATASET_SCHEMA = {
    "$id": "https://schema.local/bridge-dataset.schema.json",
    "title": "Bridge Dataset Definition",
    "type": "object",
    "required": ["bridge_name", "participants", "bridge_keys", "join_conditions", "relationship_type"],
    "properties": {
        "bridge_name": {"type": "string"},
        "entity_type": {"type": "string"},
        "participants": {
            "type": "array",
            "items": {
                "type": "object",
                "required": ["source_category", "dataset", "keys"]
            }
        },
        "bridge_keys": {
            "type": "array",
            "items": {"type": "object", "required": ["name", "type"]}
        },
        "join_conditions": {"type": "array", "items": {"type": "string"}},
        "conditional_rules": {"type": "array"},
        "relationship_type": {"type": "string"}
    }
}

# -----------------------------------------------------------------------------
# Scripts
# -----------------------------------------------------------------------------

BUILD_INDEX_JS = """\
// build-index.js
import fs from 'fs';
import path from 'path';

const root = './.github/copilot-instructions-config/categories';
const index = [];

for (const dir of fs.readdirSync(root)) {
  const cfgPath = path.join(root, dir, 'config.json');
  const dataPath = path.join(root, dir, 'dataset.json');
  if (fs.existsSync(cfgPath)) {
    const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
    const dataset = fs.existsSync(dataPath)
      ? JSON.parse(fs.readFileSync(dataPath, 'utf8'))
      : {};
    index.push({ name: cfg.name, dataset: dataset.dataset_name || null, tags: cfg.tags || [] });
  }
}

fs.writeFileSync('./.github/copilot-instructions-config/index.json', JSON.stringify(index, null, 2));
console.log('Index rebuilt successfully.');
"""

VALIDATE_CONFIGS_JS = """\
// validate-configs.js
import fs from 'fs';
import path from 'path';

const root = './.github/copilot-instructions-config/categories';
let errors = [];

for (const dir of fs.readdirSync(root)) {
  const base = path.join(root, dir);
  ['config.json', 'dataset.json', 'links.json'].forEach(file => {
    if (!fs.existsSync(path.join(base, file))) errors.push(`${dir}: missing ${file}`);
  });
}

if (errors.length) {
  console.error('Validation errors:\\n' + errors.join('\\n'));
  process.exit(1);
} else {
  console.log('All configurations valid.');
}
"""

VALIDATE_BRIDGES_JS = """\
// validate-bridges.js
// Validates bridge datasets and checks cross-category references.

import fs from 'fs';
import path from 'path';

const base = './.github/copilot-instructions-config/categories';
const errors = [];

function loadDatasetMap() {
  const map = {};
  for (const cat of fs.readdirSync(base)) {
    const dataPath = path.join(base, cat, 'dataset.json');
    if (fs.existsSync(dataPath)) {
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      map[data.dataset_name] = data;
    }
  }
  return map;
}

function validateBridge(filePath, datasetMap) {
  const b = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const required = ['bridge_name', 'participants', 'bridge_keys', 'join_conditions', 'relationship_type'];
  required.forEach(r => { if (!b[r]) errors.push(`${filePath}: missing ${r}`); });

  b.participants.forEach(p => {
    if (!datasetMap[p.dataset]) errors.push(`${filePath}: referenced dataset ${p.dataset} not found`);
    p.keys.forEach(k => {
      const match = datasetMap[p.dataset]?.columns?.some(c => c.name === k);
      if (!match) errors.push(`${filePath}: key ${k} missing in ${p.dataset}`);
    });
  });
}

const datasetMap = loadDatasetMap();

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) walk(res);
    else if (entry.name.endsWith('.bridge.json')) validateBridge(res, datasetMap);
  }
}

walk(base);

if (errors.length) {
  console.error('Bridge validation errors:\\n' + errors.join('\\n'));
  process.exit(1);
} else {
  console.log('All bridge datasets validated successfully.');
}
"""

REFRESH_CONTEXT_PS1 = """\
# refresh-context.ps1
# Rebuilds missing context files and refreshes the index.
$base = ".github/copilot-instructions-config/categories"
$cats = Get-ChildItem $base -Directory
foreach ($c in $cats) {
    if (-not (Test-Path "$($c.FullName)/context.md")) {
        Copy-Item ".github/copilot-instructions-config/utilities/category-template.md" "$($c.FullName)/context.md"
    }
}
node .github/copilot-instructions-config/scripts/build-index.js
"""

# -----------------------------------------------------------------------------
# Build Function
# -----------------------------------------------------------------------------

def build_framework(base_dir="."):
    base = Path(base_dir)
    github = base / ".github"
    cfg = github / "copilot-instructions-config"
    cats = cfg / "categories"
    utils = cfg / "utilities"
    scripts = cfg / "scripts"
    globals_dir = cfg / "globals"

    for d in [github, cfg, cats, utils, scripts, globals_dir]:
        d.mkdir(parents=True, exist_ok=True)

    create_file(github / ".copilot-instructions", COPILOT_INSTRUCTIONS)

    # Globals
    create_file(globals_dir / "company-overview.md", "# Company Overview\nDetailed company structure.")
    create_file(globals_dir / "data-ecosystem.md", "# Data Ecosystem\nEnd-to-end data flow map.")
    create_file(globals_dir / "systems-map.md", "# Systems Map\nDefines system relationships.")

    # Utilities
    create_json(utils / "bridge-dataset-schema.json", BRIDGE_DATASET_SCHEMA)
    create_json(utils / "schema-template.json", dataset_template("Template"))
    create_json(utils / "link-template.json", links_template("Template"))
    create_json(utils / "bridge-dataset-template.json", bridge_template("Template"))
    create_file(utils / "category-template.md", CONTEXT_TEMPLATE.format(category="Template", description="Template for new category."))

    # Scripts
    create_file(scripts / "build-index.js", BUILD_INDEX_JS)
    create_file(scripts / "validate-configs.js", VALIDATE_CONFIGS_JS)
    create_file(scripts / "validate-bridges.js", VALIDATE_BRIDGES_JS)
    create_file(scripts / "refresh-context.ps1", REFRESH_CONTEXT_PS1)

    # Categories
    for name, desc in CATEGORIES:
        cat_dir = cats / name
        cat_dir.mkdir(parents=True, exist_ok=True)

        create_json(cat_dir / "config.json", {"name": name, "description": desc, "tags": [name]})
        create_json(cat_dir / "dataset.json", dataset_template(name))
        create_json(cat_dir / "links.json", links_template(name))
        create_file(cat_dir / "context.md", CONTEXT_TEMPLATE.format(category=name, description=desc))

        bridge_dir = cat_dir / "bridge-datasets"
        bridge_dir.mkdir(parents=True, exist_ok=True)
        create_json(bridge_dir / f"{name}-template.bridge.json", bridge_template(name))

        resources = cat_dir / "resources"
        resources.mkdir(parents=True, exist_ok=True)
        create_file(resources / "glossary.md", GLOSSARY)

        if name == "understanding-job":
            create_file(resources / "framework.md", JOB_FRAMEWORK)

        print(f"[+] Created category: {name}")

    print("\n✅ Copilot Framework v0.0.3 (Final) built successfully.\n")

# -----------------------------------------------------------------------------
# Run
# -----------------------------------------------------------------------------

if __name__ == "__main__":
    build_framework()