import {
  EventAvailable,
  EventLimited,
  EventNotAvailable,
  EventNotForSale,
} from "./eventDisponibility";

export const CardEvento = ({ img = "", title = "", linkEvento = "", data }) => {
  // console.log({ name: data.name });
  // console.log({disponibility})
  // console.log(data.name.toLowerCase().includes("julieta") && data)
  console.log({data})

  return (
    <article className="text-center pt-4">
      {data.disponibility === "GOOD" ? (
        <EventAvailable
          linkEvento={linkEvento}
          img={img}
          title={title}
          data={data}
        />
      ) : data.disponibility === "LIMITED" ? (
        <EventLimited
          linkEvento={linkEvento}
          img={img}
          title={title}
          data={data}
        />
      ) : data.disponibility === "SOLD_OUT" ? (
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
      ) : data.disponibility === "SUSPENDED" ? (
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
      ) : data.disponibility === "CANCELED" ? (
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
      ) : (
        <EventNotAvailable img={img} title={title} />
      )}
    </article>
  );
};
