# 0.1.0 Operations Notes

## Pull request gate

GitHub Actions runs install, content validation, link validation, typecheck,
lint, build, and rendered HTML tests for each pull request and push to `main`.
The repository does not require runtime secrets for the portfolio surface.

## Deployment boundary

The app is a standard React + Vite build and is intentionally hosting-provider
agnostic. Deploy the generated `dist/` directory to the approved provider with
SPA fallback enabled for `/projects/:slug` and `/resume`. There is no admin
route, authentication, analytics dashboard, or private content route in the
0.1.0 surface. Set `SITE_URL` at build time; the build emits provider-neutral
`robots.txt` and `sitemap.xml` for the approved public origin.

## Content refresh

1. Verify the new public URL and the directly owned fact.
2. Update `src/content.ts` and `docs/evidence-ledger.md` together.
3. Run the complete README quality gate.
4. Review public disclosure against `AGENTS.md`.
5. Record the outcome in the canonical Obsidian issue and Wiki.

If a claim cannot be verified publicly, remove it from the site and keep the
detail in a private interview preparation record instead.
