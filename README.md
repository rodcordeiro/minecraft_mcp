# mine_mcp

Servidor MCP TypeScript (stdio) independente para:

- pontos de mapa Minecraft (coordenadas X/Z);
- receitas e guias (farm, build, potion, etc.);
- inspeção/download de arquivos e mundos via API REST exaroton.

## Requisitos

- Node.js 20+
- pnpm

```bash
pnpm install
pnpm run build
```

## Configuração (env do client MCP)

| Variável | Default | Função |
|---|---|---|
| `MINE_MCP_DATA_DIR` | `<repo>/data` | Pasta com `points.json` e `recipes.json` |
| `MINE_MCP_DOWNLOADS_DIR` | `<repo>/downloads` | Sandbox de downloads exaroton |
| `EXAROTON_API_TOKEN` | — | Obrigatório para tools exaroton |
| `EXAROTON_SERVER_ID` | — | Servidor padrão (opcional) |

Se `recipes.json` não existir em `MINE_MCP_DATA_DIR`, o servidor copia o seed empacotado `data/recipes.seed.json`. Edite o arquivo no `data/` do client para incrementar/alterar receitas.

Exemplo de MCP client:

```json
{
  "mcpServers": {
    "mine_mcp": {
      "command": "node",
      "args": ["C:/path/to/minecraft_mcp/dist/index.js"],
      "env": {
        "MINE_MCP_DATA_DIR": "C:/path/to/user-data"
      }
    }
  }
}
```

## Scripts

| Script | Ação |
|---|---|
| `pnpm run check` | typecheck + test |
| `pnpm run typecheck` | tipos sem emit |
| `pnpm run test` | Jest (inclui e2e stdio) |
| `pnpm run build` | gera `dist/` (prebuild roda check) |
| `pnpm run dev` | `tsx src/index.ts` |

## Estrutura

- `src/index.ts` — MCP server, resources e tools
- `src/config.ts` — paths via env
- `src/services/` — regras
- `src/repository/` — persistência JSON
- `data/recipes.seed.json` — seed de receitas
- `skills/mine-mcp/` — skill do agente
- `plugins/codex/mine-mcp/` — plugin Codex (skill + MCP)
- `plugins/cursor/mine-mcp/` — plugin Cursor (skill + MCP)
- `docs/backlog.md` — backlog

## Resources

- `mine-mcp://workspace/context` — paths efetivos
- `mine-mcp://integrations/exaroton` — estado da integração (sem token)

## Tools

**Mapa:** `register_point`, `list_points`, `distance_to_point`, `nearest_point_by_type`  
**Receitas:** `register_recipe`, `list_recipes`, `get_recipe`  
**exaroton:** `exaroton_get_account`, `exaroton_list_servers`, `exaroton_get_server`, `exaroton_get_server_ram`, `exaroton_get_file_info`, `exaroton_get_text_file`, `exaroton_download_file`, `exaroton_download_directory`, `exaroton_download_world`

Detalhes de parâmetros e casos de uso: `skills/mine-mcp/SKILL.md`.

## Segurança

- Não committe tokens.
- Downloads restritos a `MINE_MCP_DOWNLOADS_DIR`.
- stdout é JSON-RPC; logs em stderr.

## CI

GitHub Actions (`.github/workflows/ci.yml`): install → typecheck → test → build em Node 20.

## Versão

`0.2.0` — servidor independente, `data/` via env, seed de receitas, skill e plugins Codex/Cursor.
