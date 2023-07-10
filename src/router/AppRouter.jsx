import { Navigate, Route, Routes } from "react-router-dom";
import { BasesCondiciones, BusquedaEventos, Calendario, HorariosLlegada, Historia, Home } from "../pages/";
import { DetalleEvento } from "../components/detalleEvento";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name/:id" element={<DetalleEvento />} />
      <Route path="/bases-y-condiciones" element={<BasesCondiciones />} />
      <Route path="/busqueda-eventos/:name" element={<BusquedaEventos />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/horarios-y-llegada" element={<HorariosLlegada />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
