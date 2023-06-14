import { useState } from "react";
import DOMPurify from "dompurify";

import { FechaEvento, MediaEvento } from "./";

export const Accordion = ({ itemsAccordion, dataEvento }) => {
  const [performances, setPerformances] = useState(true);
  const [history, setHistory] = useState(false);
  const [socialNetworks, setSocialNetworks] = useState(false);
  const [extra, setExtra] = useState(false);
  const [mediaJson, setMediaJson] = useState(false);
  const [promotion, setPromotion] = useState(false);
  const [recomendation, setRecomendation] = useState(false);

  console.log({ itemsAccordion });

  return (
    <div id="accordion-open" data-accordion="open">
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-1"
              aria-expanded="true"
              aria-controls="accordion-open-body-1"
              onClick={() => setPerformances((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                {itemsAccordion.performances.length > 1 ? "Fechas" : "Fecha"}
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${
                  performances ? "rotate-180" : ""
                } shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-open-body-1"
            className={performances ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-1"
          >
            <div className="grid grid-cols-3 p-3 lg:p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-sm">
              {itemsAccordion.performances.map((item) => {
                if (item.state === "RUNNING"){
                  return <FechaEvento
                    performances={itemsAccordion.performances}
                    dataFechas={item}
                    dataEvento={dataEvento}
                    key={item.id}
                  />
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
              onClick={() => setHistory((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Descripción
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${history ? "rotate-180" : ""} shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-3"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
              onClick={() => setPromotion((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Promociones
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${promotion ? "rotate-180" : ""} shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-4"
              aria-expanded="false"
              aria-controls="accordion-open-body-4"
              onClick={() => setSocialNetworks((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Redes
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${
                  socialNetworks ? "rotate-180" : ""
                } shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-5"
              aria-expanded="false"
              aria-controls="accordion-open-body-5"
              onClick={() => setMediaJson((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Media
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${mediaJson ? "rotate-180" : ""} shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-6"
              aria-expanded="false"
              aria-controls="accordion-open-body-6"
              onClick={() => setRecomendation((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Recomendaciones
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${
                  recomendation ? "rotate-180" : ""
                } shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-7"
              aria-expanded="false"
              aria-controls="accordion-open-body-7"
              onClick={() => setExtra((prevState) => !prevState)}
            >
              <span className="flex items-center text-xl font-semibold">
                Extra
              </span>
              <svg
                data-accordion-icon
                className={`w-6 h-6 ${extra ? "rotate-180" : ""} shrink-0`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
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
