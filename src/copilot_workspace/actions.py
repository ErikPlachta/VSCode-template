"""Action registry for Copilot workspace automation utilities."""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Callable, Dict, Iterable, List, Mapping, MutableMapping, Optional

from .workspace import (
    WorkspacePaths,
    bridge_template,
    dataset_template,
    ensure_workspace,
    load_datasets,
    validate_bridge,
)


JsonLike = Mapping[str, Any] | List[Any]
WorkspaceAction = Callable[["WorkspaceContext", Mapping[str, Any] | None], "ActionResult"]


@dataclass
class ActionResult:
    """Lightweight result container produced by a workspace action."""

    summary: str
    data: Optional[JsonLike] = None

    def to_dict(self) -> Dict[str, Any]:
        """Return a serialisable mapping of the action result."""

        payload: Dict[str, Any] = {"summary": self.summary}
        if self.data is not None:
            payload["data"] = self.data
        return payload


@dataclass
class WorkspaceContext:
    """Runtime context for interacting with a Copilot workspace."""

    base_dir: Path | str
    paths: WorkspacePaths | None = None

    def __post_init__(self) -> None:
        """Initialise workspace helper paths."""

        base_path = Path(self.base_dir).resolve()
        self.base_dir = base_path
        self.paths = WorkspacePaths(base_path)

    @property
    def workspace_dir(self) -> Path:
        """Return the directory that stores configuration assets."""

        assert self.paths is not None
        return self.paths.workspace_dir

    def ensure_workspace(self) -> Path:
        """Ensure the packaged workspace exists in the target directory."""

        return ensure_workspace(self.base_dir)

    def _category_dirs(self) -> Iterable[Path]:
        """Yield category directories beneath the workspace."""

        assert self.paths is not None
        categories_dir = self.paths.categories_dir
        self.ensure_workspace()
        return sorted(path for path in categories_dir.iterdir() if path.is_dir())

    def load_category_metadata(self) -> List[Dict[str, Any]]:
        """Load basic metadata for each configured category."""

        metadata: List[Dict[str, Any]] = []
        for category_dir in self._category_dirs():
            config_path = category_dir / "config.json"
            dataset_path = category_dir / "dataset.json"
            bridge_path = category_dir / "bridge.json"
            config = json.loads(config_path.read_text(encoding="utf-8"))
            dataset = json.loads(dataset_path.read_text(encoding="utf-8"))
            bridge = json.loads(bridge_path.read_text(encoding="utf-8"))
            metadata.append(
                {
                    "name": config.get("name"),
                    "description": config.get("description"),
                    "dataset": dataset.get("dataset_name"),
                    "bridge": bridge.get("bridge_name"),
                }
            )
        return metadata

    def load_bridge_diagnostics(self) -> Dict[str, List[str]]:
        """Return validation diagnostics for every bridge file."""

        assert self.paths is not None
        self.ensure_workspace()
        category_root = self.paths.categories_dir
        datasets = load_datasets(category_root)
        errors: List[str] = []
        for bridge_path in category_root.glob("*/bridge.json"):
            validate_bridge(bridge_path, datasets, errors)
        return {"errors": errors}


@dataclass
class ActionRegistry:
    """Registry of callable workspace actions."""

    _actions: MutableMapping[str, WorkspaceAction] = field(default_factory=dict)
    _descriptions: MutableMapping[str, str] = field(default_factory=dict)

    def register(self, name: str, description: str, action: WorkspaceAction) -> None:
        """Register an action that can be executed later."""

        normalised = name.strip().lower()
        self._actions[normalised] = action
        self._descriptions[normalised] = description

    def run(self, name: str, context: WorkspaceContext, options: Mapping[str, Any] | None = None) -> ActionResult:
        """Execute the named action with the provided context."""

        normalised = name.strip().lower()
        try:
            action = self._actions[normalised]
        except KeyError as exc:
            available = ", ".join(sorted(self._actions)) or "<none>"
            raise KeyError(f"Unknown action '{name}'. Available actions: {available}") from exc
        return action(context, options)

    def describe(self) -> Dict[str, str]:
        """Return a mapping of action names to descriptions."""

        return dict(sorted(self._descriptions.items()))


def _action_list_categories(context: WorkspaceContext, _options: Mapping[str, Any] | None) -> ActionResult:
    """Return metadata describing every configured category."""

    metadata = context.load_category_metadata()
    summary = f"Found {len(metadata)} configured categories."
    return ActionResult(summary=summary, data={"categories": metadata})


def _action_validate(context: WorkspaceContext, _options: Mapping[str, Any] | None) -> ActionResult:
    """Validate bridges against datasets and report failures."""

    diagnostics = context.load_bridge_diagnostics()
    errors = diagnostics.get("errors", [])
    summary = "Validation succeeded." if not errors else f"Validation failed with {len(errors)} error(s)."
    return ActionResult(summary=summary, data=diagnostics)


def _action_preview_templates(context: WorkspaceContext, _options: Mapping[str, Any] | None) -> ActionResult:
    """Preview the default dataset and bridge templates available for new categories."""

    # Templates rely on the same helper functions used during generation.
    people_template = dataset_template("people")
    company_template = dataset_template("company")
    applications_template = dataset_template("applications")
    bridge_sample = bridge_template("default")
    return ActionResult(
        summary="Provided dataset and bridge template previews.",
        data={
            "datasets": {
                "people": people_template,
                "company": company_template,
                "applications": applications_template,
            },
            "bridge": bridge_sample,
        },
    )


def default_registry() -> ActionRegistry:
    """Return an action registry populated with common workspace helpers."""

    registry = ActionRegistry()
    registry.register(
        "list_categories",
        "Summarise configured categories and their core assets.",
        _action_list_categories,
    )
    registry.register(
        "validate",
        "Validate bridges against datasets and report diagnostics.",
        _action_validate,
    )
    registry.register(
        "preview_templates",
        "Return sample dataset and bridge templates for bootstrap guidance.",
        _action_preview_templates,
    )
    return registry


__all__ = [
    "ActionRegistry",
    "ActionResult",
    "WorkspaceAction",
    "WorkspaceContext",
    "default_registry",
]
