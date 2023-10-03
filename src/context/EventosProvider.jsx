import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers";
// import { sitemap } from "../../scripts/sitemap";
// import { generateSitemap2 } from "../../scripts/generateSitemap2";
const { VITE_API_INFO_GENERAL, VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const EventosContext = createContext();

const initialStateGeneral = "";
const initialStateEventosGenerales = [];
// const initialStateEventosCalendario = [];

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
  const host = window.location.hostname;


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
  // console.log({idVenue})

  console.log({dataInfoGeneral})

  

  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const info = await getData(
        VITE_API_INFO_GENERAL + 'venues.tuentrada.com', //auditorio-sur.tuentrada.com - teatro-granrex.com.ar - nave-cultural.tuentrada.com
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

      setDataInfoGeneral(data.products.data);
      setIdVenue(data.products.data.venueId);
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
          setDataInfoGeneral(null);
          return;
        }
        setData(info);
        setEventosGenerales((prevEventos) =>  prevEventos.concat(info.data));
        // setEventosGenerales(info.data);
      };
      getDataEventosGenerales();
    }
  }, [idVenue, page]);

  useEffect(() => {
    if (idVenue !== "") {
      const getDataEventosCalendario = async () => {
        const { data } = await getData(
          VITE_API_EVENTOS + idVenue + "/calendar",
          VITE_EMAIL,
          VITE_PASS
        );
        // console.log({dataCalendario: data})
        setEventosCalendario(data);
      };
      getDataEventosCalendario();
    }
  }, [idVenue]);

  // useEffect(() => {
  //   if (dataInfoGeneral !== null) {
  //     if (dataInfoGeneral.length !== 0) {
  //       document.querySelector("body").style.fontFamily = "Roboto";
  //     }
  //   }
  // }, [dataInfoGeneral]);

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
        host,
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
