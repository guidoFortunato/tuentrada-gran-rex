import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import { EventosContext } from "../context/EventosProvider";
import { Accordion, ItemRedes, RedesSociales, Spinner } from "./";
import { getData, getEnvVariables } from "../helpers";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const DetalleEvento = () => {
  const [data, setData] = useState(null);
  const [itemsAccordion, setItemsAccordion] = useState(null);
  const { idVenue, dataInfoGeneral, idProducto } = useContext(EventosContext);
  const { url } = dataInfoGeneral;
  const { name, id } = useParams();
  const navigate = useNavigate();
  console.log({ dataEvento: data });
  // console.log({name})
  // console.log({idProducto})

  const lastPath = localStorage.getItem("lastPath") || "/";

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
          VITE_API_EVENTOS + idVenue + "/details/" + id,
          VITE_EMAIL,
          VITE_PASS
        );
        // console.log({ data });
        setData(data);
        setItemsAccordion({
          performances: data.performances.filter(
            (item) => item.state === "RUNNING"
          ),
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
  }, [idVenue, id, name]);

  // console.log({dataInfoGeneral})

  // itemsAccordion.forEach( item => console.log(item) )

  if (data === null || dataInfoGeneral.length === 0) return <Spinner />;

  if (itemsAccordion === null) return <Spinner />;

  if (data === undefined || data.length === 0) return <Navigate to="/" />;

  return (
    <>
      <div className="container mx-auto mb-5 px-3 xl:w-2/3">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <section
              className={`bg-no-repeat bg-contain bg-center mx-auto h-96`}
              // style={{ backgroundImage: `url("${data.stxImagMedium}")` }}
              style={{ backgroundImage: `url("${data.image}")` }}
            ></section>
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <h2 className="text-3xl mt-2 lg:mt-4 mb-2">{data?.name}</h2>
            <div className="grid grid-cols-1">
              <p
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data?.description),
                }}
              ></p>
            </div>
          </div>
        </div>

        <Accordion itemsAccordion={itemsAccordion} dataEvento={data} />
        {data.socialNetworks.length > 0 && (
          <div className="mt-5">
            <h3 className="text-[#6b7280] font-semibold text-lg lg:text-xl">
              {/*text-center*/}
              Seguilo en sus sus redes
            </h3>
            <ul className="flex space-x-3 my-2">
              {/*justify-center*/}
              <RedesSociales dataRedes={data.socialNetworks} />
            </ul>
          </div>
        )}
        {data.mediaJson.length > 0 && (
          <div className="mt-5">
            <h3 className="text-[#6b7280] font-semibold text-lg lg:text-xl">
              {/*text-center*/}
              Más Informacion
            </h3>
            {/* {data.mediaJson.map((item) => (
              <iframe
                style="border-radius:12px"
                src={item.media_json}
                width="100%"
                height="152"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            ))} */}
            {data.mediaJson.map((item) => {
              const url = item.media_json;
              const newUrl = new URL(url);
              const domainName = newUrl.hostname;
              if (domainName.includes("spotify")) {
                // console.log({urlSpo: url.split('/')[5]})
                return <iframe key={url.split('/')[5]} className="w-full xl:w-[70%] rounded-xl h-20 mt-5" src={item.media_json}  allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              }
              if (domainName.includes("youtube")) {
                // console.log({urlYou: url.split('/')[4]})
                return <iframe key={url.split('/')[4]} className="w-full xl:w-[70%] mt-5" height="350" src={item.media_json} title={data.name}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};
