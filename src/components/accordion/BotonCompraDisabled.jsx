export const BotonCompraDisabled = ({ dataFecha }) => {
  return (
    <button
      type="button"
      className="text-white bg-gray-300 cursor-default focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center"
    >
      {dataFecha?.buyButtons[0]?.label}
    </button>
  );
};
