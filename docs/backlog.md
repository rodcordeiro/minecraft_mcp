# Backlog — mine_mcp

Fontes: `.agents/references/domain.md` e `.agents/references/tech-debt.md`.

## Concluído (2026-08-07)

1. `data/` via **env** `MINE_MCP_DATA_DIR` (+ `MINE_MCP_DOWNLOADS_DIR`).
2. Seed de receitas (`data/recipes.seed.json`) com cópia na primeira criação do store do usuário.
3. Skill `skills/mine-mcp/SKILL.md` (tools, parâmetros, casos de uso).
4. Plugins `plugins/codex/mine-mcp` e `plugins/cursor/mine-mcp` (skill + MCP).
5. E2e stdio (`tests/mcp-stdio.e2e.test.ts`).
6. Lift: removido acoplamento a `../world` / `../output`; README atualizado.
7. CI GitHub Actions (`.github/workflows/ci.yml`).

## Aberto / residual

- Tool hints MCP (`readOnlyHint` / `destructiveHint`) e prompts (opcional).
- Preview/confirm em escritas (opcional vs guideline).
- Expandir e2e além de `listTools` (chamadas de tools com fixtures).
- Polir instalação dos plugins (expansão de `${MINE_MCP_ROOT}` / marketplace).
