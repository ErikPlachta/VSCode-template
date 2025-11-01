"""my_work_assistant.tests.test_services

Validate service helper behaviour.
"""
from __future__ import annotations

from my_work_assistant.models import DataSet, Group, Person, Platform
from my_work_assistant.services.bridges import group_membership, platform_datasets
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
        [Platform(id="plat", name="Platform", related_platform_ids=[], datasets=["ds"])],
        [DataSet(id="ds", name="Dataset", platform_id="plat")],
    )
    assert mapping["plat"] == ["Dataset"]


def test_summarize_changes_handles_empty() -> None:
    """summarize_changes returns default text when empty."""
    assert summarize_changes([]) == "No changes detected."


def test_summarize_changes_lists_paths(tmp_path) -> None:
    """summarize_changes renders bullet list when paths exist."""
    file_path = tmp_path / "file.txt"
    file_path.write_text("content", encoding="utf-8")
    summary_text = summarize_changes([file_path])
    assert "file.txt" in summary_text
