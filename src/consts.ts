// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'arii.dev'
export const SITE_TAGLINE = 'Full-stack & ML/AI builder'
export const SITE_AUTHOR = 'Arian Najafi Yamchelo'

export const HOME_TITLE =
  'Arian Najafi Yamchelo — Full-stack & ML/AI · Melbourne'
export const HOME_DESCRIPTION =
  'Master’s in AI from Monash. I ship full-stack products, CLIs, and ML systems, then write about the process. Open to SWE, ML, and full-stack roles.'

export const ABOUT_TITLE = 'About — Arian Najafi Yamchelo'
export const ABOUT_DESCRIPTION =
  'Based in Melbourne. Master’s in AI from Monash. Full-stack, CLIs, and machine learning — open to roles where product and ML meet.'

export const WORK_DESCRIPTION =
  'Selected projects: husk, hushlink, dtm, TSLA forecast, and more. Full-stack apps, CLIs, and ML systems.'

export const WRITING_DESCRIPTION =
  'Notes on shipping: macOS tools, zero-knowledge apps, CLIs, and ML systems I’ve built.'

/** RSS channel description. Matches the home meta description. */
export const SITE_DESCRIPTION = HOME_DESCRIPTION

export type NavItem = {
  href: string
  label: string
  description?: string
}

export const PRIMARY_NAV: NavItem[] = [
  { href: '/work/', label: 'Work', description: 'selected projects' },
  { href: '/blog/', label: 'Writing', description: 'notes and write-ups' },
  { href: '/about/', label: 'About', description: 'background and education' },
  { href: '/#contact', label: 'Contact', description: 'get in touch' },
]

export const FEATURED_POSTS: string[] = [
  'hushlink',
  'dtm',
  'tsla-forecast',
  'lstage',
  'spacewatch',
  'hart',
]

/** Problem → built → why. The work index renders these three strings and nothing else from the case block. */
export type ProjectArc = {
  problem: string
  built: string
  why: string
}

export type ProjectShot = {
  src: string
  alt: string
  width: number
  height: number
}

export type ShippedProject = {
  slug: string
  name: string
  /** One-line dek for numbered index rows. */
  summary: string
  tech: string[]
  github?: string
  demo?: string
  npm?: string
  /** Scales sparse wordmark art inside the shared 16:10 thumbnail. */
  thumbScale?: number
  /** Editorial weight. Omitted entries render as numbered rows. */
  weight?: 'featured' | 'secondary'
  /**
   * Locked case copy for featured and secondary entries.
   * The layout reads these three strings and does not rewrite them.
   */
  arc?: ProjectArc
  /** Product shot. Shown when present, which is the featured entry. */
  shot?: ProjectShot
}

/**
 * Homepage + /work index. `weight` pins the editorial grid;
 * everything else is a numbered row. `arc` is the only case copy the layout reads.
 */
