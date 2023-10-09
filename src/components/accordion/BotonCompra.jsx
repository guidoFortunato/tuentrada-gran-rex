import { useContext } from "react";
import PropTypes from 'prop-types';
import { EventosContext } from "../../context/EventosProvider";


export const BotonCompra = ({ performances, styles }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  
  // console.log({performances})
  return (
    <>
      <a href={performances?.buyButtons[0]?.link} target="_blank">
        <button
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
          className={"text-white bg-gray-300 focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center cursor-pointer"}
          style={ styles ? styles : undefined }
          onMouseOver={(e) => {
            e.target.style.backgroundColor = dataInfoGeneral?.colorHoverButton; // Cambiar al color de hover
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = dataInfoGeneral?.backgroundButton; // Restaurar el color original
          }}
        >
          {performances?.buyButtons[0]?.label}
        </button>
      </a>
      
    </>
  );
};

BotonCompra.propTypes = {
  styles: PropTypes.object, // PropTypes para asegurar que styles sea un objeto
};
