import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import { EventosContext } from "../../context/EventosProvider";
import { RedesSociales, Spinner } from "..";
import { getData, getEnvVariables } from "../../helpers";
import { Accordion } from "../accordion";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const DetalleEvento = () => {
  const [data, setData] = useState(null);
  const [itemsAccordion, setItemsAccordion] = useState(null);
  const { idVenue, dataInfoGeneral, handleButtonsCollapse } = useContext(EventosContext);

  // const { url } = dataInfoGeneral;
  const { name } = useParams();
  const navigate = useNavigate();
  // console.log({dataInfoGeneral})
  // console.log({ dataEvento: data });
  // console.log({name})
  // console.log({idProducto})

  const lastPath = localStorage.getItem("lastPath") || "/";

  useEffect(() => {
    handleButtonsCollapse();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  const returnLastPath = () => {
    navigate(lastPath);
  };

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const { data } = await getData(
          `${VITE_API_EVENTOS + idVenue}/details/${name}`,
          VITE_EMAIL,
          VITE_PASS
        );
        // console.log({data})
        // console.log({data})
        // console.log({ performances: data.performances });
        setData(data);
        setItemsAccordion({
          performances: data.performances,
          history: data.history,
          promotion: data.promotion,
          recomendation: data.recomendation,
          extra: data.extra,
          mediaJson: data.mediaJson,
          socialNetworks: data.socialNetworks,
          disponibility: data.disponibility,
        });
      };
      getInfo();
    }
  }, [idVenue, name]);

  // console.log({dataInfoGeneral})

  // itemsAccordion.forEach( item => console.log(item) )

  if (data === null || dataInfoGeneral.length === 0) return <Spinner />;

  if (itemsAccordion === null) return <Spinner />;

  if (data === undefined || data.length === 0) return <Navigate to="/" />;

  return (
    // <div className="w-[100%] lg:w-[70%] mx-auto" > 
    <div className="w-[100%] mx-auto" > 
      <div className="container mx-auto mb-5 px-3 ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[30%] p-0 sm:p-4">
            <section
              className={`bg-no-repeat bg-contain bg-start mx-auto h-96`}
              // style={{ backgroundImage: `url("${data.stxImagMedium}")` }}
              style={{ backgroundImage: `url("${data.image}")` }}
            ></section>
          </div>
          <div className="w-full lg:w-[70%] p-0 sm:p-4">
            <h2 className="text-3xl mt-2 lg:mt-4 mb-2">{data?.name}</h2>
            <div className="grid grid-cols-1">
              <p
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data?.description),
                }}
              ></p>
              <a
                href={`${data.url}selection/event/date?productId=${data.productId}`}
                target="_blank"
              >
                <button
                  type="button"
                  className={`bg-[${dataInfoGeneral.backgroundButton}] hover:bg-[${dataInfoGeneral.colorHoverButton}] hover:border[${dataInfoGeneral.colorHoverButton}] focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center mt-4`}
                  style={{
                    color: dataInfoGeneral.colorButton,
                  }}
                >
                  Comprar entradas
                </button>
              </a>
            </div>
          </div>
        </div>

        <Accordion itemsAccordion={itemsAccordion} dataEvento={data} />

        {data.socialNetworks.length > 0 && (
          <div className="mt-5 flex flex-col items-center">
            <h3 className="text-[#6b7280] font-semibold text-lg lg:text-xl">
              {/*text-center*/}
              Seguilo en sus redes
            </h3>
            <ul className="flex space-x-3 my-2">
              {/*justify-center*/}
              <RedesSociales dataRedes={data.socialNetworks} />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
