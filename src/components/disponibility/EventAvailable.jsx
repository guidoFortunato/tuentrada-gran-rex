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
      <figure className={`  ${
            disponibility === "GOOD"
              ? "border-green-600"
              : disponibility === "LIMITED"
              ? "border-pink-800"
              : "border-red-600"
          } relative max-w-sm cursor-pointer border rounded-lg border-black `}>
        <Link to={linkEvento}>
          {imgApi ? (
            <img
              className="rounded-lg "
              src={imgApi}
              alt={title}
            />
          ) : (
            <img
              className="rounded-lg"
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
          <figcaption className="rounded-lg opacity-0 hover:opacity-100 transition duration-500 ease-in-out h-full bg-gradient-to-t hover:from-[rgb(0,0,0)] hover:to-[rgba(30,16,3,0.13)] hover:bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
            <p className="flex items-end justify-center text-xs uppercase  text-white h-full p-5 font-bold hover:transition-colors duration-500 ease-in-out hover:text-white">
              {title}
            </p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
};
