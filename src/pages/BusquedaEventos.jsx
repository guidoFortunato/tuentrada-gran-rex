import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { CardEvento, FormBusqueda, Spinner } from "../components";
import { getEnvVariables, useFetchNew } from "../helpers";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const BusquedaEventos = () => {
  const { idVenue } = useContext(EventosContext);
  let { name } = useParams();
  const { data, isLoading } = useFetchNew( VITE_API_EVENTOS + idVenue + "/search/" + name, VITE_EMAIL, VITE_PASS );
  // console.log({data, isLoading})

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (data === null || data === undefined) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container animate__animated animate__fadeIn animate__fast">
        <div className="row justify-content-center my-5 form">
          <FormBusqueda />
        </div>
        <div className="row justify-content-center py-5">
          <h2 className="text-center">
            Resultados de tu búsqueda <strong>"{name}"</strong>
          </h2>
        </div>
        <div className="row justify-content-center">
          {data.length > 0 ? (
            data.map((item) => (
              <CardEvento
                linkEvento={'/' + item.slug + "/" + item.id}
                img={item.image}
                status={item.state}
                title={item.name}
                key={item.id}
                disabled={item.disabled}
                reason={item.reason}
                disponibility={item.disponibility}
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
