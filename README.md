# Wanderlog: a travel blog

An Angular travel blog starter with a home page, a story list with tag filters and a page per story. It deploys to GitHub Pages at **https://kvriesacker.github.io/travel/**.

## Run locally

```bash
npm install
npm start          # http://localhost:4200
npm test           # unit tests (Vitest)
npm run build:pages  # production build for GitHub Pages
```

Angular 22 needs Node.js 22.22.3+ or 24.15+.

## Adding a story

Stories live in `src/app/posts/posts.data.ts`. Add an object with a unique `slug` and it shows up on the home page, the story list and at `/posts/<slug>`. Covers are CSS gradients for now; put photos in `public/images/` and set `cover` to `url(images/your-photo.jpg) center / cover`.

## Deployment

`.github/workflows/deploy.yml` builds and tests every pull request, and deploys to GitHub Pages on every push to `main`. The build uses `--base-href /travel/` (the repository name) and copies `index.html` to `404.html` so deep links work on refresh.

One-time setup: in the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
