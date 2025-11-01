"""Utilities to update models and schemas."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import shutil

__all__ = ["Updater"]


@dataclass
class Updater:
    """Synchronize default assets into the workspace."""

    source_root: Path
    destination_root: Path

    def update(self) -> None:
        """Copy files from the source into the destination."""

        if not self.source_root.exists():
            raise FileNotFoundError(str(self.source_root))
        self.destination_root.mkdir(parents=True, exist_ok=True)
        for path in self.source_root.rglob("*"):
            relative = path.relative_to(self.source_root)
            target = self.destination_root / relative
            if path.is_dir():
                target.mkdir(parents=True, exist_ok=True)
            else:
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(path, target)
