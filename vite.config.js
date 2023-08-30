import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { GenerateSitemap } from "./src/sitemap/GenerateSitemap";

export default defineConfig({
  plugins: [react()],
});
