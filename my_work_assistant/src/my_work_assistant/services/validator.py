"""Generic schema validation services."""

from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any
import json

from jsonschema import Draft202012Validator

from ..types import JSONDict

__all__ = ["SchemaValidator"]


@dataclass
class SchemaValidator:
    """Validate JSON payloads using project schemas."""

    schema_root: Path

    def _load_schema(self, relative: Path) -> Draft202012Validator:
        with (self.schema_root / relative).open("r", encoding="utf-8") as handle:
            schema = json.load(handle)
        return Draft202012Validator(schema)

    def validate(self, relative_schema_path: str, payload: JSONDict) -> None:
        """Validate *payload* with the referenced schema."""

        validator = self._load_schema(Path(relative_schema_path))
        errors = sorted(validator.iter_errors(payload), key=lambda err: err.path)
        if errors:
            messages = "; ".join(error.message for error in errors)
            raise ValueError(messages)
