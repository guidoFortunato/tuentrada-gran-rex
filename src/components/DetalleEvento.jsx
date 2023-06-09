import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
// import Modal from "react-modal";

import { EventosContext } from "../context/EventosProvider";
import { FechaEvento, ModalPrecios, Spinner, TablaPrecios } from "./";
import { getData, getEnvVariables } from "../helpers";
import DOMPurify from "dompurify";

import "../css/detalleevento.css";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const DetalleEvento = () => {
  const [data, setData] = useState(null);
  const [fechas, setFechas] = useState(true);
  const [descripcion, setDescripcion] = useState(false);
  const [redes, setRedes] = useState(false);
  const { idVenue, dataInfoGeneral, idProducto } = useContext(EventosContext);
  const { url } = dataInfoGeneral;
  const { name, id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  // console.log({ data });
  // console.log({name})
  // console.log({idProducto})

  const lastPath = localStorage.getItem("lastPath") || "/";

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  const returnLastPath = () => {
    navigate(lastPath);
  };

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const { data } = await getData(
          VITE_API_EVENTOS + idVenue + "/details/" + id,
          VITE_EMAIL,
          VITE_PASS
        );
        console.log(data);
        setData(data);
      };
      getInfo();
    }
  }, [idVenue, id, name]);

  // console.log({dataInfoGeneral})

  if (data === null || dataInfoGeneral.length === 0) return <Spinner />;

  if (data === undefined || data.length === 0) return <Navigate to="/" />;

  return (
    <>
      <div className="container mx-auto mb-5 px-3 ">
        <section
          className={`bg-[url("assets/images/responsive.jpg")]  lg:bg-[url("assets/images/desktop.jpg")]  bg-no-repeat bg-cover bg-center mx-auto`}
        >
          <div
            className={`min-h-[40vh] flex justify-center items-start flex-col`}
          ></div>
        </section>
        <h2
          // style={{ color: dataInfoGeneral.colorSiteName }}
          className="text-3xl  mt-4 mb-2"
        >
          {data?.name}
        </h2>
        <div className="grid grid-cols-1">
          <p
            className="text-base"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.description),
            }}
          ></p>
          <ModalPrecios />
        </div>

        <div
          id="accordion-open"
          data-accordion="open"
          className=""
        >
          <h2 id="accordion-open-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-1"
              aria-expanded="true"
              aria-controls="accordion-open-body-1"
              onClick={() => setFechas((prevState) => !prevState)}
            >
              <span className="flex items-center text-base">Fechas</span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${fechas ? "rotate-180" : ""} shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-1"
            className={fechas ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-1"
          >
            <div className="grid grid-cols-3 p-3 lg:p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-sm">
              {data.performances.map((item) => (
                <FechaEvento data={item} key={item.id} />
              ))}
            </div>
          </div>
          <h2 id="accordion-open-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
              onClick={() => setDescripcion((prevState) => !prevState)}
            >
              <span className="flex items-center">Descripción</span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${
                  descripcion ? "rotate-180" : ""
                } shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-2"
            className={descripcion ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-2"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma
                software so everything you see in the library has a design
                equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the{" "}
                <a
                  href="https://flowbite.com/figma/"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Figma design system
                </a>{" "}
                based on the utility classes from Tailwind CSS and components
                from Flowbite.
              </p>
            </div>
          </div>
          <h2 id="accordion-open-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-3"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
              onClick={() => setRedes((prevState) => !prevState)}
            >
              <span className="flex items-center">Redes</span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${redes ? "rotate-180" : ""} shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-3"
            className={redes ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="container my-5 px-5 animate_animated animatefadeIn animate_fast"
      >
        <h2 className="titleDetalle">{data?.name.toUpperCase()}</h2>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
            <img
              src={data?.image}
              alt={`imagen ${data?.name}`}
              className="img-fluid"
            />
          </div>

          <div className="col-12 col-lg-6 detalle-del-evento">
            <p
              className="animate_animated animate_fadeIn"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.description),
              }}
            ></p>

            <div className="d-flex justify-content-center flex-column align-items-center mt-4 ">
              <div className="text-center mb-3">
                <a
                  href={url + data.stxId}
                  className=" text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="btn-general mb-3"
                    style={{ fontSize: "1.6rem", width: "150px" }}
                  >
                    Comprar
                  </div>
                </a>
              </div>

              <div className="text-center">
                <div
                  className="btn-general"
                  onClick={returnLastPath}
                  style={{ fontSize: "1.6rem", width: "150px" }}
                >
                  Volver
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center flex-column align-items-center mt-4 detalle-del-evento">
            <h2
              className="tittle-h2"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "30px",
              }}
            >
              Info General
            </h2>
            <p
              className="animate_animated animate_fadeIn"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.recomendation),
              }}
            ></p>
          </div>
          <div>
            <h2
              className="tittle-h2"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "30px",
              }}
            >
              Ubicaciones y precios
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 my-5">
            
              <TablaPrecios precios={data?.performances[0].prices} />
            </div>
          </div>
        </div>
      </div> */}
          
    </>
  );
};
