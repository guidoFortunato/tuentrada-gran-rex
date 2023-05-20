import { useContext } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./Spinner";

import "../css/cardevento.css";


export const CardEvento = ({ img = "", status , title = "", linkEvento = "", disponibility }) => {
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext);
  console.log({disponibility})


  if (isLoadingNavbar) {
    return <Spinner />;
  }

  return (
    <article
      className="col-12 col-md-6 col-lg-4 col-xl-3 cursor-default"
      style={dataNavbar?.cardEvento.styleGeneral}
    >
      <div className="card" style={dataNavbar?.cardEvento.styleCard}>

        {
          disponibility.length === 1 
          ? 
          disponibility[0].availabilitLevel === "GOOD" 
          ? (
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
            <div style={dataNavbar?.cardEvento.styleDivTitle}>
              <h3 className="h3-card" style={dataNavbar?.cardEvento.styleTitle}>
                {title.toUpperCase()}
              </h3>
              {/* <h4 style={{ padding: "5px 0", fontSize: "15px" }}>
                {newDate} <br /> {newTime}
              </h4> */}
            </div>
            </Link>
          ) 
          : disponibility[0].availabilitLevel === "LIMITED" || disponibility[0].availabilitLevel === "NONE"
          ? (
            <div
           
            className={"linkEvento cursor-default"}
          >
            <img
              src={img}
              className={"card-img-top card-img-bottom cursor-default img-disabled"}
              alt="img logo"
            />
            <div>
              <h5
                className="btn-status"
                style={{
                  border: `1px solid ${
                    disponibility[0].reason === "SUSPENDED"
                      ? "grey"
                      : disponibility[0].reason === "CANCELED"
                      ? "grey" 
                      : disponibility[0].reason === "SOLD_OUT"
                      ? "red"
                      : "black"
                  }`,
                  background: `${
                    disponibility[0].reason === "SUSPENDED"
                      ? "grey"
                      : disponibility[0].reason === "CANCELED"
                      ? "grey" 
                      : disponibility[0].reason === "SOLD_OUT"
                      ? "red"
                      : "black"
                  }`,
                  color: "#fff",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: "10px",
                }}
              >
                {
                  disponibility[0].reason === "SUSPENDED"
                  ? "Suspendido"
                  : disponibility[0].reason === "CANCELED"
                  ? "Cancelado"
                  : disponibility[0].reason === "SOLD_OUT"
                  ? "Agotado"
                  : "No disponible"
                }
              </h5>
            </div>
            <div style={{color: "gray"}}>
              <h3 className="h3-card" style={dataNavbar?.cardEvento.styleTitle}>
                {title.toUpperCase()}
              </h3>
            </div>
            </div>
          ) 
          : disponibility.length > 1 
          ? null 
          /*           
          * 
          TODO: SOLUCIONAR SI HAY MUCHAS FECHAS  
          */ 
          : null
          : null

           
        }
        
       
      </div>
    </article>
  );
};
