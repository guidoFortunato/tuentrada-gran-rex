import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";
import { alertaWarning } from "../../helpers";


export const FormBusquedaRex = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [evento, setEvento] = useState("");
  let navigate = useNavigate();
  const { pathname, search } = useLocation();
  // console.log({pathname})
  // console.log({dataInfoGeneral})
  // console.log({activeToast})

  localStorage.setItem("lastPath", pathname + search);

  const handleEvento = (nombreEvento) => {
    if (!nombreEvento.trim()) {
      setEvento("");
      return;
    }
    setEvento(nombreEvento);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (evento.length === 0) {
      alertaWarning("Debe ingresar un evento");
      return;
    }
    navigate(`/busqueda-eventos/search?q=${evento}`);
    handleEvento("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            // className={`focus:ring-[${dataInfoGeneral.backgroundButton}] focus:border-[${dataInfoGeneral.backgroundButton}] block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50`}
            className={`focus:ring-[#00000041]  focus:border-[#00000041] block w-full pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50`}
            placeholder="Buscar un evento..."
            value={evento}
            onChange={(e) => handleEvento(e.target.value)}
          />
          <button
            type="submit" 
            className={`font-medium absolute right-1 bottom-1 top-1 rounded text-sm px-4 py-1`}
            style={{
              color: dataInfoGeneral.colorButton,
              backgroundColor: dataInfoGeneral.backgroundButton,
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = dataInfoGeneral.colorHoverButton; // Cambiar al color de hover
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = dataInfoGeneral.backgroundButton; // Restaurar el color original
            }}
          >
            Buscar
          </button>
        </div>
      </form>
    </>
  );
};
