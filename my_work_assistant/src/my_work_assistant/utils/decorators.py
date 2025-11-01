"""my_work_assistant.utils.decorators

Reusable decorators for logging function entry.
"""
from __future__ import annotations

from functools import wraps
from typing import Any, Callable, TypeVar

from ..core.telemetry import record_request

__all__ = ["telemetry"]

F = TypeVar("F", bound=Callable[..., Any])


def telemetry(source: str, action: str) -> Callable[[F], F]:
    """Decorator that records telemetry for function invocations.

    Args:
        source: Source component name.
        action: Action description.

    Returns:
        Wrapped function with telemetry side effects.

    Example:
        >>> @telemetry('test', 'run')
        ... def func() -> int:
        ...     return 1
        >>> func()
        1

    """

    def decorator(func: F) -> F:
        @wraps(func)
        def wrapper(*args: Any, **kwargs: Any) -> Any:
            record_request(source, action)
            return func(*args, **kwargs)

        return wrapper  # type: ignore[return-value]

    return decorator
