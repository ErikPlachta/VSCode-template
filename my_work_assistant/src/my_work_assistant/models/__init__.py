"""my_work_assistant.models.__init__

Expose domain models for import convenience.
"""
from __future__ import annotations

from .entities import Category, Label, Group, Person, Role, Platform, DataSet

__all__ = [
    "Category",
    "Label",
    "Group",
    "Person",
    "Role",
    "Platform",
    "DataSet",
]
