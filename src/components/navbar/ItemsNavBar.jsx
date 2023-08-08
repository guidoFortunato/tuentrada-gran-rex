import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const ItemsNavBar = ({ item, handleButtonsCollapse }) => {
  const { dataInfoGeneral } = useContext(EventosContext);


  return (
    <>
      <li key={item.id} className={item.type.name !== "Home" ? "lg:border-l-2 lg:border-black lg:pl-8" : ""}>
      <NavLink
  to={item.path}
  onClick={() => handleButtonsCollapse()}
  style={{
    color: dataInfoGeneral.colorLi, // Color original
    backgroundColor: 'transparent', // Puedes ajustar esto según tu diseño
    transition: 'color 0.3s', // Transición suave para el color
  }}
  onMouseOver={(e) => {
    e.target.style.color = dataInfoGeneral.colorHoverLi; // Cambiar al color de hover
  }}
  onMouseOut={(e) => {
    e.target.style.color = dataInfoGeneral.colorLi; // Restaurar el color original
  }}

  className="p-0 font-semibold lg:hover:text-[#8b663c] transition-all duration-300 ease-in-out"
>
  {item.type.name}
</NavLink>
        {/* <span className="hidden lg:inline-block pl-10 font-medium">|</span> */}
      </li>
    </>
  );
};
