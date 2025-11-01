"""TypedDict definitions for domain models."""

from __future__ import annotations

from typing import List, TypedDict

__all__ = [
    "Category",
    "Label",
    "Group",
    "Person",
    "Role",
    "Platform",
    "DataSet",
]


class Category(TypedDict):
    """Represents a classification bucket."""

    id: str
    name: str


class Label(TypedDict):
    """Represents a descriptive label."""

    id: str
    name: str


class Group(TypedDict):
    """Represents an organizational group."""

    id: str
    members: List[str]


class Person(TypedDict):
    """Represents an individual person."""

    id: str
    roles: List[str]


class Role(TypedDict):
    """Represents a role binding."""

    id: str
    permissions: List[str]


class Platform(TypedDict):
    """Represents a platform definition."""

    name: str
    url: str


class DataSet(TypedDict):
    """Represents a dataset descriptor."""

    id: str
    categories: List[str]
