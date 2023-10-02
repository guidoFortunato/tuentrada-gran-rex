import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";
import { ItemsNavBar } from "./";
import { ItemRedes } from "../";

export const NavbarRex = () => {
  const {
    dataInfoGeneral,
    handleButtonsCollapse,
    handleButtonCollapse,
    isSearchCollapsed,
    isButtonCollapsed,
  } = useContext(EventosContext);
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

  // if (dataInfoGeneral.length === 0) return <Spinner />;

  // if (dataInfoGeneral == "") return <Spinner />;
  return (
    <>
      <nav
        style={{
          backgroundColor: dataInfoGeneral.backgroundNavbar,
        }}
        className={`${
          navbar ? "shadow-light" : ""
        } border-gray-200 sticky top-0 z-30 background-navbar pb-3`}
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 pt-4">
          <Link to="/" className="flex items-center">
            <img
              src={dataInfoGeneral.logo.src}
              className="h-12 mr-3"
              alt={dataInfoGeneral.logo.alt}
            />
            {(dataInfoGeneral.whereName === "navbar" ||
              dataInfoGeneral.whereName === "both") && (
              <span
                className="self-center text-xl font-semibold whitespace-nowrap"
                style={{ color: dataInfoGeneral.backgroundBody }}
              >
                {dataInfoGeneral.name}
              </span>
            )}
           
          </Link>
         
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
          
          <div
            className={`items-center justify-center ${
              isSearchCollapsed || isButtonCollapsed ? "" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1 mt-5 lg:mt-0`}
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
          <div
            className={`items-center justify-between ${
              isSearchCollapsed || isButtonCollapsed ? "" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="navbar-search"
          >
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
        </div>
      </nav>
    </>
  );
};
