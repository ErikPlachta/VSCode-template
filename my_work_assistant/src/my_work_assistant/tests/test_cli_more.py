"""Deprecated: tests migrated.

This file has been superseded by ``test_cli.py`` to consolidate CLI tests
under a single, clearly named module.
"""

from __future__ import annotations

import pytest

pytestmark = pytest.mark.skip(
    reason="Merged into test_cli.py; file retained temporarily"
)
