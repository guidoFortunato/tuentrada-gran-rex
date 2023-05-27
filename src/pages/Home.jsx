import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { getEnvVariables, useFetchNew } from "../helpers";
import {
  EventosDisponibles,
  EventosNoDisponibles,
  Spinner,
} from "../components/";

// import { SliderDestacado } from "../components/";

import "../css/header.css";
import "../css/footer.css";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const Home = () => {
  const { idVenue, dataInfoGeneral } = useContext(EventosContext);
  const { data, isLoading } = useFetchNew( VITE_API_EVENTOS + idVenue, VITE_EMAIL, VITE_PASS );
  // console.log({data, isLoading});

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoading) return <Spinner />;

  if (data === null || data === undefined) {
    return (
      <EventosNoDisponibles
        title={dataInfoGeneral?.physicalConfiguration?.name?.toUpperCase()}
      />
    );
  }
  if (dataInfoGeneral.length === 0) return <Spinner />;
  

  return (
    <EventosDisponibles
      data={data}
      title={dataInfoGeneral?.physicalConfiguration.name.toUpperCase()}
    />
  );
};
