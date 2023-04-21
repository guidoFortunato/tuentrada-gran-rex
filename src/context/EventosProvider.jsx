import { createContext, useEffect, useState } from "react";
import Fuse from "fuse.js";
// import "./eventos.json"

export const EventosContext = createContext();

const eventosViejos =[
  {
    id: 1,
    descripcion: "<strong> Todo listo para la fiesta MIRANDA! </strong> <br /> La banda pop más icónica de la escena hispanoamericana, Miranda! cierra el año anunciando su nuevo álbum HOTEL MIRANDA! y las fechas de presentación para el 21 de abril en el imponente Teatro Gran Rex. Con más de 20 años de trayectoria, a la banda liderada por Ale Sergi y Juliana Gattas le sobran los motivos para celebrar y lo harán al mejor estilo Miranda! <br /> <br />     El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>     <ul>        <li> Viernes 21 de abril 20:30hs </li>       <li> Sábado 22 de abril 20:30hs </li>       <li> Domingo 23 de abril 20:00hs </li>    </ul> ",
    disabled: false,
    display: "block",
    estado: "agotado",
    fechas: [
      {
        dia: "viernes 21 de abril",
        hora: "20:30HS",
        start: "2023-04-21T20:30:00",
        end: "",
        estadoCalendario: "agotado"
      },
      {
        dia: "sábado 22 de abril",
        hora: "20:30HS",
        start: "2023-04-22T20:30:00",
        end: "",
        estadoCalendario: "agotado"
      },
      {
        dia: "domingo 23 de abril",
        hora: "20:00HS",
        start: "2023-04-23T20:00:00",
        end: "",
        estadoCalendario: "agotado"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/miranda/teatro-gran-rex",
      path: "/shows/miranda/1"
    },
    imagenes: {
      evento: "storage/imagenes/miranda.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "miranda!",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "11.500"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "10.500"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "9.500"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "8.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "7.500"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "8.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "7.500"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "6.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "6.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "5.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "5.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "4.500"
      }
    ]
  },

  {
    id: 2,
    descripcion: "<strong>Master Stroke</strong>, integrado por Ema Caradoso en voz, Brian Morua en guitarra, Manuel Olveira en bajo, Agustín Albertini en batería y Alberto Ludueña en teclados, es la banda tributo a Queen destacada por el mismo Brian May en sus redes sociales y la que Ángel Mahler sumó a sus espectáculos de Rapsodia Bohemia Sinfónico en 2020. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li> Viernes 28 de abril 20:30hs </li>     </ul>   ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "sábado 28 de abril",
        hora: "20:30HS",
        start: "2023-04-28T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/queen-por-master-stroke/teatro-gran-rex",
      path: "/shows/queen/2"
    },
    imagenes: {
      evento: "storage/imagenes/queen.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "master stroke",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "7.500"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "7.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "6.500"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "5.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "5.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "7.000"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "5.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "4.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.000"
      }
    ]
  },
  {
    id: 3,
    descripcion: "Damián Córdoba es un fenómeno del cuarteto que se mantiene vigente en el tiempo. Con más de 20 años de trayectoria, continúa llenando en cada presentación, bailes y festivales donde se presenta, convocando multitudes. Así lo viene demostrando con su participación en los principales festivales del país: Festival de Jesús María, Cosquín Cuarteto, Festival de Peñas de Villa María, y muchos, muchos más. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li> Sábado 29 de abril 20:30hs </li>      </ul>      ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "sábado 29 de abril",
        hora: "20:30HS",
        start: "2023-04-29T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/damian-cordoba/teatro-gran-rex",
      path: "/shows/damian-cordoba/3"
    },
    imagenes: {
      evento:
        "storage/imagenes/damian_cordoba.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "damián córdoba",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "8.500"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "8.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "7.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "6.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "6.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "6.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "5.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.000"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "2.500"
      }
    ]
  },
  {
    id: 4,
    descripcion: "International Festival Ballet for the Peace se llevará a cabo los días Viernes 5 y Sabado 6 de Mayo de 2023 en el Teatro Gran Rex. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li>Cancelado: Viernes 5 de mayo 20:30hs </li>      <li> Cancelado: Sábado 6 de mayo 20:30hs </li>       </ul>      ",
    disabled: false,
    display: "block",
    estado: "cancelado",
    fechas: [
      {
        dia: "viernes 5 de mayo",
        hora: "20:30HS",
        start: "2023-05-05T20:30:00",
        end: "",
        estadoCalendario: "cancelado"
      },
      {
        dia: "sábado 6 de mayo",
        hora: "20:30HS",
        start: "2023-05-06T20:30:00",
        end: "",
        estadoCalendario: "cancelado"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/international-festival-ballet-peace/teatro-gran-rex",
      path: "/shows/festival-ballet/4"
    },
    imagenes: {
      evento:
        "storage/imagenes/festival_ballet.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "international festival ballet",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "9.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "8.500"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "8.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "7.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "6.500"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "7.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.500"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.000"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "4.500"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "4.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "4.000"
      }
    ]
  },

  {
    id: 5,
    descripcion:"Vuelve al Gran Rex el máximo exponente de la cumbia santafecina, Sergio Torres 'LA VOZ' y esta vez vamos a festejarsu cumpleaños en el Rex, en una noche única y especial. Vuelve el Negro al Gran Rex y no te lo podes perder. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul> <li> Reprogramado: Domingo 7 de mayo 21:30hs </li>       </ul>      ",
    disabled: false,
    display: "block",
    estado: "reprogramado",
    fechas: [
      {
        dia: "domingo 7 de mayo",
        hora: "21:30HS",
        start: "2023-05-07T21:30:00",
        end: "",
        estadoCalendario: "reprogramado"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/sergio-torres/teatro-gran-rex",
      path: "/shows/sergio-torres/5"
    },
    imagenes: {
      evento:
        "storage/imagenes/sergio_torres.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "sergio torres",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "8.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "7.500"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "7.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "6.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "6.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "6.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "5.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "4.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.500"
      }
    ]
  },

  {
    id: 6,
    descripcion: "Dale Q’ Va es, sin dudas, uno de los grupos cuarteteros del momento, se encuentran viviendo un presente excelente a lo largo y ancho de todo el país.  <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li> Viernes 12 de mayo 20:30hs </li>      </ul>      ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "viernes 12 de mayo",
        hora: "20:30HS",
        start: "2023-05-12T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/dale-qva/teatro-gran-rex",
      path: "/shows/daleqva/6"
    },
    imagenes: {
      evento:
        "storage/imagenes/dale_qva.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "dale q’ va",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "8.500"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "8.500"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "7.500"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "7.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "6.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "7.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "7.500"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "5.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.000"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.000"
      }
    ]
  },

  {
    id: 7,
    descripcion: "Turf se presenta el 13 de Mayo en el Teatro Gran Rex. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li>Sábado 13 de mayo 20:30hs</li>      </ul>    ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "sábado 13 de mayo",
        hora: "20:30HS",
        start: "2023-05-13T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/turf/teatro-gran-rex",
      path: "/shows/turf/7"
    },
    imagenes: {
      evento: "storage/imagenes/turf.webp",
      plano: 
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "turf",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "7.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "6.500"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "6.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "5.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "5.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "5.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "5.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "4.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "4.200"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.000"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.500"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.000"
      }
    ]
  },

  {
    id: 8,
    descripcion: "The Beats se presentan el Domingo 14 Mayo 20:30 hs. en el Teatro Gran Rex. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li> Domingo 14 de mayo 20:30hs </li>     </ul>    ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "domingo 14 de mayo",
        hora: "20:30HS",
        start: "2023-05-14T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/beats/teatro-gran-rex",
      path: "/shows/the-beats/8"
    },
    imagenes: {
      evento:
        "storage/imagenes/the_beats.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "the beats",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "6.500"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "6.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "5.500"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "4.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "4.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "4.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "4.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "3.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "3.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "2.800"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "2.800"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "2.500"
      }
    ]
  },
  {
    id: 9,
    descripcion: "Massacre vuelve a la calle Corrientes con Riesgo Rex un show que    sorprenderá a propios y extraños.    El 19 de Mayo de 2023, la psicodelia, la adrenalina y la sorpresa, serán    el maridaje perfecto para que Riesgo Rex sea otro suceso en la    trayectoria de la banda. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li> Viernes 19 de mayo 20:30hs </li>       </ul>    ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "viernes 19 de mayo",
        hora: "20:30HS",
        start: "2023-05-19T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/massacre/teatro-gran-rex",
      path: "/shows/massacre/9"
    },
    imagenes: {
      evento:
        "storage/imagenes/massacre.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "massacre",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "10.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "8.500"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "8.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "6.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "5.500"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "5.000"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "5.500"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.000"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        pprecio: "4.300"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.000"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.700"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.500"
      }
    ]
  },
  {
    id: 10,
    descripcion: "Kim Loaiza y JD Pantoja, los Youtubers y Cantantes más populares del momento, anuncian su último tour juntos el cual lleva por nombre “BYE BYE”, quiénes cantarán por última vez juntos en un mismo escenario su mayores éxitos.<br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias.  <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>      <li> Sábado 20 de mayo 12:00hs </li>      <li> Domingo 21 de mayo 19:00hs </li>   </ul>    ",
    disabled: false,
    display: "block",
    estado: "agotado",
    fechas: [
      {
        dia: "sábado 20 de mayo",
        hora: "12:00HS",
        start: "2023-05-20T12:00:00",
        end: "",
        estadoCalendario: "agotado"
      },
      {
        dia: "domingo 21 de mayo",
        hora: "19:00HS",
        start: "2023-05-21T19:00:00",
        end: "",
        estadoCalendario: "agotado"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/jd-pantoja-kim-loaiza/teatro-gran-rex",
      path: "/shows/jdpantoja-kimloaiza/10"
    },
    imagenes: {
      evento:
        "storage/imagenes/jdpantoja_kimloaiza.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "jd pantoja kim loaiza",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "9.600"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        pprecio: "8.400"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "8.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "7.200"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "6.400"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        pprecio: "8.400"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "7.200"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "6.400"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "5.600"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.800"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.600"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.200"
      }
    ]
  },

  {
    id: 11,
    descripcion: "Sergio Galleguillo lleva “La fiesta de La Rioja” al Gran Rex.    <br />    El hoy reconocido Embajador Artístico y Cultural de La Rioja llega al Gran Rex para celebrar el aniversario de La Rioja. “Yo soy nacido en La Rioja señores… La Tierra del Carnaval”, es la lírica que lo abraza a su terruño y a su esencia de folklorista.<br />    Sergio Galleguillo fue conquistando cada escenario del país donde llevo su música contagiada de alegría, logrando instaurar en los lugares más recónditos de nuestro país y del mundo, el juego y la mística de una ancestral fiesta llamada CHAYA. En sus inicios, conformó grupos como Tiahuanaco y Arahuanco pero, su máxima explosión y aceptación en el folklore fue con “Sergio Galleguillo y Los Amigos”, banda formada en 1997 con la cual editó 6 discos. En 1998 editan su álbum debut “Agitando Pañuelos”. Ese mismo año se presentan en la peña de Los Nocheros en Cosquín, lo cual les da un lugar luego en el escenario de la Plaza Próspero Molina. <br /><br />    <strong>  Fechas:  </strong>    <ul>     <li> Sábado 20 de mayo 21:00hs </li>    </ul>    ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "sábado 20 de mayo",
        hora: "21:00hs",
        start: "2023-05-20T21:00:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/sergio-galleguillo/teatro-gran-rex",
      path: "/shows/sergio-galleguillo/11"
    },
    imagenes: {
      evento:
        "storage/imagenes/sergio_galleguillo.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "sergio galleguillo",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "7.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "7.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "6.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "6.000"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "6.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "6.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.500"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "5.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "4.000"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.000"
      }
    ]
  },

  {
    id: 12,
    descripcion: "La obra éxito de Broadway y el West End Londinense llega al Teatro Gran Rex por 8 únicas semanas en Junio 2023.    <br />    Basado en la homónima novela de Roald Dahl, autor que ha vendido más de 250 millones de libros, y que ha inspirado la icónica película infantil de los 90 es una megaproducción que lleva presentándose, con gran éxito mundialmente: 12 años en Londres y 4 años en cartel en Broadway con más de 1.500 representaciones, 99 premios internacionales y más de 10 millones de espectadores que ya la vieron. <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>     <li> Del 1 de junio al 30 de julio </li>    </ul>    ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "",
        hora: "",
        start: "2023-06-01T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-02T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-03T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-03T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-04T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-04T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-08T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-09T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-10T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-10T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-11T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-11T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-14T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-15T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-16T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-17T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-17T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-18T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-18T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-20T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-20T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-22T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-23T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-24T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-24T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-25T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-25T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-28T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-29T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-06-30T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-01T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-01T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-02T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-02T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-05T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-06T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-07T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-08T15:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-08T19:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-09T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-09T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-12T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-13T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-14T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-14T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-15T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-15T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-16T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-16T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-17T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-17T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-19T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-19T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-20T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-20T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-21T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-21T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-22T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-22T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-23T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-23T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-24T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-24T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-26T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-26T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-27T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-27T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-28T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-28T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-29T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-29T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-30T14:30:00",
        end: "",
        estadoCalendario: "disponible"
      },
      {
        dia: "",
        hora: "",
        start: "2023-07-30T18:00:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/matilda/teatro-gran-rex",
      path: "/shows/matilda/12"
    },
    imagenes: {
      evento: "storage/imagenes/matilda.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "matilda",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "10.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "10.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "10.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "9.500"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "8.800"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "9.500"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "8.800"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "6.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "4.500"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "3.900"
      }
    ]
  },

  {
    id: 13,
    descripcion: "Julieta Venegas se presentará el día Domingo 26 de Agosto en el Teatro Gran Rex.  <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />     <strong>  Fechas:  </strong>    <ul>      <li> Sábado 26 de agosto 20:30hs </li>    </ul>    ",
    disabled: true,
    display: "block",
    estado: "próximamente",
    fechas: [
      {
        dia: "sábado 26 de agosto",
        hora: "20:30hs",
        start: "2023-08-26T20:30:00",
        end: "",
        estadoCalendario: "próximamente"
      }
    ],
    links: {
      href: "https://www.tuentrada.com/eventos/detalle/Julieta-Venegas/2044219094378",
      path: "/shows/julieta-venegas/13"
    },
    imagenes: {
      evento:
        "storage/imagenes/julieta-venegas.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "julieta venegas",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "17.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "15.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "12.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "10.000"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "8.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "8.000"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.500"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "6.500"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "6.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "5.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "5.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "4.500"
      }
    ]
  },
  {
    id: 14,
    descripcion: "Grupo Bryndis se presentará el día Domingo 27 de Agosto en el Teatro Gran Rex.  <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>     <li>      Domingo 27 de agosto 20:00hs     </li>    </ul>",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "domingo 27 de agosto",
        hora: "20:00hs",
        start: "2023-08-27T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.ticketek.com.ar/bryndis/teatro-gran-rex",
      path: "/shows/bxs/14"
    },
    imagenes: {
      evento: "storage/imagenes/bxs.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "bxs - bryndis x siempre",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "14.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "12.500"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "11.500"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "10.000"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "9.500"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "10.000"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "9.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "8.000"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "7.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "6.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "5.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "5.000"
      }
    ]
  },

  {
    id: 15,
    descripcion: "Daniel Agostini se presentará el día Domingo 10 de Septiembre en el Teatro Gran Rex.  <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>     <li> Domingo 10 de septiemnre 20:00hs </li>    </ul>",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "domingo 10 de septiembre",
        hora: "20:00hs",
        start: "2023-09-10T20:00:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.tuentrada.com/eventos/detalle/Daniel-Agostini/553776971040",
      path: "/shows/daniel-agostini/15"
    },
    imagenes: {
      evento:
        "storage/imagenes/daniel_agostini.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "daniel agostini",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "18.000"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "16.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "14.000"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "12.000"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "11.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "12.000"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "10.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "9.000"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "8.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "7.000"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "6.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "5.500"
      }
    ]
  },

  {
    id: 16,
    descripcion: "Chili Fernandez se presentará el día Sábado 16 de Septiembre en el Teatro Gran Rex.  <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />    <strong>  Fechas:  </strong>    <ul>     <li> ábado 16 de septiembre 20:30hs </li>    </ul>    ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "sábado 16 de septiembre",
        hora: "20:30hs",
        start: "2023-09-16T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.tuentrada.com/eventos/detalle/Chili-Fernandez/495716168868",
      path: "/shows/chili-fernandez/16"
    },
    imagenes: {
      evento:
        "storage/imagenes/chili-fernandez.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "chili fernandez",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "9.500"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "9.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "8.500"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "8.000"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "7.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "7.000"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.000"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "4.000"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "3.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.000"
      }
    ]
  },

  {
    id: 17,
    descripcion: "Perotá Chingó se presentará el día Sábado 25 de Noviembre en el Teatro Gran Rex.  <br /> <br />    El Teatro Gran Rex informa que los eventos que se realizan en esta sala podrían ser fotografiados o filmados para su posterior difusión en medios y /o campañas publicitarias. <br /><br />     <strong>  Fechas:  </strong>    <ul>    <li>     Sábado 25 de noviembre 20:30hs    </li>    </ul>    ",
    disabled: false,
    display: "block",
    estado: "disponible",
    fechas: [
      {
        dia: "sábado 25 de noviembre",
        hora: "20:30hs",
        start: "2023-11-25T20:30:00",
        end: "",
        estadoCalendario: "disponible"
      }
    ],
    links: {
      href: "https://www.tuentrada.com/eventos/detalle/Perota-Chingo/114421632871",
      path: "/shows/perota-chingo/17"
    },
    imagenes: {
      evento:
        "storage/imagenes/perota-chingo.webp",
      plano:
        "storage/imagenes/planos/tue1.webp"
    },
    nombre: "perotá chingó",
    ubicaciones: [
      {
        id: 1,
        nombre: "PLATEA 1",
        color: "#970513",
        precio: "8.500"
      },
      {
        id: 2,
        nombre: "PLATEA 2",
        color: "#79C8C3",
        precio: "8.000"
      },
      {
        id: 3,
        nombre: "PLATEA 3",
        color: "#EDB63B",
        precio: "7.500"
      },
      {
        id: 4,
        nombre: "PLATEA 4",
        color: "#86AA4D",
        precio: "7.000"
      },
      {
        id: 5,
        nombre: "PLATEA 5",
        color: "#052748",
        precio: "6.000"
      },
      {
        id: 6,
        nombre: "SUPER PULLMAN 1",
        color: "#035F89",
        precio: "7.000"
      },
      {
        id: 7,
        nombre: "SUPER PULLMAN 2",
        color: "#A9167D",
        precio: "6.000"
      },
      {
        id: 8,
        nombre: "PULLMAN 1",
        color: "#EE6E08",
        precio: "5.000"
      },
      {
        id: 9,
        nombre: "PULLMAN 2",
        color: "#037366",
        precio: "4.500"
      },
      {
        id: 10,
        nombre: "PULLMAN 3",
        color: "#D97B77",
        precio: "3.500"
      },
      {
        id: 11,
        nombre: "PULLMAN 4",
        color: "#AF0657",
        precio: "3.000"
      },
      {
        id: 12,
        nombre: "PULLMAN 5",
        color: "#5271FF",
        precio: "3.000"
      }
    ]
  }
]




