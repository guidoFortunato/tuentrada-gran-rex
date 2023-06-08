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
        console.log(info);
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
        <header
          style={{ backgroundImage: `url(${dataInfoGeneral.backgroundImage})` }}
          className={`bg-no-repeat bg-cover bg-center container mx-auto `}
        >
         <div
          className={`min-h-[50vh] flex justify-center items-start flex-col ps-4 `}
        >
          <h1
            style={{ color: dataInfoGeneral.colorH1, paddingBottom: "20px" }}
            className={`m-0 text-5xl titulo-principal`}
          >
            <strong>{dataInfoGeneral.pages[0].title}</strong>
          </h1>
          <div className="flex flex-col md:flex-row">
            <p
              style={{ color: dataInfoGeneral.colorButton }}
              className="md:w-4/5 md:mr-6 mt-6 md:mt-0 text-[dataInfoGeneral.colorButton]"
            >
              ¡No te pierdas ni un solo evento! Encontrá toda la programación
              completa en el siguiente enlace y preparate para vivir
              experiencias únicas. ¡Descubrí tus próximos momentos inolvidables
              aquí!
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                style={{
                  color: dataInfoGeneral.colorButton,
                  background: dataInfoGeneral.backgroundButton,
                  width: "auto",
                }}
                type="button"
                className="w-full md:w-auto mt-6 md:mt-0 bg-[dataInfoGeneral.backgroundButton] hover:bg-[#5c452c] hover:border-[dataInfoGeneral.colorHoverButton] text-[dataInfoGeneral.colorButton] font-medium rounded-3xl text-sm px-4 py-2"
              >
                Calendario
              </button>
            </div>
          </div>
        </div>
        </header>
        <main className="container mx-auto my-14 px-3 lg:px-0">
          
            <div
              className="w-1/2 flex justify-center mx-auto p-4 mb-4 text-md text-blue-900 rounded-lg bg-blue-300 dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium"></span>
                No hay eventos disponibles
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
        className={`bg-no-repeat bg-cover bg-center container mx-auto `}
      >
        
       <div className={`min-h-[50vh] flex justify-center items-start flex-col `}>
        <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
  <h1
    style={{ color: dataInfoGeneral.colorH1, fontSize:"2.5em", width:"92%", }}
    className={`m-0 text-5xl titulo-principal pt-10 pb-5  text-center md:text-left`}
  >
    <strong>{dataInfoGeneral.pages[0].title}</strong>
  </h1>  
  </div>
  <div className="flex flex-col md:flex-row" style={{justifyContent:"center", alignItems:"center"}}>
    <p
      style={{ color: dataInfoGeneral.colorButton, }}
      className={`md:w-3/5 md:mr-6 pl-10 pr-10 md:pl-0 md:pr-0 text-base md:text-base lg:text-lg`}
    >
      ¡No te pierdas ni un solo evento! Encontrá toda la programación
      completa en el siguiente enlace y preparate para vivir
      experiencias únicas. ¡Descubrí tus próximos momentos inolvidables
      aquí!
    </p>
    <div className="flex md:flex-col md:items-center md:justify-center mb-10 " style={{ width: "30%", justifyContent:"center",}}>
      <button
        style={{
          color: dataInfoGeneral.colorButton,
          background: dataInfoGeneral.backgroundButton,
          width: "auto",
          padding: "10px 45px",
      
        }}
        type="button"
        className="w-full mt-6 md:mt-0 bg-[dataInfoGeneral.backgroundButton] hover:bg-[#5c452c] hover:border-[dataInfoGeneral.colorHoverButton] text-[dataInfoGeneral.colorButton] font-medium rounded-3xl  px-4 py-2 text-base lg:text-lg md:text-base"
      >
        Calendario
      </button>
    </div>
  </div>
</div>

      </header>
      <main className="container mx-auto my-14 px-3 lg:px-0 ">
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

            {/* <figure className="relative max-w-sm cursor-pointer">
              <a href="#">
                <img
                  className="rounded-lg md:rounded-none"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                  alt="image description"
                />
              </a>
            </figure>
            <figure className="relative max-w-sm cursor-pointer">
              <a href="#">
                <img
                  className="rounded-lg md:rounded-none"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                  alt="image description"
                />
              </a>
            </figure>
            <figure className="relative max-w-sm cursor-pointer">
              <a href="#">
                <img
                  className="rounded-lg md:rounded-none"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                  alt="image description"
                />
              </a>
            </figure>
            <figure className="relative max-w-sm cursor-pointer">
              <a href="#">
                <img
                  className="rounded-lg md:rounded-none"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                  alt="image description"
                />
              </a>
            </figure> */}
          </div>
        </InfiniteScroll>
      </main>
    </>
  );
};