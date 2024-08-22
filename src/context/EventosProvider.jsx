import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers";
const { VITE_API_INFO_GENERAL, VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const EventosContext = createContext();

const initialStateGeneral = "";
const initialStateEventosGenerales = [];

const EventosProvider = (props) => {
  const [idVenue, setIdVenue] = useState("");
  const [idProducto, setIdProducto] = useState(null);
  const [dataInfoGeneral, setDataInfoGeneral] = useState(initialStateGeneral);
  const [eventosGenerales, setEventosGenerales] = useState( initialStateEventosGenerales );
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [eventosCalendario, setEventosCalendario] = useState(null);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);
  const [isButtonCollapsed, setIsButtonCollapsed] = useState(false);
  const host = window.location.hostname;

  const pruebaButtons = [1];

  const handleButtonsCollapse = () => {
    setIsButtonCollapsed(false);
    setIsSearchCollapsed(false);
  };

  const handleSearchCollapse = () =>
    setIsSearchCollapsed((prevState) => !prevState);
  const handleButtonCollapse = () =>
    setIsButtonCollapsed((prevState) => !prevState);


  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const info = await getData(
        VITE_API_INFO_GENERAL + "venues.tuentrada.com", //auditorio-sur.tuentrada.com - teatro-granrex.com.ar - nave-cultural.tuentrada.com - venues.tuentrada.com - host
        VITE_EMAIL,
        VITE_PASS
      );
      // console.log({ info });
      // console.log({ data });
      if (!info.status) {
        setDataInfoGeneral(null);
        return;
      }
      const { data } = info;
      // console.log({data})
      setDataInfoGeneral(data.site);
      setIdVenue(data.site.venueId);
    };
    getDataInfoGeneral();
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getDataEventosGenerales = async () => {
        const newLocal = `${VITE_API_EVENTOS + idVenue}/products/?page=${page}`;
        const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
        // console.log({dataEventosGenerales: info.data})
        // console.log({infoData:info})
        if (!info.status) {
          setEventosGenerales(null)
          setData(undefined);
          return;
        }
        // console.log({infoEventosGenerales: info})
        setData(info);
        setEventosGenerales((prevEventos) => prevEventos.concat(info.data.products));
        // setEventosGenerales(info.data);
      };
      getDataEventosGenerales();
    }
  }, [idVenue, page]);

  useEffect(() => {
    if (idVenue !== "") {
      const getDataEventosCalendario = async () => {
        const info = await getData(
          VITE_API_EVENTOS + idVenue + "/calendar",
          VITE_EMAIL,
          VITE_PASS
        );
        // console.log({info})
        if (!info.status) {
          setEventosCalendario(undefined);
          return;
        }
        // console.log({dataCalendario: data})
        setEventosCalendario(info.data);
      };
      getDataEventosCalendario();
    }
  }, [idVenue]);

  return (
    <EventosContext.Provider
      value={{
        data,
        dataInfoGeneral,
        eventosCalendario,
        eventosGenerales,
        handleButtonCollapse,
        handleButtonsCollapse,
        handleSearchCollapse,
        host,
        idProducto,
        idVenue,
        isButtonCollapsed,
        isSearchCollapsed,
        setIdProducto,
        setPage,
        pruebaButtons,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
