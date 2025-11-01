"""my_work_assistant.tests.test_services

Validate service helpers and error branches for updater and JSON validator.
"""

from __future__ import annotations

from pathlib import Path

import pytest

from my_work_assistant.core.exceptions import (
    GitHubFileError,
    SchemaError,
    ValidationError,
)
from my_work_assistant.models import DataSet, Group, Person, Platform
from my_work_assistant.services.bridges import group_membership, platform_datasets
from my_work_assistant.services.updater import apply_updates
from my_work_assistant.services.validator import validate_json
from my_work_assistant.services.summary import summarize_changes


def test_group_membership_maps_names() -> None:
    """group_membership returns sorted member names."""
    mapping = group_membership(
        [Group(id="grp", name="Group", members=["p1", "p2"])],
        [
            Person(id="p1", full_name="Alpha", role_ids=[], group_ids=[]),
            Person(id="p2", full_name="Beta", role_ids=[], group_ids=[]),
        ],
    )
    assert mapping["grp"] == ["Alpha", "Beta"]


def test_platform_datasets_maps_names() -> None:
    """platform_datasets returns sorted dataset names."""
    mapping = platform_datasets(
        [
            Platform(
                id="plat", name="Platform", related_platform_ids=[], datasets=["ds"]
            )
        ],
        [DataSet(id="ds", name="Dataset", platform_id="plat")],
    )
    assert mapping["plat"] == ["Dataset"]


def test_summarize_changes_handles_empty() -> None:
    """summarize_changes returns default text when empty."""
    assert summarize_changes([]) == "No changes detected."


def test_summarize_changes_lists_paths(tmp_path: Path) -> None:
    """summarize_changes renders bullet list when paths exist."""
    file_path = tmp_path / "file.txt"
    file_path.write_text("content", encoding="utf-8")
    summary_text = summarize_changes([file_path])
    assert "file.txt" in summary_text


def test_apply_updates_raises_on_oserror(tmp_path: Path) -> None:
    """Writing to a directory path should raise GitHubFileError."""
    with pytest.raises(GitHubFileError):
        apply_updates(tmp_path, {})


def test_validate_json_raises_on_missing_schema() -> None:
    """Missing schema file should raise SchemaError."""
    with pytest.raises(SchemaError):
        validate_json({}, "does-not-exist.schema.json")


def test_validate_json_reports_validation_errors() -> None:
    """Invalid data against a valid schema should raise ValidationError."""
    bad = {"managed_by_mcp": True, "version": 1}  # missing required 'topic'
    with pytest.raises(ValidationError):
        validate_json(bad, "github/prompts.schema.json")
