# Security Policy

## Supported versions

| Version | Supported |
|---|---|
| `0.2.x` | Yes |
| `< 0.2` | Best effort |

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Prefer one of:

1. GitHub Security Advisories (private report) on this repository, when available
2. A private contact to the repository owner via GitHub

Include:

- Affected version / commit
- Impact description
- Reproduction steps or proof of concept (non-destructive when possible)
- Whether a fix is already known

## Scope notes for this project

- Never include real `EXAROTON_API_TOKEN` values, cookies, or other secrets in reports shared publicly.
- Path traversal / sandbox escapes around `MINE_MCP_DATA_DIR` and `MINE_MCP_DOWNLOADS_DIR` are in scope.
- Dependency CVEs in transitive packages are welcome; prefer actionable upgrade paths.

## Response expectations

Maintainers aim to acknowledge reports within a reasonable time and to coordinate disclosure after a fix or mitigation is available.
