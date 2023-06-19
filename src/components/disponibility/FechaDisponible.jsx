import React, { useContext } from "react";
import { ModalPrecios } from "../";
import { EventosContext } from "../../context/EventosProvider";

export const FechaDisponible = ({ dia, hora, mesFormateado, anio, openModal, setOpenModal, dataFechas, dataEvento }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center">
          <div
            style={{ color: dataInfoGeneral.colorSiteName }}
            className="lg:mr-1 lg:whitespace-nowrap text-base font-semibold "
          >
            {dia} {mesFormateado}
          </div>
          <div
            style={{ color: dataInfoGeneral.colorSiteName }}
            className="md:mr-1 text-left text-lg font-semibold"
          >
            {anio}
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4">
          <div
            className={`text-base text-gray-500 hover:text-gray-800 cursor-pointer uppercase font-semibold`}
            onClick={() => setOpenModal((prevstate) => !prevstate)}
          >
            Ver precios y ubicaciones
          </div>

          <div className="uppercase text-green-700  font-bold">
            entradas disponibles
          </div>

          <div className="md:mr-1 text-left text-lg text-black font-semibold">
            {hora}hs
          </div>
          <ModalPrecios
            performances={dataFechas}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </div>
      </div>

      <div className="text-end mt-4 lg:my-auto">
        <button
          type="button"
          className={`bg-[${dataInfoGeneral.backgroundButton}] hover:bg-[${dataInfoGeneral.colorHoverButton}] hover:border[${dataInfoGeneral.colorHoverButton}] focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center`}
          style={{
            color: dataInfoGeneral.colorButton,
          }}
        >
          <a
            href={`${dataInfoGeneral.url}perfId=${dataFechas.performanceId}&productId=${dataEvento.productId}`}
            target="_blank"
          >
            Comprar entradas
          </a>
        </button>
      </div>
    </>
  );
};
