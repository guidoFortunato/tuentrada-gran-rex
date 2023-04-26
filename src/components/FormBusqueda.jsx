import { useContext } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "./";

export const FormBusqueda = ({placeholder}) => {

  const { evento, handleEvento, agregarEvento, dataNavbar, isLoadingNavbar } = useContext(EventosContext);
  let navigate = useNavigate();
  const { pathname } = useLocation();

  localStorage.setItem("lastPath", pathname);

  const handleSubmit = (e) => {  

    e.preventDefault();
    if (evento.length === 0) return;
    agregarEvento(evento);
    navigate(`/busqueda-eventos/${evento}`);
    handleEvento("");
  };

  if (isLoadingNavbar) {
    return <Spinner />;
  }

  return (
    <form className="d-flex form-buscar animate__animated animate__fadeIn animate__delay-1s" onSubmit={handleSubmit}>
      <div>
        <svg
          xmlns={dataNavbar?.formBusqueda.xmlns}
          width={dataNavbar?.formBusqueda.width}
          height={dataNavbar?.formBusqueda.height}
          fill={dataNavbar?.formBusqueda.fill}
          className="bi bi-search"
          viewBox={dataNavbar?.formBusqueda.viewBox}
        >
          <path d={dataNavbar?.formBusqueda.path} />
        </svg>
      </div>
      <div className="container-input">
        <input
          style={dataNavbar?.inputBusqueda.style}
          className="border-0 input"
          placeholder={placeholder}
          value={evento}
          onChange={(e) => handleEvento(e.target.value)}
        />
      </div>
      {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
    </form>
  );
};
