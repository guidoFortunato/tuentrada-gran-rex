import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

import { FechaEvento, MediaEvento, Spinner, IconAccordion } from "./";

export const Accordion = ({ itemsAccordion, dataEvento }) => {
  const [performances, setPerformances] = useState(true);
  const [history, setHistory] = useState(false);
  const [socialNetworks, setSocialNetworks] = useState(false);
  const [extra, setExtra] = useState(false);
  const [mediaJson, setMediaJson] = useState(false);
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
      {/* {Object.keys(itemsAccordion).forEach((item) => {
        if (itemsAccordion[item] !== null) {
          return <AccordionItem item={item} itemsAccordion={itemsAccordion} />;
        }
      })} */}

      {itemsAccordion.performances.length > 0 && (
        <>
          <h2 id="accordion-open-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
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
            <div className="flex flex-col max-h-90 overflow-y-auto border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-sm">
              {newPerformances.map((item) => {
                if (item.state === "RUNNING") {
                  return (
                    <FechaEvento
                      dataFechas={item}
                      dataEvento={dataEvento}
                      key={item.id}
                      availabilitLevel={item.availabilitLevel}
                      reason={item.reason}
                    />
                  );
                }
              })}
            </div>
          </div>
        </>
      )}

      {itemsAccordion.history && (
        <>
          <h2 id="accordion-open-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
              onClick={() => setHistory((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Descripción
              </span>
              <IconAccordion item={history} />
            </button>
          </h2>
          <div
            id="accordion-open-body-2"
            className={history ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-2"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(itemsAccordion.history),
                }}
              ></p>
            </div>
          </div>
        </>
      )}
      {itemsAccordion.promotion && (
        <>
          <h2 id="accordion-open-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
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
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(itemsAccordion.promotion),
                }}
              ></p>
            </div>
          </div>
        </>
      )}

      {itemsAccordion.socialNetworks.length > 0 && (
        <>
          <h2 id="accordion-open-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-4"
              aria-expanded="false"
              aria-controls="accordion-open-body-4"
              onClick={() => setSocialNetworks((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Redes
              </span>
              <IconAccordion item={socialNetworks} />
            </button>
          </h2>
          <div
            id="accordion-open-body-4"
            className={socialNetworks ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-4"
          >
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite
                are open source under the MIT license, whereas Tailwind UI is a
                paid product. Another difference is that Flowbite relies on
                smaller and standalone components, whereas Tailwind UI offers
                sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite
                Pro, and even Tailwind UI as there is no technical reason
                stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Learn more about these technologies:
              </p>
            </div>
          </div>
        </>
      )}
      {itemsAccordion.mediaJson.length > 0 && (
        <>
          <h2 id="accordion-open-heading-5">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-5"
              aria-expanded="false"
              aria-controls="accordion-open-body-5"
              onClick={() => setMediaJson((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Media
              </span>
              <IconAccordion item={mediaJson} />
            </button>
          </h2>
          <div
            id="accordion-open-body-4"
            className={mediaJson ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-5"
          >
            {itemsAccordion.mediaJson.map((item, index) => (
              <MediaEvento key={index} item={item} />
              // <iframe
              //   key={index}
              //   width="425"
              //   height="425"
              //   src={item.media_json}
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //   allowFullScreen
              // ></iframe>
            ))}
          </div>
        </>
      )}

      {itemsAccordion.recomendation && (
        <>
          <h2 id="accordion-open-heading-6">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-6"
              aria-expanded="false"
              aria-controls="accordion-open-body-6"
              onClick={() => setRecomendation((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Información general
              </span>
              <IconAccordion item={recomendation} />
            </button>
          </h2>
          <div
            id="accordion-open-body-6"
            className={recomendation ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-6"
          >
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base"
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
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
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p
                className="text-base"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(itemsAccordion.extra),
                }}
              ></p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
