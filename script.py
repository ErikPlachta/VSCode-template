#!/usr/bin/env python3
# =============================================================================
# File: setup_copilot_framework_v0_0_4.py
# Author: Erik Plachta
# Version: 0.0.4
# -----------------------------------------------------------------------------
# Purpose:
#   Builds a complete, validated GitHub Copilot Chat configuration framework
#   under `.github/`, using Markdown-based instructions, renamed categories,
#   expanded dataset schemas, and cross-category bridge validation.
#
# =============================================================================

import json
from pathlib import Path
from textwrap import dedent


# -----------------------------------------------------------------------------
# Utility Functions
# -----------------------------------------------------------------------------
def create_file(path: Path, content: str):
    """Create a UTF-8 text file ensuring parent directories exist."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(dedent(content).strip() + "\n")


def create_json(path: Path, data: dict):
    """Create a JSON file ensuring parent directories exist."""
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


# -----------------------------------------------------------------------------
# Copilot Instructions (Markdown)
# -----------------------------------------------------------------------------
COPILOT_INSTRUCTIONS_MD = """\
# GitHub Copilot Chat Instructions

## 🧭 Purpose
Provide GitHub Copilot Chat with organizational context, relationships, and coding conventions for this workspace.

## ⚙️ Behavior
1. Use `copilot-instructions-config/categories/**/dataset.json` and `bridge-datasets/*.bridge.json` to resolve relationships.  
2. Reference configuration metadata for role, system, and data context.  
3. Maintain structured, factual explanations.  
4. Follow language-specific linting standards defined in `coding-languages`.

## 🧩 Categories
- **job** – Role requirements, workflows, policies, resources  
- **company** – Departments, reporting, governance  
- **people** – Roles, teams, collaboration  
- **data-architecture** – Datasets, schemas, warehouses  
- **applications** – Systems, APIs, integrations  
- **coding-languages** – Code standards, linting, snippets

## 🔗 Relationships
All cross-category joins are defined through `links.json` and `bridge-datasets/*.bridge.json`.  
Composite keys and bridge entities represent conceptual relationships (e.g., `EmployeeProjectBridge`).

## 🧠 Example Queries
- "Who owns the Power BI datasets that support Finance reporting?"
- "Show workflow policies for the Data Architecture team."
- "How does Databricks integrate with Teams notifications?"

---
_Last updated: v0.0.4 -- Erik Plachta_
"""


# -----------------------------------------------------------------------------
# Category Definitions
# -----------------------------------------------------------------------------
CATEGORIES = [
    ("job", "Defines role, deliverables, workflows, and policies."),
    ("company", "Departments, reporting structure, and governance."),
    ("people", "Individuals, teams, and responsibilities."),
    ("data-architecture", "Datasets, schemas, warehouses, and ETL flows."),
    ("applications", "Applications, APIs, and system integrations."),
    ("coding-languages", "Code standards, linting rules, reusable snippets.")
]


# -----------------------------------------------------------------------------
# Templates
# -----------------------------------------------------------------------------
def dataset_template(name: str):
    """Expanded dataset template with common join keys."""
    return {
        "dataset_name": f"{name}_Dataset",
        "primary_keys": ["ID"],
        "foreign_keys": [
            {"column": "EmployeeID", "references": "PeopleDataset.EmployeeID"},
            {"column": "DepartmentID", "references": "CompanyDataset.DepartmentID"}
        ],
        "columns": [
            {"name": "ID", "type": "INT"},
            {"name": "EmployeeID", "type": "INT"},
            {"name": "DepartmentID", "type": "INT"},
            {"name": "Name", "type": "VARCHAR(255)"},
            {"name": "ModifiedDate", "type": "DATETIME"}
        ],
        "notes": "Includes common join keys to ensure cross-category validation success."
    }


def bridge_template(name: str):
    """Bridge dataset template."""
    return {
        "$schema": "../utilities/bridge-dataset-schema.json",
        "bridge_name": f"{name.capitalize()}Bridge",
        "description": "Bridge connecting conceptual or physical entities.",
        "entity_type": "conceptual",
        "participants": [
            {"source_category": "company", "dataset": "CompanyDataset", "keys": ["DepartmentID"]},
            {"source_category": "people", "dataset": "PeopleDataset", "keys": ["EmployeeID"]}
        ],
        "bridge_keys": [
            {"name": "DepartmentID", "type": "INT"},
            {"name": "EmployeeID", "type": "INT"}
        ],
        "join_conditions": ["CompanyDataset.DepartmentID = PeopleDataset.DepartmentID"],
        "relationship_type": "one-to-many",
        "confidence_score": 0.95,
        "criticality": "medium",
        "created_by": "System",
        "last_validated": "2025-10-30"
    }


def links_template(name: str):
    """High-level relationship file with bridge references."""
    return {
        "relationships": [
            {
                "source": f"{name}_Dataset",
                "target": "CompanyDataset",
                "relationship_type": "one-to-many",
                "keys": {"source_key": "DepartmentID", "target_key": "DepartmentID"},
                "join_conditions": ["source.DepartmentID = target.DepartmentID"],
                "relationship_metadata": {"confidence_score": 0.9, "direction": "bidirectional"}
            }
        ],
        "bridges": [
            {"bridge_ref": "CompanyPeopleBridge", "source_keys": ["DepartmentID"], "target_keys": ["EmployeeID"]}
        ],
        "notes": "Extend this file with relevant bridges and relationships."
    }


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
| Workflow Policy | Defines automation or control rule | job |
"""


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
    if (!datasetMap[p.dataset]) {
      console.warn(`${filePath}: dataset ${p.dataset} not found (conceptual ok)`);
      return;
    }
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
# Rebuilds missing context files and refreshes index.
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

    # Create directories
    for d in [github, cfg, cats, utils, scripts]:
        d.mkdir(parents=True, exist_ok=True)

    # Create Copilot markdown
    create_file(github / ".copilot-instructions.md", COPILOT_INSTRUCTIONS_MD)

    # Framework README
    create_file(cfg / "README.md", """\
# Copilot Configuration Framework

This directory contains all contextual data for GitHub Copilot Chat.

| Section | Description |
|----------|-------------|
| categories/ | Core business and system contexts |
| utilities/ | Templates and schema files |
| scripts/ | Automation utilities |
""")

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

        # Bridge datasets
        bridge_dir = cat_dir / "bridge-datasets"
        bridge_dir.mkdir(parents=True, exist_ok=True)
        create_json(bridge_dir / f"{name}-template.bridge.json", bridge_template(name))

        # Resources
        resources = cat_dir / "resources"
        resources.mkdir(parents=True, exist_ok=True)
        create_file(resources / "glossary.md", GLOSSARY)
        if name == "job":
            create_file(resources / "framework.md", JOB_FRAMEWORK)

        print(f"[+] Created category: {name}")

    print("\n✅ Copilot Framework v0.0.4 built successfully.\n")


# -----------------------------------------------------------------------------
# Run
# -----------------------------------------------------------------------------
if __name__ == "__main__":
    build_framework()