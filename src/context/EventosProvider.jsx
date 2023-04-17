import { createContext, useState } from "react";
import Fuse from "fuse.js";


export const EventosContext = createContext();

const eventosTotales = [
 
  { 
    date: "DOMINGO 7 DE MAYO",
    id: 2,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_torres.webp",
    linkEvento: "/shows/sergio-torres/2",
    name: "sergio torres",
    status: "Reprogramado",
    time: "21:30HS",
    disabled: false
  },
  {
    date: "21, 22 y 23 DE ABRIL",
    id: 3,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/miranda.webp",
    linkEvento: "/shows/miranda/3",
    name: "miranda",
    status: "Agotado",
    time: "20:00HS y 20:30HS",
    disabled: false
  },
  {
    date: "VIERNES 28 DE ABRIL",
    id: 4,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/queen.webp",
    linkEvento: "/shows/queen/4",
    name: "queen por master stroke",
    status: "Disponible",
    time: "20:30HS",
    disabled: false
  },
  {
    date: "SÁBADO 29 DE ABRIL",
    id: 5,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/damian_cordoba.webp",
    linkEvento: "/shows/damian-cordoba/5",
    name: "damian cordoba",
    status: "Disponible",
    time: "20:30HS",
    disabled: false
  },
  {
    date: "5 y 6 DE MAYO",
    id: 6,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/festival_ballet.webp",
    linkEvento: "/shows/festival-ballet/6",
    name: "International Festival Ballet for the Peace",
    status: "Cancelado",
    time: "20:30HS",
    disabled: false
  },
  {
    date: "5 y 6 DE MAYO",
    id: 7,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/dale_qva.webp",
    linkEvento: "/shows/daleqva/7",
    name: "DALE Q´VA",
    status: "Disponible",
    time: "20:30HS",
    disabled: false
  },
  {
    date: "SÁBADO 13 DE MAYO",
    id: 8,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/turf.webp",
    linkEvento: "/shows/turf/8",
    name: "Turf",
    status: "Disponible",
    time: "20:30HS",
    disabled: false
  },
  {
    date: "DOMINGO 14 DE MAYO",
    id: 9,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/the_beats.webp",
    linkEvento: "/shows/the-beats/9",
    name: "The Beats",
    status: "Disponible",
    time: "20:30HS",
    disabled: false
  },
  {
    date: "VIERNES 19 DE MAYO",
    id: 10,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/massacre.webp",
    linkEvento: "/shows/massacre/10",
    name: "Massacre",
    status: "Disponible",
    time: "20:30HS",
    disabled: false
  },
  {
    date: "20 Y 21 DE MAYO",
    id: 11,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/jdpantoja_kimloaiza.webp",
    linkEvento: "/shows/jdpantoja-kimloaiza/11",
    name: "Jd Pantoja y Kim Loaiza",
    status: "Agotado",
    time: "12:00HS Y 19:00HS",
    disabled: false
  },
  {
    date: "SÁBADO 20 DE MAYO",
    id: 12,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_galleguillo.webp",
    linkEvento: "/shows/sergio-galleguillo/12",
    name: "Sergio Galleguillo",
    status: "Disponible",
    time: "21:00HS",
    disabled: false
  },
  {
    date: "DEL 1 DE JUNIO AL 30 DE JULIO",
    id: 13,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/matilda.webp",
    linkEvento: "/shows/matilda/13",
    name: "matilda",
    status: "Disponible",
    time: "CONSULTAR HORARIOS",
    disabled: false
  },
{
  date: "Sábado 26 DE AGOSTO",
  id: 17,
  img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/julieta-venegas.webp",
  // linkEvento: "/shows/julieta-venegas/17",
  linkEvento: "",
  name: "Julieta Venegas",
  status: "Próximamente",
  time: "20:30HS",
  disabled: true
},
  {
    date: "DOMINGO 27 DE AGOSTO",
    id: 14,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/bxs.webp",
    linkEvento: "/shows/bxs/14",
    name: "bxs - bryndis x siempre",
    status: "Disponible",
    time: "20:00HS",
    disabled: false
  },
  {
    date: "DOMINGO 10 DE SEPTIEMBRE",
    id: 15,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/daniel_agostini.webp",
    linkEvento: "/shows/daniel-agostini/15",
    name: "daniel agostini",
    status: "Disponible",
    time: "20:00HS",
    disabled: false
  },
  {
    date: "Sábado 16 DE SEPTIEMBRE",
    id: 16,
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/chili-fernandez.webp",
    // linkEvento: "/shows/chili-fernandez/16",
    linkEvento: "",
    name: "chili fernandez",
    status: "Próximamente",
    time: "20:30HS",
    disabled: true
  },
];

// Configuración de Fuse.js
const opciones = {
  includeScore: true,
  keys: ['name']
};

const eventosBusqueda = [];

const EventosProvider = (props) => {
  const [evento, setEvento] = useState('');
  const [listaEventosBusqueda, setListaEventosBusqueda] = useState(eventosBusqueda);

  const handleEvento = ( nombreEvento ) => {
    if (!nombreEvento.trim()) {
      setEvento("")
      return
    }
    setEvento(nombreEvento)
  }

  const agregarEvento = (nombreEvento) => {
    // eventosTotales.filter( item => nombreEvento.toLowerCase().indexOf(item.name.toLowerCase()))

    // Busca eventos que coincidan exactamente con la consulta
    const resultadosExactos = eventosTotales.filter( item => item.name.toLowerCase().includes(nombreEvento.toLowerCase()))

    // Si no hay resultados exactos, buscar sugerencias
    if (resultadosExactos.length === 0) {
      const fuse = new Fuse(eventosTotales, opciones);
      const sugerencias = fuse.search(nombreEvento).map(resultado => resultado.item);
      setListaEventosBusqueda(sugerencias);
    } else {
      setListaEventosBusqueda(resultadosExactos);
    }
    
  };
  return (
    <EventosContext.Provider value={{ listaEventosBusqueda, agregarEvento, evento, handleEvento }}>
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
