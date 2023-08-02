import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Sitemap from "vite-plugin-sitemap";
// import Pages from "vite-plugin-pages";
// import generateSitemap from "vite-plugin-pages-sitemap";
// const { VITE_API_INFO_GENERAL, VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

// import { getEnvVariables } from "./src/helpers";
// import { sitemap } from "./scripts/sitemap";
// import { generateSitemap2 } from "./scripts/generateSitemap2";
// let pages;
// let eventos;

// let urlsFinales;

// 1672|nBeLSyxKxPJNuOA7vhlCpzZHJ1rl2FQt7yJvET5O

// const names = ["John", "Bryce", "Addison", "Dana"];
// const dynamicRoutes = names.map((name) => `/names/${name}`);

// const urlsSite = sitemap()

const urls = [
  "/",
  "/bases-y-condiciones",
  "/calendario",
  "/historia",
  "/horarios-y-llegada",
  "/paz-martinez",
  "/perota-chingo",
  "/fabiana-cantilo",
  "/natalie-perez",
  "/mya",
  "/vetusta-morla",
  "/piano-bar",
  "/el-polaco",
  "/julieta-venegas",
  "/daniel-agostini",
  "/gladys-la-bomba-tucumana",
  "/matias-valdez",
  "/antes-que-nadie",
  "/conociendo-rusia",
  "/la-beriso",
  "/vanesa-martin",
  "/khea",
  
];

// const urls2 = [
//   { url: "/", changefreq: "weekly", priority: 1.0 },
//   { url: "/#/bases-y-condiciones", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/calendario", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/historia", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/horarios-y-llegada", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/paz-martinez/695", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/perota-chingo/696", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/fabiana-cantilo/697", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/natalie-perez/698", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/mya/699", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/vetusta-morla/700", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/piano-bar/701", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/el-polaco/702", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/julieta-venegas/703", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/daniel-agostini/705", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/gladys-la-bomba-tucumana/706", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/matias-valdez/707", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/antes-que-nadie/708", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/conociendo-rusia/709", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/la-beriso/713", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/vanesa-martin/715", changefreq: "monthly", priority: 0.5 },
//   { url: "/#/khea/717", changefreq: "monthly", priority: 0.5 },
// ];

export default defineConfig({

  plugins: [
    react(),
    Sitemap({dynamicRoutes: urls, hostname: "https://ejemplo.com", changefreq: "monthly"}),
    // Pages({
    //   onRoutesGenerated: async (routes) => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    //     const data = await res.json()
    //     const dynamicRoutes = data.map(user => `/users/${user.email}`)
    //     generateSitemap({ routes: dynamicRoutes, dest: "dist", hostname: "https://ejemplo.com" })
    //   },
    // }),
    // Pages({
    //   onRoutesGenerated: async (routes) => {
    //     const newLocal = `${VITE_API_EVENTOS + 136}`;
    //     const { data } = await getData(
    //       VITE_API_INFO_GENERAL + "teatro-granrex.com.ar",
    //       VITE_EMAIL,
    //       VITE_PASS
    //     );
    //     const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
    //     const urlsEstaticas = data.pages.map((item) => `/#${item.path}`);
    //     const urlsDinamicas = info.map((item) => `/#/${item.slug}`);
    //     const urlsFinales = [...urlsEstaticas, ...urlsDinamicas];
    //     generateSitemap({
    //       routes: [urlsFinales],
    //       hostname: "ejemplo.com",
    //       dest: "dist",
    //       changefreq: "weekly",
    //     });
    //   },
    // }),
  ],
 
});
