import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const ItemsNavBar = ({ item, handleButtonsCollapse }) => {
  const { dataInfoGeneral } = useContext(EventosContext);

  return (
    <li key={item.id}>
      <NavLink
        to={item.path}
        onClick={() => handleButtonsCollapse()}
        className={({ isActive }) =>
          isActive
            ? `active text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`
            : `text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`
        }
      >
        {item.type.name}
      </NavLink>
    </li>
  );
};
