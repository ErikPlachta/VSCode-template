"""my_work_assistant.core.config

Configuration loading and merging utilities for the MCP server.
"""
from __future__ import annotations

from pathlib import Path
from typing import Any
import json

from .exceptions import ConfigError

__all__ = ["CONFIG_ROOT", "USER_ROOT", "load_config", "get_config_section"]

PACKAGE_ROOT = Path(__file__).resolve().parents[3]
CONFIG_ROOT = PACKAGE_ROOT / "bin" / "defaults" / "config"
USER_ROOT = Path.cwd() / ".my_work_assistant"


def load_config() -> dict[str, Any]:
    """Load and merge configuration dictionaries."""

    default_path = CONFIG_ROOT / "my-work-assistant.config.json"
    user_path = USER_ROOT / "my-work-assistant.config.json"
    try:
        default_config = json.loads(default_path.read_text(encoding="utf-8"))
    except OSError as exc:  # pragma: no cover - handled in tests via monkeypatch
        raise ConfigError("Failed to read default configuration", {"path": str(default_path)}) from exc
    try:
        user_data = json.loads(user_path.read_text(encoding="utf-8")) if user_path.exists() else {}
    except OSError as exc:  # pragma: no cover
        raise ConfigError("Failed to read user configuration", {"path": str(user_path)}) from exc
    return _merge_dicts(default_config, user_data)


def _merge_dicts(base: dict[str, Any], override: dict[str, Any]) -> dict[str, Any]:
    """Merge two dictionaries recursively."""

    result: dict[str, Any] = {}
    for key, value in base.items():
        if key in override and isinstance(value, dict) and isinstance(override[key], dict):
            result[key] = _merge_dicts(value, override[key])
        elif key in override:
            result[key] = override[key]
        else:
            result[key] = value
    for key, value in override.items():
        if key not in result:
            result[key] = value
    return result


def get_config_section(section: str) -> dict[str, Any]:
    """Retrieve a configuration section."""

    config = load_config()
    if section not in config:
        raise ConfigError("Missing configuration section", {"section": section})
    value = config[section]
    if not isinstance(value, dict):
        raise ConfigError("Configuration section must be a dictionary", {"section": section})
    return value
