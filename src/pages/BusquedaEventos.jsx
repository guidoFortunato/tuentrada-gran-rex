import { useContext } from "react";
import { EventosContext } from "../context/EventosProvider";

import { Link } from "react-router-dom";
import { FormBusqueda } from "../components";

export const BusquedaEventos = () => {
  const { listaEventosBusqueda } = useContext(EventosContext);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center my-5">
          <FormBusqueda />
        </div>
        <div className="row justify-content-center">
          {listaEventosBusqueda.length > 0 ? (
            listaEventosBusqueda.map((item) => (
              <article
                className="col-12 col-md-6 col-lg-4 col-xl-3"
                key={item.id}
              >
                <div className="card size-destacado">
                  <img
                    src={item.img}
                    className="card-img-top card-img-bottom"
                    alt={item.name}
                  />
                </div>
              </article>
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
            <div className="btn btn-primary w-50 btn-lg fw-bold my-5">
              VOLVER
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
