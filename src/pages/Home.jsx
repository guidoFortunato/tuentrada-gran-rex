import { CardEvento, FormBusqueda } from "../components/";

import "../css/header.css";
import "../css/footer.css";
import { SliderDestacado } from "../components/";

export const Home = () => {
  return (
    <>
      <header>
        <div className="header-home">
          <h1 className="titulo-principal">Gran Rex</h1>
          <FormBusqueda />
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-3 ">
              <h2 style={{ fontSize: "35px" }} className="my-3">
                Próximos shows
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <SliderDestacado />
          </div>

          <div className="row sin-padding-right-left">
            <CardEvento
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/El_zar.webp"
              }
              status={"Disponible"}
              title={"EL ZAR"}
              date={"SÁBADO 15 DE ABRIL"}
              time={"20:30hs"}
            />
            <CardEvento
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/sergio_torres.webp"
              }
              status={"Disponible"}
              title={"SERGIO TORRES"}
              date={"DOMINGO 16 DE ABRIL"}
              time={"21:30hs"}
            />
               <CardEvento
              img={
                "https://www.tuentrada.com/teatro/gran-rex/imagenes/miranda.webp"
              }
              status={"Agotado"}
              title={"MIRANDA"}
              date={"VIERNES 21 DE ABRIL"}
              time={"20:30hs"}
            />
            
            

            

           
           

            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={
                    "https://www.tuentrada.com/teatro/gran-rex/imagenes/miranda.webp"
                  }
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid orange",
                      background: "orange",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Agotado
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>ANUEL</h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={
                    "https://www.tuentrada.com/teatro/gran-rex/imagenes/queen.webp"
                  }
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid red",
                      background: "red",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Cancelado
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>CHANO</h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={
                    "https://www.tuentrada.com/teatro/gran-rex/imagenes/damian_cordoba.webp"
                  }
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid blue",
                      background: "blue",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Reprogramado
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                    TINI AQUÍ ESTOY
                  </h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={ciro500}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid green",
                      background: "green",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Disponible
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                    CIRO Y LOS PERSAS
                  </h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={anuel1}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid orange",
                      background: "orange",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Agotado
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>ANUEL</h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={ciro500}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid green",
                      background: "green",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Disponible
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                    CIRO Y LOS PERSAS
                  </h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={anuel1}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid orange",
                      background: "orange",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Agotado
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>ANUEL</h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={ciro500}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid green",
                      background: "green",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Disponible
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                    CIRO Y LOS PERSAS
                  </h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={anuel1}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid orange",
                      background: "orange",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Agotado
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>ANUEL</h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            <article
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              style={{ textAlign: "center" }}
            >
              <div className="card" style={{ position: "relative" }}>
                <img
                  src={ciro500}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
                <div>
                  <h5
                    className="btn"
                    style={{
                      border: "1px solid green",
                      background: "green",
                      color: "white",
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      fontSize: "10px",
                    }}
                  >
                    Disponible
                  </h5>
                </div>
                <div style={{ padding: "5px" }}>
                  <h3 style={{ fontWeight: "bold", padding: "5px" }}>
                    CIRO Y LOS PERSAS
                  </h3>
                  <h4 style={{ padding: "5px 0" }}>
                    DOMINGO 29 MARZO <br /> 20HS
                  </h4>
                </div>
              </div>
            </article>
            {/* <article className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article> */}
          </div>
        </div>
      </main>
    </>
  );
};
