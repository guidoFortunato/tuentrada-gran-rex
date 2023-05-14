import { createContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { getEnvVariables, getEvents, getInfoGeneral, useFetch } from "../helpers";

export const EventosContext = createContext();

const eventosBusqueda = [];
// const urlEventos = "/storage/json/eventos.json";
// const urlNavbar = "/storage/json/navbar.json";
// const urlFooter = "/storage/json/footer.json";
const urlTestEventos = "/src/json/eventosTest.json";
const urlTestNavbar = "/src/json/navbarTest.json";
const urlTestFooter = "/src/json/footerTest.json";
// const { VITE_JSON_EVENTOS } = getEnvVariables();
// const { VITE_JSON_FOOTER } = getEnvVariables();
// const { VITE_JSON_NAVBAR } = getEnvVariables();

const EventosProvider = (props) => {
  const [ evento, setEvento ] = useState("");
  const [ idVenue, setIdVenue ] = useState("");
  const [ listaEventosBusqueda, setListaEventosBusqueda ] =  useState( eventosBusqueda );
  const { data: dataEventos, isLoading: isLoadingEventos } = useFetch( urlTestEventos );
  const { data: dataNavbar, isLoading: isLoadingNavbar } =  useFetch( urlTestNavbar );
  const { data: dataFooter, isLoading: isLoadingFooter } =  useFetch( urlTestFooter );
  // const location = useLocation();
  // console.log(location)
  // console.log(window.location.hostname)
  useEffect(() => {
    const getDataInfoGeneral = async()=>{
      const { data } = await getInfoGeneral()//window.location.hostname
      setIdVenue(data.physicalConfiguration.id)
    }
    getDataInfoGeneral()
  }, []);

  


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
        dataEventos,
        dataFooter,
        dataNavbar,
        evento,
        handleEvento,
        idVenue,
        isLoadingEventos,
        isLoadingFooter,
        isLoadingNavbar,
        listaEventosBusqueda,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
