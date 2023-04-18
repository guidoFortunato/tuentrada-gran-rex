import { useLocation, useNavigate } from "react-router-dom";

import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import listViewPlugin from "@fullcalendar/list";
import tippy from "tippy.js";

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

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
    id: 2,
    date: "2023-05-07",
    start: "2023-05-07T21:30:00",
    end: "-",
    title: "SERGIO TORRES",
    url: "/shows/sergio-torres/2",
    display: "block",
    status: "reprogramado",
  },
  {
    id: 3,
    date: "2023-04-21",
    start: "2023-04-21T20:30:00",
    end: "-",
    title: "MIRANDA!",
    url: "/shows/miranda/3",
    display: "block",
    status: "agotado",
  },
  {
    id: 4,
    date: "2023-04-22",
    start: "2023-04-22T20:30:00",
    end: "-",
    title: "MIRANDA!",
    url: "/shows/miranda/3",
    display: "block",
    status: "agotado",
  },
  {
    id: 5,
    date: "2023-04-23",
    start: "2023-04-23T20:00:00",
    end: "-",
    title: "MIRANDA!",
    url: "/shows/miranda/3",
    display: "block",
    status: "agotado",
  },
  {
    id: 6,
    date: "2023-04-28",
    start: "2023-04-28T20:30:00",
    end: "-",
    title: "MASTER STROKE",
    url: "/shows/queen/4",
    display: "block",
    status: "disponible",
  },
  {
    id: 7,
    date: "2023-04-29",
    start: "2023-04-29T20:30:00",
    end: "-",
    title: "DAMIÁN CÓRDOBA",
    url: "/shows/damian-cordoba/5",
    display: "block",
    status: "disponible",
  },
  {
    id: 8,
    date: "2023-05-05",
    start: "2023-05-05T20:30:00",
    end: "-",
    title: "INTERNATIONAL FESTIVAL BALLET FOR THE PEACE",
    url: "/shows/festival-ballet/6",
    display: "block",
    status: "cancelado",
  },
  {
    id: 9,
    date: "2023-05-06",
    start: "2023-05-06T20:30:00",
    end: "-",
    title: "INTERNATIONAL FESTIVAL BALLET FOR THE PEACE",
    url: "/shows/festival-ballet/6",
    display: "block",
    status: "cancelado",
  },
  {
    id: 10,
    date: "2023-05-12",
    start: "2023-05-12T20:30:00",
    end: "-",
    title: "DALE Q’ VA",
    url: "/shows/daleqva/7",
    display: "block",
    status: "disponible",
  },
  {
    id: 11,
    date: "2023-05-13",
    start: "2023-05-13T20:30:00",
    end: "-",
    title: "TURF",
    url: "/shows/turf/8",
    display: "block",
    status: "disponible",
  },
  {
    id: 12,
    date: "2023-05-14",
    start: "2023-05-14T20:30:00",
    end: "-",
    title: "THE BEATS",
    url: "/shows/the-beats/9",
    display: "block",
    status: "disponible",
  },
  {
    id: 13,
    date: "2023-05-19",
    start: "2023-05-19T20:30:00",
    end: "-",
    title: "MASSACRE",
    url: "/shows/massacre/10",
    display: "block",
    status: "disponible",
  },
  {
    id: 14,
    date: "2023-05-20",
    start: "2023-05-20T12:00:00",
    end: "-",
    title: "JD PANTOJA KIM LOAIZA",
    url: "/shows/jdpantoja-kimloaiza/11",
    display: "block",
    status: "agotado",
  },
  {
    id: 15,
    date: "2023-05-21",
    start: "2023-05-21T19:00:00",
    end: "-",
    title: "JD PANTOJA KIM LOAIZA",
    url: "/shows/jdpantoja-kimloaiza/11",
    display: "block",
    status: "agotado",
  },
  {
    id: 16,
    date: "2023-05-20",
    start: "2023-05-20T21:00:00",
    end: "-",
    title: "SERGIO GALLEGUILLO",
    url: "/shows/sergio-galleguillo/12",
    display: "block",
    status: "disponible",
  },
  {
    id: 17,
    date: "2023-06-01",
    start: "2023-06-01T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 18,
    date: "2023-06-02",
    start: "2023-06-02T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 19,
    date: "2023-06-03",
    start: "2023-06-03T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 20,
    date: "2023-06-03",
    start: "2023-06-03T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 21,
    date: "2023-06-04",
    start: "2023-06-04T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 22,
    date: "2023-06-04",
    start: "2023-06-04T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 23,
    date: "2023-06-08",
    start: "2023-06-08T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 24,
    date: "2023-06-09",
    start: "2023-06-09T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 25,
    date: "2023-06-10",
    start: "2023-06-10T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 26,
    date: "2023-06-10",
    start: "2023-06-10T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 27,
    date: "2023-06-11",
    start: "2023-06-11T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 28,
    date: "2023-06-11",
    start: "2023-06-11T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 29,
    date: "2023-06-14",
    start: "2023-06-14T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 30,
    date: "2023-06-15",
    start: "2023-06-15T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 31,
    date: "2023-06-16",
    start: "2023-06-16T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 32,
    date: "2023-06-17",
    start: "2023-06-17T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 33,
    date: "2023-06-17",
    start: "2023-06-17T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 34,
    date: "2023-06-18",
    start: "2023-06-18T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 35,
    date: "2023-06-18",
    start: "2023-06-18T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 36,
    date: "2023-06-20",
    start: "2023-06-20T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 37,
    date: "2023-06-20",
    start: "2023-06-20T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 38,
    date: "2023-06-22",
    start: "2023-06-22T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 39,
    date: "2023-06-23",
    start: "2023-06-23T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 40,
    date: "2023-06-24",
    start: "2023-06-24T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 41,
    date: "2023-06-24",
    start: "2023-06-24T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 41,
    date: "2023-06-25",
    start: "2023-06-25T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 42,
    date: "2023-06-25",
    start: "2023-06-25T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 43,
    date: "2023-06-28",
    start: "2023-06-28T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 44,
    date: "2023-06-29",
    start: "2023-06-29T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 45,
    date: "2023-06-30",
    start: "2023-06-30T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 45,
    date: "2023-07-01",
    start: "2023-07-01T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 46,
    date: "2023-07-01",
    start: "2023-07-01T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 47,
    date: "2023-07-02",
    start: "2023-07-02T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 48,
    date: "2023-07-02",
    start: "2023-07-02T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 49,
    date: "2023-07-05",
    start: "2023-07-05T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 50,
    date: "2023-07-06",
    start: "2023-07-06T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 51,
    date: "2023-07-07",
    start: "2023-07-07T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 52,
    date: "2023-07-08",
    start: "2023-07-08T15:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 53,
    date: "2023-07-08",
    start: "2023-07-08T19:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 54,
    date: "2023-07-09",
    start: "2023-07-09T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 55,
    date: "2023-07-09",
    start: "2023-07-09T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 56,
    date: "2023-07-12",
    start: "2023-07-12T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 57,
    date: "2023-07-13",
    start: "2023-07-13T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 58,
    date: "2023-07-14",
    start: "2023-07-14T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 58,
    date: "2023-07-14",
    start: "2023-07-14T20:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 59,
    date: "2023-07-15",
    start: "2023-07-15T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 60,
    date: "2023-07-15",
    start: "2023-07-15T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 61,
    date: "2023-07-16",
    start: "2023-07-16T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 62,
    date: "2023-07-16",
    start: "2023-07-16T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 63,
    date: "2023-07-17",
    start: "2023-07-17T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 64,
    date: "2023-07-17",
    start: "2023-07-17T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 65,
    date: "2023-07-19",
    start: "2023-07-19T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 66,
    date: "2023-07-19",
    start: "2023-07-19T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 67,
    date: "2023-07-20",
    start: "2023-07-20T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 68,
    date: "2023-07-20",
    start: "2023-07-20T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 69,
    date: "2023-07-21",
    start: "2023-07-21T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 70,
    date: "2023-07-21",
    start: "2023-07-21T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 71,
    date: "2023-07-22",
    start: "2023-07-22T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 72,
    date: "2023-07-22",
    start: "2023-07-22T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 73,
    date: "2023-07-23",
    start: "2023-07-23T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 74,
    date: "2023-07-23",
    start: "2023-07-23T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 75,
    date: "2023-07-24",
    start: "2023-07-24T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 76,
    date: "2023-07-24",
    start: "2023-07-24T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 77,
    date: "2023-07-26",
    start: "2023-07-26T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 78,
    date: "2023-07-26",
    start: "2023-07-26T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 79,
    date: "2023-07-27",
    start: "2023-07-27T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 80,
    date: "2023-07-27",
    start: "2023-07-27T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 81,
    date: "2023-07-28",
    start: "2023-07-28T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 82,
    date: "2023-07-28",
    start: "2023-07-28T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 83,
    date: "2023-07-29",
    start: "2023-07-29T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 84,
    date: "2023-07-29",
    start: "2023-07-29T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 85,
    date: "2023-07-30",
    start: "2023-07-30T14:30:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 86,
    date: "2023-07-30",
    start: "2023-07-30T18:00:00",
    end: "-",
    title: "MATILDA",
    url: "/shows/matilda/13",
    display: "block",
    status: "disponible",
  },
  {
    id: 87,
    date: "2023-08-27",
    start: "2023-08-27T20:00:00",
    end: "-",
    title: "BRYNDIS",
    url: "/shows/bxs/14",
    display: "block",
    status: "disponible",
  },
  {
    id: 88,
    date: "2023-09-10",
    start: "2023-09-10T20:00:00",
    end: "-",
    title: "DANIEL AGOSTINI",
    url: "/shows/daniel-agostini/15",
    display: "block",
    status: "disponible",
  },
  {
    id: 89,
    date: "2023-09-16",
    start: "2023-09-16T20:30:00",
    end: "-",
    title: "CHILI FERNANDEZ",
    url: "/shows/chili-fernandez/16",
    display: "block",
    status: "Disponible",
  },
  {
    id: 90,
    date: "2023-08-26",
    start: "2023-08-26T20:30:00",
    end: "-",
    title: "JULIETA VENEGAS",
      // url: "/shows/julieta-venegas/17",
    url: "",
    display: "block",
    status: "Próximamente",
  },
  {
    id: 91,
    date: "2023-11-25",
    start: "2023-11-25T20:30:00",
    end: "-",
    title: "PEROTÁ CHINGÓ",
    url: "/shows/perota-chingo/18",
    display: "block",
    status: "Disponible",
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


  // const eventClassNames = (arg) => {
  //   let classNames = [""];
  //   if (arg.event.extendedProps.status.toLowerCase() === "disponible") {
  //     classNames.push("evento-disponible");
  //   } else {
  //     classNames.push("evento-no-disponible");
  //   }
  //   return classNames;
  // };

  const handleClick = (info) => {
    info.jsEvent.preventDefault();
    // const urlEvento = info.event.url?.split("/")[1].toLowerCase() === "shows";
    const statusEvento =  info.event.extendedProps.status?.toLowerCase() !== "próximamente";

    if (statusEvento) {
      navigate(info.event.url);
    }
    
    
    // if (urlEvento) {
    //   if (statusEvento) {
    //     navigate(info.event.url);
    //   }
    // } else {
    //   window.open(info.event.url, "_blank");
    // }

  };

  const handleTitle = (info) => {
    const { date } = info;
    return month[date.month] + " - " + date.year;
  };

  const handleEventMount = ( info ) => {

    const status = info.event.extendedProps.status?.toLowerCase()
      if (status === "agotado") {
        const tooltip = tippy(info.el, {
          content: 'Agotado',
          placement: 'top',
          theme: 'dark',
        });
        return tooltip        
      }
      if (status === "próximamente") {
        const tooltip = tippy(info.el, {
          content: 'Próximamente',
          placement: 'top',
          theme: 'dark',
        });
        return tooltip        
      }
      if (status === "cancelado") {
        const tooltip = tippy(info.el, {
          content: 'Cancelado',
          placement: 'top',
          theme: 'dark',
        });
        return tooltip        
      }
      if (status === "reprogramado") {
        const tooltip = tippy(info.el, {
          content: 'Reprogramado',
          placement: 'top',
          theme: 'dark',
        });
        return tooltip        
      }
  }

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
              // eventBackgroundColor="red"
              // eventClassNames={eventClassNames}
              // eventMouseEnter={ handleMouseEnter }
              buttonText={buttonTextOptions}
              eventBackgroundColor="#ba2828"
              eventBorderColor="#ba2828"
              eventClick={handleClick}
              eventDidMount={ handleEventMount }
              events={fullEvents}
              eventTimeFormat={eventTimeFormat}
              headerToolbar={ window.innerWidth < 1023 ? headerToolbarOptionsResponsive : headerToolbarOptionsDesktop }
              height={"70vh"}
              initialView={ window.innerWidth < 1023 ? "listMonth" : "dayGridMonth" }
              locale={"es"}
              noEventsContent={"No hay eventos disponibles"}
              plugins={fullPlugins}
              themeSystem={"bootstrap5"}
              titleFormat={handleTitle}
            />
          </div>
        </div>
      </div>
    </>
  );
};
