# Runtime

## Boot

| Item | Valor |
|---|---|
| Entry | `src/index.ts` |
| Transport | stdio |
| Dev | `pnpm run dev` |
| Prod | `pnpm run build` → `dist/index.js` |

## Env

| Variável | Uso |
|---|---|
| `MINE_MCP_DATA_DIR` | Pasta de `points.json` / `recipes.json` |
| `MINE_MCP_DOWNLOADS_DIR` | Sandbox de downloads |
| `EXAROTON_API_TOKEN` | Tools exaroton |
| `EXAROTON_SERVER_ID` | Servidor padrão (opcional) |

## Paths (`resolvePaths`)

Defaults sob a raiz do pacote: `data/`, `downloads/`, seed em `data/recipes.seed.json`.
