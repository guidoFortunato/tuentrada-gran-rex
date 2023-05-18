import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "react-modal";

import { EventosContext } from "../context/EventosProvider";
// import { getEnvVariables, useFetch } from "../helpers";
import { Spinner, TablaPrecios } from "./";
import { getDataEvent } from "../helpers";

import DOMPurify from "dompurify";

import "../css/detalleevento.css";

// const urlEventos = "/storage/json/eventos.json";
// const urlTestEventos = "/src/json/eventosTest.json";
// const { VITE_JSON_EVENTOS } = getEnvVariables();



export const DetalleEvento = () => {
  const { dataEventos, isLoadingEventos, idVenue } = useContext(EventosContext);
  // const { data: dataEventos, isLoading: isLoadingEventos } = useFetch(urlTestEventos);
  const [evento, setEvento] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const { name, id } = useParams();

  /**
   * 
   * TODO: falta que si cambio la url a mano y no coincide el name con el id, que me redirija al home
   * 
   */


  useEffect(() => {
    if (idVenue !== "") {
      const getDataEvents = async () => {
        const data = await getDataEvent(idVenue, id);
        console.log({ data });
      };
      getDataEvents();
    }
  }, [idVenue, id]);

  useEffect(() => {
    if (dataEventos !== null) {
      const data = dataEventos.eventos.find( (item) => item.nombrePath == name && item.disabled === false );
      if (data) {
        setEvento(data);
      } else {
        navigate("/");
      }
    }
  }, [name, dataEventos]);

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

  if (isLoadingEventos) {
    return <Spinner />;
  }
  if (evento === null) {
    return <Spinner />;
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
              {evento?.links.botones.map((item) => {
                if (item.name !== "volver") {
                  return (
                    <a
                      href={item.href}
                      className=" text-center"
                      target="_blank"
                      rel="noreferrer"
                      key={item.id}
                    >
                      <div
                        className="btn-general mb-3"
                        style={{ fontSize: "1.6rem", width: "150px" }}
                      >
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <div className="text-center" key={item.id}>
                      <div
                        className="btn-general"
                        onClick={returnLastPath}
                        style={{ fontSize: "1.6rem", width: "150px" }}
                      >
                        {item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase()}
                      </div>
                    </div>
                  );
                }
              })}
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
              {dataEventos?.detalle.titulo1}
            </h2>
            <p
              className="animate_animated animate_fadeIn"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(evento?.informacionGeneral),
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
              {dataEventos?.detalle.titulo2}
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
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
};
