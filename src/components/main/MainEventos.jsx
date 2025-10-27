import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { EventosContext } from "../../context/EventosProvider";
import { Spinner } from "../Spinner";
import { EventosHome } from "../";

const { VITE_VENUE } = getEnvVariables();

export const MainEventos = () => {
  const { eventosGenerales, setPage, data, host } = useContext(EventosContext);
  // console.log(data)
  return (
    <main className="container mx-auto mb-5 ">
      {/* Imagen de tuentrada vendedor oficial */}

      {host === VITE_VENUE && (
        <div
          className="relative flex flex-col md:flex-row items-center justify-between bg-[url(https://tuentrada.com/teatro/gran-rex/imagenes/tuentrada-oficial.jpg)] bg-cover bg-center py-10 md:py-5 px-4 md:px-5 bg-no-repeat md:rounded-lg mb-5 w-full min-h-[100px] md:h-[100px] overflow-hidden"
          role="img"
          aria-label="tuentrada vendedor oficial"
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/40 z-0" />

          <img
            src="https://tuentrada.com/newsletter/logo.png"
            alt="logo tuentrada"
            className="w-[130px] md:w-[160px] relative z-10 mb-3 md:mb-0"
          />
          <div className="text-white text-center md:text-end relative z-10">
            <h3 className="font-bold text-base md:text-lg leading-tight mb-1">
              PLATAFORMA OFICIAL DE VENTA DE ENTRADAS
            </h3>
            <h4 className="text-base md:text-lg">del Teatro Gran Rex</h4>
          </div>
        </div>
      )}

      <InfiniteScroll
        dataLength={eventosGenerales?.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={data?.data?.links?.next !== null}
        loader={<Spinner />}
        className="pb-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:px-0">
          <EventosHome />
        </div>
      </InfiniteScroll>
    </main>
  );
};
