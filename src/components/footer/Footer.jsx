import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";
import { ItemsFooter } from "./";

export const Footer = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const anio = new Date().getFullYear();

  // if (dataInfoGeneral.length === 0) return <Spinner />;

  return (
    <footer
      style={{
        backgroundColor: dataInfoGeneral.backgroundFooter,
        // fontFamily: "Raleway",
        color: dataInfoGeneral.colorFooter,
      }}
      className={`shadow absolute bottom-0 w-full`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* <div className="flex flex-col lg:flex-row lg:justify-between space-y-2 lg:space-y-0"> */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={dataInfoGeneral.logoFooter}
              className="h-12 mr-3"
              alt={dataInfoGeneral.altLogoFooter}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              {dataInfoGeneral.name}
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            {dataInfoGeneral.pages.map((item) => {
              if (item.where === "footer" || item.where === "both") {
                return <ItemsFooter key={item.id} item={item} />;
              }
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="flex flex-col items-center justify-center md:flex-row text-sm sm:text-center">
          <div>© {anio} TuEntrada</div>
          <div className="md:ml-1"><span className="hidden md:inline md:mr-1">-</span> Todos los derechos reservados</div>
        </div>
      </div>
    </footer>
  );
};
