import React, { useContext, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { ModalPrecios } from "./";

const opciones = {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  hour12: false,
};

export const FechaEvento = ({ dataFechas, dataEvento, performances }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [openModal, setOpenModal] = useState(false);
  // console.log({dataInfoGeneral})


  const fecha = new Date(dataFechas.start);
  const formatoFecha = fecha.toLocaleDateString("es-ES", opciones);
  const dia = formatoFecha.split(',')[0]
  const numDia = formatoFecha.split(',')[1]
  const hora = formatoFecha.split(',')[2]

  // console.log(data)

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:mr-1">{dia}</div>
        <div className="hidden md:block md:mr-1">-</div>
        <div className="md:mr-1">{numDia}</div>
        <div className="hidden md:block md:mr-1">-</div>
        <div>{hora}hs</div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className={`underline text-[${dataInfoGeneral.colorSiteName}] cursor-pointer`} onClick={() => setOpenModal( prevstate => !prevstate )}>
          Precios y Ubicaciones
        </div>
        <ModalPrecios performances={performances} openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div className="ml-auto my-auto">
        <button
          style={{
            color: dataInfoGeneral.colorButton,
            backgroundColor: dataInfoGeneral.backgroundButton,
          }}
          type="button"
          className="text-white focus:outline-none font-medium rounded-full text-sm px-3 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <a href={ dataInfoGeneral.url + dataEvento.productId } target="_blank">
             {/* https://eventos.tuentrada.com/selection/event/seat?perfId=10228788603539&table=1&productId=10228788601877 */}
            Comprar
          </a>
        </button>
      </div>
    </>
  );
};
