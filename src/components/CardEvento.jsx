import { EventAvailable } from "./disponibility";

export const CardEvento = ({ imgApi = "", title = "", linkEvento = "", data = "", imgSTXLarge = "" }) => {
  // console.log({ name: data.name });
  // console.log({disponibility})
  // console.log(data.name.toLowerCase().includes("julieta") && data)
  console.log({ data });

  return (
    <article className="text-center pt-4">
      <EventAvailable
        linkEvento={linkEvento}
        imgApi={imgApi}
        imgSTXLarge={imgSTXLarge}
        title={title}
        disponibility={data.disponibility}
      />
      {/* {data.disponibility === "GOOD" ? (
        <EventAvailable
          linkEvento={linkEvento}
          imgApi={imgApi}
          imgSTXLarge={imgSTXLarge}
          imgSTXVeryLarge={imgSTXVeryLarge}
          title={title}
          data={data}
        />
      ) : data.disponibility === "LIMITED" ? (
        <EventLimited
          linkEvento={linkEvento}
          imgApi={imgApi}
          imgSTXLarge={imgSTXLarge}
          imgSTXVeryLarge={imgSTXVeryLarge}
          title={title}
          data={data}
        />
      ) : data.disponibility === "SOLD_OUT" ? (
        <EventNotForSale
          linkEvento={linkEvento}
          imgApi={imgApi}
          imgSTXLarge={imgSTXLarge}
          imgSTXVeryLarge={imgSTXVeryLarge}
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
          imgApi={imgApi}
          imgSTXLarge={imgSTXLarge}
          imgSTXVeryLarge={imgSTXVeryLarge}
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
          imgApi={imgApi}
          imgSTXLarge={imgSTXLarge}
          imgSTXVeryLarge={imgSTXVeryLarge}
          title={title}
          disponibility={disponibility}
          reasonSuspended={reasonSuspended}
          reasonCanceled={reasonCanceled}
          reasonSoldOut={reasonSoldOut}
          data={data}
        />
      ) : (
        <EventNotAvailable
          imgApi={imgApi}
          imgSTXLarge={imgSTXLarge}
          imgSTXVeryLarge={imgSTXVeryLarge}
          title={title}
        />
      )} */}
    </article>
  );
};
