import React, { useContext } from "react";
import { ModalPrecios } from "../";
import { EventosContext } from "../../context/EventosProvider";

export const FechaAgotada = ({
  dia,
  hora,
  mesFormateado,
  anio,
  openModal,
  setOpenModal,
  dataFechas,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center">
          <div
            className="lg:mr-1 lg:whitespace-nowrap text-base font-semibold text-gray-300"
          >
            {dia} {mesFormateado}
          </div>
          <div
            className="md:mr-1 text-left text-lg font-semibold text-gray-300"
          >
            {anio}
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4">
          <div
            className={`text-base text-gray-300 cursor-pointer uppercase font-semibold`}
            onClick={() => setOpenModal((prevstate) => !prevstate)}
          >
            Ver precios y ubicaciones
          </div>

          <div className="uppercase text-red-700  font-bold">
            entradas agotadas
          </div>

          <div className="md:mr-1 text-left text-lg text-gray-300 font-semibold ">
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
        <div
          type="button"
          className="text-white bg-gray-300 focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center"
        >
          Comprar entradas
        </div>
      </div>
    </>
  );
};
