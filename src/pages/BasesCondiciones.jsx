import { useEffect } from "react";
import { useFetch } from "../helpers";
import { Spinner } from "../components";

import DOMPurify from "dompurify";

const urlBases = "/storage/json/bases.json";
// const urlTestBases = "/src/json/basesTest.json";

export const BasesCondiciones = () => {
  const { data: dataBases, isLoading: isLoadingBases } = useFetch(urlBases);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (isLoadingBases) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <div className="row animate__animated animate__fadeIn animate__fast	">
        <div className="col-12 text-center my-4">
          <h2
            style={{ fontSize: "30px" }}
            className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
          >
            {dataBases?.titulo}
          </h2>
        </div>

        <div className="col-12 mb-4">
          <p
            className="parrafo-historia"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(dataBases?.descripcion),
            }}
          ></p>
        </div>

        <div className="col-12 mb-4">
          <p className="parrafo-historia">
            <strong>{dataBases?.movilidadReducida.titulo}</strong>
          </p>
          <p className="parrafo-historia">
            {dataBases?.movilidadReducida.descripcion}
          </p>
        </div>
        <div className="col-12 mb-4">
          <p className="parrafo-historia">
            <strong>{dataBases?.menores.titulo}</strong>
          </p>
          <p className="parrafo-historia">{dataBases?.menores.descripcion}</p>
        </div>
        <div className="col-12 ">
          <p className="parrafo-historia">
            <strong>{dataBases?.terminos.titulo}</strong>
          </p>
          <p className="parrafo-historia">
            {dataBases?.terminos.descripcion}{" "}
            <a target="_blank" href={dataBases?.terminos.link.href}>
              {dataBases?.terminos.link.titulo}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
