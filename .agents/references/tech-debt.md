# Tech debt

## Concluído recentemente

- Layout plano; `workspaceRoot`/world/output removidos do produto.
- `MINE_MCP_DATA_DIR` / `MINE_MCP_DOWNLOADS_DIR`.
- Seed de receitas; skill; plugins Codex/Cursor; CI; e2e `listTools`.

## Residual vs guideline `$nero` mcp

- Sem tool hints (`readOnlyHint` / `destructiveHint`).
- Sem `prompts` MCP.
- Escritas sem preview/confirm no servidor.
- E2e cobre listagem de tools; ainda não cobre fluxos register/download com fixtures.
- Plugins exigem paths absolutos/`MINE_MCP_ROOT` conforme o host.
