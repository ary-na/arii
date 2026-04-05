// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'arian.dev';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const PRIMARY_NAV: NavItem[] = [
  { href: '/', label: 'Home', description: 'Landing page and intro' },
  { href: '/blog', label: 'Blog', description: 'All published posts' },
  { href: '/about', label: 'About', description: 'Background and story' },
];

export const BLOG_CATEGORIES: NavItem[] = [];

export const categoryHref = (category: string) => `/blog/category/${encodeURIComponent(category)}`;
