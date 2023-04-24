import { createContext, useState } from "react";
import { getEnvVariables, useFetch } from "../helpers";

export const EventosContext = createContext();

const eventosBusqueda = [];
const urlTestEventos = "/src/json/eventosTest.json";
const urlTestNavbar = "/src/json/navbarTest.json";

const EventosProvider = (props) => {
  const [evento, setEvento] = useState("");
  const [listaEventosBusqueda, setListaEventosBusqueda] = useState(eventosBusqueda);
  
  //  const { VITE_JSON_EVENTOS } = getEnvVariables()

  const handleEvento = (nombreEvento) => {
    if (!nombreEvento.trim()) {
      setEvento("");
      return;
    }
    setEvento(nombreEvento);
  };

  const { data, isLoading, hasError } = useFetch(urlTestEventos);
  const { data: dataNavbar } = useFetch(urlTestNavbar);
  

  const agregarEvento = (nombreEvento) => {
    const resultadosExactos = data.eventos.filter((item) =>
      item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(nombreEvento.toLowerCase())
      )
    );
    setListaEventosBusqueda(resultadosExactos);
  };

  return (
    <EventosContext.Provider
      value={{
        agregarEvento,
        dataNavbar,
        evento,
        eventosTotales: data,
        handleEvento,
        hasError,
        isLoading,
        listaEventosBusqueda,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
