import React from "react";
import imgRex from "../assets/logo_rex.png";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg color-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={imgRex} alt="logo gran rex" style={{ width: "120px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/historia"
              >
                Historia
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/ubicaciones"
              >
                Ubicaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/beneficios"
              >
                Beneficios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/como-llegar"
              >
                Cómo llegar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
