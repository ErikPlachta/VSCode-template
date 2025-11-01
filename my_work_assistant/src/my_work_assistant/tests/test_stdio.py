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


def test_stdio_validate_command() -> None:
    """run_stdio validate returns success payload."""
    result = json.loads(run_stdio("validate"))
    assert result["success"] is True
    assert "validated" in result


def test_stdio_unknown_command() -> None:
    """Unknown command returns success False and error message."""
    result = json.loads(run_stdio("does-not-exist"))
    assert result["success"] is False
    assert "error" in result
