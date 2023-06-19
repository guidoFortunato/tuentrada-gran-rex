import InfiniteScroll from "react-infinite-scroll-component"
import { CardEvento } from "../CardEvento"
import { Spinner } from "../Spinner"

export const MainEventos = ({eventos, data, setPage}) => {
  return (
    <main className="container mx-auto mb-5 ">
    <InfiniteScroll
      dataLength={eventos.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={data.links.next !== null}
      loader={<Spinner />}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 px-4 lg:px-0">
        {eventos.map((item) => (
          <CardEvento
            linkEvento={item.slug + "/" + item.id}
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
    </InfiniteScroll>
  </main>
  )
}