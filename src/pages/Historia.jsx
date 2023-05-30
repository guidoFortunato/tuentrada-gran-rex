import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import { ImagenHistoria, Spinner } from "../components";
import DOMPurify from "dompurify";

import "../css/historia.css";

export const Historia = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({dataInfoGeneral})

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (dataInfoGeneral.length === 0) return <Spinner />;  

  return (
    <>
      <div className="container">
        <div className="row animate__animated animate__fadeIn animate__fast	">
          <div className="col-12 text-center mt-3 ">
            <h2
              style={{ fontSize: "30px" }}
              className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
            >
              {dataInfoGeneral?.pages[2].title}
            </h2>
          </div>

          <div className="col-12">
            <p
              className="parrafo-historia"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(dataInfoGeneral?.pages[2].text),
              }}
            ></p>
          </div>

          {dataInfoGeneral.pages[2].images &&
            dataInfoGeneral.pages[2].images[0].image !== "" && (
              <>
                <div className="col-12 text-center mt-3 ">
                  <h2
                    style={{ fontSize: "30px" }}
                    className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
                  >
                    Galería
                  </h2>
                </div>

                <div
                  className="container"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  <div className="row">
                    {dataInfoGeneral?.pages[2].images.map((item) => (
                      <ImagenHistoria src={item.image} key={item.id} />
                    ))}
                  </div>
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
};
