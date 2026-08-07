---
name: mine-mcp
description: >-
  Use the mine_mcp Minecraft MCP server for map points (X/Z), recipes/guides,
  and optional exaroton file/world downloads. Apply when configuring the MCP,
  choosing tools, setting MINE_MCP_DATA_DIR, or working with points/recipes.
---

# mine_mcp

Servidor MCP TypeScript (stdio) independente para pontos de mapa, receitas e exaroton.

## Quando usar

- Registrar ou consultar bases/pontos no overworld (coordenadas X/Z).
- Guardar/consultar farms, builds e guias (receitas).
- Inspecionar ou baixar arquivos/mundos de um servidor exaroton.

## Configuração do client

| Env | Obrigatório | Função |
|---|---|---|
| `MINE_MCP_DATA_DIR` | Não | Pasta com `points.json` e `recipes.json` (default: `<repo>/data`) |
| `MINE_MCP_DOWNLOADS_DIR` | Não | Sandbox de downloads exaroton (default: `<repo>/downloads`) |
| `EXAROTON_API_TOKEN` | Para tools exaroton | Token da API |
| `EXAROTON_SERVER_ID` | Não | Servidor padrão |

Receitas: se `recipes.json` não existir em `MINE_MCP_DATA_DIR`, o servidor copia o seed empacotado (`data/recipes.seed.json`). O usuário pode editar/incrementar o arquivo no `data/` passado pelo client.

Comando típico:

```json
{
  "command": "node",
  "args": ["<path-to>/dist/index.js"],
  "env": {
    "MINE_MCP_DATA_DIR": "<user-data-dir>",
    "EXAROTON_API_TOKEN": "<from-secret-store>"
  }
}
```

## Resources

| URI | Uso |
|---|---|
| `mine-mcp://workspace/context` | Paths efetivos (`dataDir`, `downloadsDir`, arquivos) |
| `mine-mcp://integrations/exaroton` | `configured` sem expor token |

## Tools — mapa

| Tool | Caso de uso | Parâmetros |
|---|---|---|
| `register_point` | Criar/atualizar ponto | `name`, `type`, `x`, `z`, `description?`, `tags?` |
| `list_points` | Listar pontos | `type?` |
| `distance_to_point` | Distância até ponto nomeado | `currentX`, `currentZ`, `pointName` |
| `nearest_point_by_type` | Ponto mais próximo de um tipo | `currentX`, `currentZ`, `type` |

Tipos comuns: `base`, `house`, `village`, `farm`, `fortress`, `stronghold`, `outpost`, `custom` (aliases PT/EN aceitos no service).

## Tools — receitas

| Tool | Caso de uso | Parâmetros |
|---|---|---|
| `register_recipe` | Upsert de guia/farm/build | `name`, `type`, `summary`, `resources[]`, `process[]`, `tags?` |
| `list_recipes` | Listar | `type?` |
| `get_recipe` | Buscar por nome | `name` |

Tipos: `block`, `build`, `farm`, `potion`, `custom`.

## Tools — exaroton

| Tool | Caso de uso | Parâmetros |
|---|---|---|
| `exaroton_get_account` | Conta autenticada | — |
| `exaroton_list_servers` | Listar servidores | — |
| `exaroton_get_server` | Overview + status | `serverId?` |
| `exaroton_get_server_ram` | RAM GiB | `serverId?` |
| `exaroton_get_file_info` | Metadados remotos | `filePath`, `serverId?` |
| `exaroton_get_text_file` | Ler texto UTF-8 | `filePath`, `serverId?` |
| `exaroton_download_file` | Baixar arquivo | `filePath`, `destinationPath?`, `serverId?` |
| `exaroton_download_directory` | Baixar árvore | `remotePath`, `destinationDir?`, `serverId?` |
| `exaroton_download_world` | Atalho de mundo | `worldPath?`, `destinationDir?`, `serverId?` |

Downloads ficam sob `MINE_MCP_DOWNLOADS_DIR`; caminhos com `..` são rejeitados.

## Regras para o agente

1. Preferir resources de contexto antes de assumir paths.
2. Não pedir/ecoar valores de `EXAROTON_API_TOKEN`.
3. Para persistência do usuário, orientar `MINE_MCP_DATA_DIR` no client — não hardcodar o workspace de mundo Minecraft.
4. Após `register_*`, confirmar pelo `list_*` / `get_*` quando o usuário precisar de evidência.
