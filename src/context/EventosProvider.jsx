import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers";
const { VITE_API_INFO_GENERAL, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const EventosContext = createContext();

const initialStateGeneral = [];
// const initialStateEventosGenerales = [];
// const initialStateEventosCalendario = [];

const EventosProvider = (props) => {
  const [idVenue, setIdVenue] = useState("");
  const [idProducto, setIdProducto] = useState(null);
  const [dataInfoGeneral, setDataInfoGeneral] = useState(initialStateGeneral);
  // const [eventosGenerales, setEventosGenerales] = useState(initialStateEventosGenerales);
  // const [eventosCalendario, setEventosCalendario] = useState(initialStateEventosCalendario);

  // const handleIdProducto = (id) => {
  //   setIdProducto(idProducto)
  // }

  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const {data} = await getData(VITE_API_INFO_GENERAL + "teatro-granrex", VITE_EMAIL, VITE_PASS); //window.location.hostname
      // console.log({data})
      setDataInfoGeneral(data);
      setIdVenue(data.venueId);
    };
    getDataInfoGeneral();
  }, []);

  // useEffect(() => {
  //   if (idVenue !== "") {
  //     const getDataEventosGenerales = async () => {
  //       const {data} = await getData( VITE_API_EVENTOS + idVenue, VITE_EMAIL, VITE_PASS);
  //       // console.log({info})
  //       setEventosGenerales(data);
  //     };
  //     getDataEventosGenerales();
  //   }
  // }, [idVenue]);

  // useEffect(() => {
  //   if (idVenue !== "") {
  //     const getDataEventosCalendario = async () => {
  //       const {data} = await getData( VITE_API_INFO_GENERAL + idVenue + "/calendar", VITE_EMAIL, VITE_PASS);
  //       setEventosCalendario(data);
  //     };
  //     getDataEventosCalendario();
  //   }
  // }, [idVenue]);

  return (
    <EventosContext.Provider
      value={{
        dataInfoGeneral,
        // handleIdProducto,
        idProducto,
        idVenue,
        setIdProducto,
        // eventosGenerales,
        // eventosCalendario,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
