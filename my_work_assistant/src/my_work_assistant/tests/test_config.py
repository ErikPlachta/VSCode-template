"""my_work_assistant.tests.test_config

Validate configuration loading utilities and error handling.
"""

from __future__ import annotations

from typing import Any
from pathlib import Path

import pytest

from my_work_assistant.core import config as cfg
from my_work_assistant.core.config import get_config_section, load_config
from my_work_assistant.core.exceptions import ConfigError


def test_load_config_returns_dict(
    tmp_path: Path, monkeypatch: pytest.MonkeyPatch
) -> None:
    """load_config returns merged configuration data."""
    config = load_config()
    assert "logging" in config


def test_get_config_section_success() -> None:
    """get_config_section retrieves requested sections."""
    section = get_config_section("logging")
    assert section["level"] == "INFO"


def test_get_config_section_missing_raises() -> None:
    """Requesting an unknown section should raise ConfigError."""
    with pytest.raises(ConfigError):
        cfg.get_config_section("does_not_exist")


def test_get_config_section_wrong_type_raises(monkeypatch: pytest.MonkeyPatch) -> None:
    """Non-dict section should raise ConfigError."""

    def fake_load() -> dict[str, Any]:
        return {"foo": "bar"}

    monkeypatch.setattr(cfg, "load_config", fake_load)
    with pytest.raises(ConfigError):
        cfg.get_config_section("foo")
