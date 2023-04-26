import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "../components";
import { useFetch } from "../helpers";

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

const urlTestEventos = "/src/json/eventosTest.json";

export const Calendario = () => {
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext)
  const { data: dataEventos, isLoading: isLoadingEventos } = useFetch(urlTestEventos);

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const newEvents = []
  
  localStorage.setItem("lastPath", pathname);

  for (let i = 0; i < dataEventos?.eventos.length; i++) {
    for (let j = 0; j < dataEventos?.eventos[i].fechas.length; j++) {
      newEvents.push({id: dataEventos?.eventos[i].id, start: dataEventos?.eventos[i].fechas[j].start, title: dataEventos?.eventos[i].nombre.toUpperCase(), url: dataEventos?.eventos[i].links.path, display: dataEventos?.eventos[i].display, status: dataEventos?.eventos[i].fechas[j].estadoCalendario})      
    }    
  }

  const handleClick = (info) => {

    info.jsEvent.preventDefault();
    const statusEvento =  info.event.extendedProps.status?.toLowerCase() !== "próximamente";

    if (statusEvento) {
      navigate(info.event.url);
    }
    


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

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoadingNavbar) {
    return <Spinner/>;
  }
  if (isLoadingEventos) {
    return <Spinner/>;
  }

  return (
    <>
      <div className="container animate__animated animate__fadeIn animate__fast">
        <div className="row animate__animated animate__fadeIn ">
          <div className="col-12 text-center mt-3 ">
            <h2 style={{ fontSize: "30px" }} className="my-3 tittle-h2">
              { dataNavbar?.items[1].titulo1}
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
              events={newEvents}
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
