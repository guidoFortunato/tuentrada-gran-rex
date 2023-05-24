import { FormBusqueda } from "./FormBusqueda"

export const NoHayEventosDisponibles = ({title}) => {
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
                No hay eventos disponibles
              </h2>
            </div>
          </div>


        
        </div>
      </main>
    </>
  )
}