"""my_work_assistant.tests.test_github

Ensure GitHub manager modules behave as expected.
"""

from __future__ import annotations

from pathlib import Path

import pytest
from my_work_assistant.core.exceptions import GitHubFileError
from my_work_assistant.github_manager import builder, synchronizer
from my_work_assistant.github_manager.validator import validate_file


def test_builder_respects_disclaimer(tmp_path, monkeypatch) -> None:
    """render_templates writes files containing the disclaimer."""
    monkeypatch.chdir(Path.cwd())
    paths = builder.render_templates()
    for path in paths:
        assert builder.DISCLAIMER in path.read_text(encoding="utf-8")


def test_validator_detects_missing_disclaimer(monkeypatch) -> None:
    """validate_file raises when the disclaimer is missing."""
    monkeypatch.chdir(Path.cwd())
    target = Path(".github") / "copilot-instructions.md"
    original = target.read_text(encoding="utf-8")
    target.write_text("# No disclaimer", encoding="utf-8")
    with pytest.raises(GitHubFileError):
        validate_file(target)
    target.write_text(original, encoding="utf-8")


def test_synchronizer_returns_paths(monkeypatch) -> None:
    """Synchronize validates all configured files."""
    monkeypatch.chdir(Path.cwd())
    builder.render_templates()
    paths = synchronizer.synchronize()
    assert paths
