# Cursor plugin — mine-mcp

Empacota a skill e a declaração MCP para uso no Cursor.

## Instalação

1. Na raiz do repo: `pnpm install && pnpm run build`
2. Linke a skill do plugin em `.cursor/skills/mine-mcp` (junction/symlink) ou skills pessoais.
3. Adicione o servidor MCP em `~/.cursor/mcp.json` (ou use o bloco `mcpServers` de `plugin.json`), apontando `args` para `dist/index.js` absoluto se `${workspaceFolder}` não resolver.
4. Configure env no client MCP: `MINE_MCP_DATA_DIR`, opcionalmente `MINE_MCP_DOWNLOADS_DIR`, e `EXAROTON_*` para tools remotas.

**Não** grave tokens no `plugin.json` versionado — só no `mcp.json` local do Cursor.

Exemplo em MCP settings (`~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "mine_mcp": {
      "command": "node",
      "args": ["C:/path/to/minecraft_mcp/dist/index.js"],
      "env": {
        "MINE_MCP_DATA_DIR": "C:/path/to/user-minecraft-data",
        "MINE_MCP_DOWNLOADS_DIR": "C:/path/to/user-minecraft-data/exaroton",
        "EXAROTON_API_TOKEN": "<from-secret-store>",
        "EXAROTON_SERVER_ID": "<server-id>"
      }
    }
  }
}
```
