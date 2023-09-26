import { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";
import DOMPurify from "dompurify";

import { getEnvVariables } from "../../helpers";
import { FormBusquedaRex } from "./";

const { VITE_VENUE } = getEnvVariables();

export const HeaderNoEventos = () => {
  const { dataInfoGeneral, host } = useContext(EventosContext);
  // console.log({dataInfoGeneral})
  return (
    <header
      style={{ backgroundImage: `url(${dataInfoGeneral?.backgroundImage})` }}
      className={`bg-no-repeat bg-cover bg-center container mx-auto mb-5 `}
    >
      <div
        className={`min-h-[50vh] flex justify-center items-stretch flex-colP `}
        style={{ background: "rgba(0,0,0,.5)" }}
      >
        <div className="flex justify-center items-center flex-col w-full">
          <h1
            style={{
              color: dataInfoGeneral?.colorH1,
              // fontSize: "2.5em",
              width: "92%",
            }}
            className={`m-0 ${
              host === VITE_VENUE ? "text-6xl md:text-8xl" : "text-5xl"
            } font-medium pt-10 pb-5  ${
              host === VITE_VENUE ? "text-center" : "text-center md:text-left"
            }`}
          >
            {dataInfoGeneral?.pages[0]?.title.toUpperCase()}
          </h1>
          {host === VITE_VENUE && (
            <div className="w-[87%] sm:w-[70%] md:w-[50%] lg:w-[35%] 2xl:w-[25%]">
            <FormBusquedaRex />
          </div>
          )}
        </div>
        {host !== VITE_VENUE && (
          <div
            className="flex flex-col md:flex-row "
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p
              style={{ color: dataInfoGeneral?.colorButton }}
              className={`md:w-3/5 md:mr-6 text-justify pl-10 pr-10 md:pl-0 md:pr-0 text-base md:text-base lg:text-lg`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(dataInfoGeneral?.description),
              }}
            ></p>
            <div
              className="flex md:flex-col md:items-center md:justify-center mb-10 "
              style={{ width: "30%", justifyContent: "center" }}
            >
              <button
                type="button"
                className={`w-auto py-2.5 px-8 mt-6 md:mt-0 rounded text-base cursor-default`}
                style={{
                  color: dataInfoGeneral?.colorButton,
                  backgroundColor: dataInfoGeneral?.backgroundButton,
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor =
                    dataInfoGeneral?.colorHoverButton; // Cambiar al color de hover
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor =
                    dataInfoGeneral?.backgroundButton; // Restaurar el color original
                }}
              >
                {dataInfoGeneral?.buttonLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
