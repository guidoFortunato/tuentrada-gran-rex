import { Route, Routes } from "react-router-dom";
import { Beneficios, BusquedaEventos, ComoLlegar, Historia, Home, Ubicaciones } from "../pages/";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/ubicaciones" element={<Ubicaciones />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/como-llegar" element={<ComoLlegar />} />
      {/* <Route path="/busqueda-eventos" element={<BusquedaEventos /> } /> */}
      <Route path="/busqueda-eventos/:name" element={<BusquedaEventos /> } />
    </Routes>
  );
};
