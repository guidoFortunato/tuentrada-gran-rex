import { useContext } from "react";
import { CardEvento } from "./";
import { EventosContext } from "../context/EventosProvider";

export const EventosHome = () => {
  const { eventosGenerales } = useContext(EventosContext);
  // console.log({eventosGenerales})
  return (
    <>
      {eventosGenerales?.map((item) => {
        // console.log({item})
        // if (item.stateSTX === "RUNNING") {
          return (
            <CardEvento
              linkEvento={item.slug}
              imgApi={item.intermedia}
              title={item.name}
              key={item.id}
              data={item}
              imgSTXVeryLarge={item.stxImagXLarge}
              internalState={item.internalState}
            />
          );
        // }
      })}
    </>
  );
};
