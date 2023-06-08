import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Accordion } from "flowbite-react";
// import Modal from "react-modal";

import { EventosContext } from "../context/EventosProvider";
import { Spinner, TablaPrecios } from "./";
import { getData, getEnvVariables } from "../helpers";
import DOMPurify from "dompurify";

import "../css/detalleevento.css";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const DetalleEvento = () => {
  const [data, setData] = useState(null);
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

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
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

  if (data === null || dataInfoGeneral.length === 0) return <Spinner />;

  if (data === undefined || data.length === 0) return <Navigate to="/" />;

  return (
    <>
      <div className="container mx-auto my-5 px-3 ">
        <section
          className={`bg-[url("assets/images/responsive.jpg")]  lg:bg-[url("assets/images/desktop.jpg")]  bg-no-repeat bg-cover bg-center mx-auto`}
        >
          <div
            className={`min-h-[40vh] flex justify-center items-start flex-col`}
          ></div>
        </section>
        <h2
          style={{ color: dataInfoGeneral.colorSiteName }}
          className="text-3xl font-bold mt-4"
        >
          {data?.name.toUpperCase()}
        </h2>
        <div className="grid grid-cols-1">
          <p
            className="text-base"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.description),
            }}
          ></p>
        </div>

        <Accordion data-accordion="open">
          <Accordion.Panel >
            <Accordion.Title>Fechas</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to
                <a
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="https://flowbite.com/docs/getting-started/introduction/"
                >
                  get started
                </a>
               
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
               
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                <a
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                  href="https://flowbite.com/figma/"
                >
                  Figma design system
                </a>
                
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
              
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              What are the differences between Flowbite and Tailwind UI?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
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
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                    href="https://flowbite.com/pro/"
                  >
                    <p>Flowbite Pro</p>
                  </a>
                </li>
                <li>
                  <a
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                    href="https://tailwindui.com/"
                    rel="nofollow"
                  >
                    <p>Tailwind UI</p>
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
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
