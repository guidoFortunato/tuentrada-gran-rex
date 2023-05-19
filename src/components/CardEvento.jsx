import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./Spinner";

import "../css/cardevento.css";

export const CardEvento = ({ img = "", status , title = "", linkEvento = "", disabled = false, reason }) => {
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext);


  if (isLoadingNavbar) {
    return <Spinner />;
  }

  return (
    <article
      className="col-12 col-md-6 col-lg-4 col-xl-3 cursor-default"
      style={dataNavbar?.cardEvento.styleGeneral}
    >
      <div className="card" style={dataNavbar?.cardEvento.styleCard}>
        {status !==  'RUNNING' ? (
          <div
            className={`${"linkEvento cursor-default"}`}
          >
            <img
              src={img}
              className={`${"card-img-top card-img-bottom cursor-default img-disabled"}`}
              alt="img logo"
            />
            <div>
              <h5
                className="btn-status"
                style={{
                  border: `1px solid ${
                    status.toLowerCase() === "agotado"
                      ? dataNavbar?.cardEvento.h5.border.agotado
                      : status.toLowerCase() === "reprogramado"
                      ? dataNavbar?.cardEvento.h5.border.reprogramado
                      : status.toLowerCase() === "CANCELED"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? dataNavbar?.cardEvento.h5.border.proximamente
                      : "green"
                  }`,
                  background: `${
                    status.toLowerCase() === "agotado"
                      ? dataNavbar?.cardEvento.h5.border.agotado
                      : status.toLowerCase() === "reprogramado"
                      ? dataNavbar?.cardEvento.h5.border.reprogramado
                      : status.toLowerCase() === "CANCELED"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? dataNavbar?.cardEvento.h5.border.proximamente
                      : "green"
                  }`,
                  color: "#fff",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: "10px",
                }}
              >
                {status}
              </h5>
            </div>
            <div style={dataNavbar?.cardEvento.styleDivTitleDisabled}>
              <h3 className="h3-card" style={dataNavbar?.cardEvento.styleTitle}>
                {title.toUpperCase()}
              </h3>
              {/* <h4 style={{ padding: "5px 0", fontSize: "15px",   color:"gray"}}>
                {newDate} <br /> {newTime}
              </h4> */}
            </div>
          </div>
        ) : (
          <Link
            to={linkEvento}
            className={`${"linkEvento"}`}
          >
            <img
              src={img}
              className={`${"card-img-top card-img-bottom"}`}
              alt="img logo"
            />
            <div>
              <h5
                className="btn-status"
                style={{
                  border: `1px solid ${
                    status.toLowerCase() === "agotado"
                      ? dataNavbar?.cardEvento.h5.border.agotado
                      : status.toLowerCase() === "reprogramado"
                      ? dataNavbar?.cardEvento.h5.border.reprogramado
                      : status.toLowerCase() === "CANCELED"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? dataNavbar?.cardEvento.h5.border.proximamente
                      : "green"
                  }`,
                  background: `${
                    status.toLowerCase() === "agotado"
                      ? dataNavbar?.cardEvento.h5.border.agotado
                      : status.toLowerCase() === "reprogramado"
                      ? dataNavbar?.cardEvento.h5.border.reprogramado
                      : status.toLowerCase() === "CANCELED"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? dataNavbar?.cardEvento.h5.border.proximamente
                      : "green"
                  }`,
                  color: "#fff",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: "10px",
                }}
              >
                {status}
              </h5>
            </div>
            <div style={dataNavbar?.cardEvento.styleDivTitle}>
              <h3 className="h3-card" style={dataNavbar?.cardEvento.styleTitle}>
                {title.toUpperCase()}
              </h3>
              {/* <h4 style={{ padding: "5px 0", fontSize: "15px" }}>
                {newDate} <br /> {newTime}
              </h4> */}
            </div>
          </Link>
        )}
      </div>
    </article>
  );
};
