"""my_work_assistant.tests.test_github

Ensure GitHub manager modules behave as expected, including builder rendering
and constants override behavior.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any
import pytest
from my_work_assistant.core.exceptions import GitHubFileError
from my_work_assistant.github_manager import builder, constants, synchronizer
from my_work_assistant.github_manager.constants import GITHUB_ROOT
from my_work_assistant.github_manager.validator import validate_file


def test_builder_respects_disclaimer(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """render_templates writes files containing the disclaimer."""
    monkeypatch.chdir(Path.cwd())
    paths = builder.render_templates()
    for path in paths:
        assert builder.DISCLAIMER in path.read_text(encoding="utf-8")


def test_validator_detects_missing_disclaimer(monkeypatch: pytest.MonkeyPatch) -> None:
    """validate_file raises when the disclaimer is missing."""
    monkeypatch.chdir(Path.cwd())
    # Use configured GitHub root to avoid hard-coded path assumptions.
    target = GITHUB_ROOT / "copilot-instructions.md"
    original = target.read_text(encoding="utf-8")
    target.write_text("# No disclaimer", encoding="utf-8")
    with pytest.raises(GitHubFileError):
        validate_file(target)
    target.write_text(original, encoding="utf-8")


def test_synchronizer_returns_paths(monkeypatch: pytest.MonkeyPatch) -> None:
    """Synchronize validates all configured files."""
    monkeypatch.chdir(Path.cwd())
    builder.render_templates()
    paths = synchronizer.synchronize()
    assert paths


def test_render_templates_to_temp_github_root(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """Render templates into a temporary .github root and assert outputs exist."""
    gh_root = tmp_path / ".github"

    def fake_load_config() -> dict[str, Any]:
        return {
            "github_manager": {
                "github_root": str(gh_root),
                "copilot_instructions_enabled": True,
                "instructions_enabled": True,
                "prompts_enabled": True,
                "chatmodes_enabled": True,
            }
        }

    monkeypatch.setattr(
        "my_work_assistant.github_manager.builder.load_config", fake_load_config
    )
    paths = builder.render_templates()
    assert paths and all(p.exists() for p in paths)
    copilot = gh_root / "copilot-instructions.md"
    assert builder.DISCLAIMER in copilot.read_text(encoding="utf-8")


def test_constants_resolve_overrides(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """Providing override roots should still allow manifest building without errors."""

    def fake_load_config() -> dict[str, Any]:
        return {
            "github_manager": {
                "github_root": str(tmp_path / ".github"),
                "templates_root": str(tmp_path / "templates"),
                "schemas_root": str(tmp_path / "schemas"),
                "copilot_instructions_enabled": True,
                "instructions_enabled": True,
                "prompts_enabled": True,
                "chatmodes_enabled": True,
            }
        }

    monkeypatch.setattr(constants, "load_config", fake_load_config)
    data = constants.build_manifest()
    assert {"copilot", "instructions", "prompts", "chatmodes"}.issubset(
        set(data.keys())
    )
