# Contratos MCP

Inventário factual do checkout (`src/index.ts`). Inputs via Zod na borda; respostas `content[{ type: "text", text }]` (JSON stringificado).

## Resources (read-only)

| URI | Conteúdo |
|---|---|
| `mine-mcp://workspace/context` | Paths (`dataDir`, `downloadsDir`, data/recipes/seed files, env flags) |
| `mine-mcp://integrations/exaroton` | `configured` (bool), `defaultServerId`, capabilities list — sem token |

## Tools — mapa

| Tool | Modo | Inputs principais |
|---|---|---|
| `register_point` | write | nome, x, z, type, description?, tags? |
| `list_points` | read | (filtros conforme schema) |
| `distance_to_point` | read | ponto origem + destino/nome |
| `nearest_point_by_type` | read | x, z, type |

## Tools — receitas

| Tool | Modo | Inputs principais |
|---|---|---|
| `register_recipe` | write | name, type, summary, resources, process, tags? |
| `list_recipes` | read | — / filtros |
| `get_recipe` | read | name |

## Tools — exaroton

| Tool | Modo | Notas |
|---|---|---|
| `exaroton_get_account` | read | requer token |
| `exaroton_list_servers` | read | |
| `exaroton_get_server` | read | `serverId?` |
| `exaroton_get_server_ram` | read | |
| `exaroton_get_file_info` | read | path remoto |
| `exaroton_get_text_file` | read | |
| `exaroton_download_file` | write (FS) | destino sob `MINE_MCP_DOWNLOADS_DIR` |
| `exaroton_download_directory` | write (FS) | |
| `exaroton_download_world` | write (FS) | |

## Gaps de contrato (guideline)

- Sem `prompts` registrados.
- Sem hints SDK (`readOnlyHint`, `destructiveHint`, etc.) observados no registro atual.
- Sem pasta/arquivo `contracts` versionado além deste referência + README (README desatualizado).
