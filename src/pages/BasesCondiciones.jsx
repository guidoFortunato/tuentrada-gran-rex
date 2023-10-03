import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import DOMPurify from "dompurify";
import { HeaderPages } from "../components/pages";

export const BasesCondiciones = () => {
  const { dataInfoGeneral, handleButtonsCollapse: handleNavBarCollapse } =
    useContext(EventosContext);

  // console.log({dataInfoGeneral})

  const src = dataInfoGeneral?.pages[4]?.image?.src
    ? dataInfoGeneral?.pages[4]?.image?.src
    : undefined;

  const srcset = dataInfoGeneral?.pages[4]?.image?.srcset
    ? dataInfoGeneral?.pages[4]?.image?.srcset
    : undefined;

  const alt = dataInfoGeneral?.pages[4]?.image?.alt
    ? dataInfoGeneral?.pages[4]?.image?.alt
    : undefined;

  const title = dataInfoGeneral?.pages[4]?.title;

  useEffect(() => {
    handleNavBarCollapse();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (dataInfoGeneral.length === 0) return <span></span>;

  return (
    <div className="container mx-auto mb-5 ">
      <HeaderPages src={src} srcSet={srcset} alt={alt} title={title} />
      <div className="row">
        <div className="col-12 mb-4 px-4 lg:px-0">
          <div
            className="parrafo-historia text-sm text-gray-700"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(dataInfoGeneral.pages[4].text),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
