import React, { useContext, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { ModalPrecios } from "./";

const opciones = {
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  year: "numeric",
  hour12: false,
};

export const FechaEvento = ({ dataFechas, dataEvento }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [openModal, setOpenModal] = useState(false);
  // console.log({dataInfoGeneral})
  // console.log({dataEvento})
  // console.log({dataFechas})

  const fecha = new Date(dataFechas.start);
  const formatoFecha = fecha.toLocaleDateString("es-ES", opciones);
  // console.log({formatoFecha})
  const dia = formatoFecha.split(",")[0].split(" ")[0];
  const mes =
    formatoFecha.split(",")[0].split(" ")[2].charAt(0).toUpperCase() +
    formatoFecha.split(",")[0].split(" ")[2].slice(1);
  const mesFormateado = mes.length > 6 ? mes.slice(0, 3) : mes;
  // console.log({mes})
  // console.log({mesFormateado})
  const anio = formatoFecha.split(",")[0].split(" ")[4];
  const hora = formatoFecha.split(",")[1].trim();
  // console.log({dia, mes,anio,hora})

  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-between border-b-2 border-gray-200 p-3">
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
            {/* <div>{hora}hs</div> */}
          </div>

          <div className="flex flex-col justify-center ml-4">
            <div
              className={`text-base text-gray-500 cursor-pointer uppercase font-semibold`}
              onClick={() => setOpenModal((prevstate) => !prevstate)}
            >
              Ver precios y ubicaciones
            </div>
            {/* <div className="uppercase text-green-700  font-bold">entradas disponibles</div> */}
            <div className="uppercase text-pink-800  font-bold">¡últimas entradas!</div>
            {/* <div className="uppercase text-red-700  font-bold">agotado</div> */}
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

        <div className="text-end lg:my-auto">
          <button
            style={{
              color: dataInfoGeneral.colorButton,
              backgroundColor: dataInfoGeneral.backgroundButton,
            }}
            type="button"
            className="text-white focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <a
              href={`${dataInfoGeneral.url}perfId=${dataFechas.performanceId}&productId=${dataEvento.productId}`}
              target="_blank"
            >
              Comprar entradas
            </a>
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row lg:items-center my-5 lg:my-0">
        <div className="lg:mr-1 text-sm">{dia}</div>
        <div className="hidden lg:block lg:mr-1">-</div>
        <div className="lg:mr-1 lg:whitespace-nowrap">{numDia}</div>
        <div className="hidden lg:block md:mr-1">-</div>
        <div>{hora}hs</div>
      </div>
      <div className="flex flex-col md:flex-row items-center text-center justify-center my-5 lg:my-0">
        <div className={`underline text-[${dataInfoGeneral.colorSiteName}] cursor-pointer`} onClick={() => setOpenModal( prevstate => !prevstate )}>
          Precios y Ubicaciones
        </div>
        <ModalPrecios performances={dataFechas} openModal={openModal} setOpenModal={setOpenModal} />
      </div>
      <div className="ml-auto mt-auto mb-auto lg:my-3">
        <button
          style={{
            color: dataInfoGeneral.colorButton,
            backgroundColor: dataInfoGeneral.backgroundButton,
          }}
          type="button"
          className="text-white focus:outline-none font-medium rounded-full text-sm px-3 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <a href={ `${dataInfoGeneral.url}perfId=${dataFechas.performanceId}&productId=${dataEvento.productId}` } target="_blank">
            Comprar
          </a>
        </button>
      </div> */}
    </>
  );
};
