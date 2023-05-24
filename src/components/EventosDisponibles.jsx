import { CardEvento, FormBusqueda } from "./"


export const EventosDisponibles = ({title, data}) => {
  return (
    <>
      <header className="animate__animated animate__fadeIn animate__fast">
        <div className="header-home">
          <h1 className="titulo-principal animate__animated animate__fadeInDown animate__fast	 ">
            <strong>{title}</strong>
          </h1>
          <FormBusqueda placeholder={"Buscar evento"} />
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

          <div className="row sin-padding-right-left animate__animated animate__fadeIn  animate__delay-1s ">
            {data?.map((evento) => (
              <CardEvento
                linkEvento={evento.slug + "/" + evento.id}
                img={evento.image}
                status={evento.state}
                title={evento.name}
                key={evento.id}
                disabled={evento.disabled}
                reason={evento.reason}
                disponibility={evento.disponibility}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}