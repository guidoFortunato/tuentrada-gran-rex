import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";
// import { alertaSuccess } from "../../helpers";

export const ItemsNavBar = ({ item, handleButtonsCollapse }) => {
  const { dataInfoGeneral } = useContext(EventosContext);

  const path = item.path;
  // console.log({item})

  const handleDownload = (e)=>{
    // console.log(e)
    handleButtonsCollapse()
    // alertaSuccess();
  }

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
            to={path}
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
            href={path}
            // download
            rel="noreferrer"
            target="_blank"
            onClick={ handleDownload }
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
