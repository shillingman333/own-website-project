# own-website-project

Personal site (Next.js) for values, motivation, and goals — built for interviews and reference.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build static files (GitHub Pages)

This site exports a static `index.html` and friends into the `out/` folder:

```bash
npm run build
```

After a successful build you’ll have:

- `out/index.html` — homepage (what GitHub Pages serves as the site root)
- other routes under `out/alias/`, `out/why/`, etc.

GitHub expects an `index.html` at the **root of what it publishes**. That is either:

1. **GitHub Actions (recommended)** — already set up in `.github/workflows/deploy-pages.yml`. The workflow builds `out/` and deploys it so the live site root is `index.html`.
2. **Deploy from a branch → `/docs` folder** — run build, copy `out/*` into `docs/`, then set Pages to that folder.

### Enable Pages (Actions)

1. GitHub repo → **Settings** → **Pages**
2. **Source**: GitHub Actions (not “Deploy from a branch”)
3. Push to `main` (or re-run the workflow). Your site will be at:

   `https://shillingman333.github.io/own-website-project/`

The workflow sets `NEXT_PUBLIC_BASE_PATH=/own-website-project` so links and assets work under that path.

### Local static preview of the export

```bash
npx --yes serve out
```
