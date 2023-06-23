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
          className="z-50 absolute -right-0 -top-4 text-white rounded text-xs p-1.5 text-center mr-2 mb-2"
          style={{
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
        <Link to={linkEvento}>
          <figcaption className="hidden md:block bg-[#000]  bg-opacity-90 absolute text-md text-white bottom-2 right-0 left-0">
            <p>{title}</p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
};
