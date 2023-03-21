import "../css/header.css";

export const Home = () => {
  return (
    <>
      <header>
        <div className="header-home">
          <h1 className="titulo-principal">Gran Rex</h1>
          <form className="d-flex form-buscar">
            <div>🔍︎</div>
            <div className="container-input">
              <input className="border-0" placeholder="Buscar Evento" />
            </div>
            {/* <button className="btn btn-outline-success" type="submit">Buscar</button> */}
          </form>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mt-3 ">
              <h3>Próximos eventos</h3>
            </div>
          </div>
          <div className="row">
            <article className="col-12 col-lg-8">
              <div className="card">
                <img
                  src="https://picsum.photos/1000/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
              <div className="card">
                <img
                  src="https://picsum.photos/1000/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-lg-4 card-media">
              <div className="card mb-20">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom size-img"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom size-img"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
          </div>

          <div className="row sin-padding-right-left">
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4">
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
