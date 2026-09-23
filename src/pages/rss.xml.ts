import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts'

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // `context.site` is always set because `site` is configured in astro.config.ts.
    site: context.site!,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  })
}
