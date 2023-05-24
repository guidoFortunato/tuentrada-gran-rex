// import { GaleriaHistoria } from "../components";
import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
// import { getEnvVariables, useFetch } from "../helpers";
import { ImagenHistoria, Spinner } from "../components";
import DOMPurify from "dompurify";

import "../css/historia.css";

// const urlHistoria = "/storage/json/historia.json";
// const urlTestHistoria = "/src/json/historiaTest.json";
// const { VITE_JSON_HISTORIA } = getEnvVariables();

export const Historia = () => {
  const { dataInfoGeneral } = useContext( EventosContext );
  // const [dataHistoria, setDataHistoria] = useState(null);
  // const [isLoadingHistoria, setIsLoadingHistoria] = useState(true);

  
  // useEffect(() => {
  //   if (localStorage.getItem('dataHistoria')) {
  //     setDataHistoria(JSON.parse(localStorage.getItem('dataHistoria')))
  //     setIsLoadingHistoria(false)
  //   } else {
  //     fetch(urlTestHistoria)
  //       .then(response => response.json())
  //       .then(data => {
  //         localStorage.setItem('dataHistoria', JSON.stringify(data))
  //         console.log(data)
  //         setDataHistoria(data)
  //         setIsLoadingHistoria(false)
  //       })
  //       .catch(error => {
  //         throw new Error(error)
  //       })
  //   }
  // }, [])


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  // if (isLoadingNavbar) {
  //   return <Spinner />;
  // }
  // if (isLoadingHistoria) {
  //   return <Spinner />;
  // }

  if (dataInfoGeneral.length === 0) {
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
              { dataInfoGeneral?.pages[2].title }
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

          {/* <div className="container-historia">
        <GaleriaHistoria />
      </div> */}

          <div className="col-12 text-center mt-3 ">
            <h2
              style={{ fontSize: "30px" }}
              className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
            >
              Galería
            </h2>
          </div>

          {/* <div
            className="container"
            style={{ textAlign: "center", padding: "20px" }}
          >
            <div className="row">
              {dataHistoria?.imagenes.map((item) => (
                <ImagenHistoria src={item.src} key={item.id} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
