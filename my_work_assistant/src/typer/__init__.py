"""typer

Minimal stub implementing CLI decorator behaviour for tests.
"""
from __future__ import annotations

from typing import Any, Callable, Dict, List

__all__ = ["Typer", "echo", "Exit"]


class Exit(SystemExit):
    """Exit exception matching Typer's behaviour."""


class Typer:
    """Simplified Typer-like interface."""

    def __init__(self, add_completion: bool = False) -> None:
        self.commands: Dict[str, Callable[..., Any]] = {}

    def command(self, name: str | None = None) -> Callable[[Callable[..., Any]], Callable[..., Any]]:
        def decorator(func: Callable[..., Any]) -> Callable[..., Any]:
            key = name or func.__name__
            self.commands[key] = func
            return func

        return decorator

    def __call__(self) -> None:
        pass


def echo(value: str) -> None:
    print(value)
