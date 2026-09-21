# own-website-project

Personal site for Jacob Shilling — sharing things that matter, and where things stand career-wise.

Built with [Next.js](https://nextjs.org) (static export) and deployed to GitHub Pages.

**Live site:** https://shillingman333.github.io/own-website-project/

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage — intro and links into the site |
| `/career` | Experience, direction, LinkedIn |
| `/who-i-am` | Inspirations, spirituality, and reframes |
| `/recommendations` | Things worth buying and using |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are written to `out/` (ignored by git). Preview with:

```bash
npx --yes serve out
```

## Deploy (GitHub Pages)

Deployment is handled by [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) on pushes to `main`.

1. Repo → **Settings** → **Pages**
2. **Source**: GitHub Actions
3. Push to `main` (or re-run the workflow)

The workflow sets `NEXT_PUBLIC_BASE_PATH=/own-website-project` so assets work under that path.

## Repo notes

- **`PROMPT.md`** — original build brief and a change log of site edits
- **`_archived/`** — old page drafts kept for reference; not routed or built
- No API keys or env secrets are required; `.env*` files are gitignored

## Stack

- Next.js 16 (App Router, `output: "export"`)
- React 19
- CSS (Tailwind import + custom styles in `app/globals.css`)
