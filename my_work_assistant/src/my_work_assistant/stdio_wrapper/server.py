"""Lightweight stdio wrapper mimicking MCP responses."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List

from ..core import ConfigLoader, Initializer
from ..github_manager.validator import Validator
from ..services.summary import SummaryGenerator
from ..utils import resolve_package_root, resolve_workspace_root

__all__ = ["StdioServer"]


@dataclass
class StdioServer:
    """Expose package capabilities over stdio for Copilot Chat."""

    project_root: Path

    def initialize(self) -> Dict[str, str]:
        package_root = resolve_package_root()
        workspace_root = resolve_workspace_root()
        initializer = Initializer(package_root=package_root, workspace_root=workspace_root)
        initializer.initialize()
        return {"status": "initialized", "workspace": str(workspace_root)}

    def validate(self) -> Dict[str, str]:
        package_root = resolve_package_root()
        validator = Validator(package_root=package_root, project_root=self.project_root)
        validator.validate_all()
        return {"status": "validated"}

    def changelog(self) -> Dict[str, str]:
        workspace_root = resolve_workspace_root()
        summary = SummaryGenerator(workspace_root / "logs" / "ChangeLog.md")
        return {"summary": summary.summarize()}

    def list_models(self) -> List[str]:
        models_dir = resolve_package_root() / "bin" / "defaults" / "models"
        return [path.stem for path in models_dir.glob("*.json")]
