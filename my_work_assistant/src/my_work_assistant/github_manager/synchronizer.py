"""Synchronize GitHub workspace files with a cache directory."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import shutil

__all__ = ["Synchronizer"]


@dataclass
class Synchronizer:
    """Copy `.github` contents into the workspace cache."""

    project_root: Path
    cache_root: Path

    def sync(self) -> None:
        """Synchronize GitHub assets to the cache directory."""

        github_root = self.project_root / ".github"
        destination = self.cache_root / "github"
        if destination.exists():
            shutil.rmtree(destination)
        shutil.copytree(github_root, destination)
