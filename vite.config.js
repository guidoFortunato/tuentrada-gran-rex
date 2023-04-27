import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      
      external: [
        {
          id: "/storage/css/calendario.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/cardevento.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/comollegar.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/detalleevento.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/footer.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/header.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/historia.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/index.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/navbar.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/preguntasfrecuentes.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/sliderdestacado.css",
          contentType: "text/css"
        },
        {
          id: "/storage/css/tablaprecios.css",
          contentType: "text/css"
        }
      ],
    },
  },
});


