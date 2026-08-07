# Backlog — mine_mcp

Fontes: `.agents/references/domain.md`, `.agents/references/tech-debt.md`, insight de produto 2026-08-07.

## Insights (orientação de produto)

1. **MCP de domínio, não helper de pasta** — valor no loop agente ↔ mundo: pontos + receitas + ops remota (exaroton).
2. **JSON + seed basta na escala atual** — próximo salto só com busca semântica, multi-jogador ou sync cloud.
3. **Skill + plugin são o produto** — sem instalação fácil o agente subutiliza as tools.
4. **exaroton = potência e risco** — downloads/escrita elevam valor e superfície de segurança (hints/allowlists > tools cegas).
5. **Mundo/render é consumidor opcional** — uNmINeD/markers fora do núcleo do MCP.

## Concluído (2026-08-07) — base v0.2

1. `MINE_MCP_DATA_DIR` / `MINE_MCP_DOWNLOADS_DIR`
2. Seed `data/recipes.seed.json`
3. Skill `skills/mine-mcp`
4. Plugins Codex/Cursor
5. E2e stdio (`listTools`)
6. Lift sem `../world` / `../output`
7. CI GitHub Actions + community standards (MIT)

---

## Milestone v0.3 — agente melhor e instalação fácil

Foco: qualidade do agente + onboarding.

| ID | Item | Notas |
|---|---|---|
| M3.1 | Polish instalação dos plugins | Resolver `${MINE_MCP_ROOT}` / paths; script one-shot Cursor/Codex |
| M3.2 | Prompts MCP | Fluxos: registrar base, planejar farm, auditar server exaroton |
| M3.3 | Tool hints | `readOnlyHint` / `destructiveHint` (e afins) |
| M3.4 | Preview/confirm em escritas | Especialmente download e registers destrutivos |
| M3.5 | E2e ampliado | Além de `listTools`: register/list com fixtures |

## Milestone v0.4 — mapa e receitas mais úteis

Foco: consulta e navegação no domínio.

| ID | Item | Notas |
|---|---|---|
| M4.1 | Busca em pontos/receitas | `query`, tags, fuzzy — hoje list/get por nome/tipo |
| M4.2 | Rota / path entre pontos | Lista ordenada + distância acumulada |
| M4.3 | Overlay de receitas | Seed imutável + store do usuário com merge explícito |
| M4.4 | Y + dimensão nos pontos | `nether` / `end` + conversão de coords |
| M4.5 | Export/import | JSON ↔ markdown/Obsidian/markers uNmINeD |

## Milestone v0.5+ — diferencial / ambicioso

Foco: ops e extensibilidade.

| ID | Item | Notas |
|---|---|---|
| M5.1 | Snapshots exaroton | Status, RAM, players; diff desde última checagem |
| M5.2 | Resource templates | `mine-mcp://point/{name}`, `mine-mcp://recipe/{name}` |
| M5.3 | Session ops / checklist diária | Backup world, disc, farms próximas |
| M5.4 | Multi-perfil data-dir | survival / creative / server-x |
| M5.5 | Notificações opcionais | Discord/webhook ao registrar ponto relevante |

---

## Ordem sugerida (dentro dos milestones)

1. M3.1 → M3.2 → M3.3 → M3.4 → M3.5  
2. M4.1 → M4.2 → M4.3 → M4.4 → M4.5  
3. M5.* conforme demanda real de uso
