import { useContext } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useLocation, useNavigate } from "react-router-dom";

export const FormBusqueda = () => {
  // const [evento, setEvento] = useState("");
  const { evento, handleEvento, agregarEvento } = useContext(EventosContext);
  let navigate = useNavigate();
<<<<<<< HEAD
=======
  const { pathname } = useLocation();
  localStorage.setItem("lastPath", pathname);
>>>>>>> 351a2583eca578ddaccc19b100cfc66566456e1c

  const handleSubmit = (e) => {
    e.preventDefault();
    if (evento.length === 0) return;
    agregarEvento(evento);
    className = navigate(`/busqueda-eventos/${evento}`);
    handleEvento("");
  };

  return (
<<<<<<< HEAD
    <>
      {/* <form className="d-flex" onSubmit={handleSubmit}> */}
        <div className="input-group">
          <div className="form-outline">
            <input type="search" id="form1" className="form-control" />
            <label className="form-label" htmlFor="form1">
              Search
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            <i className="fas fa-search"></i>
          </button>
        </div>
      {/* </form> */}
      {/* <form className="d-flex form-buscar" onSubmit={handleSubmit}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <div className="container-input">
          <input
            className="border-0"
            placeholder="Buscar Evento"
            value={evento}
            onChange={(e) => handleEvento(e.target.value)}
          />
        </div>

      </form> */}
    </>
=======
    <form className="d-flex form-buscar animate__animated animate__fadeIn animate__delay-1s" onSubmit={handleSubmit}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <div className="container-input">
        <input
          className="border-0"
          placeholder="Buscar Evento"
          value={evento}
          onChange={(e) => handleEvento(e.target.value)}
        />
      </div>
      {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
    </form>
>>>>>>> 351a2583eca578ddaccc19b100cfc66566456e1c
  );
};
