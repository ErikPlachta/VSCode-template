"""my_work_assistant.services.validator

Generic JSON validation helpers using bundled schemas.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from jsonschema import Draft7Validator

from ..core.config import PACKAGE_ROOT
from ..core.exceptions import SchemaError, ValidationError

__all__ = ["validate_json"]


def validate_json(data: Any, schema_name: str) -> None:
    """Validate JSON data against a packaged schema."""

    schema_path = PACKAGE_ROOT / "bin" / "schemas" / schema_name
    try:
        schema = json.loads(schema_path.read_text(encoding="utf-8"))
    except OSError as exc:  # pragma: no cover
        raise SchemaError("Failed to load schema", {"path": str(schema_path)}) from exc
    validator = Draft7Validator(schema)
    errors = list(validator.iter_errors(data))
    if errors:
        raise ValidationError("Schema validation failed", {"errors": [error.message for error in errors]})
