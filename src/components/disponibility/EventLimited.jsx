import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const EventLimited = ({ linkEvento, img, title, data }) => {
  // const { setIdProducto } = useContext(EventosContext);
  // console.log({data})
  return (
    <>
      <figure className="relative max-w-sm cursor-pointer">
        <Link to={linkEvento}>
          <img className="rounded-lg md:rounded-none" src={img} alt={title} />
        </Link>
        <button
          type="button"
          className="z-50 absolute -right-0 -top-4 text-white bg-orange-500 rounded text-xs p-1.5 text-center mr-2 mb-2"
        >
          Últimas entradas
        </button>
        <Link to={linkEvento}>
          <figcaption className=" opacity-0 hover:opacity-100 transition duration-300 ease-in-out h-full bg-gradient-to-r hover:from-[rgb(17,6,1)] hover:to-[rgba(49,28,3,0.57)] hover:bg-gradient-to-r absolute bottom-0 right-0 left-0 top-0">
            <p className="flex items-end text-lg text-white h-full p-5 font-bold">
              {title}
            </p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
};
