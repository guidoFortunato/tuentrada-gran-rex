import React, { useContext } from "react";
import { EventosContext } from "../context/EventosProvider";

export const ItemRedes = ({item}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  console.log(item)
  return (
    <li key={item.id}>
      <a
        href={item.href}
        target="_blank"
        // onClick={() => handleButtonsCollapse()}
        className=" font-bold border-b-2 border-transparent transition-all duration-300 ease-in-out"
    
      
      >
        <svg
          xmlns={item.xmlns}
          x="0px"
          y="0px"
          width={item.width}
          height={item.height}
          fill={item.fill}
          viewBox={item.viewBox}
        >
          <path d={item.path}></path>
        </svg>
      </a>
    </li>
  );
};
