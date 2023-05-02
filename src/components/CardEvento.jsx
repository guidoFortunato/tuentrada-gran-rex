import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./Spinner";

import "../css/cardevento.css";

export const CardEvento = ({ img = "", status = "disponible", title = "", linkEvento = "", disabled = false,}) => {
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext);
  const newStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  if (isLoadingNavbar) {
    return <Spinner />;
  }

  return (
    <article
      className="col-12 col-md-6 col-lg-4 col-xl-3 cursor-default"
      style={dataNavbar?.cardEvento.styleGeneral}
    >
      <div className="card" style={dataNavbar?.cardEvento.styleCard}>
        {disabled ? (
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
                      : status.toLowerCase() === "cancelado"
                      ? dataNavbar?.cardEvento.h5.border.cancelado
                      : status.toLowerCase() === "próximamente"
                      ? dataNavbar?.cardEvento.h5.border.proximamente
                      : dataNavbar?.cardEvento.h5.border.disponible
                  }`,
                  background: `${
                    status.toLowerCase() === "agotado"
                    ? dataNavbar?.cardEvento.h5.border.agotado
                    : status.toLowerCase() === "reprogramado"
                    ? dataNavbar?.cardEvento.h5.border.reprogramado
                    : status.toLowerCase() === "cancelado"
                    ? dataNavbar?.cardEvento.h5.border.cancelado
                    : status.toLowerCase() === "próximamente"
                    ? dataNavbar?.cardEvento.h5.border.proximamente
                    : dataNavbar?.cardEvento.h5.border.disponible
                  }`,
                  color: dataNavbar?.cardEvento.h5.color,
                  position: dataNavbar?.cardEvento.h5.position,
                  top: dataNavbar?.cardEvento.h5.top,
                  left: dataNavbar?.cardEvento.h5.left,
                  fontSize: dataNavbar?.cardEvento.h5.fontSize,
                }}
              >
                {newStatus}
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
                      : status.toLowerCase() === "cancelado"
                      ? dataNavbar?.cardEvento.h5.border.cancelado
                      : status.toLowerCase() === "próximamente"
                      ? dataNavbar?.cardEvento.h5.border.proximamente
                      : dataNavbar?.cardEvento.h5.border.disponible
                  }`,
                  background: `${
                    status.toLowerCase() === "agotado"
                      ? dataNavbar?.cardEvento.h5.border.agotado
                      : status.toLowerCase() === "reprogramado"
                      ? dataNavbar?.cardEvento.h5.border.reprogramado
                      : status.toLowerCase() === "cancelado"
                      ? dataNavbar?.cardEvento.h5.border.cancelado
                      : status.toLowerCase() === "próximamente"
                      ? dataNavbar?.cardEvento.h5.border.proximamente
                      : dataNavbar?.cardEvento.h5.border.disponible
                  }`,
                  color: dataNavbar?.cardEvento.h5.color,
                  position: dataNavbar?.cardEvento.h5.position,
                  top: dataNavbar?.cardEvento.h5.top,
                  left: dataNavbar?.cardEvento.h5.left,
                  fontSize: dataNavbar?.cardEvento.h5.fontSize,
                }}
              >
                {newStatus}
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
