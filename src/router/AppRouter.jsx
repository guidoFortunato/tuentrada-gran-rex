import { Navigate, Route, Routes } from "react-router-dom";
import { BusquedaEventos, Calendario, ComoLlegar, Historia, Home, PreguntasFrecuentes } from "../pages/";
import { DetalleEvento } from "../components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/busqueda-eventos/:name" element={<BusquedaEventos />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/como-llegar" element={<ComoLlegar />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/:name" element={<DetalleEvento />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
