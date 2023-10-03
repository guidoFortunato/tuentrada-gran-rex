import { useContext, useEffect } from "react";
import { Spinner } from "../components";
import { EventosContext } from "../context/EventosProvider";

import DOMPurify from "dompurify";
import { HeaderPages } from "../components/pages";

export const HorariosLlegada = () => {
  const { dataInfoGeneral, handleButtonsCollapse: handleNavBarCollapse } =
    useContext(EventosContext);

  const src = dataInfoGeneral?.pages[3]?.image?.src
    ? dataInfoGeneral?.pages[3]?.image?.src
    : undefined;

  const srcset = dataInfoGeneral?.pages[3]?.image?.srcset
    ? dataInfoGeneral?.pages[3]?.image?.srcset
    : undefined;

  const alt = dataInfoGeneral?.pages[3]?.image?.alt
    ? dataInfoGeneral?.pages[3]?.image?.alt
    : undefined;

  const title = dataInfoGeneral?.pages[3]?.title;

  useEffect(() => {
    handleNavBarCollapse();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (dataInfoGeneral.length === 0) return <Spinner />;

  return (
    <div className="container mx-auto mb-5">
      <HeaderPages src={src} srcSet={srcset} alt={alt} title={title} />

      <div className="row">
        <article className="col-12 col-lg-6 px-4 lg:px-0">
          <div>
            <p
              className="parrafo-historia text-sm text-gray-700"
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
