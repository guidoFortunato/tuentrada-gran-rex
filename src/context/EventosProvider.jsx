import { createContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { getEnvVariables, getInfoGeneralLocalStorage, useFetch } from "../helpers";
import { getInfoGeneral } from "../helpers";

export const EventosContext = createContext();

const eventosGeneral = [];

const EventosProvider = (props) => {
  const [idVenue, setIdVenue] = useState("");
  const [dataInfoGeneral, setDataInfoGeneral] = useState(eventosGeneral);
  // console.log({dataInfoGeneral})

  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const data = await getInfoGeneral("Ituzaingo"); //window.location.hostname
      setDataInfoGeneral(data);
      setIdVenue(data.physicalConfiguration.id);
    };
    getDataInfoGeneral();
  }, []);

  return (
    <EventosContext.Provider
      value={{
        dataInfoGeneral,
        idVenue,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
