import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { CardEvento, FormBusqueda, Spinner } from "../components";

export const BusquedaEventos = () => {
  const { listaEventosBusqueda, agregarEvento, dataNavbar, isLoadingNavbar } = useContext(EventosContext);

  let { name } = useParams();

  useEffect(() => {
    agregarEvento(name);
  }, [name]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoadingNavbar) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container animate__animated animate__fadeIn animate__fast">
        <div className="row justify-content-center my-5">
          <FormBusqueda placeholder={dataNavbar?.placeholderInput} />
        </div>
        <div className="row justify-content-center py-5">
          <h2 className="text-center">
            {dataNavbar?.resultadoBusqueda} <strong>"{name}"</strong>
          </h2>
        </div>
        <div className="row justify-content-center">
          {listaEventosBusqueda?.length > 0 ? (
            listaEventosBusqueda?.map((evento) => (
              <CardEvento
                linkEvento={evento.links.path}
                img={evento.imagenes.evento}
                status={evento.estado}
                title={evento.nombre}
                key={evento.id}
                disabled={evento.disabled}
              />
            ))
          ) : (
            <div
              className="d-flex justify-content-center alert alert-danger my-5 w-50"
              role="alert"
            >
              {dataNavbar?.noHayEventos}
            </div>
          )}
        </div>
        <div className="row">
          <Link to="/" className="text-center">
            <div
              style={{ fontSize: "14px", padding: "3px 20px" }}
              className="btn-general"
            >
              {dataNavbar?.botonHomeBusqueda}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
