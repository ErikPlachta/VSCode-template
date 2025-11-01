"""Configuration loader for my_work_assistant."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable
import json

from ..types import ConfigData, JSONDict, MutableJSONMapping

__all__ = ["ConfigLoader"]


@dataclass
class ConfigLoader:
    """Load and merge configuration data from default and user sources."""

    package_root: Path
    workspace_root: Path

    def _load_json(self, path: Path) -> JSONDict:
        """Load JSON content from *path*.

        Args:
            path: Path to a JSON file.

        Returns:
            Parsed JSON dictionary. Returns an empty dictionary when the file
            does not exist to keep merging logic simple.
        """

        if not path.exists():
            return {}
        with path.open("r", encoding="utf-8") as handle:
            data = json.load(handle)
        return data

    def _iter_sources(self) -> Iterable[Path]:
        """Yield configuration file locations in priority order."""

        default_path = self.package_root / "bin" / "defaults" / "config" / "my-work-assistant.config.json"
        workspace_path = self.workspace_root / "my-work-assistant.config.json"
        yield default_path
        yield workspace_path

    def _deep_merge(self, base: MutableJSONMapping, update: JSONDict) -> MutableJSONMapping:
        """Recursively merge ``update`` into ``base``.

        Primitive values are overwritten while dictionaries are merged
        recursively. Lists are replaced entirely to ensure deterministic
        behavior when defaults change.
        """

        for key, value in update.items():
            if key in base and isinstance(base[key], dict) and isinstance(value, dict):
                base[key] = self._deep_merge(base[key], value)  # type: ignore[index]
            else:
                base[key] = value
        return base

    def load(self) -> ConfigData:
        """Load and merge configuration data."""

        merged: MutableJSONMapping = {}
        for source in self._iter_sources():
            data = self._load_json(source)
            merged = self._deep_merge(merged, data)
        return merged  # type: ignore[return-value]

    @property
    def logging_directory(self) -> Path:
        """Path to the workspace log directory."""

        return self.workspace_root / "logs"

    @property
    def docs_directory(self) -> Path:
        """Path to the workspace documentation directory."""

        return self.workspace_root / "docs"

    @property
    def cache_directory(self) -> Path:
        """Path to the workspace cache directory."""

        return self.workspace_root / "cache"
