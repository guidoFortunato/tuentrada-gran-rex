import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./Spinner";

import "../css/cardevento.css";


export const CardEvento = ({ img = "", title = "", linkEvento = "", disponibility = [] }) => {
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext);
  const [availabilityGood, setAvailabilityGood] = useState(false);
  const [reasonSoldOut, setReasonSoldOut] = useState(false);
  const [reasonCanceled, setReasonCanceled] = useState(false);
  const [reasonSuspended, setReasonSuspended] = useState(false);
  const [reasonNotAvailable, setReasonNotAvailable] = useState(false);
 

  useEffect(() => {
    const EventAvailability = (disponibilidad) => {

      // Verificar si alguna fecha tiene availabilitLevel "GOOD"
      const hasGoodAvailability = disponibilidad.some(
        fecha => fecha.availabilitLevel === 'GOOD'
      );
      setAvailabilityGood(hasGoodAvailability)
    
      // Verificar los reasons en caso de que no haya disponibilidad "GOOD"
      const hasSoldOut = disponibilidad.every(
        fecha => (fecha.availabilitLevel === 'NONE' || fecha.availabilitLevel === 'LIMITED') && fecha.reason === 'SOLD_OUT'
      );
      setReasonSoldOut(hasSoldOut)
    
      const hasCanceled = disponibilidad.every(
        fecha => (fecha.availabilitLevel === 'NONE' || fecha.availabilitLevel === 'LIMITED') && fecha.reason === 'CANCELED'
      );
      setReasonCanceled(hasCanceled)
    
      const hasSuspended = disponibilidad.every(
        fecha => (fecha.availabilitLevel === 'NONE' || fecha.availabilitLevel === 'LIMITED') && fecha.reason === 'SUSPENDED'
      );
      setReasonSuspended(hasSuspended)

      const hasNotAvailable = disponibilidad.every(
        fecha => (fecha.availabilitLevel === 'NONE' || fecha.availabilitLevel === 'LIMITED') && (fecha.reason !== 'SUSPENDED' || fecha.reason === 'CANCELED' || fecha.reason === 'SOLD_OUT')
      );
      setReasonNotAvailable(hasNotAvailable)
    }
    EventAvailability(disponibility)
    console.log(disponibility)
  }, []);



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
            <div style={{ padding: "5px" }}>
              <h3 className="h3-card" style={{fontWeight: "bold", padding: "5px"}}>
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
            <div style={ (disponibility[0].reason !== "SUSPENDED" && disponibility[0].reason !== "CANCELED" && disponibility[0].reason !== "SOLD_OUT") ? {color: "gray"} : null }>
              <h3 className="h3-card" style={{fontWeight: "bold", padding: "5px"}}>
                {title.toUpperCase()}
              </h3>
            </div>
            </div>
          ) 
          : disponibility.length > 1 
          ? availabilityGood ? (
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
            <div style={{ padding: "5px" }}>
              <h3 className="h3-card" style={{fontWeight: "bold", padding: "5px"}}>
                {title.toUpperCase()}
              </h3>
              {/* <h4 style={{ padding: "5px 0", fontSize: "15px" }}>
                {newDate} <br /> {newTime}
              </h4> */}
            </div>
            </Link>
          ) 
          : reasonNotAvailable ? (
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
                  border: `1px solid grey`,
                  background: "gray",
                  color: "#fff",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: "10px",
                }}
              >
                
                  No disponible
                
              </h5>
            </div>
            <div style={{color: "gray"}}>
              <h3 className="h3-card" >
                {title.toUpperCase()}
              </h3>
            </div>
            </div>
          ) 
          : (
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
                { reasonSoldOut ? "Agotado" :  reasonCanceled ? "Cancelado" : reasonSuspended ? "Suspendido" : "No disponible"}
              </h5>
            </div>
            <div style={{ padding: "5px" }}>
              <h3 className="h3-card" style={{fontWeight: "bold", padding: "5px"}}>
                {title.toUpperCase()}
              </h3>
            </div>
            </Link>
            )
          : null
          : null

           
        }
        
       
      </div>
    </article>
  );
};
