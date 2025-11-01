"""my_work_assistant.github_manager.validator

Validation helpers for managed GitHub assets.
"""
from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from jsonschema import Draft7Validator

from ..core.config import PACKAGE_ROOT
from ..core.exceptions import GitHubFileError, ValidationError
from .builder import DISCLAIMER

__all__ = ["parse_front_matter", "validate_file"]


def parse_front_matter(content: str) -> dict[str, Any]:
    """Extract simple YAML-like front matter from markdown content."""
    start = content.find("---\n")
    if start == -1:
        return {}
    end = content.find("\n---", start + 4)
    if end == -1:
        return {}
    front_matter = content[start + 4 : end].strip().splitlines()
    data: dict[str, Any] = {}
    for line in front_matter:
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        data[key.strip()] = _coerce_value(value.strip())
    return data


def _coerce_value(value: str) -> Any:
    if value.lower() in {"true", "false"}:
        return value.lower() == "true"
    return value


def _load_schema(name: str) -> Draft7Validator:
    schema_root = PACKAGE_ROOT / "bin" / "schemas" / "github"
    schema = json.loads((schema_root / name).read_text(encoding="utf-8"))
    return Draft7Validator(schema)


SCHEMAS = {
    "copilot-instructions.md": _load_schema("copilot_instructions.schema.json"),
    "default-guidelines.instructions.md": _load_schema("instructions.schema.json"),
    "document-api.prompt.md": _load_schema("prompts.schema.json"),
    "review-code.prompt.md": _load_schema("prompts.schema.json"),
    "onboarding-plan.prompt.md": _load_schema("prompts.schema.json"),
    "reviewer.chatmode.md": _load_schema("chatmodes.schema.json"),
    "docwriter.chatmode.md": _load_schema("chatmodes.schema.json"),
}


def validate_file(path: Path) -> None:
    """Validate a GitHub managed file."""
    content = path.read_text(encoding="utf-8")
    if DISCLAIMER not in content:
        raise GitHubFileError("Managed file missing disclaimer", {"path": str(path)})
    metadata = parse_front_matter(content)
    schema = SCHEMAS.get(path.name)
    if schema is None:
        raise ValidationError("No schema registered for file", {"path": str(path)})
    errors = list(schema.iter_errors(metadata))
    if errors:
        raise ValidationError("Schema validation failed", {"errors": [error.message for error in errors]})
