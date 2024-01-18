import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { IconAccordion } from "./";
import { FechaEvento } from "../disponibility";
import { Spinner } from "../";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

// import { Tooltip } from "flowbite-react";

export const Accordion = ({ itemsAccordion, dataEvento }) => {
  const [performances, setPerformances] = useState(true);
  const [history, setHistory] = useState(false);
  // const [socialNetworks, setSocialNetworks] = useState(false);
  const [extra, setExtra] = useState(false);
  const [mediaJson, setMediaJson] = useState(true);
  const [promotion, setPromotion] = useState(true);
  const [recomendation, setRecomendation] = useState(false);
  const [newPerformances, setNewPerformances] = useState(null);

  // console.log({ itemsAccordion });
  // console.log({ dataEvento });
  // console.log({newPerformances})

  const mouseHover = (e) => {
    // console.log({e})
    const tooltip = tippy(e.target, {
      content: "Mas información de TuEntrada Wallet",
      placement: "top",
      theme: "dark",
    });
    return tooltip;
  };

  useEffect(() => {
    if (itemsAccordion.disponibility.length > 0) {
      const updatedPerformances = itemsAccordion.performances.map(
        (performance) => {
          const correspondingDisponibility = itemsAccordion.disponibility.find(
            (item) => item.performanceId === performance.id
          );
          // console.log({correspondingDisponibility})
          if (correspondingDisponibility) {
            return {
              ...performance,
              availabilitLevel: correspondingDisponibility.availabilitLevel,
              reason: correspondingDisponibility.reason,
            };
          }

          return performance; // Mantener sin cambios si no hay correspondencia
        }
      );
      setNewPerformances(updatedPerformances);
    } else {
      setNewPerformances([]);
    }
  }, []);

  if (newPerformances === null) return <Spinner />;

  return (
    <div id="accordion-open" data-accordion="open" className="mt-5">
      {itemsAccordion.useWallet && (
        <h2 id="accordion-open-heading-30">
          <div className="flex flex-col items-center justify-center md:items-start w-full p-5 font-medium text-left text-gray-700 border-b-2 border-gray-200 ">
            <span>Entradas disponibles con</span>
            <div className="md:pl-5">
              <a
                href="https://www.tuentrada.com/wallet/"
                target="_blank"
                rel="noreferrer"
                onMouseOver={mouseHover}
                className="w-full block text-center"
              >
                <img
                  className="w-[120px]"
                  src="https://www.tuentrada.com/teatro/gran-rex/imagenes/tuEntradaWallet-chica.png"
                  alt="tuentrada wallet"
                />
              </a>
            </div>

            {/* <Tooltip
              content="Mas información de TuEntrada Wallet"
              animation="duration-500"
              trigger="hover"
              style="dark"
            > */}

            {/* </Tooltip> */}
          </div>
        </h2>
      )}

      {itemsAccordion.performances?.length > 0 && newPerformances?.length > 0 && (
        <>
          <h2 id="accordion-open-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 uppercase    border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-1"
              aria-expanded="true"
              aria-controls="accordion-open-body-1"
              onClick={() => setPerformances((prevState) => !prevState)}
            >
              <span className="flex items-center text-lg font-semibold">
                {itemsAccordion.performances.length > 1 &&
                dataEvento.product.internalState !== "cancel"
                  ? "Fechas disponibles"
                  : itemsAccordion.performances.length <= 1 &&
                    dataEvento.product.internalState !== "cancel"
                  ? "Fecha disponible"
                  : itemsAccordion.performances.length > 1 &&
                    dataEvento.product.internalState === "cancel"
                  ? "Fechas no disponibles"
                  : itemsAccordion.performances.length <= 1 &&
                    dataEvento.product.internalState === "cancel" &&
                    "Fecha no disponible"}
              </span>
              <IconAccordion item={performances} />
            </button>
          </h2>
          <div
            id="accordion-open-body-1"
            className={performances ? "" : "hidden"}
            aria-labelledby="accordion-open-heading-1"
          >
            <div
              className={
                performances
                  ? "max-h-[400px] overflow-y-auto border-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-sm"
                  : "hidden"
              }
            >
              {newPerformances.map((item) => {
                // console.log({internalState: item.internalState})
                // console.log({item})
                // if (item.internalState !== "sin fechas") {
                return (
                  <FechaEvento
                    dataFechas={item}
                    dataEvento={dataEvento}
                    key={item.id}
                    availabilitLevel={item.availabilitLevel}
                    reason={item.reason}
                    internalState={item.internalState}
                  />
                );
                // }
              })}
            </div>
          </div>
        </>
      )}

      {(itemsAccordion.promotion || itemsAccordion.promotionImage) && (
        <>
          <h2 id="accordion-open-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 uppercase    border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-3"
              aria-expanded="false"
              aria-controls="accordion-open-body-3"
              onClick={() => setPromotion((prevState) => !prevState)}
            >
              <span className="flex items-center text-lg font-semibold">
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
              {itemsAccordion.promotion && (
                <div
                  className={`text-base ${
                    Boolean(itemsAccordion.promotionImage) && "mb-6"
                  } text-gray-700`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(itemsAccordion.promotion),
                  }}
                ></div>
              )}

              {Boolean(itemsAccordion.promotionImage) && (
                <img
                  className="object-cover"
                  src={itemsAccordion.promotionImage.src}
                  srcSet={itemsAccordion.promotionImage.srcset}
                  alt={itemsAccordion.promotionImage.alt}
                />
              )}
            </div>
          </div>
        </>
      )}

      {(itemsAccordion.history || itemsAccordion.historyImage) && (
        <>
          <h2 id="accordion-open-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 uppercase    border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-2"
              aria-expanded="false"
              aria-controls="accordion-open-body-2"
              onClick={() => setHistory((prevState) => !prevState)}
            >
              <span className="flex items-center text-lg font-semibold">
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
              {/* {console.log(itemsAccordion.history)} */}
              {itemsAccordion.history && (
                <p
                  className={`text-base mb-6 text-gray-700    `}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(itemsAccordion.history),
                  }}
                ></p>
              )}

              {Boolean(itemsAccordion.historyImage) && (
                <img
                  className="object-cover"
                  src={itemsAccordion.historyImage.src}
                  srcSet={itemsAccordion.historyImage.srcset}
                  alt={itemsAccordion.historyImage.alt}
                />
              )}
            </div>
          </div>
        </>
      )}

      {(itemsAccordion.recomendation || itemsAccordion.recomendationImage) && (
        <>
          <h2 id="accordion-open-heading-6">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 uppercase    border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-6"
              aria-expanded="false"
              aria-controls="accordion-open-body-6"
              onClick={() => setRecomendation((prevState) => !prevState)}
            >
              <span className="flex items-center text-lg font-semibold w-[80%] sm:w-full">
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
              {itemsAccordion.recomendation && (
                <p
                  className={`text-base mb-6 text-gray-700   `}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(itemsAccordion.recomendation),
                  }}
                ></p>
              )}

              {Boolean(itemsAccordion.recomendationImage) && (
                <img
                  className="object-cover"
                  src={itemsAccordion.recomendationImage.src}
                  srcSet={itemsAccordion.recomendationImage.srcset}
                  alt={itemsAccordion.recomendationImage.alt}
                />
              )}
            </div>
          </div>
        </>
      )}
      {(itemsAccordion.extra || itemsAccordion.extraImage) && (
        <>
          <h2 id="accordion-open-heading-7">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 uppercase    border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-7"
              aria-expanded="false"
              aria-controls="accordion-open-body-7"
              onClick={() => setExtra((prevState) => !prevState)}
            >
              <span className="flex items-center text-lg font-semibold">
                {itemsAccordion.extraLabel
                  ? itemsAccordion.extraLabel
                  : "Extra"}
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
              {itemsAccordion.extra && (
                <p
                  className={`text-base mb-6 text-gray-700    `}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(itemsAccordion.extra),
                  }}
                ></p>
              )}

              {Boolean(itemsAccordion.extraImage) && (
                <img
                  className="object-cover"
                  src={itemsAccordion.extraImage.src}
                  srcSet={itemsAccordion.extraImage.srcset}
                  
                />
              )}
            </div>
          </div>
        </>
      )}

      {itemsAccordion?.mediaJson?.length > 0 && (
        <>
          <h2 id="accordion-open-heading-8">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 uppercase    border-b-2   border-gray-200  hover:bg-gray-50 dark:hover:bg-gray-800"
              data-accordion-target="#accordion-open-body-8"
              aria-expanded="false"
              aria-controls="accordion-open-body-8"
              onClick={() => setMediaJson((prevState) => !prevState)}
            >
              <span className="flex items-center text-lg font-semibold">
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
                // console.log({item})
                const url = item.media_json;
                const newUrl = new URL(url);
                const domainName = newUrl.hostname;
                if (domainName.includes("spotify")) {
                  // console.log({urlSpo: url.split('/')[5]})
                  return (
                    <iframe
                      key={item.id}
                      className="w-full rounded-xl h-20 mt-5"
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
                      key={item.id}
                      className="w-full mt-5"
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
