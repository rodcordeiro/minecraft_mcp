# Segurança

## Secrets

- Tokens só via env do host; nunca em docs/resources/logs.
- Resource exaroton expõe apenas `configured: boolean`.

## Filesystem

- Persistência em `MINE_MCP_DATA_DIR`.
- Downloads allowlist sob `MINE_MCP_DOWNLOADS_DIR` (`resolveDownloadPath`).

## Logging

- stdout = JSON-RPC; stderr para erros de boot.
