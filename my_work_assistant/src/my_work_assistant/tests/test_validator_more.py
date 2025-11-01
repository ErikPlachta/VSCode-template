"""Deprecated: merged into test_validator.py.

Additional edge cases were consolidated into the main validator tests.
"""

from __future__ import annotations

import pytest

# Skip this module entirely; tests have been consolidated into test_validator.py
pytestmark = pytest.mark.skip(reason="Merged into test_validator.py")

from my_work_assistant.github_manager import validator as v


def test_parse_front_matter_without_markers_returns_empty() -> None:
    """Content without front matter markers yields empty metadata."""
    assert v.parse_front_matter("No front matter here") == {}


def test_parse_front_matter_missing_end_marker_returns_empty() -> None:
    """Missing end delimiter should yield empty metadata."""
    content = "---\nkey: value\ncontent starts but no end delimiter"
    assert v.parse_front_matter(content) == {}


def test_coerce_value_boolean_and_integer() -> None:
    """Coercion handles booleans (insensitive) and simple integers."""
    assert v._coerce_value("TRUE") is True  # type: ignore[attr-defined]
    assert v._coerce_value("false") is False  # type: ignore[attr-defined]
    assert v._coerce_value("42") == 42  # type: ignore[attr-defined]
