import { useContext, useEffect } from "react";
import { Spinner } from "../components";
import { EventosContext } from "../context/EventosProvider";

import DOMPurify from "dompurify";

import "../css/comollegar.css";

// const urlLlegar = "/storage/json/comoLlegar.json";
// const urlTestLlegar = "/src/json/comoLlegarTest.json";
// const { VITE_JSON_LLEGAR } = getEnvVariables();

export const ComoLlegar = () => {
  // const { data: dataLlegar } = useFetch( urlTestLlegar );
  const { dataInfoGeneral } = useContext(EventosContext);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (dataInfoGeneral.length === 0) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <div className="row animate__animated animate__fadeIn ">
          <div className="col-12 text-center mt-3 ">
            <h2 style={{ fontSize: "30px" }} className="my-3 tittle-h2">
              {dataInfoGeneral.pages[3].title}
            </h2>
          </div>
        </div>

        <div className="row animate__animated animate__fadeIn">
          <article className="col-12 col-lg-6 " style={{ textAlign: "center" }}>
            <div>
              <p
                className="parrafo-historia"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(dataInfoGeneral.pages[3].text),
                }}
              ></p>
            </div>
          </article>
          {/* <article className="col-12 col-lg-6 ">
            <div className="contenedor-map">
              <iframe
                style={{
                  border: "0",
                  boxShadow: "5px 5px 6px 1px rgb(227, 227, 227)",
                }}
                src={dataInfoGeneral.pages[3].text}
                allowFullScreen=""
                title="mapa gran rex"
                className="iframe"
              ></iframe>
            </div>
          </article> */}
        </div>
      </div>
    </>
  );
};
