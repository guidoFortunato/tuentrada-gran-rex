import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";

import "../css/calendario.css";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                bootstrap5Plugin,
              ]}
              initialView={"dayGridMonth"}
              headerToolbar={{
                start: "today prev,next", // will normally be on the left. if RTL, will be on the right
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
              }}
              height={"70vh"}
              // views={
              //   "title"
              // }
              // titleFormat={{
              //   month: 'MMMM yyyy',                             // September 2009                 // Tuesday, Sep 8, 2009
              // }}
              events={[
                {
                  id: 1,
                  title: "Chano",
                  date: "2023-03-31",
                  url: "https://www.google.com/",
                },
                {
                  id: 2,
                  title: "Anuel",
                  date: "2023-04-01",
                  url: "/busqueda-eventos/anuel",
                },
                {
                  id: 3,
                  title: "Tini",
                  date: "2023-04-02",
                  url: "https://www.google.com/",
                },
              ]}
              locale={"es"}
              buttonText={{
                today: "Hoy",
                month: "Mes",
                week: "Semana",
                day: "Día",
                list: "Lista",
              }}
              themeSystem={"bootstrap5"}
              eventClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};
