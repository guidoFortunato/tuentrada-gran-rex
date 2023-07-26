import React, { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";
import { ModalPrecios } from "../detalleEvento";

export const FechaAccordionLimited = ({
  dia,
  hora,
  mesFormateado,
  anio,
  openModal,
  setOpenModal,
  dataFechas,
  dataEvento,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({dataFechas})
  // console.log({dataInfoGeneral})
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-15">
          <div
            style={{ color: dataInfoGeneral.colorSiteName }}
            className="lg:mr-1 lg:whitespace-nowrap text-md font-semibold "
          >
            <span>
              {" "}
              {dia} {mesFormateado}
            </span>
          </div>
          <div
            style={{ color: dataInfoGeneral.colorSiteName }}
            className="md:mr-1 text-left text-base font-semibold"
          >
            <span>{anio}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4">
          <div onClick={() => setOpenModal((prevstate) => !prevstate)}>
            <span
              className={`text-md text-gray-500 hover:text-gray-800 cursor-pointer uppercase font-semibold`}
            >
              Ver precios y ubicaciones
            </span>
          </div>

          <div>
            <span className="uppercase text-pink-800 text-xs font-semibold">
              ¡últimas entradas!
            </span>
          </div>

          <div className="md:mr-1 text-left text-sm text-black font-semibold">
            <span>{hora}hs</span>
          </div>
          <ModalPrecios
            performances={dataFechas}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>

      <div className="text-end mt-4 lg:my-auto">
        <a
          href={`${dataEvento.url}selection/event/seat?perfId=${dataFechas.performanceId}&productId=${dataEvento.productId}`}
          target="_blank"
        >
          <button
            type="button"
            className={`bg-[${dataInfoGeneral.backgroundButton}] hover:bg-[${dataInfoGeneral.colorHoverButton}] hover:border[${dataInfoGeneral.colorHoverButton}] focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center`}
            style={{
              color: dataInfoGeneral.colorButton,
            }}
          >
            Comprar entradas
          </button>
        </a>
      </div>
    </>
  );
};
