import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: {
      // Usa una expresión regular para identificar los módulos CSS
      // que deben ser incluidos como parte de la hoja de estilo principal
      match: /\/storage\/css\//,
    },
    rollupOptions: {
      external: [
        "/storage/css/calendario.css",
        "/storage/css/cardevento.css",
        "/storage/css/comollegar.css",
        "/storage/css/detalleevento.css",
        "/storage/css/footer.css",
        "/storage/css/header.css",
        "/storage/css/historia.css",
        "/storage/css/index.css",
        "/storage/css/navbar.css",
        "/storage/css/preguntasfrecuentes.css",
        "/storage/css/sliderdestacado.css",
        "/storage/css/tablaprecios.css"
      ],
    },
  },
});


