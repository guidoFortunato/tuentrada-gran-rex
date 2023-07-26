import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs-extra";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { getEnvVariables } from "./src/helpers";
import { useState } from "react";
const { VITE_API_INFO_GENERAL, VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } =
  getEnvVariables();

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
  const [eventos, setEventos] = useState([]);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const getData = async()=>{
      const newLocal = `${VITE_API_EVENTOS + idVenue}`;
      const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
      setEventos(info.data)
    }
    getData()
    
  }, []);
  
  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const { data } = await getData(
        VITE_API_INFO_GENERAL + "teatro-granrex.com.ar",
        VITE_EMAIL,
        VITE_PASS
      );
      setPages(data.pages)
    };
    getDataInfoGeneral();
  }, []);

  const smStream = new SitemapStream({
    hostname: "https://teatro-granrex.com/", // Reemplaza con la URL de tu sitio
  });

  // Genera dinámicamente las URLs del sitemap
  // Puedes obtener los datos de tu base de datos u otra fuente de datos
  // const urls = [
  //   { url: "/", changefreq: "weekly", priority: 1.0 },
  //   { url: "/#/historia", changefreq: "monthly", priority: 0.5 },
  //   { url: "/#/horarios-y-llegada", changefreq: "monthly", priority: 0.5 },
  //   { url: "/#/calendario", changefreq: "monthly", priority: 0.5 },
  //   { url: "/#/bases-y-condiciones", changefreq: "monthly", priority: 0.5 },
  // ];

  const urlsEstaticas = pages.map( item => ( {url: `/#${item.path}`, changefreq: "monthly", priority: 0.5} ) )

  const urls2 = eventos.map( item => ( {url: `/#/${item.slug}`, changefreq: "weekly", priority: 0.8} ) )

  const urlsFinales = [ { url: "/", changefreq: "weekly", priority: 1.0 }, ...urlsEstaticas, ...urls ]

  // Agrega las URLs al sitemap utilizando smStream.write()
  urlsFinales.forEach((url) => smStream.write(url));

  smStream.end();

  const sitemap = await streamToPromise(Readable.from(smStream), {
    encoding: "utf8",
  });

  // Guarda el sitemap en un archivo
  await fs.writeFile("./dist/sitemap.xml", sitemap);

  console.log("Sitemap generado y guardado en ./dist/sitemap.xml");
}
