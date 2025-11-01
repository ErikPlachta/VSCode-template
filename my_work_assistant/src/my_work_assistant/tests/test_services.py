from __future__ import annotations

from pathlib import Path
import json

import pytest

from my_work_assistant.services.bridges import BridgeBuilder
from my_work_assistant.services.summary import SummaryGenerator
from my_work_assistant.services.updater import Updater
from my_work_assistant.services.validator import SchemaValidator


def test_bridge_builder(tmp_path: Path) -> None:
    models = tmp_path / "models"
    models.mkdir()
    (models / "categories.json").write_text('[{"id": "cat", "name": "Category"}]', encoding="utf-8")
    (models / "datasets.json").write_text('[{"id": "ds", "categories": ["cat"]}]', encoding="utf-8")
    builder = BridgeBuilder(models)
    bridges = builder.build()
    assert bridges["cat"] == ["ds"]


def test_bridge_builder_missing_categories(tmp_path: Path) -> None:
    builder = BridgeBuilder(tmp_path)
    assert builder.build() == {}


def test_schema_validator(tmp_path: Path) -> None:
    schema_root = tmp_path
    schema = {"type": "object", "properties": {"name": {"type": "string"}}, "required": ["name"]}
    (schema_root / "schema.json").write_text(json.dumps(schema), encoding="utf-8")
    validator = SchemaValidator(schema_root)
    validator.validate("schema.json", {"name": "value"})


def test_schema_validator_errors(tmp_path: Path) -> None:
    schema_root = tmp_path
    schema = {"type": "object", "properties": {"name": {"type": "string"}}, "required": ["name"]}
    (schema_root / "schema.json").write_text(json.dumps(schema), encoding="utf-8")
    validator = SchemaValidator(schema_root)
    with pytest.raises(ValueError):
        validator.validate("schema.json", {})


def test_updater(tmp_path: Path) -> None:
    source = tmp_path / "source"
    dest = tmp_path / "dest"
    (source / "dir").mkdir(parents=True)
    (source / "dir" / "file.txt").write_text("data", encoding="utf-8")
    updater = Updater(source, dest)
    updater.update()
    assert (dest / "dir" / "file.txt").exists()


def test_updater_missing_source(tmp_path: Path) -> None:
    updater = Updater(tmp_path / "missing", tmp_path / "dest")
    with pytest.raises(FileNotFoundError):
        updater.update()


def test_summary_generator(tmp_path: Path) -> None:
    detailed = tmp_path / "ChangeLog.md"
    detailed.write_text("# Change\n- item", encoding="utf-8")
    summary = SummaryGenerator(detailed)
    assert summary.summarize() == "- item"
