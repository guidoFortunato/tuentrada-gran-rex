import { useEffect } from "react";
import { useFetch } from "../helpers";
import { Spinner } from "../components";

import DOMPurify from "dompurify";

import "https://www.tuentrada.com/teatro/gran-rex/css/comollegar.css";

// const urlTestLlegar = "/src/json/comoLlegarTest.json";
const { VITE_JSON_LLEGAR } = getEnvVariables();

export const ComoLlegar = () => {
  const { data: dataLlegar, isLoading: isLoadingLlegar } = useFetch( VITE_JSON_LLEGAR );

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoadingLlegar) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container">
        <div className="row animate__animated animate__fadeIn ">
          <div className="col-12 text-center mt-3 ">
            <h2 style={{ fontSize: "30px" }} className="my-3 tittle-h2">
              {dataLlegar?.titulo.toUpperCase()}
            </h2>
          </div>
        </div>

        <div className="row animate__animated animate__fadeIn">
          <article className="col-12 col-lg-6 " style={{ textAlign: "center" }}>
            <div>
              <p
                className="parrafo-historia"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(dataLlegar?.descripcion),
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
                src={dataLlegar?.srcIframe}
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
