# Versus Sudoku landing page

Site for [thesudokugame.com](https://thesudokugame.com). It is a separate git repository from the app. The page stays in dark mode. Social links, screenshots, the App Store button, analytics, and the privacy page come from the indie landing-page template.

The shipping iOS app opens `https://thesudokugame.com/joinGame?withSessionId=…`. Both copies of `apple-app-site-association` must keep the path `/joinGame`, and neither URL may redirect.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production deploys from `main` on Vercel.
