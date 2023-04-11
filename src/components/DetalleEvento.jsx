import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ModalImg, TablaPrecios } from "./";

import DOMPurify from "dompurify";

import imgRex from "../assets/images/rex2.jpg";

import "../css/detalleevento.css";


export const DetalleEvento = ({ title, description, href, img, ubicaciones }) => {
  const eventDetailRef = useRef(null);
  const navigate = useNavigate();
  const lastPath = localStorage.getItem("lastPath") || "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventDetailRef]);

  const returnLastPath = () => {
    navigate(lastPath);
  };

  return (
    <>
      <div className="container my-5 px-5" ref={eventDetailRef}>
        <h1 style={{ fontSize: "25px" }}>{title.toUpperCase()}</h1>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
            <img src={img} alt="imagen evento" className="img-fluid" />
          </div>
          <div className="col-12 col-lg-6 detalle-del-evento">
            <h2 className="fw-bold pb-2">Información general</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
            ></p>

            <div className="d-flex justify-content-center flex-column align-items-center mt-4">
              <a
                href={href}
                className="w-100 text-center"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="btn-general mb-3 w-50"
                  style={{ fontSize: "1.6rem" }}
                >
                  Comprar
                </div>
              </a>
              <div className="w-100 text-center">
                <div
                  className="btn-general w-50"
                  onClick={returnLastPath}
                  style={{ fontSize: "1.6rem" }}
                >
                  Volver
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 my-5">
              <h2
                style={{ fontSize: "20px" }}
              >
                Ubicación y precios
              </h2>
              {/* <hr /> */}
              <TablaPrecios ubicaciones={ubicaciones} />
            </div>
            <div className="col-12 col-lg-4 my-5 text-center">
              <img src={imgRex} alt="teatro gran rex" className="img-fluid" style={{ cursor: "default" }} />
              <button className="btn-general mt-3 ocultar-responsive" data-bs-target="#imageUbicaciones" data-bs-toggle="modal">Ver ubicaciones</button>
              <ModalImg  id={'imageUbicaciones'} className="ocultar-responsive"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
