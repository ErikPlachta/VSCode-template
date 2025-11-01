"""Utilities for synchronising the packaged Copilot workspace."""

from __future__ import annotations

import json
import shutil
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, Iterable, List, Mapping, Sequence, Tuple

PACKAGE_ROOT = Path(__file__).resolve().parent
TEMPLATE_ROOT = PACKAGE_ROOT / "data" / "workspace"

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

REQUIRED_FILES: Sequence[str] = (
    ".copilot-instructions.md",
    "copilot-instructions-work/README.md",
    "copilot-instructions-work/config/features/CHANGELOG.md",
    "copilot-instructions-work/config/features/validate/validate_all.py",
    "copilot-instructions-work/config/utilities/bridge-dataset-schema.json",
)


class WorkspaceValidationError(RuntimeError):
    """Raised when validation fails for an existing workspace."""

    def __init__(self, errors: List[str]):
        super().__init__("; ".join(errors))
        self.errors = errors


def _copy_template(destination: Path) -> None:
    """Copy the embedded `.github` template to ``destination``."""

    if destination.exists():
        raise FileExistsError(f"Destination {destination} already exists")
    shutil.copytree(TEMPLATE_ROOT, destination)


def load_datasets(root: Path) -> Dict[str, dict]:
    """Return dataset definitions keyed by dataset name."""

    dataset_map: Dict[str, dict] = {}
    for dataset_path in root.glob("*/dataset.json"):
        dataset = json.loads(dataset_path.read_text(encoding="utf-8"))
        name = dataset.get("dataset_name")
        if name:
            dataset_map[str(name)] = dataset
    return dataset_map


def validate_bridge(bridge_path: Path, dataset_map: Dict[str, dict], errors: List[str]) -> None:
    """Collect missing key errors for the provided bridge definition."""

    bridge = json.loads(bridge_path.read_text(encoding="utf-8"))
    for participant in bridge.get("participants", []):
        participant_dataset = participant.get("dataset")
        if not participant_dataset:
            continue
        dataset = dataset_map.get(participant_dataset)
        if dataset is None:
            # Conceptual datasets are valid but surfaced for awareness.
            continue
        available_columns = {column.get("name") for column in dataset.get("columns", [])}
        for key in participant.get("keys", []):
            if key not in available_columns:
                errors.append(f"{bridge_path}: key {key} missing in {participant_dataset}")


def validate_workspace(github_dir: Path) -> List[str]:
    """Validate that an existing workspace matches expectations."""

    errors: List[str] = []
    for relative_path in REQUIRED_FILES:
        candidate = github_dir / relative_path
        if not candidate.exists():
            errors.append(f"Missing required file: {relative_path}")
    workspace_dir = github_dir / "copilot-instructions-work"
    categories_dir = workspace_dir / "config" / "categories"
    if not categories_dir.exists():
        errors.append("Missing categories directory at copilot-instructions-work/config/categories")
        return errors
    dataset_map = load_datasets(categories_dir)
    for category_dir in sorted(p for p in categories_dir.iterdir() if p.is_dir()):
        for filename in ("config.json", "dataset.json", "bridge.json"):
            candidate = category_dir / filename
            if not candidate.is_file():
                errors.append(f"Missing {filename} in {category_dir.relative_to(github_dir)}")
    bridge_errors: List[str] = []
    for bridge_path in categories_dir.glob("*/bridge.json"):
        validate_bridge(bridge_path, dataset_map, bridge_errors)
    errors.extend(bridge_errors)
    return errors


def ensure_workspace(base_dir: Path | str) -> Path:
    """Ensure the `.github` workspace exists or validate it if already present."""

    base_path = Path(base_dir).resolve()
    github_dir = base_path / ".github"
    if not github_dir.exists():
        _copy_template(github_dir)
    else:
        errors = validate_workspace(github_dir)
        if errors:
            raise WorkspaceValidationError(errors)
    return github_dir / "copilot-instructions-work"


def generate_workspace(base_dir: Path | str) -> Path:
    """Create or refresh the Copilot workspace at ``base_dir``."""

    base_path = Path(base_dir).resolve()
    github_dir = base_path / ".github"
    if github_dir.exists():
        shutil.rmtree(github_dir)
    _copy_template(github_dir)
    return github_dir / "copilot-instructions-work"


def _template_dataset_path(name: str) -> Path:
    formatted = name.replace(" ", "").capitalize()
    filename = f"{formatted}Dataset.json"
    candidate = TEMPLATE_ROOT / "copilot-instructions-work" / "config" / "utilities" / "template-datasets" / filename
    return candidate


def dataset_template(name: str) -> Dict[str, object]:
    """Return a dataset template loaded from the embedded assets."""

    path = _template_dataset_path(name)
    if not path.is_file():
        raise FileNotFoundError(f"No dataset template available for {name}")
    return json.loads(path.read_text(encoding="utf-8"))


def bridge_template(name: str) -> Dict[str, object]:
    """Return a sample bridge template with static metadata."""

    formatted_name = name.replace(" ", "").capitalize()
    template_path = TEMPLATE_ROOT / "copilot-instructions-work" / "config" / "categories" / "job" / "bridge.json"
    bridge = json.loads(template_path.read_text(encoding="utf-8"))
    bridge["bridge_name"] = f"{formatted_name}Bridge"
    return bridge


@dataclass
class WorkspacePaths:
    """Convenience accessors for key workspace directories."""

    base_dir: Path

    @property
    def github_dir(self) -> Path:
        return self.base_dir / ".github"

    @property
    def workspace_dir(self) -> Path:
        return self.github_dir / "copilot-instructions-work"

    @property
    def config_dir(self) -> Path:
        return self.workspace_dir / "config"

    @property
    def categories_dir(self) -> Path:
        return self.config_dir / "categories"

    @property
    def output_dir(self) -> Path:
        return self.github_dir / "copilot-instructions-output"


__all__ = [
    "CATEGORIES",
    "WorkspacePaths",
    "WorkspaceValidationError",
    "bridge_template",
    "dataset_template",
    "ensure_workspace",
    "generate_workspace",
    "load_datasets",
    "validate_bridge",
    "validate_workspace",
]
