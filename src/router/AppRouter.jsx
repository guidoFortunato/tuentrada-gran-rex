import { Navigate, Route, Routes } from "react-router-dom";
import {
  BasesCondiciones,
  BusquedaEventos,
  Calendario,
  ErrorApi,
  Historia,
  Home,
  HorariosLlegada,
} from "../pages/";
import { DetalleEvento } from "../components/detalleEvento";
import { Layout } from "../layout/";
// import { GenerateSitemap } from "../sitemap/";

export const AppRouter = () => {
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
      <Route path="error" element={<ErrorApi to="/" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
