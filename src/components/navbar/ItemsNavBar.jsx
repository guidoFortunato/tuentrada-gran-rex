import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const ItemsNavBar = ({ item, handleButtonsCollapse }) => {
  const { dataInfoGeneral } = useContext(EventosContext);

  const path = item.path;

  return (
    <>
      <li
        key={item.id}
        className={
          item.type.name !== "Home"
            ? "lg:border-l-2 lg:border-black lg:pl-8"
            : ""
        }
        style={{ borderColor: dataInfoGeneral.colorHoverLi }}
      >
        {path.startsWith("/") ? (
          <NavLink
            to={item.path}
            onClick={() => handleButtonsCollapse()}
            style={({ isActive }) => ({
              color: isActive
                ? dataInfoGeneral.colorHoverLi
                : dataInfoGeneral.colorLi,
            })}
            onMouseOver={(e) => {
              const isActive = e.target.classList.contains("active");
              if (!isActive) {
                e.target.style.color = dataInfoGeneral.colorHoverLi;
              }
            }}
            onMouseOut={(e) => {
              const isActive = e.target.classList.contains("active");
              if (!isActive) {
                e.target.style.color = dataInfoGeneral.colorLi;
              }
            }}
            className="p-0 font-semibold transition-all duration-300 ease-in-out"
          >
            {item.type.name}
          </NavLink>
        ) : (
          <a
            href={item.path}
            rel="noreferrer"
            target="_blank"
            onClick={() => handleButtonsCollapse()}
            // style={({ isActive }) => ({
            //   color: isActive
            //     ? dataInfoGeneral.colorHoverLi
            //     : dataInfoGeneral.colorLi,
            // })}
            onMouseOver={(e) => {
              const isActive = e.target.classList.contains("active");
              if (!isActive) {
                e.target.style.color = dataInfoGeneral.colorHoverLi;
              }
            }}
            onMouseOut={(e) => {
              const isActive = e.target.classList.contains("active");
              if (!isActive) {
                e.target.style.color = dataInfoGeneral.colorLi;
              }
            }}
            className="p-0 font-semibold transition-all duration-300 ease-in-out"
          >
            {item.type.name}
          </a>
        )}
      </li>
    </>
  );
};
