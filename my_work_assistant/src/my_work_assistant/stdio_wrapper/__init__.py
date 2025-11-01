"""my_work_assistant.stdio_wrapper.__init__

Expose stdio helper functions.
"""
from __future__ import annotations

from .server import run_stdio

__all__ = ["run_stdio"]
