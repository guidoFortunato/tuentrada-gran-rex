import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { HeaderNoEventos, HeaderEventos } from "../components/header/";
import { MainNoEventos, MainEventos } from "../components/main/";

export const Home = () => {
  const {
    eventosGenerales,
    // setPage,
    data,
    handleButtonsCollapse: handleNavBarCollapse,
  } = useContext(EventosContext);
  // console.log({data});
  // console.log({ dataInfoGeneral });

  useEffect(() => {
    handleNavBarCollapse();
  }, []);

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

  if (data === null) return <span></span>;

  if (
    eventosGenerales === undefined ||
    eventosGenerales.length === 0 ||
    data?.data?.length === 0
  ) {
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
      <MainEventos />
    </>
  );
};
