"""Typed dictionaries for configuration structures."""

from __future__ import annotations

from typing import Dict, List, TypedDict

__all__ = [
    "LoggingConfig",
    "TelemetryConfig",
    "ChangelogConfig",
    "WatcherConfig",
    "GitHubManagerConfig",
    "CacheConfig",
    "ConfigData",
]


class LoggingConfig(TypedDict, total=False):
    """Logging configuration options."""

    level: str
    retention_days: int


class TelemetryConfig(TypedDict, total=False):
    """Telemetry options."""

    request_tracking_enabled: bool


class ChangelogConfig(TypedDict, total=False):
    """Changelog generation configuration."""

    generate_detailed: bool
    generate_summary: bool


class WatcherConfig(TypedDict, total=False):
    """File watcher configuration."""

    paths: List[str]
    ignore_patterns: List[str]


class GitHubManagerConfig(TypedDict, total=False):
    """GitHub manager configuration."""

    copilot_instructions_enabled: bool


class CacheConfig(TypedDict, total=False):
    """Cache configuration."""

    refresh_minutes: int


class ConfigData(TypedDict, total=False):
    """Aggregate configuration payload."""

    logging: LoggingConfig
    telemetry: TelemetryConfig
    changelog: ChangelogConfig
    watcher: WatcherConfig
    github_manager: GitHubManagerConfig
    cache: CacheConfig


ConfigMapping = Dict[str, ConfigData]
