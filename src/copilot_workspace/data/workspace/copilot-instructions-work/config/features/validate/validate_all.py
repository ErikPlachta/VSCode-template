#!/usr/bin/env python3
"""Validate dataset and bridge integrity for the Copilot workspace."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Dict, List

CONFIG_DIR = Path(__file__).resolve().parents[2]
CATEGORY_ROOT = CONFIG_DIR / "categories"
OUTPUT_DIR = Path(__file__).resolve().parents[3] / "copilot-instructions-output"


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
            print(
                f"{bridge_path}: dataset {participant_dataset} not found "
                "(conceptual datasets are allowed)",
            )
            continue
        available_columns = {column.get("name") for column in dataset.get("columns", [])}
        for key in participant.get("keys", []):
            if key not in available_columns:
                errors.append(f"{bridge_path}: key {key} missing in {participant_dataset}")


def main() -> None:
    """Validate all bridge files and report any schema errors."""

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    dataset_map = load_datasets(CATEGORY_ROOT)
    errors: List[str] = []
    for bridge_path in CATEGORY_ROOT.glob("*/bridge.json"):
        validate_bridge(bridge_path, dataset_map, errors)
    if errors:
        log_path = OUTPUT_DIR / "validate.log"
        log_path.write_text("\n".join(errors), encoding="utf-8")
        raise SystemExit("Validation failed, see validate.log")
    print("All bridge and dataset files validated successfully.")


if __name__ == "__main__":
    main()
