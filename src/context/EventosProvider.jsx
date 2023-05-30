import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers";
const { VITE_API_INFO_GENERAL, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const EventosContext = createContext();

const eventosGeneral = [];

const EventosProvider = (props) => {
  const [idVenue, setIdVenue] = useState("");
  const [idProducto, setIdProducto] = useState(null);
  const [dataInfoGeneral, setDataInfoGeneral] = useState(eventosGeneral);

  // const handleIdProducto = (id) => {
  //   setIdProducto(idProducto)
  // }

  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const data = await getData(VITE_API_INFO_GENERAL + "Ituzaingo", VITE_EMAIL, VITE_PASS); //window.location.hostname
      setDataInfoGeneral(data);
      setIdVenue(data.physicalConfiguration.id);
    };
    getDataInfoGeneral();
  }, []);

  return (
    <EventosContext.Provider
      value={{
        dataInfoGeneral,
        // handleIdProducto,
        idProducto,
        idVenue,
        setIdProducto
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
