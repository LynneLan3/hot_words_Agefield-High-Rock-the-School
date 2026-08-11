# Agefield High: Rock the School Guide

Astro + Starlight game wiki for **Agefield High: Rock the School**.

This is the Agefield production site. Public URLs stay under `/agefield-high-rock-the-school/`. The generic template lives in the sibling `game-wiki-starter` repo and is not the user-facing brand.

Formal site: `https://agefield-high-rock-the-school.vercel.app`

Hub: `/agefield-high-rock-the-school/`

Root `/` permanently redirects to the Hub via Vercel (`vercel.json`, HTTP 308).

## Commands

```bash
npm install
npm run dev      # local preview at localhost:4321
npm run build    # static build to ./dist/
npm run preview  # preview the production build
```

## Content

Guides live in `src/content/docs/<category>/`. Public SEO URLs are set with frontmatter `slug`, not the source folder.

Per-game config: `src/config/game.ts`.

## Search Console

HTML file verification is served from `public/googlee7ae1126663f7b53.html`.
