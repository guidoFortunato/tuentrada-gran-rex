import { Link } from "react-router-dom";

export const EventAvailable = ({
  linkEvento,
  imgApi,
  title,
  imgSTXVeryLarge,
  disponibility,
}) => {
  // console.log({linkEvento})
  return (
    <>
      <figure className="relative max-w-sm cursor-pointer">
        <Link to={linkEvento}>
          {imgApi ? (
            <img
              className="rounded-lg md:rounded-none"
              src={imgApi}
              alt={title}
            />
          ) : (
            <img
              className="rounded-lg md:rounded-none"
              src={imgSTXVeryLarge}
              alt={title}
            />
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
          } z-10 absolute -right-0 -top-4 text-white rounded text-xs px-2 py-1 lg:py-1.5 text-center mr-2 mb-2`}
        >
          {disponibility === "GOOD"
            ? "Disponible"
            : disponibility === "LIMITED"
            ? "Últimas entradas"
            : "Agotado"}
        </button>
        <Link to={linkEvento}>
          <figcaption className=" opacity-0 hover:opacity-100 transition duration-500 ease-in-out h-full bg-gradient-to-t hover:from-[rgba(15,15,15,0.82)] hover:to-[rgba(173,170,167,0.15)] hover:bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
            <p className="flex items-end text-lg text-white h-full p-5 font-bold hover:transition-colors duration-500 ease-in-out hover:text-white">
              {title}
            </p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
};
