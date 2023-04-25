import { EventosContext } from "../context/EventosProvider";
import { useContext } from "react";
import { Spinner } from "../components";

import DOMPurify from "dompurify";

import "storage/css/comollegar.css";

export const ComoLlegar = () => {
  const { eventosTotales } = useContext(EventosContext);

  if (!eventosTotales) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container">
        <div className="row animate__animated animate__fadeIn ">
          <div className="col-12 text-center mt-3 ">
            <h2 style={{ fontSize: "30px" }} className="my-3 tittle-h2">
              Cómo llegar
            </h2>
          </div>
        </div>

        <div className="row animate__animated animate__fadeIn">
          <article className="col-12 col-lg-6 " style={{ textAlign: "center" }}>
            <div>
              <p
                className="parrafo-historia"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    eventosTotales?.comoLlegar.descripcion
                  ),
                }}
              ></p>
            </div>
          </article>
          <article className="col-12 col-lg-6 ">
            <div className="contenedor-map">
              <iframe
                style={{
                  border: "0",
                  boxShadow: "5px 5px 6px 1px rgb(227, 227, 227)",
                }}
                src={eventosTotales?.comoLlegar.srcIframe}
                // frameBorder="0"
                allowFullScreen=""
                title="mapa gran rex"
                className="iframe"
              ></iframe>
              {/* <Map /> */}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
