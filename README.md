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

Stories live in `src/app/posts/posts.data.ts`, the European city guides in `src/app/posts/city-guides.data.ts`, and guides to the rest of the world in `src/app/posts/world-city-guides.data.ts`. Add an object with a unique `slug` and it shows up on the home page, the story list and at `/posts/<slug>`. Optional `tips` render as a "Practical tips" list.

For a photo, set `photo` to an image hotlinked from [Unsplash](https://unsplash.com) (free under the [Unsplash License](https://unsplash.com/license)): `src` is the `images.unsplash.com/photo-…` URL without its query string, `page` is the photo's unsplash.com page, plus `author` and `alt`. The post page credits the photographer automatically. The `cover` gradient shows behind the photo while it loads, or on its own if there is no photo.

## Deployment

`.github/workflows/deploy.yml` builds and tests every pull request, and deploys to GitHub Pages on every push to `main`. The build uses `--base-href /travel/` (the repository name) and copies `index.html` to `404.html` so deep links work on refresh.

One-time setup: in the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
