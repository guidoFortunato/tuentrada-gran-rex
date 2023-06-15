import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const EventNotForSale = ({
  img,
  title,
  reasonSoldOut,
  linkEvento,
  reasonCanceled,
  reasonSuspended,
  data,
}) => {
  const { handleIdProducto } = useContext(EventosContext);
  return (
    <>
      <figure className="relative max-w-sm cursor-pointer">
        <Link to={linkEvento}>
          <img className="rounded-lg md:rounded-none" src={img} alt={title} />
        </Link>
        <button
          type="button"
          className="absolute top-1 left-1 text-white bg-gray-600 rounded-2xl text-xs px-3 py-1.5 text-center mr-2 mb-2"
          style={{
            border: `1px solid ${reasonSoldOut ? "#E02424" : "#4B5563"}`,
            background: `${reasonSoldOut ? "#E02424" : "#4B5563"}`,
          }}
        >
          {reasonSoldOut
            ? "Agotado"
            : reasonCanceled
            ? "Cancelado"
            : reasonSuspended
            ? "Suspendido"
            : "No disponible"}
        </button>
        <figcaption className="hidden md:block bg-[#000]  bg-opacity-90 absolute text-md text-white bottom-2 right-0 left-0">
          <p>{title}</p>
        </figcaption>
      </figure>
    </>
  );
};
