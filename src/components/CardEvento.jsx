import { Link } from "react-router-dom";
import "../css/cardevento.css";

export const CardEvento = ({
  img = "",
  status = "Disponible",
  title = "",
  date = "",
  time = "",
  linkEvento = "",
  disabled = false,
}) => {
  const urlEvento = linkEvento?.split("/")[1] !== "shows";
  const newDate = date.charAt(0).toUpperCase() + date.slice(1).toLowerCase();
  const newTime = time.charAt(0).toUpperCase() + time.slice(1).toLowerCase();
  const newStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

  return (
    <article
      className="col-12 col-md-6 col-lg-4 col-xl-3 cursor-default"
      style={{ textAlign: "center" }}
    >
      <div className="card" style={{ position: "relative" }}>
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
                      ? "orange"
                      : status.toLowerCase() === "reprogramado"
                      ? "blue"
                      : status.toLowerCase() === "cancelado"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? "#484545"
                      : "green"
                  }`,
                  background: `${
                    status.toLowerCase() === "agotado"
                      ? "orange"
                      : status.toLowerCase() === "reprogramado"
                      ? "blue"
                      : status.toLowerCase() === "cancelado"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? "#484545"
                      : "green"
                  }`,
                  color: "white",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: "10px",
                }}
              >
                {newStatus}
              </h5>
            </div>
            <div style={{ padding: "5px", color:"gray" }}>
              <h3 className="h3-card" style={{ fontWeight: "bold", padding: "5px" }}>
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
            target={urlEvento ? "_blank" : null}
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
                      ? "orange"
                      : status.toLowerCase() === "reprogramado"
                      ? "blue"
                      : status.toLowerCase() === "cancelado"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? "#484545"
                      : "green"
                  }`,
                  background: `${
                    status.toLowerCase() === "agotado"
                      ? "orange"
                      : status.toLowerCase() === "reprogramado"
                      ? "blue"
                      : status.toLowerCase() === "cancelado"
                      ? "red"
                      : status.toLowerCase() === "próximamente"
                      ? "#484545"
                      : "green"
                  }`,
                  color: "white",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: "10px",
                }}
              >
                {newStatus}
              </h5>
            </div>
            <div style={{ padding: "5px" }}>
              <h3 className="h3-card" style={{ fontWeight: "bold", padding: "5px" }}>
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
