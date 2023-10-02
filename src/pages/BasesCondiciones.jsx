import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";
import DOMPurify from "dompurify";

export const BasesCondiciones = () => {
  const { dataInfoGeneral, handleButtonsCollapse: handleNavBarCollapse } =
    useContext(EventosContext);

    // console.log({dataInfoGeneral})

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
      <section
        // style={{ backgroundImage: `url(${dataInfoGeneral.pages[4].image})` }}
        // className="bg-no-repeat bg-cover bg-center container mx-auto"
        className="relative mb-5"
      >
        <img
          src={dataInfoGeneral.pages[4].image.src}
          srcSet={dataInfoGeneral.pages[4].image.srcset}
          alt={dataInfoGeneral.pages[4].image.alt}
          className="h-[35vh] w-full object-cover brightness-[50%]"
        />
        <h2
          // style={{ height: "40vh", background: "rgba(0, 0, 0, 0.5)" }}
          className="absolute top-0 bottom-0 left-0 right-0 text-2xl lg:text-3xl flex items-center lg:justify-start justify-center lg:items-end text-white p-10 my-3"

        >
          {dataInfoGeneral.pages[4].title}
        </h2>
      </section>

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
