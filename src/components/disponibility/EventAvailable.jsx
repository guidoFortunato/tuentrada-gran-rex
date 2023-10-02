import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";
import { getEnvVariables } from "../../helpers";

const { VITE_VENUE } = getEnvVariables();

export const EventAvailable = ({
  linkEvento,
  imgApi,
  title,
  imgSTXVeryLarge,
  disponibility,
}) => {
  const { host } = useContext(EventosContext);
  // console.log({linkEvento})
  // console.log({disponibility})
  // console.log({imgApi})

  if (host === VITE_VENUE) {
    return (
      <figure className="relative max-w-sm cursor-pointer rounded-lg hover:shadow-xl transition-all ease-in-out duration-500 h-full">
        <div className="overflow-hidden rounded-lg border border-gray-300 h-full">
          <div className="rounded-lg">
            <Link to={linkEvento}>
              {imgApi ? (
                <img src={imgApi.src} alt={imgApi.src} srcSet={imgApi.srcset} />
              ) : (
                <img src={imgSTXVeryLarge} alt={title} />
              )}
            </Link>
          </div>
          <div className="h-[63px] rounded-lg flex justify-center items-center">
            <Link to={linkEvento}>
              <p className="text-center text-base 2xl:text-lg uppercase py-3 text-black font-bold p-1">
                {title}
              </p>
            </Link>
          </div>
        </div>
        <button
          type="button"
          className={`  ${
            disponibility === "GOOD"
              ? "bg-green-600"
              : disponibility === "LIMITED"
              ? "bg-pink-800"
              : "bg-red-600"
          } z-10 absolute -right-0 -top-4 text-white rounded text-xs 2xl:text-sm px-2 py-1 lg:py-1.5 text-center mr-2 mb-2`}
        >
          {disponibility === "GOOD"
            ? "Disponible"
            : disponibility === "LIMITED"
            ? "Últimas entradas"
            : "Agotado"}
        </button>
      </figure>
    );
  }
  return (
    <>
      <figure className="relative max-w-sm cursor-pointer border rounded-lg border-gray-300 ">
        <Link to={linkEvento}>
          {imgApi ? (
            <img className="rounded-lg" src={imgApi.src} alt={imgApi.alt} srcSet={imgApi.srcset} />
          ) : (
            <img className="rounded-lg" src={imgSTXVeryLarge} alt={title} />
          )}
        </Link>
        <button
          type="button"
          className={`  ${
            disponibility === "GOOD"
              ? "bg-green-600"
              : disponibility === "LIMITED"
              ? "bg-pink-800"
              : "bg-red-600"
          } z-10 absolute -right-0 -top-4 text-white rounded text-xs 2xl:text-sm px-2 py-1 lg:py-1.5 text-center mr-2 mb-2`}
        >
          {disponibility === "GOOD"
            ? "Disponible"
            : disponibility === "LIMITED"
            ? "Últimas entradas"
            : "Agotado"}
        </button>
        <Link to={linkEvento}>
          <figcaption className="rounded-lg opacity-0 hover:opacity-100 transition duration-500 ease-in-out h-full bg-gradient-to-t hover:from-[rgb(0,0,0)] hover:to-[rgba(30,16,3,0.13)] hover:bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
            <p className="flex items-end justify-center text-xs 2xl:text-sm uppercase  text-white h-full p-5 font-bold hover:transition-colors duration-500 ease-in-out hover:text-white">
              {title}
            </p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
};
