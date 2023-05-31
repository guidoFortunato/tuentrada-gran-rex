import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { Navigate, useLocation, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { CardEvento, FormBusqueda, Spinner } from "../components";
import { getData, getEnvVariables } from "../helpers";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const BusquedaEventos = () => {
  const [data, setData] = useState(null);
  const { idVenue } = useContext(EventosContext);
  const { search }  = useLocation();
  const query = search.split('=')[1] 
  // console.log(query)

  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const {data} = await getData(VITE_API_EVENTOS + idVenue + "/search/" + query, VITE_EMAIL, VITE_PASS );
        // console.log({data})
        setData(data);
      };
      getInfo();
    }
  }, [idVenue, query]);


  if (data === null) return <Spinner />;
  
  if (data === undefined) return <Navigate to="/" />;


  return (
    <>
      <div className="container animate__animated animate__fadeIn animate__fast">
        <div className="row justify-content-center my-5 form">
          <FormBusqueda />
        </div>
        <div className="row justify-content-center py-5">
          <h2 className="text-center">
            Resultados de tu búsqueda <strong>"{query.split('%20').join(' ')}"</strong>
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
                data={item}
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
