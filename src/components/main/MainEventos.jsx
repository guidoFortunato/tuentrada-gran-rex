import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { EventosContext } from "../../context/EventosProvider";
import { Spinner } from "../Spinner";
import { EventosHome } from "../";

export const MainEventos = () => {
  const { eventosGenerales, setPage, data } = useContext(EventosContext);
  console.log({data})
  return (
    <main className="container mx-auto mb-5 ">
      <InfiniteScroll
        dataLength={eventosGenerales.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        // hasMore={data.links.next !== null}
        hasMore={data.products}
        loader={<Spinner />}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 px-4 lg:px-0">
          <EventosHome />
        </div>
      </InfiniteScroll>
    </main>
  );
};
