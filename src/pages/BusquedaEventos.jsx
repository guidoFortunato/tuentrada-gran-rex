import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

import { EventosContext } from "../context/EventosProvider";
import { CardEvento, Spinner } from "../components";
import { getData, getEnvVariables } from "../helpers";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const BusquedaEventos = () => {
  const [data, setData] = useState(null);
  const { idVenue, dataInfoGeneral } = useContext(EventosContext);
  const { pathname, search } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const query = search.split("=")[1];
  const paramSearch = (pathname.split("/")[2] + search).split("=")[0] + "=";
  // console.log(paramSearch);
  // console.log({pathname,search})
  // console.log({pathname,search})

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
        {/* <div className="flex justify-center mt-10 text-center">
          <h2>
            Resultados de tu búsqueda
            <strong className="mx-1">"{query.split("%20").join(" ")}"</strong>:
          </h2>
        </div> */}

        {data.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mt-10 px-3 lg:px-0">
            {data.map((item) => (
              <CardEvento
                linkEvento={"/" + item.slug + "/" + item.id}
                img={item.image}
                status={item.state}
                title={item.name}
                key={item.id}
                disabled={item.disabled}
                reason={item.reason}
                disponibility={item.disponibility}
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
                className="font-semibold text-xl flex justify-center items-center flex-col"
                style={{
                  color: dataInfoGeneral.backgroundButton,
                }}
              >
                <img
                  className="w-60 lg:w-1/2"
                  src="https://www.tuentrada.com/teatro/gran-rex/imagenes/error.png"
                  alt=""
                />
                No pudimos encontrar el evento
              </span>
            </div>
          </div>
        )}

        {/* <div className="flex justify-center mt-10">
          <Link to="/">
            <button
              style={{
                color: dataInfoGeneral.colorButton,
                backgroundColor: dataInfoGeneral.backgroundButton,
              }}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Home
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
};
