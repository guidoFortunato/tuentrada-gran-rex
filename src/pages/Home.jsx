import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { getData, getEnvVariables } from "../helpers";
import { EventosDisponibles, EventosNoDisponibles, FormBusqueda, Spinner } from "../components/";

// import { SliderDestacado } from "../components/";

import "../css/header.css";
import "../css/footer.css";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const Home = () => {
  const { idVenue, dataInfoGeneral } = useContext(EventosContext);
  const [data, setData] = useState(null);
  // console.log({data});
  // console.log({dataInfoGeneral})

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const {data} = await getData( VITE_API_EVENTOS + idVenue, VITE_EMAIL, VITE_PASS);
        console.log(data)
        setData(data);
      };
      getInfo();
    }
  }, [idVenue]);

  if (data === null) return <Spinner />;

  if (dataInfoGeneral.length === 0) return <Spinner />;

  if (data === undefined || data.length === 0) {
    return (
      <>
        <header className="animate__animated animate__fadeIn animate__fast">
          <div className="header-home">
            <h1 className="titulo-principal animate__animated animate__fadeInDown animate__fast	 ">
              <strong>{dataInfoGeneral.physicalConfiguration.name}</strong>
            </h1>
            <FormBusqueda />
          </div>
        </header>
        <EventosNoDisponibles />
      </>
    );
  }

  return (
    <>
      <header className="animate__animated animate__fadeIn animate__fast">
        <div className="header-home">
          <h1 className="titulo-principal animate__animated animate__fadeInDown animate__fast	 ">
            <strong>{dataInfoGeneral.physicalConfiguration.name}</strong>
          </h1>
          <FormBusqueda />
        </div>
      </header>
      <EventosDisponibles data={data} />
    </>
  );
};
