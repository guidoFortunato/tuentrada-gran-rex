import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs-extra";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
      plugins: [
        {
          name: "generate-sitemap",
          writeBundle() {
            generateSitemap();
          },
        },
      ],
    },
  },
});

async function generateSitemap() {
  const smStream = new SitemapStream({
    hostname: "https://ejemplo.com/", // Reemplaza con la URL de tu sitio
  });

  // Genera dinámicamente las URLs del sitemap
  // Puedes obtener los datos de tu base de datos u otra fuente de datos
  const urls = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/#/historia", changefreq: "monthly", priority: 0.5 },
    { url: "/#/horarios-y-llegada", changefreq: "monthly", priority: 0.5 },
    { url: "/#/calendario", changefreq: "monthly", priority: 0.5 },
    { url: "/#/bases-y-condiciones", changefreq: "monthly", priority: 0.5 },
    // Agrega más URLs según tus necesidades
  ];

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
