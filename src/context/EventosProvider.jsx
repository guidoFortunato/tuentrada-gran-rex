import { createContext, useState } from "react";
import Fuse from "fuse.js";


export const EventosContext = createContext();

const eventosTotales = [
  {
    id: 1,
    name: "el zar",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/El_zar.webp",
    date: "SÁBADO 15 DE ABRIL",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 2,
    name: "sergio torres",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_torres.webp",
    date: "DOMINGO 16 DE ABRIL",
    time: "21:30HS",
    status: "Disponible",
  },
  {
    id: 3,
    name: "miranda",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/miranda.webp",
    date: "21, 22 y 23 DE ABRIL",
    time: "20:00HS y 20:30HS",
    status: "Agotado",
  },
  {
    id: 4,
    name: "queen por master stroke",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/queen.webp",
    date: "VIERNES 28 DE ABRIL",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 5,
    name: "damian cordoba",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/damian_cordoba.webp",
    date: "SÁBADO 29 DE ABRIL",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 6,
    name: "International Festival Ballet for the Peace",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/festival_ballet.webp",
    date: "5 y 6 DE MAYO",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 7,
    name: "DALE Q´VA",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/dale_qva.webp",
    date: "5 y 6 DE MAYO",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 8,
    name: "Turf",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/turf.webp",
    date: "SÁBADO 13 DE MAYO",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 9,
    name: "The Beats",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/the_beats.webp",
    date: "DOMINGO 14 DE MAYO",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 10,
    name: "Massacre",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/massacre.webp",
    date: "VIERNES 19 DE MAYO",
    time: "20:30HS",
    status: "Disponible",
  },
  {
    id: 11,
    name: "Jd Pantoja y Kim Loaiza",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/jdpantoja_kimloaiza.webp",
    date: "20 Y 21 DE MAYO",
    time: "12:00HS Y 19:00HS",
    status: "Agotado",
  },
  {
    id: 12,
    name: "Sergio Galleguillo",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_galleguillo.webp",
    date: "SÁBADO 20 DE MAYO",
    time: "21:00HS",
    status: "Disponible",
  },
  {
    id: 13,
    name: "matilda",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/matilda.webp",
    date: "DEL 1 DE JUNIO AL 30 DE JULIO",
    time: "CONSULTAR HORARIOS",
    status: "Disponible",
  },
  {
    id: 14,
    name: "bxs",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/bxs.webp",
    date: "DOMINGO 27 DE AGOSTO",
    time: "20:00HS",
    status: "Disponible",
  },
  {
    id: 15,
    name: "daniel agostini",
    img: "https://www.tuentrada.com/teatro/gran-rex/imagenes/daniel_agostini.webp",
    date: "DOMINGO 10 DE SEPTIEMBRE",
    time: "20:00HS",
    status: "Disponible",
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
