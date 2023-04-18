import React, { useState } from "react";
import imgRex from "../assets/images/logo_rex_negro.jpg";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const itemsNavbar = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
    mostrar: true,
  },
  {
    id: 2,
    name: "Calendario",
    link: "/calendario",
    mostrar: true,
  },
  {
    id: 3,
    name: "Historia",
    link: "/historia",
    mostrar: true,
  },
  {
    id: 4,
    name: "Ubicaciones",
    link: "/ubicaciones",
    mostrar: false,
  },
  {
    id: 5,
    name: "Cómo llegar",
    link: "/como-llegar",
    mostrar: true,
  },
  {
    id: 6,
    name: "Preguntas frecuentes",
    link: "/preguntas-frecuentes",
    mostrar: false,
  },
];

export const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
  
    <nav className="navbar navbar-dark navbar-expand-lg color-navbar sticky-top animate__animated animate__fadeIn animate__faster" >
    
      
      <div className="container">
        <div className="row w-100 justify-content-center">
          

          <div className="col-12 text-center mb-5">
            <Link className="navbar-brand" to="/">
              <img src={imgRex} alt="logo gran rex" style={{ width: "75px" }} />
            </Link>
          </div>

          <div className="col-12 ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span
                style={{ fontSize: "16px" }}
                className="navbar-toggler-icon"
              ></span>
            </button>
            <div
              className={`${
                isNavCollapsed ? "collapse" : ""
              } navbar-collapse justify-content-center`}
              id="navbarNav"
            >
              <ul className="navbar-nav" style={{ fontSize: "18px" }}>
                {itemsNavbar.map(
                  (item) =>
                    item.mostrar && (
                      <li className="nav-item item-nav" key={item.id}>
                        <Link
                          className="nav-link border-navbar-color border-navbar"
                          to={item.link}
                          onClick={handleNavCollapse}
                        >
                          <span className="size-item-nav">{item.name}</span>
                        </Link>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    
    </nav>
  );
};
