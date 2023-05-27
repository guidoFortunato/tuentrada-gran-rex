import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";

import { EventosContext } from "../context/EventosProvider";
// import { getEnvVariables, useFetch } from "../helpers";
import { Spinner, TablaPrecios } from "./";
import { getEnvVariables, useFetchNew } from "../helpers";

import DOMPurify from "dompurify";

import "../css/detalleevento.css";

// const urlEventos = "/storage/json/eventos.json";
// const urlTestEventos = "/src/json/eventosTest.json";
// const { VITE_JSON_EVENTOS } = getEnvVariables();

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const DetalleEvento = () => {
  const { idVenue, dataInfoGeneral } = useContext(EventosContext);
  const { url } = dataInfoGeneral;
  const { id } = useParams();
  const { data, isLoading } = useFetchNew( VITE_API_EVENTOS + idVenue + "/details/" + id, VITE_EMAIL, VITE_PASS );
  // console.log({ data, isLoading });

  // const [evento, setEvento] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

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

  if (isLoading) return <Spinner />;

  if (data === null) return <Spinner />;

  if (!isLoading && data === undefined) return <Navigate to="/" />;

  if (dataInfoGeneral.length === 0) return <Spinner />;

  return (
    <>
      <div
        className={
          "container my-5 px-5 animate_animated animatefadeIn animate_fast"
        }
        // ref={eventDetailRef}
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
                __html: DOMPurify.sanitize(data?.extraInformation.detalle),
              }}
            ></p>

            <div className="d-flex justify-content-center flex-column align-items-center mt-4 ">
              <div className="text-center mb-3">
                <a
                  href={url}
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
                __html: DOMPurify.sanitize(data?.extraInformation.infoGeneral),
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
              {/* <hr /> */}
              <TablaPrecios precios={data?.performances[0].prices} />
            </div>
            {/* <div className="col-12 col-lg-4 my-5 text-center">
              <img
                src={evento?.imagenes.plano}
                alt="ubicaciones gran rex"
                className="img-fluid"
                style={{ cursor: "default" }}
              />
              <button
                className="btn-general mt-3 ocultar-responsive"
                onClick={handleOpenModal}
              >
                {dataEventos?.detalle.botonPlano.charAt(0).toUpperCase() + dataEventos?.detalle.botonPlano.slice(1).toLowerCase()}
              </button>
              <div className="position-relative" onClick={handleCloseModal}>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={handleCloseModal}
                  appElement={document.getElementById("root")}
                  // className={`${modalIsOpen ? "modal-open" : "modal-transition"}`}
                  style={{
                    opacity: "0",
                    transition: "opacity 0.7s ease-in-out",
                  }}
                  ref={modalRef}
                >
                  <img
                    src={evento?.imagenes.plano}
                    alt="ubicaciones gran rex"
                    className="img-modal"
                  />

                  <img
                    src={"storage/imagenes/close.svg"}
                    alt="icono cerrar"
                    className="icono-close"
                    onClick={handleCloseModal}
                  />
                </Modal>
              </div>
            </div> */}
          </div>
        </div>
      </div>
          
    </>
  );
};
