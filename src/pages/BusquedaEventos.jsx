import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { FormBusqueda } from "../components";

export const BusquedaEventos = () => {
  const { listaEventosBusqueda, agregarEvento } = useContext(EventosContext);
  // const navigate = useNavigate()
  // navigate()
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
          <h2 className="text-center">Resultados de tu búsqueda <strong>"{name}"</strong></h2>
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
            <div style={{fontSize:"14px", padding:"3px 20px"}} className="btn btn-primary"> 
              Inicio
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
