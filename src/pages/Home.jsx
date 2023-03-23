import "../css/header.css";
import "../css/footer.css";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
export const Home = () => {
  const [evento, setEvento] = useState("");

  console.log(evento);
  // useEffect(() => {
  // }, [evento]);
  return (
    <>
      <header>
        <div className="header-home">
          <h1 className="titulo-principal">Gran Rex</h1>
          <form className="d-flex form-buscar">
            <div>🔍︎</div>
            <div className="container-input">
              <input
                className="border-0"
                placeholder="Buscar Evento"
                value={evento}
                onChange={(e) => setEvento(e.target.value)}
              />
            </div>
            {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
          </form>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-3 ">
              <h2 style={{ fontSize: "35px" }} className="my-3">
                Próximos eventos
              </h2>
            </div>
          </div>
          <div>
            <div className="row">
              <article className="col-12 tablet">
                <div className="card size-destacado">
                  <img
                    src="https://picsum.photos/1000/400"
                    className="card-img-top card-img-bottom"
                    alt="img logo"
                  />
                </div>
              </article>

              <article className="col-12 desktop">
                <div className="card size-destacado">
                  <img
                    src="https://picsum.photos/1000/250"
                    className="card-img-top card-img-bottom"
                    alt="img logo"
                  />
                </div>
              </article>

              <article className="col-12 col-lg-4 card-media mobile">
                <div className="card mb-20">
                  <img
                    src="https://picsum.photos/500/500"
                    className="card-img-top card-img-bottom"
                    alt="img logo"
                    // style={{ width: "80%" }}
                  />
                </div>
              </article>
            </div>
          </div>
          <div className="row sin-padding-right-left">
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
            </article>
          </div>
        </div>
      </main>
    </>
  );
};
