// import { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import { EventosContext } from "../context/EventosProvider";
// import { Spinner } from "../components";
// import { getData, getEnvVariables } from "../helpers";

// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import bootstrap5Plugin from "@fullcalendar/bootstrap5";
// import listViewPlugin from "@fullcalendar/list";
// import tippy from "tippy.js";

// import "tippy.js/dist/tippy.css";
// import "tippy.js/animations/scale.css";

// import "../css/calendario.css";

// const { VITE_API_INFO_GENERAL, VITE_EMAIL, VITE_PASS } = getEnvVariables();
// // const newEvents = [];

// const month = [
//   "Enero",
//   "Febrero",
//   "Marzo",
//   "Abril",
//   "Mayo",
//   "Junio",
//   "Julio",
//   "Agosto",
//   "Septiembre",
//   "Octubre",
//   "Noviembre",
//   "Diciembre",
// ];

// const fullPlugins = [
//   dayGridPlugin,
//   timeGridPlugin,
//   interactionPlugin,
//   bootstrap5Plugin,
//   listViewPlugin,
// ];

// const headerToolbarOptionsResponsive = {
//   start: "title", // will normally be on the left. if RTL, will be on the right
//   center: "",
//   end: "today prev,next", // will normally be on the right. if RTL, will be on the left
// };

// const headerToolbarOptionsDesktop = {
//   start: "today prev,next", // will normally be on the left. if RTL, will be on the right
//   center: "title",
//   end: "dayGridMonth,dayGridWeek", // will normally be on the right. if RTL, will be on the left
// };

// const buttonTextOptions = {
//   today: "Hoy",
//   month: "Mes",
//   week: "Semana",
//   day: "Día",
//   list: "Lista",
// };

// const eventTimeFormat = {
//   hour: "2-digit",
//   minute: "2-digit",
// };

// export const Calendario = () => {
//   const { idVenue, dataInfoGeneral } = useContext(EventosContext);
//   const [data, setData] = useState(null);
//   const navigate = useNavigate();
//   const { pathname } = useLocation();
//   const newEvents = [];
//   // console.log({data});

//   localStorage.setItem("lastPath", pathname);

//   for (let i = 0; i < data?.length; i++) {
//     for (let j = 0; j < data[i].performances.length; j++) {
//       newEvents.push({
//         id: data[i].id,
//         start: data[i].performances[j].start,
//         title: data[i].title.toUpperCase(),
//         url: `${data[i].url}/${data[i].id}`,
//         display: data[i].display,
//         status: data[i].performances[j].disponibility,
//       });
//     }
//   }

//   const handleClick = (info) => {
//     info.jsEvent.preventDefault();
//     const statusEvento =
//       info.event.extendedProps.status?.toLowerCase() !== "próximamente";

//     if (statusEvento) {
//       navigate(info.event.url);
//     }
//   };

//   const handleTitle = (info) => {
//     const { date } = info;
//     return month[date.month] + " - " + date.year;
//   };

//   const handleEventMount = (info) => {
//     const status = info.event.extendedProps.status?.toLowerCase();
//     if (status === "agotado") {
//       const tooltip = tippy(info.el, {
//         content: "Agotado",
//         placement: "top",
//         theme: "dark",
//       });
//       return tooltip;
//     }
//     if (status === "próximamente") {
//       const tooltip = tippy(info.el, {
//         content: "Próximamente",
//         placement: "top",
//         theme: "dark",
//       });
//       return tooltip;
//     }
//     if (status === "cancelado") {
//       const tooltip = tippy(info.el, {
//         content: "Cancelado",
//         placement: "top",
//         theme: "dark",
//       });
//       return tooltip;
//     }
//     if (status === "reprogramado") {
//       const tooltip = tippy(info.el, {
//         content: "Reprogramado",
//         placement: "top",
//         theme: "dark",
//       });
//       return tooltip;
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 100);
//   }, []);

//   useEffect(() => {
//     if (idVenue !== "") {
//       const getInfo = async () => {
//         const {data} = await getData( VITE_API_INFO_GENERAL + idVenue + "/calendar", VITE_EMAIL, VITE_PASS);
//         // console.log({data})
//         setData(data);
//       };
//       getInfo();
//     }
//   }, [idVenue]);

//   if (data === null || dataInfoGeneral.length === 0) return <Spinner />;
  
//   return (
//     <>
//       <div className="container animate__animated animate__fadeIn animate__fast">
//         <div className="row animate__animated animate__fadeIn ">
//           <div className="col-12 text-center mt-3 ">
//             <h2 style={{ fontSize: "30px" }} className="my-3 tittle-h2">
//               {dataInfoGeneral?.pages[1].title}
//             </h2>
//           </div>
//         </div>

