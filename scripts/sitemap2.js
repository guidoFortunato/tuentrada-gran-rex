import { useEffect, useState } from "react";
import { getData } from "../src/helpers";

export const sitemap2 = () => {
  const [eventos, setEventos] = useState([]);
  const [pages, setPages] = useState([]);
  
  useEffect(() => {
    const getDataEventos = async () => {
      const newLocal = `${VITE_API_EVENTOS + idVenue}`;
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

  // Genera dinámicamente las URLs del sitemap
  // Puedes obtener los datos de tu base de datos u otra fuente de datos
  // const urls = [
  //   { url: "/", changefreq: "weekly", priority: 1.0 },
  //   { url: "/#/historia", changefreq: "monthly", priority: 0.5 },
  //   { url: "/#/horarios-y-llegada", changefreq: "monthly", priority: 0.5 },
  //   { url: "/#/calendario", changefreq: "monthly", priority: 0.5 },
  //   { url: "/#/bases-y-condiciones", changefreq: "monthly", priority: 0.5 },
  // ];

  const urlsEstaticas = pages.map((item) => ({
    url: `/#${item.path}`,
    changefreq: "monthly",
    priority: 0.5,
  }));

  const urls2 = eventos.map((item) => ({
    url: `/#/${item.slug}`,
    changefreq: "weekly",
    priority: 0.8,
  }));

  const urlsFinales = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    ...urlsEstaticas,
    ...urls,
  ];
  return {};
};
