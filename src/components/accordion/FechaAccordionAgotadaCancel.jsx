import { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";
import { BotonCompraDisabled } from "./";

export const FechaAccordionAgotadaCancel = ({
  dia,
  hora,
  mes,
  mesFormateado,
  anio,
  internalState,
  dataFechas: dataFecha,
  dataEvento,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({internalState})
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-16">
          <div className="lg:mr-1 whitespace-nowrap text-base lg:text-lg font-semibold text-gray-300">
            <span>
              {dia} {mesFormateado}
            </span>
          </div>
          <div className="md:mr-1 text-left text-base lg:text-lg font-semibold text-gray-300">
            <span>{anio}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4">
          <div>
            <span className={`text-md text-gray-300 uppercase font-semibold`}>
              {dataEvento?.product.enableVenueImage === 1 &&
              (dataEvento?.product.venueImage ||
                dataFecha?.venueImage ||
                dataInfoGeneral?.venueImage)
                ? "ver precios y ubicaciones"
                : "ver precios"}
            </span>
          </div>

          <div>
            <span
              className={`${
                internalState === "cancel" ? "text-black" : "text-red-400"
              } uppercase text-xs font-semibold`}
            >
              {internalState === "cancel"
                ? "fecha cancelada"
                : "entradas agotadas"}
            </span>
          </div>

          <div className="md:mr-1 text-left text-sm text-gray-300 font-semibold ">
            <span>{hora}hs</span>
          </div>
        </div>
      </div>

      <div className="text-end mt-4 lg:my-auto">
        <BotonCompraDisabled
          dataFecha={dataFecha}
          internalState={internalState}
        />
      </div>
    </>
  );
};
