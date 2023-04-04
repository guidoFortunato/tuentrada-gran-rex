import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import listViewPlugin from "@fullcalendar/list";

import { useNavigate } from "react-router-dom";

import "../css/calendario.css";

const month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const fullEvents = [
  {
    id: 1,
    start: "2023-04-04T10:00:00",
    end: "2023-04-04T12:00:00",
    date: "2023-04-04",
    title: "Chano",
    url: "https://www.google.com/",
  },
  {
    id: 2,
    date: "2023-04-07",
    start: "2023-04-07T20:00:00",
    end: "2023-04-07T22:00:00",
    title: "Anuel",
    url: "/busqueda-eventos/anuel",
  },
  {
    id: 3,
    date: "2023-04-09",
    start: "2023-04-09T21:00:00",
    end: "2023-04-09T23:00:00",
    title: "Tini",
    url: "https://www.google.com/",
  },
];

const fullPlugins = [
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  bootstrap5Plugin,
  listViewPlugin,
];

const headerToolbarOptionsResponsive = {
  start: "title", // will normally be on the left. if RTL, will be on the right
  center: "",
  end: "today prev,next", // will normally be on the right. if RTL, will be on the left
};

const headerToolbarOptionsDesktop = {
  start: "today prev,next", // will normally be on the left. if RTL, will be on the right
  center: "title",
  end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
};

const buttonTextOptions = {
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  list: "Lista",
};

export const Calendario = () => {
  const navigate = useNavigate();

  const handleClick = (info) => {
    info.jsEvent.preventDefault();
    const busquedaEventos = info.event.url.split("/")[1] == "busqueda-eventos";
    if (busquedaEventos) {
      navigate(info.event.url);
    } else {
      window.open(info.event.url, "_blank");
    }
  };

  const handleTitle = (info) => {
    const { date } = info;
    return month[date.month] + " - " + date.year;
  };

  return (
    <>
      <div className="container container-calendar">
        <div className="row mt-5">
          <div className="col-12">
            <FullCalendar
              plugins={fullPlugins}
              initialView={window.innerWidth <= 992 ? "listMonth" : "dayGridMonth"} 
              headerToolbar={window.innerWidth <= 992 ? headerToolbarOptionsResponsive : headerToolbarOptionsDesktop}
              height={"70vh"}
              titleFormat={handleTitle}
              eventBackgroundColor="#BA2828"
              eventBorderColor="#BA2828"
              events={fullEvents}
              locale={"es"}
              buttonText={buttonTextOptions}
              themeSystem={"bootstrap5"}
              eventClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
