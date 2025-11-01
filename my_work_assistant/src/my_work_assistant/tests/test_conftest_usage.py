"""my_work_assistant.tests.test_conftest_usage

Exercise fixtures to ensure they're executed for coverage.
"""

from __future__ import annotations

from pathlib import Path
from typing import Any


def test_fixtures_provide_config_and_paths(
    app_config: dict[str, Any], github_root: Path
) -> None:
    """Session fixtures should provide merged config and configured GitHub root."""
    assert isinstance(app_config, dict)
    assert isinstance(github_root, Path)
