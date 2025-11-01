"""my_work_assistant.tests.conftest

Shared test fixtures and environment tweaks.

Notes:
- We avoid hard-coded paths in tests by exposing configured roots via
    fixtures that mirror the main code's configuration and discovery.
"""
from __future__ import annotations

from pathlib import Path
from typing import Any

import pytest

from my_work_assistant.core.config import load_config
from my_work_assistant.github_manager.constants import GITHUB_ROOT


@pytest.fixture(scope="session")
def app_config() -> dict[str, Any]:
    """Load and return the merged application configuration for tests.

    Tests should rely on this fixture instead of hard-coded values, so that
    updates to configuration are naturally reflected in test behavior.
    """
    return load_config()


@pytest.fixture(scope="session")
def github_root() -> Path:
    """Provide the configured GitHub root directory.

    This mirrors the production discovery in ``github_manager.constants`` and
    removes the need for tests to hard-code ``.github``.
    """
    return GITHUB_ROOT
