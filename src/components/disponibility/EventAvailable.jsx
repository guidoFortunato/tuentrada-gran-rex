import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const EventAvailable = ({ linkEvento, img, title, data }) => {
  const { setIdProducto } = useContext(EventosContext);
  // console.log({title})

  return (
    <>
      <figure className="relative max-w-sm cursor-pointer">
        <Link to={linkEvento}>
          <img className="rounded-lg md:rounded-none" src={img} alt={title} />
        </Link>
        <button
          type="button"
          className="absolute top-1 left-1 text-white bg-green-600 rounded text-xs px-3 py-1.5 text-center mr-2 mb-2"
        >
          Disponible
        </button>
        <figcaption className=" transition duration-300 ease-in-out text-transparent hover:text-white h-full bg-gradient-to-r  hover:from-[rgba(34,12,2,0.22)] hover:to-[rgba(68,40,9,0.6951155462184874)] hover:bg-gradient-to-r bg-opacity-90 absolute text-md text-white bottom-0 right-0 left-0">

    
<p className="transition flex justify-end">{title}</p>

</figcaption>
      </figure>
    </>
  );
};
