import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Spinner } from "./";

export const FormBusqueda = ({ placeholder = "Buscar Evento" }) => {
  const { evento, handleEvento, agregarEvento, dataNavbar, isLoadingNavbar } = useContext( EventosContext );
  let { name } = useParams();
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const busquedaEventos = pathname.split("/")[1] || "/";

  localStorage.setItem("lastPath", pathname);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (evento.length === 0) return;
    // agregarEvento(evento);
    navigate(`/busqueda-eventos/${evento}`);
    handleEvento("");
  };

  useEffect(() => {
    if (busquedaEventos == "busqueda-eventos") {
      agregarEvento(name);
    }
  }, [name]);

  if (isLoadingNavbar) {
    return <Spinner />;
  }

  return (
    <form
      className="d-flex  animate__animated animate__fadeIn animate__delay-1s"
      onSubmit={handleSubmit}
    >
      <div className="container-input form-buscar">
        <input
          className="border-0 form-label"
          placeholder={placeholder}
          value={evento}
          onChange={(e) => handleEvento(e.target.value)}
        />
      </div>
      <button className="btn-lupa btn-outline-success search" type="submit">
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
      </button>
    </form>
    // <form
    //   className="d-flex form-buscar animate__animated animate__fadeIn animate__delay-1s"
    //   onSubmit={handleSubmit}
    // >
    //   <div>
    //     <svg
    //       xmlns={dataNavbar?.formBusqueda.xmlns}
    //       width={dataNavbar?.formBusqueda.width}
    //       height={dataNavbar?.formBusqueda.height}
    //       fill={dataNavbar?.formBusqueda.fill}
    //       className="bi bi-search"
    //       viewBox={dataNavbar?.formBusqueda.viewBox}
    //     >
    //       <path d={dataNavbar?.formBusqueda.path} />
    //     </svg>
    //   </div>
    //   <div className="container-input">
    //     <input
    //       style={dataNavbar?.inputBusqueda.style}
    //       className="border-0 input"
    //       placeholder={placeholder}
    //       value={evento}
    //       onChange={(e) => handleEvento(e.target.value)}
    //     />
    //   </div>
    // </form>
  );
};
