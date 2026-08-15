# Frontend Portfolio

Evidence-led frontend portfolio for byungsker.

## Product direction

This site presents three public personal products first:

- [Bookgolas](https://book-golas.vercel.app/)
- [바로구니](https://baroguni.vercel.app/)
- [byungskerlog](https://byungskerlog.com/)

Company experience is described only through approved role, technical scope,
and public context links. Internal code, screenshots, customer details,
identifiers, metrics, and operational records are out of scope unless approved.

## Documentation

- [PRD](docs/PRD.md)
- [Roadmap](docs/ROADMAP.md)
- [Contribution and safety rules](AGENTS.md)

## Run locally

```bash
npm ci
npm run dev
```

The local site is available at `http://localhost:5173`. Before opening a pull
request, run the complete quality gate:

```bash
npm run validate:content
npm run validate:links
npm run typecheck
npm run lint
npm run build
npm run test:rendered
```

## Content updates

Public project content lives in `app/content.ts`. Every project keeps the same
Context / Problem / Role / Build / Outcome / Limits / Links contract. Add a
public URL and a directly verifiable fact before adding a stronger claim. Keep
company experience at the approved public label and never add private code,
screenshots, customer details, or internal metrics.

## Status

Target release: `0.1.0` · Delivery unit: `web` · Profile: `web-continuous`

The portfolio is a standard React + Vite application. It does not depend on
ChatGPT Sites or a provider-specific runtime. The canonical issue source
remains the Obsidian project record.

Evidence-led frontend portfolio: personal products, product UX, and selected experience.
