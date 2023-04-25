// import { GaleriaHistoria } from "../components";
import { useContext } from "react";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "../components";
import DOMPurify from "dompurify";

import "../css/historia.css";

export const Historia = () => {
  const { dataNavbar, eventosTotales } = useContext(EventosContext);
  console.log({ eventosTotales });

  if (!dataNavbar) {
    return <Spinner />
  }
  if (!eventosTotales) {
    return <Spinner />
  }

  return (
    <>
      <div className="container">
        <div className="row animate__animated animate__fadeIn animate__fast	 ">
          <div className="col-12 text-center mt-3 ">
            <h2
              style={{ fontSize: "30px" }}
              className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
            >
              { dataNavbar !== null && dataNavbar[0]?.items[2].titulo1}
            </h2>
          </div>
        </div>

        <div className="col-12">
          
          <p
              className="parrafo-historia"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(eventosTotales.historia.descripcion),
              }}
            ></p>
          
          
        </div>
      </div>

      {/* <div className="container-historia">
        <GaleriaHistoria />
      </div> */}

      <div className="row animate__animated animate__fadeIn animate__fast	 ">
        <div className="col-12 text-center mt-3 ">
          <h2
            style={{ fontSize: "30px" }}
            className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
          >
            {dataNavbar !== null && dataNavbar[0]?.items[2].titulo2}
          </h2>
        </div>
      </div>
      <div
        className="container"
        style={{ textAlign: "center", padding: "20px" }}
      >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/1.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/2.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/3.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/4.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/5.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/6.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/7.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/8.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/9.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/10.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/11.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/12.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/13.webp"
              alt="img-rex"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-5 p-2 galeria-img">
            <img
              style={{
                boxShadow: "5px 5px 6px 5px rgba(128, 128, 128, 0.443)",
                width: "250px",
              }}
              src="storage/imagenes/galeria/14.webp"
              alt="img-rex"
            />
          </div>
        </div>
      </div>
    </>
  );
};
