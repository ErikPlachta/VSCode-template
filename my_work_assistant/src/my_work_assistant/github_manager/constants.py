"""Constants for GitHub workspace management."""

from __future__ import annotations

from pathlib import Path
from typing import List

__all__ = [
    "GITHUB_DIR",
    "REQUIRED_FILES",
    "REQUIRED_DIRECTORIES",
]

GITHUB_DIR = Path(".github")
REQUIRED_FILES: List[Path] = [
    GITHUB_DIR / "copilot-instructions.md",
]
REQUIRED_DIRECTORIES: List[Path] = [
    GITHUB_DIR / "instructions",
    GITHUB_DIR / "chatmodes",
]
