import "../css/header.css";
import "../css/footer.css";
import { Link } from "react-router-dom";
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
      <div className="container">
        <footer className="py-5" style={{ width: "100%", padding: "inherit" }}>
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    Home
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    Features
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    FAQs
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="#" className="nav-link p-0 text-muted">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="link-dark"
                  rel="noreferrer"
                  href="https://www.facebook.com/tuentrada"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark"
                  rel="noreferrer"
                  href="https://twitter.com/tuentrada"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"></path>
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="link-dark"
                  rel="noreferrer"
                  href="https://www.instagram.com/tuentrada/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};
