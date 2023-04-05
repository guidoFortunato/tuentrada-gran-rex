import DOMPurify from "dompurify";
import "../css/detalleevento.css";
import { Link } from "react-router-dom";

export const DetalleEvento = ({ title, description, href, img }) => {
  return (
    <>
      <div className="container my-5 px-5">
        <h1 style={{ fontSize: "25px" }}>{title}</h1>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
            <img
              src={img}
              alt="imagen evento"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-6 detalle-del-evento">
            <h2 className="fw-bold pb-2">Información general</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description),
              }}
            ></p>

            <div className="d-flex justify-content-center flex-column align-items-center mt-4">
              <a
                href={href}
                className="w-100 text-center"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-primary mb-3 w-50">Comprar</button>
              </a>
              <Link to={"/"} className="w-100 text-center">
                <button className="btn btn-secondary w-50">Volver</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
