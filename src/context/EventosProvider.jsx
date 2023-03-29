import { createContext, useState } from "react";
import Fuse from "fuse.js";
import anuel1 from "../assets/images/anuel1.jpg";
import anuel2 from "../assets/images/anuel2.jpg";
import chano500 from "../assets/images/chano.jpg";
import ciro500 from "../assets/images/ciro500.jpg";
import tini500 from "../assets/images/tini500.jpg";

export const EventosContext = createContext();

const eventosTotales = [
  {
    id: Math.random() * 10,
    name: "anuel",
    img: anuel1,
    classMobile: "",
    date: "DOMINGO 29 MARZO",
    time: "20HS",
    status: "Agotado",
  },
  {
    id: Math.random() * 10,
    name: "anuel",
    img: anuel2,
    classMobile: "",
    date: "DOMINGO 29 MARZO",
    time: "20HS",
    status: "Agotado",
  },
  {
    id: Math.random() * 10,
    name: "ciro y los persas",
    img: ciro500,
    classMobile: "mobile",
    date: "DOMINGO 29 MARZO",
    time: "20HS",
    status: "Disponible",
  },
  {
    id: Math.random() * 10,
    name: "chano",
    img: chano500,
    classMobile: "",
    date: "DOMINGO 29 MARZO",
    time: "20HS",
    status: "Cancelado",
  },
  {
    id: Math.random() * 10,
    name: "tini",
    img: tini500,
    classMobile: "",
    date: "DOMINGO 29 MARZO",
    time: "20HS",
    status: "Reprogramado",
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
