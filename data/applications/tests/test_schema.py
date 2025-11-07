"""Structural integrity tests for the applications category."""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any, Dict, Iterable, List

CATEGORY_DIR = Path(__file__).resolve().parents[1]


def _load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def _records() -> List[Dict[str, Any]]:
    data = _load_json(CATEGORY_DIR / "records.json")
    assert isinstance(data, list), "records.json must contain a list of records"
    for entry in data:
        assert isinstance(entry, dict), "Every record entry must be an object"
    return data  # type: ignore[return-value]


def _requirements() -> Dict[str, Any]:
    config = _load_json(CATEGORY_DIR / "category.json")
    requirements = config.get("config", {}).get("requirements") or {}
    assert isinstance(requirements, dict), "Requirements must be an object when provided"
    return requirements


def _schemas() -> Iterable[Dict[str, Any]]:
    for schema_file in (CATEGORY_DIR / "schemas").glob("*.json"):
        payload = _load_json(schema_file)
        schema = payload.get("schema")
        assert isinstance(schema, dict), f"{schema_file.name} must contain a schema object"
        yield schema  # type: ignore[return-value]


def _assert_has_value(record: Dict[str, Any], field: str) -> None:
    assert field in record, f"Record {record.get('id')} is missing required field '{field}'"
    value = record[field]
    if isinstance(value, str):
        assert value.strip(), f"Field '{field}' on record {record.get('id')} must not be blank"
    elif isinstance(value, list):
        assert value, f"Field '{field}' on record {record.get('id')} must not be empty"
    else:
        assert value is not None, f"Field '{field}' on record {record.get('id')} must not be null"


def test_required_record_fields_are_populated() -> None:
    records = _records()
    for field in _requirements().get("requiredRecordFields", []):
        for record in records:
            _assert_has_value(record, field)


def test_relationship_fields_have_links() -> None:
    records = _records()
    required_relationship_fields = _requirements().get("requiredRelationshipFields", [])
    if not required_relationship_fields:
        return
    for field in required_relationship_fields:
        for record in records:
            _assert_has_value(record, field)


def test_schema_required_keys_present() -> None:
    records = _records()
    for schema in _schemas():
        for required_field in schema.get("required", []):
            for record in records:
                _assert_has_value(record, required_field)


def test_relationship_definitions_are_complete() -> None:
    relationships = _load_json(CATEGORY_DIR / "relationships.json")
    assert isinstance(relationships, list) and relationships, "relationships.json must contain an array"
    for entry in relationships:
        assert isinstance(entry, dict), "Each relationship entry must be an object"
        for key in ("key", "name", "targetCategory", "sourceField", "targetField", "cardinality"):
            assert key in entry, f"Relationship entries must include '{key}'"
        assert entry["cardinality"] in {"one", "many"}, "Cardinality must be either 'one' or 'many'"


def test_records_match_schema_properties() -> None:
    records = _records()
    properties_sets = [schema.get("properties", {}) for schema in _schemas()]
    for props in properties_sets:
        assert isinstance(props, dict), "Schema properties must be an object"
    known_properties = {prop for props in properties_sets for prop in props.keys()}
    assert known_properties, "Schemas must expose at least one property"
    for record in records:
        for key in record.keys():
            assert key in known_properties, (
                f"Unexpected field '{key}' detected in record {record.get('id')}"
            )
