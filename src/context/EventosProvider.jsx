import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers";
// import { sitemap } from "../../scripts/sitemap";
// import { generateSitemap2 } from "../../scripts/generateSitemap2";
const { VITE_API_INFO_GENERAL, VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const EventosContext = createContext();

const initialStateGeneral = [];
const initialStateEventosGenerales = [];
const initialStateEventosCalendario = [];

const EventosProvider = (props) => {
  const [idVenue, setIdVenue] = useState("");
  const [idProducto, setIdProducto] = useState(null);
  const [dataInfoGeneral, setDataInfoGeneral] = useState(initialStateGeneral);
  const [eventosGenerales, setEventosGenerales] = useState(initialStateEventosGenerales);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [eventosCalendario, setEventosCalendario] = useState(null);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);
  const [isButtonCollapsed, setIsButtonCollapsed] = useState(false);

  const handleButtonsCollapse = () => {
    setIsButtonCollapsed(false);
    setIsSearchCollapsed(false);
  };

  const handleSearchCollapse = () =>
    setIsSearchCollapsed((prevState) => !prevState);
  const handleButtonCollapse = () =>
    setIsButtonCollapsed((prevState) => !prevState);

    // const urls = sitemap()
    // console.log({urls})

    // const sitemap = generateSitemap2()
    // console.log({sitemap})
  

  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const { data } = await getData(
        VITE_API_INFO_GENERAL + "teatro-granrex.com.ar",
        VITE_EMAIL,
        VITE_PASS
      ); //window.location.hostname
      // console.log({ dataInfoGeneral: data });
      // console.log({ pages: data.pages });
      setDataInfoGeneral(data);
      setIdVenue(data.venueId);
    };
    getDataInfoGeneral();
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      // console.log({idVenue})
      const getDataEventosGenerales = async () => {
        const newLocal = `${VITE_API_EVENTOS + idVenue}?page=${page}`;
        const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
        // console.log({dataEventosGenerales: info.data})
        // console.log(info.data)
        setData(info);
        setEventosGenerales((prevEventos) => prevEventos.concat(info.data));
      };
      getDataEventosGenerales();
    }
  }, [idVenue, page]);

  useEffect(() => {
    if (idVenue !== "") {
      const getDataEventosCalendario = async () => {
        const { data } = await getData(
          VITE_API_INFO_GENERAL + idVenue + "/calendar",
          VITE_EMAIL,
          VITE_PASS
        );
        setEventosCalendario(data);
      };
      getDataEventosCalendario();
    }
  }, [idVenue]);

  return (
    <EventosContext.Provider
      value={{
        // handleIdProducto,
        data,
        dataInfoGeneral,
        eventosCalendario,
        eventosGenerales,
        handleButtonCollapse,
        handleButtonsCollapse,
        handleSearchCollapse,
        idProducto,
        idVenue,
        isButtonCollapsed,
        isSearchCollapsed,
        setIdProducto,
        setPage,
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
