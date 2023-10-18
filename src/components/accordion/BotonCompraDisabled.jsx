import PropTypes from 'prop-types';

export const BotonCompraDisabled = ({ dataFecha, internalState, styles }) => {
  // console.log(Boolean(dataFecha.buyButtons));
  return (
    <button
      type="button"
      className= {"text-white bg-gray-300 cursor-default focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center"}
      style={ styles ? styles : undefined }
    >
      { internalState === "cancel" ? "Comprar entradas" : dataFecha?.buyButtons?.length > 0 ? dataFecha?.buyButtons[0]?.label : "Comprar entradas"  }
    </button>
  );
};

BotonCompraDisabled.propTypes = {
  styles: PropTypes.object, // PropTypes para asegurar que styles sea un objeto
};
