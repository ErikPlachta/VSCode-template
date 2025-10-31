"""High-level utilities for generating the Copilot workspace files."""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from datetime import UTC, datetime
from pathlib import Path
from textwrap import dedent
from typing import Dict, Iterable, List, Mapping, Sequence, Tuple, Union

TextContent = str
JsonContent = Mapping[str, object]


CATEGORIES: Sequence[Tuple[str, str]] = (
    ("job", "Defines roles, workflows, policies, and required resources."),
    ("company", "Covers departments, governance, reporting, and structure."),
    ("people", "Defines individuals, teams, and cross-functional relationships."),
    ("data-architecture", "Outlines datasets, schemas, and ETL processes."),
    ("applications", "Lists applications, APIs, and data integrations."),
    ("coding-languages", "Specifies code standards, linting, and snippets."),
)

BRIDGE_DATASET_SCHEMA: Dict[str, object] = {
    "$id": "https://schema.local/bridge-dataset.schema.json",
    "title": "Bridge Dataset Definition",
    "type": "object",
    "required": [
        "bridge_name",
        "participants",
        "bridge_keys",
        "join_conditions",
        "relationship_type",
    ],
    "properties": {
        "bridge_name": {"type": "string"},
        "participants": {"type": "array"},
        "bridge_keys": {"type": "array"},
        "join_conditions": {"type": "array"},
        "relationship_type": {"type": "string"},
    },
}

COPILOT_INSTRUCTIONS_MD: TextContent = """\
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
"""

README_CONTENT_TEMPLATE: TextContent = """\
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
"""

OUTPUT_README: TextContent = """# Copilot Instructions Output\nThis folder stores logs and reports.\n"""

CHANGELOG_TEMPLATE: TextContent = """\
# CHANGELOG

This file records all automated and manual changes performed within the Copilot workspace.

| Date | Action | File | Details |
|------|---------|------|----------|
| {date} | INIT | install-github-copilot-instructions-work.py | Initial framework build |
"""

VALIDATE_SCRIPT: TextContent = """\
#!/usr/bin/env python3
'''Validate dataset and bridge integrity for the Copilot workspace.'''

from __future__ import annotations

import json
from pathlib import Path
from typing import Dict, List

CONFIG_DIR = Path(__file__).resolve().parents[2]
CATEGORY_ROOT = CONFIG_DIR / "categories"
OUTPUT_DIR = Path(__file__).resolve().parents[3] / "copilot-instructions-output"


def load_datasets(root: Path) -> Dict[str, dict]:
    '''Return dataset definitions keyed by dataset name.'''
    dataset_map: Dict[str, dict] = {}
    for dataset_path in root.glob("*/dataset.json"):
        dataset = json.loads(dataset_path.read_text(encoding="utf-8"))
        name = dataset.get("dataset_name")
        if name:
            dataset_map[str(name)] = dataset
    return dataset_map


def validate_bridge(bridge_path: Path, dataset_map: Dict[str, dict], errors: List[str]) -> None:
    '''Collect missing key errors for the provided bridge definition.'''
    bridge = json.loads(bridge_path.read_text(encoding="utf-8"))
    for participant in bridge.get("participants", []):
        participant_dataset = participant.get("dataset")
        if not participant_dataset:
            continue
        dataset = dataset_map.get(participant_dataset)
        if dataset is None:
            print(f"{bridge_path}: dataset {participant_dataset} not found (conceptual datasets are allowed)")
            continue
        available_columns = {column.get("name") for column in dataset.get("columns", [])}
        for key in participant.get("keys", []):
            if key not in available_columns:
                errors.append(f"{bridge_path}: key {key} missing in {participant_dataset}")


def main() -> None:
    '''Validate all bridge files and report any schema errors.'''
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    dataset_map = load_datasets(CATEGORY_ROOT)
    errors: List[str] = []
    for bridge_path in CATEGORY_ROOT.glob("*/bridge.json"):
        validate_bridge(bridge_path, dataset_map, errors)
    if errors:
        log_path = OUTPUT_DIR / "validate.log"
        log_path.write_text("\\n".join(errors), encoding="utf-8")
        raise SystemExit("Validation failed, see validate.log")
    print("All bridge and dataset files validated successfully.")


if __name__ == "__main__":
    main()
"""


def dataset_template(name: str) -> Dict[str, object]:
    """Return a base dataset schema used for each category and utility template."""
    formatted_name = name.replace(" ", "").capitalize()
    return {
        "dataset_name": f"{formatted_name}Dataset",
        "primary_keys": ["ID"],
        "foreign_keys": [
            {"column": "EmployeeID", "references": "PeopleDataset.EmployeeID"},
            {"column": "DepartmentID", "references": "CompanyDataset.DepartmentID"},
        ],
        "columns": [
            {"name": "ID", "type": "INT"},
            {"name": "EmployeeID", "type": "INT"},
            {"name": "DepartmentID", "type": "INT"},
            {"name": "Name", "type": "VARCHAR(255)"},
            {"name": "ModifiedDate", "type": "DATETIME"},
        ],
        "sample_rows": [
            {
                "ID": 1,
                "EmployeeID": 101,
                "DepartmentID": 10,
                "Name": f"{formatted_name} Example 1",
                "ModifiedDate": "2025-01-01",
            },
            {
                "ID": 2,
                "EmployeeID": 102,
                "DepartmentID": 20,
                "Name": f"{formatted_name} Example 2",
                "ModifiedDate": "2025-01-02",
            },
        ],
        "notes": "Template dataset for Copilot Chat validation.",
    }


