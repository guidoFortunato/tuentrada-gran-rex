import React, { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";
import { ModalPrecios } from "../detalleEvento";

export const FechasAccordion = ({
  dia,
  hora,
  mesFormateado,
  anio,
  openModal,
  setOpenModal,
  dataFechas: dataFecha,
  dataEvento,
  availabilitLevel,
  reason,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);

  const isActive =
    availabilitLevel === "GOOD" || availabilitLevel === "LIMITED";

  const handleClick = () => {
    setOpenModal((prevstate) => !prevstate);
  };

  const divStyles = {
    color: isActive ? `${dataInfoGeneral.colorSiteName}` : "red"
  }
  // console.log({dataInfoGeneral})
  // console.log({dataFecha})
  // console.log({dataEvento})
  // console.log({ availabilitLevel });
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-16">
          <div
            style={divStyles}
            className={` ${
              availabilitLevel === "NONE" &&
              reason == "SOLD_OUT" &&
              "text-gray-300"
            } lg:mr-1 lg:whitespace-nowrap text-base lg:text-lg font-semibold`}
          >
            <span>
              {dia} {mesFormateado}
            </span>
          </div>
          <div
            style={divStyles}
            className={`${
              availabilitLevel === "NONE" &&
              reason == "SOLD_OUT" &&
              "text-gray-300"
            } md:mr-1 text-left text-base lg:text-lg font-semibold`}
          >
            <span>{anio}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4">
          <div onClick={isActive ? handleClick : null}>
            <span
              className={
                availabilitLevel === "GOOD" || availabilitLevel === "LIMITED"
                  ? "text-sm text-gray-500 hover:text-gray-800 cursor-pointer uppercase font-semibold"
                  : "text-md text-gray-300 uppercase font-semibold"
              }
            >
              Ver precios y ubicaciones
            </span>
          </div>

          <div>
            <span
              className={`uppercase ${
                availabilitLevel === "GOOD"
                  ? "text-green-700"
                  : availabilitLevel === "LIMITED"
                  ? "text-pink-800"
                  : availabilitLevel === "NONE" &&
                    reason == "SOLD_OUT" &&
                    "text-red-400"
              }  text-xs font-semibold`}
            >
              {availabilitLevel === "GOOD"
                ? "entradas disponibles"
                : availabilitLevel === "LIMITED"
                ? "¡últimas entradas!"
                : availabilitLevel === "NONE" &&
                  reason == "SOLD_OUT" &&
                  "entradas agotadas"}
            </span>
          </div>

          <div
            className={`${
              availabilitLevel === "GOOD" || availabilitLevel === "LIMITED"
                ? "text-black"
                : "text-gray-300"
            }  md:mr-1 text-left text-sm font-semibold`}
          >
            <span>{hora}hs</span>
          </div>
          {(availabilitLevel === "GOOD" || availabilitLevel === "LIMITED") && (
            <ModalPrecios
              performances={dataFecha}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
        </div>
      </div>

      <div className="text-end mt-4 lg:my-auto">
        <a
          href={
            (availabilitLevel === "GOOD" || availabilitLevel === "LIMITED") &&
            `${dataEvento.url}selection/event/seat?perfId=${dataFecha.performanceId}&productId=${dataEvento.productId}`
          }
          target="_blank"
        >
          <button
            type="button"
            className={` ${
              availabilitLevel === "GOOD" || availabilitLevel === "LIMITED"
                ? `bg-[${dataInfoGeneral.backgroundButton}] hover:bg-[${dataInfoGeneral.colorHoverButton}] hover:border[${dataInfoGeneral.colorHoverButton}]`
                : "text-white bg-gray-300 cursor-default"
            }  focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center`}
            style={
              (availabilitLevel === "GOOD" ||
                availabilitLevel === "LIMITED") && {
                color: dataInfoGeneral.colorButton,
              }
            }
          >
            Comprar entradas
          </button>
        </a>
      </div>
    </>
  );
};
