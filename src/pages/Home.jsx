import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { EventosContext } from "../context/EventosProvider";
import { CardEvento, FormBusqueda, Spinner } from "../components";
import { getData, getEnvVariables } from "../helpers";

// import { SliderDestacado } from "../components/";

import "../css/header.css";
import "../css/footer.css";

const { VITE_API_EVENTOS, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const Home = () => {
  const { idVenue, dataInfoGeneral } = useContext(EventosContext);
  const [data, setData] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [page, setPage] = useState(1);
  // console.log({data});
  // console.log({dataInfoGeneral})

  /**
   * 
   * TODO: 
   * a) disponibilidad

      b) busqueda:
      -tiene que coincidir exactamente el nombre del evento, sino no busca nada. Keywords marian

      c) detalle:
      -seccion fecha de detalle
      -plano
      -si cambio el nombre de la url no hace nada
      -que no se vea el id en la url

      d) si borro algo de la parte de search en busqueda eventos rompe

      e) agregar alguna alerta si dan enter y el form busqueda está vacio, deben ingresar si o si algo
   * 
   * 
   * 
   */

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    if (idVenue !== "") {
      const getInfo = async () => {
        const newLocal = `${VITE_API_EVENTOS + idVenue}?page=${page}`;
        const info = await getData( newLocal, VITE_EMAIL, VITE_PASS);
        // console.log({info})
        setData(info);
        setEventos( (prevEventos)=> prevEventos.concat(info.data))
      };
      getInfo();
    }
  }, [idVenue, page]);

  if (data === null ) return <Spinner />;

  if (eventos === undefined || eventos.length === 0) {

    return (
      <>
        <header className="animate__animated animate__fadeIn animate__fast">
          <div className="header-home">
            <h1 className="titulo-principal animate__animated animate__fadeInDown animate__fast	">
              <strong>{dataInfoGeneral.physicalConfiguration.name}</strong>
            </h1>
            <FormBusqueda />
          </div>
        </header>
        <main>
        <div className="container">
          <div className="row animate__animated animate__fadeIn animate__fast">
            <div className="col-12 text-center mt-3 ">
              <h2
                style={{ fontSize: "30px" }}
                className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
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
      <header className="animate__animated animate__fadeIn animate__fast">
        <div className="header-home">
          <h1 className="titulo-principal animate__animated animate__fadeInDown animate__fast">
            <strong>{dataInfoGeneral.physicalConfiguration.name}</strong>
          </h1>
          <FormBusqueda />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row animate__animated animate__fadeIn animate__fast	 ">
            <div className="col-12 text-center mt-3 ">
              <h2
                style={{ fontSize: "30px" }}
                className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
              >
                Próximos eventos
              </h2>
            </div>
          </div>

          {/* <div className="row justify-content-center">
            <SliderDestacado />
          </div>
          <div className="img-slider">
            <div className="img-opacity">
              <h3>SOY UN COMUNICADO</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
                aspernatur illo praesentium, dolore eos nostrum voluptatibus id
                obcaecati cum ad impedit velit eligendi voluptatem quisquam nam
                voluptate pariatur, enim deleniti.
              </p>
            </div>
          </div> */}

          <InfiniteScroll
            dataLength={eventos.length}
            next={()=>setPage( prevPage => prevPage + 1 )}
            hasMore={ data.links.next !== null }
            loader={<Spinner />}
          >
            <div className="row sin-padding-right-left animate__animated animate__fadeIn  animate__delay-1s ">
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
        </div>
      </main>
    </>
  );
};
