"""Utilities for generating and interacting with the Copilot workspace."""

from .actions import ActionRegistry, ActionResult, WorkspaceContext, default_registry
from .workspace import (
    CATEGORIES,
    WorkspacePaths,
    WorkspaceValidationError,
    bridge_template,
    dataset_template,
    ensure_workspace,
    generate_workspace,
    load_datasets,
    validate_bridge,
    validate_workspace,
)

__all__ = [
    "ActionRegistry",
    "ActionResult",
    "WorkspaceContext",
    "default_registry",
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
