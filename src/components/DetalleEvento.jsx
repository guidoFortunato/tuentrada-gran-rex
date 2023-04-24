import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";

import { EventosContext } from "../context/EventosProvider";
import { Spinner, TablaPrecios } from "./";

import DOMPurify from "dompurify";

import "../css/detalleevento.css";

export const DetalleEvento = () => {
  const { eventosTotales, isLoading } = useContext(EventosContext);
  const [evento, setEvento] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const { name, id } = useParams();

  // console.log({eventosTotales})
  // console.log({ evento });

  useEffect(() => {
    if (eventosTotales?.length > 0) {
      const data = eventosTotales.find((item) => (item.id == id) && (item.nombrePath == name) && (item.disabled === false));
      if (data) {
        setEvento(data);
      } else {
        navigate("/");
      }
    }
  }, [name, id, eventosTotales]);

  const lastPath = localStorage.getItem("lastPath") || "/";

  useEffect(() => {
    window.scrollTo(0, 0);
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

  if (isLoading) {
    return <Spinner/>;
  }
  if (evento === null) {
    return <Spinner/>;
  }

  return (
    <>
      <div
        className={
          "container my-5 px-5 animate_animated animatefadeIn animate_fast"
        }
        // ref={eventDetailRef}
      >
        <h2 className="titleDetalle">{evento?.nombre.toUpperCase()}</h2>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
            <img
              src={evento?.imagenes.evento}
              alt={`imagen ${evento?.nombre}`}
              className="img-fluid"
            />
          </div>

          <div className="col-12 col-lg-6 detalle-del-evento">
            <p
              className="animate_animated animate_fadeIn"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(evento?.descripcion),
              }}
            ></p>
            
            <div className="d-flex justify-content-center flex-column align-items-center mt-4 ">
              <a
                href={evento?.links.href}
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
              INFORMACIÓN GENERAL
            </h2>

            <p style={{ color: "black" }}>
              El ingreso al establecimiento implica la autorización a la
              Productora y a Cordero, Cavallo y Lautaret S.A. a utilizar el
              contenido filmado y /o fotografiado y el uso de imagen personal
              sin compensación alguna. <br />
              <br />
              <strong> Entradas en venta </strong> <br />
              En las boleterias del Teatro Gran Rex (Av. Corrientes 857 - Lunes
              a Sábado de 12 a 18 hs. Feriados Cerrado.) <br /> <br />
              <strong>Personas con movilidad reducida</strong> <br />
              Las sillas de ruedas se ubican en el espacio habilitado para las
              mismas detrás de la fila 25 del sector derecho de la Platea. En
              todos los casos abonan la entrada. Dichas localidades deben ser
              adquiridas solo en la boleteria del Teatro, presentando
              certificado de discapacidad. Al momento de la compra, abonan el
              ticket de menor valor disponible.
            </p>
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
              UBICACIONES Y PRECIOS
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 my-5">
              {/* <hr /> */}
              <TablaPrecios ubicaciones={evento?.ubicaciones} />
            </div>
            <div className="col-12 col-lg-4 my-5 text-center">
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
                Ver ubicaciones
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};