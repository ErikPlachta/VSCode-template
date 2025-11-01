"""my_work_assistant.tests.test_config

Validate configuration loading utilities.
"""
from __future__ import annotations

from my_work_assistant.core.config import load_config, get_config_section


def test_load_config_returns_dict(tmp_path, monkeypatch) -> None:
    """load_config returns merged configuration data."""

    config = load_config()
    assert "logging" in config


def test_get_config_section_success() -> None:
    """get_config_section retrieves requested sections."""

    section = get_config_section("logging")
    assert section["level"] == "INFO"
