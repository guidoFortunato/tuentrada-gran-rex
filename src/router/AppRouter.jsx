import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  BasesCondiciones,
  BusquedaEventos,
  Calendario,
  // ErrorApi,
  Historia,
  Home,
  HorariosLlegada,
} from "../pages/";
import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
import { DetalleEvento } from "../components/detalleEvento";
import { Layout } from "../layout/";
import { EventosContext } from "../context/EventosProvider";
import { getEnvVariables } from "../helpers";
// import { GenerateSitemap } from "../sitemap/";

const { VITE_GA } = getEnvVariables();

export const AppRouter = () => {
  const { dataInfoGeneral } = useContext(EventosContext);

  useEffect(() => {
    if (dataInfoGeneral.length !== 0) {
      TagManager.initialize({ gtmId: dataInfoGeneral.tagManager });
    }
  }, [dataInfoGeneral]);

  useEffect(() => {
    ReactGA.initialize(VITE_GA);
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname,
      title: "Home Page",
    });
  }, []);

  return (
    <Routes>
      {/* Rutas con el layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":name" element={<DetalleEvento />} />
        <Route path="bases-condiciones" element={<BasesCondiciones />} />
        <Route path="busqueda-eventos/:name" element={<BusquedaEventos />} />
        <Route path="calendario" element={<Calendario />} />
        <Route path="historia" element={<Historia />} />
        <Route path="horarios-llegada" element={<HorariosLlegada />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      {/* Ruta sin el layout */}
      {/* <Route path="sitemap" element={<GenerateSitemap />} /> */}
      {/* <Route path="error" element={<ErrorApi />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
