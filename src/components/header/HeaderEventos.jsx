import { useContext } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

import { EventosContext } from "../../context/EventosProvider";
import { getEnvVariables } from "../../helpers";
import { FormBusquedaRex } from "./";
import { ImagenResponsive } from "../ImagenResponsive";

const { VITE_VENUE } = getEnvVariables();

export const HeaderEventos = () => {
  const { dataInfoGeneral, host } = useContext(EventosContext);
  // console.log({dataInfoGeneral})
  return (
    <header
      // style={{ backgroundImage: `url(${dataInfoGeneral?.backgroundImage.src})` }}
      // className={`bg-no-repeat bg-cover bg-center container mx-auto mb-5 z-40 my-3`}
      className="relative container mx-auto mb-5 my-3"
    >
      <ImagenResponsive
        src={dataInfoGeneral?.backgroundImage?.src}
        srcSet={dataInfoGeneral?.backgroundImage?.srcset}
        alt={dataInfoGeneral?.backgroundImage?.alt}
        className={`absolute h-[60vh] md:h-[50vh] w-full object-cover brightness-[50%]`}
      />
      <div
        className={`h-[60vh] md:h-[50vh] flex justify-center items-stretch flex-col`}
        style={{ background: "rgba(0,0,0,.5)" }}
      >
        <div className="flex justify-center items-center flex-col w-full z-50">
          <h1
            style={{
              color: dataInfoGeneral?.colorH1,
              // fontSize: "2.5em",
              width: "92%",
            }}
            className={`m-0 ${host === VITE_VENUE ? "text-6xl md:text-[5rem]" : "text-5xl"} font-medium pt-5 pb-1  ${host === VITE_VENUE ? "text-center" : "text-center md:text-left"
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
            className="flex flex-col md:flex-row z-50"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <p
              style={{ color: dataInfoGeneral?.colorButton }}
              className={`md:w-3/5 md:mr-6  text-center md:text-justify pl-10 pr-10 md:pl-0 md:pr-0 text-base md:text-base lg:text-lg`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(dataInfoGeneral?.description),
              }}
            ></p>
            <div
              className="flex md:flex-col md:items-center md:justify-center mb-10 "
              style={{ width: "30%", justifyContent: "center" }}
            >
              <Link
                to={dataInfoGeneral?.buttonLink}
                target={
                  dataInfoGeneral.buttonLink?.startsWith("/") ? null : "_blank"
                }
              >
                <button
                  type="button"
                  className={`w-auto py-2.5 px-8 mt-6 md:mt-0 rounded text-base`}
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
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
