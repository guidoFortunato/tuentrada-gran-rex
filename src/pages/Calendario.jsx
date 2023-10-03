import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import listViewPlugin from "@fullcalendar/list";
import { HeaderPages } from "../components/pages/";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

// const { VITE_API_INFO_GENERAL, VITE_EMAIL, VITE_PASS } = getEnvVariables();

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
  start: "title",
  center: "",
  end: "today prev,next",
};

const headerToolbarOptionsDesktop = {
  start: "today prev,next",
  center: "title",
  end: "dayGridMonth,dayGridWeek",
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
  const {
    dataInfoGeneral,
    eventosCalendario,
    handleButtonsCollapse: handleNavBarCollapse,
  } = useContext(EventosContext);
  // const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  localStorage.setItem("lastPath", pathname);
  // console.log({eventosCalendario})
  // console.log({dataInfoGeneral})
  const src = dataInfoGeneral?.pages[1]?.image?.src
    ? dataInfoGeneral?.pages[1]?.image?.src
    : undefined;

  const srcset = dataInfoGeneral?.pages[1]?.image?.srcset
    ? dataInfoGeneral?.pages[1]?.image?.srcset
    : undefined;

  const alt = dataInfoGeneral?.pages[1]?.image?.alt
    ? dataInfoGeneral?.pages[1]?.image?.alt
    : undefined;

  const title = dataInfoGeneral?.pages[1]?.title;

  const handleClick = (info) => {
    info.jsEvent.preventDefault();
    // console.log({ def: info.event._def });
    const { internalState } = info.event._def.extendedProps;
    // console.log({internalState})

    if (internalState !== "soon") {
      navigate(info.event._def.url);
    }
  };

  const handleTitle = (info) => {
    const { date } = info;
    return month[date.month] + " - " + date.year;
  };

  const handleEventMount = (info) => {
    // console.log({extendedProps: info.event._def.extendedProps})
    // console.log({disponibility: info.event._def.extendedProps.disponibility})
    // console.log({reason: info.event._def.extendedProps.reason})
    // console.log(info)
    if (window.innerWidth > 1023) {
      const status =
        info.event._def.extendedProps.disponibility === "LIMITED"
          ? "LIMITED"
          : info.event._def.extendedProps.disponibility === "NONE" &&
            info.event._def.extendedProps.reason;

      const { internalState } = info.event._def.extendedProps;
      // console.log({internalState})
      if (internalState === "soon") {
        const tooltip = tippy(info.el, {
          content: "Próximamente",
          placement: "top",
          theme: "dark",
        });
        return tooltip;
      }
      if (internalState === "cancel") {
        const tooltip = tippy(info.el, {
          content: "Cancelado",
          placement: "top",
          theme: "dark",
        });
        return tooltip;
      }

      if (status === "SOLD_OUT") {
        const tooltip = tippy(info.el, {
          content: "Agotado",
          placement: "top",
          theme: "dark",
        });
        return tooltip;
      }
      if (status === "SUSPENDED") {
        const tooltip = tippy(info.el, {
          content: "Suspendido",
          placement: "top",
          theme: "dark",
        });
        return tooltip;
      }
      if (status === "CANCELED") {
        const tooltip = tippy(info.el, {
          content: "Cancelado",
          placement: "top",
          theme: "dark",
        });
        return tooltip;
      }
      if (status === "LIMITED") {
        const tooltip = tippy(info.el, {
          content: "Últimas entradas!",
          placement: "top",
          theme: "dark",
        });
        return tooltip;
      }
    }
  };

  useEffect(() => {
    handleNavBarCollapse();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (eventosCalendario === null || dataInfoGeneral.length === 0)
    return <span></span>;

  return (
    <>
      <div className="container mx-auto mb-5">
        <HeaderPages src={src} srcSet={srcset} alt={alt} title={title} />
        <div className="container mx-auto mb-5">
          <div className="mt-10 bg-white px-5 2xl:px-0">
            <div className="grid grid-cols-1 ">
              <FullCalendar
                buttonText={buttonTextOptions}
                eventBackgroundColor={dataInfoGeneral.backgroundButton}
                eventBorderColor={dataInfoGeneral.backgroundButton}
                eventTextColor={dataInfoGeneral.colorButton}
                eventClick={handleClick}
                eventDidMount={handleEventMount}
                events={eventosCalendario}
                eventTimeFormat={eventTimeFormat}
                headerToolbar={
                  window.innerWidth < 1023
                    ? headerToolbarOptionsResponsive
                    : headerToolbarOptionsDesktop
                }
                height={"100vh"}
                initialView={
                  window.innerWidth < 1023 ? "listMonth" : "dayGridMonth"
                }
                locale={"es"}
                noEventsContent={"No hay eventos disponibles"}
                plugins={fullPlugins}
                themeSystem={"standard"}
                titleFormat={handleTitle}
                contentHeight="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
