"""my_work_assistant.tests.test_validator

Additional coverage for strict validation behaviors.

These tests avoid hard-coded paths by selecting filenames that trigger
pattern-based schema selection and checks inside the validator.
"""

from __future__ import annotations

from pathlib import Path

import pytest

from my_work_assistant.github_manager.builder import DISCLAIMER
from my_work_assistant.github_manager.validator import ValidationError, validate_file


def _write(path: Path, content: str) -> Path:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    return path


def test_missing_front_matter_raises(tmp_path: Path) -> None:
    """File with disclaimer but no front matter should raise ValidationError."""
    content = f"""{DISCLAIMER}

# Title Only, no front matter

Body here
"""
    path = _write(tmp_path / "instructions" / "example.instructions.mwa.md", content)
    with pytest.raises(ValidationError):
        validate_file(path)


def test_empty_body_after_front_matter_raises(tmp_path: Path) -> None:
    """File with front matter but empty body should raise ValidationError."""
    content = f"""{DISCLAIMER}
---
managed_by_mcp: true
version: 1
topic: document-api
---
"""
    path = _write(tmp_path / "prompts" / "example.prompt.mwa.md", content)
    with pytest.raises(ValidationError):
        validate_file(path)


def test_invalid_prompt_topic_fails_schema(tmp_path: Path) -> None:
    """Prompt with unsupported topic should fail schema validation (enum)."""
    content = f"""{DISCLAIMER}
---
managed_by_mcp: true
version: 1
topic: not-a-valid-topic
---
Body
"""
    path = _write(tmp_path / "prompts" / "example.prompt.mwa.md", content)
    with pytest.raises(ValidationError) as exc:
        validate_file(path)
    assert "Schema validation failed" in str(exc.value)


def test_unsupported_persona_raises(tmp_path: Path) -> None:
    """Chatmode persona must be one of the allowed templates-derived values."""
    content = f"""{DISCLAIMER}
---
managed_by_mcp: true
persona: unknown_persona
---
Body
"""
    path = _write(tmp_path / "chatmodes" / "unknown.chatmode.mwa.md", content)
    with pytest.raises(ValidationError) as exc:
        validate_file(path)
    assert "Unsupported chatmode persona" in str(exc.value)


def test_no_schema_match_raises(tmp_path: Path) -> None:
    """Validator should raise when filename does not match any known patterns."""
    content = f"""{DISCLAIMER}
---
managed_by_mcp: true
---
Body
"""
    path = _write(tmp_path / "unmatched" / "random.md", content)
    with pytest.raises(ValidationError) as exc:
        validate_file(path)
    assert "No schema pattern matched" in str(exc.value)
