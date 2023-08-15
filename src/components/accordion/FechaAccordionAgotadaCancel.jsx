export const FechaAccordionAgotadaCancel = ({ dia, hora, mesFormateado, anio, internalState }) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-16">
          <div className="lg:mr-1 whitespace-nowrap text-base lg:text-lg font-semibold text-gray-300">
            <span>
              {dia} {mesFormateado}
            </span>
          </div>
          <div className="md:mr-1 text-left text-base lg:text-lg font-semibold text-gray-300">
            <span>{anio}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center ml-4">
          <div>
            <span className={`text-md text-gray-300 uppercase font-semibold`}>
              Ver precios y ubicaciones
            </span>
          </div>

          <div>
            <span className={`${internalState === "cancel" ? "text-black" : "text-red-400"} uppercase text-xs font-semibold`}>
              {internalState === "cancel" ? "fecha cancelada" : "entradas agotadas" }
            </span>
          </div>

          <div className="md:mr-1 text-left text-sm text-gray-300 font-semibold ">
            <span>{hora}hs</span>
          </div>
       
        </div>
      </div>

      <div className="text-end mt-4 lg:my-auto">
        <button
          type="button"
          className="text-white bg-gray-300 cursor-default focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center"
        >
          Comprar entradas
        </button>
      </div>
    </>
  );
};
