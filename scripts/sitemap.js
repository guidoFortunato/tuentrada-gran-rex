import { useEffect, useState } from "react";
import { getData, getEnvVariables } from "../src/helpers";
const { VITE_API_INFO_GENERAL, VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } =
  getEnvVariables();

export const sitemap = () => {
  const [eventos, setEventos] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const getDataEventos = async () => {
      const newLocal = `${VITE_API_EVENTOS + 136}`;
      const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
      setEventos(info.data);
    };
    getDataEventos();
  }, []);

  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const { data } = await getData(
        VITE_API_INFO_GENERAL + "teatro-granrex.com.ar",
        VITE_EMAIL,
        VITE_PASS
      );
      setPages(data.pages);
    };
    getDataInfoGeneral();
  }, []);
  // useEffect(() => {
  //   const getDataInfoGeneral = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  //     const data = await res.json()
  //     const dynamicRoutes = data.map(user => `/users/${user.email}`)
  //     console.log({dynamicRoutes})
  //   };
  //   getDataInfoGeneral();
  // }, []);

  const urlsEstaticas = pages.map((item) => ({

    hostname: "https://ejemplo.com",
    url: `/#${item.path}`,
    changefreq: item.path === "/" ? "weekly" : "monthly",
    priority: item.path === "/" ? 1.0 : 0.8,
  }));

  const urls2 = eventos.map((item) => ({
    hostname: "https://ejemplo.com",
    url: `/#${item.slug}`,
    changefreq: item.path === "/" ? "weekly" : "monthly",
    priority: item.path === "/" ? 1.0 : 0.8,
  }));

  const urlsFinales = [...urlsEstaticas, ...urls2];
  return urlsFinales;
};
