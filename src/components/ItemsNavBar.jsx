import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";

export const ItemsNavBar = ({ item, handleButtonsCollapse }) => {
  const [activeItem, setActiveItem] = useState(false);
  const { dataInfoGeneral } = useContext(EventosContext);

  const handleItemClick = () => {
    setActiveItem( prevstate => !prevstate );
  };

  console.log({ item });

  return (
    <li
      key={item.id}
      onClick={() => handleItemClick(item.type.name)}
    >
      <NavLink
        to={item.path}
        onClick={() => handleButtonsCollapse()}
        // className={`text-[${dataInfoGeneral.colorSiteName}] ${activeItem ? "active" : ""} font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
        className={({ isActive }) => isActive ? `active text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out` : `text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`  }
      >
        {item.type.name}
      </NavLink>
    </li>
  );
};
