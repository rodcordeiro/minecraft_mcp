# mine_mcp

Servidor MCP TypeScript (stdio) para pontos de mapa Minecraft (X/Z), receitas/guias e integração exaroton — independente do workspace de mundo.

| Campo | Valor |
|---|---|
| Stack | TypeScript NodeNext, `@modelcontextprotocol/sdk`, Zod, Jest, pnpm |
| Classificação MCP | Servidor MCP (tools + resources; sem prompts) |
| Domínio guideline | `mcp` → `$nero` → `references/guidelines/mcp-guidelines.md` |
| Knowledge Nero | domínio `minecraft`, projeto `mine_mcp` |
| Entry / transport | `src/index.ts` → `dist/index.js` · stdio |
| Validação | `pnpm run check` (typecheck + test) · `pnpm run build` |

## Como usar este contexto

| Quando | Ler |
|---|---|
| Orientação geral | `AGENTS.md` (este) |
| Índice de referências | `.agents/references/index.md` |
| Layout / fronteiras | `.agents/references/structure.md` |
| Boot, env, transport | `.agents/references/runtime.md` |
| Inventário tools/resources | `.agents/references/contracts.md` |
| Secrets / allowlists | `.agents/references/security.md` |
| Propósito / backlog | `.agents/references/domain.md` |
| Cópia do backlog | `docs/backlog.md` |
| Como mudar e testar | `.agents/references/conventions.md` |
| Padrões locais | `.agents/references/patterns.md` |
| Dívida vs guideline | `.agents/references/tech-debt.md` |
| Guideline MCP (não copiar) | `$nero` → `references/guidelines/mcp-guidelines.md` |

## Regras rápidas

- Mudanças localizadas: regras em `src/services/`, persistência em `src/repository/`, contrato MCP (Zod/tools/resources) em `src/index.ts`.
- stdout = JSON-RPC; logs humanos em stderr (`console.error`).
- Não acoplar a `../world` / `../output`; layout plano na raiz (`src/`, sem pasta `mine_mcp/` aninhada).
- Persistência JSON em `data/` (ou `MINE_MCP_DATA_DIR`); backlog/milestones em `docs/backlog.md`.
- Não alterar testes validados sem pedido explícito; não registrar secrets/valores de env.

## Skills condicionais

- Sempre: `$nero` + MCP `nero-knowledge-base` (workspace sob `projetos/personal`).
- Guideline: `$nero` → `references/guidelines/mcp-guidelines.md`.
- Sem Domain Skill de produto/lib neste checkout — omitir.
