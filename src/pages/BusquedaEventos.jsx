import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { CardEvento, FormBusqueda } from "../components";

export const BusquedaEventos = () => {
  const { listaEventosBusqueda, agregarEvento } = useContext(EventosContext);
  let { name } = useParams();
  

  useEffect(() => {
    agregarEvento(name);
  }, [name]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5">
          <FormBusqueda />
        </div>
        <div className="row justify-content-center py-5">
          <h2 className="text-center">
            Resultados de tu búsqueda <strong>"{name}"</strong>
          </h2>
        </div>
        <div className="row justify-content-center">
          {listaEventosBusqueda.length > 0 ? (
            listaEventosBusqueda.map(({id, linkEvento, img, status, name, date, time}) => (
              <CardEvento
                key={id}
                linkEvento={linkEvento}
                img={img}
                status={status}
                title={name}
                date={date}
                time={time}
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
              className="btn btn-primary"
            >
              Inicio
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
