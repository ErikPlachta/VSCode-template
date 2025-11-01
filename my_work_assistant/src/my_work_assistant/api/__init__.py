"""my_work_assistant.api.__init__

Expose the FastAPI application factory.
"""
from __future__ import annotations

from .app import create_app

__all__ = ["create_app"]
