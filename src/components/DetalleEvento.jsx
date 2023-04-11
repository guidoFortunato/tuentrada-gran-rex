import DOMPurify from "dompurify";
import "../css/detalleevento.css";
import { useNavigate } from "react-router-dom";

export const DetalleEvento = ({ title, description, href, img }) => {

  const navigate = useNavigate()

  const lastPath = localStorage.getItem('lastPath') || '/';  

  const returnLastPath = () => {
    navigate(lastPath)
  }

  return (
    <>
      <div className="container my-5 px-5 container animate__animated animate__fadeIn animate__fast ">
        <h1 className="animate__animated animate__fadeIn" style={{ fontSize: "25px" }}>{title.toUpperCase()}</h1>
        <hr />
        <div className="row">
          <div className="col-12 col-lg-6 mb-5 mb-lg-0 text-center">
            <img
              src={img}
              alt="imagen evento"
              className="img-fluid"
            />
          </div>
          <div className="col-12 col-lg-6 detalle-del-evento animate__animated animate__fadeIn">
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
                <div className="btn-general mb-3 w-50" style={{fontSize: "1.6rem"}}>Comprar</div>
              </a>
              <div className="w-100 text-center">
                <div className="btn-general w-50" onClick={returnLastPath} style={{fontSize: "1.6rem"}}>Volver</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
