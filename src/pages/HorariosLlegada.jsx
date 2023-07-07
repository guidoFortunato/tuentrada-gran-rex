import { useContext, useEffect } from "react";
import { Spinner } from "../components";
import { EventosContext } from "../context/EventosProvider";

import DOMPurify from "dompurify";

// import "../css/comollegar.css";

export const HorariosLlegada = () => {
  const { dataInfoGeneral, handleButtonsCollapse: handleNavBarCollapse } = useContext(EventosContext);

  useEffect(() => {
    handleNavBarCollapse()
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (dataInfoGeneral.length === 0) return <Spinner />;  

  return (
    <div className="container mx-auto mb-5">
      <section
        style={{ backgroundImage: `url(${dataInfoGeneral.pages[3].image}` }}
        className="bg-no-repeat bg-cover bg-center container mx-auto"
      >
        <h2 style={{height:"40vh", background: 'rgba(0, 0, 0, 0.6)'}} className="text-3xl flex lg:justify-start justify-center items-center lg:items-end text-white p-10 my-3 tittle-h2">
          {dataInfoGeneral.pages[3].title}
        </h2>
      </section>
  
      <div className="row">
        <article className="col-12 col-lg-6 px-4 lg:px-0">
          <div>
            <p
              className="parrafo-historia text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(dataInfoGeneral.pages[3].text),
              }}
            ></p>
          </div>
        </article>
        <article>
          <div>
            <iframe
              style={{
                border: "0",
                boxShadow: "5px 5px 6px 1px rgb(227, 227, 227)",
              }}
              src={dataInfoGeneral.urlGoogleMaps}
              allowFullScreen=""
              title="mapa"
              className="iframe w-full h-[200px] lg:h-[300px] mt-10"
            ></iframe>
          </div>
        </article>
      </div>
    </div>
  );
  
};