from my_work_assistant.types import (
    JSONDict,
    GitHubManagerConfig,
    GitHubFileMetadata,
    CategoryPayload,
)


def test_common_types_jsondict() -> None:
    data: JSONDict = {"key": "value"}
    assert data["key"] == "value"


def test_config_types_github_manager_config() -> None:
    cfg: GitHubManagerConfig = {
        "copilot_instructions_enabled": True,
        "instructions_enabled": True,
        "prompts_enabled": True,
        "chatmodes_enabled": True,
    }
    assert cfg["prompts_enabled"] is True


def test_github_types_file_metadata() -> None:
    meta: GitHubFileMetadata = {"managed_by_mcp": True, "topic": "api"}
    assert meta["managed_by_mcp"] is True


def test_model_types_category_payload() -> None:
    payload: CategoryPayload = {
        "id": "cat",
        "name": "Category",
        "description": "Desc",
    }
    assert payload["name"] == "Category"
