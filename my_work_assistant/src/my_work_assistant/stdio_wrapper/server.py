"""my_work_assistant.stdio_wrapper.server

Thin wrapper to expose CLI commands over stdio.
"""
from __future__ import annotations

import json

from ..core.initialize import initialize_workspace
from ..github_manager import builder, synchronizer

__all__ = ["run_stdio"]


def run_stdio(command: str) -> str:
    """Execute a supported command and return JSON.

    Args:
        command: Command name to execute.

    Returns:
        JSON encoded response.

    Example:
        >>> run_stdio('init')  # doctest: +SKIP

    """
    if command == "init":
        config = initialize_workspace()
        builder.render_templates()
        return json.dumps({"success": True, "config": config})
    if command == "validate":
        paths = synchronizer.synchronize()
        return json.dumps({"success": True, "validated": [str(path) for path in paths]})
    return json.dumps({"success": False, "error": "unknown command"})
