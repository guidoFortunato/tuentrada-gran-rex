import { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";
import DOMPurify from "dompurify";

export const HeaderNoEventos = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  return (
    <header
      style={{ backgroundImage: `url(${dataInfoGeneral.backgroundImage})` }}
      className={`bg-no-repeat bg-cover bg-center container mx-auto mb-5 `}
    >
      <div
        className={`min-h-[50vh] flex justify-center items-start flex-col `}
        style={{ background: "rgba(0,0,0,.50)" }}
      >
        <div className="flex justify-center w-full">
          <h1
            style={{
              color: dataInfoGeneral.colorH1,
              fontSize: "2.5em",
              width: "92%",
            }}
            className={`m-0 text-5xl titulo-principal pt-10 pb-5  text-center md:text-left`}
          >
            <strong>{dataInfoGeneral.pages[0].title}</strong>
          </h1>
        </div>
        <div
          className="flex flex-col md:flex-row "
          style={{ justifyContent: "center", alignItems: "center" }}
        >
         <p
          style={{ color: dataInfoGeneral.colorButton }}
          className={`md:w-3/5 md:mr-6 text-justify pl-10 pr-10 md:pl-0 md:pr-0 text-base md:text-base lg:text-lg`}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(dataInfoGeneral.description),
          }}
        ></p>
          <div
            className="flex md:flex-col md:items-center md:justify-center mb-10 "
            style={{ width: "30%", justifyContent: "center" }}
          >
            <button
              style={{
                color: dataInfoGeneral.colorButton,
                // background: dataInfoGeneral.backgroundButton,
              }}
              type="button"
              className={`w-auto py-2.5 px-11 mt-6 md:mt-0 bg-[#855F35] hover:bg-[#5c452c] font-medium rounded text-base lg:text-lg md:text-base cursor-default`}
            >
              Calendario
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