def bridge_template(name: str, timestamp: datetime) -> Dict[str, object]:
    """Return a single per-category bridge definition."""
    formatted_name = name.replace(" ", "").capitalize()
    return {
        "$schema": "./utilities/bridge-dataset-schema.json",
        "bridge_name": f"{formatted_name}Bridge",
        "entity_type": "conceptual",
        "participants": [
            {
                "source_category": "company",
                "dataset": "CompanyDataset",
                "keys": ["DepartmentID"],
            },
            {
                "source_category": "people",
                "dataset": "PeopleDataset",
                "keys": ["EmployeeID"],
            },
        ],
        "bridge_keys": [
            {"name": "DepartmentID", "type": "INT"},
            {"name": "EmployeeID", "type": "INT"},
        ],
        "join_conditions": ["CompanyDataset.DepartmentID = PeopleDataset.DepartmentID"],
        "relationship_type": "one-to-many",
        "confidence_score": 0.95,
        "criticality": "medium",
        "created_by": "System",
        "last_validated": timestamp.strftime("%Y-%m-%d"),
    }


def _write_text(path: Path, content: TextContent) -> None:
    """Create a UTF-8 text file with the provided content."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(dedent(content).strip() + "\n", encoding="utf-8")


def _write_json(path: Path, data: JsonContent) -> None:
    """Create a JSON file with pretty formatting."""
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")


@dataclass
class WorkspaceBuilder:
    """Generate the full Copilot instructions workspace within a directory."""

    base_dir: Union[str, Path]
    timestamp: datetime = field(default_factory=lambda: datetime.now(UTC))

    def __post_init__(self) -> None:
        """Normalise the base directory as an absolute :class:`Path` instance."""
        self.base_dir = Path(self.base_dir).resolve()

    @property
    def github_dir(self) -> Path:
        """Return the `.github` directory under the base directory."""
        return self.base_dir / ".github"

    @property
    def workspace_dir(self) -> Path:
        """Return the workspace directory where configuration files are stored."""
        return self.github_dir / "copilot-instructions-work"

    @property
    def config_dir(self) -> Path:
        """Return the configuration directory within the workspace."""
        return self.workspace_dir / "config"

    @property
    def categories_dir(self) -> Path:
        """Return the categories directory under the configuration directory."""
        return self.config_dir / "categories"

    @property
    def utilities_dir(self) -> Path:
        """Return the utilities directory under the configuration directory."""
        return self.config_dir / "utilities"

    @property
    def features_dir(self) -> Path:
        """Return the features directory under the configuration directory."""
        return self.config_dir / "features"

    @property
    def output_dir(self) -> Path:
        """Return the output directory used to store validation results."""
        return self.github_dir / "copilot-instructions-output"

    def generate(self) -> Path:
        """Generate the workspace structure and files."""
        self._create_directories()
        self._write_static_files()
        self._write_categories()
        return self.workspace_dir

    def _create_directories(self) -> None:
        """Ensure that all required directories exist."""
        directories: Iterable[Path] = (
            self.github_dir,
            self.workspace_dir,
            self.config_dir,
            self.categories_dir,
            self.utilities_dir,
            self.features_dir,
            self.features_dir / "initial-setup",
            self.features_dir / "validate",
            self.features_dir / "reset",
            self.utilities_dir / "template-datasets",
            self.output_dir,
        )
        for directory in directories:
            directory.mkdir(parents=True, exist_ok=True)

    def _write_static_files(self) -> None:
        """Write static, non-category-specific files."""
        readme_content = README_CONTENT_TEMPLATE + f"\n\n_Last generated: {self.timestamp.strftime('%Y-%m-%d')}\n"
        changelog_content = CHANGELOG_TEMPLATE.format(date=self.timestamp.strftime("%Y-%m-%d"))
        _write_text(self.github_dir / ".copilot-instructions.md", COPILOT_INSTRUCTIONS_MD)
        _write_text(self.workspace_dir / "README.md", readme_content)
        _write_text(self.features_dir / "CHANGELOG.md", changelog_content)
        _write_text(self.features_dir / "validate" / "validate_all.py", VALIDATE_SCRIPT)
        _write_text(self.output_dir / "README.md", OUTPUT_README)
        _write_json(self.utilities_dir / "bridge-dataset-schema.json", BRIDGE_DATASET_SCHEMA)
        for template_name in ("PeopleDataset", "CompanyDataset", "ApplicationsDataset"):
            dataset_name = template_name.replace("Dataset", "")
            _write_json(
                self.utilities_dir / "template-datasets" / f"{template_name}.json",
                dataset_template(dataset_name),
            )

    def _write_categories(self) -> None:
        """Write configuration, dataset, and bridge files for each category."""
        for name, description in CATEGORIES:
            category_dir = self.categories_dir / name
            resources_dir = category_dir / "resources"
            resources_dir.mkdir(parents=True, exist_ok=True)
            _write_json(category_dir / "config.json", {"name": name, "description": description})
            _write_json(category_dir / "dataset.json", dataset_template(name))
            _write_json(category_dir / "bridge.json", bridge_template(name, self.timestamp))
            _write_text(resources_dir / "README.md", f"# {name} Resources\nAdd docs, links, and samples here.")


def generate_workspace(base_dir: Union[str, Path] = Path(".")) -> Path:
    """Generate the workspace at the provided base directory and return its path."""
    builder = WorkspaceBuilder(base_dir=base_dir)
    return builder.generate()
