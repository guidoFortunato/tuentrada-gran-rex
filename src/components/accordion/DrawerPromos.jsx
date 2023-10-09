import { Drawer } from "flowbite";
import { useContext, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { EventosContext } from "../../context/EventosProvider";
import { BotonCompra, BotonCompraDisabled } from "..";

export const DrawerPromos = ({
  drawerRef,
  dia,
  mes,
  anio,
  hora,
  performances,
}) => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [drawerFlowbite, setDrawerFlowbite] = useState(null);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  useEffect(() => {
    if (drawerRef.current !== null) {
      const options = {
        placement: "right",
        backdrop: true,
        bodyScrolling: false,
        edge: false,
        backdropClasses:
          "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        onHide: () => {
          setIsDrawerVisible(false);
        },
        onShow: () => {
          setIsDrawerVisible(true);
        },
      };
      const drawer = new Drawer(drawerRef.current, options);
      setDrawerFlowbite(drawer);
    }
  }, [drawerRef.current]);

  // Función para mostrar el drawer
  const openDrawer = () => {
    if (drawerFlowbite) {
      drawerFlowbite.show();
    }
  };

  // Función para cerrar el drawer
  const closeDrawer = () => {
    if (drawerFlowbite) {
      drawerFlowbite.hide();
    }
  };

  return (
    <>
      <div className="text-center">
        <button
          className="text-white font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
          style={{
            color: dataInfoGeneral?.colorButton,
            backgroundColor: dataInfoGeneral?.backgroundButton,
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = dataInfoGeneral?.colorHoverButton; // Cambiar al color de hover
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = dataInfoGeneral?.backgroundButton; // Restaurar el color original
          }}
          onClick={openDrawer}
        >
          Comprar Entradas Drawer
        </button>
      </div>
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
        ref={drawerRef}
      >
        <h5
          id="drawer-right-label"
          className="flex justify-start items-center mb-2 text-base font-bold"
        >
          {/* <svg
            className="w-4 h-4 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg> */}
          <FaCalendarAlt className="mr-1 mb-1" />
          FECHA SELECCIONADA
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={closeDrawer}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <p className="text-left text-base font-semibold text-gray-700">
          {dia} {mes} {anio}
        </p>
        <p className="mb-5 text-left text-base font-semibold text-gray-700">
          {hora} hs
        </p>
        <div className="grid grid-cols-1 gap-2">
          <h3 className="text-left text-base font-semibold mb-0">
            Venta general
          </h3>
          <h5 className="text-left text-md font-semibold mb-0">
            Todos los medios de pago correspondientes
          </h5>
          <BotonCompra
            performances={performances}
            styles={{
              color: dataInfoGeneral?.colorButton,
              backgroundColor: dataInfoGeneral?.backgroundButton,
              width: "100%",
            }}
          />
          <h3 className="text-left text-base font-semibold mb-0">
            Banco Galicia
          </h3>
          <h5 className="text-left text-md font-semibold mb-0">
            Exclusivo Visa Eminent hast agotar stock
          </h5>
          <BotonCompra
            performances={performances}
            styles={{
              color: dataInfoGeneral?.colorButton,
              backgroundColor: dataInfoGeneral?.backgroundButton,
              width: "100%",
            }}
          />
          <h3 className="text-left text-base font-semibold mb-0 text-gray-300">
            Preventa Spotify
          </h3>
          <h5 className="text-left text-md font-semibold mb-0 text-gray-300">
            Finalizada
          </h5>
          <BotonCompraDisabled
            dataFecha={performances}
            styles={{
              color: dataInfoGeneral?.colorButton,
              backgroundColor: dataInfoGeneral?.backgroundButton,
              width: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};
