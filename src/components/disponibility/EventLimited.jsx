import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const EventLimited = ({ linkEvento, img, title, data }) => {
  const { setIdProducto } = useContext(EventosContext);

  return (
    <>
      <figure className="relative max-w-sm cursor-pointer">
        <Link to={linkEvento}>
          <img className="rounded-lg md:rounded-none" src={img} alt={title} />
        </Link>
        <button type="button" className="absolute top-1 left-1 text-white bg-orange-500 rounded text-xs px-3 py-1.5 text-center mr-2 mb-2">Últimas entradas</button>
        <figcaption className="hidden md:block bg-[#000]  bg-opacity-70 absolute text-md text-white bottom-2 right-0 left-0">
          <p>{title}</p>
        </figcaption>
      </figure>
    </>
  );
};
