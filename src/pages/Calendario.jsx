import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import listViewPlugin from "@fullcalendar/list";

import { useLocation, useNavigate } from "react-router-dom";

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
    start: "2023-04-15T20:30:00",
    end: "-",
    date: "2023-04-15",
    title: "EL ZAR",
    url: "/shows/el-zar/1",
  },
  {
    id: 2,
    date: "2023-04-16",
    start: "2023-04-16T21:30:00",
    end: "-",
    title: "SERGIO TORRES",
    url: "/shows/sergio-torres/2",
  },
  {
    id: 3,
    date: "2023-04-21",
    start: "2023-04-21T20:30:00",
    end: "-",
    title: "MIRANDA!",
    url: "/shows/miranda/3",
  },
  {
    id: 4,
    date: "2023-04-22",
    start: "2023-04-22T20:30:00",
    end: "-",
    title: "MIRANDA!",
    url: "/shows/miranda/3",
  },
  {
    id: 5,
    date: "2023-04-23",
    start: "2023-04-23T20:01:00",
    end: "-",
    title: "MIRANDA!",
    url: "/shows/miranda/3",
  },
  {
    id: 6,
    date: "2023-04-28",
    start: "2023-04-28T20:30:00",
    end: "-",
    title: "MASTER STROKE",
    url: "/shows/queen/4",
  },
  {
    id: 7,
    date: "2023-04-29",
    start: "2023-04-29T20:30:00",
    end: "-",
    title: "DAMIÁN CÓRDOBA",
    url: "/shows/damian-cordoba/5",
  },
  {
    id: 8,
    date: "2023-05-05",
    start: "2023-05-05T20:30:00",
    end: "-",
    title: "INTERNATIONAL FESTIVAL BALLET FOR THE PEACE",
    url: "/shows/festival-ballet/6",
  },
  {
    id: 9,
    date: "2023-05-06",
    start: "2023-05-06T20:30:00",
    end: "-",
    title: "INTERNATIONAL FESTIVAL BALLET FOR THE PEACE",
    url: "/shows/festival-ballet/6",
  },
  {
    id: 10,
    date: "2023-05-12",
    start: "2023-05-12T20:30:00",
    end: "-",
    title: "DALE Q’ VA",
    url: "/shows/daleqva/7",
  },
  {
    id: 11,
    date: "2023-05-13",
    start: "2023-05-13T20:30:00",
    end: "-",
    title: "TURF",
    url: "/shows/turf/8",
  },
  {
    id: 12,
    date: "2023-05-14",
    start: "2023-05-14T20:30:00",
    end: "-",
    title: "THE BEATS",
    url: "/shows/the-beats/9",
  },
  {
    id: 13,
    date: "2023-05-19",
    start: "2023-05-19T20:30:00",
    end: "-",
    title: "MASSACRE",
    url: "/shows/massacre/10",
  },
  {
    id: 14,
    date: "2023-05-20",
    start: "2023-05-20T12:00:00",
    end: "-",
    title: "JD PANTOJA KIM LOAIZA",
    url: "/shows/jdpantoja-kimloaiza/11",
  },
  {
    id: 15,
    date: "2023-05-21",
    start: "2023-05-21T19:00:00",
    end: "-",
    title: "JD PANTOJA KIM LOAIZA",
    url: "/shows/jdpantoja-kimloaiza/11",
  },
  {
    id: 16,
    date: "2023-05-20",
    start: "2023-05-20T21:00:00",
    end: "-",
    title: "SERGIO GALLEGUILLO",
    url: "/shows/sergio-galleguillo/12",
  },
  {
    id: 17,
    date: "2023-06-01",
    start: "2023-06-01T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 18,
    date: "2023-06-02",
    start: "2023-06-02T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 19,
    date: "2023-06-03",
    start: "2023-06-03T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 20,
    date: "2023-06-03",
    start: "2023-06-03T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 21,
    date: "2023-06-04",
    start: "2023-06-04T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 22,
    date: "2023-06-04",
    start: "2023-06-04T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 23,
    date: "2023-06-08",
    start: "2023-06-08T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 24,
    date: "2023-06-09",
    start: "2023-06-09T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 25,
    date: "2023-06-10",
    start: "2023-06-10T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 26,
    date: "2023-06-10",
    start: "2023-06-10T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 27,
    date: "2023-06-11",
    start: "2023-06-11T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 28,
    date: "2023-06-11",
    start: "2023-06-11T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 29,
    date: "2023-06-14",
    start: "2023-06-14T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 30,
    date: "2023-06-15",
    start: "2023-06-15T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 31,
    date: "2023-06-16",
    start: "2023-06-16T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 32,
    date: "2023-06-17",
    start: "2023-06-17T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 33,
    date: "2023-06-17",
    start: "2023-06-17T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 34,
    date: "2023-06-18",
    start: "2023-06-18T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 35,
    date: "2023-06-18",
    start: "2023-06-18T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 36,
    date: "2023-06-20",
    start: "2023-06-20T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 37,
    date: "2023-06-20",
    start: "2023-06-20T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 38,
    date: "2023-06-22",
    start: "2023-06-22T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 39,
    date: "2023-06-23",
    start: "2023-06-23T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 40,
    date: "2023-06-24",
    start: "2023-06-24T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 41,
    date: "2023-06-24",
    start: "2023-06-24T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 41,
    date: "2023-06-25",
    start: "2023-06-25T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 42,
    date: "2023-06-25",
    start: "2023-06-25T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 43,
    date: "2023-06-28",
    start: "2023-06-28T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 44,
    date: "2023-06-29",
    start: "2023-06-29T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 45,
    date: "2023-06-30",
    start: "2023-06-30T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 45,
    date: "2023-07-01",
    start: "2023-07-01T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 46,
    date: "2023-07-01",
    start: "2023-07-01T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 47,
    date: "2023-07-02",
    start: "2023-07-02T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 48,
    date: "2023-07-02",
    start: "2023-07-02T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 49,
    date: "2023-07-05",
    start: "2023-07-05T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 50,
    date: "2023-07-06",
    start: "2023-07-06T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 51,
    date: "2023-07-07",
    start: "2023-07-07T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 52,
    date: "2023-07-08",
    start: "2023-07-08T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 53,
    date: "2023-07-08",
    start: "2023-07-08T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 54,
    date: "2023-07-09",
    start: "2023-07-09T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 55,
    date: "2023-07-09",
    start: "2023-07-09T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 56,
    date: "2023-07-12",
    start: "2023-07-12T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 57,
    date: "2023-07-13",
    start: "2023-07-13T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 58,
    date: "2023-07-14",
    start: "2023-07-14T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 58,
    date: "2023-07-14",
    start: "2023-07-14T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 59,
    date: "2023-07-15",
    start: "2023-07-15T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 60,
    date: "2023-07-15",
    start: "2023-07-15T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 61,
    date: "2023-07-16",
    start: "2023-07-16T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 62,
    date: "2023-07-16",
    start: "2023-07-16T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 63,
    date: "2023-07-17",
    start: "2023-07-17T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 64,
    date: "2023-07-17",
    start: "2023-07-17T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 65,
    date: "2023-07-19",
    start: "2023-07-19T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 66,
    date: "2023-07-19",
    start: "2023-07-19T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 67,
    date: "2023-07-20",
    start: "2023-07-20T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 68,
    date: "2023-07-20",
    start: "2023-07-20T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 69,
    date: "2023-07-21",
    start: "2023-07-21T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 70,
    date: "2023-07-21",
    start: "2023-07-21T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 71,
    date: "2023-07-22",
    start: "2023-07-22T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 72,
    date: "2023-07-22",
    start: "2023-07-22T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 73,
    date: "2023-07-23",
    start: "2023-07-23T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 74,
    date: "2023-07-23",
    start: "2023-07-23T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 75,
    date: "2023-07-24",
    start: "2023-07-24T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 76,
    date: "2023-07-24",
    start: "2023-07-24T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 77,
    date: "2023-07-26",
    start: "2023-07-26T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 78,
    date: "2023-07-26",
    start: "2023-07-26T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 79,
    date: "2023-07-27",
    start: "2023-07-27T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 80,
    date: "2023-07-27",
    start: "2023-07-27T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 81,
    date: "2023-07-28",
    start: "2023-07-28T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 82,
    date: "2023-07-28",
    start: "2023-07-28T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 83,
    date: "2023-07-29",
    start: "2023-07-29T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 84,
    date: "2023-07-29",
    start: "2023-07-29T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 85,
    date: "2023-07-30",
    start: "2023-07-30T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 86,
    date: "2023-07-30",
    start: "2023-07-30T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
  },
  {
    id: 87,
    date: "2023-08-27",
    start: "2023-08-27T20:00:00",
    end: "-",
    title: "BRYNDIS",
    url: "/shows/bxs/14",
  },
  {
    id: 88,
    date: "2023-09-10",
    start: "2023-09-10T20:00:00",
    end: "-",
    title: "DANIEL AGOSTINI",
    url: "/shows/daniel-agostini/15",
  },
  {
    id: 89,
    date: "2023-09-16",
    start: "2023-09-16T20:00:00",
    end: "-",
    title: "Chili Fernandez",
    url: "/shows/chili-fernandez/16",
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
  end: "dayGridMonth,dayGridWeek", // will normally be on the right. if RTL, will be on the left
};

