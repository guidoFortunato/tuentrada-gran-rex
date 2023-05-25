import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { CardEvento, FormBusqueda, Spinner } from "../components";
import { getSearchEvents } from "../helpers";

export const BusquedaEventos = () => {
  const { listaEventosBusqueda, agregarEvento, idVenue } = useContext(EventosContext);

  let { name } = useParams();
  

  useEffect(() => {
    agregarEvento(name);
  }, [name]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getDataSearch = async () => {
        const data = await getSearchEvents(idVenue, name);
        console.log({ data });
      };
      getDataSearch();
    }
  }, [idVenue, name]);

  // if (isLoadingNavbar) {
  //   return <Spinner />;
  // }

  return (
    <>
      <div className="container animate__animated animate__fadeIn animate__fast">
        <div className="row justify-content-center my-5 form">
          <FormBusqueda placeholder={"Buscar evento"} />
        </div>
        <div className="row justify-content-center py-5">
          <h2 className="text-center">
          Resultados de tu búsqueda <strong>"{name}"</strong>
          </h2>
        </div>
        <div className="row justify-content-center">
          {listaEventosBusqueda?.length > 0 ? (
            listaEventosBusqueda?.map((evento) => (
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
            ))
          ) : (
            <div
              className="d-flex justify-content-center alert alert-danger my-5 w-50"
              role="alert"
            >
              No existen eventos para tu búsqueda
            </div>
          )}
        </div>
        <div className="row">
          <Link to="/" className="text-center">
            <div
              style={{ fontSize: "14px", padding: "3px 20px" }}
              className="btn-general"
            >
              Home
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
