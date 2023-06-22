import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import DOMPurify from "dompurify";

export const Footer = () => {
  const { dataInfoGeneral } = useContext(EventosContext);

  // if (dataInfoGeneral.length === 0) return <Spinner />;

  return (
    <footer
      style={{
        backgroundColor: dataInfoGeneral.backgroundFooter,
        fontFamily: "Raleway",
        color: dataInfoGeneral.colorFooter,
      }}
      className={`shadow absolute bottom-0 w-full`}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* <div className="flex flex-col lg:flex-row lg:justify-between space-y-2 lg:space-y-0"> */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={dataInfoGeneral.logo}
              className="h-8 mr-3"
              alt={dataInfoGeneral.altLogo}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              {dataInfoGeneral.pages[0].title}
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Bases y condiciones
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Cómo llegar
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Dirección
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Boletería
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center ">
          © 2023 <span className="mr-1">TuEntrada</span>-
          <span className="ml-1">Todos los derechos reservados</span>
        </span>
      </div>
    </footer>
  );
};
