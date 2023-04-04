import { Route, Routes } from "react-router-dom";
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

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/busqueda-eventos/:name" element={<BusquedaEventos />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/como-llegar" element={<ComoLlegar />} />
      <Route path="/historia" element={<Historia />} />
      <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      <Route
        path="/shows/bxs/15"
        element={
          <DetalleEvento
            title={"BXS"}
            description={`Grupo Bryndis se presentará el día Domingo 27 de Agosto en el Teatro Gran Rex. <br />
            El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br />
            El ingreso al establecimiento implica la autorización a la Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el contenido filmado y /o fotografiado y el uso de imagen personal sin compensación alguna.
            `}
            href={"https://www.ticketek.com.ar/bryndis/teatro-gran-rex"}
          />
        }
      />
      <Route path="/ubicaciones" element={<Ubicaciones />} />
    </Routes>
  );
};
