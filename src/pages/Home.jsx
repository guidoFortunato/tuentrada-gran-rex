import { FormBusqueda } from "../components/";

import anuel1 from "../assets/images/anuel1.jpg";
import anuel2 from "../assets/images/anuel2.jpg";
import chano500 from "../assets/images/chano.jpg";
import ciro500 from "../assets/images/ciro500.jpg";
import tini500 from "../assets/images/tini500.jpg";
import ciro1000x250 from "../assets/images/ciro1000x250.png";
import ciro1000x400 from "../assets/images/ciro1000x400.png";

import "../css/header.css";
import "../css/footer.css";

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

          <div className="row">
            <article className="col-12 tablet">
              <div className="card size-destacado">
                <img
                  src={ciro1000x400}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                />
              </div>
            </article>

            <article className="col-12 desktop">
              <div className="card size-destacado">
                <img
                  src={ciro1000x250}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                />
              </div>
            </article>
          </div>
          <div className="row sin-padding-right-left">
            <article className="col-12 col-lg-4 card-media mobile">
              <div className="card mb-20">
                <img
                  src={ciro500}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
                <img
                  src={anuel1}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
              <div className="card">
                <img
                  src="https://picsum.photos/1000/487"
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            
            </article>
           
            <article className="col-12 col-lg-4 card-media" >
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
                  src={anuel2}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
       
          </div>
          </div>
          <div className="row sin-padding-right-left">
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={chano500}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
            <article className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <img
                  src={tini500}
                  className="card-img-top card-img-bottom"
                  alt="img logo"
                  // style={{ width: "80%" }}
                />
              </div>
            </article>
         
          </div>
       
      </main>
    </>
  );
};
