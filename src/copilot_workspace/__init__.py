"""Utilities for generating and interacting with the Copilot workspace."""

from .actions import ActionRegistry, ActionResult, WorkspaceContext, default_registry
from .builder import WorkspaceBuilder, generate_workspace

__all__ = [
    "ActionRegistry",
    "ActionResult",
    "WorkspaceContext",
    "default_registry",
    "WorkspaceBuilder",
    "generate_workspace",
]
