import { useContext } from "react";
import { Link } from "react-router-dom"
import { EventosContext } from "../../context/EventosProvider";

export const EventNotForSale = ({img, title, reasonSoldOut, linkEvento, reasonCanceled, reasonSuspended, data}) => {
  const { handleIdProducto } = useContext(EventosContext);
  return (
    <Link to={linkEvento} className={`${"linkEvento"}`} onClick={()=>handleIdProducto(data.id)}>
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
              reasonSoldOut
                ? "red"
                : reasonCanceled
                ? "grey" 
                : reasonSuspended
                ? "grey"
                : "grey"
            }`,
            background: `${
              reasonSoldOut
                ? "red"
                : reasonCanceled
                ? "grey" 
                : reasonSuspended
                ? "grey"
                : "grey"
            }`,
            color: "#fff",
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "10px",
          }}
        >
          {
            reasonSoldOut
              ? "Agotado"
              : reasonCanceled
              ? "Cancelado"
              : reasonSuspended
              ? "Suspendido"
              : "No disponible"
          }
        </h5>
      </div>
      <div style={{ padding: "5px" }}>
        <h3 className="h3-card" style={{ fontWeight: "bold", padding: "5px" }}>
          {title.toUpperCase()}
        </h3>
      </div>
    </Link>
  )
}