"""my_work_assistant.models.entities

Pydantic models representing workspace data.
"""
from __future__ import annotations

from pydantic import BaseModel

__all__ = [
    "Category",
    "Label",
    "Group",
    "Person",
    "Role",
    "Platform",
    "DataSet",
]


class Category(BaseModel):
    """Category metadata grouping labels.

    Attributes:
        id: Unique identifier.
        name: Display name for the category.
        description: Optional human readable description.

    Example:
        >>> Category(id='cat', name='Example').name
        'Example'
    """

    id: str
    name: str
    description: str | None = None


class Label(BaseModel):
    """Label tied to a category.

    Attributes:
        id: Unique identifier.
        name: Display name.
        category_id: Identifier referencing :class:`Category`.

    Example:
        >>> Label(id='lbl', name='Label', category_id='cat').category_id
        'cat'
    """

    id: str
    name: str
    category_id: str


class Group(BaseModel):
    """Collaborative group of people.

    Attributes:
        id: Unique identifier.
        name: Display name.
        members: List of :class:`Person` identifiers.

    Example:
        >>> Group(id='grp', name='Group', members=[]).members
        []
    """

    id: str
    name: str
    members: list[str]


class Person(BaseModel):
    """Person participating in the workspace.

    Attributes:
        id: Unique identifier.
        full_name: Full display name.
        role_ids: Associated :class:`Role` identifiers.
        group_ids: Associated :class:`Group` identifiers.

    Example:
        >>> Person(id='p', full_name='A', role_ids=[], group_ids=[]).full_name
        'A'
    """

    id: str
    full_name: str
    role_ids: list[str]
    group_ids: list[str]


class Role(BaseModel):
    """Role assigned to people.

    Attributes:
        id: Unique identifier.
        name: Display name.
        description: Optional descriptive text.

    Example:
        >>> Role(id='r', name='Role').name
        'Role'
    """

    id: str
    name: str
    description: str | None = None


class Platform(BaseModel):
    """Platform containing datasets.

    Attributes:
        id: Unique identifier.
        name: Display name.
        related_platform_ids: Identifiers for related platforms.
        datasets: List of dataset identifiers.

    Example:
        >>> Platform(id='plat', name='Platform', related_platform_ids=[], datasets=[]).datasets
        []
    """

    id: str
    name: str
    related_platform_ids: list[str]
    datasets: list[str]


class DataSet(BaseModel):
    """Dataset hosted on a platform.

    Attributes:
        id: Unique identifier.
        name: Display name.
        platform_id: Identifier referencing :class:`Platform`.
        description: Optional descriptive text.

    Example:
        >>> DataSet(id='ds', name='Data', platform_id='plat').platform_id
        'plat'
    """

    id: str
    name: str
    platform_id: str
    description: str | None = None
