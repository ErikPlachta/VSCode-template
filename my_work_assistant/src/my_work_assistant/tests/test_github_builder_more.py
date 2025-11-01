"""Deprecated: merged into test_github.py.

This file is retained temporarily to ease review but is skipped.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any

import pytest

# Skip this module entirely; tests have been consolidated into test_github.py
pytestmark = pytest.mark.skip(reason="Merged into test_github.py")

from my_work_assistant.github_manager import builder, constants


def test_render_templates_to_temp_github_root(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """Render templates into a temporary .github root and assert outputs exist."""
    gh_root = tmp_path / ".github"

    # Minimal config: use real defaults for enabled flags
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
    # We expect at least one rendered file
    assert paths and all(p.exists() for p in paths)
    # Copilot instructions should include disclaimer
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
    # Even with empty override roots, manifest structure is produced
    assert {"copilot", "instructions", "prompts", "chatmodes"}.issubset(
        set(data.keys())
    )
