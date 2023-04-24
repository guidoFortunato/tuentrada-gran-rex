import { createContext, useState } from "react";
import { useFetch } from "../helpers";

export const EventosContext = createContext();

const eventosBusqueda = [];

const EventosProvider = (props) => {
  const [evento, setEvento] = useState("");
  const [listaEventosBusqueda, setListaEventosBusqueda] =
    useState(eventosBusqueda);
  // const urlTest = "/src/json/eventosTest.json";
   const { VITE_JSON_EVENTOS } = getEnvVariables()

  const handleEvento = (nombreEvento) => {
    if (!nombreEvento.trim()) {
      setEvento("");
      return;
    }
    setEvento(nombreEvento);
  };

  const { data, isLoading, hasError } = useFetch(VITE_JSON_EVENTOS);

  const agregarEvento = (nombreEvento) => {
    const resultadosExactos = data?.filter((item) =>
      item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(nombreEvento.toLowerCase())
      )
    );
    setListaEventosBusqueda(resultadosExactos);
  };

  return (
    <EventosContext.Provider
      value={{
        listaEventosBusqueda,
        agregarEvento,
        evento,
        handleEvento,
        eventosTotales: data,
        isLoading,
        hasError,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
