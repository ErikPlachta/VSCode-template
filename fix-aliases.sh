#!/bin/bash

# Quick fix for all alias imports in compiled JS files
echo "🔧 Fixing all alias imports in out/ directory..."

# Find all JS files with alias imports and fix them
find out/ -name "*.js" -type f | while read file; do
    # Skip if file doesn't contain aliases
    if ! grep -q "@agent\|@server\|@extension\|@mcp\|@shared\|@config\|@tools\|@internal-types" "$file"; then
        continue
    fi
    
    echo "  📝 Fixing: $file"
    
    # Get the directory depth to calculate relative paths
    dir_depth=$(echo "$file" | tr -cd '/' | wc -c)
    
    # Calculate relative path prefixes based on depth
    if [[ $dir_depth -eq 1 ]]; then
        # Files in out/ root (should not exist but handle it)
        agent_prefix="./"
        mcp_prefix="./"
        shared_prefix="./"
        server_prefix="./"
        extension_prefix="./"
        config_prefix="./"
        tools_prefix="./"
        types_prefix="./"
    elif [[ $dir_depth -eq 2 ]]; then
        # Files in out/agent/, out/mcp/, etc.
        agent_prefix="./"
        mcp_prefix="../mcp/"
        shared_prefix="../shared/"
        server_prefix="../server/"
        extension_prefix="../extension/"
        config_prefix="../config/"
        tools_prefix="../tools/"
        types_prefix="../types/"
        
        # If we're IN the same directory, use current dir
        if [[ "$file" == *"/agent/"* ]]; then
            agent_prefix="./"
        elif [[ "$file" == *"/mcp/"* ]]; then
            mcp_prefix="./"
        elif [[ "$file" == *"/shared/"* ]]; then
            shared_prefix="./"
        elif [[ "$file" == *"/server/"* ]]; then
            server_prefix="./"
        elif [[ "$file" == *"/extension/"* ]]; then
            extension_prefix="./"
        elif [[ "$file" == *"/config/"* ]]; then
            config_prefix="./"
        elif [[ "$file" == *"/tools/"* ]]; then
            tools_prefix="./"
        elif [[ "$file" == *"/types/"* ]]; then
            types_prefix="./"
        fi
    else
        # Deeper nested - go up more levels
        levels=$((dir_depth - 1))
        prefix=""
        for ((i=1; i<=levels; i++)); do
            prefix="../$prefix"
        done
        agent_prefix="${prefix}agent/"
        mcp_prefix="${prefix}mcp/"
        shared_prefix="${prefix}shared/"
        server_prefix="${prefix}server/"
        extension_prefix="${prefix}extension/"
        config_prefix="${prefix}config/"
        tools_prefix="${prefix}tools/"
        types_prefix="${prefix}types/"
    fi
    
    # Replace aliases with relative paths
    sed -i \
        -e "s|@agent/|${agent_prefix}|g" \
        -e "s|@mcp/|${mcp_prefix}|g" \
        -e "s|@shared/|${shared_prefix}|g" \
        -e "s|@server/|${server_prefix}|g" \
        -e "s|@extension/|${extension_prefix}|g" \
        -e "s|@config/|${config_prefix}|g" \
        -e "s|@tools/|${tools_prefix}|g" \
        -e "s|@internal-types/|${types_prefix}|g" \
        "$file"
done

echo "✅ Alias import fixing complete!"