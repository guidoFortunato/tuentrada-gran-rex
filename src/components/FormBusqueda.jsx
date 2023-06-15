import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider"; 
// import { Spinner } from "./Spinner";

export const FormBusqueda = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [evento, setEvento] = useState("");
  let navigate = useNavigate();
  const { pathname, search } = useLocation();
  // console.log({pathname})
  // console.log({dataInfoGeneral})

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
    if (evento.length === 0) return; // sweet alert
    navigate(`/busqueda-eventos/search?q=${evento}`);
    handleEvento("");
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
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
            className={`focus:ring-[#5c452c] focus:border-[#5c452c] block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50`}
            placeholder="Buscar un evento..."
            required
            value={evento}
            onChange={(e) => handleEvento(e.target.value)}
          />
          <button
            type="submit"
          
            className={`text-[${dataInfoGeneral.colorButton}] text-white font-semibold absolute right-2.5 bottom-2.5 bg-[${dataInfoGeneral.backgroundButton}] hover:bg-[${dataInfoGeneral.colorHoverButton}] hover:border[${dataInfoGeneral.colorHoverButton}] font-medium rounded-3xl text-sm px-4 py-2`}
          >
            Buscar
          </button>
        </div>
      </form>
    </>
  );
};
