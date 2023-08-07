import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

import { EventosContext } from "../context/EventosProvider";
import { CardEvento, Spinner } from "../components";
import { getData, getEnvVariables } from "../helpers";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const BusquedaEventos = () => {
  const [data, setData] = useState(null);
  const {
    idVenue,
    dataInfoGeneral,
    handleButtonsCollapse: handleNavBarCollapse,
  } = useContext(EventosContext);
  const { pathname, search } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const query = search.split("=")[1];
  const paramSearch = (pathname.split("/")[2] + search).split("=")[0] + "=";
  // console.log(paramSearch);
  // console.log({pathname,search})
  // console.log({pathname,search})

  useEffect(() => {
    handleNavBarCollapse();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        setIsLoading(true);
        const { data } = await getData(
          VITE_API_EVENTOS + idVenue + "/search/" + query,
          VITE_EMAIL,
          VITE_PASS
        );
        console.log({ data });
        setData(data);
        setIsLoading(false);
      };
      getInfo();
    }
  }, [idVenue, query, search]);

  // console.log({isLoading})

  if (data === null) return <Spinner />;

  if (isLoading === true) return <Spinner />;

  if (data === undefined) return <Navigate to="/" />;

  if (paramSearch !== "search?q=") return <Navigate to="/" />;

  return (
    <>
      <div className="container mx-auto">
        {data.products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mt-10 px-3 lg:px-0">
            {data.products.map((item) => (
              <CardEvento
                linkEvento={"/" + item.slug}
                img={item.image}
                status={item.state}
                title={item.name}
                key={item.id}
                data={item}
              />
            ))}
          </div>
        ) : (
          <div
            className="mt-10 flex justify-center mx-auto  p-4 mb-4 text-sm   }"
            role="alert"
          >
            <span className="sr-only">Info</span>
            <div>
              <span
                className="font-semibold text-xl text-center flex justify-center items-center flex-col"
                style={{
                  color: dataInfoGeneral.backgroundButton,
                }}
              >
                <img
                  className="w-60 lg:w-1/2"
                  src="https://www.tuentrada.com/teatro/gran-rex/imagenes/error.png"
                  alt="no hay eventos"
                />
                No pudimos encontrar el evento
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
