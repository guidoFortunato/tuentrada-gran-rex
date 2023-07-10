import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { IconAccordion } from "./";
import { FechaEvento } from "../eventDisponibility";
import { Spinner } from "../";

export const Accordion = ({ itemsAccordion, dataEvento }) => {
  const [performances, setPerformances] = useState(true);
  const [history, setHistory] = useState(false);
  // const [socialNetworks, setSocialNetworks] = useState(false);
  const [extra, setExtra] = useState(false);
  const [mediaJson, setMediaJson] = useState(true);
  const [promotion, setPromotion] = useState(false);
  const [recomendation, setRecomendation] = useState(false);
  const [newPerformances, setNewPerformances] = useState([]);

  // console.log({ itemsAccordion });
  // console.log({ dataEvento });
  // console.log({newPerformances})

  useEffect(() => {
    const updatedPerformances = itemsAccordion.performances.map(
      (performance, index) => ({
        ...performance,
        availabilitLevel: itemsAccordion.disponibility[index].availabilitLevel,
        reason: itemsAccordion.disponibility[index].reason,
      })
    );
    setNewPerformances(updatedPerformances);
  }, []);

  if (newPerformances.length === 0) return <Spinner />;

  return (
    <div id="accordion-open" data-accordion="open" className="mt-5">
   

      {itemsAccordion.performances.length > 0 && (
        <>
          <h2 id="accordion-open-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-1"
              aria-expanded="true"
              aria-controls="accordion-open-body-1"
              onClick={() => setPerformances((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                {itemsAccordion.performances.length > 1
                  ? "Fechas disponibles"
                  : "Fecha disponible"}
              </span>
              <IconAccordion item={performances} />
            </button>
          </h2>
          <div
            id="accordion-open-body-1"
            className={performances ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-1"
          >
            <div className="flex flex-col max-h-90 overflow-y-auto border-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-sm">
              {newPerformances.map((item) => {
                return (
                  <FechaEvento
                    dataFechas={item}
                    dataEvento={dataEvento}
                    key={item.id}
                    availabilitLevel={item.availabilitLevel}
                    reason={item.reason}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}

      {itemsAccordion.promotion && (
        <>
          <h2 id="accordion-open-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-3"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
              onClick={() => setPromotion((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Promociones
              </span>
              <IconAccordion item={promotion} />
            </button>
          </h2>
          <div
            id="accordion-open-body-3"
            className={promotion ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-3"
          >
            <div className="p-5 border-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base  text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(itemsAccordion.promotion),
                }}
              ></p>
            </div>
          </div>
        </>
      )}

      {itemsAccordion.history && (
        <>
          <h2 id="accordion-open-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
              onClick={() => setHistory((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Más Información
              </span>
              <IconAccordion item={history} />
            </button>
          </h2>
          <div
            id="accordion-open-body-2"
            className={history ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-2"
          >
            <div className="p-5 border-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base  text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(itemsAccordion.history),
                }}
              ></p>
            </div>
          </div>
        </>
      )}

      {itemsAccordion.recomendation && (
        <>
          <h2 id="accordion-open-heading-6">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-6"
              aria-expanded="false"
              aria-controls="accordion-open-body-6"
              onClick={() => setRecomendation((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Recomendaciones y condiciones
              </span>
              <IconAccordion item={recomendation} />
            </button>
          </h2>
          <div
            id="accordion-open-body-6"
            className={recomendation ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-6"
          >
            <div className="p-5 border-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base  text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(itemsAccordion.recomendation),
                }}
              ></p>
            </div>
          </div>
        </>
      )}
      {itemsAccordion.extra && (
        <>
          <h2 id="accordion-open-heading-7">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-7"
              aria-expanded="false"
              aria-controls="accordion-open-body-7"
              onClick={() => setExtra((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Extra
              </span>
              <IconAccordion item={extra} />
            </button>
          </h2>
          <div
            id="accordion-open-body-7"
            className={extra ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-7"
          >
            <div className="p-5 border-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base  text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(itemsAccordion.extra),
                }}
              ></p>
            </div>
          </div>
        </>
      )}

     

      {itemsAccordion.mediaJson.length > 0 && (
        <>
          <h2 id="accordion-open-heading-8">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-8"
              aria-expanded="false"
              aria-controls="accordion-open-body-8"
              onClick={() => setMediaJson((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Galería multimedia
              </span>
              <IconAccordion item={mediaJson} />
            </button>
          </h2>
          <div
            id="accordion-open-body-8"
            className={mediaJson ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-8"
          >
            <div className="p-5 border-0 border-gray-200 dark:border-gray-700">
              {itemsAccordion.mediaJson.map((item) => {
                const url = item.media_json;
                const newUrl = new URL(url);
                const domainName = newUrl.hostname;
                if (domainName.includes("spotify")) {
                  // console.log({urlSpo: url.split('/')[5]})
                  return (
                    <iframe
                      key={url.split("/")[5]}
                      className="w-full xl:w-[70%] rounded-xl h-20 mt-5"
                      src={item.media_json}
                      allowFullScreen=""
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  );
                }
                if (domainName.includes("youtube")) {
                  // console.log({urlYou: url.split('/')[4]})
                  return (
                    <iframe
                      key={url.split("/")[4]}
                      className="w-full xl:w-[70%] mt-5"
                      height="350"
                      src={item.media_json}
                      title={dataEvento.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  );
                }
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
