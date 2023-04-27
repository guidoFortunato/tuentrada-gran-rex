// import { GaleriaHistoria } from "../components";
import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { useFetch } from "../helpers";
import { ImagenHistoria, Spinner } from "../components";
import DOMPurify from "dompurify";

import "/storage/css/historia.css";

// const urlTestHistoria = "/src/json/historiaTest.json";
const { VITE_JSON_HISTORIA } = getEnvVariables();

export const Historia = () => {
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext);
  const { data: dataHistoria, isLoading: isLoadingHistoria } = useFetch(VITE_JSON_HISTORIA);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoadingNavbar) {
    return <Spinner />;
  }
  if (isLoadingHistoria) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <div className="row animate__animated animate__fadeIn animate__fast	">
          <div className="col-12 text-center mt-3 ">
            <h2
              style={{ fontSize: "30px" }}
              className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
            >
              { dataNavbar?.items[2].titulo1}
            </h2>
          </div>

          <div className="col-12">
            <p
              className="parrafo-historia"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(dataHistoria?.descripcion),
              }}
            ></p>
          </div>

          {/* <div className="container-historia">
        <GaleriaHistoria />
      </div> */}

          <div className="col-12 text-center mt-3 ">
            <h2
              style={{ fontSize: "30px" }}
              className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
            >
              {dataNavbar?.items[2].titulo2}
            </h2>
          </div>

          <div
            className="container"
            style={{ textAlign: "center", padding: "20px" }}
          >
            <div className="row">
              {dataHistoria?.imagenes.map((item) => (
                <ImagenHistoria src={item.src} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
