import React, { useState } from "react";
import { FechaAgotada, FechaDisponible, FechaLimited } from "./disponibility";

const opciones = {
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  year: "numeric",
  hour12: false,
};

export const FechaEvento = ({ dataFechas, dataEvento, availabilitLevel, reason }) => {
  const [openModal, setOpenModal] = useState(false);
  // console.log({dataInfoGeneral})
  // console.log({dataEvento})
  // console.log({dataFechas})
  // console.log({ availabilitLevel });
  // console.log({ reason });

  const fecha = new Date(dataFechas.start);
  const formatoFecha = fecha.toLocaleDateString("es-ES", opciones);
  const dia = formatoFecha.split(",")[0].split(" ")[0];
  const mes = formatoFecha.split(",")[0].split(" ")[2].charAt(0).toUpperCase() + formatoFecha.split(",")[0].split(" ")[2].slice(1);
  const mesFormateado = mes.slice(0, 3);
  const anio = formatoFecha.split(",")[0].split(" ")[4];
  const hora = formatoFecha.split(",")[1].trim();

  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-between border-b-2 border-gray-200 p-3">
        {availabilitLevel === "GOOD" && (
          <FechaDisponible
            dataFechas={dataFechas}
            dataEvento={dataEvento}
            dia={dia}
            hora={hora}
            mesFormateado={mesFormateado}
            anio={anio}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
        {availabilitLevel === "LIMITED" && (
          <FechaLimited
            dataFechas={dataFechas}
            dataEvento={dataEvento}
            dia={dia}
            hora={hora}
            mesFormateado={mesFormateado}
            anio={anio}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
        {availabilitLevel === "NONE" && reason == "SOLD_OUT" && (
          <FechaAgotada
            dia={dia}
            hora={hora}
            mesFormateado={mesFormateado}
            anio={anio}
          />
        )}
      </div>
    </>
  );
};