//         <div className="row mt-5 container-calendar">
//           <div className="col-12">
//             <FullCalendar
//               // eventBackgroundColor="red"
//               // eventClassNames={eventClassNames}
//               // eventMouseEnter={ handleMouseEnter }
//               buttonText={buttonTextOptions}
//               eventBackgroundColor="#ba2828"
//               eventBorderColor="#ba2828"
//               eventClick={handleClick}
//               eventDidMount={handleEventMount}
//               events={newEvents}
//               eventTimeFormat={eventTimeFormat}
//               headerToolbar={window.innerWidth < 1023? headerToolbarOptionsResponsive: headerToolbarOptionsDesktop }
//               height={"70vh"}
//               initialView={window.innerWidth < 1023 ? "listMonth" : "dayGridMonth"}
//               locale={"es"}
//               noEventsContent={"No hay eventos disponibles"}
//               plugins={fullPlugins}
//               themeSystem={"bootstrap5"}
//               titleFormat={handleTitle}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { LoadingVacio } from "../components";
import { getEnvVariables } from "../helpers";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import listViewPlugin from "@fullcalendar/list";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "../css/calendario.css";

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
  const { idVenue, dataInfoGeneral, eventosCalendario } = useContext(EventosContext);
  // const [data, setData] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const newEvents = [];

  localStorage.setItem("lastPath", pathname);

  for (let i = 0; i < eventosCalendario?.length; i++) {
    for (let j = 0; j < eventosCalendario[i].performances.length; j++) {
      newEvents.push({
        id: eventosCalendario[i].id,
        start: eventosCalendario[i].performances[j].start,
        title: eventosCalendario[i].title.toUpperCase(),
        url: `${eventosCalendario[i].url}/${eventosCalendario[i].id}`,
        display: eventosCalendario[i].display,
        status: eventosCalendario[i].performances[j].disponibility,
      });
    }
  }

  const handleClick = (info) => {
    info.jsEvent.preventDefault();
    const statusEvento = info.event.extendedProps.status?.toLowerCase() !== "próximamente";

    if (statusEvento) {
      navigate(info.event.url);
    }
  };

  const handleTitle = (info) => {
    const { date } = info;
    return month[date.month] + " - " + date.year;
  };

  const handleEventMount = (info) => {
    const status = info.event.extendedProps.status?.toLowerCase();
    if (status === "agotado") {
      const tooltip = tippy(info.el, {
        content: "Agotado",
        placement: "top",
        theme: "dark",
      });
      return tooltip;
    }
    if (status === "próximamente") {
      const tooltip = tippy(info.el, {
        content: "Próximamente",
        placement: "top",
        theme: "dark",
      });
      return tooltip;
    }
    if (status === "cancelado") {
      const tooltip = tippy(info.el, {
        content: "Cancelado",
        placement: "top",
        theme: "dark",
      });
      return tooltip;
    }
    if (status === "reprogramado") {
      const tooltip = tippy(info.el, {
        content: "Reprogramado",
        placement: "top",
        theme: "dark",
      });
      return tooltip;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  // useEffect(() => {
  //   if (idVenue !== "") {
  //     const getInfo = async () => {
  //       const { data } = await getData(
  //         VITE_API_INFO_GENERAL + idVenue + "/calendar",
  //         VITE_EMAIL,
  //         VITE_PASS
  //       );
  //       setData(data);
  //     };
  //     getInfo();
  //   }
  // }, [idVenue]);

  if (eventosCalendario === null || dataInfoGeneral.length === 0) return <LoadingVacio />;

  return (
    <>
      <div className="container mx-auto mb-5">
       

        <div className="row">
          <div className="col-12">
            <section
              style={{
                backgroundImage: `url(${dataInfoGeneral.backgroundImage})`,
              }}
              className="bg-no-repeat bg-cover bg-center container mx-auto"
            >
              <h2
                style={{ height: "40vh" }}
                className=" text-3xl flex lg:justify-start justify-center items-center lg:items-end text-white p-10 my-3 tittle-h2"
              >
                {dataInfoGeneral.pages[1].title}
              </h2>
            </section>
          </div>
        </div>

        <div className="container mx-auto mb-5">
          <div className="row mt-5 container-calendar px-4 lg:px-0">
            <div className="col-12">
              <FullCalendar
                buttonText={buttonTextOptions}
                eventBackgroundColor="#ba2828"
                eventBorderColor="#ba2828"
                eventClick={handleClick}
                eventDidMount={handleEventMount}
                events={newEvents}
                eventTimeFormat={eventTimeFormat}
                headerToolbar={
                  window.innerWidth < 1023
                    ? headerToolbarOptionsResponsive
                    : headerToolbarOptionsDesktop
                }
                height={"70vh"}
                initialView={
                  window.innerWidth < 1023 ? "listMonth" : "dayGridMonth"
                }
                locale={"es"}
                noEventsContent={"No hay eventos disponibles"}
                plugins={fullPlugins}
                themeSystem={"bootstrap5"}
                titleFormat={handleTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
