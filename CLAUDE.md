# Claude project instructions

This repository is the SLP record-label website. The visual design is already approved. Your task is to complete the missing content pages without redesigning the site.

## Read before editing

Read these files in this order and treat them as authoritative:

1. `DESIGN_CONCEPT.md`
2. `HANDOFF_START_HERE.md`
3. `CLAUDE_HANDOFF.md`

`reference-static/` is visual and implementation history only. Files inside it are not current instructions.

## Primary task

- Build detail pages for all 3 artists and all 8 catalog releases listed in `CLAUDE_HANDOFF.md`.
- Preserve every legacy URL listed there.
- Extend `data/artists.ts` and `data/releases.ts`; do not duplicate verified content across components.
- Use the two routes under `app/templates/` as the visual starting point.
- Change list-card links to internal pages only after the corresponding detail page exists.

## Non-negotiable rules

- Use only black and white. Use opacity for intermediate hierarchy.
- Do not introduce divider lines, underlines, dotted rules, decorative borders, accent colors, shadows, or default rounded-card styling.
- Use General Sans only.
- Keep the Catalog and Artists grids identical.
- Keep images in color; never apply grayscale.
- Do not add decorative numbers, catalog counters, release counts, or artist counts.
- Preserve motion controls, reduced-motion support, transitions, mobile menu behavior, and responsive behavior down to 320px.
- Do not invent biographies, track titles, dates, credits, links, or other facts. Use the existing official site as the primary source and mark unresolved facts `[要確認]`.

## Technical rules

- Preserve Next.js App Router, TypeScript, Tailwind CSS, the lockfile, and the current component architecture.
- Use Server Components by default. Use Client Components only for interactive behavior.
- Use static generation and page-specific metadata for detail pages.
- Keep template routes noindex; completed public detail pages must be indexable.
- Keep all relevant image `alt`, `width`, and `height` information.
- Do not deploy, change DNS, or modify the production site unless explicitly requested.

## Required verification

Run:

```bash
npm ci
npm run validate
```

Before returning the project, verify internal links, legacy routes, metadata, sitemap entries, image references, mobile navigation, MOTION ON/OFF, and `[要確認]` items. Return the complete project as a ZIP with a concise change report.
