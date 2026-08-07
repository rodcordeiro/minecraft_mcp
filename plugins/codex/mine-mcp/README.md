# Codex plugin — mine-mcp

Instala a skill `mine-mcp` e declara o servidor MCP stdio.

## Instalação local

1. Build do pacote na raiz do repo: `pnpm install && pnpm run build`
2. Defina `MINE_MCP_ROOT` para a raiz deste repositório e `MINE_MCP_DATA_DIR` para a pasta de dados do usuário.
3. Aponte o Codex para este plugin (`plugins/codex/mine-mcp`) ou copie para `~/plugins/mine-mcp`.
4. Ajuste `.mcp.json` se o host não expandir `${MINE_MCP_ROOT}` — use paths absolutos.

Skill empacotada em `skills/mine-mcp/` (espelho de `skills/mine-mcp` na raiz do repo).
