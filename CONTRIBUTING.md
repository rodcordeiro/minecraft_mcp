# Contributing to mine_mcp

Thanks for considering a contribution. This document explains how to propose changes safely and keep the MCP contract stable.

## Code of Conduct

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

- Bug reports and reproductions
- Documentation improvements (README, skill, plugins, `docs/`)
- Small, focused pull requests for tools, persistence, tests, or CI
- Ideas via GitHub Issues (prefer a clear problem statement)

## Development setup

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm run check
pnpm run build
```

Useful scripts:

| Script | Purpose |
|---|---|
| `pnpm run check` | typecheck + tests |
| `pnpm run test` | Jest (including stdio e2e) |
| `pnpm run build` | compile to `dist/` |
| `pnpm run dev` | run TypeScript entry via tsx |

## Project conventions

- Keep MCP tools/resources contracts stable unless the PR explicitly documents a breaking change.
- Prefer changes in `src/services/` (rules) and `src/repository/` (persistence); keep `src/index.ts` focused on MCP wiring and Zod schemas.
- Do not commit secrets, tokens, or real env values (`EXAROTON_API_TOKEN`, etc.).
- Do not weaken or rewrite existing validated tests without a clear reason in the PR.
- New behavior should include new tests when practical.

## Pull request process

1. Open an issue for non-trivial changes when possible.
2. Branch from `main` and keep the PR focused.
3. Ensure `pnpm run check` passes locally.
4. Fill the pull request template (summary + test plan).
5. Maintainers may request changes for contract/security impact.

## Security issues

Do not open a public issue for vulnerabilities. See [SECURITY.md](SECURITY.md).

## License

Contributions are accepted under the [MIT License](LICENSE).
