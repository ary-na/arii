import { readdirSync, readFileSync } from 'node:fs'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

const blogDir = new URL('./src/content/blog/', import.meta.url)

/** Maps each blog post slug to its updatedDate/pubDate, read directly from
 * frontmatter (astro:content isn't available yet at config-eval time). */
function readBlogLastmods(): Record<string, string> {
  const lastmods: Record<string, string> = {}
  for (const entry of readdirSync(blogDir)) {
    if (!/\.(md|mdx)$/.test(entry)) continue
    const raw = readFileSync(new URL(entry, blogDir), 'utf-8')
    const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/)?.[1]
    if (!frontmatter) continue
    const pubDate = frontmatter.match(
      /^pubDate:\s*['"]?([^'"\n]+)['"]?\s*$/m,
    )?.[1]
    const updatedDate = frontmatter.match(
      /^updatedDate:\s*['"]?([^'"\n]+)['"]?\s*$/m,
    )?.[1]
    const dateStr = updatedDate ?? pubDate
    if (!dateStr) continue
    const slug = entry.replace(/\.(md|mdx)$/, '')
    lastmods[slug] = new Date(dateStr).toISOString()
  }
  return lastmods
}

const blogLastmods = readBlogLastmods()

export default defineConfig({
  site: 'https://arii.dev',
  redirects: {
    '/featured': '/work/',
  },
  integrations: [
    mdx(),
    sitemap({
      // Tag archives and paginated pages past page 1 are noindexed, and
      // /page/1/ duplicates canonicalize to the unpaginated archive, so keep
      // all of them out of the sitemap.
      filter: (page) =>
        !page.includes('/blog/tag/') && !/\/page\/\d+\/$/.test(page),
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/$/)?.[1]
        const lastmod = slug ? blogLastmods[slug] : undefined
        return lastmod ? { ...item, lastmod } : item
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': new URL('./src/components', import.meta.url).pathname,
        '@layouts': new URL('./src/layouts', import.meta.url).pathname,
        '@assets/*': new URL('./src/assets', import.meta.url).pathname,
        '@styles/*': new URL('./src/styles', import.meta.url).pathname,
        '@scripts/*': new URL('./src/scripts', import.meta.url).pathname,
        '@/*': new URL('./src', import.meta.url).pathname,
      },
    },
  },
})
