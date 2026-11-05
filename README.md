# Desmond Koo — résumé site

React + TypeScript + Vite. Push to `main` and GitHub builds and publishes the site automatically.

## One-time GitHub setup

1. **Settings → Pages → Source: GitHub Actions** (don't click any Configure button).
2. Make sure `.github/workflows/deploy.yml` exists in the repo.
   Mac hides dot-folders, so if it's missing, create it on GitHub:
   **Add file → Create new file**, name it `.github/workflows/deploy.yml`, paste the file's contents.

After that, every push to `main` rebuilds the site (Actions tab shows progress).

## Editing

Edit `src/data/resume.ts`, commit, push. Done.

To preview on your own computer first (optional):

```bash
npm install
npm run dev      # http://localhost:5173
```

Logos: `public/logos/`. Game covers: `public/games/`. Photo: `public/desmond.webp`.
CV: replace `public/resume.pdf` whenever you update your résumé.
