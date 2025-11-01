"""my_work_assistant.services.__init__

Expose service modules for convenience imports.
"""
from __future__ import annotations

from . import bridges, validator, updater, summary

__all__ = ["bridges", "validator", "updater", "summary"]
