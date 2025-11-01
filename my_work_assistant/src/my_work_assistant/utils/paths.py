"""Utility helpers for resolving project paths."""

from __future__ import annotations

from pathlib import Path

__all__ = ["resolve_package_root", "resolve_workspace_root"]


def resolve_package_root() -> Path:
    """Return the package root directory."""

    return Path(__file__).resolve().parents[3]


def resolve_workspace_root() -> Path:
    """Return the local workspace root directory."""

    return Path.cwd() / ".my_work_assistant"
