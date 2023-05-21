import React, { useContext, useState } from "react";
// import imgRex from "/assets/imagenes/logo_rex_negro.jpg";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./";

import "../css/navbar.css";

export const Navbar = () => {
  const { dataNavbar, isLoadingNavbar, dataInfoGeneral } =
    useContext(EventosContext);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  console.log(dataInfoGeneral);

  if (isLoadingNavbar) {
    return <Spinner />;
  }

  if (dataInfoGeneral.length === 0) {
    return <Spinner />;
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg color-navbar sticky-top animate__animated animate__fadeIn animate__faster">
      <div className="container-fluid">
        <Link className="navbar-brand ms-lg-4" to="/">
          <img
            src={dataInfoGeneral?.logo}
            alt={dataInfoGeneral?.altLogo}
            style={{ width: "75px" }}
          />
        </Link>

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
          <ul className="navbar-nav ms-auto" style={{ fontSize: "18px" }}>
            {dataNavbar?.items.map(
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
          <div className="d-flex flex-column ms-lg-auto me-lg-4">
            <div>
              <span className="span-redes me-2">
                Seguinos en nuestras redes
              </span>
            </div>
            <div>
              <ul className="list-unstyled d-flex mb-0">
                {dataInfoGeneral?.socialNetworks &&
                  dataInfoGeneral?.socialNetworks?.map((item) => (
                    <li className="me-3" key={item.id}>
                      <a
                        className="link-dark"
                        rel="noreferrer"
                        href={item.href}
                        target="_blank"
                      >
                        <svg
                          xmlns={item.xmlns}
                          x={"0px"}
                          y={"0px"}
                          style={{ padding: "5px", fill: "#ffffff" }}
                          width={item.width}
                          height={item.height}
                          viewBox={item.viewBox}
                        >
                          <path d={item.path}></path>
                        </svg>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
        
    </nav>
  );
};
