import React from "react";
import imgRex from "../assets/logo_rex.png";
import "../css/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg color-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={imgRex} alt="logo gran rex" style={{ width: "90px" }} />
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
          <span style={{fontSize:"16px"}} className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{fontSize:"16px"}}>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/"
              >
                <span className="size-item-nav">Inicio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/calendario"
              >
                <span className="size-item-nav">Calendario</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/historia"
              >
                <span className="size-item-nav">Historia</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/ubicaciones"
              >
                <span className="size-item-nav">Ubicaciones</span>
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                className="nav-link border-navbar-color border-navbar"
                to="/como-llegar"
              >
                <span className="size-item-nav">Cómo llegar</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
