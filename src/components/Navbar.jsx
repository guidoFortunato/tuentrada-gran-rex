import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { FormBusqueda2 } from "./FormBusqueda2";
// import { Spinner } from "./";

// import "../css/navbar.css";

export const NavBar = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isDropdownCollapsed, setIsDropdownCollapsed] = useState(false);
  const handleNavCollapse = () => setIsNavCollapsed((prevState) => !prevState);
  const handleDropdown = () =>
    setIsDropdownCollapsed((prevState) => !prevState);

  console.log({ dataInfoGeneral });

  // if (dataInfoGeneral.length === 0) return <Spinner />;

  return (
    <>
      <nav className="shadow-light bg-white border-gray-200 sticky top-0 z-30">
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              {dataInfoGeneral.name}
            </span>
          </Link>
          <div className="flex lg:w-2/5">
         
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="lg:hidden text-gray-500 hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
              onClick={handleNavCollapse}
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
              onClick={handleNavCollapse}
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
            className={`items-center justify-between ${!isNavCollapsed ? "hidden" : ""} w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-search"
          >
            <div className="relative mt-3 lg:hidden">
              <FormBusqueda2 />
              
            </div>
            <ul className="flex flex-col font-medium border border-transparent lg:flex-row lg:space-x-8 mt-2 space-y-1 lg:space-y-0 lg:mt-0 lg:border-0 lg:bg-white">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsNavCollapsed(false)}
                  className="text-[#855F35] font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/calendario"
                  onClick={() => setIsNavCollapsed(false)}
                  className="text-[#855F35] font-semibold"
                >
                  Calendario
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  onClick={() => setIsNavCollapsed(false)}
                  className="text-[#855F35] font-semibold"
                >
                  Historia
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center font-semibold justify-between     text-[#855F35] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto"
                  onClick={handleDropdown}
                >
                  Seguinos
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className={`z-50 ${!isDropdownCollapsed ? "hidden" : ""} font-normal bg-white   rounded-lg shadow w-44 relative`}
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
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
