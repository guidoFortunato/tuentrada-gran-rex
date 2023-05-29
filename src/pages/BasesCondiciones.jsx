import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "../components";

import DOMPurify from "dompurify";

export const BasesCondiciones = () => {
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
    <div className="container">
      <div className="row animate__animated animate__fadeIn animate__fast	">
        <div className="col-12 text-center my-4">
          <h2
            style={{ fontSize: "30px" }}
            className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
          >
            {dataInfoGeneral.pages[4].title}
          </h2>
        </div>

        <div className="col-12 mb-4">
          <p
            className="parrafo-historia"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(dataInfoGeneral.pages[4].text),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};
