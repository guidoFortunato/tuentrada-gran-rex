import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";
import { FormBusqueda, ItemsNavBar } from "./";
import { ItemRedes, NavbarRex } from "../";
import { getEnvVariables } from "../../helpers";
const { VITE_VENUE } = getEnvVariables();

export const NavBar = () => {
  const { dataInfoGeneral, handleButtonsCollapse, handleSearchCollapse, handleButtonCollapse, isSearchCollapsed, isButtonCollapsed, host } = useContext(EventosContext);
  // const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);
  // const [isButtonCollapsed, setIsButtonCollapsed] = useState(false);
  const [navbar, setNavbar] = useState(false);


  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // console.log({dataInfoGeneral})

  // if (dataInfoGeneral.length === 0) return <Spinner />;

  // if (dataInfoGeneral == "") return <Spinner />;
  if( host === VITE_VENUE ){
    return <NavbarRex />
  }
  return (
    <>
      <nav
        style={{
          backgroundColor: dataInfoGeneral.backgroundNavbar,
          // fontFamily: "Raleway",
        }}
        className={`${
          navbar ? "shadow-light" : ""
        } border-gray-200 sticky top-0 z-30 pb-3 lg:pb-0 background-navbar`}
        // className={`${
        //   navbar ? "shadow-light" : ""
        // } border-gray-200 sticky top-0 z-30 pb-3 lg:pb-0 background-navbar`}
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 pt-4">
          <Link to="/" className="flex items-center">
            <img
              src={dataInfoGeneral.logo}
              className="h-12 mr-3"
              alt={dataInfoGeneral.altLogo}
            />
            <span
              className="self-center text-xl font-semibold whitespace-nowrap"
              style={{ color: dataInfoGeneral.backgroundBody }}
            >
              {dataInfoGeneral.pages[0].title}
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
              <FormBusqueda />
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
              <FormBusqueda />
            </div>
            <ul
              style={{ backgroundColor: `${dataInfoGeneral.backgroundNavbar}` }}
              className={`flex font-medium flex-row space-x-4 lg:space-x-5 justify-end lg:bg-white mt-4 lg:mt-0 ${
                isButtonCollapsed ? "" : "hidden"
              } lg:flex `}
            >
              {dataInfoGeneral.socialNetworks.map((item) => (
                <ItemRedes key={item.id} item={item} />
              ))}
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
              className={`flex flex-col font-medium  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-2 lg:border-transparent lg:bg-white space-y-3 lg:space-y-0 ${
                isButtonCollapsed ? "" : "hidden"
              } lg:flex `}
            >
              {dataInfoGeneral.pages.map((item) => {
                if (item.where === "navbar" || item.where === "both") {
                  return (
                    <ItemsNavBar
                      handleButtonsCollapse={handleButtonsCollapse}
                      key={item.id}
                      item={item}
                    />
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
