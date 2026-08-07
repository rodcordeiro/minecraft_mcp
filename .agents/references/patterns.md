# Padrões locais

- **Upsert por nome:** pontos e receitas; comparação case-insensitive `pt-BR`.
- **Aliases de tipo:** services normalizam sinônimos PT/EN para enums.
- **Store JSON:** `ENOENT` → cria store vazio; escrita com sort por nome.
- **Borda MCP:** Zod nos args; resposta texto JSON.
- **Sandbox download:** allowlist sob `MINE_MCP_DOWNLOADS_DIR`.
- **Seed de receitas:** `ENOENT` no store do usuário → copia `recipes.seed.json` (se configurado).
- **exaroton opcional:** tools falham sem token; resource reporta `configured` sem segredo.
