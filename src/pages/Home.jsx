import "../css/header.css";
import "../css/footer.css";
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
              <h2 style={{fontSize:"35px"}}>Próximos eventos</h2>
            </div>
          </div>
          <div >
          <div className="row">
            <article className="col-12 col-lg-8 desktop">
              <div className="card">
                <img
                  src="https://picsum.photos/1000/487"
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

            <article className="col-12 col-lg-4 card-media mobile" >
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
                  src="https://picsum.photos/500/500"
                  className="card-img-top card-img-bottom size-img"
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
      <div className="container">
        <footer className="py-5" style={{width:"100%",
    padding:"inherit"}}>
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
              <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
    
    </>
  );
}

