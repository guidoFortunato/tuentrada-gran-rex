import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import { EventosContext } from "../../context/EventosProvider";
import { RedesSociales, Spinner } from "..";
import { getData, getEnvVariables } from "../../helpers";
import { Accordion } from "../accordion";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const DetalleEvento = () => {
  const [data, setData] = useState(null);
  const [itemsAccordion, setItemsAccordion] = useState(null);
  const { idVenue, dataInfoGeneral, handleButtonsCollapse } =
    useContext(EventosContext);

  // const { url } = dataInfoGeneral;
  const { name } = useParams();
  // const navigate = useNavigate();
  // console.log({dataInfoGeneral})
  console.log({ dataEvento: data });
  // console.log({name})
  // console.log({idProducto})

  // const lastPath = localStorage.getItem("lastPath") || "/";

  useEffect(() => {
    handleButtonsCollapse();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  // const returnLastPath = () => {
  //   navigate(lastPath);
  // };

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const { data } = await getData(
          `${VITE_API_EVENTOS + idVenue}/product/${name}`,
          VITE_EMAIL,
          VITE_PASS
        );
        // console.log({buttonBuyLink: data.product.buttonBuyLink});
        // console.log({dataDetail: data});
        // if (data === undefined) return <Navigate to="/" />;
        setData(data);
        setItemsAccordion({
          disponibility: data.disponibility,
          extra: data.product.extra,
          history: data.product.history,
          mediaJson: data.product.mediaJson,
          performances: data.product.performances,
          promotion: data.product.promotion,
          recomendation: data.product.recomendation,
          socialNetworks: data.product.socialNetworks,
          // venueImageProduct: data.venueImage,
        });
      };
      getInfo();
    }
  }, [idVenue, name]);

  // console.log({dataInfoGeneral})

  // itemsAccordion.forEach( item => console.log(item) )

  if (data === null || dataInfoGeneral.length === 0) return <Spinner />;

  if (data === undefined || data.length === 0) return <Navigate to="/" />;

  return (
    // <div className="w-[100%] lg:w-[70%] mx-auto" >
    <div className="w-[100%] mx-auto">
      <div className="container mx-auto mb-5 px-3 ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-[50%]  lg:w-[30%] p-0 sm:px-4 ">
            {/* {data.product.image ? (
              <section
                className={` bg-no-repeat bg-contain bg-center lg:bg-start mx-auto h-[400px] md:h-[300px]`}
                style={{ backgroundImage: `url("${data.product.image}")` }}
              ></section>
            ) : (
              <section
                className={`bg-no-repeat bg-contain bg-center lg:bg-start mx-auto h-[400px] md:h-[300px]`}
                style={{
                  backgroundImage: `url("${data.product.stxImagXLarge}")`,
                }}
              ></section>
            )} */}
            {data.product.image ? (
              <div className="border border-gray-300 rounded-lg ">
                <img
                  src={data.product.image}
                  alt={data.product.name}
                  className="rounded-lg w-full"
                />
              </div>
            ) : (
              <div className="border border-gray-300 rounded-lg ">
                <img
                  src={data.product.stxImagXLarge}
                  alt={data.product.name}
                  className="rounded-lg w-full"
                />
              </div>
            )}
          </div>
          <div className="w-full md:w-[50%] lg:w-[70%] p-0 sm:px-4">
            <h2 className="text-xl mt-2 lg:mt-4 mb-2 uppercase font-semibold">{data.product.name}</h2>
            <div className="grid grid-cols-1">
              <p
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.product.description),
                }}
              ></p>
              {data.product.socialNetworks.length > 0 && (
                <div className="mt-5 flex flex-col items-center lg:items-start">
                  <h3 className="text-[#6b7280] font-semibold text-lg lg:text-xl w-full text-center lg:text-start">
                    Seguilo en sus redes
                  </h3>
                  <ul className="flex space-x-3 my-2">
                    <RedesSociales dataRedes={data.product.socialNetworks} />
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <Accordion itemsAccordion={itemsAccordion} dataEvento={data} />
      </div>
    </div>
  );
};
