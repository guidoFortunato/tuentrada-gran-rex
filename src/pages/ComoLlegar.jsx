import "../css/comollegar.css";

export const ComoLlegar = () => {
  return (
    <>
      <div className="container">
        <h2 style={{ fontSize: "35px" }} className="my-3 heading">
          Cómo llegar
        </h2>

      

      <div className="row">
            <article
              className="col-12 col-lg-6 "
              style={{ textAlign: "center" }}>
              <div>
              <p className="parrafo-historia">
                <strong>
                  Av. Corrientes 857 <br />
                  Ciudad Autónoma de Buenos Aires, Argentina{" "}
                </strong>
                <br />
                <br />
                <strong>
                  ¿CÓMO LLEGAR? <br />
                </strong>
                Al estar ubicado en pleno centro porteño a menos de dos cuadras
                del obelisco sobre la Avenida Corrientes, llegar al Teatro Gran
                Rex es muy fácil. Sin embargo, su ubicación puede ser un
                problema por la gran cantidad de tránsito en la zona y se
                recomienda ir con tiempo de sobra para evitar inconvenientes.
                <br />
                <br />
                <strong>
                  {" "}
                  EN SUBTE:
                  <br />
                </strong>
                Línea B (Estacion Carlos Pelegrini)
                <br />
                Línea C (Estacion Diagonal Norte)
                <br />
                Linea D (Estacion 9 de Julio)
                <br />
                <br />
                <br />
                <strong>
                  EN COLECTIVO:
                  <br />
                </strong>
                Líneas 6, 7, 9, 10, 17, 23, 24, 26, 29, 45, 50, 59, 70, 99, 100,
                109, 111, 142, 146, 155
                <br />
                <br />
                <strong>
                  ESTACIONAMIENTO
                  <br />{" "}
                </strong>
                El teatro cuenta con un estacionamiento contiguo.
                <br />
              </p>
                
              </div>
            </article>
            <article
              className="col-12 col-lg-6 "
              style={{ textAlign: "center" }}>
              <div className=" contenedor-div">
              <iframe 
                        style={{ border: "0" }}
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8330.22027964297!2d-58.394986536065595!3d-34.599265124507674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgran%20rex!5e1!3m2!1ses!2sar!4v1680018233423!5m2!1ses!2sar"
                        // frameBorder="0"
                        allowFullScreen=""
                        title="mapa gran rex"
                        className="iframe"
                        
                      ></iframe>
                
              </div>
            </article>
            
            </div>
            </div>
    </>
  );
};
