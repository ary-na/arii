// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "arii.dev";
export const SITE_TAGLINE = "Full-stack & ML/AI builder";
export const SITE_AUTHOR = "Arian Najafi Yamchelo";
export const SITE_DESCRIPTION =
  "Arian Najafi Yamchelo — full-stack and ML/AI builder in Melbourne. Master’s in AI from Monash. Open to roles in SWE, ML, and full-stack.";

export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const PRIMARY_NAV: NavItem[] = [
  { href: "/work", label: "Work", description: "selected projects" },
  { href: "/blog", label: "Writing", description: "notes and write-ups" },
  { href: "/about", label: "About", description: "background and education" },
  { href: "/#contact", label: "Contact", description: "get in touch" },
];

export const FEATURED_POSTS: string[] = [
  "hushlink",
  "dtm",
  "tsla-forecast",
  "lstage",
  "spacewatch",
  "hart",
];

export type ShippedProject = {
  slug: string;
  name: string;
  outcome: string;
  tech: string[];
  github?: string;
  demo?: string;
  npm?: string;
};

/** Homepage + /work project cards. Claims and links come from existing posts. */
export const SHIPPED: ShippedProject[] = [
  {
    slug: "hushlink",
    name: "hushlink",
    outcome:
      "Zero-knowledge one-time secret sharing — AES-256-GCM encrypted in the browser, stored in DynamoDB, destroyed on first read.",
    tech: ["Next.js", "TypeScript", "DynamoDB", "Web Crypto", "Vercel"],
    github: "https://github.com/ary-na/hushlink",
  },
  {
    slug: "husk",
    name: "husk",
    outcome:
      "A native macOS uninstaller with confidence-scored leftover detection, sharing one engine between a SwiftUI GUI and a CLI.",
    tech: ["Swift", "SwiftUI", "macOS", "CLI"],
    github: "https://github.com/ary-na/husk",
  },
  {
    slug: "lazy-commit",
    name: "lazy-commit",
    outcome:
      "A Node.js CLI that writes conventional commit messages from the staged diff, with dry-run, editing, and confirmation before it commits.",
    tech: ["TypeScript", "Node.js", "CLI", "OpenAI", "Git"],
    github: "https://github.com/ary-na/lazy-commit",
    npm: "https://www.npmjs.com/package/@ariian/lazy-commit",
  },
  {
    slug: "lemme",
    name: "lemme",
    outcome:
      "A natural-language CLI that translates plain English into shell commands via Claude, OpenAI, Groq, or Gemini — and runs them only after you confirm.",
    tech: ["TypeScript", "Node.js", "CLI", "AI"],
    github: "https://github.com/ary-na/lemme",
    npm: "https://www.npmjs.com/package/lemme",
  },
  {
    slug: "tsla-forecast",
    name: "tsla forecast",
    outcome:
      "A Telegram bot for TSLA forecasts using a Bidirectional LSTM, sentiment analysis, and 17 engineered features, deployed on AWS EC2.",
    tech: ["Python", "LSTM", "Machine Learning", "AWS EC2"],
    github: "https://github.com/ary-na/tsla-forecast",
  },
  {
    slug: "hart",
    name: "hart",
    outcome:
      "A Next.js artwork portfolio and shop with Google OAuth, role-based access, a contact form, and a protected admin dashboard.",
    tech: ["Next.js", "React", "TypeScript", "MongoDB", "NextAuth"],
    github: "https://github.com/ary-na/hart",
    demo: "https://hart-delta.vercel.app",
  },
];

export const BLOG_PAGE_SIZE = 8;

export type SocialLink = {
  href: string;
  label: string;
  handle: string;
  icon?: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/ary-na",
    label: "GitHub",
    handle: "ary-na",
    icon: "github",
  },
  {
    href: "https://x.com/ariiii4n",
    label: "X",
    handle: "@ariiii4n",
    icon: "x",
  },
  {
    href: "https://linkedin.com/in/arian-najafi-yamchelo",
    label: "LinkedIn",
    handle: "arian-najafi-yamchelo",
    icon: "linkedin",
  },
  {
    href: "https://gravatar.com/collectiveautomaticae806d67f2",
    label: "Gravatar",
    handle: "collectiveautomaticae806d67f2",
    icon: "gravatar",
  },
  { href: "mailto:hi@arii.dev", label: "Email", handle: "hi@arii.dev" },
];

export const CONTACT_EMAIL =
  SOCIAL_LINKS.find((link) => link.href.startsWith("mailto:"))?.handle ??
  "hi@arii.dev";

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const GITHUB_LINK = SOCIAL_LINKS.find((link) => link.icon === "github");
export const LINKEDIN_LINK = SOCIAL_LINKS.find(
  (link) => link.icon === "linkedin",
);

export const categoryHref = (category: string) =>
  `/blog/category/${encodeURIComponent(category)}`;
export const tagHref = (tag: string) => `/blog/tag/${encodeURIComponent(tag)}`;
export const blogPageHref = (page: number) =>
  page <= 1 ? "/blog" : `/blog/page/${page}`;
export const categoryPageHref = (category: string, page: number) =>
  page <= 1 ? categoryHref(category) : `${categoryHref(category)}/page/${page}`;
export const tagPageHref = (tag: string, page: number) =>
  page <= 1 ? tagHref(tag) : `${tagHref(tag)}/page/${page}`;

export const isNavActive = (pathname: string, href: string) => {
  if (href.startsWith("/#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};
