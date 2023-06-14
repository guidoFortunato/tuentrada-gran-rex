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
        <button type="button" className="absolute top-1 left-1 text-white bg-orange-500 rounded-2xl text-xs px-3 py-1.5 text-center mr-2 mb-2">Últimas entradas</button>
        {/* <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Do you want to get notified when a new component is added to
                Flowbite?
              </p>
            </figcaption> */}
      </figure>
    </>
  );
};
