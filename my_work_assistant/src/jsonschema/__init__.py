"""jsonschema

Minimal validator supporting const and required keys.
"""
from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Iterable, List

__all__ = ["Draft7Validator", "ValidationError"]


@dataclass
class ValidationError(Exception):
    """Simple validation error."""

    message: str
    path: List[str]


class Draft7Validator:
    """Extremely small subset of Draft7 validation used in tests."""

    def __init__(self, schema: dict[str, Any]) -> None:
        self.schema = schema

    def iter_errors(self, instance: dict[str, Any]) -> Iterable[ValidationError]:
        errors: list[ValidationError] = []
        required = self.schema.get("required", [])
        for key in required:
            if key not in instance:
                errors.append(ValidationError(f"'{key}' is a required property", [key]))
        properties = self.schema.get("properties", {})
        for key, rules in properties.items():
            if "const" in rules and key in instance and instance[key] != rules["const"]:
                errors.append(ValidationError(f"{key} must be {rules['const']}", [key]))
        return errors
