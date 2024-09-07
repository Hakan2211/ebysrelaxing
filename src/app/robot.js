export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/leistungen', '/about', '/kontakt'],
      disallow: [],
    },
    sitemap: 'https://ebysrelaxing.com/sitemap.xml',
  };
}
