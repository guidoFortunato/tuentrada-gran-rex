import { useContext } from "react";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./Spinner";

import DOMPurify from "dompurify";

import "https://www.tuentrada.com/teatro/gran-rex/css/footer.css";

export const Footer = () => {
  const { isLoadingFooter, dataFooter, dataNavbar, isLoadingNavbar } = useContext(EventosContext);

  if (isLoadingNavbar) {
    return <Spinner />;
  }
  if (isLoadingFooter) {
    return <Spinner />;
  }
  return (
    <footer>
      <div className="container">
        <div className="row mb-2 text-center">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-3 mb-md-0 pt-3">
            <div className="d-flex flex-column text-start parrafo-footer">
              {dataFooter?.items.map((item) => (

                item.mostrar &&
                <p
                  style={{ fontSize: "16px" }}
                  className="mb-0"
                  key={item.id}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      item.descripcion
                    )
                  }}
                ></p>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-2 my-lg-0">
            <span style={{ color: "white", fontSize: "15px" }}>
              {dataNavbar?.labelRedes}
            </span>
            <ul className="list-unstyled d-flex mb-0">

              {
                dataNavbar?.itemsRedes.map( item => (
                  <li className="me-3" key={item.id}>
                  <a
                    className="link-dark"
                    rel="noreferrer"
                    href={item.href}
                    target="_blank"
                  >
                    <svg xmlns={item.xmlns} x={item.x}  y={item.y} style={item.style}  width={item.width} height={item.height} viewBox={item.viewBox}>  <path d={item.path}></path></svg>
                  </a>
                </li>
                ))
              }
             

            </ul>
          </div>
          <div className="col-12 mt-5 mt-lg-3">
            <p className="mb-0 parrafo-footer" style={{ fontSize: "16px" }}>
              {dataFooter?.copyright} <br /> {dataFooter?.derechosReservados}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
