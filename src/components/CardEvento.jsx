import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { Spinner } from "./Spinner";

import {
  EventAvailable,
  EventNotAvailable,
  EventNotForSale,
} from "./disponibility";

import "../css/cardevento.css";

export const CardEvento = ({
  img = "",
  title = "",
  linkEvento = "",
  disponibility = [],
}) => {
  const { dataNavbar, isLoadingNavbar } = useContext(EventosContext);
  const [availabilityGood, setAvailabilityGood] = useState(false);
  const [reasonSoldOut, setReasonSoldOut] = useState(false);
  const [reasonCanceled, setReasonCanceled] = useState(false);
  const [reasonSuspended, setReasonSuspended] = useState(false);
  const [reasonNotAvailable, setReasonNotAvailable] = useState(false);


  useEffect(() => {
    const eventAvailability = (disponibilidad) => {
      // Verificar si alguna fecha tiene availabilitLevel "GOOD"
      const hasGoodAvailability = disponibilidad.some(
        (fecha) => fecha.availabilitLevel === "GOOD"
      );
      setAvailabilityGood(hasGoodAvailability);

      // Verificar los reasons en caso de que no haya disponibilidad "GOOD"
      const hasSoldOut = disponibilidad.every(
        (fecha) =>
          (fecha.availabilitLevel === "NONE" ||
            fecha.availabilitLevel === "LIMITED") &&
          fecha.reason === "SOLD_OUT"
      );
      setReasonSoldOut(hasSoldOut);

      const hasCanceled = disponibilidad.every(
        (fecha) =>
          (fecha.availabilitLevel === "NONE" ||
            fecha.availabilitLevel === "LIMITED") &&
          fecha.reason === "CANCELED"
      );
      setReasonCanceled(hasCanceled);

      const hasSuspended = disponibilidad.every(
        (fecha) =>
          (fecha.availabilitLevel === "NONE" ||
            fecha.availabilitLevel === "LIMITED") &&
          fecha.reason === "SUSPENDED"
      );
      setReasonSuspended(hasSuspended);

      const hasNotAvailable = disponibilidad.every(
        (fecha) =>
          (fecha.availabilitLevel === "NONE" ||
            fecha.availabilitLevel === "LIMITED") &&
          (fecha.reason !== "SUSPENDED" ||
            fecha.reason === "CANCELED" ||
            fecha.reason === "SOLD_OUT")
      );
      setReasonNotAvailable(hasNotAvailable);
    };
    eventAvailability(disponibility);
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
        {availabilityGood ? (
          <EventAvailable linkEvento={linkEvento} img={img} title={title} />
        ) : reasonNotAvailable ? (
          <EventNotAvailable img={img} title={title} />
        ) : 
          !availabilityGood &&
          !reasonSoldOut &&
          !reasonCanceled &&
          !reasonSuspended &&
          !reasonNotAvailable ? (
          <EventNotAvailable img={img} title={title} />
        ) : (
          <EventNotForSale
            linkEvento={linkEvento}
            img={img}
            title={title}
            disponibility={disponibility}
            reasonSuspended={reasonSuspended}
            reasonCanceled={reasonCanceled}
            reasonSoldOut={reasonSoldOut}
          />
        )}
      </div>
    </article>
  );
};
