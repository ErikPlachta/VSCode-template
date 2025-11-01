"""Establish relationships between models."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
import json
from typing import Dict, List

from ..types import JSONDict

__all__ = ["BridgeBuilder"]


@dataclass
class BridgeBuilder:
    """Create lookup tables between model entities."""

    models_root: Path

    def _load(self, name: str) -> List[JSONDict]:
        path = self.models_root / f"{name}.json"
        if not path.exists():
            return []
        with path.open("r", encoding="utf-8") as handle:
            return json.load(handle)

    def build(self) -> Dict[str, List[str]]:
        """Build simple cross references between categories and datasets."""

        categories = {item["id"]: item for item in self._load("categories")}
        bridges: Dict[str, List[str]] = {key: [] for key in categories}
        datasets_path = self.models_root / "datasets.json"
        if datasets_path.exists():
            datasets = json.loads(datasets_path.read_text(encoding="utf-8"))
            for dataset in datasets:
                for category in dataset.get("categories", []):
                    if category in bridges:
                        bridges[category].append(dataset["id"])
        return bridges
