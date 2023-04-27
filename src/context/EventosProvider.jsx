import { createContext, useState } from "react";
import { getEnvVariables, useFetch } from "../helpers";

export const EventosContext = createContext();

const eventosBusqueda = [];
const urlTestEventos = "/src/json/eventosTest.json";
const urlTestNavbar = "/src/json/navbarTest.json";
const urlTestFooter = "/src/json/footerTest.json";
const { VITE_JSON_EVENTOS } = getEnvVariables();
const { VITE_JSON_FOOTER } = getEnvVariables();
const { VITE_JSON_NAVBAR } = getEnvVariables();

const EventosProvider = (props) => {
  const [evento, setEvento] = useState("");
  const [listaEventosBusqueda, setListaEventosBusqueda] =  useState(eventosBusqueda);
  const { data: dataEventos, isLoading, hasError } = useFetch(urlTestEventos);
  const { data: dataNavbar, isLoading: isLoadingNavbar } =  useFetch(urlTestNavbar);
  const { data: dataFooter, isLoading: isLoadingFooter } =  useFetch(urlTestFooter);

  const handleEvento = (nombreEvento) => {
    if (!nombreEvento.trim()) {
      setEvento("");
      return;
    }
    setEvento(nombreEvento);
  };

  const agregarEvento = (nombreEvento) => {

    const resultadosExactos = dataEventos?.eventos.filter((item) =>
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
        dataFooter,
        evento,
        eventosTotales: dataEventos,
        handleEvento,
        hasError,
        isLoading,
        isLoadingNavbar,
        isLoadingFooter,
        listaEventosBusqueda,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
