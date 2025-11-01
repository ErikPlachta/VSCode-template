"""my_work_assistant.services.bridges

Utilities that build relationships between models.
"""
from __future__ import annotations

from typing import Iterable

from ..models import DataSet, Platform, Person, Group

__all__ = ["group_membership", "platform_datasets"]


def group_membership(groups: Iterable[Group], people: Iterable[Person]) -> dict[str, list[str]]:
    """Map group identifiers to member names.

    Args:
        groups: Iterable of group models.
        people: Iterable of person models.

    Returns:
        Dictionary mapping group identifiers to sorted member names.

    Example:
        >>> group_membership([], [])
        {}
    """

    people_index = {person.id: person.full_name for person in people}
    mapping: dict[str, list[str]] = {}
    for group in groups:
        names = [people_index.get(identifier, identifier) for identifier in group.members]
        mapping[group.id] = sorted(names)
    return mapping


def platform_datasets(platforms: Iterable[Platform], datasets: Iterable[DataSet]) -> dict[str, list[str]]:
    """Map platforms to dataset names.

    Args:
        platforms: Iterable of platform models.
        datasets: Iterable of dataset models.

    Returns:
        Dictionary mapping platform identifiers to dataset names.

    Example:
        >>> platform_datasets([], [])
        {}
    """

    dataset_index = {dataset.id: dataset.name for dataset in datasets}
    mapping: dict[str, list[str]] = {}
    for platform in platforms:
        names = [dataset_index.get(identifier, identifier) for identifier in platform.datasets]
        mapping[platform.id] = sorted(names)
    return mapping
