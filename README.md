# arii.dev

Personal blog where I write about what I'm learning, what I'm building, and the systems I work with.

Live: https://arii.dev/

## stack

- [Astro](https://astro.build/) (v6) — static site + content collections
- [Tailwind CSS](https://tailwindcss.com/) (v4) — styling (via `@tailwindcss/vite`)
- [TypeScript](https://www.typescriptlang.org/) — type safety
- [MDX](https://mdxjs.com/) — blog posts with components
- [Sharp](https://github.com/lovell/sharp) — image processing for `astro:assets`

## content

Blog posts live in:

- `src/content/blog/*.{md,mdx}`

Content is validated using an Astro content collection schema (`src/content.config.ts`) with:

- `title`, `description`
- `pubDate`, optional `updatedDate`
- optional `heroImage` + `heroImageAlt`
- optional `category`
- optional `tags`

## features

- retro terminal-inspired UI
- responsive navigation:
  - mobile fullscreen overlay menu
  - tablet slide-in panel
  - desktop right sidebar navigation
- dynamic categories (generated from post frontmatter)
- tags + category pages + pagination
- RSS feed (`/rss.xml`)
- sitemap generation (`@astrojs/sitemap`)
- SEO + OpenGraph + Twitter meta tags
- structured data (`application/ld+json`)
- local font loading + preloading (no external font CDN)
- image lightbox for post images (keyboard + next/prev support)
- typewriter hero text animation on the homepage

## fonts

Fonts are self-hosted in `public/fonts` and preloaded in `BaseHead.astro`:

- **Bytesized** — display / headings
- **DM Sans** — body text
- **DM Mono** — code blocks

## hosting

Statically hosted on [AWS S3](https://aws.amazon.com/s3/) with [Amazon Route 53](https://aws.amazon.com/route53/) for DNS management.

## development

Requirements:

- Node.js `>= 22.12.0` (see `package.json`)

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## build

```bash
npm run build
npm run preview
```

## scripts

- `npm run dev` — start Astro dev server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run check` — run `astro check`
