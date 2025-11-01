"""Workspace initialization utilities."""

from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
import shutil

from .config import ConfigLoader

__all__ = ["Initializer"]


@dataclass
class Initializer:
    """Set up workspace directories and seed default files."""

    package_root: Path
    workspace_root: Path

    def _copy_tree(self, source: Path, destination: Path) -> None:
        """Copy *source* tree into *destination*.

        The function performs manual iteration instead of relying on
        ``shutil.copytree`` to support incremental updates. Existing files are
        overwritten to keep templates in sync.
        """

        for path in source.rglob("*"):
            relative = path.relative_to(source)
            target = destination / relative
            if path.is_dir():
                target.mkdir(parents=True, exist_ok=True)
            else:
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(path, target)

    def _log_initialization(self) -> None:
        """Append an initialization entry to the request log."""

        log_path = self.workspace_root / "logs" / "RequestLog.md"
        log_path.parent.mkdir(parents=True, exist_ok=True)
        timestamp = datetime.now(timezone.utc).isoformat()
        entry = (
            f"\n## {timestamp}\n"
            "- source: initializer\n"
            "- summary: workspace initialized\n"
            "- actions: copied defaults, merged configuration\n"
            "- result: success\n"
        )
        with log_path.open("a", encoding="utf-8") as handle:
            handle.write(entry)

    def initialize(self) -> ConfigLoader:
        """Create the workspace directories and copy default assets."""

        self.workspace_root.mkdir(parents=True, exist_ok=True)
        defaults_root = self.package_root / "bin" / "defaults"
        self._copy_tree(defaults_root, self.workspace_root)
        config_loader = ConfigLoader(
            package_root=self.package_root,
            workspace_root=self.workspace_root,
        )
        config_loader.load()
        self._log_initialization()
        return config_loader
