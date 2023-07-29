import { sitemap } from "./sitemap";

export function generateSitemap2() {
  const urls = sitemap();
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urls.map((item) => (
      <url>
        <loc>{item.hostname + item.url}</loc>
        <lastmod>{new Date().toISOString()}</lastmod>
        <changefreq>{item.changefreq}</changefreq>
        <priority>{item.priority}</priority>
      </url>
    ))}
   
  </urlset>
 `;
};
