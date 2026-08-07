# Convenções

## Mudanças

- Regras em `src/services/`; persistência em `src/repository/`; contrato MCP em `src/index.ts`.
- Não alterar testes existentes sem pedido explícito; novos testes ok para features novas.
- Não commitar secrets.

## Validação

```text
pnpm run check
pnpm run build
```

Reiniciar o client MCP após rebuild.

## Guideline

`$nero` → `references/guidelines/mcp-guidelines.md`.
