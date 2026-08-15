# Frontend Portfolio Engineering Rules

## Scope

This repository is a public career artifact. Treat every content change as a
potential public disclosure.

## Required checks

Once the application scaffold exists, every change must run the repository's
install, lint, typecheck, build, content validation, link check, and browser
smoke commands that apply to the changed surface.

## Public disclosure boundary

- Use personal product links and facts only when they are publicly verifiable.
- Render the internal project name `HStudio` as `모빌리티 UX 웹앱 기반 키오스크`
  in public-facing content.
- Do not add internal repository links, screenshots, customer or facility names,
  private identifiers, team conversations, unpublished metrics, credentials, or
  copied company source code.
- Do not turn planned features into shipped outcomes.
- If a company-project sentence cannot be supported without private evidence,
  move the detail to a private interview note instead of publishing it.

## Delivery contract

- Delivery unit: `web`
- Delivery profile: `web-continuous`
- Target version: `0.1.0`
- Base branch: `main`
- Work branches use `codex/<type>/web/0.1.0/<issue-or-scope>`.

## Content contract

Every project page should distinguish context, problem, role, build, outcome,
limits, and links. A reviewer must be able to identify what byungsker directly
owned without inferring ownership from the project as a whole.
