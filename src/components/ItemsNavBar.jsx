import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";


export const ItemsNavBar = ({item}) => {
  
  const { dataInfoGeneral } = useContext(EventosContext);

  return (
    <li key={item.id}>
      <Link
        to={item.path}
        onClick={() => handleButtonsCollapse()}
        className={`text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
      >
        {item.type.name}
      </Link>
    </li>
  );
};
