import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Beneficios,
  BusquedaEventos,
  Calendario,
  ComoLlegar,
  Historia,
  Home,
  PreguntasFrecuentes,
  Ubicaciones,
} from "../pages/";
import { DetalleEvento } from "../components";
import { EventosContext } from "../context/EventosProvider";

export const AppRouter = () => {
  const { eventosTotales } = useContext(EventosContext);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/busqueda-eventos/:name" element={<BusquedaEventos />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/como-llegar" element={<ComoLlegar />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route path="/shows/:name/:id" element={<DetalleEvento />} />
      <Route path="/ubicaciones" element={<Ubicaciones />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
