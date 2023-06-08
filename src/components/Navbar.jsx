import React, { useContext, useEffect, useState } from "react";
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
  // const [navbar, setNavbar] = useState(false);


	// const changeBackground = () => {
	// 	if (window.scrollY >= 1) {
	// 		setNavbar(true);
	// 	} else {
	// 		setNavbar(false);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener('scroll', changeBackground);
  //   console.log('escucha scroll')

	// 	return () => {
	// 		window.removeEventListener('scroll', changeBackground);
	// 	};
	// }, []);

  console.log({ dataInfoGeneral });

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

  // if (dataInfoGeneral.length === 0) return <Spinner />;

  return (
    <>
      <nav
        style={{
          backgroundColor: `${dataInfoGeneral.backgroundNavbar}`,
          fontFamily: "Raleway",
        }}
        className={`shadow-light border-gray-200 sticky top-0 z-30 pb-3 lg:pb-0`}
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 pt-4">
          <Link to="/" className="flex items-center">
            <img
              src={dataInfoGeneral.logo}
              className="h-8 mr-3"
              alt={dataInfoGeneral.altLogo}
            />
            <span className="self-center text-xl font-bold whitespace-nowrap">
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
              className={`flex  font-medium  flex-row lg:space-x-8 justify-end space-x-4 lg:bg-white mt-4 lg:mt-0 ${
                isButtonCollapsed ? "" : "hidden"
              } lg:flex `}
            >
              <li>
              <Link
                  to="/calendario"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="/calendario"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div
            style={{ width: "100%", padding: "10px" }}
            className={`items-center justify-center ${
              isSearchCollapsed || isButtonCollapsed ? "" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-search"
          >
            <ul
              style={{ backgroundColor: `${dataInfoGeneral.backgroundNavbar}` }}
              className={`flex flex-col font-medium  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-2 lg:border-transparent lg:bg-white space-y-2 lg:space-y-0 ${
                isButtonCollapsed ? "" : "hidden"
              } lg:flex `}
            >
              <li>
                <Link
                  to="/"
                  onClick={() => handleButtonsCollapse()}
                  className={`text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleButtonsCollapse()}
                  className={`text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
                >
                  Calendario
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => handleButtonsCollapse()}
                  className={`text-[${dataInfoGeneral.colorSiteName}] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out`}
                >
                  Historia
                </Link>
              </li>
              <li>
                <Link
                  to="/calendario"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
                >
                  Horarios y Llegada
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  onClick={() => handleButtonsCollapse()}
                  className="text-[#855F35] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
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
