import React, { useContext, useState } from "react";
// import imgRex from "/assets/imagenes/logo_rex_negro.jpg";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./";

export const Navbar = () => {
  const [ isNavCollapsed, setIsNavCollapsed ] = useState(true);
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  if ( isLoadingNavbar ) {
    return <Spinner />
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg color-navbar sticky-top animate__animated animate__fadeIn animate__faster">
      <div className="container-fluid">
        <Link className="navbar-brand ms-lg-4" to="/">
          <img src={ dataNavbar?.logo } alt={ dataNavbar?.altLogo } style={ { width: "75px" } } />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={ !isNavCollapsed ? true : false }
          aria-label="Toggle navigation"
          onClick={ handleNavCollapse }
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
            { dataNavbar?.items.map(
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
            ) }
          </ul>
          <div className="d-flex flex-column ms-lg-auto me-lg-4">
            <div>
              <span className="span-redes me-2">{ dataNavbar?.labelRedes }</span>
            </div>
            <div>
              <ul className="list-unstyled d-flex mb-0">
              {
                dataNavbar?.itemsRedes.map( item => (
                  <li className="me-3" key={item.id}>
                  <a
                    className="link-dark"
                    rel="noreferrer"
                    href={item.href}
                    target="_blank"
                  >
                    <svg xmlns={item.xmlns} x={item.x}  y={item.y} style={item.style}  width={item.width} height={item.height} viewBox={item.viewBox}>  <path d={item.path}></path></svg>
                  </a>
                </li>
                ))
              }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};