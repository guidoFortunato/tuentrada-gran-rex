import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { EventosContext } from "../context/EventosProvider";
import { CardEvento, FormBusqueda, Spinner } from "../components";
import { getData, getEnvVariables } from "../helpers";

// import { SliderDestacado } from "../components/";

// import "../css/header.css";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const Home = () => {
  const { idVenue, dataInfoGeneral } = useContext(EventosContext);
  const [data, setData] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [page, setPage] = useState(1);
  // console.log({data});
  // console.log({dataInfoGeneral})

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const newLocal = `${VITE_API_EVENTOS + idVenue}?page=${page}`;
        const info = await getData(newLocal, VITE_EMAIL, VITE_PASS);
        // console.log(info.data)
        setData(info);
        setEventos((prevEventos) => prevEventos.concat(info.data));
      };
      getInfo();
    }
  }, [idVenue, page]);

  if (data === null) return <Spinner />;

  if (eventos === undefined || eventos.length === 0) {
    return (
      <>
        <header>
          <div className="header-home">
            <h1 className="titulo-principal">
              <strong>{dataInfoGeneral.physicalConfiguration.name}</strong>
            </h1>
            <FormBusqueda />
          </div>
        </header>
        <main>
          <div className="container">
            <div>
              <div className="col-12 text-center mt-3 ">
                <h2
                  style={{ fontSize: "30px" }}
                  className="my-3 tittle-h2"
                >
                  No hay eventos disponibles
                </h2>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <header
        style={{ backgroundImage: `url(${dataInfoGeneral.backgroundImage})` }}
        className={`bg-no-repeat bg-cover bg-center`}
      >
        <div
          className={`min-h-[50vh] flex justify-center items-start flex-col ps-4`}
        >
          <h1 
            style={{color:dataInfoGeneral.colorH1}}
            className={`m-0 text-5xl titulo-principal`}
          >
            <strong>{dataInfoGeneral.pages[0].title}</strong>
          </h1>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none inline-block">Calendario</button>
        </div>
        
        

      </header>
      <main className="container mx-auto my-14 px-3 lg:px-10 xl:px-3">
      <InfiniteScroll
          dataLength={eventos.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={data.links.next !== null}
          loader={<Spinner />}
        >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
          
        
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
    </>
  );
};
