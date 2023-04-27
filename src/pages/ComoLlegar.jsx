
import "../css/comollegar.css";

export const ComoLlegar = () => {
  return (
    <>
      <div className="container">
      <div className="row animate__animated animate__fadeIn ">
            <div className="col-12 text-center mt-3 ">
              <h2 style={{ fontSize: "30px" }} className="my-3 tittle-h2">
            Cómo llegar
              </h2>
            </div>
          </div>


        <div className="row animate__animated animate__fadeIn">
          <article className="col-12 col-lg-6 " style={{ textAlign: "center" }}>
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
          <article className="col-12 col-lg-6 ">
            <div className="contenedor-map">
              <iframe
                style={{ border: "0", boxShadow:"5px 5px 6px 1px rgb(227, 227, 227)" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.030792131673!2d-58.38105528527267!3d-34.60338286498632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaceed5746b9%3A0xf933ab84305babc0!2sTeatro%20Gran%20Rex!5e0!3m2!1ses!2sar!4v1681154982429!5m2!1ses!2sar"
                // frameBorder="0"
                allowFullScreen=""
                title="mapa gran rex"
                className="iframe"
              ></iframe>
              {/* <Map /> */}
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
