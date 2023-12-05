import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { EventosContext } from "../../context/EventosProvider";
import { Spinner } from "../Spinner";
import { EventosHome } from "../";

export const MainEventos = () => {
  const { eventosGenerales, setPage, data } = useContext(EventosContext);
  // console.log(data)
  return (
    <main className="container mx-auto mb-5 ">
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
