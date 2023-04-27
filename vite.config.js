import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '/storage/css/calendario.css',
        '/storage/css/cardevento.css',
        '/storage/css/comollegar.css',
        '/storage/css/detalleevento.css',
        '/storage/css/footer.css',
        '/storage/css/header.css',
        '/storage/css/historia.css',
        '/storage/css/index.css',
        '/storage/css/navbar.css',
        '/storage/css/preguntasfrecuentes.css',
        '/storage/css/sliderdestacado.css',
        '/storage/css/tablaprecios.css'
      ]
    }
  }
})
