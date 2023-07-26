import { useContext } from "react";
import { CardEvento } from "./";
import { EventosContext } from "../context/EventosProvider";

export const EventosHome = () => {
  const { eventosGenerales } = useContext(EventosContext);
  // console.log({eventosGenerales})
  return (
    <>
      {eventosGenerales.map((item) => (
        <CardEvento
          linkEvento={item.slug + "/" + item.id}
          img={item.image}
          status={item.state}
          title={item.name}
          key={item.id}
          disabled={item.disabled}
          reason={item.reason}
          disponibility={item.disponibility}
          data={item}
        />
      ))}
    </>
  );
};
