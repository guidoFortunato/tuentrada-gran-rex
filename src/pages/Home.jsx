import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
// import { getEnvVariables, useFetch } from "../helpers";
import { CardEvento, FormBusqueda, Spinner } from "../components/";
import { getEventsHome } from "../helpers";

// import { SliderDestacado } from "../components/";

import "../css/header.css";
import "../css/footer.css";

// const urlEventos = "/storage/json/eventos.json";
// const urlTestEventos = "/src/json/eventosTest.json";
// const { VITE_JSON_EVENTOS } = getEnvVariables();

export const Home = () => {
  const {
    // dataEventos,
    isLoadingEventos,
    // dataNavbar,
    isLoadingNavbar,
    idVenue,
    dataInfoGeneral
  } = useContext(EventosContext);
  const [dataEventos, setDataEventos] = useState(null);
  // const { data: dataEventos, isLoading: isLoadingEventos } = useFetch( urlTestEventos );
  // console.log(dataInfoGeneral)

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getDataEvents = async () => {
        const data = await getEventsHome(idVenue);
        // console.log(data)
        setDataEventos(data );
      };
      getDataEvents();
    }
  }, [idVenue]);

  // if (isLoadingNavbar) {
  //   return <Spinner />;
  // }
  if (isLoadingEventos) {
    return <Spinner />;
  }
  if (dataInfoGeneral.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <header className="animate__animated animate__fadeIn animate__fast">
        <div className="header-home">
          <h1 className="titulo-principal animate__animated animate__fadeInDown animate__fast	 ">
            <strong>{dataInfoGeneral?.physicalConfiguration.name.toUpperCase()}</strong>
          </h1>
          <FormBusqueda placeholder={"Buscar evento"} />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row animate__animated animate__fadeIn animate__fast	 ">
            <div className="col-12 text-center mt-3 ">
              <h2
                style={{ fontSize: "30px" }}
                className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
              >
                Próximos Eventos
              </h2>
            </div>
          </div>

          {/* <div className="row justify-content-center">
            <SliderDestacado />
          </div>
          <div className="img-slider">
            <div className="img-opacity">
              <h3>SOY UN COMUNICADO</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                aspernatur illo praesentium, dolore eos nostrum voluptatibus id
                obcaecati cum ad impedit velit eligendi voluptatem quisquam nam
                voluptate pariatur, enim deleniti.
              </p>
            </div>
          </div> */}

          <div className="row sin-padding-right-left animate__animated animate__fadeIn  animate__delay-1s ">
            {dataEventos?.map((evento) => (
              <CardEvento
                linkEvento={evento.slug + "/" + evento.id}
                img={evento.image}
                status={evento.state}
                title={evento.name}
                key={evento.id}
                disabled={evento.disabled}
                reason={evento.reason}
                disponibility={evento.disponibility}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
