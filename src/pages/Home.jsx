import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { HeaderNoEventos, HeaderEventos } from "../components/header/";
import { MainNoEventos, MainEventos } from "../components/main/";

export const Home = () => {
  const {
    eventosGenerales,
    data,
    handleButtonsCollapse: handleNavBarCollapse,
  } = useContext(EventosContext);

  // console.log({eventosGenerales})

  useEffect(() => {
    handleNavBarCollapse();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (data === null) return <span></span>;
  if ( eventosGenerales === null  ) {
    return (
      <>
        <HeaderEventos />
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
