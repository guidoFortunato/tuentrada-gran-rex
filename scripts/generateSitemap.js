import fs from "fs-extra";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { createServer, getUrlsFromRoutes } from "./server"; // Importa la función createServer y getUrlsFromRoutes desde tu archivo server.js

async function generateSitemap() {
  const urls = getUrlsFromRoutes(); // Obtiene las URLs de tus rutas utilizando la función getUrlsFromRoutes

  const smStream = new SitemapStream({
    hostname: "https://teatro-granrex.com/", // Reemplaza con la URL de tu sitio
  });

  // Agrega las URLs al sitemap utilizando smStream.write()
  urls.forEach((url) => smStream.write(url));

  smStream.end();

  const sitemap = await streamToPromise(Readable.from(smStream), {
    encoding: "utf8",
  });

  // Guarda el sitemap en un archivo
  await fs.writeFile("./dist/sitemap.xml", sitemap);

  // console.log("Sitemap generado y guardado en ./dist/sitemap.xml");
}

// Crea el servidor para generar las rutas y el sitemap
const server = createServer();

// Genera el sitemap una vez que el servidor esté listo
server.listen(3000, async () => {
  await generateSitemap();
  server.close();
});
