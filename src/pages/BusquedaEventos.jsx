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
              style={{ textAlign: "center" }}
              key={item.id}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={item.img}
                  className="card-img-top card-img-bottom"
                  alt={item.name}
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn btn-sin-hover"
                    style={{
                      border: `1px solid ${item.status === "Agotado" ? "orange" : item.status === "Reprogramado" ? "blue" : item.status === "Cancelado" ? "red" : "green"}`,
                      background: `${item.status === "Agotado" ? "orange" : item.status === "Reprogramado" ? "blue" : item.status === "Cancelado" ? "red" : "green"}`,
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    {item.status}
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>{item.name.toUpperCase()}</h3>
                  <h4 style={{ padding: "5px 0" }}>
                    {item.date} <br /> {item.time}
                  </h4>
                </div>
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
