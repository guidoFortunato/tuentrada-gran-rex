import { useContext, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useNavigate } from "react-router-dom";

export const FormBusqueda = () => {
  const [evento, setEvento] = useState("");
  const { agregarEvento } = useContext(EventosContext);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEvento(evento);
    setEvento("");
    navigate("/busqueda-eventos");
  };
  
  return (
    <form className="d-flex form-buscar" onSubmit={handleSubmit}>
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
          onChange={(e) => setEvento(e.target.value)}
        />
      </div>
      {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
    </form>
  );
};
