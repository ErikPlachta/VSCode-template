"""my_work_assistant.tests.test_stdio

Exercise stdio wrapper commands.
"""
from __future__ import annotations

import json

from my_work_assistant.stdio_wrapper import run_stdio


def test_stdio_init_command() -> None:
    """run_stdio init returns success payload."""
    result = json.loads(run_stdio("init"))
    assert result["success"] is True
