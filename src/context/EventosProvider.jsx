import { createContext, useState } from "react";
export const EventosContext = createContext();
import anuel1 from "../assets/images/anuel1.jpg";
import anuel2 from "../assets/images/anuel2.jpg";
import chano500 from "../assets/images/chano.jpg";
import ciro500 from "../assets/images/ciro500.jpg";
import tini500 from "../assets/images/tini500.jpg";

const eventosTotales = [
  {
    id: Math.random()*10,
    name: "anuel",
    img: anuel1,
    classMobile: "",
  },
  {
    id: Math.random()*10,
    name: "anuel",
    img: anuel2,
    classMobile: "",
  },
  {
    id: Math.random()*10,
    name: "ciro",
    img: ciro500,
    classMobile: "mobile",
  },
  {
    id: Math.random()*10,
    name: "chano",
    img: chano500,
    classMobile: "",
  },
  {
    id: Math.random()*10,
    name: "tini",
    img: tini500,
    classMobile: "",
  },
];

const eventosBusqueda = []

const EventosProvider = (props) => {

  const [listaEventosBusqueda, setListaEventosBusqueda] = useState(eventosBusqueda);
  

  const agregarEvento = (nombreEvento)=>{
    setListaEventosBusqueda(
      eventosTotales.filter( item => item.name == nombreEvento )
    )
  }
  return (
    <EventosContext.Provider
      value={{listaEventosBusqueda, agregarEvento}}
    >
      {props.children}
    </EventosContext.Provider>
  );
};

export default EventosProvider;