// Configuración de Fuse.js
const opciones = {
  includeScore: true,
  keys: ["name"],
};

const eventosBusqueda = [];

const EventosProvider = (props) => {
  const [evento, setEvento] = useState("");
  const [listaEventosBusqueda, setListaEventosBusqueda] =  useState(eventosBusqueda);
  const [eventosTotales, setEventosTotales] = useState([]);

  useEffect(() => {
    const getData = async()=>{
      try {
        // const res = await fetch("storage/json/eventos.json")
        const res = await fetch("eventosPrueba.json")
        const data = await res.json()
        setEventosTotales(data)
      } catch (error) {
        throw new Error(error)
      }
    }
    getData()
    
  }, []);


  const handleEvento = (nombreEvento) => {
    if (!nombreEvento.trim()) {
      setEvento("");
      return;
    }
    setEvento(nombreEvento);
  };

  const agregarEvento = (nombreEvento) => {
    // eventosTotales.filter( item => nombreEvento.toLowerCase().indexOf(item.name.toLowerCase()))

    // Busca eventos que coincidan exactamente con la consulta
    const resultadosExactos = eventosTotales.filter((item) =>
      item.nombre.toLowerCase().includes(nombreEvento.toLowerCase())
    );

    // Si no hay resultados exactos, buscar sugerencias
    if (resultadosExactos.length === 0) {
      const fuse = new Fuse(eventosTotales, opciones);
      const sugerencias = fuse
        .search(nombreEvento)
        .map((resultado) => resultado.item);
      setListaEventosBusqueda(sugerencias);
    } else {
      setListaEventosBusqueda(resultadosExactos);
    }
  };
  return (
    <EventosContext.Provider
      value={{
        listaEventosBusqueda,
        agregarEvento,
        evento,
        handleEvento,
        eventosTotales,
        
      }}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
