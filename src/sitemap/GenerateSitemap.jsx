import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { getData, getEnvVariables } from "../helpers";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const GenerateSitemap = () => {
  const { idVenue } = useContext(EventosContext);

  const [urls, setUrls] = useState([]);

  useEffect(() => {
    if (idVenue !== "") {
      const getUrlSitemap = async () => {
        const { data } = await getData(
          VITE_API_EVENTOS + idVenue + "/sitemap",
          VITE_EMAIL,
          VITE_PASS
        );
        console.log({ dataSitemap: data });
        setUrls(data);
      };
      getUrlSitemap();
    }
  }, [idVenue]);

  useEffect(() => {
    if (urls.length > 0) {
      const xmlFile =  `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        ${urls
          .map(
            (item) => `
          <url>
            <loc>${item.site}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `
          )
          .join("")}
      </urlset>
    `;
    }
  }, [urls]);

  return `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urls
      .map(
        (item) => `
      <url>
        <loc>${item.site}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    `
      )
      .join("")}
  </urlset>
`;
};
