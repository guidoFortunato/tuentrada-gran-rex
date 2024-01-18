import { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";

export const MainNoEventos = () => {
  const { dataInfoGeneral } = useContext(EventosContext);

  return (
    <main className="container mx-auto mb-5">
      <div
      style={{
        backgroundColor: dataInfoGeneral?.backgroundButton,
        color: dataInfoGeneral?.colorButton

      }}
        className="w-1/2 flex justify-center items-center mx-auto p-4 mb-4 text-lg rounded-lg"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 inline w-7 h-7 mr-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium"></span>
          No hay eventos disponibles
        </div>
      </div>
    </main>
  );
};
