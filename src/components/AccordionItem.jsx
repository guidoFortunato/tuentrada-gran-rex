import DOMPurify from "dompurify";
import { FechaEvento } from "./";
import { useState } from "react";

export const AccordionItem = ({
  // itemsAccordion,
  data,
  // state,
  // setState,
  // redes,
  // descripcion,
  // setFechas,
  // setDescripcion,
  // setRedes,
  id
}) => {
  const [state, setState] = useState(true);
  // console.log({itemsAccordion})
  // console.log({item})

  return (
    <>
      <h2 id={`accordion-open-heading-${id}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-b-2 border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
          onClick={() => setState((prevState) => !prevState)}
        >
          <span className="flex items-center text-xl font-semibold">
            {/* {data.performances.length > 1 ? "Fechas" : "Fecha"} */}Fechas
          </span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 ${state ? "rotate-180" : ""} shrink-0`}
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
        className={state ? "" : "hidden"}
        aria-labelledby="accordion-open-heading-1"
      >
        <div className="grid grid-cols-3 p-3 lg:p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-sm">
          {data.performances.map((item) => (
            <FechaEvento
              performances={data.performances}
              data={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
