const express = require("express");
const { generateSitemap } = require("../sitemap/");
const app = express();

// Ruta para el sitemap
app.get("/sitemap.xml", (req, res) => {
  // Genera el contenido del sitemap aquí
  const sitemapContent = generateSitemap();
  
  // Establece las cabeceras adecuadas para el contenido XML
  res.set("Content-Type", "application/xml");
  res.send(sitemapContent);
});

// ... Configuraciones adicionales y otros endpoints ...

app.listen(5173, () => {
  console.log("Servidor en funcionamiento en el puerto 3000");
});
