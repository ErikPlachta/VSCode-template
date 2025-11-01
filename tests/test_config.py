from custom_mcp_server.config import AppConfig


def test_config_defaults():
    config = AppConfig()
    assert config.host == "127.0.0.1"
    assert config.port == 8765
    assert config.name == "Custom MCP Server"
    assert config.version == "0.1.0"
