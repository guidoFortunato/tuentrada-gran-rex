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
  exact // Añadir la prop exact para que se aplique solo en la ruta exacta
  onClick={() => handleButtonsCollapse()}
  style={{
    color: location.pathname === item.path ? dataInfoGeneral.colorHoverLi : dataInfoGeneral.colorLi,
    backgroundColor: 'transparent', // Puedes ajustar esto según tu diseño
    transition: 'color 0.3s', // Transición suave para el color
  }}
  activeClassName="active" // Clase CSS para el estado activo
  isActive={(match, location) => {
    // Aquí defines la lógica para determinar si el enlace está activo
    // Por ejemplo, puedes comparar location.pathname con item.path
    return match || location.pathname === item.path;
  }}
  onMouseOver={(e) => {
    e.target.style.color = dataInfoGeneral.colorHoverLi; // Cambiar al color de hover
  }}
  onMouseOut={(e) => {
    if (location.pathname !== item.path) {
      e.target.style.color = dataInfoGeneral.colorLi; // Restaurar el color original si no está activo
    }
  }}
  className="p-0 font-semibold transition-all duration-300 ease-in-out"
>
  {item.type.name}
</NavLink>
        {/* <span className="hidden lg:inline-block pl-10 font-medium">|</span> */}
      </li>
    </>
  );
};
