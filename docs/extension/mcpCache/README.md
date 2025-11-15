[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / extension/mcpCache

# extension/mcpCache

Utilities for managing the local cache directory.

Module for working with on-disk cache artifacts shared across tools and agents.
The cache directory name is derived via [getCacheDirectoryName](../../shared/env/functions/getCacheDirectoryName.md) and
defaults to a hidden, dot-prefixed folder (e.g., `.usercontext-mcp-extension`).

## Interfaces

- [SharedCacheEntry](interfaces/SharedCacheEntry.md)
- [ToolLogEntry](interfaces/ToolLogEntry.md)

## Functions

- [deleteSharedCacheEntry](functions/deleteSharedCacheEntry.md)
- [ensureCacheDirectory](functions/ensureCacheDirectory.md)
- [listSharedCacheEntries](functions/listSharedCacheEntries.md)
- [logInvocation](functions/logInvocation.md)
- [readSharedCacheEntry](functions/readSharedCacheEntry.md)
- [storeSharedCacheEntry](functions/storeSharedCacheEntry.md)
