"""my_work_assistant.github_manager.validator

Validation helpers for managed GitHub assets.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any, cast

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
    # Basic numeric coercion for simple integers in front matter (e.g., version: 1)
    if value.isdigit():
        try:
            return int(value)
        except ValueError:
            return value
    return value


def _load_schema(name: str) -> Draft7Validator:
    schema_root = PACKAGE_ROOT / "bin" / "schemas" / "github"
    schema = json.loads((schema_root / name).read_text(encoding="utf-8"))
    return Draft7Validator(schema)


def _schema_for(path: Path) -> Draft7Validator:
    name = path.name
    if name == "copilot-instructions.md":
        return _load_schema("copilot_instructions.schema.json")
    if name.endswith(".instructions.mwa.md"):
        return _load_schema("instructions.schema.json")
    if name.endswith(".prompt.mwa.md"):
        return _load_schema("prompts.schema.json")
    if name.endswith(".chatmode.mwa.md"):
        return _load_schema("chatmodes.schema.json")
    raise ValidationError("No schema pattern matched for file", {"path": str(path)})


def _body_after_front_matter(content: str) -> str:
    start = content.find("---\n")
    if start == -1:
        return ""
    end = content.find("\n---", start + 4)
    if end == -1:
        return ""
    return content[end + 4 :].strip()


ALLOWED_PROMPT_TOPICS = {"document-api", "review-code", "onboarding-plan"}
ALLOWED_PERSONAS = {"reviewer", "docwriter"}


def validate_file(path: Path) -> None:
    """Validate a GitHub managed file with strict checks."""
    content = path.read_text(encoding="utf-8")
    if DISCLAIMER not in content:
        raise GitHubFileError("Managed file missing disclaimer", {"path": str(path)})

    metadata = parse_front_matter(content)
    if not metadata:
        raise ValidationError("Missing front matter metadata", {"path": str(path)})

    schema = _schema_for(path)
    # jsonschema's typing for iter_errors is not precise; cast to Any for strict mode
    errors = list(cast(Any, schema).iter_errors(metadata))
    if errors:
        raise ValidationError(
            "Schema validation failed", {"errors": [error.message for error in errors]}
        )

    # Strict body checks
    body = _body_after_front_matter(content)
    if not body:
        raise ValidationError(
            "File body is empty after front matter", {"path": str(path)}
        )

    name = path.name
    if name == "copilot-instructions.md":
        required_markers = [
            "# Copilot Instructions",
            "<!-- BEGIN my_work_assistant -->",
            "<!-- END my_work_assistant -->",
            "Links:",
        ]
        for marker in required_markers:
            if marker not in content:
                raise ValidationError(
                    "Copilot instructions missing required section", {"missing": marker}
                )
    elif name.endswith(".instructions.mwa.md"):
        if "## Default Collaboration Guidelines" not in content:
            raise ValidationError(
                "Instructions missing default guidelines heading", {"path": str(path)}
            )
    elif name.endswith(".prompt.mwa.md"):
        topic = metadata.get("topic")
        if topic not in ALLOWED_PROMPT_TOPICS:
            raise ValidationError("Unsupported prompt topic", {"topic": topic})
    elif name.endswith(".chatmode.mwa.md"):
        persona = metadata.get("persona")
        if persona not in ALLOWED_PERSONAS:
            raise ValidationError("Unsupported chatmode persona", {"persona": persona})
