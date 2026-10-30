# seedcoherent.github.io

Landing site for [seedcoherent](https://github.com/seedcoherent/seedcoherent) — a
schema-aware synthetic data generator.

Built with Next.js (static export) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build    # static site exported to ./out
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the static export and publishes it
to GitHub Pages. In the repo settings, set **Settings → Pages → Source** to
**GitHub Actions** once.
