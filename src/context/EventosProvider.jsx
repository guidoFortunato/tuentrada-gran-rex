import { createContext, useEffect, useState } from "react";
import { getData, getEnvVariables } from "../helpers";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleButtonsCollapse = () => {
    setIsButtonCollapsed(false);
    setIsSearchCollapsed(false);
  };

  const handleSearchCollapse = () => setIsSearchCollapsed((prevState) => !prevState);
  const handleButtonCollapse = () => setIsButtonCollapsed((prevState) => !prevState);

    // const urls = sitemap()
    // console.log({urls})

    // const sitemap = generateSitemap2()
    // console.log({sitemap})
    // console.log({idVenue})
  

  useEffect(() => {
    const getDataInfoGeneral = async () => {
      const {data}  = await getData(
        VITE_API_INFO_GENERAL + "venues.tuentrada.com",
        VITE_EMAIL,
        VITE_PASS
      ); //window.location.hostname
      // console.log({data})
      if (data.error) {
        setDataInfoGeneral(null);
        return
      }
      if (Array.isArray(data)) {
        if (data.length === 0) {
          setDataInfoGeneral(null);
          return
        }
      }
      // console.log({dataInfoGeneral: data.products.data} );
      // console.log({hostname: window.location.hostname} )
      // console.log({ pages: data.pages });
      setDataInfoGeneral(data.products.data);
      setIdVenue(data.products.data.venueId);
    };
    getDataInfoGeneral();
  }, []);


  useEffect(() => {
    if (idVenue !== "") {
      // console.log({idVenue})
      const getDataEventosGenerales = async () => {
        const newLocal = `${VITE_API_EVENTOS + idVenue}/productss/?page=${page}`;
        const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
        // console.log({dataEventosGenerales: info.data})
        // console.log({infoData:info})
        if (info.message === "Page Not Found.") {
          setDataInfoGeneral(null);
          return
        }
        setData(info);
        setEventosGenerales((prevEventos) => prevEventos.concat(info.data));
        // setEventosGenerales(info.data.products);
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
