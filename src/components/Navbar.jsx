import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { FormBusqueda2 } from "./FormBusqueda2";
// import { Spinner } from "./";

// import "../css/navbar.css";

export const NavBar = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);
  const [isButtonCollapsed, setIsButtonCollapsed] = useState(false);
  const [isDropdownCollapsed, setIsDropdownCollapsed] = useState(false);

  const handleSearchCollapse = () =>
    setIsSearchCollapsed((prevState) => !prevState);
  const handleButtonCollapse = () =>
    setIsButtonCollapsed((prevState) => !prevState);

  const handleButtonsCollapse = () => {
    setIsButtonCollapsed(false);
    setIsSearchCollapsed(false);
  };
  const handleDropdown = () =>
    setIsDropdownCollapsed((prevState) => !prevState);

  console.log({ dataInfoGeneral });

  // if (dataInfoGeneral.length === 0) return <Spinner />;

  return (
    <>
      <nav
        style={{
          backgroundColor: `${dataInfoGeneral.backgroundNavbar}`,
          fontFamily: "Raleway",
        }}
        className={`shadow-light border-gray-200 sticky top-0 z-30`}
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src={dataInfoGeneral.logo}
              className="h-8 mr-3"
              alt={dataInfoGeneral.altLogo}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              {dataInfoGeneral.name}
            </span>
          </Link>
          <div className="flex lg:w-1/3">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="lg:hidden text-gray-500 hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
              onClick={handleSearchCollapse}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Buscar evento</span>
            </button>
            <div className="relative hidden lg:block lg:w-full">
              <FormBusqueda2 />
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={handleButtonCollapse}
            >
              <span className="sr-only">Menu abrir</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              isSearchCollapsed || isButtonCollapsed ? "" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-search"
          >
            <div
              className={`relative mt-3 ${
                isSearchCollapsed ? "" : "hidden"
              } lg:hidden`}
            >
              <FormBusqueda2 />
            </div>
            <ul
              style={{ backgroundColor: `${dataInfoGeneral.backgroundNavbar}` }}
              className={`flex flex-col font-medium  lg:flex-row lg:space-x-8 mt-2 space-y-1 lg:space-y-0 lg:mt-0 lg:border-2 lg:border-transparent lg:bg-white ${
                isButtonCollapsed ? "" : "hidden"
              } lg:flex `}
            >
              <li>
                <Link
                  to="/"
                  onClick={() => handleButtonsCollapse()}
                  className={`text-[${dataInfoGeneral.colorSiteName}] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" > 
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
                </Link>
              </li>
              <li>
                <Link
                  to="/calendario"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  Calendario
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  Historia
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ display:"flex", justifyContent: "end", paddingBottom: "10px"}}
            className={`items-center justify-end ${
              isSearchCollapsed || isButtonCollapsed ? "" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-search"
          >
          <ul style={{backgroundColor: `${dataInfoGeneral.backgroundNavbar}`,}} className={`flex flex-col font-medium  lg:flex-row lg:space-x-8 mt-2 space-y-1 lg:space-y-0 lg:mt-0 lg:border-2 lg:border-transparent lg:bg-white ${isButtonCollapsed ? "" : "hidden"  } lg:flex `}>
              <li>
                <Link
                  to="/"
                  onClick={() => handleButtonsCollapse()}
                  className={`text-[${dataInfoGeneral.colorSiteName}] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleButtonsCollapse()}
                  className={`text-[${dataInfoGeneral.colorSiteName}] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
                >
                  Calendario
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleButtonsCollapse()}
                  className={`text-[${dataInfoGeneral.colorSiteName}] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
                >
                  Historia
                </Link>
              </li>
              <li>
                <Link
                  to="/calendario"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  Horarios y Llegada
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-semibold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  Bases y condiciones
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-dark navbar-expand-lg color-navbar sticky-top animate__animated animate__fadeIn animate__faster">
      <div className="container-fluid">
        <Link className="navbar-brand ms-lg-4" to="/">
          <img
            src={dataInfoGeneral?.logo}
            alt={dataInfoGeneral?.altLogo}
            style={{ width: "180px" }}
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
            {dataInfoGeneral?.pages.map((item) => (
              <li className="nav-item item-nav" key={item.id}>
                <Link
                  className="nav-link border-navbar-color border-navbar"
                  to={item.path}
                  onClick={handleNavCollapse}
                >
                  <span className="size-item-nav">{item.type.name}</span>
                </Link>
              </li>
            ))}
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
    </nav> */}
    </>
  );
};
