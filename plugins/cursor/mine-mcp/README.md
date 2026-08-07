# Cursor plugin — mine-mcp

Empacota a skill e a declaração MCP para uso no Cursor.

## Instalação

1. Na raiz do repo: `pnpm install && pnpm run build`
2. Copie/linke `plugins/cursor/mine-mcp/skills/mine-mcp` para skills do projeto (`.cursor/skills/mine-mcp`) ou skills pessoais.
3. Adicione o servidor MCP nas settings do Cursor (ou use o bloco `mcpServers` de `plugin.json`), apontando `args` para `dist/index.js` absoluto se `${workspaceFolder}` não resolver.
4. Configure `MINE_MCP_DATA_DIR` (e opcionalmente `EXAROTON_API_TOKEN`) no env do server MCP.

Exemplo mínimo em MCP settings:

```json
{
  "mcpServers": {
    "mine_mcp": {
      "command": "node",
      "args": ["C:/path/to/minecraft_mcp/dist/index.js"],
      "env": {
        "MINE_MCP_DATA_DIR": "C:/path/to/user-minecraft-data"
      }
    }
  }
}
```
