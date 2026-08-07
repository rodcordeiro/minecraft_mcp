# Estrutura (checkout)

## Layout

```text
minecraft_mcp/
  AGENTS.md
  .agents/references/
  .github/workflows/ci.yml
  docs/backlog.md
  skills/mine-mcp/
  plugins/codex/mine-mcp/
  plugins/cursor/mine-mcp/
  src/
    index.ts
    config.ts
    repository/
    services/
  tests/
  data/
    recipes.seed.json
    recipes.json
    points.json
```

## Fronteiras

| Camada | Responsabilidade |
|---|---|
| `src/index.ts` | MCP tools/resources + sandbox downloads |
| `src/config.ts` | `MINE_MCP_*` env → paths |
| `src/services/*` | Regras |
| `src/repository/*` | Persistência JSON (+ seed de receitas) |
| `skills/` / `plugins/` | Skill e instalação Codex/Cursor |