const buttonTextOptions = {
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  list: "Lista",
};

const eventTimeFormat = {
  hour: "2-digit",
  minute: "2-digit",
};

export const Calendario = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  localStorage.setItem("lastPath", pathname);

  const handleClick = (info) => {
    info.jsEvent.preventDefault();
    const urlEvento = info.event.url?.split("/")[1] === "shows";
    if (urlEvento) {
      navigate(info.event.url);
    } else {
      window.open(info.event.url, "_blank");
    }
    // navigate(info.event.url);
  };

  const handleTitle = (info) => {
    const { date } = info;
    return month[date.month] + " - " + date.year;
  };

  return (
    <>
      <div className="container animate__animated animate__fadeIn animate__fast">
        <div className="row animate__animated animate__fadeIn ">
          <div className="col-12 text-center mt-3 ">
            <h2 style={{ fontSize: "30px" }} className="my-3 tittle-h2">
              Temporada
            </h2>
          </div>
        </div>

        <div className="row mt-5 container-calendar">
          <div className="col-12">
            <FullCalendar
              plugins={fullPlugins}
              initialView={
                window.innerWidth < 1000 ? "listMonth" : "dayGridMonth"
              }
              headerToolbar={
                window.innerWidth < 1000
                  ? headerToolbarOptionsResponsive
                  : headerToolbarOptionsDesktop
              }
              height={"70vh"}
              titleFormat={handleTitle}
              eventBackgroundColor="#BA2828"
              eventBorderColor="#BA2828"
              events={fullEvents}
              locale={"es"}
              buttonText={buttonTextOptions}
              themeSystem={"bootstrap5"}
              eventClick={handleClick}
              eventTimeFormat={eventTimeFormat}
              noEventsContent={"No hay eventos disponibles"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
