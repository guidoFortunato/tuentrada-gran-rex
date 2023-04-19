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

      {eventosTotales.map((item) => (
        <Route
          path={`/shows/:${item.path}/${item.id}`}
          key={item.id}
          element={
            <DetalleEvento
              title={item.nombre}
              img={item.imagenes.evento}
              description={item.descripcion}
              href={item.links.href}
              imgPlano={item.imagenes.plano}
              ubicaciones={item.ubicaciones}
            />
          }
        />
      ))}

      <Route path="/ubicaciones" element={<Ubicaciones />} />
      {/* <Route path="/*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};
