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
    mostrar: false,
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
    <nav className="navbar navbar-dark navbar-expand-lg color-navbar sticky-top animate__animated animate__fadeIn animate__faster">
      <div className="container container-nav">
        <Link className="navbar-brand" to="/">
          <img src={imgRex} alt="logo gran rex" style={{ width: "75px" }} />
        </Link>

        <div className="redes-info">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}>
                <span
                  style={{ fontSize: "16px" }}
                  className="navbar-toggler-icon"
                ></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"  >
            <div className="redes-nav">
              <ul className="list-unstyled d-flex mb-0">
                <li className="me-3">
                  <a
                    className="link-dark"
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=100057465485820"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      style={{
                        padding: "5px",
                        fill: "#ffffff",
                      }}
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"></path>
                    </svg>
                  </a>
                </li>
                <li className="me-3">
                  <a
                    className="link-dark"
                    rel="noreferrer"
                    href="https://twitter.com/teatrogranrex"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      style={{
                        padding: "5px",
                        fill: "#ffffff",
                      }}
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="link-dark"
                    rel="noreferrer"
                    href="https://www.instagram.com/teatro_granrex/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      style={{
                        padding: "5px",
                        fill: "#ffffff",
                      }}
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <ul className="navbar-nav ms-auto" style={{ fontSize: "16px" }}>
              {itemsNavbar.map(
                (item) =>
                  item.mostrar && (
                    <li className="nav-item me-lg-4" key={item.id}>
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
    </nav>
  );
};
