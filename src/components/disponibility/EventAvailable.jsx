import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../../context/EventosProvider";

export const EventAvailable = ({ linkEvento, img, title, data }) => {
  const { setIdProducto } = useContext(EventosContext);
  
  return (
    <Link to={linkEvento} className={"linkEvento"} onClick={()=>setIdProducto(data.id)} >
      <img
        src={img}
        className={"card-img-top card-img-bottom"}
        alt={title}
      />
      <div>
        <h5
          className="btn-status"
          style={{
            border: "1px solid green",
            background: "green",
            color: "#fff",
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "10px",
          }}
        >
          Disponible
        </h5>
      </div>
      <div style={{ padding: "5px" }}>
        <h3 className="h3-card" style={{ fontWeight: "bold", padding: "5px" }}>
          {title.toUpperCase()}
        </h3>
      </div>
    </Link>
  );
};
