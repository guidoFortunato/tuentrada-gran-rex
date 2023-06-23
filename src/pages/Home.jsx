import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { HeaderEventos, HeaderNoEventos, LoadingVacio, MainEventos, MainNoEventos } from "../components";

export const Home = () => {
  const { eventosGenerales, setPage, data } = useContext(EventosContext);
  // console.log({data});
  // console.log({ dataInfoGeneral });

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  // useEffect(() => {
    
  //     const getInfo = async () => {
  //       const newLocal = `${VITE_API_EVENTOS + 136}?page=${page}`;
  //       const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
  //       // console.log(info);
  //       // console.log(info.data);
  //       console.log('ejecuta uef')
  //       setData(info);
  //       setEventos((prevEventos) => prevEventos.concat(info.data));
  //     };
  //     getInfo();
    
  // }, [page]);

  if (data === null) return <LoadingVacio />;
  // if (eventosGenerales.length === 0) return <Spinner />;

  if (eventosGenerales === undefined || eventosGenerales.length === 0 || data.data.length === 0) {
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
      <MainEventos eventos={eventosGenerales} data={data} setPage={setPage} />
    </>
  );
};
