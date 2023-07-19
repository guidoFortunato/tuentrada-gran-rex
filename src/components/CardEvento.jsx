import { useEffect, useState } from "react";
import {
  EventAvailable,
  EventLimited,
  EventNotAvailable,
  EventNotForSale,
} from "./eventDisponibility";

export const CardEvento = ({
  img = "",
  title = "",
  linkEvento = "",
  disponibility,
  data,
}) => {
  const [availabilityGood, setAvailabilityGood] = useState(false);
  const [availabilityLimited, setAvailabilityLimited] = useState(false);
  const [reasonSoldOut, setReasonSoldOut] = useState(false);
  const [reasonCanceled, setReasonCanceled] = useState(false);
  const [reasonSuspended, setReasonSuspended] = useState(false);
  const [reasonNotAvailable, setReasonNotAvailable] = useState(false);
  // console.log({data})
  // console.log({disponibility})

  useEffect(() => {
    // console.log(disponibility)
    const eventAvailability = (disponibilidad) => {
      // Verificar si alguna fecha tiene availabilitLevel "GOOD"
      const hasGoodAvailability = disponibilidad.some(
        (fecha) => fecha.availabilitLevel === "GOOD"
      );
      setAvailabilityGood(hasGoodAvailability);

      // Verificar si alguna fecha tiene availabilitLevel "LIMITED"
      const hasLimitedAvailability = disponibilidad.some(
        (fecha) => fecha.availabilitLevel === "LIMITED"
      );
      setAvailabilityLimited(hasLimitedAvailability);

      // Verificar los reasons en caso de que no haya disponibilidad "GOOD"
      const hasSoldOut = disponibilidad.every(
        (fecha) =>
          fecha.availabilitLevel === "NONE" && fecha.reason === "SOLD_OUT"
      );
      setReasonSoldOut(hasSoldOut);

      const hasCanceled = disponibilidad.every(
        (fecha) =>
          fecha.availabilitLevel === "NONE" && fecha.reason === "CANCELED"
      );
      setReasonCanceled(hasCanceled);

      const hasSuspended = disponibilidad.every(
        (fecha) =>
          fecha.availabilitLevel === "NONE" && fecha.reason === "SUSPENDED"
      );
      setReasonSuspended(hasSuspended);

      const hasNotAvailable = disponibilidad.every(
        (fecha) =>
          fecha.availabilitLevel === "NONE" &&
          (fecha.reason !== "SUSPENDED" ||
            fecha.reason !== "CANCELED" ||
            fecha.reason !== "SOLD_OUT")
      );
      setReasonNotAvailable(hasNotAvailable);
    };
    eventAvailability(disponibility);
  }, []);

  return (
    <article className="text-center pt-4">

      {
        availabilityGood ? (
          <EventAvailable
            linkEvento={linkEvento}
            img={img}
            title={title}
            data={data}
          />
        ) : 
        availabilityLimited ? (
          <EventLimited
            linkEvento={linkEvento}
            img={img}
            title={title}
            data={data}
          />
        ) :
        reasonSoldOut ? (
          <EventNotForSale
            linkEvento={linkEvento}
            img={img}
            title={title}
            disponibility={disponibility}
            reasonSuspended={reasonSuspended}
            reasonCanceled={reasonCanceled}
            reasonSoldOut={reasonSoldOut}
            data={data}
          />
        ) : 
        reasonSuspended ? (
          <EventNotForSale
            linkEvento={linkEvento}
            img={img}
            title={title}
            disponibility={disponibility}
            reasonSuspended={reasonSuspended}
            reasonCanceled={reasonCanceled}
            reasonSoldOut={reasonSoldOut}
            data={data}
          />
        ) : 
        reasonCanceled ? (
          <EventNotForSale
            linkEvento={linkEvento}
            img={img}
            title={title}
            disponibility={disponibility}
            reasonSuspended={reasonSuspended}
            reasonCanceled={reasonCanceled}
            reasonSoldOut={reasonSoldOut}
            data={data}
          />
        ) : reasonNotAvailable ?  <EventNotAvailable img={img} title={title} /> : <EventNotAvailable img={img} title={title} />

      }
    </article>
  );
};
