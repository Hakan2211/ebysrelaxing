export default function sitemap() {
  return [
    {
      url: "https://www.ebysrelaxing.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.ebysrelaxing.com/leistungen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.ebysrelaxing.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.ebysrelaxing.com/kontakt",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.7,
    },
  ];
}
