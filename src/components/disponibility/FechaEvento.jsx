import React, { useState } from "react";
import {
  FechaAccordionDisponible,
  FechaAccordionLimited,
  FechaAccordionAgotadaCancel,
  FechaAccordionProximamente,
} from "../accordion";

const opciones = {
  day: "numeric",
  month: "long",
  hour: "numeric",
  minute: "numeric",
  year: "numeric",
  hour12: false,
};

export const FechaEvento = ({
  internalState,
  dataFechas: dataFecha,
  dataEvento,
  availabilitLevel,
  reason,
}) => {
  const [openModal, setOpenModal] = useState(false);
  // console.log({dataInfoGeneral})
  // console.log({dataEvento})
  // console.log({dataFechas})
  // console.log({ availabilitLevel });
  // console.log({ reason });
  // console.log({ internalState });

  const fecha = new Date(dataFecha.start);
  const formatoFecha = fecha.toLocaleDateString("es-ES", opciones);
  const dia = formatoFecha.split(",")[0].split(" ")[0];
  const mes = formatoFecha.split(",")[0].split(" ")[2].charAt(0).toUpperCase() + formatoFecha.split(",")[0].split(" ")[2].slice(1);
  const mesFormateado = mes.slice(0, 3);
  const anio = formatoFecha.split(",")[0].split(" ")[4];
  const hora = formatoFecha.split(",")[1].trim();

  if (internalState === "soon") {
    return (
      <div className="lg:flex lg:flex-row lg:justify-between border-b-2 border-gray-200 p-5">
        <FechaAccordionProximamente
          dia={dia}
          hora={hora}
          mesFormateado={mesFormateado}
          anio={anio}

        />
      </div>
    );
  }
  if (internalState === "cancel") {
    return (
      <div className="lg:flex lg:flex-row lg:justify-between border-b-2 border-gray-200 p-5">
        <FechaAccordionAgotadaCancel
          dia={dia}
          hora={hora}
          mesFormateado={mesFormateado}
          anio={anio}
          internalState={internalState}
        />
      </div>
    );
  }

  if (availabilitLevel === "NONE" && reason !== "SOLD_OUT") {
    return
  }

  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-between border-b-2 border-gray-200 p-5">
        {availabilitLevel === "GOOD" && (
          <FechaAccordionDisponible
            dataFechas={dataFecha}
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
          <FechaAccordionLimited
            dataFechas={dataFecha}
            dataEvento={dataEvento}
            dia={dia}
            hora={hora}
            mesFormateado={mesFormateado}
            anio={anio}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
        {availabilitLevel === "NONE" && reason === "SOLD_OUT" && (
          <FechaAccordionAgotadaCancel
            dia={dia}
            hora={hora}
            mesFormateado={mesFormateado}
            anio={anio}
            internalState={internalState}
          />
        )}
      </div>
      {/* {
          <FechasAccordion
            dataFechas={dataFecha}
            dataEvento={dataEvento}
            dia={dia}
            hora={hora}
            mesFormateado={mesFormateado}
            anio={anio}
            openModal={openModal}
            setOpenModal={setOpenModal}
            availabilitLevel={availabilitLevel}
            reason={reason}
          />
        } */}
    </>
  );
};
