"""my_work_assistant.core.__init__

Expose core submodules for convenience imports.
"""
from __future__ import annotations

from . import cache, config, exceptions, initialize, logging, telemetry

__all__ = ["config", "initialize", "logging", "telemetry", "cache", "exceptions"]
