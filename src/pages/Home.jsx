import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { CardEvento, FormBusqueda, Spinner } from "../components/";

// import { SliderDestacado } from "../components/";

import "../css/header.css";
import "../css/footer.css";


export const Home = () => {
  const { eventosTotales, isLoading, dataNavbar, isLoadingNavbar } = useContext(EventosContext);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isLoadingNavbar) {
    return <Spinner />;
  }

  return (
    <>
      <header className="animate__animated animate__fadeIn animate__fast">
        <div className="header-home">
          <h1 className="titulo-principal animate__animated animate__fadeInDown animate__fast	 ">
            {" "}
            <strong>{ dataNavbar !== null && dataNavbar[0].items[0].titulo1.toUpperCase() }</strong>
          </h1>
          <FormBusqueda placeholder={ dataNavbar[0].placeholderInput } />
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
                {dataNavbar !== null && dataNavbar[0].items[0].titulo2.toUpperCase()}
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
            {eventosTotales?.eventos.map((evento) => (
              <CardEvento
                linkEvento={evento.links.path}
                img={evento.imagenes.evento}
                status={evento.estado}
                title={evento.nombre}
                key={evento.id}
                disabled={evento.disabled}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
