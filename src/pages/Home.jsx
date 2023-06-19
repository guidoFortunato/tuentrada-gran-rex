import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { HeaderEventos, HeaderNoEventos, MainEventos, MainNoEventos } from "../components";
import { getData, getEnvVariables } from "../helpers";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const Home = () => {
  const { idVenue } = useContext(EventosContext);
  const [data, setData] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [page, setPage] = useState(1);
  // console.log({data});
  // console.log({ dataInfoGeneral });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const newLocal = `${VITE_API_EVENTOS + idVenue}?page=${page}`;
        const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
        // console.log(info);
        // console.log(info.data);
        setData(info);
        setEventos((prevEventos) => prevEventos.concat(info.data));
      };
      getInfo();
    }
  }, [idVenue, page]);

  if (data === null) return <span></span>;

  if (eventos === undefined || eventos.length === 0) {
    return (
      <>
        <HeaderNoEventos />
        <MainNoEventos />
      </>
    );
  }

  return (
    <>
      <HeaderEventos />
      <MainEventos eventos={eventos} data={data} setPage={setPage} />
    </>
  );
};
