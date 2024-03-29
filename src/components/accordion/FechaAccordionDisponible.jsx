import React, { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";
import { ModalPrecios } from "../detalleEvento/ModalPrecios";
// import { Spinner } from "../Spinner";

export const FechaAccordionDisponible = ({
  dia,
  hora,
  mesFormateado,
  anio,
  openModal,
  setOpenModal,
  dataFechas: dataFecha,
  dataEvento,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({dataInfoGeneral})
  // console.log({ dataFecha });
  // console.log({dataEvento})

  // if(dataEvento === null) return <Spinner />
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-16">
          <div
            style={{ color: dataInfoGeneral.colorSiteName }}
            className="lg:mr-1 lg:whitespace-nowrap text-base lg:text-lg font-semibold "
          >
            <span>
              {dia} {mesFormateado}
            </span>
          </div>
          <div
            style={{ color: dataInfoGeneral.colorSiteName }}
            className="md:mr-1 text-left text-base lg:text-lg font-semibold"
          >
            <span>{anio}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4">
          <div onClick={() => setOpenModal((prevstate) => !prevstate)}>
            <span
              className={`text-sm text-gray-500 hover:text-gray-800 cursor-pointer uppercase font-semibold`}
            >
             {(dataEvento?.product.enableVenueImage === 1 && (dataEvento?.product.venueImage || dataFecha?.venueImage || dataInfoGeneral?.venueImage)) ? "ver precios y ubicaciones" : "ver precios"}
            </span>
          </div>

          <div>
            <span className="uppercase text-green-700  text-xs font-semibold">
              entradas disponibles
            </span>
          </div>

          <div className="md:mr-1 text-left text-sm text-black font-semibold">
            <span>{hora}hs</span>
          </div>
          <ModalPrecios
            performances={dataFecha}
            openModal={openModal}
            setOpenModal={setOpenModal}
            dataEvento={dataEvento}
          />
        </div>
      </div>

      <div className="text-end mt-4 lg:my-auto">
        
          <a href={dataFecha.buyButtons[0].link} target="_blank">
            <button
              type="button"
              className={`focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center`}
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
              {dataFecha.buyButtons[0]?.label}
            </button>
          </a>
        
      </div>
    </>
  );
};
