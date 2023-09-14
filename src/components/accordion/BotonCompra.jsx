import { useContext } from "react";
import { EventosContext } from "../../context/EventosProvider";

export const BotonCompra = ({ performances }) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({performances})
  return (
    <a href={performances?.buyButtons[0]?.link} target="_blank">
      <button
        type="button"
        className={`focus:outline-none font-medium rounded text-sm px-3 py-2.5 text-center`}
        style={{
          color: dataInfoGeneral?.colorButton,
          backgroundColor: dataInfoGeneral?.backgroundButton,
        }}
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
  );
};