export const SHIPPED: ShippedProject[] = [
  {
    slug: 'husk',
    name: 'husk',
    weight: 'featured',
    summary:
      'A native macOS uninstaller that scores leftover files and quarantines them instead of guessing.',
    arc: {
      problem:
        'Uninstalling a Mac app often leaves containers, prefs, and launch agents behind. Finder’s drag-to-trash doesn’t clean that up.',
      built:
        'A native macOS uninstaller with one shared engine for a SwiftUI app and a CLI, scoring leftovers so you can review before delete.',
      why: 'Gives people a clear, confidence-scored cleanup instead of hunting Library folders by hand.',
    },
    shot: {
      src: '/blog/husk/scan-appcleaner.webp',
      alt: 'husk scan of AppCleaner, listing leftover files grouped by how confident the match is',
      width: 1800,
      height: 1264,
    },
    tech: ['Swift', 'SwiftUI', 'macOS', 'CLI'],
    github: 'https://github.com/ary-na/husk',
  },
  {
    slug: 'dtm',
    name: 'dtm',
    summary:
      'A CLI that snapshots your config files to a private GitHub repo and rolls any file back with one command.',
    tech: ['TypeScript', 'Node.js', 'CLI'],
    github: 'https://github.com/ary-na/dtm',
    npm: 'https://www.npmjs.com/package/@ariian/dtm',
  },
  {
    slug: 'tsla-forecast',
    name: 'tsla forecast',
    summary:
      'A Telegram bot that forecasts the next week of TSLA from price history, market context, and news tone.',
    tech: ['Python', 'Machine learning', 'Telegram', 'AWS'],
    github: 'https://github.com/ary-na/tsla-forecast',
  },
  {
    slug: 'hart',
    name: 'hart',
    summary:
      'A Next.js artwork portfolio and shop with accounts, a contact form, and a protected admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'MongoDB'],
    github: 'https://github.com/ary-na/hart',
    demo: 'https://hart-delta.vercel.app',
    thumbScale: 1.45,
  },
  {
    slug: 'shiny-spoon',
    name: 'shiny spoon',
    summary:
      'A photo-sharing app with login, image uploads, and a welcome email when someone joins.',
    tech: ['Python', 'Flask', 'FastAPI', 'AWS'],
    github: 'https://github.com/ary-na/shiny-spoon',
    thumbScale: 1.7,
  },
  {
    slug: 'hushlink',
    name: 'hushlink',
    weight: 'secondary',
    summary:
      'A web app for sending a secret once, encrypted in the browser and deleted on first open.',
    arc: {
      problem:
        'Sharing a password or API key in chat or email leaves a copy sitting in someone’s history.',
      built:
        'A one-time secret link: encrypted in the browser before it leaves the device, stored briefly, destroyed on first open.',
      why: 'Lets you hand someone a secret without leaving a permanent trail in Slack, mail, or notes.',
    },
    tech: ['Next.js', 'TypeScript', 'DynamoDB', 'Web Crypto', 'Vercel'],
    github: 'https://github.com/ary-na/hushlink',
  },
  {
    slug: 'smart-board',
    name: 'smart board',
    summary:
      'A desktop Kanban board with drag-and-drop lists and a local database.',
    tech: ['Java', 'JavaFX', 'SQLite'],
    github: 'https://github.com/ary-na/Smart-Board',
  },
  {
    slug: 'spacewatch',
    name: 'spacewatch',
    summary:
      'A macOS menu bar app that shows your current Space and lets you rename it.',
    tech: ['Swift', 'SwiftUI', 'macOS'],
    github: 'https://github.com/ary-na/spacewatch',
  },
]

/** Homepage editorial index length: featured + secondary, then quiet rows up to this count.
 * The /work page always shows the full list. */
export const HOMEPAGE_SHIPPED_COUNT = 4

export const BLOG_PAGE_SIZE = 8

export type SocialLink = {
  href: string
  label: string
  handle: string
  icon?: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/ary-na',
    label: 'GitHub',
    handle: 'ary-na',
    icon: 'github',
  },
  {
    href: 'https://x.com/ariiii4n',
    label: 'X',
    handle: '@ariiii4n',
    icon: 'x',
  },
  {
    href: 'https://linkedin.com/in/arian-najafi-yamchelo',
    label: 'LinkedIn',
    handle: 'arian-najafi-yamchelo',
    icon: 'linkedin',
  },
  {
    href: 'https://gravatar.com/collectiveautomaticae806d67f2',
    label: 'Gravatar',
    handle: 'collectiveautomaticae806d67f2',
    icon: 'gravatar',
  },
  { href: 'mailto:hi@arii.dev', label: 'Email', handle: 'hi@arii.dev' },
]

export const CONTACT_EMAIL =
  SOCIAL_LINKS.find((link) => link.href.startsWith('mailto:'))?.handle ??
  'hi@arii.dev'

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`

export const GITHUB_LINK = SOCIAL_LINKS.find((link) => link.icon === 'github')
export const LINKEDIN_LINK = SOCIAL_LINKS.find(
  (link) => link.icon === 'linkedin',
)

/** Profile URLs used for Person.sameAs and rel="me". */
export const IDENTITY_LINKS = [GITHUB_LINK, LINKEDIN_LINK].filter(
  (link): link is SocialLink => Boolean(link),
)

export const externalRel = (link: { icon?: string }) =>
  link.icon === 'github' || link.icon === 'linkedin'
    ? 'me noopener noreferrer'
    : 'noopener noreferrer'

// Internal hrefs always end in "/" to match the canonical URLs; the CloudFront
// function 301s slashless paths, so links without it cost a redirect.
export const categoryHref = (category: string) =>
  `/blog/category/${encodeURIComponent(category)}/`
export const tagHref = (tag: string) => `/blog/tag/${encodeURIComponent(tag)}/`
export const blogPageHref = (page: number) =>
  page <= 1 ? '/blog/' : `/blog/page/${page}/`
export const categoryPageHref = (category: string, page: number) =>
  page <= 1 ? categoryHref(category) : `${categoryHref(category)}page/${page}/`
export const tagPageHref = (tag: string, page: number) =>
  page <= 1 ? tagHref(tag) : `${tagHref(tag)}page/${page}/`

export const isNavActive = (pathname: string, href: string) => {
  if (href.startsWith('/#')) return false
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href.endsWith('/') ? href : `${href}/`)
}
