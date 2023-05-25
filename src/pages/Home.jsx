import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { getEnvVariables, useFetchNew } from "../helpers";
import { EventosDisponibles, EventosNoDisponibles, Spinner } from "../components/";

// import { SliderDestacado } from "../components/";

import "../css/header.css";
import "../css/footer.css";

// const urlTestEventos = "/src/json/eventosTest.json";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const Home = () => {
  const { idVenue, dataInfoGeneral } = useContext(EventosContext);
  const { data, isLoading } = useFetchNew( VITE_API_EVENTOS + idVenue, VITE_EMAIL, VITE_PASS);


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);  

  // useEffect(() => {
  //   if (idVenue !== "") {
  //     const getDataEvents = async () => {
  //       const data = await getEventsHome(idVenue);
  //       setDataEventos(data );
  //     };
  //     getDataEvents();
  //   }
  // }, [idVenue]);

  if (isLoading) {
    return <Spinner />;
  }
  if (!isLoading && (data === null || data === undefined )) {
    return <EventosNoDisponibles  title={dataInfoGeneral?.physicalConfiguration?.name?.toUpperCase()} />
  }
  if (dataInfoGeneral.length === 0) {
    return <Spinner />;
  }

  return <EventosDisponibles data={data} title={dataInfoGeneral?.physicalConfiguration.name.toUpperCase()} />
};
