# 0.1.0 Operations Notes

## Pull request gate

GitHub Actions runs install, content validation, link validation, typecheck,
lint, build, and rendered HTML tests for each pull request and push to `main`.
The repository does not require runtime secrets for the portfolio surface.

## Deployment boundary

Set `NEXT_PUBLIC_SITE_URL` to the actual production origin before deployment so
canonical links, sitemap, and robots metadata do not advertise a local URL.
There is no admin route, authentication, analytics dashboard, or private
content route in the 0.1.0 surface.

## Content refresh

1. Verify the new public URL and the directly owned fact.
2. Update `app/content.ts` and `docs/evidence-ledger.md` together.
3. Run the complete README quality gate.
4. Review public disclosure against `AGENTS.md`.
5. Record the outcome in the canonical Obsidian issue and Wiki.

If a claim cannot be verified publicly, remove it from the site and keep the
detail in a private interview preparation record instead.
